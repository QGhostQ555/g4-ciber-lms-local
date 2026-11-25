/**
 * ============================================================================
 * COMPONENTES INTERACTIVOS DEL MÓDULO 3 (CIS v8.1): src/js/module3Components.js
 * Renderiza dinámicamente los 8 Procesos Pedagógicos del Módulo 3.
 * ============================================================================
 */

(function () {
  function escapeHtml(str) {
    if (typeof str !== 'string') return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // --------------------------------------------------------------------------
  // 1. PROCESO INICIA (5-10 MIN) - CASO DETONANTE
  // --------------------------------------------------------------------------
  function renderMod3Inicia(state, mod3) {
    const inicia = mod3.inicia;
    const selectedOpt = inicia.reflectionOptions.find(
      (o) => o.id === state.mod3IniciaSelectedOption
    );

    const optsHtml = inicia.reflectionOptions
      .map((opt) => {
        const isSel = state.mod3IniciaSelectedOption === opt.id;
        let cardClass =
          'bg-slate-950/70 border-slate-800 text-slate-200 hover:bg-slate-800/80';
        if (isSel) {
          cardClass = opt.isOptimalInsight
            ? 'bg-emerald-950/40 border-emerald-500 text-white shadow-lg'
            : 'bg-amber-950/40 border-amber-500 text-white shadow-lg';
        }
        return `
          <button
            type="button"
            data-action="select-mod3-inicia-option"
            data-option-id="${opt.id}"
            class="p-5 rounded-xl border text-left transition-all flex flex-col justify-between gap-3 cursor-pointer ${cardClass}"
          >
            <div class="space-y-2">
              <div class="flex items-center justify-between gap-2">
                <span class="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-slate-800 text-emerald-300">
                  ${escapeHtml(opt.label)}
                </span>
                ${
                  isSel
                    ? `<i data-lucide="check-circle-2" class="w-4 h-4 ${
                        opt.isOptimalInsight
                          ? 'text-emerald-400'
                          : 'text-amber-400'
                      }"></i>`
                    : ''
                }
              </div>
              <p class="text-sm font-bold leading-snug pt-1">${escapeHtml(
                opt.title
              )}</p>
            </div>
            <span class="text-xs text-emerald-400 font-semibold">
              ${isSel ? 'Opción seleccionada' : 'Evaluar esta estrategia →'}
            </span>
          </button>
        `;
      })
      .join('');

    let feedbackHtml = '';
    if (selectedOpt) {
      const badges = selectedOpt.controlsInvolved
        .map(
          (c) => `
          <span class="text-xs font-semibold px-3 py-1 rounded-lg bg-slate-900/90 text-emerald-300 border border-slate-700">
            ${escapeHtml(c)}
          </span>
        `
        )
        .join('');

      feedbackHtml = `
        <div class="p-6 rounded-2xl border space-y-4 fade-in-view ${
          selectedOpt.isOptimalInsight
            ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-100'
            : 'bg-amber-950/30 border-amber-500/40 text-amber-100'
        }">
          <div class="flex items-center justify-between flex-wrap gap-2">
            <h4 class="text-base sm:text-lg font-extrabold text-white flex items-center gap-2">
              <i data-lucide="${
                selectedOpt.isOptimalInsight
                  ? 'check-circle-2'
                  : 'alert-triangle'
              }" class="w-5 h-5 ${
        selectedOpt.isOptimalInsight ? 'text-emerald-400' : 'text-amber-400'
      }"></i>
              <span>${escapeHtml(selectedOpt.feedbackTitle)}</span>
            </h4>
            <span class="text-xs font-bold uppercase px-2.5 py-1 rounded bg-slate-900/90 text-emerald-300 border border-slate-700">
              Análisis CIS Controls v8.1
            </span>
          </div>
          <p class="text-sm sm:text-base leading-relaxed text-slate-100">
            ${escapeHtml(selectedOpt.feedbackBody)}
          </p>
          <div class="flex flex-wrap gap-2 pt-1">${badges}</div>
        </div>
      `;
    }

    const statsHtml = inicia.keyStats
      .map(
        (st) => `
        <div class="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
          <span class="text-xs text-slate-400 font-semibold uppercase">${escapeHtml(
            st.label
          )}</span>
          <p class="text-2xl font-extrabold text-emerald-400 mt-1">${escapeHtml(
            st.value
          )}</p>
          <p class="text-xs text-slate-300 mt-1 leading-relaxed">${escapeHtml(
            st.context
          )}</p>
        </div>
      `
      )
      .join('');

    return `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-emerald-950/60 via-slate-900 to-slate-900 border border-emerald-500/30 rounded-2xl p-5 sm:p-6">
          <span class="text-xs font-bold uppercase tracking-wider text-emerald-400">
            Objetivo de Aprendizaje del Módulo 3
          </span>
          <p class="text-sm sm:text-base text-white font-medium mt-1.5 leading-relaxed">
            ${escapeHtml(inicia.objective)}
          </p>
        </div>

        <div class="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
          <div class="flex items-start gap-3.5">
            <div class="p-3 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 shrink-0">
              <i data-lucide="shield-alert" class="w-6 h-6"></i>
            </div>
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Caso Detonante • Priorización Inteligente
              </span>
              <h3 class="text-xl font-bold text-white mt-0.5">${escapeHtml(
                inicia.caseTitle
              )}</h3>
            </div>
          </div>

          <blockquote class="p-5 rounded-xl bg-slate-950 border-l-4 border-l-emerald-500 text-sm sm:text-base text-slate-100 italic leading-relaxed">
            &ldquo;${escapeHtml(inicia.caseScenario)}&rdquo;
          </blockquote>

          <div class="space-y-4">
            <div class="flex items-center gap-2">
              <i data-lucide="help-circle" class="w-5 h-5 text-amber-400 shrink-0"></i>
              <h4 class="text-base sm:text-lg font-bold text-amber-300">
                Pregunta detonante: ${escapeHtml(inicia.triggerQuestion)}
              </h4>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">${optsHtml}</div>
          </div>

          ${feedbackHtml}

          <div class="p-4 rounded-xl bg-slate-950/90 border border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed">
            <strong class="text-emerald-400">Síntesis del Caso Detonante: </strong>
            ${escapeHtml(inicia.holisticSynthesis)}
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">${statsHtml}</div>
      </div>
    `;
  }

  // --------------------------------------------------------------------------
  // 2. PROCESO APRENDE (60-90 MIN) - 4 LECCIONES + EXPLORADOR DE 18 CONTROLES
  // --------------------------------------------------------------------------
  function renderMod3Aprende(state, mod3) {
    const activeLessonId = state.activeView.lessonId || 'leccion-3-1';
    const currentLesson =
      mod3.aprende.find((l) => l.id === activeLessonId) || mod3.aprende[0];
    const isLessonDone = Boolean(
      state.completedLessonsMod3 && state.completedLessonsMod3[currentLesson.id]
    );
    const noteText =
      (state.lessonNotesMod3 && state.lessonNotesMod3[currentLesson.id]) || '';

    const tabsHtml = mod3.aprende
      .map((les) => {
        const isSel = les.id === currentLesson.id;
        const done = Boolean(
          state.completedLessonsMod3 && state.completedLessonsMod3[les.id]
        );
        return `
          <button
            type="button"
            data-action="select-mod3-lesson"
            data-lesson-id="${les.id}"
            class="text-left p-3.5 rounded-xl border transition-all flex flex-col justify-between gap-2 cursor-pointer ${
              isSel
                ? 'bg-emerald-600/20 border-emerald-500 text-white shadow-lg'
                : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:bg-slate-800/70'
            }"
          >
            <div class="flex items-center justify-between gap-2">
              <span class="text-xs font-bold text-emerald-400">${escapeHtml(
                les.code
              )}</span>
              <div class="flex items-center gap-1.5">
                <span class="text-[11px] font-mono text-slate-400">${escapeHtml(
                  les.duration
                )}</span>
                ${
                  done
                    ? '<i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-400"></i>'
                    : ''
                }
              </div>
            </div>
            <p class="text-xs font-semibold leading-snug line-clamp-2">${escapeHtml(
              les.title
            )}</p>
          </button>
        `;
      })
      .join('');

    const keyConceptsHtml = (currentLesson.keyConcepts || [])
      .map(
        (kc) => `
        <div class="bg-slate-950/80 border border-slate-800 rounded-xl p-4 space-y-2">
          <div class="flex items-center justify-between gap-2">
            <h4 class="text-sm font-bold text-white">${escapeHtml(kc.title)}</h4>
            <span class="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 shrink-0">
              ${escapeHtml(kc.tag)}
            </span>
          </div>
          <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">${escapeHtml(
            kc.description
          )}</p>
        </div>
      `
      )
      .join('');

    let specificHtml = '';

    // LECCIÓN 3.2: Explorador Interactivo de los 18 Controles
    if (currentLesson.controlsCatalog) {
      const groupFilter = state.mod3ControlsGroupFilter || 'TODOS';
      const searchQ = (state.mod3ControlsSearch || '').trim().toLowerCase();
      const focusGroups = [
        'TODOS',
        'Visibilidad y Fundamentos',
        'Protección de Datos y Configuraciones',
        'Identidades y Accesos',
        'Vulnerabilidades, Logs y Amenazas',
        'Resiliencia y Red',
        'Cultura, Terceros, Software y Respuesta',
      ];

      const groupBtns = focusGroups
        .map((grp) => {
          const isAct = groupFilter === grp;
          return `
            <button
              type="button"
              data-action="filter-mod3-controls-group"
              data-group="${escapeHtml(grp)}"
              class="px-3 py-1.5 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                isAct
                  ? 'bg-emerald-600 text-white border-emerald-400'
                  : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'
              }"
            >${escapeHtml(grp)}</button>
          `;
        })
        .join('');

      const filtered = currentLesson.controlsCatalog.filter((ctrl) => {
        const matchesGroup =
          groupFilter === 'TODOS' || ctrl.focusGroup === groupFilter;
        const matchesSearch =
          !searchQ ||
          ctrl.title.toLowerCase().includes(searchQ) ||
          ctrl.code.toLowerCase().includes(searchQ) ||
          ctrl.purpose.toLowerCase().includes(searchQ) ||
          ctrl.keySafeguards.some((s) => s.toLowerCase().includes(searchQ));
        return matchesGroup && matchesSearch;
      });

      const cards = filtered
        .map(
          (ctrl) => `
          <div class="p-5 rounded-xl bg-slate-950 border border-slate-800 hover:border-emerald-500/40 transition-all space-y-3">
            <div class="flex items-center justify-between gap-2 flex-wrap">
              <div class="flex items-center gap-2">
                <span class="text-xs font-mono font-extrabold px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  ${escapeHtml(ctrl.code)}
                </span>
                <span class="text-[11px] text-slate-400">${escapeHtml(
                  ctrl.focusGroup
                )}</span>
              </div>
              <span class="text-xs font-bold px-2.5 py-0.5 rounded bg-slate-900 text-cyan-300 border border-slate-700">
                ${ctrl.safeguardsCount} Salvaguardas
              </span>
            </div>

            <h5 class="text-base font-bold text-white">${escapeHtml(
              ctrl.title
            )}</h5>
            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">${escapeHtml(
              ctrl.purpose
            )}</p>

            <div class="flex flex-wrap gap-2 text-[11px] font-mono">
              <span class="px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-300 border border-emerald-500/30">
                IG1: ${ctrl.ig1Count}
              </span>
              <span class="px-2 py-0.5 rounded bg-cyan-950/60 text-cyan-300 border border-cyan-500/30">
                IG2 acum: ${ctrl.ig2Count}
              </span>
              <span class="px-2 py-0.5 rounded bg-purple-950/60 text-purple-300 border border-purple-500/30">
                IG3 total: ${ctrl.ig3Count}
              </span>
            </div>

            <div class="pt-2 border-t border-slate-800/80 space-y-1">
              <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                Salvaguardas clave:
              </span>
              ${ctrl.keySafeguards
                .map(
                  (sg) => `
                <div class="text-xs text-slate-300 bg-slate-900/90 border border-slate-800/80 rounded px-2.5 py-1">
                  ${escapeHtml(sg)}
                </div>
              `
                )
                .join('')}
            </div>
          </div>
        `
        )
        .join('');

      specificHtml = `
        <div class="space-y-4 pt-2">
          <div class="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-3">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span class="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  Explorador Interactivo Oficial • 18 Controles / 153 Salvaguardas
                </span>
                <h4 class="text-base font-bold text-white">
                  Filtra por bloque temático o busca por palabra clave (ej. MFA, SIEM, Nube, Malware)
                </h4>
              </div>
              <input
                type="text"
                id="mod3-controls-search-input"
                data-action="mod3-controls-search"
                value="${escapeHtml(state.mod3ControlsSearch || '')}"
                placeholder="Buscar control o salvaguarda..."
                class="px-3.5 py-2 rounded-lg bg-slate-900 border border-slate-700 text-xs sm:text-sm text-white focus:outline-none focus:border-emerald-500 sm:w-64"
              />
            </div>
            <div class="flex flex-wrap gap-1.5">${groupBtns}</div>
            <p class="text-xs text-slate-400">
              Mostrando <strong class="text-emerald-400">${
                filtered.length
              }</strong> de 18 controles oficiales.
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">${cards}</div>
        </div>
      `;
    }

    // LECCIÓN 3.3: Grupos de Implementación (IG1, IG2, IG3)
    if (currentLesson.implementationGroups) {
      const igCards = currentLesson.implementationGroups
        .map(
          (ig) => `
          <div class="p-5 rounded-xl bg-slate-950 border border-emerald-500/30 space-y-4">
            <div class="flex items-center justify-between flex-wrap gap-2">
              <span class="text-xs font-mono font-extrabold px-3 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                ${escapeHtml(ig.id)}
              </span>
              <span class="text-sm font-extrabold text-cyan-300">
                ${ig.safeguardsCumulative} Salvaguardas acumuladas (${
            ig.percentageOfTotal
          }% del total)
              </span>
            </div>
            <h5 class="text-base sm:text-lg font-bold text-white">${escapeHtml(
              ig.name
            )}</h5>
            <div class="w-full h-2.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
              <div class="h-full bg-gradient-to-r from-emerald-500 to-cyan-400" style="width: ${
                ig.percentageOfTotal
              }%"></div>
            </div>
            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
              <strong class="text-white">Perfil de Organización: </strong>${escapeHtml(
                ig.targetOrgProfile
              )}
            </p>
            <p class="text-xs sm:text-sm text-emerald-200 leading-relaxed">
              <strong class="text-emerald-400">Objetivo Defensivo: </strong>${escapeHtml(
                ig.defenseGoal
              )}
            </p>
            <div class="space-y-1.5 pt-2 border-t border-slate-800">
              <span class="text-[10px] font-bold uppercase text-slate-400 block">Salvaguardas representativas:</span>
              ${ig.representativeExamples
                .map(
                  (ex) => `
                <div class="text-xs bg-slate-900 border border-slate-800 rounded px-3 py-1.5 text-slate-200">
                  ${escapeHtml(ex)}
                </div>
              `
                )
                .join('')}
            </div>
          </div>
        `
        )
        .join('');

      specificHtml = `
        <div class="space-y-4 pt-2">
          <h4 class="text-base sm:text-lg font-bold text-white">
            Escalera Acumulativa de Grupos de Implementación (IG1 → IG2 → IG3)
          </h4>
          <div class="grid grid-cols-1 gap-4">${igCards}</div>
        </div>
      `;
    }

    // LECCIÓN 3.4: Novedades de CIS Controls v8.1
    if (currentLesson.v81Updates) {
      const updCards = currentLesson.v81Updates
        .map(
          (u) => `
          <div class="p-5 rounded-xl bg-slate-950 border border-cyan-500/30 space-y-2.5">
            <div class="flex items-center justify-between gap-2 flex-wrap">
              <h5 class="text-base font-bold text-white">${escapeHtml(
                u.title
              )}</h5>
              <span class="text-[11px] font-bold px-2.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                ${escapeHtml(u.badge)}
              </span>
            </div>
            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">${escapeHtml(
              u.detail
            )}</p>
            <div class="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-200">
              <strong>Beneficio Práctico: </strong>${escapeHtml(
                u.practicalBenefit
              )}
            </div>
          </div>
        `
        )
        .join('');

      specificHtml = `
        <div class="space-y-4 pt-2">
          <h4 class="text-base sm:text-lg font-bold text-white">
            Los 3 Pilares de Actualización en CIS Controls v8.1
          </h4>
          <div class="grid grid-cols-1 gap-4">${updCards}</div>
        </div>
      `;
    }

    const nextMap = {
      'leccion-3-1': 'leccion-3-2',
      'leccion-3-2': 'leccion-3-3',
      'leccion-3-3': 'leccion-3-4',
    };
    const nextLessonId = nextMap[currentLesson.id] || null;

    return `
      <div class="space-y-6">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">${tabsHtml}</div>

        <div class="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  ${escapeHtml(currentLesson.code)}
                </span>
                <span class="text-xs text-slate-400 font-mono">
                  Duración estimada: ${escapeHtml(currentLesson.duration)}
                </span>
              </div>
              <h3 class="text-xl sm:text-2xl font-bold text-white mt-2">
                ${escapeHtml(currentLesson.title)}
              </h3>
            </div>

            <button
              type="button"
              data-action="toggle-mod3-lesson-completed"
              data-lesson-id="${currentLesson.id}"
              class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                isLessonDone
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                  : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg'
              }"
            >
              <i data-lucide="check-circle-2" class="w-4 h-4"></i>
              <span>${
                isLessonDone
                  ? 'Lección Completada'
                  : 'Marcar Lección como Completada'
              }</span>
            </button>
          </div>

          <p class="text-sm sm:text-base text-slate-200 leading-relaxed">
            ${escapeHtml(currentLesson.summary)}
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">${keyConceptsHtml}</div>

          ${specificHtml}

          <div class="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs sm:text-sm text-emerald-200 leading-relaxed">
            <strong class="text-emerald-400">Idea Fuerza (${escapeHtml(
              currentLesson.code
            )}): </strong>
            ${escapeHtml(currentLesson.takeaway)}
          </div>

          <div class="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-3">
            <div class="flex items-center justify-between flex-wrap gap-2">
              <label for="note-${currentLesson.id}" class="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                <i data-lucide="file-text" class="w-4 h-4 text-emerald-400"></i>
                Mis Apuntes de Estudio (${escapeHtml(
                  currentLesson.code
                )}) • Guardado automático
              </label>
              ${
                nextLessonId
                  ? `
                <button
                  type="button"
                  data-action="complete-and-next-mod3-lesson"
                  data-current-lesson-id="${currentLesson.id}"
                  data-next-lesson-id="${nextLessonId}"
                  class="text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1 cursor-pointer"
                >
                  <span>Guardar e ir a la siguiente lección</span>
                  <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
                </button>
              `
                  : ''
              }
            </div>
            <textarea
              id="note-${currentLesson.id}"
              data-action="mod3-lesson-note-input"
              data-lesson-id="${currentLesson.id}"
              rows="3"
              placeholder="Anota aquí qué controles CIS v8.1 o salvaguardas IG1 aplicarías primero..."
              class="w-full rounded-lg bg-slate-900 border border-slate-800 p-3 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-emerald-500"
            >${escapeHtml(noteText)}</textarea>
          </div>
        </div>
      </div>
    `;
  }

  // --------------------------------------------------------------------------
  // 3. PROCESO OBSERVA (20-40 MIN)
  // --------------------------------------------------------------------------
  function renderMod3Observa(state, mod3) {
    const v1 = mod3.observa.video1;
    const v2 = mod3.observa.video2;

    const toolsRows = v1.discoveryToolsTable
      .map(
        (t) => `
        <tr class="hover:bg-slate-900/60">
          <td class="p-3 font-bold text-white">${escapeHtml(t.toolType)}</td>
          <td class="p-3 font-mono text-emerald-400">${escapeHtml(
            t.cisSafeguard
          )}</td>
          <td class="p-3 text-slate-300">${escapeHtml(t.howItWorks)}</td>
          <td class="p-3 text-amber-200">${escapeHtml(t.prosAndLimits)}</td>
        </tr>
      `
      )
      .join('');

    const cp1Ans = state.mod3ObservaCheckpoints[v1.id];
    const cp1Opts = v1.checkpointQuestion.options
      .map((opt, idx) => {
        const isAns = typeof cp1Ans === 'number';
        const isCor = idx === v1.checkpointQuestion.correctIndex;
        const isSel = cp1Ans === idx;
        let cls =
          'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800';
        if (isAns) {
          if (isCor) {
            cls =
              'bg-emerald-500/20 border-emerald-500 text-emerald-200 font-semibold';
          } else if (isSel) {
            cls = 'bg-rose-500/20 border-rose-500 text-rose-200';
          }
        }
        return `
          <button
            type="button"
            data-action="answer-mod3-observa-checkpoint"
            data-video-id="${v1.id}"
            data-option-index="${idx}"
            class="text-left p-3 rounded-lg border text-xs transition-all cursor-pointer ${cls}"
          >${escapeHtml(opt)}</button>
        `;
      })
      .join('');

    const mfaCards = v2.mfaScenarios
      .map(
        (m) => `
        <div class="p-4 rounded-xl border space-y-2 ${
          m.isSecure
            ? 'bg-emerald-950/20 border-emerald-500/40'
            : 'bg-rose-950/30 border-rose-500/40'
        }">
          <div class="flex items-center justify-between gap-2 flex-wrap">
            <h5 class="text-xs sm:text-sm font-bold text-white">${escapeHtml(
              m.label
            )}</h5>
            <span class="text-[10px] font-bold px-2 py-0.5 rounded ${
              m.isSecure
                ? 'bg-emerald-500/20 text-emerald-300'
                : 'bg-rose-500/20 text-rose-300'
            }">${escapeHtml(m.badge)}</span>
          </div>
          <p class="text-xs text-slate-300"><strong>Vector: </strong>${escapeHtml(
            m.attackVector
          )}</p>
          <p class="text-xs ${
            m.isSecure ? 'text-emerald-200' : 'text-rose-200'
          }"><strong>Resultado: </strong>${escapeHtml(m.outcome)}</p>
        </div>
      `
      )
      .join('');

    const cp2Ans = state.mod3ObservaCheckpoints[v2.id];
    const cp2Opts = v2.checkpointQuestion.options
      .map((opt, idx) => {
        const isAns = typeof cp2Ans === 'number';
        const isCor = idx === v2.checkpointQuestion.correctIndex;
        const isSel = cp2Ans === idx;
        let cls =
          'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800';
        if (isAns) {
          if (isCor) {
            cls =
              'bg-emerald-500/20 border-emerald-500 text-emerald-200 font-semibold';
          } else if (isSel) {
            cls = 'bg-rose-500/20 border-rose-500 text-rose-200';
          }
        }
        return `
          <button
            type="button"
            data-action="answer-mod3-observa-checkpoint"
            data-video-id="${v2.id}"
            data-option-index="${idx}"
            class="text-left p-3 rounded-lg border text-xs transition-all cursor-pointer ${cls}"
          >${escapeHtml(opt)}</button>
        `;
      })
      .join('');

    return `
      <div class="space-y-8">
        <!-- VIDEO 1 -->
        <div class="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
          <div class="p-5 sm:p-6 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Video 1 (${escapeHtml(v1.duration)}) • Control 01 y Control 02
              </span>
              <h3 class="text-lg sm:text-xl font-bold text-white mt-1">${escapeHtml(
                v1.title
              )}</h3>
            </div>
            <a
              href="${v1.youtubeFallbackUrl}"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-emerald-300 border border-slate-700 shrink-0"
            >
              <span>Búsqueda auxiliar en YouTube</span>
              <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
            </a>
          </div>

          <div class="grid grid-cols-1 xl:grid-cols-12">
            <div class="xl:col-span-5 bg-slate-950 flex flex-col justify-between p-4 space-y-3">
              ${window.LMS_CAMPUS_VIEWS.renderYouTubeEmbedPlayer({
                videoKey: v1.id,
                defaultUrlOrId: v1.embedUrl,
                title: v1.title,
                fallbackSearchUrl: v1.youtubeFallbackUrl,
                customUrls: state.customVideoUrls,
              })}
              <div class="pt-2 border-t border-slate-800 text-xs text-slate-300 leading-relaxed">
                ${escapeHtml(v1.summary)}
              </div>
            </div>

            <div class="xl:col-span-7 p-5 sm:p-6 space-y-4 border-t xl:border-t-0 xl:border-l border-slate-800">
              <div>
                <span class="text-xs font-bold uppercase tracking-wider text-cyan-400">
                  Ficha Técnica Comparativa
                </span>
                <h4 class="text-base font-bold text-white mt-0.5">
                  Herramientas de Descubrimiento Activo/Pasivo y Allowlisting (Controles 01 y 02)
                </h4>
              </div>
              <div class="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950">
                <table class="w-full text-left text-xs">
                  <thead class="bg-slate-900 text-slate-400 uppercase border-b border-slate-800">
                    <tr>
                      <th class="p-3">Mecanismo / Herramienta</th>
                      <th class="p-3">Salvaguarda CIS</th>
                      <th class="p-3">Funcionamiento</th>
                      <th class="p-3">Alcance / Límite</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-800">${toolsRows}</tbody>
                </table>
              </div>
            </div>
          </div>

          <div class="p-5 bg-slate-950/70 border-t border-slate-800 space-y-3">
            <p class="text-xs sm:text-sm font-bold text-white">
              Comprobación Video 1: ${escapeHtml(v1.checkpointQuestion.question)}
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2">${cp1Opts}</div>
            ${
              typeof cp1Ans === 'number'
                ? `<p class="text-xs text-emerald-300">${escapeHtml(
                    v1.checkpointQuestion.explanation
                  )}</p>`
                : ''
            }
          </div>
        </div>

        <!-- VIDEO 2 -->
        <div class="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
          <div class="p-5 sm:p-6 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-cyan-400">
                Video 2 (${escapeHtml(v2.duration)}) • Control 06 (MFA y Credenciales)
              </span>
              <h3 class="text-lg sm:text-xl font-bold text-white mt-1">${escapeHtml(
                v2.title
              )}</h3>
            </div>
            <a
              href="${v2.youtubeFallbackUrl}"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-emerald-300 border border-slate-700 shrink-0"
            >
              <span>Búsqueda auxiliar en YouTube</span>
              <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
            </a>
          </div>

          <div class="grid grid-cols-1 xl:grid-cols-12">
            <div class="xl:col-span-5 bg-slate-950 flex flex-col justify-between p-4 space-y-3">
              ${window.LMS_CAMPUS_VIEWS.renderYouTubeEmbedPlayer({
                videoKey: v2.id,
                defaultUrlOrId: v2.embedUrl,
                title: v2.title,
                fallbackSearchUrl: v2.youtubeFallbackUrl,
                customUrls: state.customVideoUrls,
              })}
              <div class="pt-2 border-t border-slate-800 text-xs text-slate-300 leading-relaxed">
                ${escapeHtml(v2.summary)}
              </div>
            </div>

            <div class="xl:col-span-7 p-5 sm:p-6 space-y-4 border-t xl:border-t-0 xl:border-l border-slate-800">
              <div>
                <span class="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Esquema Visual Comparativo
                </span>
                <h4 class="text-base font-bold text-white mt-0.5">
                  Robo de Credenciales sin MFA vs. Mitigación con Salvaguardas 6.3, 6.4 y 6.5
                </h4>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">${mfaCards}</div>
            </div>
          </div>

          <div class="p-5 bg-slate-950/70 border-t border-slate-800 space-y-3">
            <p class="text-xs sm:text-sm font-bold text-white">
              Comprobación Video 2: ${escapeHtml(v2.checkpointQuestion.question)}
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2">${cp2Opts}</div>
            ${
              typeof cp2Ans === 'number'
                ? `<p class="text-xs text-emerald-300">${escapeHtml(
                    v2.checkpointQuestion.explanation
                  )}</p>`
                : ''
            }
          </div>
        </div>
      </div>
    `;
  }

  // --------------------------------------------------------------------------
  // 4. PROCESO EXPLORA (30-45 MIN)
  // --------------------------------------------------------------------------
  function renderMod3Explora(state, mod3) {
    const exp = mod3.explora;
    const activePhaseNum = state.mod3ActiveIg1Phase || 1;
    const currentPhase =
      exp.ig1Phases.find((p) => p.phaseNumber === activePhaseNum) ||
      exp.ig1Phases[0];

    const phaseBtns = exp.ig1Phases
      .map((ph) => {
        const isSel = ph.phaseNumber === currentPhase.phaseNumber;
        return `
          <button
            type="button"
            data-action="select-mod3-ig1-phase"
            data-phase-number="${ph.phaseNumber}"
            class="p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
              isSel
                ? 'bg-emerald-600/25 border-emerald-500 text-white shadow-md'
                : 'bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-800'
            }"
          >
            <span class="text-[11px] font-mono font-bold text-emerald-400 block">Fase ${
              ph.phaseNumber
            } de 4</span>
            <p class="text-xs font-bold mt-1 line-clamp-2">${escapeHtml(
              ph.title.replace(`Fase ${ph.phaseNumber}: `, '')
            )}</p>
          </button>
        `;
      })
      .join('');

    const docsHtml = exp.officialDocuments
      .map(
        (doc) => `
        <div class="bg-slate-950 border border-slate-800 hover:border-emerald-500/40 rounded-xl p-5 flex flex-col justify-between space-y-4 transition-all">
          <div class="space-y-2.5">
            <div class="flex items-center justify-between gap-2">
              <span class="text-[11px] font-bold uppercase px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                ${escapeHtml(doc.badge)}
              </span>
              <span class="text-[11px] text-slate-400 truncate">${escapeHtml(
                doc.organization
              )}</span>
            </div>
            <h4 class="text-base font-bold text-white leading-snug">${escapeHtml(
              doc.title
            )}</h4>
            <p class="text-xs text-slate-300 leading-relaxed">${escapeHtml(
              doc.description
            )}</p>
            <div class="flex flex-wrap gap-1.5 pt-1">
              ${doc.keyTopics
                .map(
                  (t) => `
                <span class="text-[10px] px-2 py-0.5 rounded bg-slate-900 text-emerald-300 border border-slate-800">${escapeHtml(
                  t
                )}</span>
              `
                )
                .join('')}
            </div>
          </div>
          <div class="pt-3 border-t border-slate-800/80 flex items-center justify-between">
            <span class="text-[11px] text-slate-500 font-mono truncate max-w-[60%]">${escapeHtml(
              doc.url
            )}</span>
            <a
              href="${doc.url}"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors"
            >
              <span>Abrir Recurso</span>
              <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
            </a>
          </div>
        </div>
      `
      )
      .join('');

    const igFilter = state.mod3ChecklistIgFilter || 'TODOS';
    const igBtns = ['TODOS', 'IG1', 'IG2', 'IG3']
      .map((ig) => {
        const isAct = igFilter === ig;
        return `
          <button
            type="button"
            data-action="filter-mod3-checklist-ig"
            data-ig="${ig}"
            class="px-3.5 py-1.5 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
              isAct
                ? 'bg-emerald-500 text-slate-950 border-emerald-400'
                : 'bg-slate-900 text-slate-300 border-slate-700 hover:bg-slate-800'
            }"
          >${ig}</button>
        `;
      })
      .join('');

    const filteredChecklist = exp.checklistRows.filter(
      (r) => igFilter === 'TODOS' || r.igGroup === igFilter
    );

    const checklistTableRows = filteredChecklist
      .map(
        (r) => `
        <tr class="hover:bg-slate-900/60">
          <td class="px-3 py-2.5 text-slate-300">${escapeHtml(r.control)}</td>
          <td class="px-3 py-2.5 font-mono font-bold text-emerald-400">${escapeHtml(
            r.safeguardCode
          )}</td>
          <td class="px-3 py-2.5 font-semibold text-white">${escapeHtml(
            r.safeguardTitle
          )}</td>
          <td class="px-3 py-2.5 text-slate-300">${escapeHtml(r.assetClass)}</td>
          <td class="px-3 py-2.5 text-cyan-300 font-mono">${escapeHtml(
            r.securityFunction
          )}</td>
          <td class="px-3 py-2.5">
            <span class="px-2 py-0.5 rounded font-mono font-bold bg-emerald-500/20 text-emerald-300">${escapeHtml(
              r.igGroup
            )}</span>
          </td>
          <td class="px-3 py-2.5 text-amber-300">${escapeHtml(
            r.currentStatus
          )}</td>
          <td class="px-3 py-2.5 text-slate-400">${escapeHtml(
            r.technicalEvidence
          )}</td>
        </tr>
      `
      )
      .join('');

    return `
      <div class="space-y-8">
        <!-- Guía ejecutiva en 4 fases -->
        <div class="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl space-y-5">
          <div>
            <span class="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Lectura Ejecutiva Interactiva • Higiene Cibernética IG1
            </span>
            <h3 class="text-xl font-bold text-white mt-1">${escapeHtml(
              exp.guideTitle
            )}</h3>
            <p class="text-xs sm:text-sm text-slate-400 mt-1">${escapeHtml(
              exp.guideSubtitle
            )}</p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-4 gap-2.5">${phaseBtns}</div>
          <div class="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
            <div class="flex items-center justify-between flex-wrap gap-2">
              <h4 class="text-base sm:text-lg font-bold text-white">${escapeHtml(
                currentPhase.title
              )}</h4>
              <span class="text-xs font-mono px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                ${escapeHtml(currentPhase.controlsInvolved)}
              </span>
            </div>
            <p class="text-xs sm:text-sm text-slate-200 leading-relaxed">${escapeHtml(
              currentPhase.summary
            )}</p>
            <div class="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-200">
              ${escapeHtml(currentPhase.quickWin)}
            </div>
          </div>
        </div>

        <!-- Documentos Oficiales -->
        <div class="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl space-y-5">
          <div>
            <span class="text-xs font-bold uppercase tracking-wider text-cyan-400">
              Fuentes Primarias Oficiales CIS
            </span>
            <h3 class="text-xl font-bold text-white mt-1">
              Biblioteca de Documentos y Herramientas Oficiales CIS Controls v8.1
            </h3>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">${docsHtml}</div>
        </div>

        <!-- Checklist Filtrable + Descarga CSV -->
        <div class="bg-gradient-to-br from-slate-900 via-emerald-950/30 to-slate-900 border border-emerald-500/40 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
          <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div class="space-y-1.5">
              <div class="flex items-center gap-2">
                <span class="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  <i data-lucide="file-spreadsheet" class="w-3.5 h-3.5"></i>
                  Checklist Auditable CIS v8.1
                </span>
                ${
                  state.mod3ChecklistDownloaded
                    ? `<span class="text-xs font-semibold text-emerald-400 flex items-center gap-1">
                        <i data-lucide="check-circle-2" class="w-3.5 h-3.5"></i>
                        Checklist descargado
                      </span>`
                    : ''
                }
              </div>
              <h3 class="text-xl font-bold text-white">${escapeHtml(
                exp.checklistTitle
              )}</h3>
              <p class="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">${escapeHtml(
                exp.checklistDescription
              )}</p>
            </div>

            <button
              type="button"
              data-action="download-mod3-checklist-csv"
              class="inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-extrabold text-xs sm:text-sm shadow-lg shrink-0 transition-all cursor-pointer"
            >
              <i data-lucide="download" class="w-4 h-4"></i>
              <span>Descargar Checklist CIS Controls v8.1 (.CSV para Excel)</span>
            </button>
          </div>

          <div class="flex items-center justify-between flex-wrap gap-3 bg-slate-950/80 p-3.5 rounded-xl border border-slate-800">
            <div class="flex items-center gap-2 flex-wrap">
              <span class="text-xs font-bold text-slate-300">Filtrar por Grupo IG:</span>
              ${igBtns}
            </div>
            <span class="text-xs text-slate-400">
              Mostrando <strong class="text-emerald-400">${
                filteredChecklist.length
              }</strong> salvaguardas clave
            </span>
          </div>

          <div class="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/90 max-h-96 overflow-y-auto">
            <table class="w-full text-left border-collapse text-xs">
              <thead class="sticky top-0 bg-slate-900 text-slate-300 border-b border-slate-800 uppercase">
                <tr>
                  <th class="px-3 py-2.5">Control</th>
                  <th class="px-3 py-2.5">Código</th>
                  <th class="px-3 py-2.5">Título Salvaguarda</th>
                  <th class="px-3 py-2.5">Clase de Activo</th>
                  <th class="px-3 py-2.5">Función</th>
                  <th class="px-3 py-2.5">Grupo IG</th>
                  <th class="px-3 py-2.5">Estado Actual</th>
                  <th class="px-3 py-2.5">Evidencia Técnica</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-800/80">${checklistTableRows}</tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  }

  // --------------------------------------------------------------------------
  // 5. PROCESO PRACTICA (60-90 MIN) - 2 LABORATORIOS INTERACTIVOS
  // --------------------------------------------------------------------------
  function renderMod3Practica(state, mod3) {
    const pr = mod3.practica;
    const act1Answers = state.mod3PracticaAct1Answers || {};
    const act1Items = pr.classificationItems || [];
    const act1AnsweredCount = Object.keys(act1Answers).length;
    const act1CorrectCount = act1Items.filter(
      (i) => act1Answers[i.id] === i.correctGroup
    ).length;

    const act1Cards = act1Items
      .map((item) => {
        const sel = act1Answers[item.id];
        const isAns = Boolean(sel);
        const isCor = sel === item.correctGroup;

        const igBtns = ['IG1', 'IG2', 'IG3']
          .map((ig) => {
            const isPicked = sel === ig;
            let cls =
              'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white';
            if (isAns) {
              if (ig === item.correctGroup) {
                cls =
                  'bg-emerald-500/20 border-emerald-500 text-emerald-200 font-bold';
              } else if (isPicked) {
                cls =
                  'bg-rose-500/20 border-rose-500 text-rose-200 font-semibold';
              }
            }
            return `
              <button
                type="button"
                data-action="mod3-practica-act1-pick"
                data-item-id="${item.id}"
                data-ig-group="${ig}"
                class="px-3 py-2 rounded-lg border text-xs font-bold transition-all cursor-pointer ${cls}"
              >${ig}</button>
            `;
          })
          .join('');

        return `
          <div class="p-4 rounded-xl border space-y-3 ${
            !isAns
              ? 'bg-slate-950/80 border-slate-800'
              : isCor
              ? 'bg-emerald-950/30 border-emerald-500/40'
              : 'bg-rose-950/30 border-rose-500/40'
          }">
            <div class="flex items-center justify-between gap-2">
              <span class="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                Salvaguarda ${escapeHtml(item.safeguardCode)}
              </span>
              ${
                isAns
                  ? `<span class="text-xs font-bold ${
                      isCor ? 'text-emerald-400' : 'text-rose-400'
                    }">${
                      isCor
                        ? '¡Correcto!'
                        : `Pertenece a ${escapeHtml(item.correctGroup)}`
                    }</span>`
                  : ''
              }
            </div>
            <p class="text-sm font-bold text-white leading-snug">${escapeHtml(
              item.statement
            )}</p>
            <div class="grid grid-cols-3 gap-2">${igBtns}</div>
            ${
              isAns
                ? `<p class="text-xs text-slate-300 pt-2 border-t border-slate-800/80 leading-relaxed">${escapeHtml(
                    item.explanation
                  )}</p>`
                : ''
            }
          </div>
        `;
      })
      .join('');

    // Actividad 2: Secuenciador Cronológico de Servidor
    const seqOrder = state.mod3SequencerOrder || [
      'seq-3',
      'seq-1',
      'seq-5',
      'seq-2',
      'seq-4',
    ];
    const seqItemsMap = {};
    pr.sequencerCorrectSteps.forEach((s) => {
      seqItemsMap[s.id] = s;
    });

    let seqCorrectPositions = 0;
    const seqRowsHtml = seqOrder
      .map((seqId, idx) => {
        const item = seqItemsMap[seqId];
        if (!item) return '';
        const isPosCorrect = item.correctOrder === idx + 1;
        if (isPosCorrect) seqCorrectPositions += 1;

        return `
          <div class="p-4 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all ${
            state.mod3SequencerChecked
              ? isPosCorrect
                ? 'bg-emerald-950/30 border-emerald-500/50'
                : 'bg-rose-950/30 border-rose-500/50'
              : 'bg-slate-950 border-slate-800'
          }">
            <div class="flex items-start gap-3">
              <div class="w-9 h-9 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center font-mono font-extrabold text-sm text-emerald-400 shrink-0">
                #${idx + 1}
              </div>
              <div class="space-y-1">
                <span class="text-[11px] font-mono font-bold text-cyan-400">${escapeHtml(
                  item.controlsRef
                )}</span>
                <p class="text-sm font-bold text-white">${escapeHtml(
                  item.title
                )}</p>
                ${
                  state.mod3SequencerChecked
                    ? `<p class="text-xs ${
                        isPosCorrect ? 'text-emerald-300' : 'text-amber-200'
                      }">${escapeHtml(item.rationale)}</p>`
                    : ''
                }
              </div>
            </div>

            <div class="flex items-center gap-2 shrink-0 self-end sm:self-center">
              <button
                type="button"
                data-action="mod3-seq-move"
                data-index="${idx}"
                data-direction="-1"
                ${idx === 0 ? 'disabled' : ''}
                class="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs font-bold text-slate-200 hover:bg-slate-800 disabled:opacity-35 cursor-pointer"
              >↑ Subir</button>
              <button
                type="button"
                data-action="mod3-seq-move"
                data-index="${idx}"
                data-direction="1"
                ${idx === seqOrder.length - 1 ? 'disabled' : ''}
                class="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs font-bold text-slate-200 hover:bg-slate-800 disabled:opacity-35 cursor-pointer"
              >↓ Bajar</button>
            </div>
          </div>
        `;
      })
      .join('');

    return `
      <div class="space-y-8">
        <!-- ACTIVIDAD 1 -->
        <div class="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5">
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Laboratorio 1 • Priorización IG1 / IG2 / IG3
              </span>
              <h3 class="text-xl font-bold text-white mt-1">${escapeHtml(
                pr.activity1Title
              )}</h3>
              <p class="text-xs sm:text-sm text-slate-400 mt-1">${escapeHtml(
                pr.activity1Instructions
              )}</p>
            </div>
            <div class="flex items-center gap-3 shrink-0">
              <div class="px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-right">
                <span class="text-[11px] text-slate-400 block">Puntuación</span>
                <span class="text-lg font-extrabold text-emerald-400">${act1CorrectCount} / ${
      act1Items.length
    } aciertos</span>
              </div>
              <button
                type="button"
                data-action="reset-mod3-practica-act1"
                class="p-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white cursor-pointer"
                title="Reiniciar Actividad 1"
              >
                <i data-lucide="rotate-ccw" class="w-4 h-4"></i>
              </button>
            </div>
          </div>

          <div class="space-y-1.5">
            <div class="flex justify-between text-xs text-slate-400">
              <span>Salvaguardas clasificadas: ${act1AnsweredCount} de ${
      act1Items.length
    }</span>
              <span class="font-bold text-emerald-400">${Math.round(
                (act1CorrectCount / act1Items.length) * 100
              )}% de precisión</span>
            </div>
            <div class="w-full h-2.5 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
              <div
                class="h-full bg-gradient-to-r from-emerald-500 to-cyan-400 transition-all duration-300"
                style="width: ${(act1CorrectCount / act1Items.length) * 100}%"
              ></div>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">${act1Cards}</div>
        </div>

        <!-- ACTIVIDAD 2 -->
        <div class="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5">
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-cyan-400">
                Laboratorio 2 • Secuenciador Cronológico de Despliegue Seguro
              </span>
              <h3 class="text-xl font-bold text-white mt-1">${escapeHtml(
                pr.activity2Title
              )}</h3>
              <p class="text-xs sm:text-sm text-slate-400 mt-1">${escapeHtml(
                pr.activity2Instructions
              )}</p>
            </div>
            <button
              type="button"
              data-action="reset-mod3-sequencer"
              class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-xs font-semibold text-slate-300 cursor-pointer shrink-0"
            >
              <i data-lucide="rotate-ccw" class="w-4 h-4"></i>
              <span>Reiniciar Orden</span>
            </button>
          </div>

          <div class="space-y-3">${seqRowsHtml}</div>

          <div class="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-slate-800">
            <div class="text-xs sm:text-sm text-slate-300">
              ${
                state.mod3SequencerChecked
                  ? `<strong class="${
                      seqCorrectPositions === 5
                        ? 'text-emerald-400'
                        : 'text-amber-300'
                    }">Resultado: ${seqCorrectPositions} de 5 pasos en la posición cronológica exacta.</strong>`
                  : 'Ordena los 5 pasos y haz clic en "Verificar Secuencia CIS".'
              }
            </div>
            <button
              type="button"
              data-action="check-mod3-sequencer"
              class="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 text-white font-bold text-sm shadow-lg cursor-pointer"
            >
              Verificar Secuencia CIS
            </button>
          </div>
        </div>
      </div>
    `;
  }

  // --------------------------------------------------------------------------
  // 6. PROCESO APLICA (30-60 MIN) - SIMULADOR CONTROL DE ACCESO A LA RED
  // --------------------------------------------------------------------------
  function renderMod3Aplica(state, mod3) {
    const ap = mod3.aplica;
    const chosen = ap.options.find(
      (o) => o.id === state.mod3AplicaSelectedOption
    );

    const ctxCards = ap.clinicalContextDetails
      .map(
        (c) => `
        <div class="p-4 rounded-xl bg-slate-950 border border-slate-800">
          <span class="text-xs font-bold uppercase text-emerald-400 block">${escapeHtml(
            c.label
          )}</span>
          <p class="text-xs text-slate-300 mt-1.5 leading-relaxed">${escapeHtml(
            c.detail
          )}</p>
        </div>
      `
      )
      .join('');

    const optsHtml = ap.options
      .map((opt) => {
        const isSel = state.mod3AplicaSelectedOption === opt.id;
        let style =
          'bg-slate-950/90 border-slate-800 hover:border-slate-700 text-slate-200';
        if (isSel) {
          style = opt.isCorrect
            ? 'bg-emerald-950/40 border-emerald-500 text-white shadow-xl'
            : 'bg-rose-950/40 border-rose-500 text-white shadow-xl';
        }
        return `
          <button
            type="button"
            data-action="select-mod3-aplica-option"
            data-option-id="${opt.id}"
            class="p-5 rounded-xl border text-left transition-all flex flex-col justify-between gap-4 cursor-pointer ${style}"
          >
            <div class="space-y-2.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-extrabold uppercase px-2.5 py-0.5 rounded bg-slate-900 text-emerald-300 border border-slate-700">
                  ${escapeHtml(opt.optionCode)}
                </span>
                ${
                  isSel
                    ? `<i data-lucide="${
                        opt.isCorrect ? 'check-circle-2' : 'x-circle'
                      }" class="w-5 h-5 ${
                        opt.isCorrect ? 'text-emerald-400' : 'text-rose-400'
                      }"></i>`
                    : ''
                }
              </div>
              <h4 class="text-sm font-bold text-white leading-snug">${escapeHtml(
                opt.title
              )}</h4>
              <p class="text-xs text-slate-300 leading-relaxed">${escapeHtml(
                opt.description
              )}</p>
            </div>
            <span class="text-xs font-semibold text-emerald-400 pt-2 border-t border-slate-800/80">
              ${isSel ? 'Decisión simulada' : 'Simular esta acción →'}
            </span>
          </button>
        `;
      })
      .join('');

    let feedbackHtml = '';
    if (chosen) {
      feedbackHtml = `
        <div class="p-6 rounded-2xl border space-y-5 fade-in-view ${
          chosen.isCorrect
            ? 'bg-emerald-950/30 border-emerald-500/50'
            : 'bg-rose-950/30 border-rose-500/50'
        }">
          <div class="flex items-center gap-2.5">
            <i data-lucide="${
              chosen.isCorrect ? 'check-circle-2' : 'alert-triangle'
            }" class="w-6 h-6 ${
        chosen.isCorrect ? 'text-emerald-400' : 'text-rose-400'
      }"></i>
            <h4 class="text-lg font-bold text-white">
              Resultado de la Simulación (${escapeHtml(chosen.optionCode)})
            </h4>
          </div>
          <p class="text-sm text-slate-200 leading-relaxed">${escapeHtml(
            chosen.immediateFeedback
          )}</p>
          ${
            chosen.isCorrect && chosen.consequenceCard
              ? `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="p-4 rounded-xl bg-slate-950/90 border border-emerald-500/40 space-y-1.5">
                <span class="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  Consecuencia
                </span>
                <p class="text-sm font-semibold text-white leading-relaxed">
                  &ldquo;${escapeHtml(chosen.consequenceCard)}&rdquo;
                </p>
              </div>
              <div class="p-4 rounded-xl bg-slate-950/90 border border-cyan-500/40 space-y-1.5">
                <span class="text-xs font-bold uppercase tracking-wider text-cyan-400">
                  Explicación
                </span>
                <p class="text-sm font-semibold text-white leading-relaxed">
                  &ldquo;${escapeHtml(chosen.explanationCard)}&rdquo;
                </p>
              </div>
            </div>
          `
              : ''
          }
          <div class="flex flex-wrap gap-2">
            ${chosen.controlsMapped
              .map(
                (c) => `
              <span class="text-xs font-medium px-3 py-1 rounded-lg bg-slate-950 text-emerald-300 border border-slate-800">
                ${escapeHtml(c)}
              </span>
            `
              )
              .join('')}
          </div>
        </div>
      `;
    }

    return `
      <div class="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
        <div class="flex items-start gap-3.5">
          <div class="p-3 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shrink-0">
            <i data-lucide="stethoscope" class="w-6 h-6"></i>
          </div>
          <div>
            <span class="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Simulador de Control de Acceso a la Red • Controles CIS v8.1
            </span>
            <h3 class="text-xl sm:text-2xl font-bold text-white mt-0.5">${escapeHtml(
              ap.title
            )}</h3>
            <p class="text-xs sm:text-sm text-slate-400 mt-1">${escapeHtml(
              ap.subtitle
            )}</p>
          </div>
        </div>

        <div class="p-5 rounded-xl bg-slate-950 border border-emerald-500/30 space-y-3">
          <div>
            <span class="text-xs font-bold uppercase tracking-wider text-emerald-400">Situación en Red Corporativa:</span>
            <p class="text-base sm:text-lg font-bold text-white mt-1">&ldquo;${escapeHtml(
              ap.situation
            )}&rdquo;</p>
          </div>
          <div class="pt-2 border-t border-slate-800">
            <span class="text-xs font-bold uppercase tracking-wider text-amber-400">Pregunta de Contención Técnica:</span>
            <p class="text-sm sm:text-base font-bold text-amber-200 mt-1">${escapeHtml(
              ap.challengeQuestion
            )}</p>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">${ctxCards}</div>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">${optsHtml}</div>
        ${feedbackHtml}
      </div>
    `;
  }

  // --------------------------------------------------------------------------
  // 7. PROCESO COMPRUEBA (15-30 MIN)
  // --------------------------------------------------------------------------
  function renderMod3Comprueba(state, mod3) {
    const comp = mod3.comprueba;
    const answers = state.mod3QuizAnswers || {};
    const answeredCount = Object.keys(answers).length;

    const qHtml = comp.questions
      .map((q) => {
        const picked = answers[q.id];
        const isAns = typeof picked === 'number';
        const isCor = picked === q.correctIndex;

        const opts = q.options
          .map((opt, idx) => {
            const isSel = picked === idx;
            let cls =
              'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800';
            if (state.mod3QuizSubmitted) {
              if (idx === q.correctIndex) {
                cls =
                  'bg-emerald-500/20 border-emerald-500 text-emerald-200 font-bold';
              } else if (isSel) {
                cls = 'bg-rose-500/20 border-rose-500 text-rose-200';
              }
            } else if (isSel) {
              cls =
                'bg-emerald-600/25 border-emerald-500 text-white font-semibold';
            }
            return `
              <button
                type="button"
                data-action="select-mod3-quiz-answer"
                data-question-id="${q.id}"
                data-option-index="${idx}"
                class="w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm transition-all cursor-pointer ${cls}"
              >${escapeHtml(opt)}</button>
            `;
          })
          .join('');

        return `
          <div class="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-4">
            <div class="flex flex-wrap items-center justify-between gap-2">
              <div class="flex items-center gap-2">
                <span class="text-xs font-bold px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Pregunta ${q.number} de 10
                </span>
                <span class="text-xs px-2.5 py-0.5 rounded bg-slate-900 text-amber-300 border border-slate-800">
                  ${escapeHtml(q.type)}
                </span>
              </div>
              <span class="text-[11px] text-slate-400">${escapeHtml(
                q.category
              )}</span>
            </div>
            <p class="text-sm sm:text-base font-bold text-white leading-snug">${escapeHtml(
              q.question
            )}</p>
            <div class="space-y-2">${opts}</div>
            ${
              state.mod3QuizSubmitted || isAns
                ? `<div class="p-3.5 rounded-lg border text-xs ${
                    isCor
                      ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-200'
                      : 'bg-blue-500/10 border-blue-500/30 text-blue-200'
                  }">
                    <p class="font-bold mb-1">${
                      isCor
                        ? '¡Respuesta Correcta! Sustento CIS Controls v8.1:'
                        : 'Explicación CIS Controls v8.1:'
                    }</p>
                    <p class="leading-relaxed">${escapeHtml(q.explanation)}</p>
                  </div>`
                : ''
            }
          </div>
        `;
      })
      .join('');

    return `
      <div class="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5">
          <div>
            <span class="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Evaluación Formativa Sin Penalización • 10 Preguntas
            </span>
            <h3 class="text-xl sm:text-2xl font-bold text-white mt-1">${escapeHtml(
              comp.title
            )}</h3>
            <p class="text-xs sm:text-sm text-slate-400 mt-1">${escapeHtml(
              comp.subtitle
            )}</p>
          </div>
          <div class="flex items-center gap-3 shrink-0">
            ${
              state.mod3QuizScore !== null
                ? `<div class="px-4 py-2.5 rounded-xl border text-right ${
                    state.mod3QuizScore >= 70
                      ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300'
                      : 'bg-amber-500/15 border-amber-500/40 text-amber-300'
                  }">
                    <span class="text-[11px] block">Calificación</span>
                    <span class="text-xl font-extrabold">${
                      state.mod3QuizScore
                    }%</span>
                  </div>`
                : ''
            }
            <button
              type="button"
              data-action="reset-mod3-quiz"
              class="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-xs font-semibold text-slate-300 cursor-pointer"
            >
              <i data-lucide="rotate-ccw" class="w-4 h-4"></i>
              <span>Reiniciar</span>
            </button>
          </div>
        </div>

        <div class="space-y-5">${qHtml}</div>

        <div class="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span class="text-xs sm:text-sm text-slate-300">
            Respondidas: <strong class="text-emerald-400">${answeredCount} / 10</strong> (Nota mínima aprobatoria: 70%)
          </span>
          <button
            type="button"
            data-action="submit-mod3-quiz"
            class="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 text-white font-bold text-sm shadow-lg cursor-pointer"
          >
            Calcular Nota Oficial del Cuestionario
          </button>
        </div>
      </div>
    `;
  }

  // --------------------------------------------------------------------------
  // 8. PROCESO RECUERDA (5-10 MIN)
  // --------------------------------------------------------------------------
  function renderMod3Recuerda(state, mod3) {
    const rec = mod3.recuerda;
    const pillars = rec.pillars || [];
    const selId = state.mod3SelectedRecuerdaPillarId || 'm3-pilar-1';
    const activePillar = pillars.find((p) => p.id === selId) || pillars[0];

    const pillarBtns = pillars
      .map((p) => {
        const isSel = p.id === activePillar.id;
        return `
          <button
            type="button"
            data-action="select-mod3-recuerda-pillar"
            data-pillar-id="${p.id}"
            class="p-4 rounded-xl border text-left transition-all flex flex-col justify-between cursor-pointer ${
              isSel
                ? 'bg-gradient-to-br from-emerald-600/30 to-cyan-600/20 border-emerald-400 text-white shadow-lg'
                : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:bg-slate-800'
            }"
          >
            <span class="text-[11px] font-mono font-bold text-emerald-400">${escapeHtml(
              p.badge
            )}</span>
            <h4 class="text-xs sm:text-sm font-bold mt-2 leading-snug">${escapeHtml(
              p.title
            )}</h4>
          </button>
        `;
      })
      .join('');

    const checklistHtml = activePillar.checklist
      .map(
        (c) => `
        <div class="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-start gap-2 text-xs text-slate-200">
          <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-400 shrink-0 mt-0.5"></i>
          <span>${escapeHtml(c)}</span>
        </div>
      `
      )
      .join('');

    return `
      <div class="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl space-y-8">
        <div>
          <span class="text-xs font-bold uppercase tracking-wider text-emerald-400">
            Infografía Resumen Interactiva • 5 Pilares del Módulo 3
          </span>
          <h3 class="text-xl sm:text-2xl font-bold text-white mt-1">${escapeHtml(
            rec.title
          )}</h3>
          <p class="text-xs sm:text-sm text-slate-400 mt-1">${escapeHtml(
            rec.subtitle
          )}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-5 gap-3">${pillarBtns}</div>

        <div class="p-6 rounded-2xl bg-slate-950/90 border border-emerald-500/30 space-y-5 shadow-lg">
          <div class="flex items-center justify-between flex-wrap gap-2 border-b border-slate-800 pb-4">
            <div>
              <span class="text-xs font-mono font-bold text-emerald-400">${escapeHtml(
                activePillar.badge
              )}</span>
              <h4 class="text-lg sm:text-xl font-extrabold text-white mt-0.5">${escapeHtml(
                activePillar.title
              )}</h4>
            </div>
            <span class="text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              ${escapeHtml(activePillar.keyMetrics)}
            </span>
          </div>
          <p class="text-sm sm:text-base text-slate-100 leading-relaxed">${escapeHtml(
            activePillar.coreStatement
          )}</p>
          <div class="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs sm:text-sm text-amber-200">
            <strong>Clave Operativa: </strong>${escapeHtml(
              activePillar.auditTakeaway
            )}
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3">${checklistHtml}</div>
        </div>

        <div class="p-6 rounded-2xl bg-gradient-to-r from-emerald-950 via-teal-950 to-slate-900 border border-emerald-500/40 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div class="space-y-1 text-center sm:text-left">
            <span class="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Meta del Módulo 3 Alcanzada
            </span>
            <h4 class="text-lg font-extrabold text-white">
              ¿Listo para registrar el 100% de tu progreso en el Módulo 3?
            </h4>
            <p class="text-xs text-slate-300">
              Al hacer clic en &ldquo;Completar Módulo 3&rdquo;, se guardarán los 8 procesos en localStorage.
            </p>
          </div>
          <button
            type="button"
            data-action="complete-all-module-3"
            class="px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-extrabold text-sm shadow-lg transition-all shrink-0 flex items-center gap-2 cursor-pointer"
          >
            <i data-lucide="award" class="w-5 h-5"></i>
            <span>Completar Módulo 3</span>
          </button>
        </div>

        ${
          state.module3CompletedBanner
            ? `
          <div class="p-6 rounded-2xl bg-emerald-500/20 border-2 border-emerald-400 text-white space-y-3 shadow-2xl fade-in-view">
            <div class="flex items-center justify-between flex-wrap gap-3">
              <div class="flex items-center gap-3">
                <div class="p-2.5 rounded-xl bg-emerald-400 text-slate-950">
                  <i data-lucide="award" class="w-6 h-6"></i>
                </div>
                <div>
                  <span class="text-xs font-extrabold uppercase tracking-wider text-emerald-300">
                    ¡Logro Desbloqueado • 100% Módulo 3 Completado!
                  </span>
                  <h5 class="text-lg font-extrabold">
                    Has dominado la Ciberdefensa Priorizada con CIS Controls v8.1
                  </h5>
                </div>
              </div>
              <button
                type="button"
                data-action="open-certificate-modal"
                class="px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-xs sm:text-sm cursor-pointer"
              >
                Ver / Imprimir Certificado
              </button>
            </div>
          </div>
        `
            : ''
        }
      </div>
    `;
  }

  // --------------------------------------------------------------------------
  // ENRUTADOR PRINCIPAL DEL MÓDULO 3
  // --------------------------------------------------------------------------
  function renderModuleThreeProcess(state) {
    const mod3 = window.LMS_DATA.MODULE_3_DATA;
    const processesMeta = mod3.processesMeta;
    const processId = state.activeView.processId || 'inicia';
    const currentIndex = processesMeta.findIndex((p) => p.id === processId);
    const currentMeta =
      currentIndex >= 0 ? processesMeta[currentIndex] : processesMeta[0];
    const prevProc = currentIndex > 0 ? processesMeta[currentIndex - 1] : null;
    const nextProc =
      currentIndex < processesMeta.length - 1
        ? processesMeta[currentIndex + 1]
        : null;
    const isCompleted = Boolean(
      state.completedProcessesMod3 && state.completedProcessesMod3[currentMeta.id]
    );

    const pillsHtml = processesMeta
      .map((p) => {
        const isCurrent = p.id === currentMeta.id;
        const isDone = Boolean(
          state.completedProcessesMod3 && state.completedProcessesMod3[p.id]
        );
        return `
          <button
            type="button"
            data-action="select-mod3-process"
            data-process-id="${p.id}"
            class="px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shrink-0 border ${
              isCurrent
                ? 'bg-emerald-600 text-white border-emerald-400 shadow-lg'
                : isDone
                ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30 hover:bg-emerald-500/25'
                : 'bg-slate-950 text-slate-400 border-slate-800 hover:bg-slate-800 hover:text-slate-200'
            }"
          >
            <i data-lucide="${
              isDone ? 'check-circle-2' : p.icon || 'circle'
            }" class="w-3.5 h-3.5"></i>
            <span>${p.number}. ${escapeHtml(p.shortTitle)}</span>
          </button>
        `;
      })
      .join('');

    let bodyHtml = '';
    switch (currentMeta.id) {
      case 'inicia':
        bodyHtml = renderMod3Inicia(state, mod3);
        break;
      case 'aprende':
        bodyHtml = renderMod3Aprende(state, mod3);
        break;
      case 'observa':
        bodyHtml = renderMod3Observa(state, mod3);
        break;
      case 'explora':
        bodyHtml = renderMod3Explora(state, mod3);
        break;
      case 'practica':
        bodyHtml = renderMod3Practica(state, mod3);
        break;
      case 'aplica':
        bodyHtml = renderMod3Aplica(state, mod3);
        break;
      case 'comprueba':
        bodyHtml = renderMod3Comprueba(state, mod3);
        break;
      case 'recuerda':
        bodyHtml = renderMod3Recuerda(state, mod3);
        break;
      default:
        bodyHtml = renderMod3Inicia(state, mod3);
        break;
    }

    return `
      <div class="space-y-6 pb-12 fade-in-view">
        <section class="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl space-y-4">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div class="flex items-start gap-3.5">
              <div class="p-3 rounded-xl bg-emerald-600/20 border border-emerald-500/30 text-emerald-400 shrink-0 mt-0.5">
                <i data-lucide="${
                  currentMeta.icon || 'sparkles'
                }" class="w-5 h-5"></i>
              </div>
              <div>
                <div class="flex items-center gap-2 flex-wrap">
                  <span class="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    Módulo 3 • Ciberdefensa Práctica: CIS Controls v8.1
                  </span>
                  <span class="text-xs font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                    ${escapeHtml(currentMeta.duration)}
                  </span>
                </div>
                <h2 class="text-xl sm:text-2xl font-extrabold text-white mt-1">
                  ${escapeHtml(currentMeta.title)}
                </h2>
                <p class="text-xs sm:text-sm text-slate-400 mt-0.5">
                  ${escapeHtml(currentMeta.subtitle)}
                </p>
              </div>
            </div>

            <button
              type="button"
              data-action="toggle-mod3-process-completed"
              data-process-id="${currentMeta.id}"
              class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer shrink-0 ${
                isCompleted
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
              }"
            >
              <i data-lucide="check-circle-2" class="w-4 h-4 ${
                isCompleted ? 'text-emerald-400' : 'text-slate-400'
              }"></i>
              <span>${
                isCompleted ? 'Proceso Completado' : 'Marcar como Completado'
              }</span>
            </button>
          </div>

          <div class="flex items-center gap-2 overflow-x-auto pt-2 pb-1">
            ${pillsHtml}
          </div>
        </section>

        ${bodyHtml}

        <footer class="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-5 flex flex-wrap items-center justify-between gap-3">
          ${
            prevProc
              ? `
              <button
                type="button"
                data-action="select-mod3-process"
                data-process-id="${prevProc.id}"
                class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-200 border border-slate-800 text-xs sm:text-sm font-semibold cursor-pointer"
              >
                <i data-lucide="arrow-left" class="w-4 h-4"></i>
                <span>Anterior: ${escapeHtml(prevProc.title)}</span>
              </button>
            `
              : `
              <button
                type="button"
                data-action="select-mod2-process"
                data-process-id="recuerda"
                class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-200 border border-slate-800 text-xs sm:text-sm font-semibold cursor-pointer"
              >
                <i data-lucide="arrow-left" class="w-4 h-4"></i>
                <span>Volver al Módulo 2 (Proceso 8)</span>
              </button>
            `
          }

          ${
            nextProc
              ? `
              <button
                type="button"
                data-action="complete-and-next-mod3-process"
                data-current-process-id="${currentMeta.id}"
                data-next-process-id="${nextProc.id}"
                class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 text-white text-xs sm:text-sm font-bold shadow-lg cursor-pointer"
              >
                <span>Completar y Continuar a ${escapeHtml(
                  nextProc.title
                )}</span>
                <i data-lucide="arrow-right" class="w-4 h-4"></i>
              </button>
            `
              : `
              <button
                type="button"
                data-action="open-certificate-modal"
                class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 text-xs sm:text-sm font-bold shadow-lg cursor-pointer"
              >
                <i data-lucide="award" class="w-4 h-4"></i>
                <span>Ver Estado de Certificación</span>
              </button>
            `
          }
        </footer>
      </div>
    `;
  }

  window.LMS_MODULE3_COMPONENTS = {
    renderModuleThreeProcess,
  };
})();

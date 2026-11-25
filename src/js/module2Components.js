/**
 * ============================================================================
 * COMPONENTES INTERACTIVOS DEL MÓDULO 2 (NIST CSF 2.0): src/js/module2Components.js
 * Renderiza dinámicamente los 8 Procesos Pedagógicos del Módulo 2.
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
  function renderMod2Inicia(state, mod2) {
    const inicia = mod2.inicia;
    const selectedOpt = inicia.reflectionOptions.find(
      (o) => o.id === state.mod2IniciaSelectedOption
    );

    const optsHtml = inicia.reflectionOptions
      .map((opt) => {
        const isSel = state.mod2IniciaSelectedOption === opt.id;
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
            data-action="select-mod2-inicia-option"
            data-option-id="${opt.id}"
            class="p-5 rounded-xl border text-left transition-all flex flex-col justify-between gap-3 cursor-pointer ${cardClass}"
          >
            <div class="space-y-2">
              <div class="flex items-center justify-between gap-2">
                <span class="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-slate-800 text-cyan-300">
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
            <span class="text-xs text-cyan-400 font-semibold">
              ${isSel ? 'Opción seleccionada' : 'Elegir esta función →'}
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
          <span class="text-xs font-semibold px-3 py-1 rounded-lg bg-slate-900/90 text-cyan-300 border border-slate-700">
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
            <span class="text-xs font-bold uppercase px-2.5 py-1 rounded bg-slate-900/90 text-cyan-300 border border-slate-700">
              Análisis NIST CSF 2.0
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
          <p class="text-2xl font-extrabold text-cyan-400 mt-1">${escapeHtml(
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
        <div class="bg-gradient-to-r from-cyan-950/70 via-slate-900 to-slate-900 border border-cyan-500/30 rounded-2xl p-5 sm:p-6">
          <span class="text-xs font-bold uppercase tracking-wider text-cyan-400">
            Objetivo de Aprendizaje del Módulo 2
          </span>
          <p class="text-sm sm:text-base text-white font-medium mt-1.5 leading-relaxed">
            ${escapeHtml(inicia.objective)}
          </p>
        </div>

        <div class="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
          <div class="flex items-start gap-3.5">
            <div class="p-3 rounded-xl bg-orange-500/15 border border-orange-500/30 text-orange-400 shrink-0">
              <i data-lucide="shield-alert" class="w-6 h-6"></i>
            </div>
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-orange-400">
                Escenario Crítico: Tiempo de Permanencia (Dwell Time)
              </span>
              <h3 class="text-xl font-bold text-white mt-0.5">${escapeHtml(
                inicia.caseTitle
              )}</h3>
            </div>
          </div>

          <blockquote class="p-5 rounded-xl bg-slate-950 border-l-4 border-l-orange-500 text-sm sm:text-base text-slate-100 italic leading-relaxed">
            &ldquo;${escapeHtml(inicia.caseScenario)}&rdquo;
          </blockquote>

          <div class="space-y-4">
            <div class="flex items-center gap-2">
              <i data-lucide="help-circle" class="w-5 h-5 text-amber-400 shrink-0"></i>
              <h4 class="text-base sm:text-lg font-bold text-amber-300">
                Pregunta detonante: ${escapeHtml(inicia.triggerQuestion)}
              </h4>
            </div>
            <p class="text-xs sm:text-sm text-slate-400">
              Selecciona entre Protect, Detect o Recover para descubrir la causa raíz bajo NIST CSF 2.0:
            </p>
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">${optsHtml}</div>
          </div>

          ${feedbackHtml}

          <div class="p-4 rounded-xl bg-slate-950/90 border border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed">
            <strong class="text-cyan-400">Síntesis del Caso Detonante: </strong>
            ${escapeHtml(inicia.holisticSynthesis)}
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">${statsHtml}</div>
      </div>
    `;
  }

  // --------------------------------------------------------------------------
  // 2. PROCESO APRENDE (60-90 MIN) - 4 LECCIONES + EXPLORADOR VISUAL DEL CORE
  // --------------------------------------------------------------------------
  function renderMod2Aprende(state, mod2) {
    const activeLessonId = state.activeView.lessonId || 'leccion-2-1';
    const currentLesson =
      mod2.aprende.find((l) => l.id === activeLessonId) || mod2.aprende[0];
    const isLessonDone = Boolean(
      state.completedLessonsMod2 && state.completedLessonsMod2[currentLesson.id]
    );
    const noteText =
      (state.lessonNotesMod2 && state.lessonNotesMod2[currentLesson.id]) || '';

    const tabsHtml = mod2.aprende
      .map((les) => {
        const isSel = les.id === currentLesson.id;
        const done = Boolean(
          state.completedLessonsMod2 && state.completedLessonsMod2[les.id]
        );
        return `
          <button
            type="button"
            data-action="select-mod2-lesson"
            data-lesson-id="${les.id}"
            class="text-left p-3.5 rounded-xl border transition-all flex flex-col justify-between gap-2 cursor-pointer ${
              isSel
                ? 'bg-cyan-600/20 border-cyan-500 text-white shadow-lg'
                : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:bg-slate-800/70'
            }"
          >
            <div class="flex items-center justify-between gap-2">
              <span class="text-xs font-bold text-amber-400">${escapeHtml(
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
            <span class="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shrink-0">
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

    // Lección 2.1: Evolución v1.1 -> v2.0
    if (currentLesson.evolutionComparison) {
      const rows = currentLesson.evolutionComparison
        .map(
          (r) => `
          <tr class="hover:bg-slate-900/50">
            <td class="px-4 py-3 font-bold text-white">${escapeHtml(
              r.aspect
            )}</td>
            <td class="px-4 py-3 text-slate-300">${escapeHtml(r.csf11)}</td>
            <td class="px-4 py-3 font-semibold text-cyan-300">${escapeHtml(
              r.csf20
            )}</td>
            <td class="px-4 py-3 text-slate-300">${escapeHtml(r.impact)}</td>
          </tr>
        `
        )
        .join('');

      specificHtml = `
        <div class="space-y-3 pt-2">
          <h4 class="text-base sm:text-lg font-bold text-white flex items-center gap-2">
            <i data-lucide="layers" class="w-5 h-5 text-cyan-400"></i>
            <span>Evolución Comparativa: NIST CSF v1.1 (2018) vs. v2.0 (2024)</span>
          </h4>
          <div class="overflow-x-auto rounded-xl border border-slate-800">
            <table class="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr class="bg-slate-950 text-slate-300 border-b border-slate-800 uppercase text-xs">
                  <th class="px-4 py-3">Dimensión</th>
                  <th class="px-4 py-3">NIST CSF v1.1 (2018)</th>
                  <th class="px-4 py-3 text-cyan-400">NIST CSF v2.0 (2024)</th>
                  <th class="px-4 py-3">Impacto Práctico</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-800 bg-slate-950/50">
                ${rows}
              </tbody>
            </table>
          </div>
        </div>
      `;
    }

    // Lección 2.2: 6 categorías de GOVERN (GV)
    if (currentLesson.governCategories) {
      const govCards = currentLesson.governCategories
        .map(
          (cat) => `
          <div class="p-5 rounded-xl bg-slate-950 border border-amber-500/30 space-y-2.5">
            <span class="text-xs font-mono font-extrabold px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 inline-block">
              ${escapeHtml(cat.code)}
            </span>
            <h5 class="text-sm sm:text-base font-bold text-white">${escapeHtml(
              cat.name
            )}</h5>
            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">${escapeHtml(
              cat.description
            )}</p>
            <div class="p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs text-amber-200">
              ${escapeHtml(cat.practicalExample)}
            </div>
          </div>
        `
        )
        .join('');

      specificHtml = `
        <div class="space-y-4 pt-2">
          <div class="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center gap-3">
            <i data-lucide="shield" class="w-6 h-6 text-amber-400 shrink-0"></i>
            <div>
              <h4 class="text-base font-bold text-amber-300">
                Las 6 Categorías Oficiales de la Función Central GOVERN (GV)
              </h4>
              <p class="text-xs text-slate-200 mt-0.5">
                GV rodea y dirige a las 5 funciones operativas (ID, PR, DE, RS, RC).
              </p>
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">${govCards}</div>
        </div>
      `;
    }

    // Lección 2.3: Selector Interactivo de las 6 Funciones con Colores Oficiales NIST
    if (currentLesson.nistFunctions) {
      const selectedFnCode = state.mod2SelectedNistFnCode || 'GV';
      const fnBtns = currentLesson.nistFunctions
        .map((fn) => {
          const isSel = fn.code === selectedFnCode;
          return `
            <button
              type="button"
              data-action="select-mod2-nist-fn"
              data-fn-code="${fn.code}"
              class="p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                isSel
                  ? `${fn.colorClasses.bg} ${fn.colorClasses.border} text-white shadow-lg`
                  : 'bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-800/70'
              }"
            >
              <div class="flex items-center justify-between">
                <span class="text-xs font-mono font-extrabold px-2 py-0.5 rounded border ${fn.colorClasses.badge}">
                  ${fn.code}
                </span>
                ${
                  fn.isCentralTransversal
                    ? '<span class="text-[9px] uppercase font-bold text-amber-300">Central</span>'
                    : ''
                }
              </div>
              <p class="text-xs font-bold mt-2">${escapeHtml(fn.name)}</p>
              <p class="text-[11px] text-slate-400">${escapeHtml(
                fn.spanishName
              )} (${fn.categories.length} cat.)</p>
            </button>
          `;
        })
        .join('');

      const activeFn =
        currentLesson.nistFunctions.find((f) => f.code === selectedFnCode) ||
        currentLesson.nistFunctions[0];

      const catCards = activeFn.categories
        .map(
          (cat) => `
          <div class="p-4 rounded-xl bg-slate-950/90 border border-slate-800 space-y-2">
            <span class="text-xs font-mono font-bold px-2 py-0.5 rounded border inline-block ${activeFn.colorClasses.badge}">
              ${escapeHtml(cat.code)}
            </span>
            <h6 class="text-sm font-bold text-white">${escapeHtml(cat.name)}</h6>
            <p class="text-xs text-slate-300 leading-relaxed">${escapeHtml(
              cat.description
            )}</p>
            <div class="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-cyan-200">
              <strong>Ejemplo práctico: </strong>${escapeHtml(
                cat.practicalExample
              )}
            </div>
          </div>
        `
        )
        .join('');

      specificHtml = `
        <div class="space-y-5 pt-2">
          <div class="p-4 rounded-xl bg-slate-950 border border-slate-800">
            <span class="text-xs font-bold uppercase tracking-wider text-cyan-400">
              Explorador Visual Interactivo del Core • Colores Oficiales NIST CSF 2.0
            </span>
            <h4 class="text-base sm:text-lg font-bold text-white mt-0.5">
              Haz clic en cada una de las 6 Funciones para inspeccionar sus Categorías y Ejemplos Prácticos
            </h4>
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">${fnBtns}</div>
          <div class="rounded-2xl p-5 sm:p-6 border space-y-5 ${activeFn.colorClasses.bg} ${activeFn.colorClasses.border}">
            <div class="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
              <div>
                <span class="text-xs font-mono font-bold uppercase ${activeFn.colorClasses.accentText}">
                  Función ${activeFn.code} • ${escapeHtml(activeFn.nistColorName)}
                </span>
                <h5 class="text-xl font-extrabold text-white mt-0.5">
                  ${escapeHtml(activeFn.name)} (${escapeHtml(activeFn.spanishName)})
                </h5>
              </div>
              <span class="text-xs font-bold px-3 py-1 rounded-full border ${activeFn.colorClasses.badge}">
                ${activeFn.categories.length} Categorías Oficiales
              </span>
            </div>
            <p class="text-sm text-slate-100 leading-relaxed">${escapeHtml(
              activeFn.purpose
            )}</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">${catCards}</div>
          </div>
        </div>
      `;
    }

    // Lección 2.4: Perfiles y Implementation Tiers (1 al 4)
    if (currentLesson.profileConcepts && currentLesson.implementationTiers) {
      const pc = currentLesson.profileConcepts;
      const tiersHtml = currentLesson.implementationTiers
        .map(
          (t) => `
          <div class="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
            <div class="flex items-center justify-between gap-2 flex-wrap">
              <h5 class="text-base font-extrabold text-cyan-400">${escapeHtml(
                t.name
              )}</h5>
              <span class="text-[11px] font-mono px-2.5 py-0.5 rounded bg-slate-900 text-amber-300 border border-slate-700">
                ${escapeHtml(t.riskGovernance)}
              </span>
            </div>
            <p class="text-xs sm:text-sm text-slate-200 leading-relaxed">${escapeHtml(
              t.summary
            )}</p>
            <div class="grid grid-cols-2 gap-2 text-[11px] bg-slate-900 p-2.5 rounded-lg border border-slate-800">
              <div>
                <span class="text-slate-400 block">Proceso de Riesgo:</span>
                <strong class="text-slate-200">${escapeHtml(
                  t.riskProcess
                )}</strong>
              </div>
              <div>
                <span class="text-slate-400 block">Colaboración Externa:</span>
                <strong class="text-slate-200">${escapeHtml(
                  t.externalParticipation
                )}</strong>
              </div>
            </div>
            <ul class="space-y-1">
              ${t.characteristics
                .map(
                  (c) => `
                <li class="text-xs text-slate-300 flex items-start gap-2">
                  <i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5"></i>
                  <span>${escapeHtml(c)}</span>
                </li>
              `
                )
                .join('')}
            </ul>
          </div>
        `
        )
        .join('');

      specificHtml = `
        <div class="space-y-6 pt-2">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div class="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
              <span class="text-xs font-bold uppercase text-amber-400">1. Estado Actual</span>
              <h5 class="text-base font-bold text-white">${escapeHtml(
                pc.currentProfile.title
              )}</h5>
              <p class="text-xs text-slate-300 leading-relaxed">${escapeHtml(
                pc.currentProfile.description
              )}</p>
              <ul class="space-y-1.5">
                ${pc.currentProfile.inputs
                  .map(
                    (i) => `
                  <li class="text-xs text-slate-300 flex items-start gap-2">
                    <i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5"></i>
                    <span>${escapeHtml(i)}</span>
                  </li>
                `
                  )
                  .join('')}
              </ul>
            </div>

            <div class="p-5 rounded-xl bg-slate-950 border border-cyan-500/40 space-y-3">
              <span class="text-xs font-bold uppercase text-cyan-400">2. Estado Deseado</span>
              <h5 class="text-base font-bold text-white">${escapeHtml(
                pc.targetProfile.title
              )}</h5>
              <p class="text-xs text-slate-300 leading-relaxed">${escapeHtml(
                pc.targetProfile.description
              )}</p>
              <ul class="space-y-1.5">
                ${pc.targetProfile.inputs
                  .map(
                    (i) => `
                  <li class="text-xs text-slate-300 flex items-start gap-2">
                    <i data-lucide="target" class="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5"></i>
                    <span>${escapeHtml(i)}</span>
                  </li>
                `
                  )
                  .join('')}
              </ul>
            </div>

            <div class="p-5 rounded-xl bg-emerald-950/20 border border-emerald-500/40 space-y-3">
              <span class="text-xs font-bold uppercase text-emerald-400">3. Priorización</span>
              <h5 class="text-base font-bold text-white">${escapeHtml(
                pc.gapAnalysis.title
              )}</h5>
              <p class="text-xs text-slate-300 leading-relaxed">${escapeHtml(
                pc.gapAnalysis.description
              )}</p>
              <ul class="space-y-1.5">
                ${pc.gapAnalysis.exampleActionPlan
                  .map(
                    (p) => `
                  <li class="text-xs text-emerald-200 flex items-start gap-2">
                    <i data-lucide="arrow-right" class="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5"></i>
                    <span>${escapeHtml(p)}</span>
                  </li>
                `
                  )
                  .join('')}
              </ul>
            </div>
          </div>

          <div class="space-y-3">
            <h4 class="text-base sm:text-lg font-bold text-white">
              Los 4 Niveles de Implementación (Implementation Tiers) de NIST CSF 2.0
            </h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">${tiersHtml}</div>
          </div>
        </div>
      `;
    }

    const nextMap = {
      'leccion-2-1': 'leccion-2-2',
      'leccion-2-2': 'leccion-2-3',
      'leccion-2-3': 'leccion-2-4',
    };
    const nextLessonId = nextMap[currentLesson.id] || null;

    return `
      <div class="space-y-6">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">${tabsHtml}</div>

        <div class="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
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
              data-action="toggle-mod2-lesson-completed"
              data-lesson-id="${currentLesson.id}"
              class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                isLessonDone
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                  : 'bg-cyan-600 hover:bg-cyan-500 text-white shadow-lg'
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
                <i data-lucide="file-text" class="w-4 h-4 text-cyan-400"></i>
                Mis Apuntes de Estudio (${escapeHtml(
                  currentLesson.code
                )}) • Guardado automático
              </label>
              ${
                nextLessonId
                  ? `
                <button
                  type="button"
                  data-action="complete-and-next-mod2-lesson"
                  data-current-lesson-id="${currentLesson.id}"
                  data-next-lesson-id="${nextLessonId}"
                  class="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 cursor-pointer"
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
              data-action="mod2-lesson-note-input"
              data-lesson-id="${currentLesson.id}"
              rows="3"
              placeholder="Anota aquí cómo aplicarías estas categorías o perfiles en tu organización..."
              class="w-full rounded-lg bg-slate-900 border border-slate-800 p-3 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-cyan-500"
            >${escapeHtml(noteText)}</textarea>
          </div>
        </div>
      </div>
    `;
  }

  // --------------------------------------------------------------------------
  // 3. PROCESO OBSERVA (20-40 MIN) - GALERÍA DE 2 VIDEOS + GUÍAS
  // --------------------------------------------------------------------------
  function renderMod2Observa(state, mod2) {
    const v1 = mod2.observa.video1;
    const v2 = mod2.observa.video2;
    const selHierId = state.mod2SelectedHierarchyId || 'hier-pr-aa';
    const selTimelineId = state.mod2SelectedTimelineId || 'tl-1';

    const hierBtns = v1.hierarchyExamples
      .map((ex) => {
        const isSel = ex.id === selHierId;
        return `
          <button
            type="button"
            data-action="select-mod2-hierarchy"
            data-hierarchy-id="${ex.id}"
            class="p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
              isSel
                ? 'bg-cyan-600/25 border-cyan-500 text-white'
                : 'bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-800'
            }"
          >
            <span class="text-[11px] font-mono font-bold text-cyan-400 block">${escapeHtml(
              ex.subcategoryCode
            )}</span>
            <span class="text-[11px] line-clamp-1">${escapeHtml(
              ex.functionCode
            )}</span>
          </button>
        `;
      })
      .join('');

    const activeEx =
      v1.hierarchyExamples.find((e) => e.id === selHierId) ||
      v1.hierarchyExamples[0];

    const cp1Ans = state.mod2ObservaCheckpoints[v1.id];
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
            data-action="answer-mod2-observa-checkpoint"
            data-video-id="${v1.id}"
            data-option-index="${idx}"
            class="text-left p-3 rounded-lg border text-xs transition-all cursor-pointer ${cls}"
          >${escapeHtml(opt)}</button>
        `;
      })
      .join('');

    const tlBtns = v2.timelineSteps
      .map((st) => {
        const isSel = st.id === selTimelineId;
        return `
          <button
            type="button"
            data-action="select-mod2-timeline"
            data-timeline-id="${st.id}"
            class="p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
              isSel
                ? 'bg-orange-500/20 border-orange-500 text-white shadow-md'
                : 'bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-800'
            }"
          >
            <div class="flex items-center gap-1 text-[10px] font-mono text-amber-300">
              <i data-lucide="clock" class="w-3 h-3"></i>
              <span class="truncate">${escapeHtml(st.timeLabel)}</span>
            </div>
            <p class="text-xs font-bold mt-1">${escapeHtml(st.nistFunction)}</p>
            <span class="text-[10px] text-cyan-400 font-mono">${escapeHtml(
              st.categoryCode
            )}</span>
          </button>
        `;
      })
      .join('');

    const activeStep =
      v2.timelineSteps.find((s) => s.id === selTimelineId) ||
      v2.timelineSteps[0];

    const cp2Ans = state.mod2ObservaCheckpoints[v2.id];
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
            data-action="answer-mod2-observa-checkpoint"
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
              <span class="text-xs font-bold uppercase tracking-wider text-cyan-400">
                Video 1 (${escapeHtml(v1.duration)}) • Anatomía del Core
              </span>
              <h3 class="text-lg sm:text-xl font-bold text-white mt-1">${escapeHtml(
                v1.title
              )}</h3>
            </div>
            <a
              href="${v1.youtubeFallbackUrl}"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-cyan-300 border border-slate-700 shrink-0"
            >
              <span>Búsqueda auxiliar en YouTube</span>
              <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
            </a>
          </div>

          <div class="grid grid-cols-1 xl:grid-cols-12">
            <div class="xl:col-span-6 bg-slate-950 flex flex-col justify-between p-4 space-y-3">
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

            <div class="xl:col-span-6 p-5 sm:p-6 space-y-4 border-t xl:border-t-0 xl:border-l border-slate-800">
              <div>
                <span class="text-xs font-bold uppercase tracking-wider text-blue-400">
                  Desglose Visual Interactivo de Taxonomía
                </span>
                <h4 class="text-base font-bold text-white mt-0.5">
                  Jerarquía: Función → Categoría → Subcategoría
                </h4>
              </div>
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">${hierBtns}</div>
              <div class="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-3">
                <div class="flex flex-wrap items-center gap-2 text-xs">
                  <span class="px-2.5 py-1 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30 font-bold">
                    Función: ${escapeHtml(activeEx.functionName)}
                  </span>
                  <span class="px-2.5 py-1 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30 font-bold">
                    Categoría: ${escapeHtml(activeEx.categoryCode)}
                  </span>
                  <span class="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold">
                    Subcategoría: ${escapeHtml(activeEx.subcategoryCode)}
                  </span>
                </div>
                <p class="text-xs font-bold text-cyan-300">${escapeHtml(
                  activeEx.categoryName
                )}</p>
                <p class="text-sm font-semibold text-white">${escapeHtml(
                  activeEx.subcategoryDescription
                )}</p>
                <div class="p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-200 leading-relaxed">
                  ${escapeHtml(activeEx.implementationExample)}
                </div>
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
                ? `<p class="text-xs text-cyan-300">${escapeHtml(
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
              <span class="text-xs font-bold uppercase tracking-wider text-rose-400">
                Video 2 (${escapeHtml(v2.duration)}) • Simulación de Ransomware
              </span>
              <h3 class="text-lg sm:text-xl font-bold text-white mt-1">${escapeHtml(
                v2.title
              )}</h3>
            </div>
            <a
              href="${v2.youtubeFallbackUrl}"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-cyan-300 border border-slate-700 shrink-0"
            >
              <span>Búsqueda auxiliar en YouTube</span>
              <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
            </a>
          </div>

          <div class="grid grid-cols-1 xl:grid-cols-12">
            <div class="xl:col-span-6 bg-slate-950 flex flex-col justify-between p-4 space-y-3">
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

            <div class="xl:col-span-6 p-5 sm:p-6 space-y-4 border-t xl:border-t-0 xl:border-l border-slate-800">
              <div>
                <span class="text-xs font-bold uppercase tracking-wider text-orange-400">
                  Línea de Tiempo Interactiva • Respuesta a Ransomware
                </span>
                <h4 class="text-base font-bold text-white mt-0.5">
                  Haz clic en cada hito temporal (Detect → Respond → Recover)
                </h4>
              </div>
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">${tlBtns}</div>
              <div class="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-3">
                <div class="flex items-center justify-between flex-wrap gap-2">
                  <span class="text-xs font-bold px-2.5 py-0.5 rounded bg-orange-500/20 text-orange-300 border border-orange-500/30">
                    ${escapeHtml(activeStep.timeLabel)} • ${escapeHtml(
      activeStep.nistFunction
    )}
                  </span>
                  <span class="text-xs font-mono text-cyan-400">${escapeHtml(
                    activeStep.categoryCode
                  )}</span>
                </div>
                <h5 class="text-sm sm:text-base font-bold text-white">${escapeHtml(
                  activeStep.actionTitle
                )}</h5>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">${escapeHtml(
                  activeStep.technicalDetail
                )}</p>
                <div class="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-200">
                  <strong>Evidencia Operativa Generada: </strong>${escapeHtml(
                    activeStep.evidenceGenerated
                  )}
                </div>
              </div>
            </div>
          </div>

          <div class="p-5 bg-slate-950/70 border-t border-slate-800 space-y-3">
            <p class="text-xs sm:text-sm font-bold text-white">
              Comprobación Video 2: ${escapeHtml(v2.checkpointQuestion.question)}
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2">${cp2Opts}</div>
            ${
              typeof cp2Ans === 'number'
                ? `<p class="text-xs text-cyan-300">${escapeHtml(
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
  function renderMod2Explora(state, mod2) {
    const exp = mod2.explora;
    const activeStepNum = state.mod2ActiveProfileStep || 1;
    const currentStep =
      exp.profileSteps.find((s) => s.stepNumber === activeStepNum) ||
      exp.profileSteps[0];

    const stepBtns = exp.profileSteps
      .map((st) => {
        const isSel = st.stepNumber === currentStep.stepNumber;
        return `
          <button
            type="button"
            data-action="select-mod2-profile-step"
            data-step-number="${st.stepNumber}"
            class="p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
              isSel
                ? 'bg-cyan-600/25 border-cyan-500 text-white shadow-md'
                : 'bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-800'
            }"
          >
            <span class="text-[11px] font-mono font-bold text-cyan-400 block">Paso ${
              st.stepNumber
            } de 5</span>
            <p class="text-xs font-bold mt-1 line-clamp-2">${escapeHtml(
              st.title.replace(`Paso ${st.stepNumber}: `, '')
            )}</p>
          </button>
        `;
      })
      .join('');

    const docsHtml = exp.officialDocuments
      .map(
        (doc) => `
        <div class="bg-slate-950 border border-slate-800 hover:border-cyan-500/40 rounded-xl p-5 flex flex-col justify-between space-y-4 transition-all">
          <div class="space-y-2.5">
            <div class="flex items-center justify-between gap-2">
              <span class="text-[11px] font-bold uppercase px-2.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
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
                <span class="text-[10px] px-2 py-0.5 rounded bg-slate-900 text-cyan-300 border border-slate-800">${escapeHtml(
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
              class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold transition-colors"
            >
              <span>Abrir Recurso</span>
              <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
            </a>
          </div>
        </div>
      `
      )
      .join('');

    const matrixRows = exp.coreMatrixRows
      .map(
        (r) => `
        <tr class="hover:bg-slate-900/60">
          <td class="px-3 py-2.5 font-mono font-bold text-amber-300">${escapeHtml(
            r.functionCode
          )}</td>
          <td class="px-3 py-2.5 font-mono font-bold text-cyan-400">${escapeHtml(
            r.categoryCode
          )}</td>
          <td class="px-3 py-2.5 font-semibold text-white">${escapeHtml(
            r.categoryName
          )}</td>
          <td class="px-3 py-2.5 text-slate-300 max-w-xs">${escapeHtml(
            r.categoryDescription
          )}</td>
          <td class="px-3 py-2.5 font-mono text-center text-slate-200">${escapeHtml(
            r.currentProfileScore
          )}</td>
          <td class="px-3 py-2.5 font-mono text-center text-cyan-300">${escapeHtml(
            r.targetProfileScore
          )}</td>
          <td class="px-3 py-2.5 text-emerald-300 max-w-xs">${escapeHtml(
            r.identifiedGap
          )}</td>
        </tr>
      `
      )
      .join('');

    return `
      <div class="space-y-8">
        <div class="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl space-y-5">
          <div>
            <span class="text-xs font-bold uppercase tracking-wider text-cyan-400">
              Lectura Interactiva Guiada • NIST CSF 2.0
            </span>
            <h3 class="text-xl font-bold text-white mt-1">${escapeHtml(
              exp.guideTitle
            )}</h3>
            <p class="text-xs sm:text-sm text-slate-400 mt-1">${escapeHtml(
              exp.guideSubtitle
            )}</p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-5 gap-2.5">${stepBtns}</div>

          <div class="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
            <h4 class="text-base sm:text-lg font-bold text-white">${escapeHtml(
              currentStep.title
            )}</h4>
            <p class="text-xs sm:text-sm text-slate-200 leading-relaxed">${escapeHtml(
              currentStep.description
            )}</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
              <div class="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-200">
                <strong>Entregable clave: </strong>${escapeHtml(
                  currentStep.deliverable
                )}
              </div>
              <div class="p-3 rounded-lg bg-amber-500/10 border border-amber-500/30 text-xs text-amber-200">
                <strong>Recomendación práctica: </strong>${escapeHtml(
                  currentStep.tip
                )}
              </div>
            </div>
          </div>
        </div>

        <div class="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl space-y-5">
          <div>
            <span class="text-xs font-bold uppercase tracking-wider text-blue-400">
              Fuentes Primarias Oficiales NIST
            </span>
            <h3 class="text-xl font-bold text-white mt-1">
              Biblioteca de Documentos Oficiales NIST CSF 2.0
            </h3>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">${docsHtml}</div>
        </div>

        <div class="bg-gradient-to-br from-slate-900 via-emerald-950/30 to-slate-900 border border-emerald-500/40 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
          <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div class="space-y-1.5">
              <div class="flex items-center gap-2">
                <span class="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  <i data-lucide="file-spreadsheet" class="w-3.5 h-3.5"></i>
                  Matriz Core NIST CSF 2.0 (6 Funciones • 22 Categorías)
                </span>
                ${
                  state.mod2CoreMatrixDownloaded
                    ? `<span class="text-xs font-semibold text-emerald-400 flex items-center gap-1">
                        <i data-lucide="check-circle-2" class="w-3.5 h-3.5"></i>
                        Matriz descargada
                      </span>`
                    : ''
                }
              </div>
              <h3 class="text-xl font-bold text-white">${escapeHtml(
                exp.coreMatrixTitle
              )}</h3>
              <p class="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">${escapeHtml(
                exp.coreMatrixDescription
              )}</p>
            </div>

            <button
              type="button"
              data-action="download-mod2-core-csv"
              class="inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-extrabold text-xs sm:text-sm shadow-lg shrink-0 transition-all cursor-pointer"
            >
              <i data-lucide="download" class="w-4 h-4"></i>
              <span>Descargar Matriz del Core NIST CSF 2.0 (.CSV para Excel)</span>
            </button>
          </div>

          <div class="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/90 max-h-96 overflow-y-auto">
            <table class="w-full text-left border-collapse text-xs">
              <thead class="sticky top-0 bg-slate-900 text-slate-300 border-b border-slate-800 uppercase">
                <tr>
                  <th class="px-3 py-2.5">Función</th>
                  <th class="px-3 py-2.5">Código</th>
                  <th class="px-3 py-2.5">Categoría Oficial</th>
                  <th class="px-3 py-2.5">Descripción</th>
                  <th class="px-3 py-2.5">Actual (1-4)</th>
                  <th class="px-3 py-2.5">Objetivo (1-4)</th>
                  <th class="px-3 py-2.5">Brecha Identificada</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-800/80">${matrixRows}</tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  }

  // --------------------------------------------------------------------------
  // 5. PROCESO PRACTICA (60-90 MIN) - 2 LABORATORIOS INTERACTIVOS
  // --------------------------------------------------------------------------
  function renderMod2Practica(state, mod2) {
    const pr = mod2.practica;
    const fns = [
      { code: 'GV', label: 'Govern (GV)' },
      { code: 'ID', label: 'Identify (ID)' },
      { code: 'PR', label: 'Protect (PR)' },
      { code: 'DE', label: 'Detect (DE)' },
      { code: 'RS', label: 'Respond (RS)' },
      { code: 'RC', label: 'Recover (RC)' },
    ];

    const act1Answers = state.mod2PracticaAct1Answers || {};
    const act1Items = pr.classificationItems || [];
    const act1AnsweredCount = Object.keys(act1Answers).length;
    const act1CorrectCount = act1Items.filter(
      (i) => act1Answers[i.id] === i.correctFunction
    ).length;

    const act1Cards = act1Items
      .map((item) => {
        const sel = act1Answers[item.id];
        const isAns = Boolean(sel);
        const isCor = sel === item.correctFunction;

        const fnBtns = fns
          .map((fn) => {
            const isPicked = sel === fn.code;
            let cls =
              'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white';
            if (isAns) {
              if (fn.code === item.correctFunction) {
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
                data-action="mod2-practica-act1-pick"
                data-item-id="${item.id}"
                data-fn-code="${fn.code}"
                class="px-2.5 py-2 rounded-lg border text-xs transition-all cursor-pointer ${cls}"
              >${fn.label}</button>
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
              <span class="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                Escenario #${item.number}
              </span>
              ${
                isAns
                  ? `<span class="text-xs font-bold ${
                      isCor ? 'text-emerald-400' : 'text-rose-400'
                    }">${
                      isCor
                        ? '¡Correcto!'
                        : `Es ${escapeHtml(item.correctFunction)}`
                    }</span>`
                  : ''
              }
            </div>
            <p class="text-sm font-bold text-white leading-snug">&ldquo;${escapeHtml(
              item.scenario
            )}&rdquo;</p>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">${fnBtns}</div>
            ${
              isAns
                ? `<div class="text-xs text-slate-300 pt-2 border-t border-slate-800/80 space-y-1">
                    <p class="text-cyan-300 font-mono">Categoría: ${escapeHtml(
                      item.categoryHint
                    )}</p>
                    <p class="leading-relaxed">${escapeHtml(
                      item.explanation
                    )}</p>
                  </div>`
                : ''
            }
          </div>
        `;
      })
      .join('');

    // Actividad 2: Diagnóstico de Madurez (Tiers 1-4)
    const tc = pr.tierAuditCase;
    const pickedTier = state.mod2PracticaAct2SelectedTier;
    const pickedOpt = tc.tierOptions.find((o) => o.level === pickedTier);

    const tierBtns = tc.tierOptions
      .map((opt) => {
        const isSel = pickedTier === opt.level;
        const isAns = Boolean(pickedTier);
        let style =
          'bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-800';
        if (isAns) {
          if (opt.isCorrect) {
            style = 'bg-emerald-500/20 border-emerald-500 text-white shadow-lg';
          } else if (isSel) {
            style = 'bg-rose-500/20 border-rose-500 text-rose-200';
          }
        }
        return `
          <button
            type="button"
            data-action="mod2-practica-act2-pick"
            data-tier-level="${opt.level}"
            class="p-4 rounded-xl border text-left transition-all space-y-2 cursor-pointer ${style}"
          >
            <span class="text-xs font-mono font-extrabold text-cyan-400 block">${escapeHtml(
              opt.label
            )}</span>
            <p class="text-xs text-slate-300 leading-relaxed">${escapeHtml(
              opt.subtitle
            )}</p>
          </button>
        `;
      })
      .join('');

    return `
      <div class="space-y-8">
        <!-- ACTIVIDAD 1 -->
        <div class="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5">
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-cyan-400">
                Laboratorio 1 • Funciones NIST CSF 2.0
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
                data-action="reset-mod2-practica-act1"
                class="p-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white cursor-pointer"
                title="Reiniciar Actividad 1"
              >
                <i data-lucide="rotate-ccw" class="w-4 h-4"></i>
              </button>
            </div>
          </div>

          <div class="space-y-1.5">
            <div class="flex justify-between text-xs text-slate-400">
              <span>Escenarios clasificados: ${act1AnsweredCount} de ${
      act1Items.length
    }</span>
              <span class="font-bold text-cyan-400">${Math.round(
                (act1CorrectCount / act1Items.length) * 100
              )}% de precisión</span>
            </div>
            <div class="w-full h-2.5 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
              <div
                class="h-full bg-gradient-to-r from-amber-500 via-cyan-400 to-emerald-400 transition-all duration-300"
                style="width: ${(act1CorrectCount / act1Items.length) * 100}%"
              ></div>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">${act1Cards}</div>
        </div>

        <!-- ACTIVIDAD 2 -->
        <div class="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5">
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-amber-400">
                Laboratorio 2 • Implementation Tiers (1 al 4)
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
              data-action="reset-mod2-practica-act2"
              class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-xs font-semibold text-slate-300 cursor-pointer shrink-0"
            >
              <i data-lucide="rotate-ccw" class="w-4 h-4"></i>
              <span>Reiniciar Diagnóstico</span>
            </button>
          </div>

          <div class="p-5 rounded-xl bg-slate-950 border border-amber-500/30 space-y-4">
            <div class="flex items-center justify-between flex-wrap gap-2">
              <h4 class="text-base font-extrabold text-amber-300">${escapeHtml(
                tc.companyName
              )}</h4>
              <span class="text-xs text-slate-400">${escapeHtml(
                tc.auditContext
              )}</span>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
              ${tc.findings
                .map(
                  (f) => `
                <div class="p-3.5 rounded-lg bg-slate-900 border border-slate-800 text-xs sm:text-sm text-slate-200 leading-relaxed">
                  ${escapeHtml(f)}
                </div>
              `
                )
                .join('')}
            </div>
            <p class="text-sm font-bold text-white pt-1">${escapeHtml(
              tc.question
            )}</p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">${tierBtns}</div>

          ${
            pickedOpt
              ? `
            <div class="p-5 rounded-xl border space-y-3 fade-in-view ${
              pickedOpt.isCorrect
                ? 'bg-emerald-950/30 border-emerald-500/40'
                : 'bg-amber-950/30 border-amber-500/40'
            }">
              <h5 class="text-base font-extrabold text-white">${escapeHtml(
                pickedOpt.feedbackTitle
              )}</h5>
              <p class="text-xs sm:text-sm text-slate-200 leading-relaxed">${escapeHtml(
                pickedOpt.feedbackBody
              )}</p>
              <div class="p-3.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-cyan-200 leading-relaxed">
                <strong>Hoja de Ruta hacia el Siguiente Nivel: </strong>${escapeHtml(
                  pickedOpt.pathToNextTier
                )}
              </div>
            </div>
          `
              : ''
          }
        </div>
      </div>
    `;
  }

  // --------------------------------------------------------------------------
  // 6. PROCESO APLICA (30-60 MIN) - SIMULADOR DE RESILIENCIA OPERATIVA
  // --------------------------------------------------------------------------
  function renderMod2Aplica(state, mod2) {
    const ap = mod2.aplica;
    const chosen = ap.options.find(
      (o) => o.id === state.mod2AplicaSelectedOption
    );

    const ctxCards = ap.clinicalContextDetails
      .map(
        (c) => `
        <div class="p-4 rounded-xl bg-slate-950 border border-slate-800">
          <span class="text-xs font-bold uppercase text-cyan-400 block">${escapeHtml(
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
        const isSel = state.mod2AplicaSelectedOption === opt.id;
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
            data-action="select-mod2-aplica-option"
            data-option-id="${opt.id}"
            class="p-5 rounded-xl border text-left transition-all flex flex-col justify-between gap-4 cursor-pointer ${style}"
          >
            <div class="space-y-2.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-extrabold uppercase px-2.5 py-0.5 rounded bg-slate-900 text-cyan-300 border border-slate-700">
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
            <span class="text-xs font-semibold text-cyan-400 pt-2 border-t border-slate-800/80">
              ${isSel ? 'Decisión simulada' : 'Simular decisión →'}
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
              <span class="text-xs font-medium px-3 py-1 rounded-lg bg-slate-950 text-cyan-300 border border-slate-800">
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
          <div class="p-3 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 shrink-0">
            <i data-lucide="stethoscope" class="w-6 h-6"></i>
          </div>
          <div>
            <span class="text-xs font-bold uppercase tracking-wider text-cyan-400">
              Simulador de Resiliencia Operativa • Respond y Recover
            </span>
            <h3 class="text-xl sm:text-2xl font-bold text-white mt-0.5">${escapeHtml(
              ap.title
            )}</h3>
            <p class="text-xs sm:text-sm text-slate-400 mt-1">${escapeHtml(
              ap.subtitle
            )}</p>
          </div>
        </div>

        <div class="p-5 rounded-xl bg-slate-950 border border-cyan-500/30 space-y-3">
          <div>
            <span class="text-xs font-bold uppercase tracking-wider text-cyan-400">Situación de Crisis:</span>
            <p class="text-base sm:text-lg font-bold text-white mt-1">&ldquo;${escapeHtml(
              ap.situation
            )}&rdquo;</p>
          </div>
          <div class="pt-2 border-t border-slate-800">
            <span class="text-xs font-bold uppercase tracking-wider text-amber-400">Pregunta de Decisión (Respond & Recover):</span>
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
  // 7. PROCESO COMPRUEBA (15-30 MIN) - CUESTIONARIO 10 PREGUNTAS
  // --------------------------------------------------------------------------
  function renderMod2Comprueba(state, mod2) {
    const comp = mod2.comprueba;
    const answers = state.mod2QuizAnswers || {};
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
            if (state.mod2QuizSubmitted) {
              if (idx === q.correctIndex) {
                cls =
                  'bg-emerald-500/20 border-emerald-500 text-emerald-200 font-bold';
              } else if (isSel) {
                cls = 'bg-rose-500/20 border-rose-500 text-rose-200';
              }
            } else if (isSel) {
              cls = 'bg-cyan-600/25 border-cyan-500 text-white font-semibold';
            }
            return `
              <button
                type="button"
                data-action="select-mod2-quiz-answer"
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
                <span class="text-xs font-bold px-2.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
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
              state.mod2QuizSubmitted || isAns
                ? `<div class="p-3.5 rounded-lg border text-xs ${
                    isCor
                      ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-200'
                      : 'bg-blue-500/10 border-blue-500/30 text-blue-200'
                  }">
                    <p class="font-bold mb-1">${
                      isCor
                        ? '¡Respuesta Correcta! Sustento NIST CSF 2.0:'
                        : 'Explicación NIST CSF 2.0:'
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
            <span class="text-xs font-bold uppercase tracking-wider text-cyan-400">
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
              state.mod2QuizScore !== null
                ? `<div class="px-4 py-2.5 rounded-xl border text-right ${
                    state.mod2QuizScore >= 70
                      ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300'
                      : 'bg-amber-500/15 border-amber-500/40 text-amber-300'
                  }">
                    <span class="text-[11px] block">Calificación</span>
                    <span class="text-xl font-extrabold">${
                      state.mod2QuizScore
                    }%</span>
                  </div>`
                : ''
            }
            <button
              type="button"
              data-action="reset-mod2-quiz"
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
            Respondidas: <strong class="text-cyan-400">${answeredCount} / 10</strong> (Nota mínima aprobatoria: 70%)
          </span>
          <button
            type="button"
            data-action="submit-mod2-quiz"
            class="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-sm shadow-lg cursor-pointer"
          >
            Calcular Nota Oficial del Cuestionario
          </button>
        </div>
      </div>
    `;
  }

  // --------------------------------------------------------------------------
  // 8. PROCESO RECUERDA (5-10 MIN) - INFOGRAFÍA 5 PILARES + LOGRO
  // --------------------------------------------------------------------------
  function renderMod2Recuerda(state, mod2) {
    const rec = mod2.recuerda;
    const pillars = rec.pillars || [];
    const selId = state.mod2SelectedRecuerdaPillarId || 'm2-pilar-1';
    const activePillar = pillars.find((p) => p.id === selId) || pillars[0];

    const pillarBtns = pillars
      .map((p) => {
        const isSel = p.id === activePillar.id;
        return `
          <button
            type="button"
            data-action="select-mod2-recuerda-pillar"
            data-pillar-id="${p.id}"
            class="p-4 rounded-xl border text-left transition-all flex flex-col justify-between cursor-pointer ${
              isSel
                ? 'bg-gradient-to-br from-cyan-600/30 to-blue-600/20 border-cyan-400 text-white shadow-lg'
                : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:bg-slate-800'
            }"
          >
            <span class="text-[11px] font-mono font-bold text-cyan-400">${escapeHtml(
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
          <span class="text-xs font-bold uppercase tracking-wider text-cyan-400">
            Infografía Resumen Interactiva • 5 Pilares del Módulo 2
          </span>
          <h3 class="text-xl sm:text-2xl font-bold text-white mt-1">${escapeHtml(
            rec.title
          )}</h3>
          <p class="text-xs sm:text-sm text-slate-400 mt-1">${escapeHtml(
            rec.subtitle
          )}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-5 gap-3">${pillarBtns}</div>

        <div class="p-6 rounded-2xl bg-slate-950/90 border border-cyan-500/30 space-y-5 shadow-lg">
          <div class="flex items-center justify-between flex-wrap gap-2 border-b border-slate-800 pb-4">
            <div>
              <span class="text-xs font-mono font-bold text-cyan-400">${escapeHtml(
                activePillar.badge
              )}</span>
              <h4 class="text-lg sm:text-xl font-extrabold text-white mt-0.5">${escapeHtml(
                activePillar.title
              )}</h4>
            </div>
            <span class="text-xs font-mono px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
              ${escapeHtml(activePillar.keyMetrics)}
            </span>
          </div>
          <p class="text-sm sm:text-base text-slate-100 leading-relaxed">${escapeHtml(
            activePillar.coreStatement
          )}</p>
          <div class="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs sm:text-sm text-amber-200">
            <strong>Clave Estratégica: </strong>${escapeHtml(
              activePillar.auditTakeaway
            )}
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3">${checklistHtml}</div>
        </div>

        <div class="p-6 rounded-2xl bg-gradient-to-r from-cyan-950 via-blue-950 to-slate-900 border border-cyan-500/40 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div class="space-y-1 text-center sm:text-left">
            <span class="text-xs font-bold uppercase tracking-wider text-cyan-400">
              Meta del Módulo 2 Alcanzada
            </span>
            <h4 class="text-lg font-extrabold text-white">
              ¿Listo para registrar el 100% de tu progreso en el Módulo 2?
            </h4>
            <p class="text-xs text-slate-300">
              Al hacer clic en &ldquo;Completar Módulo 2&rdquo;, se guardarán los 8 procesos en localStorage.
            </p>
          </div>
          <button
            type="button"
            data-action="complete-all-module-2"
            class="px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-extrabold text-sm shadow-lg transition-all shrink-0 flex items-center gap-2 cursor-pointer"
          >
            <i data-lucide="award" class="w-5 h-5"></i>
            <span>Completar Módulo 2</span>
          </button>
        </div>

        ${
          state.module2CompletedBanner
            ? `
          <div class="p-6 rounded-2xl bg-emerald-500/20 border-2 border-emerald-400 text-white space-y-3 shadow-2xl fade-in-view">
            <div class="flex items-center justify-between flex-wrap gap-3">
              <div class="flex items-center gap-3">
                <div class="p-2.5 rounded-xl bg-emerald-400 text-slate-950">
                  <i data-lucide="award" class="w-6 h-6"></i>
                </div>
                <div>
                  <span class="text-xs font-extrabold uppercase tracking-wider text-emerald-300">
                    ¡Logro Desbloqueado • 100% Módulo 2 Completado!
                  </span>
                  <h5 class="text-lg font-extrabold">
                    Has dominado la Gestión y Respuesta a Riesgos con NIST CSF 2.0
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
  // ENRUTADOR PRINCIPAL DEL MÓDULO 2
  // --------------------------------------------------------------------------
  function renderModuleTwoProcess(state) {
    const mod2 = window.LMS_DATA.MODULE_2_DATA;
    const processesMeta = mod2.processesMeta;
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
      state.completedProcessesMod2 && state.completedProcessesMod2[currentMeta.id]
    );

    const pillsHtml = processesMeta
      .map((p) => {
        const isCurrent = p.id === currentMeta.id;
        const isDone = Boolean(
          state.completedProcessesMod2 && state.completedProcessesMod2[p.id]
        );
        return `
          <button
            type="button"
            data-action="select-mod2-process"
            data-process-id="${p.id}"
            class="px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shrink-0 border ${
              isCurrent
                ? 'bg-cyan-600 text-white border-cyan-400 shadow-lg'
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
        bodyHtml = renderMod2Inicia(state, mod2);
        break;
      case 'aprende':
        bodyHtml = renderMod2Aprende(state, mod2);
        break;
      case 'observa':
        bodyHtml = renderMod2Observa(state, mod2);
        break;
      case 'explora':
        bodyHtml = renderMod2Explora(state, mod2);
        break;
      case 'practica':
        bodyHtml = renderMod2Practica(state, mod2);
        break;
      case 'aplica':
        bodyHtml = renderMod2Aplica(state, mod2);
        break;
      case 'comprueba':
        bodyHtml = renderMod2Comprueba(state, mod2);
        break;
      case 'recuerda':
        bodyHtml = renderMod2Recuerda(state, mod2);
        break;
      default:
        bodyHtml = renderMod2Inicia(state, mod2);
        break;
    }

    return `
      <div class="space-y-6 pb-12 fade-in-view">
        <section class="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl space-y-4">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div class="flex items-start gap-3.5">
              <div class="p-3 rounded-xl bg-cyan-600/20 border border-cyan-500/30 text-cyan-400 shrink-0 mt-0.5">
                <i data-lucide="${
                  currentMeta.icon || 'sparkles'
                }" class="w-5 h-5"></i>
              </div>
              <div>
                <div class="flex items-center gap-2 flex-wrap">
                  <span class="text-xs font-bold uppercase tracking-wider text-cyan-400">
                    Módulo 2 • Gestión y Respuesta a Riesgos con NIST CSF 2.0
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
              data-action="toggle-mod2-process-completed"
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
                data-action="select-mod2-process"
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
                data-action="select-process"
                data-process-id="recuerda"
                class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-200 border border-slate-800 text-xs sm:text-sm font-semibold cursor-pointer"
              >
                <i data-lucide="arrow-left" class="w-4 h-4"></i>
                <span>Volver al Módulo 1 (Proceso 8)</span>
              </button>
            `
          }

          ${
            nextProc
              ? `
              <button
                type="button"
                data-action="complete-and-next-mod2-process"
                data-current-process-id="${currentMeta.id}"
                data-next-process-id="${nextProc.id}"
                class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-xs sm:text-sm font-bold shadow-lg cursor-pointer"
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

  window.LMS_MODULE2_COMPONENTS = {
    renderModuleTwoProcess,
  };
})();

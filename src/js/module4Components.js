/**
 * ============================================================================
 * COMPONENTES INTERACTIVOS DEL MÓDULO 4 (INTEGRACIÓN Y MAPEO):
 * src/js/module4Components.js
 * Renderiza dinámicamente los 8 Procesos Pedagógicos del Módulo 4.
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
  function renderMod4Inicia(state, mod4) {
    const inicia = mod4.inicia;
    const selectedOpt = inicia.reflectionOptions.find(
      (o) => o.id === state.mod4IniciaSelectedOption
    );

    const optsHtml = inicia.reflectionOptions
      .map((opt) => {
        const isSel = state.mod4IniciaSelectedOption === opt.id;
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
            data-action="select-mod4-inicia-option"
            data-option-id="${opt.id}"
            class="p-5 rounded-xl border text-left transition-all flex flex-col justify-between gap-3 cursor-pointer ${cardClass}"
          >
            <div class="space-y-2">
              <div class="flex items-center justify-between gap-2">
                <span class="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-slate-800 text-violet-300">
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
            <div class="text-[11px] text-slate-400 font-medium pt-2 border-t border-slate-800/70">
              ${isSel ? 'Opción seleccionada' : 'Haz clic para evaluar'}
            </div>
          </button>
        `;
      })
      .join('');

    const statsHtml = inicia.keyStats
      .map(
        (st) => `
        <div class="rounded-xl border border-slate-800 bg-slate-950/75 p-4">
          <div class="text-2xl font-black text-violet-400">${escapeHtml(
            st.value
          )}</div>
          <div class="text-xs font-bold text-white mt-1">${escapeHtml(
            st.label
          )}</div>
          <p class="text-xs text-slate-400 mt-1">${escapeHtml(st.context)}</p>
        </div>
      `
      )
      .join('');

    const feedbackHtml = selectedOpt
      ? `
      <div class="mt-5 rounded-2xl border p-5 sm:p-6 space-y-4 ${
        selectedOpt.isOptimalInsight
          ? 'bg-emerald-950/35 border-emerald-500/50'
          : 'bg-amber-950/35 border-amber-500/50'
      }">
        <div class="flex items-center gap-2.5 text-base font-extrabold text-white">
          <i data-lucide="${
            selectedOpt.isOptimalInsight ? 'check-circle-2' : 'alert-triangle'
          }" class="w-5 h-5 ${
          selectedOpt.isOptimalInsight ? 'text-emerald-400' : 'text-amber-400'
        } shrink-0"></i>
          <span>${escapeHtml(selectedOpt.feedbackTitle)}</span>
        </div>
        <p class="text-sm text-slate-200 leading-relaxed">${escapeHtml(
          selectedOpt.feedbackBody
        )}</p>
        <div class="flex flex-wrap gap-2">
          ${selectedOpt.controlsInvolved
            .map(
              (c) => `
            <span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-900 border border-slate-700 text-violet-300">
              ${escapeHtml(c)}
            </span>
          `
            )
            .join('')}
        </div>
        <div class="pt-3 border-t border-slate-800 text-xs sm:text-sm text-slate-300">
          <strong class="text-violet-300">Jerarquía de Seguridad Integrada: </strong>
          ${escapeHtml(inicia.holisticSynthesis)}
        </div>
      </div>
    `
      : '';

    return `
      <div class="space-y-6">
        <div class="rounded-2xl border border-slate-800 bg-slate-900/90 p-5 sm:p-6 space-y-4">
          <div class="flex items-start gap-3">
            <div class="p-2.5 rounded-xl bg-violet-500/15 border border-violet-500/30 text-violet-400 shrink-0">
              <i data-lucide="target" class="w-5 h-5"></i>
            </div>
            <div>
              <h2 class="text-xs font-bold uppercase tracking-wider text-violet-400">
                Objetivo del Módulo 4
              </h2>
              <p class="text-sm sm:text-base text-slate-200 mt-1 leading-relaxed">
                ${escapeHtml(inicia.objective)}
              </p>
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3">${statsHtml}</div>
        </div>

        <div class="rounded-2xl border border-amber-500/30 bg-gradient-to-br from-slate-900 to-violet-950/20 p-5 sm:p-6 space-y-4">
          <div class="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <i data-lucide="sparkles" class="w-4 h-4"></i>
            <span>Caso Detonante • Interoperabilidad GRC y Técnica</span>
          </div>
          <h3 class="text-lg sm:text-xl font-bold text-white">${escapeHtml(
            inicia.caseTitle
          )}</h3>
          <p class="text-sm sm:text-base text-slate-200 leading-relaxed bg-slate-950/70 p-4 rounded-xl border border-slate-800">
            ${escapeHtml(inicia.caseScenario)}
          </p>
          <p class="text-base font-bold text-violet-300">${escapeHtml(
            inicia.triggerQuestion
          )}</p>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            ${optsHtml}
          </div>
          ${feedbackHtml}
        </div>
      </div>
    `;
  }

  // --------------------------------------------------------------------------
  // 2. PROCESO APRENDE (60-90 MIN) - 5 LECCIONES + MATRIZ VIVA DE TRAZABILIDAD
  // --------------------------------------------------------------------------
  function renderMod4Aprende(state, mod4, activeLessonId) {
    const lessons = mod4.aprende;
    const currentIndex = Math.max(
      0,
      lessons.findIndex((l) => l.id === activeLessonId)
    );
    const activeLesson = lessons[currentIndex] || lessons[0];
    const isDone = Boolean(
      state.completedLessonsMod4 && state.completedLessonsMod4[activeLesson.id]
    );
    const noteText =
      (state.lessonNotesMod4 && state.lessonNotesMod4[activeLesson.id]) || '';

    const tabsHtml = lessons
      .map((les) => {
        const isActive = les.id === activeLesson.id;
        const done = Boolean(
          state.completedLessonsMod4 && state.completedLessonsMod4[les.id]
        );
        return `
          <button
            type="button"
            data-action="select-mod4-lesson"
            data-lesson-id="${les.id}"
            class="text-left p-3 rounded-xl border transition-all cursor-pointer ${
              isActive
                ? 'bg-violet-950/60 border-violet-500 text-white shadow-md'
                : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700'
            }"
          >
            <div class="flex items-center justify-between gap-1.5">
              <span class="text-[11px] font-bold text-violet-400">${escapeHtml(
                les.code
              )}</span>
              ${
                done
                  ? '<i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-400 shrink-0"></i>'
                  : `<span class="text-[10px] font-mono text-slate-500">${escapeHtml(
                      les.duration
                    )}</span>`
              }
            </div>
            <p class="text-[11px] font-semibold mt-1 line-clamp-2 leading-snug">${escapeHtml(
              les.title
            )}</p>
          </button>
        `;
      })
      .join('');

    const conceptsHtml = activeLesson.keyConcepts
      .map(
        (c) => `
        <div class="rounded-xl border border-slate-800 bg-slate-950/70 p-4 space-y-2">
          <span class="inline-block text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-violet-500/15 text-violet-300 border border-violet-500/25">
            ${escapeHtml(c.tag)}
          </span>
          <h3 class="text-sm sm:text-base font-bold text-white">${escapeHtml(
            c.title
          )}</h3>
          <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">${escapeHtml(
            c.description
          )}</p>
        </div>
      `
      )
      .join('');

    let specialHtml = '';

    // Lección 4.1: Diagrama de 3 Capas
    if (
      Array.isArray(activeLesson.hierarchyLayers) &&
      activeLesson.hierarchyLayers.length > 0
    ) {
      const layerCards = activeLesson.hierarchyLayers
        .map(
          (layer) => `
          <div class="rounded-xl border border-violet-500/30 bg-slate-950/85 p-4 flex flex-col justify-between space-y-3">
            <div class="space-y-2">
              <div class="flex items-center justify-between gap-2">
                <span class="text-[11px] font-extrabold px-2.5 py-0.5 rounded bg-violet-500/20 text-violet-300 border border-violet-500/30">
                  NIVEL ${layer.level}
                </span>
                <span class="text-[11px] font-mono text-amber-300">${escapeHtml(
                  layer.frameworkRole
                )}</span>
              </div>
              <div class="text-xs text-slate-400">${escapeHtml(
                layer.abstraction
              )}</div>
              <h4 class="text-base font-extrabold text-white">${escapeHtml(
                layer.conceptName
              )}</h4>
              <p class="text-xs font-semibold text-cyan-300">${escapeHtml(
                layer.coreQuestion
              )}</p>
              <p class="text-xs text-slate-400">
                <strong class="text-slate-200">Audiencia: </strong>${escapeHtml(
                  layer.audience
                )}
              </p>
            </div>
            <div class="p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300">
              <strong class="text-emerald-300 block mb-0.5">Ejemplo aplicado:</strong>
              ${escapeHtml(layer.example)}
            </div>
          </div>
        `
        )
        .join('');

      specialHtml = `
        <div class="space-y-3 pt-2">
          <h3 class="text-base font-bold text-white flex items-center gap-2">
            <i data-lucide="layers" class="w-5 h-5 text-violet-400"></i>
            Pirámide Arquitectónica: Requisito → Función → Salvaguarda
          </h3>
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">${layerCards}</div>
        </div>
      `;
    }

    // Lección 4.5: Explorador Interactivo de Matriz de Trazabilidad (6 dominios)
    if (
      Array.isArray(activeLesson.traceabilityMatrix) &&
      activeLesson.traceabilityMatrix.length > 0
    ) {
      const selectedDomainId = state.mod4SelectedMatrixDomainId || 'dom-backups';
      const activeRow =
        activeLesson.traceabilityMatrix.find((r) => r.id === selectedDomainId) ||
        activeLesson.traceabilityMatrix[0];

      const domainBtnsHtml = activeLesson.traceabilityMatrix
        .map((row) => {
          const active = row.id === activeRow.id;
          return `
            <button
              type="button"
              data-action="select-mod4-matrix-domain"
              data-domain-id="${row.id}"
              class="text-left p-3 rounded-xl border transition-all cursor-pointer ${
                active
                  ? 'bg-violet-500/25 border-violet-400 text-white shadow-md'
                  : 'bg-slate-950/75 border-slate-800 text-slate-300 hover:border-slate-600'
              }"
            >
              <div class="text-[10px] font-bold uppercase tracking-wider text-violet-300">${escapeHtml(
                row.badge
              )}</div>
              <div class="text-xs font-bold mt-0.5">${escapeHtml(
                row.domain
              )}</div>
            </button>
          `;
        })
        .join('');

      const rowsHtml = activeLesson.traceabilityMatrix
        .map((row) => {
          const isLit = row.id === activeRow.id;
          return `
            <tr
              data-action="select-mod4-matrix-domain"
              data-domain-id="${row.id}"
              class="cursor-pointer transition-colors ${
                isLit
                  ? 'bg-violet-950/55 ring-1 ring-inset ring-violet-400/60'
                  : 'bg-slate-900/50 hover:bg-slate-800/50 opacity-75'
              }"
            >
              <td class="p-3 font-bold ${
                isLit ? 'text-violet-300' : 'text-slate-200'
              }">${escapeHtml(row.domain)}</td>
              <td class="p-3 text-amber-200">${escapeHtml(row.isoRef)}</td>
              <td class="p-3 text-cyan-200">${escapeHtml(row.nistRef)}</td>
              <td class="p-3 text-emerald-200">${escapeHtml(row.cisRef)}</td>
              <td class="p-3 text-slate-300">${escapeHtml(
                row.auditEvidence
              )}</td>
            </tr>
          `;
        })
        .join('');

      specialHtml = `
        <div class="space-y-4 pt-2">
          <div class="p-4 rounded-xl bg-slate-950/80 border border-violet-500/30 space-y-3">
            <h3 class="text-base font-bold text-white flex items-center gap-2">
              <i data-lucide="git-merge" class="w-5 h-5 text-violet-400"></i>
              Explorador Interactivo de Matriz Viva de Trazabilidad (6 Dominios Críticos)
            </h3>
            <p class="text-xs sm:text-sm text-slate-400">
              Haz clic en cualquiera de los 6 dominios para iluminar su fila exacta de mapeo cruzado y analizar su evidencia compartida de auditoría.
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              ${domainBtnsHtml}
            </div>
          </div>

          <div class="rounded-xl border border-violet-500/40 bg-gradient-to-br from-slate-950 to-violet-950/30 p-5 space-y-4">
            <div class="flex flex-wrap items-center justify-between gap-2">
              <h4 class="text-base sm:text-lg font-extrabold text-white">
                Trazabilidad Iluminada: ${escapeHtml(activeRow.domain)}
              </h4>
              <span class="text-xs font-bold px-2.5 py-1 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30">
                ${escapeHtml(activeRow.badge)}
              </span>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-4 gap-3">
              <div class="p-3.5 rounded-xl bg-amber-950/25 border border-amber-500/30">
                <div class="text-[10px] font-bold uppercase text-amber-400">1. Requisito ISO 27001/27002</div>
                <p class="text-xs text-slate-100 mt-1 font-medium">${escapeHtml(
                  activeRow.isoRef
                )}</p>
              </div>
              <div class="p-3.5 rounded-xl bg-cyan-950/25 border border-cyan-500/30">
                <div class="text-[10px] font-bold uppercase text-cyan-400">2. Función NIST CSF 2.0</div>
                <p class="text-xs text-slate-100 mt-1 font-medium">${escapeHtml(
                  activeRow.nistRef
                )}</p>
              </div>
              <div class="p-3.5 rounded-xl bg-emerald-950/25 border border-emerald-500/30">
                <div class="text-[10px] font-bold uppercase text-emerald-400">3. Control CIS v8.1</div>
                <p class="text-xs text-slate-100 mt-1 font-medium">${escapeHtml(
                  activeRow.cisRef
                )}</p>
              </div>
              <div class="p-3.5 rounded-xl bg-slate-900 border border-slate-700">
                <div class="text-[10px] font-bold uppercase text-violet-300">4. Evidencia Única Auditada</div>
                <p class="text-xs text-slate-200 mt-1">${escapeHtml(
                  activeRow.auditEvidence
                )}</p>
              </div>
            </div>

            <div class="p-3.5 rounded-lg bg-slate-900/90 border border-slate-800 text-xs sm:text-sm text-slate-300">
              <strong class="text-violet-300">Análisis de Interoperabilidad: </strong>
              ${escapeHtml(activeRow.mappingNote)}
            </div>
          </div>

          <div class="overflow-x-auto rounded-xl border border-slate-800">
            <table class="w-full text-left border-collapse text-xs">
              <thead>
                <tr class="bg-slate-950 text-slate-300 border-b border-slate-800">
                  <th class="p-3 font-bold">Dominio</th>
                  <th class="p-3 font-bold">ISO 27001/27002:2022</th>
                  <th class="p-3 font-bold">NIST CSF 2.0</th>
                  <th class="p-3 font-bold">CIS Controls v8.1</th>
                  <th class="p-3 font-bold">Evidencia de Auditoría</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-800">${rowsHtml}</tbody>
            </table>
          </div>
        </div>
      `;
    }

    return `
      <div class="space-y-6">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5">
          ${tabsHtml}
        </div>

        <div class="rounded-2xl border border-slate-800 bg-slate-900/90 p-5 sm:p-6 space-y-6">
          <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-violet-400">
                ${escapeHtml(activeLesson.code)} • ${escapeHtml(
      activeLesson.duration
    )}
              </span>
              <h2 class="text-xl sm:text-2xl font-bold text-white mt-1">
                ${escapeHtml(activeLesson.title)}
              </h2>
              <p class="text-sm text-slate-300 mt-2 leading-relaxed">
                ${escapeHtml(activeLesson.summary)}
              </p>
            </div>
            <button
              type="button"
              data-action="toggle-mod4-lesson-completed"
              data-lesson-id="${activeLesson.id}"
              class="shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold border cursor-pointer ${
                isDone
                  ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-300'
                  : 'bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700'
              }"
            >
              <i data-lucide="${
                isDone ? 'check-circle-2' : 'circle'
              }" class="w-4 h-4 ${
      isDone ? 'text-emerald-400' : 'text-slate-400'
    }"></i>
              <span>${isDone ? 'Lección Completada' : 'Marcar Lección Lista'}</span>
            </button>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">${conceptsHtml}</div>
          ${specialHtml}

          <div class="rounded-xl border border-violet-500/30 bg-violet-950/25 p-4 flex items-start gap-3">
            <i data-lucide="shield-check" class="w-5 h-5 text-violet-400 shrink-0 mt-0.5"></i>
            <div class="text-xs sm:text-sm text-violet-100 leading-relaxed">
              <strong class="text-violet-300">Idea Fuerza de la Lección: </strong>
              ${escapeHtml(activeLesson.takeaway)}
            </div>
          </div>

          <div class="space-y-2">
            <label for="mod4-note-${activeLesson.id}" class="block text-xs font-bold uppercase tracking-wider text-slate-400">
              Bitácora Personal (${escapeHtml(activeLesson.code)}) — Guardado automático en localStorage
            </label>
            <textarea
              id="mod4-note-${activeLesson.id}"
              data-action="mod4-lesson-note-input"
              data-lesson-id="${activeLesson.id}"
              rows="3"
              placeholder="Registra tus notas de mapeo cruzado, brechas detectadas o ejemplos aplicables..."
              class="w-full rounded-xl bg-slate-950 border border-slate-800 p-3 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-violet-500"
            >${escapeHtml(noteText)}</textarea>
          </div>

          <div class="flex items-center justify-between pt-2">
            <button
              type="button"
              ${currentIndex <= 0 ? 'disabled' : ''}
              data-action="select-mod4-lesson"
              data-lesson-id="${
                currentIndex > 0 ? lessons[currentIndex - 1].id : activeLesson.id
              }"
              class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold border border-slate-700 bg-slate-900 text-slate-200 disabled:opacity-40 cursor-pointer"
            >
              <i data-lucide="arrow-left" class="w-3.5 h-3.5"></i>
              Lección Anterior
            </button>

            ${
              currentIndex < lessons.length - 1
                ? `
              <button
                type="button"
                data-action="complete-and-next-mod4-lesson"
                data-current-lesson="${activeLesson.id}"
                data-next-lesson="${lessons[currentIndex + 1].id}"
                class="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold bg-violet-500 hover:bg-violet-400 text-slate-950 cursor-pointer"
              >
                Completar y Siguiente Lección
                <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
              </button>
            `
                : `
              <button
                type="button"
                data-action="toggle-mod4-lesson-completed"
                data-lesson-id="${activeLesson.id}"
                class="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold bg-emerald-500 hover:bg-emerald-400 text-slate-950 cursor-pointer"
              >
                <i data-lucide="check-circle-2" class="w-4 h-4"></i>
                Completar Última Lección
              </button>
            `
            }
          </div>
        </div>
      </div>
    `;
  }

  // --------------------------------------------------------------------------
  // 3. PROCESO OBSERVA (20-40 MIN) - GALERÍA DE VIDEO ANÁLISIS + GUÍAS
  // --------------------------------------------------------------------------
  function renderMod4Observa(state, mod4) {
    const v1 = mod4.observa.video1;
    const v2 = mod4.observa.video2;

    function renderCheckpoint(videoId, cq) {
      const selectedIdx =
        state.mod4ObservaCheckpoints && state.mod4ObservaCheckpoints[videoId];
      const optsHtml = cq.options
        .map((opt, idx) => {
          const isSel = selectedIdx === idx;
          const isCorr = idx === cq.correctIndex;
          let cls =
            'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-600';
          if (isSel) {
            cls = isCorr
              ? 'bg-emerald-950/60 border-emerald-500 text-emerald-200 font-semibold'
              : 'bg-rose-950/50 border-rose-500 text-rose-200';
          }
          return `
            <button
              type="button"
              data-action="answer-mod4-observa-checkpoint"
              data-video-id="${videoId}"
              data-option-index="${idx}"
              class="w-full text-left p-3 rounded-lg border text-xs sm:text-sm transition-all cursor-pointer ${cls}"
            >
              ${escapeHtml(opt)}
            </button>
          `;
        })
        .join('');

      const expHtml =
        selectedIdx !== undefined
          ? `
        <div class="p-3 rounded-lg border text-xs sm:text-sm leading-relaxed ${
          selectedIdx === cq.correctIndex
            ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-200'
            : 'bg-amber-950/40 border-amber-500/40 text-amber-200'
        }">
          <strong>Retroalimentación: </strong>${escapeHtml(cq.explanation)}
        </div>
      `
          : '';

      return `
        <div class="rounded-xl border border-slate-800 bg-slate-950/75 p-4 space-y-3">
          <div class="text-xs font-bold uppercase tracking-wider text-violet-400">
            Checkpoint de Análisis Audiovisual
          </div>
          <p class="text-sm font-bold text-white">${escapeHtml(cq.question)}</p>
          <div class="space-y-2">${optsHtml}</div>
          ${expHtml}
        </div>
      `;
    }

    const threadCardsHtml = v1.backupThreadCards
      .map(
        (card) => `
        <div class="rounded-xl border border-slate-800 bg-slate-950/80 p-4 space-y-2">
          <span class="inline-block text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-violet-500/15 text-violet-300 border border-violet-500/30">
            ${escapeHtml(card.roleBadge)}
          </span>
          <h4 class="text-sm font-bold text-white">${escapeHtml(
            card.framework
          )}</h4>
          <div class="text-xs font-mono text-amber-300">${escapeHtml(
            card.reference
          )}</div>
          <p class="text-xs text-slate-300 leading-relaxed">${escapeHtml(
            card.description
          )}</p>
        </div>
      `
      )
      .join('');

    const translationRowsHtml = v2.metricTranslations
      .map(
        (tr) => `
        <div class="rounded-xl border border-slate-800 bg-slate-950/80 p-4 space-y-3">
          <h4 class="text-sm font-extrabold text-white">${escapeHtml(
            tr.topic
          )}</h4>
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-3">
            <div class="p-3 rounded-lg bg-emerald-950/25 border border-emerald-500/25 text-xs text-slate-200">
              <strong class="text-emerald-300 block mb-1">Dato Técnico (CIS v8.1)</strong>
              ${escapeHtml(tr.cisMetric)}
            </div>
            <div class="p-3 rounded-lg bg-cyan-950/25 border border-cyan-500/25 text-xs text-slate-200">
              <strong class="text-cyan-300 block mb-1">Madurez de Riesgo (NIST CSF 2.0)</strong>
              ${escapeHtml(tr.nistTranslation)}
            </div>
            <div class="p-3 rounded-lg bg-amber-950/25 border border-amber-500/25 text-xs text-slate-200">
              <strong class="text-amber-300 block mb-1">Cumplimiento (ISO 27001/27002)</strong>
              ${escapeHtml(tr.isoTranslation)}
            </div>
          </div>
        </div>
      `
      )
      .join('');

    return `
      <div class="space-y-6">
        <!-- Video 1 -->
        <div class="rounded-2xl border border-slate-800 bg-slate-900/90 p-5 sm:p-6 space-y-5">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-violet-400">
                Video Análisis 1 • ${escapeHtml(v1.duration)}
              </span>
              <h2 class="text-lg sm:text-xl font-bold text-white mt-0.5">${escapeHtml(
                v1.title
              )}</h2>
            </div>
            <a
              href="${v1.youtubeFallbackUrl}"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-cyan-300 shrink-0"
            >
              Buscar en YouTube
              <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
            </a>
          </div>

          ${window.LMS_CAMPUS_VIEWS.renderYouTubeEmbedPlayer({
            videoKey: v1.id,
            defaultUrlOrId: v1.embedUrl,
            title: v1.title,
            fallbackSearchUrl: v1.youtubeFallbackUrl,
            customUrls: state.customVideoUrls,
          })}

          <p class="text-sm text-slate-300 leading-relaxed">${escapeHtml(
            v1.summary
          )}</p>

          <div class="space-y-2">
            <div class="text-xs font-bold uppercase tracking-wider text-violet-300">
              Hilo Conductor Comparativo de Copias de Seguridad (ISO ↔ NIST ↔ CIS)
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">${threadCardsHtml}</div>
          </div>

          ${renderCheckpoint(v1.id, v1.checkpointQuestion)}
        </div>

        <!-- Video 2 -->
        <div class="rounded-2xl border border-slate-800 bg-slate-900/90 p-5 sm:p-6 space-y-5">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-violet-400">
                Video Análisis 2 • ${escapeHtml(v2.duration)}
              </span>
              <h2 class="text-lg sm:text-xl font-bold text-white mt-0.5">${escapeHtml(
                v2.title
              )}</h2>
            </div>
            <a
              href="${v2.youtubeFallbackUrl}"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-cyan-300 shrink-0"
            >
              Buscar en YouTube
              <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
            </a>
          </div>

          ${window.LMS_CAMPUS_VIEWS.renderYouTubeEmbedPlayer({
            videoKey: v2.id,
            defaultUrlOrId: v2.embedUrl,
            title: v2.title,
            fallbackSearchUrl: v2.youtubeFallbackUrl,
            customUrls: state.customVideoUrls,
          })}

          <p class="text-sm text-slate-300 leading-relaxed">${escapeHtml(
            v2.summary
          )}</p>

          <div class="space-y-3">
            <div class="text-xs font-bold uppercase tracking-wider text-violet-300">
              Guía de Traducción de Métricas: De Ingeniería TI a Reporte de Directorio
            </div>
            ${translationRowsHtml}
          </div>

          ${renderCheckpoint(v2.id, v2.checkpointQuestion)}
        </div>
      </div>
    `;
  }

  // --------------------------------------------------------------------------
  // 4. PROCESO EXPLORA (30-45 MIN) - LECTURA, FUENTES OFICIALES Y MATRIZ CSV
  // --------------------------------------------------------------------------
  function renderMod4Explora(state, mod4) {
    const exp = mod4.explora;
    const activeTabId = state.mod4ReadingTabId || 'eq-directa';
    const activeSection =
      exp.readingSections.find((s) => s.id === activeTabId) ||
      exp.readingSections[0];

    const readingTabsHtml = exp.readingSections
      .map((sec) => {
        const isSel = sec.id === activeSection.id;
        return `
          <button
            type="button"
            data-action="select-mod4-reading-tab"
            data-tab-id="${sec.id}"
            class="text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
              isSel
                ? 'bg-violet-500/20 border-violet-500 text-white'
                : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700'
            }"
          >
            <div class="text-[11px] font-bold text-violet-400">${escapeHtml(
              sec.badge
            )}</div>
            <div class="text-xs font-semibold mt-1">${escapeHtml(
              sec.title
            )}</div>
          </button>
        `;
      })
      .join('');

    const docsHtml = exp.officialDocuments
      .map(
        (doc) => `
        <div class="rounded-xl border border-slate-800 bg-slate-950/75 p-4 flex flex-col justify-between space-y-3">
          <div class="space-y-1.5">
            <div class="flex items-center justify-between gap-2">
              <span class="text-[11px] font-bold px-2 py-0.5 rounded bg-cyan-500/15 text-cyan-300 border border-cyan-500/25">
                ${escapeHtml(doc.category)}
              </span>
              <span class="text-[11px] font-mono text-slate-400">${escapeHtml(
                doc.formatBadge
              )}</span>
            </div>
            <h4 class="text-sm font-bold text-white">${escapeHtml(
              doc.title
            )}</h4>
            <p class="text-xs text-slate-400 leading-relaxed">${escapeHtml(
              doc.description
            )}</p>
          </div>
          <a
            href="${doc.url}"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-1.5 text-xs font-bold text-violet-400 hover:text-violet-300"
          >
            Abrir documento oficial
            <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
          </a>
        </div>
      `
      )
      .join('');

    const matrixRowsHtml = exp.masterMatrixRows
      .map(
        (r) => `
        <tr class="bg-slate-900/60 hover:bg-slate-800/40">
          <td class="p-3 font-mono font-bold text-violet-300">${escapeHtml(
            r.unifiedId
          )}</td>
          <td class="p-3 font-bold text-white">${escapeHtml(r.domain)}</td>
          <td class="p-3 text-amber-200">${escapeHtml(r.isoRef)}</td>
          <td class="p-3 text-cyan-200">${escapeHtml(r.nistRef)}</td>
          <td class="p-3 text-emerald-200">${escapeHtml(r.cisRef)}</td>
          <td class="p-3 font-mono font-bold text-emerald-400">${
            r.techStatusPct
          }%</td>
          <td class="p-3 text-slate-300">${escapeHtml(r.governanceGap)}</td>
          <td class="p-3 text-slate-400">${escapeHtml(r.auditableEvidence)}</td>
        </tr>
      `
      )
      .join('');

    return `
      <div class="space-y-6">
        <!-- Lectura Técnica -->
        <div class="rounded-2xl border border-slate-800 bg-slate-900/90 p-5 sm:p-6 space-y-4">
          <div>
            <h2 class="text-lg sm:text-xl font-bold text-white">${escapeHtml(
              exp.readingTitle
            )}</h2>
            <p class="text-sm text-slate-400 mt-1">${escapeHtml(
              exp.readingSubtitle
            )}</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-3">${readingTabsHtml}</div>

          <div class="rounded-xl border border-violet-500/35 bg-slate-950/85 p-5 space-y-3">
            <span class="text-xs font-bold text-violet-300 uppercase tracking-wider">${escapeHtml(
              activeSection.badge
            )}</span>
            <h3 class="text-base sm:text-lg font-bold text-white">${escapeHtml(
              activeSection.title
            )}</h3>
            <p class="text-sm text-slate-300 leading-relaxed">${escapeHtml(
              activeSection.summary
            )}</p>
            <div class="p-3.5 rounded-lg bg-slate-900 border border-slate-800 text-xs sm:text-sm text-cyan-200">
              <strong>Ejemplo Concreto: </strong>${escapeHtml(
                activeSection.example
              )}
            </div>
            <div class="p-3.5 rounded-lg bg-emerald-950/35 border border-emerald-500/30 text-xs sm:text-sm text-emerald-200">
              <strong>Regla para Auditores GRC: </strong>${escapeHtml(
                activeSection.ruleForAuditors
              )}
            </div>
          </div>
        </div>

        <!-- Fuentes Oficiales -->
        <div class="rounded-2xl border border-slate-800 bg-slate-900/90 p-5 sm:p-6 space-y-4">
          <h3 class="text-base sm:text-lg font-bold text-white flex items-center gap-2">
            <i data-lucide="file-text" class="w-5 h-5 text-violet-400"></i>
            Biblioteca Oficial de Mapeos Cruzados (CIS • NIST • ISO • INCIBE)
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">${docsHtml}</div>
        </div>

        <!-- Matriz Maestra Descargable -->
        <div class="rounded-2xl border border-slate-800 bg-slate-900/90 p-5 sm:p-6 space-y-4">
          <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <h3 class="text-base sm:text-lg font-bold text-white">${escapeHtml(
                exp.matrixTitle
              )}</h3>
              <p class="text-xs sm:text-sm text-slate-400 mt-1">${escapeHtml(
                exp.matrixDescription
              )}</p>
            </div>
            <button
              type="button"
              data-action="download-mod4-matrix-csv"
              class="shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-violet-500 hover:bg-violet-400 text-slate-950 text-xs font-extrabold cursor-pointer"
            >
              <i data-lucide="download" class="w-4 h-4"></i>
              <span>${
                state.mod4MatrixDownloaded
                  ? 'Descargar Matriz Nuevamente (.CSV)'
                  : 'Descargar Matriz Integrada ISO-NIST-CIS (.CSV compatible con Excel)'
              }</span>
            </button>
          </div>

          ${
            state.mod4MatrixDownloaded
              ? `
            <div class="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-xs text-emerald-200 flex items-center gap-2">
              <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-400 shrink-0"></i>
              <span>Matriz Integrada de 15 Controles Maestros exportada en CSV (UTF-8 con BOM) lista para abrir y editar en Microsoft Excel.</span>
            </div>
          `
              : ''
          }

          <div class="overflow-x-auto rounded-xl border border-slate-800 max-h-[440px]">
            <table class="w-full text-left border-collapse text-xs">
              <thead class="sticky top-0 bg-slate-950 text-slate-300 border-b border-slate-800">
                <tr>
                  <th class="p-3 font-bold">ID_Unificado</th>
                  <th class="p-3 font-bold">Dominio_Seguridad</th>
                  <th class="p-3 font-bold">ISO_27001_27002_2022</th>
                  <th class="p-3 font-bold">NIST_CSF_2_0</th>
                  <th class="p-3 font-bold">CIS_Controls_v8_1</th>
                  <th class="p-3 font-bold">% Técnico</th>
                  <th class="p-3 font-bold">Brecha_Gobernanza</th>
                  <th class="p-3 font-bold">Evidencia_Auditable</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-800">${matrixRowsHtml}</tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  }

  // --------------------------------------------------------------------------
  // 5. PROCESO PRACTICA (60-90 MIN) - 2 LABORATORIOS INTERACTIVOS
  // --------------------------------------------------------------------------
  function renderMod4Practica(state, mod4) {
    const prac = mod4.practica;
    const act1Answers = state.mod4PracticaAct1Answers || {};
    const act1Correct = prac.tripleChallenges.filter(
      (c) => act1Answers[c.id] === c.correctOptionId
    ).length;

    const act1Html = prac.tripleChallenges
      .map((ch) => {
        const chosen = act1Answers[ch.id];
        const isCorrect = chosen === ch.correctOptionId;

        const optsHtml = ch.options
          .map((opt) => {
            const isSel = chosen === opt.id;
            let cls =
              'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-600';
            if (isSel) {
              cls =
                opt.id === ch.correctOptionId
                  ? 'bg-emerald-950/60 border-emerald-500 text-emerald-200 font-semibold'
                  : 'bg-rose-950/50 border-rose-500 text-rose-200';
            }
            return `
              <button
                type="button"
                data-action="mod4-practica-act1-pick"
                data-challenge-id="${ch.id}"
                data-option-id="${opt.id}"
                class="w-full text-left p-3 rounded-lg border text-xs sm:text-sm transition-all cursor-pointer ${cls}"
              >
                ${escapeHtml(opt.label)}
              </button>
            `;
          })
          .join('');

        return `
          <div class="rounded-xl border border-slate-800 bg-slate-950/75 p-4 space-y-3">
            <div class="flex items-center justify-between gap-2">
              <span class="text-xs font-bold text-violet-400">
                Reto ${ch.number} • ${escapeHtml(ch.domainTitle)}
              </span>
            </div>
            <p class="text-sm font-bold text-white">${escapeHtml(ch.prompt)}</p>
            <div class="space-y-2">${optsHtml}</div>
            ${
              chosen
                ? `
              <div class="p-3 rounded-lg border text-xs leading-relaxed ${
                isCorrect
                  ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-200'
                  : 'bg-rose-950/35 border-rose-500/40 text-rose-200'
              }">
                <strong>${
                  isCorrect ? '¡Triada Exacta! ' : 'Triada Incorrecta: '
                }</strong>
                ${escapeHtml(ch.explanation)}
              </div>
            `
                : ''
            }
          </div>
        `;
      })
      .join('');

    const act2Answers = state.mod4PracticaAct2Answers || {};
    const act2Correct = prac.auditGapCases.filter(
      (g) => act2Answers[g.id] === g.correctFramework
    ).length;

    const frameworksList = [
      'ISO/IEC 27001:2022',
      'NIST CSF 2.0',
      'CIS Controls v8.1',
    ];

    const act2Html = prac.auditGapCases
      .map((gap) => {
        const chosen = act2Answers[gap.id];
        const isCorrect = chosen === gap.correctFramework;

        const btnsHtml = frameworksList
          .map((fw) => {
            const isSel = chosen === fw;
            let cls =
              'bg-slate-900 border-slate-700 text-slate-300 hover:border-slate-500';
            if (isSel) {
              cls =
                fw === gap.correctFramework
                  ? 'bg-emerald-500 text-slate-950 border-emerald-400'
                  : 'bg-rose-500 text-white border-rose-400';
            }
            return `
              <button
                type="button"
                data-action="mod4-practica-act2-pick"
                data-gap-id="${gap.id}"
                data-framework="${fw}"
                class="px-3.5 py-2 rounded-lg text-xs font-extrabold border transition-all cursor-pointer ${cls}"
              >
                ${escapeHtml(fw)}
              </button>
            `;
          })
          .join('');

        return `
          <div class="rounded-xl border border-slate-800 bg-slate-950/75 p-4 space-y-3">
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div class="space-y-1">
                <span class="text-xs font-bold text-amber-300">${escapeHtml(
                  gap.companyLabel
                )}</span>
                <p class="text-sm font-medium text-white">${escapeHtml(
                  gap.scenario
                )}</p>
              </div>
              <div class="flex flex-wrap items-center gap-2 shrink-0">${btnsHtml}</div>
            </div>
            ${
              chosen
                ? `
              <div class="p-3 rounded-lg border text-xs leading-relaxed ${
                isCorrect
                  ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-200'
                  : 'bg-rose-950/35 border-rose-500/40 text-rose-200'
              }">
                <strong>${
                  isCorrect
                    ? `¡Diagnóstico Correcto (${gap.correctFramework})! `
                    : `Desatendido: ${gap.correctFramework}. `
                }</strong>
                ${escapeHtml(gap.explanation)}
              </div>
            `
                : ''
            }
          </div>
        `;
      })
      .join('');

    return `
      <div class="space-y-6">
        <!-- Actividad 1 -->
        <div class="rounded-2xl border border-slate-800 bg-slate-900/90 p-5 sm:p-6 space-y-4">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h2 class="text-lg sm:text-xl font-bold text-white">${escapeHtml(
                prac.activity1Title
              )}</h2>
              <p class="text-xs sm:text-sm text-slate-400 mt-1">${escapeHtml(
                prac.activity1Instructions
              )}</p>
            </div>
            <div class="flex items-center gap-2 shrink-0">
              <span class="text-xs font-bold px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-violet-300">
                Aciertos: ${act1Correct}/${prac.tripleChallenges.length}
              </span>
              <button
                type="button"
                data-action="reset-mod4-practica-act1"
                class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 cursor-pointer"
              >
                <i data-lucide="rotate-ccw" class="w-3.5 h-3.5"></i>
                Reiniciar
              </button>
            </div>
          </div>
          <div class="space-y-3">${act1Html}</div>
        </div>

        <!-- Actividad 2 -->
        <div class="rounded-2xl border border-slate-800 bg-slate-900/90 p-5 sm:p-6 space-y-4">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h2 class="text-lg sm:text-xl font-bold text-white">${escapeHtml(
                prac.activity2Title
              )}</h2>
              <p class="text-xs sm:text-sm text-slate-400 mt-1">${escapeHtml(
                prac.activity2Instructions
              )}</p>
            </div>
            <div class="flex items-center gap-2 shrink-0">
              <span class="text-xs font-bold px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-violet-300">
                Aciertos: ${act2Correct}/${prac.auditGapCases.length}
              </span>
              <button
                type="button"
                data-action="reset-mod4-practica-act2"
                class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 cursor-pointer"
              >
                <i data-lucide="rotate-ccw" class="w-3.5 h-3.5"></i>
                Reiniciar
              </button>
            </div>
          </div>
          <div class="space-y-3">${act2Html}</div>
        </div>
      </div>
    `;
  }

  // --------------------------------------------------------------------------
  // 6. PROCESO APLICA (30-60 MIN) - SIMULADOR EN ENTIDAD PÚBLICA
  // --------------------------------------------------------------------------
  function renderMod4Aplica(state, mod4) {
    const apl = mod4.aplica;
    const selectedOpt = apl.options.find(
      (o) => o.id === state.mod4AplicaSelectedOption
    );

    const contextHtml = apl.clinicalContextDetails
      .map(
        (c) => `
        <div class="rounded-xl border border-slate-800 bg-slate-950/75 p-4">
          <div class="text-xs font-bold text-amber-300 uppercase tracking-wider">${escapeHtml(
            c.label
          )}</div>
          <p class="text-xs sm:text-sm text-slate-300 mt-1.5 leading-relaxed">${escapeHtml(
            c.detail
          )}</p>
        </div>
      `
      )
      .join('');

    const optsHtml = apl.options
      .map((opt) => {
        const isSel = state.mod4AplicaSelectedOption === opt.id;
        return `
          <button
            type="button"
            data-action="select-mod4-aplica-option"
            data-option-id="${opt.id}"
            class="w-full text-left p-4 rounded-xl border transition-all cursor-pointer ${
              isSel
                ? opt.isCorrect
                  ? 'bg-emerald-950/50 border-emerald-500 text-white'
                  : 'bg-rose-950/40 border-rose-500 text-white'
                : 'bg-slate-950/75 border-slate-800 text-slate-300 hover:border-slate-600'
            }"
          >
            <div class="flex items-start gap-3">
              <span class="px-2.5 py-1 rounded-md text-xs font-extrabold shrink-0 ${
                isSel
                  ? opt.isCorrect
                    ? 'bg-emerald-500 text-slate-950'
                    : 'bg-rose-500 text-white'
                  : 'bg-slate-800 text-slate-300'
              }">${escapeHtml(opt.optionCode)}</span>
              <div>
                <div class="text-sm font-bold text-white">${escapeHtml(
                  opt.title
                )}</div>
                <p class="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">${escapeHtml(
                  opt.description
                )}</p>
              </div>
            </div>
          </button>
        `;
      })
      .join('');

    const feedbackHtml = selectedOpt
      ? `
      <div class="rounded-xl border p-5 space-y-3 ${
        selectedOpt.isCorrect
          ? 'bg-emerald-950/40 border-emerald-500/50'
          : 'bg-rose-950/35 border-rose-500/50'
      }">
        <div class="text-base font-bold text-white flex items-center gap-2">
          <i data-lucide="${
            selectedOpt.isCorrect ? 'check-circle-2' : 'alert-triangle'
          }" class="w-5 h-5 ${
        selectedOpt.isCorrect ? 'text-emerald-400' : 'text-rose-400'
      } shrink-0"></i>
          <span>${escapeHtml(selectedOpt.immediateFeedback)}</span>
        </div>

        ${
          selectedOpt.consequenceCard
            ? `
          <div class="p-3.5 rounded-lg bg-slate-950/75 border ${
            selectedOpt.isCorrect
              ? 'border-emerald-500/30 text-emerald-200'
              : 'border-rose-500/30 text-rose-200'
          } text-xs sm:text-sm leading-relaxed">
            <strong>Consecuencia: </strong>${escapeHtml(
              selectedOpt.consequenceCard
            )}
          </div>
        `
            : ''
        }

        ${
          selectedOpt.explanationCard
            ? `
          <div class="p-3.5 rounded-lg bg-slate-950/75 border border-violet-500/30 text-xs sm:text-sm text-violet-200 leading-relaxed">
            <strong>Explicación Normativa: </strong>${escapeHtml(
              selectedOpt.explanationCard
            )}
          </div>
        `
            : ''
        }

        <div class="flex flex-wrap gap-2 pt-1">
          ${selectedOpt.controlsMapped
            .map(
              (c) => `
            <span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-900 border border-slate-700 text-violet-300">
              ${escapeHtml(c)}
            </span>
          `
            )
            .join('')}
        </div>
      </div>
    `
      : '';

    return `
      <div class="rounded-2xl border border-slate-800 bg-slate-900/90 p-5 sm:p-6 space-y-5">
        <div>
          <span class="text-xs font-bold uppercase tracking-wider text-violet-400">
            Simulador de Caso Real • Auditoría de Certificación
          </span>
          <h2 class="text-xl font-bold text-white mt-1">${escapeHtml(
            apl.title
          )}</h2>
          <p class="text-sm text-slate-400 mt-1">${escapeHtml(apl.subtitle)}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-3">${contextHtml}</div>

        <div class="rounded-xl border border-amber-500/30 bg-amber-950/15 p-4 space-y-2">
          <div class="text-xs font-bold uppercase tracking-wider text-amber-400">
            Situación Planteada
          </div>
          <p class="text-sm sm:text-base text-slate-100 leading-relaxed">${escapeHtml(
            apl.situation
          )}</p>
          <p class="text-sm sm:text-base font-bold text-violet-300 pt-1">${escapeHtml(
            apl.challengeQuestion
          )}</p>
        </div>

        <div class="space-y-3">${optsHtml}</div>
        ${feedbackHtml}
      </div>
    `;
  }

  // --------------------------------------------------------------------------
  // 7. PROCESO COMPRUEBA (15-30 MIN) - CUESTIONARIO FORMATIVO (10 PREGUNTAS)
  // --------------------------------------------------------------------------
  function renderMod4Comprueba(state, mod4) {
    const comp = mod4.comprueba;
    const questions = comp.questions;
    const answers = state.mod4QuizAnswers || {};
    const totalAnswered = questions.filter(
      (q) => answers[q.id] !== undefined
    ).length;
    const passed =
      state.mod4QuizScore !== null && state.mod4QuizScore >= comp.passingScore;

    const resultBanner =
      state.mod4QuizSubmitted && state.mod4QuizScore !== null
        ? `
      <div class="rounded-xl border p-4 flex items-center gap-3 ${
        passed
          ? 'bg-emerald-950/45 border-emerald-500/50 text-emerald-100'
          : 'bg-rose-950/40 border-rose-500/50 text-rose-100'
      }">
        <i data-lucide="trophy" class="w-7 h-7 ${
          passed ? 'text-emerald-400' : 'text-rose-400'
        } shrink-0"></i>
        <div>
          <div class="text-base font-extrabold">
            Calificación Obtenida: ${state.mod4QuizScore}% (Mínimo: ${
            comp.passingScore
          }%)
          </div>
          <p class="text-xs sm:text-sm opacity-90">
            ${
              passed
                ? 'Evaluación aprobada. El Proceso Comprueba del Módulo 4 quedó completado.'
                : 'Aún no alcanzas el 70% requerido. Revisa el sustento técnico e inténtalo de nuevo.'
            }
          </p>
        </div>
      </div>
    `
        : '';

    const questionsHtml = questions
      .map((q) => {
        const chosen = answers[q.id];
        const isCorrect = chosen === q.correctIndex;

        const optsHtml = q.options
          .map((opt, idx) => {
            const isChosen = chosen === idx;
            let cls =
              'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-600';
            if (state.mod4QuizSubmitted) {
              if (idx === q.correctIndex) {
                cls =
                  'bg-emerald-950/50 border-emerald-500 text-emerald-200 font-semibold';
              } else if (isChosen) {
                cls = 'bg-rose-950/50 border-rose-500 text-rose-200';
              }
            } else if (isChosen) {
              cls = 'bg-violet-500/20 border-violet-400 text-white font-semibold';
            }

            return `
              <button
                type="button"
                ${state.mod4QuizSubmitted ? 'disabled' : ''}
                data-action="select-mod4-quiz-answer"
                data-question-id="${q.id}"
                data-option-index="${idx}"
                class="w-full text-left p-3 rounded-lg border text-xs sm:text-sm transition-all cursor-pointer ${cls}"
              >
                ${escapeHtml(opt)}
              </button>
            `;
          })
          .join('');

        return `
          <div class="rounded-xl border border-slate-800 bg-slate-950/70 p-4 sm:p-5 space-y-3">
            <div class="flex flex-wrap items-center justify-between gap-2">
              <span class="text-xs font-bold text-violet-400">
                Pregunta ${q.number} • ${escapeHtml(q.type)}
              </span>
              <span class="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-800 text-amber-300">
                ${escapeHtml(q.category)}
              </span>
            </div>
            <p class="text-sm sm:text-base font-bold text-white">${escapeHtml(
              q.question
            )}</p>
            <div class="space-y-2">${optsHtml}</div>
            ${
              state.mod4QuizSubmitted
                ? `
              <div class="p-3 rounded-lg border text-xs sm:text-sm leading-relaxed ${
                isCorrect
                  ? 'bg-emerald-950/35 border-emerald-500/40 text-emerald-200'
                  : 'bg-amber-950/35 border-amber-500/40 text-amber-200'
              }">
                <strong>Sustento Técnico: </strong>${escapeHtml(q.explanation)}
              </div>
            `
                : ''
            }
          </div>
        `;
      })
      .join('');

    return `
      <div class="rounded-2xl border border-slate-800 bg-slate-900/90 p-5 sm:p-6 space-y-5">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
          <div>
            <h2 class="text-xl font-bold text-white">${escapeHtml(
              comp.title
            )}</h2>
            <p class="text-sm text-slate-400 mt-1">${escapeHtml(
              comp.subtitle
            )}</p>
          </div>
          <div class="flex items-center gap-2 shrink-0">
            <span class="text-xs font-bold px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-200">
              Respondidas: ${totalAnswered}/${questions.length}
            </span>
            ${
              state.mod4QuizSubmitted
                ? `
              <button
                type="button"
                data-action="reset-mod4-quiz"
                class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 cursor-pointer"
              >
                <i data-lucide="rotate-ccw" class="w-3.5 h-3.5"></i>
                Reintentar
              </button>
            `
                : ''
            }
          </div>
        </div>

        ${resultBanner}
        <div class="space-y-4">${questionsHtml}</div>

        ${
          !state.mod4QuizSubmitted
            ? `
          <div class="flex justify-end pt-2">
            <button
              type="button"
              ${totalAnswered < questions.length ? 'disabled' : ''}
              data-action="submit-mod4-quiz"
              class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-violet-500 hover:bg-violet-400 disabled:opacity-40 text-slate-950 text-sm font-extrabold cursor-pointer"
            >
              <i data-lucide="clipboard-check" class="w-4 h-4"></i>
              Enviar Evaluación (${totalAnswered}/${questions.length})
            </button>
          </div>
        `
            : ''
        }
      </div>
    `;
  }

  // --------------------------------------------------------------------------
  // 8. PROCESO RECUERDA (5-10 MIN) - INFOGRAFÍA DE 5 PILARES
  // --------------------------------------------------------------------------
  function renderMod4Recuerda(state, mod4) {
    const rec = mod4.recuerda;
    const selectedId =
      state.mod4SelectedRecuerdaPillarId || rec.pillars[0].id;
    const activePillar =
      rec.pillars.find((p) => p.id === selectedId) || rec.pillars[0];

    const pillarTabsHtml = rec.pillars
      .map((p) => {
        const isSel = p.id === activePillar.id;
        return `
          <button
            type="button"
            data-action="select-mod4-recuerda-pillar"
            data-pillar-id="${p.id}"
            class="text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
              isSel
                ? 'bg-violet-500/20 border-violet-500 text-white'
                : 'bg-slate-950/75 border-slate-800 text-slate-300 hover:border-slate-700'
            }"
          >
            <span class="text-[11px] font-bold text-violet-400">${escapeHtml(
              p.badge
            )}</span>
            <div class="text-xs font-bold mt-1 line-clamp-2">${escapeHtml(
              p.title
            )}</div>
          </button>
        `;
      })
      .join('');

    const checklistHtml = activePillar.checklist
      .map(
        (it) => `
        <div class="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
          <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-400 shrink-0 mt-0.5"></i>
          <span>${escapeHtml(it)}</span>
        </div>
      `
      )
      .join('');

    const bannerHtml = state.module4CompletedBanner
      ? `
      <div class="p-4 rounded-xl bg-emerald-950/45 border border-emerald-500/50 text-emerald-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div class="flex items-center gap-3">
          <i data-lucide="trophy" class="w-6 h-6 text-emerald-400 shrink-0"></i>
          <div>
            <div class="text-sm font-extrabold">¡Módulo 4 Completado al 100%!</div>
            <p class="text-xs opacity-90">Tu progreso integrador ha quedado guardado en localStorage. La sección Evaluación Final y Cierre queda habilitada para consulta.</p>
          </div>
        </div>
        <button
          type="button"
          data-action="open-certificate-modal"
          class="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-extrabold cursor-pointer shrink-0"
        >
          Ver Certificado / Requisitos
        </button>
      </div>
    `
      : '';

    return `
      <div class="rounded-2xl border border-slate-800 bg-slate-900/90 p-5 sm:p-6 space-y-5">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 class="text-xl font-bold text-white">${escapeHtml(
              rec.title
            )}</h2>
            <p class="text-sm text-slate-400 mt-1">${escapeHtml(
              rec.subtitle
            )}</p>
          </div>
          <button
            type="button"
            data-action="complete-all-module-4"
            class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-violet-500 hover:bg-violet-400 text-slate-950 text-xs font-extrabold cursor-pointer shrink-0"
          >
            <i data-lucide="trophy" class="w-4 h-4"></i>
            Completar Módulo 4 (8/8 Procesos)
          </button>
        </div>

        ${bannerHtml}

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5">
          ${pillarTabsHtml}
        </div>

        <div class="rounded-xl border border-violet-500/35 bg-slate-950/85 p-5 space-y-4">
          <div class="flex flex-wrap items-center justify-between gap-2">
            <span class="text-xs font-bold px-2.5 py-1 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30">
              Pilar ${activePillar.number} • ${escapeHtml(activePillar.badge)}
            </span>
            <span class="text-xs font-mono text-amber-300">${escapeHtml(
              activePillar.keyMetrics
            )}</span>
          </div>

          <h3 class="text-lg sm:text-xl font-bold text-white">${escapeHtml(
            activePillar.title
          )}</h3>
          <p class="text-sm sm:text-base text-slate-200 leading-relaxed">${escapeHtml(
            activePillar.coreStatement
          )}</p>

          <div class="p-3.5 rounded-lg bg-violet-950/35 border border-violet-500/25 text-xs sm:text-sm text-violet-200">
            <strong class="text-violet-300">Criterio Integrador: </strong>${escapeHtml(
              activePillar.auditTakeaway
            )}
          </div>

          <div class="space-y-2 pt-1">
            <div class="text-xs font-bold uppercase tracking-wider text-slate-400">
              Checklist Ejecutivo:
            </div>
            ${checklistHtml}
          </div>
        </div>
      </div>
    `;
  }

  // --------------------------------------------------------------------------
  // RENDERIZADOR PRINCIPAL DEL MÓDULO 4
  // --------------------------------------------------------------------------
  function renderModuleFourProcess(state, activeView) {
    const mod4 = window.LMS_DATA.MODULE_4_DATA;
    const processId = activeView.processId || 'inicia';
    const activeLessonId = activeView.lessonId || 'leccion-4-1';
    const order = [
      'inicia',
      'aprende',
      'observa',
      'explora',
      'practica',
      'aplica',
      'comprueba',
      'recuerda',
    ];
    const currentIdx = order.indexOf(processId);
    const meta =
      mod4.processesMeta.find((p) => p.id === processId) ||
      mod4.processesMeta[0];
    const isCompleted = Boolean(
      state.completedProcessesMod4 && state.completedProcessesMod4[processId]
    );
    const prevId = currentIdx > 0 ? order[currentIdx - 1] : null;
    const nextId = currentIdx < order.length - 1 ? order[currentIdx + 1] : null;

    const stepperHtml = mod4.processesMeta
      .map((p, idx) => {
        const isAct = p.id === processId;
        const done = Boolean(
          state.completedProcessesMod4 && state.completedProcessesMod4[p.id]
        );
        return `
          <button
            type="button"
            data-action="select-mod4-process"
            data-process-id="${p.id}"
            class="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all border cursor-pointer ${
              isAct
                ? 'bg-violet-500 text-slate-950 border-violet-400'
                : done
                ? 'bg-emerald-950/60 text-emerald-300 border-emerald-700/50'
                : 'bg-slate-900/80 text-slate-400 border-slate-800 hover:text-slate-200'
            }"
          >
            <span>${idx + 1}.</span>
            <span>${escapeHtml(p.shortTitle)}</span>
            ${
              done && !isAct
                ? '<i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-emerald-400"></i>'
                : ''
            }
          </button>
        `;
      })
      .join('');

    let bodyHtml = '';
    if (processId === 'inicia') bodyHtml = renderMod4Inicia(state, mod4);
    else if (processId === 'aprende')
      bodyHtml = renderMod4Aprende(state, mod4, activeLessonId);
    else if (processId === 'observa') bodyHtml = renderMod4Observa(state, mod4);
    else if (processId === 'explora') bodyHtml = renderMod4Explora(state, mod4);
    else if (processId === 'practica')
      bodyHtml = renderMod4Practica(state, mod4);
    else if (processId === 'aplica') bodyHtml = renderMod4Aplica(state, mod4);
    else if (processId === 'comprueba')
      bodyHtml = renderMod4Comprueba(state, mod4);
    else if (processId === 'recuerda')
      bodyHtml = renderMod4Recuerda(state, mod4);

    return `
      <div class="max-w-6xl mx-auto space-y-6 pb-12">
        <div class="rounded-2xl border border-violet-500/30 bg-gradient-to-br from-slate-900 via-slate-900 to-violet-950/30 p-5 sm:p-6 shadow-xl">
          <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div class="space-y-1.5">
              <div class="flex flex-wrap items-center gap-2">
                <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-violet-500/20 text-violet-300 border border-violet-500/30">
                  MÓDULO 4 • Integración ISO + NIST + CIS
                </span>
                <span class="text-xs font-mono text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded-full border border-slate-700">
                  Duración: ${escapeHtml(meta.duration)}
                </span>
              </div>
              <h1 class="text-xl sm:text-2xl font-extrabold text-white tracking-tight pt-1">
                ${escapeHtml(meta.title)}
              </h1>
              <p class="text-sm text-slate-300">${escapeHtml(meta.subtitle)}</p>
            </div>

            <button
              type="button"
              data-action="toggle-mod4-process-completed"
              data-process-id="${processId}"
              class="shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold border cursor-pointer ${
                isCompleted
                  ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50'
                  : 'bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-700'
              }"
            >
              <i data-lucide="${
                isCompleted ? 'check-circle-2' : 'circle'
              }" class="w-4 h-4 ${
      isCompleted ? 'text-emerald-400' : 'text-slate-400'
    }"></i>
              <span>${
                isCompleted ? 'Proceso Completado' : 'Marcar como Completado'
              }</span>
            </button>
          </div>

          <div class="mt-5 pt-4 border-t border-slate-800/80 flex items-center gap-1.5 overflow-x-auto pb-1">
            ${stepperHtml}
          </div>
        </div>

        ${bodyHtml}

        <div class="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-slate-800">
          ${
            prevId
              ? `
            <button
              type="button"
              data-action="select-mod4-process"
              data-process-id="${prevId}"
              class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 hover:bg-slate-800 text-sm font-semibold cursor-pointer"
            >
              <i data-lucide="arrow-left" class="w-4 h-4"></i>
              Proceso Anterior
            </button>
          `
              : `
            <button
              type="button"
              data-action="select-mod3-process"
              data-process-id="recuerda"
              class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 hover:bg-slate-800 text-sm font-semibold cursor-pointer"
            >
              <i data-lucide="arrow-left" class="w-4 h-4"></i>
              Volver al Módulo 3
            </button>
          `
          }

          ${
            nextId
              ? `
            <button
              type="button"
              data-action="complete-and-next-mod4-process"
              data-current-process="${processId}"
              data-next-process="${nextId}"
              class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-violet-500 hover:bg-violet-400 text-slate-950 text-sm font-extrabold cursor-pointer"
            >
              Completar y Siguiente Proceso
              <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </button>
          `
              : `
            <button
              type="button"
              data-action="complete-all-module-4"
              class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-sm font-extrabold cursor-pointer"
            >
              <i data-lucide="trophy" class="w-4 h-4"></i>
              Completar Módulo 4
            </button>
          `
          }
        </div>
      </div>
    `;
  }

  window.LMS_MODULE4_COMPONENTS = {
    renderModuleFourProcess: renderModuleFourProcess,
  };
})();

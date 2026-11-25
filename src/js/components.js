/**
 * ============================================================================
 * COMPONENTES DE INTERFAZ MODULARES EXHAUSTIVOS: src/js/components.js
 * Renderiza Header, Sidebar, Sección 0, los 8 Procesos Pedagógicos del
 * Módulo 1 (100% interactivos) y el Modal de Certificación.
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

  // ==========================================================================
  // 1. HEADER SUPERIOR FIJO (ESTILO UDEMY + CAMPUS GRUPO ROMERO)
  // ==========================================================================
  function renderHeader(state, metrics) {
    const isCompleted =
      metrics.progressPercentage === 100 &&
      (state.quizScore === null || state.quizScore >= 70);

    return `
      <div class="max-w-[1640px] mx-auto h-full px-4 lg:px-6 flex items-center justify-between gap-3 sm:gap-4">
        <div class="flex items-center gap-3 min-w-0">
          <button
            type="button"
            id="btn-toggle-mobile-sidebar"
            class="lg:hidden p-2 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors cursor-pointer"
            aria-label="Alternar temario"
          >
            <i data-lucide="menu" class="w-5 h-5"></i>
          </button>

          <button
            type="button"
            data-action="select-dashboard"
            class="flex items-center justify-center w-10 h-10 rounded-xl bg-[#C13B2A] text-white shadow-sm shrink-0 hover:bg-[#A63122] transition-colors cursor-pointer"
            title="Ir al Panel del participante"
          >
            <i data-lucide="shield-check" class="w-5 h-5 text-white"></i>
          </button>

          <div class="min-w-0">
            <div class="flex items-center gap-2 flex-wrap">
              <span class="text-[11px] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-[#FDF2F0] text-[#C13B2A] border border-[#F5CFC9]">
                G4-CIBER-2026
              </span>
              <span class="hidden sm:inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                <i data-lucide="clock" class="w-3 h-3"></i>
                100% Asíncrono
              </span>
              <span class="hidden xl:inline-flex items-center gap-1 text-[11px] font-medium px-2.5 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200">
                <i data-lucide="layers" class="w-3 h-3"></i>
                ISO 27001/27002:2022 • NIST CSF 2.0 • CIS v8.1
              </span>
            </div>
            <h1 class="text-sm sm:text-base font-bold text-slate-900 truncate mt-0.5">
              Marcos y Buenas Prácticas de Ciberseguridad
            </h1>
          </div>
        </div>

        <div class="flex items-center gap-2.5 sm:gap-3 shrink-0">
          ${
            state.accessId
              ? `<button
                  type="button"
                  data-action="copy-active-id"
                  title="Haz clic para copiar tu ID de acceso sin contraseña"
                  class="hidden xl:inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#FAF8F6] border border-slate-200 hover:border-[#C13B2A]/40 transition-colors cursor-pointer"
                >
                  <i data-lucide="key-round" class="w-3.5 h-3.5 text-[#C13B2A]"></i>
                  <span class="text-[11px] text-slate-500 font-medium">ID:</span>
                  <span class="text-xs font-mono font-bold text-slate-900">${escapeHtml(
                    state.accessId
                  )}</span>
                </button>`
              : ''
          }

          <div class="hidden md:flex flex-col w-44 lg:w-52 bg-[#FAF8F6] border border-slate-200 rounded-xl px-3 py-1.5">
            <div class="flex items-center justify-between text-[11px] mb-1">
              <span class="text-slate-600 font-medium flex items-center gap-1">
                <i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-emerald-600"></i>
                Progreso (${metrics.completedUnits}/${metrics.totalTrackableUnits})
              </span>
              <span class="font-bold text-[#C13B2A]">${metrics.progressPercentage}%</span>
            </div>
            <div class="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
              <div
                class="h-full bg-[#C13B2A] rounded-full transition-all duration-300"
                style="width: ${metrics.progressPercentage}%"
              ></div>
            </div>
          </div>

          <div class="flex md:hidden items-center gap-1 px-2.5 py-1.5 rounded-lg bg-[#FDF2F0] border border-[#F5CFC9] text-xs font-bold text-[#C13B2A]">
            <span>${metrics.progressPercentage}%</span>
          </div>

          <button
            type="button"
            data-action="open-certificate-modal"
            class="flex items-center gap-1.5 px-3 sm:px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              isCompleted
                ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm'
                : 'bg-[#C13B2A] hover:bg-[#A63122] text-white shadow-sm'
            }"
          >
            <i data-lucide="award" class="w-4 h-4 text-white"></i>
            <span class="hidden sm:inline">Certificado</span>
          </button>

          <button
            type="button"
            data-action="logout-to-landing"
            title="Cambiar participante o ingresar con otro ID"
            class="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-2 rounded-xl text-xs font-semibold bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 transition-colors cursor-pointer"
          >
            <i data-lucide="log-out" class="w-3.5 h-3.5 text-slate-500"></i>
            <span class="hidden sm:inline">Cambiar ID</span>
          </button>
        </div>
      </div>
    `;
  }

  // ==========================================================================
  // 2. BARRA LATERAL ESTRUCTURADA (ESTILO CAMPUS ROMERO COLAPSABLE)
  // ==========================================================================
  function renderSidebar(state, metrics) {
    const data = window.LMS_DATA;
    const processesMeta = data.MODULE_1_DATA.processesMeta;

    const isDashboardActive = state.activeView.type === 'dashboard';
    const isSec0Active = state.activeView.type === 'section-0';
    const isMod1Expanded = state.sidebarExpanded.module1;
    const isAprendeExpanded = state.sidebarExpanded.aprendeSubmenu;
    const allExpanded =
      state.sidebarExpanded.module1 &&
      state.sidebarExpanded.module2 &&
      state.sidebarExpanded.module3 &&
      state.sidebarExpanded.module4;

    const processesHtml = processesMeta
      .map((proc) => {
        const isSelected =
          state.activeView.type === 'module-1' &&
          state.activeView.processId === proc.id;
        const isDone = Boolean(state.completedProcesses[proc.id]);
        const hasSubLessons =
          Array.isArray(proc.subLessons) && proc.subLessons.length > 0;

        let subLessonsHtml = '';
        if (hasSubLessons && isAprendeExpanded) {
          const items = proc.subLessons
            .map((les) => {
              const isLesSelected =
                isSelected &&
                (state.activeView.lessonId || 'leccion-1-1') === les.id;
              const isLesDone = Boolean(state.completedLessons[les.id]);

              return `
                <button
                  type="button"
                  data-action="select-lesson"
                  data-lesson-id="${les.id}"
                  class="w-full text-left px-2.5 py-2 rounded-md text-xs transition-all flex items-start gap-2 cursor-pointer ${
                    isLesSelected
                      ? 'bg-blue-500/20 text-blue-200 font-semibold border border-blue-500/30'
                      : 'text-slate-400 hover:bg-slate-800/60 hover:text-slate-200'
                  }"
                >
                  <i data-lucide="${
                    isLesDone ? 'check-circle-2' : 'circle'
                  }" class="w-3.5 h-3.5 ${
                    isLesDone ? 'text-emerald-400' : 'text-slate-600'
                  } shrink-0 mt-0.5"></i>
                  <div class="min-w-0 flex-1">
                    <div class="flex items-center justify-between">
                      <span class="text-[11px] font-bold text-cyan-400">${escapeHtml(
                        les.code
                      )}</span>
                      <span class="text-[10px] text-slate-500">${escapeHtml(
                        les.duration
                      )}</span>
                    </div>
                    <p class="text-[11px] leading-snug line-clamp-2 mt-0.5">${escapeHtml(
                      les.title
                    )}</p>
                  </div>
                </button>
              `;
            })
            .join('');

          subLessonsHtml = `
            <div class="ml-5 mt-1 pl-3 border-l-2 border-slate-800 space-y-1 py-1">
              ${items}
            </div>
          `;
        }

        return `
          <div class="rounded-lg overflow-hidden">
            <div class="flex items-center justify-between rounded-lg transition-colors ${
              isSelected
                ? 'bg-blue-600/25 text-white border border-blue-500/40'
                : 'hover:bg-slate-800/70 text-slate-300'
            }">
              <button
                type="button"
                data-action="select-process"
                data-process-id="${proc.id}"
                class="flex-1 text-left px-3 py-2.5 flex items-start gap-2.5 min-w-0 cursor-pointer"
              >
                <div class="mt-0.5 shrink-0">
                  ${
                    isDone
                      ? '<i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-400"></i>'
                      : isSelected
                      ? `<i data-lucide="${
                          proc.icon || 'sparkles'
                        }" class="w-4 h-4 text-blue-400"></i>`
                      : '<i data-lucide="circle" class="w-4 h-4 text-slate-500"></i>'
                  }
                </div>
                <div class="min-w-0 flex-1">
                  <div class="flex items-center justify-between gap-1">
                    <span class="text-xs font-bold tracking-tight truncate">${escapeHtml(
                      proc.title
                    )}</span>
                    <span class="text-[10px] text-slate-400 shrink-0 font-mono">${escapeHtml(
                      proc.duration
                    )}</span>
                  </div>
                  <p class="text-[11px] text-slate-400 line-clamp-1 mt-0.5">${escapeHtml(
                    proc.subtitle
                  )}</p>
                </div>
              </button>

              ${
                hasSubLessons
                  ? `
                <button
                  type="button"
                  data-action="toggle-aprende-submenu"
                  class="p-2 mr-1 text-slate-400 hover:text-white rounded-md cursor-pointer"
                  aria-label="Alternar sub-lecciones"
                >
                  <i data-lucide="${
                    isAprendeExpanded ? 'chevron-down' : 'chevron-right'
                  }" class="w-4 h-4"></i>
                </button>
              `
                  : ''
              }
            </div>
            ${subLessonsHtml}
          </div>
        `;
      })
      .join('');

    const processesMod2Meta =
      (data.MODULE_2_DATA && data.MODULE_2_DATA.processesMeta) || [];
    const isMod2Expanded = state.sidebarExpanded.module2 !== false;
    const isMod2AprendeExpanded =
      state.sidebarExpanded.mod2AprendeSubmenu !== false;

    const processesMod2Html = processesMod2Meta
      .map((proc) => {
        const isSelected =
          state.activeView.type === 'module-2' &&
          state.activeView.processId === proc.id;
        const isDone = Boolean(
          state.completedProcessesMod2 && state.completedProcessesMod2[proc.id]
        );
        const hasSubLessons =
          Array.isArray(proc.subLessons) && proc.subLessons.length > 0;

        let subLessonsHtml = '';
        if (hasSubLessons && isMod2AprendeExpanded) {
          const items = proc.subLessons
            .map((les) => {
              const isLesSelected =
                isSelected &&
                (state.activeView.lessonId || 'leccion-2-1') === les.id;
              const isLesDone = Boolean(
                state.completedLessonsMod2 &&
                  state.completedLessonsMod2[les.id]
              );

              return `
                <button
                  type="button"
                  data-action="select-mod2-lesson"
                  data-lesson-id="${les.id}"
                  class="w-full text-left px-2.5 py-2 rounded-md text-xs transition-all flex items-start gap-2 cursor-pointer ${
                    isLesSelected
                      ? 'bg-cyan-500/20 text-cyan-200 font-semibold border border-cyan-500/30'
                      : 'text-slate-400 hover:bg-slate-800/60 hover:text-slate-200'
                  }"
                >
                  <i data-lucide="${
                    isLesDone ? 'check-circle-2' : 'circle'
                  }" class="w-3.5 h-3.5 ${
                    isLesDone ? 'text-emerald-400' : 'text-slate-600'
                  } shrink-0 mt-0.5"></i>
                  <div class="min-w-0 flex-1">
                    <div class="flex items-center justify-between">
                      <span class="text-[11px] font-bold text-amber-400">${escapeHtml(
                        les.code
                      )}</span>
                      <span class="text-[10px] text-slate-500">${escapeHtml(
                        les.duration
                      )}</span>
                    </div>
                    <p class="text-[11px] leading-snug line-clamp-2 mt-0.5">${escapeHtml(
                      les.title
                    )}</p>
                  </div>
                </button>
              `;
            })
            .join('');

          subLessonsHtml = `
            <div class="ml-5 mt-1 pl-3 border-l-2 border-slate-800 space-y-1 py-1">
              ${items}
            </div>
          `;
        }

        return `
          <div class="rounded-lg overflow-hidden">
            <div class="flex items-center justify-between rounded-lg transition-colors ${
              isSelected
                ? 'bg-cyan-600/25 text-white border border-cyan-500/40'
                : 'hover:bg-slate-800/70 text-slate-300'
            }">
              <button
                type="button"
                data-action="select-mod2-process"
                data-process-id="${proc.id}"
                class="flex-1 text-left px-3 py-2.5 flex items-start gap-2.5 min-w-0 cursor-pointer"
              >
                <div class="mt-0.5 shrink-0">
                  ${
                    isDone
                      ? '<i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-400"></i>'
                      : isSelected
                      ? `<i data-lucide="${
                          proc.icon || 'sparkles'
                        }" class="w-4 h-4 text-cyan-400"></i>`
                      : '<i data-lucide="circle" class="w-4 h-4 text-slate-500"></i>'
                  }
                </div>
                <div class="min-w-0 flex-1">
                  <div class="flex items-center justify-between gap-1">
                    <span class="text-xs font-bold tracking-tight truncate">${escapeHtml(
                      proc.title
                    )}</span>
                    <span class="text-[10px] text-slate-400 shrink-0 font-mono">${escapeHtml(
                      proc.duration
                    )}</span>
                  </div>
                  <p class="text-[11px] text-slate-400 line-clamp-1 mt-0.5">${escapeHtml(
                    proc.subtitle
                  )}</p>
                </div>
              </button>

              ${
                hasSubLessons
                  ? `
                <button
                  type="button"
                  data-action="toggle-mod2-aprende-submenu"
                  class="p-2 mr-1 text-slate-400 hover:text-white rounded-md cursor-pointer"
                  aria-label="Alternar sub-lecciones del Módulo 2"
                >
                  <i data-lucide="${
                    isMod2AprendeExpanded ? 'chevron-down' : 'chevron-right'
                  }" class="w-4 h-4"></i>
                </button>
              `
                  : ''
              }
            </div>
            ${subLessonsHtml}
          </div>
        `;
      })
      .join('');

    const processesMod3Meta =
      (data.MODULE_3_DATA && data.MODULE_3_DATA.processesMeta) || [];
    const isMod3Expanded = state.sidebarExpanded.module3 !== false;
    const isMod3AprendeExpanded =
      state.sidebarExpanded.mod3AprendeSubmenu !== false;

    const processesMod3Html = processesMod3Meta
      .map((proc) => {
        const isSelected =
          state.activeView.type === 'module-3' &&
          state.activeView.processId === proc.id;
        const isDone = Boolean(
          state.completedProcessesMod3 && state.completedProcessesMod3[proc.id]
        );
        const hasSubLessons =
          Array.isArray(proc.subLessons) && proc.subLessons.length > 0;

        let subLessonsHtml = '';
        if (hasSubLessons && isMod3AprendeExpanded) {
          const items = proc.subLessons
            .map((les) => {
              const isLesSelected =
                isSelected &&
                (state.activeView.lessonId || 'leccion-3-1') === les.id;
              const isLesDone = Boolean(
                state.completedLessonsMod3 &&
                  state.completedLessonsMod3[les.id]
              );

              return `
                <button
                  type="button"
                  data-action="select-mod3-lesson"
                  data-lesson-id="${les.id}"
                  class="w-full text-left px-2.5 py-2 rounded-md text-xs transition-all flex items-start gap-2 cursor-pointer ${
                    isLesSelected
                      ? 'bg-emerald-500/20 text-emerald-200 font-semibold border border-emerald-500/30'
                      : 'text-slate-400 hover:bg-slate-800/60 hover:text-slate-200'
                  }"
                >
                  <i data-lucide="${
                    isLesDone ? 'check-circle-2' : 'circle'
                  }" class="w-3.5 h-3.5 ${
                    isLesDone ? 'text-emerald-400' : 'text-slate-600'
                  } shrink-0 mt-0.5"></i>
                  <div class="min-w-0 flex-1">
                    <div class="flex items-center justify-between">
                      <span class="text-[11px] font-bold text-emerald-400">${escapeHtml(
                        les.code
                      )}</span>
                      <span class="text-[10px] text-slate-500">${escapeHtml(
                        les.duration
                      )}</span>
                    </div>
                    <p class="text-[11px] leading-snug line-clamp-2 mt-0.5">${escapeHtml(
                      les.title
                    )}</p>
                  </div>
                </button>
              `;
            })
            .join('');

          subLessonsHtml = `
            <div class="ml-5 mt-1 pl-3 border-l-2 border-slate-800 space-y-1 py-1">
              ${items}
            </div>
          `;
        }

        return `
          <div class="rounded-lg overflow-hidden">
            <div class="flex items-center justify-between rounded-lg transition-colors ${
              isSelected
                ? 'bg-emerald-600/25 text-white border border-emerald-500/40'
                : 'hover:bg-slate-800/70 text-slate-300'
            }">
              <button
                type="button"
                data-action="select-mod3-process"
                data-process-id="${proc.id}"
                class="flex-1 text-left px-3 py-2.5 flex items-start gap-2.5 min-w-0 cursor-pointer"
              >
                <div class="mt-0.5 shrink-0">
                  ${
                    isDone
                      ? '<i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-400"></i>'
                      : isSelected
                      ? `<i data-lucide="${
                          proc.icon || 'sparkles'
                        }" class="w-4 h-4 text-emerald-400"></i>`
                      : '<i data-lucide="circle" class="w-4 h-4 text-slate-500"></i>'
                  }
                </div>
                <div class="min-w-0 flex-1">
                  <div class="flex items-center justify-between gap-1">
                    <span class="text-xs font-bold tracking-tight truncate">${escapeHtml(
                      proc.title
                    )}</span>
                    <span class="text-[10px] text-slate-400 shrink-0 font-mono">${escapeHtml(
                      proc.duration
                    )}</span>
                  </div>
                  <p class="text-[11px] text-slate-400 line-clamp-1 mt-0.5">${escapeHtml(
                    proc.subtitle
                  )}</p>
                </div>
              </button>

              ${
                hasSubLessons
                  ? `
                <button
                  type="button"
                  data-action="toggle-mod3-aprende-submenu"
                  class="p-2 mr-1 text-slate-400 hover:text-white rounded-md cursor-pointer"
                  aria-label="Alternar sub-lecciones del Módulo 3"
                >
                  <i data-lucide="${
                    isMod3AprendeExpanded ? 'chevron-down' : 'chevron-right'
                  }" class="w-4 h-4"></i>
                </button>
              `
                  : ''
              }
            </div>
            ${subLessonsHtml}
          </div>
        `;
      })
      .join('');

    const processesMod4Meta =
      (data.MODULE_4_DATA && data.MODULE_4_DATA.processesMeta) || [];
    const isMod4Expanded = state.sidebarExpanded.module4 !== false;
    const isMod4AprendeExpanded =
      state.sidebarExpanded.mod4AprendeSubmenu !== false;

    const processesMod4Html = processesMod4Meta
      .map((proc) => {
        const isSelected =
          state.activeView.type === 'module-4' &&
          state.activeView.processId === proc.id;
        const isDone = Boolean(
          state.completedProcessesMod4 && state.completedProcessesMod4[proc.id]
        );
        const hasSubLessons =
          Array.isArray(proc.subLessons) && proc.subLessons.length > 0;

        let subLessonsHtml = '';
        if (hasSubLessons && isMod4AprendeExpanded) {
          const items = proc.subLessons
            .map((les) => {
              const isLesSelected =
                isSelected &&
                (state.activeView.lessonId || 'leccion-4-1') === les.id;
              const isLesDone = Boolean(
                state.completedLessonsMod4 &&
                  state.completedLessonsMod4[les.id]
              );

              return `
                <button
                  type="button"
                  data-action="select-mod4-lesson"
                  data-lesson-id="${les.id}"
                  class="w-full text-left px-2.5 py-2 rounded-md text-xs transition-all flex items-start gap-2 cursor-pointer ${
                    isLesSelected
                      ? 'bg-violet-500/20 text-violet-200 font-semibold border border-violet-500/30'
                      : 'text-slate-400 hover:bg-slate-800/60 hover:text-slate-200'
                  }"
                >
                  <i data-lucide="${
                    isLesDone ? 'check-circle-2' : 'circle'
                  }" class="w-3.5 h-3.5 ${
                    isLesDone ? 'text-emerald-400' : 'text-slate-600'
                  } shrink-0 mt-0.5"></i>
                  <div class="min-w-0 flex-1">
                    <div class="flex items-center justify-between">
                      <span class="text-[11px] font-bold text-violet-400">${escapeHtml(
                        les.code
                      )}</span>
                      <span class="text-[10px] text-slate-500">${escapeHtml(
                        les.duration
                      )}</span>
                    </div>
                    <p class="text-[11px] leading-snug line-clamp-2 mt-0.5">${escapeHtml(
                      les.title
                    )}</p>
                  </div>
                </button>
              `;
            })
            .join('');

          subLessonsHtml = `
            <div class="ml-5 mt-1 pl-3 border-l-2 border-slate-800 space-y-1 py-1">
              ${items}
            </div>
          `;
        }

        return `
          <div class="rounded-lg overflow-hidden">
            <div class="flex items-center justify-between rounded-lg transition-colors ${
              isSelected
                ? 'bg-violet-600/25 text-white border border-violet-500/40'
                : 'hover:bg-slate-800/70 text-slate-300'
            }">
              <button
                type="button"
                data-action="select-mod4-process"
                data-process-id="${proc.id}"
                class="flex-1 text-left px-3 py-2.5 flex items-start gap-2.5 min-w-0 cursor-pointer"
              >
                <div class="mt-0.5 shrink-0">
                  ${
                    isDone
                      ? '<i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-400"></i>'
                      : isSelected
                      ? `<i data-lucide="${
                          proc.icon || 'sparkles'
                        }" class="w-4 h-4 text-violet-400"></i>`
                      : '<i data-lucide="circle" class="w-4 h-4 text-slate-500"></i>'
                  }
                </div>
                <div class="min-w-0 flex-1">
                  <div class="flex items-center justify-between gap-1">
                    <span class="text-xs font-bold tracking-tight truncate">${escapeHtml(
                      proc.title
                    )}</span>
                    <span class="text-[10px] text-slate-400 shrink-0 font-mono">${escapeHtml(
                      proc.duration
                    )}</span>
                  </div>
                  <p class="text-[11px] text-slate-400 line-clamp-1 mt-0.5">${escapeHtml(
                    proc.subtitle
                  )}</p>
                </div>
              </button>

              ${
                hasSubLessons
                  ? `
                <button
                  type="button"
                  data-action="toggle-mod4-aprende-submenu"
                  class="p-2 mr-1 text-slate-400 hover:text-white rounded-md cursor-pointer"
                  aria-label="Alternar sub-lecciones del Módulo 4"
                >
                  <i data-lucide="${
                    isMod4AprendeExpanded ? 'chevron-down' : 'chevron-right'
                  }" class="w-4 h-4"></i>
                </button>
              `
                  : ''
              }
            </div>
            ${subLessonsHtml}
          </div>
        `;
      })
      .join('');

    const lockedModulesHtml = '';

    return `
      <div class="relative w-full h-full bg-white border-r border-slate-200/90 flex flex-col select-none">
        <button
          type="button"
          data-action="toggle-desktop-sidebar"
          title="Ocultar temario"
          class="hidden lg:flex items-center justify-center w-7 h-7 rounded-full bg-white border border-slate-200 shadow-sm text-slate-500 hover:text-[#C13B2A] hover:border-[#C13B2A]/40 absolute -right-3.5 top-6 z-20 transition-colors cursor-pointer"
        >
          <i data-lucide="chevron-left" class="w-4 h-4"></i>
        </button>

        <div class="p-4 border-b border-slate-100 bg-[#FAF8F6]">
          <p class="text-[11px] font-bold uppercase tracking-wider text-[#C13B2A]">
            G4 Ciberseguridad — Campus Virtual
          </p>
          <p class="text-xs font-semibold text-slate-800 mt-0.5 truncate">
            ${escapeHtml(state.studentName || 'Participante')}
          </p>
          ${
            state.accessId
              ? `<p class="text-[11px] font-mono text-slate-500 mt-0.5">ID: ${escapeHtml(
                  state.accessId
                )} • ${metrics.progressPercentage}% completado</p>`
              : '<p class="text-[11px] text-slate-500 mt-0.5">20-24 Horas | 4 Módulos</p>'
          }
        </div>

        <div class="flex-1 overflow-y-auto p-3 space-y-2.5">
          <!-- INICIO / PANEL DEL PARTICIPANTE -->
          <button
            type="button"
            data-action="select-dashboard"
            class="w-full text-left px-3.5 py-2.5 rounded-xl border transition-all flex items-center gap-2.5 cursor-pointer ${
              isDashboardActive
                ? 'bg-[#FDF2F0] border-[#F5CFC9] text-[#C13B2A] font-bold shadow-xs'
                : 'bg-white border-slate-200/80 text-slate-700 hover:bg-[#FAF8F6] font-semibold'
            }"
          >
            <i data-lucide="home" class="w-4 h-4 shrink-0 ${
              isDashboardActive ? 'text-[#C13B2A]' : 'text-slate-500'
            }"></i>
            <span class="text-xs">Inicio / Panel del participante</span>
          </button>

          <div class="pt-1 px-1 flex items-center justify-between gap-2">
            <span class="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Mi aprendizaje (Módulos)
            </span>
            <button
              type="button"
              data-action="toggle-all-sidebar-modules"
              class="text-[11px] font-semibold text-[#C13B2A] hover:underline cursor-pointer"
            >
              ${allExpanded ? 'Contraer todos' : 'Expandir todos'}
            </button>
          </div>

          <!-- SECCIÓN 0 -->
          <div class="rounded-xl border ${
            isSec0Active ? 'border-[#C13B2A]/40 bg-[#FDF2F0]' : 'border-slate-200/90 bg-white'
          } overflow-hidden">
            <button
              type="button"
              data-action="select-section-0"
              class="w-full text-left p-3 transition-all flex items-start gap-2.5 cursor-pointer ${
                isSec0Active ? 'text-slate-900' : 'hover:bg-[#FAF8F6] text-slate-700'
              }"
            >
              <div class="mt-0.5 shrink-0">
                ${
                  state.sectionZeroCompleted
                    ? '<i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-600"></i>'
                    : `<i data-lucide="compass" class="w-4 h-4 ${
                        isSec0Active ? 'text-[#C13B2A]' : 'text-slate-400'
                      }"></i>`
                }
              </div>
              <div class="min-w-0 flex-1">
                <div class="flex items-center justify-between gap-2">
                  <span class="text-[10px] font-bold uppercase tracking-wider text-[#C13B2A]">
                    Etapa 1 • 0.5 Hrs
                  </span>
                </div>
                <p class="text-xs font-semibold leading-snug mt-0.5 text-slate-900">
                  Bienvenida, Orientación y Diagnóstico
                </p>
              </div>
            </button>
          </div>

          <!-- MÓDULO 1 -->
          <div class="rounded-xl border border-slate-200/90 overflow-hidden bg-white shadow-xs">
            <button
              type="button"
              data-action="toggle-module-1"
              class="w-full text-left p-3 bg-[#FAF8F6] hover:bg-[#FDF6F5] transition-colors flex items-start justify-between gap-2 border-b border-slate-100 cursor-pointer"
            >
              <div class="min-w-0">
                <div class="flex items-center gap-2">
                  <span class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#FDF2F0] text-[#C13B2A] border border-[#F5CFC9]">
                    Módulo 1
                  </span>
                  <span class="text-[11px] text-emerald-600 font-semibold">
                    ${metrics.completedProcessesCount}/8 Procesos
                  </span>
                </div>
                <h3 class="text-xs font-bold text-slate-900 mt-1.5 leading-snug">
                  SGSI: ISO/IEC 27001:2022 y 27002:2022 (4 Hrs)
                </h3>
              </div>
              <div class="text-slate-400 mt-1 shrink-0">
                <i data-lucide="${
                  isMod1Expanded ? 'chevron-down' : 'chevron-right'
                }" class="w-4 h-4"></i>
              </div>
            </button>

            ${
              isMod1Expanded
                ? `<div class="p-2 space-y-1 campus-sidebar-light">${processesHtml}</div>`
                : ''
            }
          </div>

          <!-- MÓDULO 2 (ACTIVO - NIST CSF 2.0) -->
          <div class="rounded-xl border border-slate-200/90 overflow-hidden bg-white shadow-xs">
            <button
              type="button"
              data-action="toggle-module-2"
              class="w-full text-left p-3 bg-[#FAF8F6] hover:bg-[#FDF6F5] transition-colors flex items-start justify-between gap-2 border-b border-slate-100 cursor-pointer"
            >
              <div class="min-w-0">
                <div class="flex items-center gap-2">
                  <span class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#FDF2F0] text-[#C13B2A] border border-[#F5CFC9]">
                    Módulo 2
                  </span>
                  <span class="text-[11px] text-emerald-600 font-semibold">
                    ${metrics.completedProcessesMod2Count || 0}/8 Procesos
                  </span>
                </div>
                <h3 class="text-xs font-bold text-slate-900 mt-1.5 leading-snug">
                  Gestión y Respuesta a Riesgos con NIST CSF 2.0 (4 Hrs)
                </h3>
              </div>
              <div class="text-slate-400 mt-1 shrink-0">
                <i data-lucide="${
                  isMod2Expanded ? 'chevron-down' : 'chevron-right'
                }" class="w-4 h-4"></i>
              </div>
            </button>

            ${
              isMod2Expanded
                ? `<div class="p-2 space-y-1 campus-sidebar-light">${processesMod2Html}</div>`
                : ''
            }
          </div>

          <!-- MÓDULO 3 (ACTIVO - CIS CONTROLS v8.1) -->
          <div class="rounded-xl border border-slate-200/90 overflow-hidden bg-white shadow-xs">
            <button
              type="button"
              data-action="toggle-module-3"
              class="w-full text-left p-3 bg-[#FAF8F6] hover:bg-[#FDF6F5] transition-colors flex items-start justify-between gap-2 border-b border-slate-100 cursor-pointer"
            >
              <div class="min-w-0">
                <div class="flex items-center gap-2">
                  <span class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#FDF2F0] text-[#C13B2A] border border-[#F5CFC9]">
                    Módulo 3
                  </span>
                  <span class="text-[11px] text-emerald-600 font-semibold">
                    ${metrics.completedProcessesMod3Count || 0}/8 Procesos
                  </span>
                </div>
                <h3 class="text-xs font-bold text-slate-900 mt-1.5 leading-snug">
                  Ciberdefensa Práctica: CIS Controls v8.1 (4 Hrs)
                </h3>
              </div>
              <div class="text-slate-400 mt-1 shrink-0">
                <i data-lucide="${
                  isMod3Expanded ? 'chevron-down' : 'chevron-right'
                }" class="w-4 h-4"></i>
              </div>
            </button>

            ${
              isMod3Expanded
                ? `<div class="p-2 space-y-1 campus-sidebar-light">${processesMod3Html}</div>`
                : ''
            }
          </div>

          <!-- MÓDULO 4 (ACTIVO - INTEGRACIÓN Y MAPEO ISO-NIST-CIS) -->
          <div class="rounded-xl border border-slate-200/90 overflow-hidden bg-white shadow-xs">
            <button
              type="button"
              data-action="toggle-module-4"
              class="w-full text-left p-3 bg-[#FAF8F6] hover:bg-[#FDF6F5] transition-colors flex items-start justify-between gap-2 border-b border-slate-100 cursor-pointer"
            >
              <div class="min-w-0">
                <div class="flex items-center gap-2">
                  <span class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#FDF2F0] text-[#C13B2A] border border-[#F5CFC9]">
                    Módulo 4
                  </span>
                  <span class="text-[11px] text-emerald-600 font-semibold">
                    ${metrics.completedProcessesMod4Count || 0}/8 Procesos
                  </span>
                </div>
                <h3 class="text-xs font-bold text-slate-900 mt-1.5 leading-snug">
                  Integración y Mapeo: Requisito, Función y Control (4 Hrs)
                </h3>
              </div>
              <div class="text-slate-400 mt-1 shrink-0">
                <i data-lucide="${
                  isMod4Expanded ? 'chevron-down' : 'chevron-right'
                }" class="w-4 h-4"></i>
              </div>
            </button>

            ${
              isMod4Expanded
                ? `<div class="p-2 space-y-1 campus-sidebar-light">${processesMod4Html}</div>`
                : ''
            }
          </div>

          <!-- EVALUACIÓN FINAL Y MIS CERTIFICADOS -->
          <div class="pt-1.5 space-y-2">
            <div class="px-1 flex items-center justify-between">
              <span class="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Certificación y Cierre
              </span>
            </div>

            <button
              type="button"
              data-action="select-final-exam"
              class="w-full text-left p-3 rounded-xl border transition-all flex items-start gap-2.5 cursor-pointer ${
                state.activeView.type === 'final-exam'
                  ? 'bg-[#FDF2F0] border-[#C13B2A]/40 text-slate-900'
                  : 'bg-white border-slate-200/90 text-slate-700 hover:bg-[#FAF8F6]'
              }"
            >
              <div class="mt-0.5 shrink-0">
                ${
                  state.finalExamCompleted
                    ? '<i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-600"></i>'
                    : '<i data-lucide="clipboard-check" class="w-4 h-4 text-[#C13B2A]"></i>'
                }
              </div>
              <div class="min-w-0 flex-1">
                <div class="flex items-center justify-between gap-2">
                  <span class="text-[10px] font-bold uppercase tracking-wider text-[#C13B2A]">
                    Evaluación Final
                  </span>
                  <span class="text-[11px] text-slate-400">2.0 Hrs</span>
                </div>
                <p class="text-xs font-semibold text-slate-900 mt-0.5 leading-snug">
                  Examen Final Certificable (20 Preguntas)
                </p>
              </div>
            </button>

            <button
              type="button"
              data-action="select-closure"
              class="w-full text-left p-3 rounded-xl border transition-all flex items-start gap-2.5 cursor-pointer ${
                state.activeView.type === 'closure'
                  ? 'bg-[#FDF2F0] border-[#C13B2A]/40 text-slate-900'
                  : 'bg-white border-slate-200/90 text-slate-700 hover:bg-[#FAF8F6]'
              }"
            >
              <div class="mt-0.5 shrink-0">
                <i data-lucide="award" class="w-4 h-4 ${
                  state.closureCompleted ? 'text-emerald-600' : 'text-amber-600'
                }"></i>
              </div>
              <div class="min-w-0 flex-1">
                <div class="flex items-center justify-between gap-2">
                  <span class="text-[10px] font-bold uppercase tracking-wider text-amber-700">
                    Mis certificados
                  </span>
                  <span class="text-[11px] text-slate-400">1.5 Hrs</span>
                </div>
                <p class="text-xs font-semibold text-slate-900 mt-0.5 leading-snug">
                  Cierre, Encuesta y Certificado Digital
                </p>
              </div>
            </button>
          </div>
        </div>
      </div>
    `;
  }

  // ==========================================================================
  // 3. SECCIÓN 0: BIENVENIDA, ORIENTACIÓN Y DIAGNÓSTICO
  // ==========================================================================
  function renderSectionZero(state) {
    const sec0 = window.LMS_DATA.SECTION_ZERO_DATA;
    const selectedCard =
      sec0.interactiveCards.find(
        (c) => c.id === state.activeOrientationCardId
      ) || sec0.interactiveCards[0];

    const answeredDiagCount = Object.keys(state.diagnosticAnswers).length;
    const totalDiagQuestions = sec0.diagnosticQuestions.length;

    const pillarsHtml = sec0.pillarsOverview
      .map(
        (p) => `
        <div class="bg-slate-950/70 border border-slate-800 hover:border-blue-500/40 rounded-xl p-4 transition-all">
          <div class="flex items-center gap-2 text-cyan-400 font-bold text-sm">
            <i data-lucide="shield" class="w-4 h-4 shrink-0"></i>
            <span>${escapeHtml(p.framework)}</span>
          </div>
          <p class="text-xs font-semibold text-white mt-1.5">${escapeHtml(
            p.role
          )}</p>
          <p class="text-xs text-slate-400 mt-1 leading-relaxed">${escapeHtml(
            p.focus
          )}</p>
        </div>
      `
      )
      .join('');

    const cardButtonsHtml = sec0.interactiveCards
      .map((card) => {
        const isSelected = card.id === selectedCard.id;
        return `
          <button
            type="button"
            data-action="select-orientation-card"
            data-card-id="${card.id}"
            class="text-left p-3 rounded-xl border transition-all cursor-pointer ${
              isSelected
                ? 'bg-blue-600/20 border-blue-500 text-white shadow-md'
                : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:bg-slate-800/70'
            }"
          >
            <span class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-800 text-cyan-300">
              ${escapeHtml(card.badge)}
            </span>
            <p class="text-xs font-bold mt-1.5 leading-snug">${escapeHtml(
              card.title
            )}</p>
          </button>
        `;
      })
      .join('');

    const selectedCardBulletsHtml = selectedCard.bullets
      .map(
        (b) => `
        <li class="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200 bg-slate-900/90 border border-slate-800/80 rounded-lg p-2.5">
          <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-400 shrink-0 mt-0.5"></i>
          <span>${escapeHtml(b)}</span>
        </li>
      `
      )
      .join('');

    const diagQuestionsHtml = sec0.diagnosticQuestions
      .map((q, idx) => {
        const selectedIdx = state.diagnosticAnswers[q.id];
        const isAnswered = typeof selectedIdx === 'number';
        const isCorrect = selectedIdx === q.correctIndex;

        const optsHtml = q.options
          .map((opt, optIdx) => {
            const isThisSelected = selectedIdx === optIdx;
            let btnClass =
              'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800/80';
            if (isAnswered) {
              if (optIdx === q.correctIndex) {
                btnClass =
                  'bg-emerald-500/20 border-emerald-500/50 text-emerald-200 font-semibold';
              } else if (isThisSelected) {
                btnClass = 'bg-rose-500/20 border-rose-500/50 text-rose-200';
              }
            }

            return `
              <button
                type="button"
                data-action="answer-diagnostic"
                data-question-id="${q.id}"
                data-option-index="${optIdx}"
                class="w-full text-left p-2.5 rounded-lg border text-xs transition-all cursor-pointer ${btnClass}"
              >
                ${escapeHtml(opt)}
              </button>
            `;
          })
          .join('');

        return `
          <div class="bg-slate-950/70 border border-slate-800 rounded-xl p-5 flex flex-col justify-between space-y-4">
            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold px-2.5 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
                  Pregunta Diagnóstica ${idx + 1}
                </span>
                <i data-lucide="help-circle" class="w-4 h-4 text-slate-500"></i>
              </div>
              <p class="text-sm font-semibold text-white leading-snug">
                ${escapeHtml(q.question)}
              </p>
              <div class="space-y-2 pt-1">
                ${optsHtml}
              </div>
            </div>

            ${
              isAnswered
                ? `
              <div class="p-3 rounded-lg text-xs border ${
                isCorrect
                  ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-200'
                  : 'bg-blue-500/10 border-blue-500/30 text-blue-200'
              }">
                <p class="font-bold mb-1">${
                  isCorrect ? '¡Respuesta Correcta!' : 'Nota Pedagógica:'
                }</p>
                <p class="leading-relaxed">${escapeHtml(q.feedback)}</p>
              </div>
            `
                : ''
            }
          </div>
        `;
      })
      .join('');

    return `
      <div class="space-y-8 pb-12 fade-in-view">
        <section class="relative rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950/80 to-slate-900 border border-blue-500/30 p-6 sm:p-8 shadow-2xl">
          <div class="flex flex-wrap items-center gap-2 mb-4">
            <span class="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
              <i data-lucide="compass" class="w-3.5 h-3.5"></i>
              ${escapeHtml(sec0.code)} • ${escapeHtml(sec0.duration)}
            </span>
            <span class="text-xs font-medium px-3 py-1 rounded-full bg-slate-800/90 text-slate-300 border border-slate-700">
              Código: G4-CIBER-2026
            </span>
            ${
              state.sectionZeroCompleted
                ? `
              <span class="inline-flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                <i data-lucide="check-circle-2" class="w-3.5 h-3.5"></i>
                Orientación Completada
              </span>
            `
                : ''
            }
          </div>

          <h2 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            ${escapeHtml(sec0.title)}
          </h2>

          <p class="mt-4 text-sm sm:text-base text-slate-200 leading-relaxed max-w-4xl">
            ${escapeHtml(sec0.presentationText)}
          </p>

          <div class="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            ${pillarsHtml}
          </div>
        </section>

        <section class="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
          <div class="xl:col-span-6 bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
            <div class="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between gap-2">
              <div class="flex items-center gap-2.5">
                <div class="p-2 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30">
                  <i data-lucide="play" class="w-4 h-4"></i>
                </div>
                <div>
                  <h3 class="text-sm sm:text-base font-bold text-white">
                    Video de Bienvenida e Introducción a Marcos Normativos
                  </h3>
                  <p class="text-xs text-slate-400">
                    Ciberseguridad ejecutiva: ISO 27001/27002, NIST CSF 2.0 y CIS Controls
                  </p>
                </div>
              </div>
              <span class="text-xs font-mono px-2.5 py-1 rounded bg-slate-800 text-cyan-300 shrink-0">
                ${escapeHtml(sec0.welcomeVideoDuration)}
              </span>
            </div>

            <div class="p-4 sm:p-5">
              ${window.LMS_CAMPUS_VIEWS.renderYouTubeEmbedPlayer({
                videoKey: 'welcome-video',
                defaultUrlOrId: sec0.welcomeVideoEmbedUrl,
                title: 'Video de Bienvenida - Marcos y Buenas Prácticas de Ciberseguridad',
                customUrls: state.customVideoUrls,
              })}
            </div>

            <div class="p-4 sm:p-5 bg-slate-950/60 border-t border-slate-800 space-y-3">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                  <i data-lucide="bar-chart-3" class="w-4 h-4 text-amber-400"></i>
                  Ponderación de Evaluación del Curso
                </span>
                <span class="text-xs text-emerald-400 font-semibold">
                  Nota mínima: 70%
                </span>
              </div>
              <div class="grid grid-cols-3 gap-2 text-center">
                <div class="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                  <span class="text-base font-extrabold text-blue-400">30%</span>
                  <p class="text-[11px] text-slate-300 font-medium mt-0.5">
                    Recordar / Comprender
                  </p>
                </div>
                <div class="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                  <span class="text-base font-extrabold text-cyan-400">40%</span>
                  <p class="text-[11px] text-slate-300 font-medium mt-0.5">
                    Interpretar / Aplicar Matrices
                  </p>
                </div>
                <div class="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                  <span class="text-base font-extrabold text-emerald-400">30%</span>
                  <p class="text-[11px] text-slate-300 font-medium mt-0.5">
                    Resolver Casos Reales
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="xl:col-span-6 bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl space-y-5">
            <div class="flex items-center justify-between gap-2 border-b border-slate-800 pb-4">
              <div>
                <span class="text-xs font-bold uppercase tracking-wider text-cyan-400">
                  Guía Interactiva del Estudiante
                </span>
                <h3 class="text-lg font-bold text-white mt-0.5">
                  Explora los 5 Pilares de Orientación Académica
                </h3>
              </div>
              <i data-lucide="layers" class="w-5 h-5 text-blue-400 shrink-0"></i>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
              ${cardButtonsHtml}
            </div>

            <div class="bg-slate-950/80 border border-slate-800 rounded-xl p-5 space-y-4">
              <div class="flex items-center justify-between gap-2 flex-wrap">
                <h4 class="text-base font-bold text-white flex items-center gap-2">
                  <i data-lucide="book-open" class="w-4 h-4 text-blue-400"></i>
                  ${escapeHtml(selectedCard.title)}
                </h4>
                <span class="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                  ${escapeHtml(selectedCard.badge)}
                </span>
              </div>

              <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                ${escapeHtml(selectedCard.summary)}
              </p>

              <ul class="space-y-2">
                ${selectedCardBulletsHtml}
              </ul>

              <div class="p-3 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-between gap-3 flex-wrap">
                <p class="text-xs text-amber-200 font-medium">
                  ${escapeHtml(selectedCard.highlight)}
                </p>
                ${
                  selectedCard.id === 'certificacion'
                    ? `
                  <button
                    type="button"
                    data-action="open-certificate-modal"
                    class="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg bg-amber-500 text-slate-950 hover:bg-amber-400 transition-colors cursor-pointer"
                  >
                    <i data-lucide="award" class="w-3.5 h-3.5"></i>
                    Previsualizar Requisitos
                  </button>
                `
                    : ''
                }
              </div>
            </div>
          </div>
        </section>

        <section class="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <span class="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-400">
                <i data-lucide="cpu" class="w-4 h-4"></i>
                Diagnóstico de Entrada (No Calificado • Autoevaluación)
              </span>
              <h3 class="text-xl font-bold text-white mt-1">
                Mide tu línea base en ISO 27001/27002, NIST CSF 2.0 y CIS v8.1
              </h3>
              <p class="text-xs sm:text-sm text-slate-400 mt-1">
                Responde estas 3 preguntas de diagnóstico rápido. Tus respuestas se guardan automáticamente en tu navegador.
              </p>
            </div>
            <div class="px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs font-semibold text-slate-300 shrink-0">
              Respondidas: <span class="text-cyan-400 font-bold">${answeredDiagCount}/${totalDiagQuestions}</span>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-3 gap-5">
            ${diagQuestionsHtml}
          </div>

          <div class="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div class="text-xs sm:text-sm text-slate-300">
              ${
                state.sectionZeroCompleted
                  ? `<span class="text-emerald-400 font-semibold flex items-center gap-2">
                      <i data-lucide="check-circle-2" class="w-4 h-4"></i>
                      ¡Sección 0 completada! Puedes continuar al Módulo 1 en cualquier momento.
                    </span>`
                  : `<span>Marca esta sección de orientación como completada para iniciar el <strong class="text-white">Módulo 1: SGSI ISO/IEC 27001:2022 y 27002:2022</strong>.</span>`
              }
            </div>

            <button
              type="button"
              data-action="complete-sec0-start-mod1"
              class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-sm shadow-lg shadow-blue-600/25 transition-all cursor-pointer"
            >
              <span>Completar Orientación e Ir al Módulo 1 (Proceso 1: INICIA)</span>
              <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </button>
          </div>
        </section>
      </div>
    `;
  }

  // ==========================================================================
  // 4. CONTENEDOR EXHAUSTIVO DE LOS 8 PROCESOS DEL MÓDULO 1
  // ==========================================================================

  // --- PROCESO 1: INICIA ---
  function renderProcesoInicia(state, mod1) {
    const inicia = mod1.inicia;
    const selectedOption = inicia.reflectionOptions.find(
      (o) => o.id === state.iniciaSelectedOption
    );

    const optionsHtml = inicia.reflectionOptions
      .map((opt) => {
        const isSelected = state.iniciaSelectedOption === opt.id;
        let cardClass =
          'bg-slate-950/80 border-slate-800 hover:border-slate-700 text-slate-200';
        if (isSelected) {
          cardClass = opt.isOptimalInsight
            ? 'bg-emerald-500/15 border-emerald-500 text-white shadow-lg shadow-emerald-500/10'
            : 'bg-amber-500/15 border-amber-500 text-white shadow-lg shadow-amber-500/10';
        }

        return `
          <button
            type="button"
            data-action="select-inicia-option"
            data-option-id="${opt.id}"
            class="text-left p-5 rounded-xl border transition-all flex flex-col justify-between gap-3 cursor-pointer ${cardClass}"
          >
            <div class="space-y-2">
              <span class="inline-block text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-slate-900 text-cyan-400 border border-slate-700">
                ${escapeHtml(opt.label)}
              </span>
              <p class="text-sm font-semibold leading-relaxed">
                ${escapeHtml(opt.title)}
              </p>
            </div>
            <div class="flex items-center justify-between text-xs pt-2 border-t border-slate-800/80">
              <span class="${
                isSelected ? 'font-bold text-cyan-300' : 'text-slate-400'
              }">
                ${isSelected ? 'Opción seleccionada' : 'Haz clic para analizar'}
              </span>
              <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
            </div>
          </button>
        `;
      })
      .join('');

    let feedbackHtml = '';
    if (selectedOption) {
      const controlsBadges = selectedOption.controlsInvolved
        .map(
          (ctrl) => `
          <span class="text-xs font-medium px-3 py-1 rounded-lg bg-slate-950/90 text-cyan-300 border border-slate-800">
            ${escapeHtml(ctrl)}
          </span>
        `
        )
        .join('');

      feedbackHtml = `
        <div class="rounded-xl p-5 sm:p-6 border space-y-4 fade-in-view ${
          selectedOption.isOptimalInsight
            ? 'bg-emerald-950/40 border-emerald-500/40'
            : 'bg-amber-950/40 border-amber-500/40'
        }">
          <div class="flex items-center gap-2.5">
            <i data-lucide="${
              selectedOption.isOptimalInsight
                ? 'check-circle-2'
                : 'alert-triangle'
            }" class="w-5 h-5 ${
        selectedOption.isOptimalInsight ? 'text-emerald-400' : 'text-amber-400'
      } shrink-0"></i>
            <h4 class="text-base sm:text-lg font-bold text-white">
              ${escapeHtml(selectedOption.feedbackTitle)}
            </h4>
          </div>
          <p class="text-xs sm:text-sm text-slate-200 leading-relaxed">
            ${escapeHtml(selectedOption.feedbackBody)}
          </p>
          <div class="pt-2">
            <p class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Componentes y Controles ISO 27001 / 27002 vinculados al caso:
            </p>
            <div class="flex flex-wrap gap-2">
              ${controlsBadges}
            </div>
          </div>
        </div>
      `;
    }

    const statsHtml = inicia.keyStats
      .map(
        (st) => `
        <div class="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <span class="text-xs font-bold uppercase tracking-wider text-slate-400">
            ${escapeHtml(st.label)}
          </span>
          <p class="text-2xl font-extrabold text-cyan-400 mt-1">${escapeHtml(
            st.value
          )}</p>
          <p class="text-xs text-slate-300 mt-2 leading-relaxed">${escapeHtml(
            st.context
          )}</p>
        </div>
      `
      )
      .join('');

    return `
      <div class="space-y-6">
        <!-- Objetivo de Aprendizaje -->
        <div class="bg-gradient-to-r from-blue-950/70 via-slate-900 to-slate-900 border border-blue-500/30 rounded-2xl p-5 sm:p-6">
          <span class="text-xs font-bold uppercase tracking-wider text-cyan-400">
            Objetivo de Aprendizaje del Módulo 1
          </span>
          <p class="text-sm sm:text-base text-white font-medium mt-1.5 leading-relaxed">
            ${escapeHtml(inicia.objective)}
          </p>
        </div>

        <!-- Caso Detonante Interactivo -->
        <div class="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
          <div class="flex items-start gap-3.5">
            <div class="p-3 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-400 shrink-0">
              <i data-lucide="shield-alert" class="w-6 h-6"></i>
            </div>
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-rose-400">
                Escenario Real de Incidente Corporativo
              </span>
              <h3 class="text-xl font-bold text-white mt-0.5">
                ${escapeHtml(inicia.caseTitle)}
              </h3>
            </div>
          </div>

          <blockquote class="p-5 rounded-xl bg-slate-950 border-l-4 border-l-rose-500 text-sm sm:text-base text-slate-200 italic leading-relaxed">
            &ldquo;${escapeHtml(inicia.caseScenario)}&rdquo;
          </blockquote>

          <div class="space-y-4">
            <div class="flex items-center gap-2">
              <i data-lucide="help-circle" class="w-5 h-5 text-amber-400 shrink-0"></i>
              <h4 class="text-base sm:text-lg font-bold text-amber-300">
                Pregunta Detonante: ${escapeHtml(inicia.triggerQuestion)}
              </h4>
            </div>
            <p class="text-xs sm:text-sm text-slate-400">
              Selecciona una de las 3 opciones de reflexión para desbloquear el análisis del SGSI:
            </p>
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
              ${optionsHtml}
            </div>
          </div>

          ${feedbackHtml}

          <div class="p-4 rounded-xl bg-slate-950/90 border border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed">
            <strong class="text-cyan-400">Síntesis ejecutiva: </strong>
            ${escapeHtml(inicia.holisticSynthesis)}
          </div>
        </div>

        <!-- 3 Tarjetas de Estadísticas Clave -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          ${statsHtml}
        </div>
      </div>
    `;
  }

  // --- PROCESO 2: APRENDE (4 LECCIONES INTERACTIVAS) ---
  function renderProcesoAprende(state, mod1) {
    const activeLessonId = state.activeView.lessonId || 'leccion-1-1';
    const currentLesson =
      mod1.aprende.find((l) => l.id === activeLessonId) || mod1.aprende[0];
    const isLessonDone = Boolean(state.completedLessons[currentLesson.id]);
    const noteText = state.lessonNotes[currentLesson.id] || '';

    const lessonTabsHtml = mod1.aprende
      .map((lesson) => {
        const isSelected = lesson.id === currentLesson.id;
        const isDone = Boolean(state.completedLessons[lesson.id]);
        return `
          <button
            type="button"
            data-action="select-lesson"
            data-lesson-id="${lesson.id}"
            class="text-left p-3.5 rounded-xl border transition-all flex flex-col justify-between gap-2 cursor-pointer ${
              isSelected
                ? 'bg-blue-600/20 border-blue-500 text-white shadow-lg'
                : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:bg-slate-800/70'
            }"
          >
            <div class="flex items-center justify-between gap-2">
              <span class="text-xs font-bold text-cyan-400">${escapeHtml(
                lesson.code
              )}</span>
              <div class="flex items-center gap-1.5">
                <span class="text-[11px] font-mono text-slate-400">${escapeHtml(
                  lesson.duration
                )}</span>
                ${
                  isDone
                    ? '<i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-400"></i>'
                    : ''
                }
              </div>
            </div>
            <p class="text-xs font-semibold leading-snug line-clamp-2">
              ${escapeHtml(lesson.title)}
            </p>
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
            <span class="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30 shrink-0">
              ${escapeHtml(kc.tag)}
            </span>
          </div>
          <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
            ${escapeHtml(kc.description)}
          </p>
        </div>
      `
      )
      .join('');

    let specificLessonContentHtml = '';

    // Contenido específico Lección 1.1
    if (currentLesson.id === 'leccion-1-1') {
      const phvaHtml = (currentLesson.phvaCycle || [])
        .map(
          (step, idx) => `
          <div class="bg-slate-950 border border-slate-800 rounded-xl p-4 flex flex-col justify-between space-y-3">
            <div class="space-y-2">
              <div class="flex items-center justify-between">
                <span class="text-xs font-extrabold px-2.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  Fase ${idx + 1}: ${escapeHtml(step.phase)}
                </span>
                <span class="text-[11px] font-mono text-amber-300">
                  ${escapeHtml(step.clauses)}
                </span>
              </div>
              <p class="text-xs text-slate-300 leading-relaxed">${escapeHtml(
                step.summary
              )}</p>
            </div>
            <div class="pt-2 border-t border-slate-800/80">
              <p class="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                Entregables auditables:
              </p>
              <ul class="space-y-1">
                ${step.deliverables
                  .map(
                    (del) => `
                  <li class="text-[11px] text-slate-300 flex items-start gap-1.5">
                    <i data-lucide="check" class="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5"></i>
                    <span>${escapeHtml(del)}</span>
                  </li>
                `
                  )
                  .join('')}
              </ul>
            </div>
          </div>
        `
        )
        .join('');

      const scopeChecklistHtml = (
        (currentLesson.scopeImportance &&
          currentLesson.scopeImportance.checklist) ||
        []
      )
        .map(
          (item) => `
          <div class="flex items-start gap-2.5 bg-slate-950/80 border border-slate-800 rounded-lg p-3 text-xs text-slate-200">
            <i data-lucide="check-circle-2" class="w-4 h-4 text-amber-400 shrink-0 mt-0.5"></i>
            <span>${escapeHtml(item)}</span>
          </div>
        `
        )
        .join('');

      const clauses = currentLesson.mandatoryClauses || [];
      const activeClause =
        clauses.find((c) => c.clauseNumber === state.selectedClauseNumber) ||
        clauses[0];

      const clauseButtonsHtml = clauses
        .map((c) => {
          const isSel = c.clauseNumber === activeClause.clauseNumber;
          return `
            <button
              type="button"
              data-action="select-clause-tab"
              data-clause-number="${escapeHtml(c.clauseNumber)}"
              class="p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                isSel
                  ? 'bg-blue-600/25 border-blue-500 text-white shadow-md'
                  : 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800'
              }"
            >
              <span class="text-[11px] font-bold text-cyan-400 block">
                ${escapeHtml(c.clauseNumber)}
              </span>
              <span class="text-xs font-semibold line-clamp-1 mt-0.5">
                ${escapeHtml(c.title)}
              </span>
            </button>
          `;
        })
        .join('');

      const subClausesHtml = activeClause.subClauses
        .map(
          (sub) => `
          <div class="p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-200 flex items-start gap-2">
            <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-400 shrink-0 mt-0.5"></i>
            <span>${escapeHtml(sub)}</span>
          </div>
        `
        )
        .join('');

      specificLessonContentHtml = `
        <!-- Diagrama Interactivo del Ciclo PHVA -->
        <div class="space-y-3 pt-2">
          <h4 class="text-base sm:text-lg font-bold text-white flex items-center gap-2">
            <i data-lucide="layers" class="w-5 h-5 text-cyan-400"></i>
            El Ciclo PHVA (Planificar, Hacer, Verificar, Actuar) aplicado al SGSI
          </h4>
          <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            ${phvaHtml}
          </div>
        </div>

        <!-- Importancia del Alcance del SGSI (Cláusula 4.3) -->
        <div class="bg-amber-500/10 border border-amber-500/30 rounded-xl p-5 space-y-3">
          <h4 class="text-base font-bold text-amber-300">
            ${escapeHtml(currentLesson.scopeImportance.title)}
          </h4>
          <p class="text-xs sm:text-sm text-slate-200 leading-relaxed">
            ${escapeHtml(currentLesson.scopeImportance.description)}
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-2.5 pt-1">
            ${scopeChecklistHtml}
          </div>
        </div>

        <!-- Explorador Interactivo de las Cláusulas Mandatorias (4 a 10) -->
        <div class="bg-slate-950/90 border border-slate-800 rounded-xl p-5 space-y-4">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-blue-400">
                Explorador Interactivo de Requisitos Mandatorios
              </span>
              <h4 class="text-base sm:text-lg font-bold text-white">
                Cláusulas 4 a 10 de ISO/IEC 27001:2022 (Haz clic en cada cláusula)
              </h4>
            </div>
            <span class="text-xs px-2.5 py-1 rounded bg-rose-500/15 text-rose-300 border border-rose-500/30 font-semibold">
              Prohibido excluir cláusulas 4 a 10
            </span>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
            ${clauseButtonsHtml}
          </div>

          <div class="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4">
            <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
              <div>
                <span class="text-xs font-bold uppercase text-cyan-400">
                  ${escapeHtml(activeClause.clauseNumber)} • Etapa PHVA: ${escapeHtml(
        activeClause.pdcaStage
      )}
                </span>
                <h5 class="text-lg font-bold text-white mt-0.5">
                  ${escapeHtml(activeClause.title)}
                </h5>
              </div>
            </div>

            <p class="text-xs sm:text-sm text-slate-200 leading-relaxed">
              ${escapeHtml(activeClause.summary)}
            </p>

            <div>
              <p class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Sub-cláusulas normativas:
              </p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
                ${subClausesHtml}
              </div>
            </div>

            <div class="p-3.5 rounded-lg bg-blue-500/10 border border-blue-500/30 text-xs text-blue-200">
              <strong class="text-cyan-300">Criterio Crítico de Auditoría: </strong>
              ${escapeHtml(activeClause.auditKeyRequirement)}
            </div>
          </div>
        </div>
      `;
    }

    // Contenido específico Lección 1.2
    if (currentLesson.id === 'leccion-1-2') {
      const domainsHtml = (currentLesson.domains2022 || [])
        .map(
          (dom) => `
          <div class="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-4">
            <div class="flex items-center justify-between gap-2">
              <div>
                <span class="text-xs font-mono font-bold text-cyan-400">
                  ${escapeHtml(dom.clause)}
                </span>
                <h5 class="text-base font-bold text-white">${escapeHtml(
                  dom.name
                )}</h5>
              </div>
              <div class="text-right">
                <span class="text-2xl font-extrabold text-blue-400">
                  ${dom.count}
                </span>
                <span class="text-[11px] text-slate-400 block">
                  controles (${dom.percentage}%)
                </span>
              </div>
            </div>

            <div class="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
              <div
                class="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                style="width: ${dom.percentage}%"
              ></div>
            </div>

            <p class="text-xs text-slate-300 leading-relaxed">${escapeHtml(
              dom.purpose
            )}</p>

            <div class="space-y-1.5 pt-2 border-t border-slate-800">
              <p class="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Controles representativos del dominio:
              </p>
              <div class="grid grid-cols-1 gap-1.5 max-h-52 overflow-y-auto pr-1">
                ${dom.representativeControls
                  .map(
                    (ctrl) => `
                  <div class="text-xs bg-slate-900/90 border border-slate-800/80 rounded px-2.5 py-1.5 text-slate-200">
                    ${escapeHtml(ctrl)}
                  </div>
                `
                  )
                  .join('')}
              </div>
            </div>
          </div>
        `
        )
        .join('');

      const compRowsHtml = (currentLesson.normativeComparison || [])
        .map(
          (row) => `
          <div class="p-4 rounded-xl bg-slate-950 border border-slate-800 grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div>
              <span class="text-[10px] font-bold uppercase text-slate-400 block">
                ISO 27002:2013 (Antigua)
              </span>
              <p class="text-slate-300 font-medium mt-1">${escapeHtml(
                row.version2013
              )}</p>
            </div>
            <div>
              <span class="text-[10px] font-bold uppercase text-cyan-400 block">
                ISO 27002:2022 (Vigente)
              </span>
              <p class="text-white font-bold mt-1">${escapeHtml(
                row.version2022
              )}</p>
            </div>
            <div>
              <span class="text-[10px] font-bold uppercase text-emerald-400 block">
                Impacto en el SGSI
              </span>
              <p class="text-slate-300 mt-1">${escapeHtml(row.impact)}</p>
            </div>
          </div>
        `
        )
        .join('');

      specificLessonContentHtml = `
        <div class="space-y-6 pt-2">
          <div class="space-y-3">
            <h4 class="text-base sm:text-lg font-bold text-white">
              Los 4 Grandes Temas / Dominios de ISO/IEC 27002:2022 (93 Controles en Total)
            </h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              ${domainsHtml}
            </div>
          </div>

          <div class="space-y-3">
            <h4 class="text-base font-bold text-white">
              Síntesis de Evolución Normativa (Edición 2013 vs. Edición 2022)
            </h4>
            <div class="space-y-2.5">
              ${compRowsHtml}
            </div>
          </div>
        </div>
      `;
    }

    // Contenido específico Lección 1.3
    if (currentLesson.id === 'leccion-1-3') {
      const onlyFeatured = Boolean(state.showOnlySyllabusFeaturedControls);
      const allNewControls = currentLesson.newControls2022 || [];
      const filteredControls = onlyFeatured
        ? allNewControls.filter((c) => c.isFeaturedInSyllabus)
        : allNewControls;

      const controlsCardsHtml = filteredControls
        .map(
          (ctrl) => `
          <div class="rounded-xl p-5 border space-y-3 ${
            ctrl.isFeaturedInSyllabus
              ? 'bg-slate-950/90 border-blue-500/40 shadow-lg'
              : 'bg-slate-950/60 border-slate-800'
          }">
            <div class="flex flex-wrap items-center justify-between gap-2">
              <div class="flex items-center gap-2">
                <span class="text-xs font-mono font-extrabold px-2.5 py-1 rounded bg-blue-500/20 text-cyan-300 border border-blue-500/30">
                  ${escapeHtml(ctrl.code)}
                </span>
                <span class="text-xs font-semibold text-slate-400">
                  ${escapeHtml(ctrl.domain)}
                </span>
              </div>
              ${
                ctrl.isFeaturedInSyllabus
                  ? `
                <span class="text-[11px] font-bold uppercase px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  Destacado del Sílabo
                </span>
              `
                  : ''
              }
            </div>

            <h5 class="text-base font-bold text-white">${escapeHtml(
              ctrl.name
            )}</h5>

            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
              <strong class="text-slate-100">Propósito normativo: </strong>
              ${escapeHtml(ctrl.purpose)}
            </p>

            <div class="p-3.5 rounded-lg bg-slate-900 border border-slate-800 text-xs sm:text-sm text-cyan-100 leading-relaxed">
              ${escapeHtml(ctrl.technicalExample)}
            </div>

            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2 border-t border-slate-800/80 text-xs">
              <span class="text-slate-300">
                <strong class="text-emerald-400">Evidencia de Auditoría: </strong>
                ${escapeHtml(ctrl.auditEvidence)}
              </span>
            </div>

            <div class="flex flex-wrap gap-1.5 pt-1">
              ${ctrl.attributes
                .map(
                  (attr) => `
                <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800">
                  ${escapeHtml(attr)}
                </span>
              `
                )
                .join('')}
            </div>
          </div>
        `
        )
        .join('');

      specificLessonContentHtml = `
        <div class="space-y-4 pt-2">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-950 p-4 rounded-xl border border-slate-800">
            <div>
              <h4 class="text-base font-bold text-white">
                Catálogo Completo de los 11 Nuevos Controles de ISO/IEC 27002:2022
              </h4>
              <p class="text-xs text-slate-400">
                Incluye los 5 controles destacados del sílabo (5.23, 8.9, 8.10, 8.11 y 8.12) y los 6 nuevos controles adicionales (5.7, 5.30, 7.4, 8.16, 8.23 y 8.28).
              </p>
            </div>
            <div class="flex items-center gap-2 shrink-0">
              <button
                type="button"
                data-action="filter-syllabus-controls"
                data-only-featured="false"
                class="px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                  !onlyFeatured
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-900 text-slate-400 border border-slate-800'
                }"
              >
                Todos los 11 Nuevos
              </button>
              <button
                type="button"
                data-action="filter-syllabus-controls"
                data-only-featured="true"
                class="px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                  onlyFeatured
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-900 text-slate-400 border border-slate-800'
                }"
              >
                5 Destacados del Sílabo
              </button>
            </div>
          </div>

          <div class="grid grid-cols-1 gap-4">
            ${controlsCardsHtml}
          </div>
        </div>
      `;
    }

    // Contenido específico Lección 1.4
    if (currentLesson.id === 'leccion-1-4') {
      const selectedTag = state.selectedHashtagFilter || 'TODOS';
      const categoriesHtml = (currentLesson.attributeCategories || [])
        .map(
          (cat) => `
          <div class="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-2.5">
            <div class="flex items-center justify-between gap-2 flex-wrap">
              <h5 class="text-sm font-bold text-cyan-400">${escapeHtml(
                cat.name
              )}</h5>
              <span class="text-xs text-slate-400">${escapeHtml(
                cat.purpose
              )}</span>
            </div>
            <div class="flex flex-wrap gap-1.5">
              ${cat.hashtags
                .map((tag) => {
                  const isActive = selectedTag === tag;
                  return `
                  <button
                    type="button"
                    data-action="select-hashtag-filter"
                    data-hashtag="${escapeHtml(tag)}"
                    class="text-xs font-mono px-2.5 py-1 rounded-lg border transition-all cursor-pointer ${
                      isActive
                        ? 'bg-blue-600 text-white border-blue-400 shadow-md'
                        : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-blue-500/50 hover:text-white'
                    }"
                  >
                    ${escapeHtml(tag)}
                  </button>
                `;
                })
                .join('')}
            </div>
          </div>
        `
        )
        .join('');

      const quickTags = [
        '#Preventivo',
        '#Detectivo',
        '#Correctivo',
        '#Confidencialidad',
        '#Disponibilidad',
        '#Identificar',
        '#Proteger',
        '#Detectar',
        '#Responder',
        '#Recuperar',
        '#Protección_de_la_información',
        '#Defensa',
      ];

      const quickFilterBtnsHtml = quickTags
        .map((tag) => {
          const isAct = selectedTag === tag;
          return `
            <button
              type="button"
              data-action="select-hashtag-filter"
              data-hashtag="${escapeHtml(tag)}"
              class="px-3 py-1.5 rounded-lg text-xs font-mono font-semibold border transition-all cursor-pointer ${
                isAct
                  ? 'bg-cyan-500 text-slate-950 border-cyan-400 font-bold'
                  : 'bg-slate-900 text-cyan-300 border-slate-800 hover:bg-slate-800'
              }"
            >
              ${escapeHtml(tag)}
            </button>
          `;
        })
        .join('');

      const filterableList = (currentLesson.filterableControls || []).filter(
        (ctrl) =>
          selectedTag === 'TODOS' || ctrl.hashtags.includes(selectedTag)
      );

      const filteredCardsHtml = filterableList
        .map(
          (ctrl) => `
          <div class="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-2.5">
            <div class="flex items-center justify-between">
              <span class="text-xs font-mono font-bold px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
                Control ${escapeHtml(ctrl.code)}
              </span>
              <span class="text-[11px] text-slate-400">${escapeHtml(
                ctrl.domain
              )}</span>
            </div>
            <h6 class="text-sm font-bold text-white">${escapeHtml(
              ctrl.name
            )}</h6>
            <p class="text-xs text-slate-300">${escapeHtml(ctrl.summary)}</p>
            <div class="flex flex-wrap gap-1 pt-1">
              ${ctrl.hashtags
                .map((h) => {
                  const isHighlighted = h === selectedTag;
                  return `
                  <span class="text-[10px] font-mono px-2 py-0.5 rounded ${
                    isHighlighted
                      ? 'bg-cyan-500 text-slate-950 font-bold'
                      : 'bg-slate-950 text-slate-400 border border-slate-800'
                  }">
                    ${escapeHtml(h)}
                  </span>
                `;
                })
                .join('')}
            </div>
          </div>
        `
        )
        .join('');

      specificLessonContentHtml = `
        <div class="space-y-6 pt-2">
          <!-- Las 5 Categorías de Atributos -->
          <div class="space-y-3">
            <h4 class="text-base sm:text-lg font-bold text-white">
              Las 5 Categorías de Atributos de Control en ISO/IEC 27002:2022
            </h4>
            <div class="grid grid-cols-1 gap-3">
              ${categoriesHtml}
            </div>
          </div>

          <!-- Mini-Filtrador Interactivo por Hashtags -->
          <div class="bg-slate-950 border border-blue-500/40 rounded-2xl p-5 space-y-4 shadow-xl">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
              <div>
                <span class="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                  <i data-lucide="hash" class="w-4 h-4"></i>
                  Laboratorio Mini-Filtrador de Controles por Hashtag
                </span>
                <h5 class="text-base font-bold text-white mt-0.5">
                  Haz clic en cualquier atributo arriba o en los filtros rápidos para filtrar controles en tiempo real
                </h5>
              </div>
              <button
                type="button"
                data-action="select-hashtag-filter"
                data-hashtag="TODOS"
                class="px-3 py-1.5 rounded-lg text-xs font-bold border cursor-pointer ${
                  selectedTag === 'TODOS'
                    ? 'bg-blue-600 text-white border-blue-500'
                    : 'bg-slate-900 text-slate-300 border-slate-700 hover:bg-slate-800'
                }"
              >
                Mostrar Todos (#TODOS)
              </button>
            </div>

            <div class="flex flex-wrap gap-1.5">
              ${quickFilterBtnsHtml}
            </div>

            <div class="text-xs text-slate-400">
              Filtro activo: <strong class="text-cyan-400 font-mono">${escapeHtml(
                selectedTag
              )}</strong> (${filterableList.length} controles coinciden)
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
              ${filteredCardsHtml}
            </div>
          </div>
        </div>
      `;
    }

    // Determinar siguiente lección para botón de avance
    const nextLessonMap = {
      'leccion-1-1': 'leccion-1-2',
      'leccion-1-2': 'leccion-1-3',
      'leccion-1-3': 'leccion-1-4',
    };
    const nextLessonId = nextLessonMap[currentLesson.id] || null;

    return `
      <div class="space-y-6">
        <!-- Pestañas de las 4 Lecciones -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          ${lessonTabsHtml}
        </div>

        <!-- Contenedor de la Lección Activa -->
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
              data-action="toggle-lesson-completed"
              data-lesson-id="${currentLesson.id}"
              class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                isLessonDone
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                  : 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/20'
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

          <!-- Conceptos Clave -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${keyConceptsHtml}
          </div>

          <!-- Contenido Interactivo Específico de la Lección -->
          ${specificLessonContentHtml}

          <!-- Conclusión Clave de la Lección -->
          <div class="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs sm:text-sm text-emerald-200 leading-relaxed">
            <strong class="text-emerald-400">Conclusión Clave (${escapeHtml(
              currentLesson.code
            )}): </strong>
            ${escapeHtml(currentLesson.takeaway)}
          </div>

          <!-- Bloc de Notas Personal por Lección + Botón Siguiente Lección -->
          <div class="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-3">
            <div class="flex items-center justify-between">
              <label
                for="note-${currentLesson.id}"
                class="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5"
              >
                <i data-lucide="file-text" class="w-4 h-4 text-cyan-400"></i>
                Mis Notas de Estudio (${escapeHtml(
                  currentLesson.code
                )}) • Guardado automático en localStorage
              </label>
              ${
                nextLessonId
                  ? `
                <button
                  type="button"
                  data-action="complete-and-next-lesson"
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
              data-action="lesson-note-input"
              data-lesson-id="${currentLesson.id}"
              rows="3"
              placeholder="Escribe aquí tus apuntes sobre cláusulas, controles o ideas para tu organización..."
              class="w-full rounded-lg bg-slate-900 border border-slate-800 p-3 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-blue-500"
            >${escapeHtml(noteText)}</textarea>
          </div>
        </div>
      </div>
    `;
  }

  // --- PROCESO 3: OBSERVA (2 VIDEOS + GUÍAS INTERACTIVAS) ---
  function renderProcesoObserva(state, mod1) {
    const v1 = mod1.observa.video1;
    const v2 = mod1.observa.video2;
    const activeStepNum = state.activeSoaStep || 1;
    const currentSoaStep =
      v1.soaSteps.find((s) => s.stepNumber === activeStepNum) || v1.soaSteps[0];

    const soaStepBtnsHtml = v1.soaSteps
      .map((step) => {
        const isSel = step.stepNumber === currentSoaStep.stepNumber;
        return `
          <button
            type="button"
            data-action="select-soa-step"
            data-step-number="${step.stepNumber}"
            class="p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
              isSel
                ? 'bg-blue-600/25 border-blue-500 text-white shadow-md'
                : 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800'
            }"
          >
            <span class="text-[11px] font-bold text-cyan-400 block">
              Campo ${step.stepNumber}
            </span>
            <span class="text-xs font-semibold line-clamp-1 mt-0.5">
              ${escapeHtml(step.fieldName)}
            </span>
          </button>
        `;
      })
      .join('');

    // Checkpoint Video 1
    const cp1Ans = state.observaCheckpoints[v1.id];
    const cp1OptsHtml = v1.checkpointQuestion.options
      .map((opt, idx) => {
        const isAnswered = typeof cp1Ans === 'number';
        const isCorrect = idx === v1.checkpointQuestion.correctIndex;
        const isSelected = cp1Ans === idx;
        let cls =
          'bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-800';
        if (isAnswered) {
          if (isCorrect) {
            cls =
              'bg-emerald-500/20 border-emerald-500/50 text-emerald-200 font-semibold';
          } else if (isSelected) {
            cls = 'bg-rose-500/20 border-rose-500/50 text-rose-200';
          }
        }
        return `
          <button
            type="button"
            data-action="answer-observa-checkpoint"
            data-video-id="${v1.id}"
            data-option-index="${idx}"
            class="text-left p-3 rounded-lg border text-xs transition-all cursor-pointer ${cls}"
          >
            ${escapeHtml(opt)}
          </button>
        `;
      })
      .join('');

    // Tarjetas desplegables de No Conformidades Mayores (Video 2)
    const ncCardsHtml = v2.nonConformityCases
      .map((nc) => {
        const isExpanded = Boolean(state.expandedNcCaseIds[nc.id]);
        return `
          <div class="rounded-xl border border-slate-800 bg-slate-950/90 overflow-hidden">
            <button
              type="button"
              data-action="toggle-nc-accordion"
              data-case-id="${nc.id}"
              class="w-full text-left p-4 hover:bg-slate-900/80 transition-colors flex items-center justify-between gap-3 cursor-pointer"
            >
              <div>
                <span class="text-[11px] font-bold uppercase text-rose-400 block">
                  ${escapeHtml(nc.clauseViolated)}
                </span>
                <h5 class="text-xs sm:text-sm font-bold text-white mt-0.5">
                  ${escapeHtml(nc.title)}
                </h5>
              </div>
              <i data-lucide="${
                isExpanded ? 'chevron-up' : 'chevron-down'
              }" class="w-4 h-4 text-slate-400 shrink-0"></i>
            </button>

            ${
              isExpanded
                ? `
              <div class="px-4 pb-4 pt-2 border-t border-slate-800/80 space-y-2.5 text-xs">
                <p class="text-slate-300 leading-relaxed">
                  <strong class="text-white">Escenario auditado: </strong>
                  ${escapeHtml(nc.scenario)}
                </p>
                <p class="text-rose-200 bg-rose-500/10 border border-rose-500/30 rounded-lg p-2.5">
                  <strong>¿Por qué es No Conformidad Mayor?: </strong>
                  ${escapeHtml(nc.whyMajorNC)}
                </p>
                <p class="text-emerald-200 bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-2.5">
                  <strong>Acción Correctiva (Cláusula 10.2): </strong>
                  ${escapeHtml(nc.correctiveAction)}
                </p>
              </div>
            `
                : ''
            }
          </div>
        `;
      })
      .join('');

    // Checkpoint Video 2
    const cp2Ans = state.observaCheckpoints[v2.id];
    const cp2OptsHtml = v2.checkpointQuestion.options
      .map((opt, idx) => {
        const isAnswered = typeof cp2Ans === 'number';
        const isCorrect = idx === v2.checkpointQuestion.correctIndex;
        const isSelected = cp2Ans === idx;
        let cls =
          'bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-800';
        if (isAnswered) {
          if (isCorrect) {
            cls =
              'bg-emerald-500/20 border-emerald-500/50 text-emerald-200 font-semibold';
          } else if (isSelected) {
            cls = 'bg-rose-500/20 border-rose-500/50 text-rose-200';
          }
        }
        return `
          <button
            type="button"
            data-action="answer-observa-checkpoint"
            data-video-id="${v2.id}"
            data-option-index="${idx}"
            class="text-left p-3 rounded-lg border text-xs transition-all cursor-pointer ${cls}"
          >
            ${escapeHtml(opt)}
          </button>
        `;
      })
      .join('');

    return `
      <div class="space-y-8">
        <!-- VIDEO 1: NAVEGANDO LA DECLARACIÓN DE APLICABILIDAD (SOA) -->
        <div class="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
          <div class="p-5 sm:p-6 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-cyan-400">
                Análisis Audiovisual 1 • Cláusula 6.1.3 d)
              </span>
              <h3 class="text-lg sm:text-xl font-bold text-white mt-1">
                ${escapeHtml(v1.title)}
              </h3>
            </div>
            <a
              href="${v1.youtubeFallbackUrl}"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-cyan-300 border border-slate-700 shrink-0"
            >
              <span>Abrir búsqueda auxiliar en YouTube</span>
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

            <!-- Resumen Visual Interactivo Paso a Paso de los 6 Campos de la SoA -->
            <div class="xl:col-span-6 p-5 sm:p-6 space-y-4 border-t xl:border-t-0 xl:border-l border-slate-800">
              <div>
                <span class="text-xs font-bold uppercase tracking-wider text-blue-400">
                  Recorrido Interactivo Paso a Paso
                </span>
                <h4 class="text-base font-bold text-white mt-0.5">
                  Los 6 Campos Obligatorios de una Declaración de Aplicabilidad (SoA)
                </h4>
              </div>

              <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
                ${soaStepBtnsHtml}
              </div>

              <div class="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-3">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-bold text-cyan-400">
                    Paso ${currentSoaStep.stepNumber} de 6: ${escapeHtml(
      currentSoaStep.fieldName
    )}
                  </span>
                </div>
                <p class="text-xs font-semibold text-white">
                  Pregunta que responde: ${escapeHtml(
                    currentSoaStep.questionAnswered
                  )}
                </p>
                <p class="text-xs text-slate-300 leading-relaxed">
                  ${escapeHtml(currentSoaStep.description)}
                </p>
                <div class="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-200">
                  <strong>Ejemplo correcto en SoA: </strong>
                  ${escapeHtml(currentSoaStep.exampleValue)}
                </div>
                <div class="p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-xs text-rose-200">
                  <strong>Error común en auditoría: </strong>
                  ${escapeHtml(currentSoaStep.commonAuditMistake)}
                </div>
              </div>
            </div>
          </div>

          <div class="p-5 bg-slate-950/70 border-t border-slate-800 space-y-3">
            <p class="text-xs sm:text-sm font-bold text-white">
              Comprobación de Observación 1: ${escapeHtml(
                v1.checkpointQuestion.question
              )}
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
              ${cp1OptsHtml}
            </div>
            ${
              typeof cp1Ans === 'number'
                ? `<p class="text-xs text-cyan-300 pt-1">${escapeHtml(
                    v1.checkpointQuestion.explanation
                  )}</p>`
                : ''
            }
          </div>
        </div>

        <!-- VIDEO 2: CASOS REALES DE NO CONFORMIDADES MAYORES EN AUDITORÍAS -->
        <div class="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
          <div class="p-5 sm:p-6 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-amber-400">
                Análisis Audiovisual 2 • Auditoría de Certificación Etapa 1 y 2
              </span>
              <h3 class="text-lg sm:text-xl font-bold text-white mt-1">
                ${escapeHtml(v2.title)}
              </h3>
            </div>
            <a
              href="${v2.youtubeFallbackUrl}"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-cyan-300 border border-slate-700 shrink-0"
            >
              <span>Abrir búsqueda auxiliar en YouTube</span>
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

            <!-- 4 Tarjetas Desplegables con Casos Reales de No Conformidades Mayores -->
            <div class="xl:col-span-6 p-5 sm:p-6 space-y-3 border-t xl:border-t-0 xl:border-l border-slate-800">
              <div>
                <span class="text-xs font-bold uppercase tracking-wider text-rose-400">
                  4 Casos Reales de Auditoría (Tarjetas Desplegables)
                </span>
                <h4 class="text-base font-bold text-white mt-0.5">
                  Haz clic en cada caso para inspeccionar el hallazgo y su acción correctiva
                </h4>
              </div>
              <div class="space-y-2.5">
                ${ncCardsHtml}
              </div>
            </div>
          </div>

          <div class="p-5 bg-slate-950/70 border-t border-slate-800 space-y-3">
            <p class="text-xs sm:text-sm font-bold text-white">
              Comprobación de Observación 2: ${escapeHtml(
                v2.checkpointQuestion.question
              )}
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
              ${cp2OptsHtml}
            </div>
            ${
              typeof cp2Ans === 'number'
                ? `<p class="text-xs text-cyan-300 pt-1">${escapeHtml(
                    v2.checkpointQuestion.explanation
                  )}</p>`
                : ''
            }
          </div>
        </div>
      </div>
    `;
  }

  // --- PROCESO 4: EXPLORA (MATRIZ COMPARATIVA + DOCS OFICIALES + PLANTILLA SOA CSV) ---
  function renderProcesoExplora(state, mod1) {
    const explora = mod1.explora;

    const compTableRowsHtml = explora.structuralChangesTable
      .map(
        (row) => `
        <tr class="hover:bg-slate-900/50">
          <td class="px-4 py-3 font-bold text-white">${escapeHtml(
            row.criterion
          )}</td>
          <td class="px-4 py-3 text-slate-300">${escapeHtml(row.iso2013)}</td>
          <td class="px-4 py-3 font-semibold text-cyan-300">${escapeHtml(
            row.iso2022
          )}</td>
          <td class="px-4 py-3 text-slate-300">${escapeHtml(
            row.practicalMeaning
          )}</td>
        </tr>
      `
      )
      .join('');

    const docsCardsHtml = explora.officialDocuments
      .map(
        (doc) => `
        <div class="bg-slate-950 border border-slate-800 hover:border-blue-500/40 rounded-xl p-5 flex flex-col justify-between space-y-4 transition-all">
          <div class="space-y-2.5">
            <div class="flex items-center justify-between gap-2">
              <span class="text-[11px] font-bold uppercase px-2.5 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
                ${escapeHtml(doc.badge)}
              </span>
              <span class="text-[11px] text-slate-400 truncate">
                ${escapeHtml(doc.organization)}
              </span>
            </div>
            <h4 class="text-base font-bold text-white leading-snug">
              ${escapeHtml(doc.title)}
            </h4>
            <p class="text-xs text-slate-300 leading-relaxed">
              ${escapeHtml(doc.description)}
            </p>
            <div class="flex flex-wrap gap-1.5 pt-1">
              ${doc.keyTopics
                .map(
                  (topic) => `
                <span class="text-[10px] px-2 py-0.5 rounded bg-slate-900 text-cyan-300 border border-slate-800">
                  ${escapeHtml(topic)}
                </span>
              `
                )
                .join('')}
            </div>
          </div>

          <div class="pt-3 border-t border-slate-800/80 flex items-center justify-between">
            <span class="text-[11px] text-slate-500 font-mono truncate max-w-[60%]">
              ${escapeHtml(doc.url)}
            </span>
            <a
              href="${doc.url}"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-colors"
            >
              <span>Abrir Documento Oficial</span>
              <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
            </a>
          </div>
        </div>
      `
      )
      .join('');

    const soaRowsHtml = explora.soaSampleRows
      .map(
        (row) => `
        <tr class="hover:bg-slate-900/60">
          <td class="px-3 py-2.5 font-mono font-bold text-cyan-400">
            ${escapeHtml(row.code)}
          </td>
          <td class="px-3 py-2.5 text-slate-300">${escapeHtml(row.theme)}</td>
          <td class="px-3 py-2.5 font-semibold text-white">
            ${escapeHtml(row.controlName)}
          </td>
          <td class="px-3 py-2.5 font-mono text-slate-300">
            ${escapeHtml(row.controlType)}
          </td>
          <td class="px-3 py-2.5">
            <span class="px-2 py-0.5 rounded font-bold ${
              row.applicable === 'SÍ'
                ? 'bg-emerald-500/20 text-emerald-300'
                : 'bg-rose-500/20 text-rose-300'
            }">
              ${escapeHtml(row.applicable)}
            </span>
          </td>
          <td class="px-3 py-2.5 text-slate-300 max-w-xs">
            ${escapeHtml(row.justification)}
          </td>
          <td class="px-3 py-2.5 text-slate-300">${escapeHtml(row.owner)}</td>
          <td class="px-3 py-2.5 font-mono text-emerald-400">
            ${escapeHtml(row.implementationProgress)}
          </td>
          <td class="px-3 py-2.5 text-slate-400 max-w-xs">
            ${escapeHtml(row.evidenceReference)}
          </td>
        </tr>
      `
      )
      .join('');

    return `
      <div class="space-y-8">
        <!-- 1. Matriz Comparativa Resumida 2013 vs 2022 -->
        <div class="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl space-y-5">
          <div>
            <span class="text-xs font-bold uppercase tracking-wider text-cyan-400">
              Lectura Técnica Comparativa
            </span>
            <h3 class="text-xl font-bold text-white mt-1">
              ${escapeHtml(explora.comparativeReadingTitle)}
            </h3>
            <p class="text-xs sm:text-sm text-slate-400 mt-1">
              ${escapeHtml(explora.comparativeReadingSubtitle)}
            </p>
          </div>

          <div class="overflow-x-auto rounded-xl border border-slate-800">
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="bg-slate-950 text-xs font-bold uppercase tracking-wider text-slate-300 border-b border-slate-800">
                  <th class="px-4 py-3.5">Criterio Estructural</th>
                  <th class="px-4 py-3.5">ISO/IEC 27002:2013</th>
                  <th class="px-4 py-3.5 text-cyan-400">ISO/IEC 27002:2022</th>
                  <th class="px-4 py-3.5">Significado Práctico en Auditoría</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-800 bg-slate-950/50 text-xs sm:text-sm">
                ${compTableRowsHtml}
              </tbody>
            </table>
          </div>
        </div>

        <!-- 2. Biblioteca de Documentos Famosos y Oficiales -->
        <div class="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl space-y-5">
          <div>
            <span class="text-xs font-bold uppercase tracking-wider text-blue-400">
              Fuentes Primarias y Guías Reconocidas
            </span>
            <h3 class="text-xl font-bold text-white mt-1">
              Biblioteca de Documentos Oficiales (ISO, INCIBE y Guías de Transición)
            </h3>
            <p class="text-xs sm:text-sm text-slate-400 mt-1">
              Todos los enlaces abren en una nueva pestaña hacia los portales oficiales.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${docsCardsHtml}
          </div>
        </div>

        <!-- 3. Recurso Descargable Funcional: Plantilla SoA (.CSV compatible con Excel) -->
        <div class="bg-gradient-to-br from-slate-900 via-emerald-950/30 to-slate-900 border border-emerald-500/40 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
          <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div class="space-y-1.5">
              <div class="flex items-center gap-2">
                <span class="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  <i data-lucide="file-spreadsheet" class="w-3.5 h-3.5"></i>
                  Herramienta de Trabajo Auditable
                </span>
                ${
                  state.soaDownloaded
                    ? `<span class="text-xs font-semibold text-emerald-400 flex items-center gap-1">
                        <i data-lucide="check-circle-2" class="w-3.5 h-3.5"></i>
                        Plantilla descargada
                      </span>`
                    : ''
                }
              </div>
              <h3 class="text-xl font-bold text-white">
                ${escapeHtml(explora.soaTemplateTitle)}
              </h3>
              <p class="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
                ${escapeHtml(explora.soaTemplateDescription)}
              </p>
            </div>

            <button
              type="button"
              data-action="download-soa-csv"
              class="inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-extrabold text-xs sm:text-sm shadow-lg shadow-emerald-500/20 shrink-0 transition-all cursor-pointer"
            >
              <i data-lucide="download" class="w-4 h-4"></i>
              <span>Descargar Plantilla SoA (.CSV compatible con Excel)</span>
            </button>
          </div>

          <div class="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/90">
            <table class="w-full text-left border-collapse text-xs">
              <thead>
                <tr class="bg-slate-900 text-slate-300 border-b border-slate-800 uppercase">
                  <th class="px-3 py-2.5">Código</th>
                  <th class="px-3 py-2.5">Dominio ISO 27002:2022</th>
                  <th class="px-3 py-2.5">Nombre del Control</th>
                  <th class="px-3 py-2.5">Tipo</th>
                  <th class="px-3 py-2.5">¿Aplica?</th>
                  <th class="px-3 py-2.5">Justificación de Inclusión / Exclusión</th>
                  <th class="px-3 py-2.5">Responsable</th>
                  <th class="px-3 py-2.5">Estado</th>
                  <th class="px-3 py-2.5">Evidencia / Documento</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-800/80">
                ${soaRowsHtml}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  }

  // --- PROCESO 5: PRACTICA (2 LABORATORIOS INTERACTIVOS GAMIFICADOS) ---
  function renderProcesoPractica(state, mod1) {
    const practica = mod1.practica;
    const domains = ['Organizacional', 'Personas', 'Físico', 'Tecnológico'];

    const act1Items = practica.classificationItems || [];
    const act1AnsweredCount = Object.keys(state.practicaAct1Answers).length;
    const act1CorrectCount = act1Items.filter(
      (item) => state.practicaAct1Answers[item.id] === item.correctDomain
    ).length;

    const act1CardsHtml = act1Items
      .map((item, idx) => {
        const selectedDomain = state.practicaAct1Answers[item.id];
        const isAnswered = Boolean(selectedDomain);
        const isCorrect = selectedDomain === item.correctDomain;

        const domBtns = domains
          .map((dom) => {
            const isThisPicked = selectedDomain === dom;
            let btnStyle =
              'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white';
            if (isAnswered) {
              if (dom === item.correctDomain) {
                btnStyle =
                  'bg-emerald-500/20 border-emerald-500 text-emerald-200 font-bold';
              } else if (isThisPicked) {
                btnStyle =
                  'bg-rose-500/20 border-rose-500 text-rose-200 font-semibold';
              }
            }

            return `
              <button
                type="button"
                data-action="practica-act1-pick"
                data-item-id="${item.id}"
                data-domain="${dom}"
                class="px-3 py-2 rounded-lg border text-xs transition-all cursor-pointer ${btnStyle}"
              >
                ${dom}
              </button>
            `;
          })
          .join('');

        return `
          <div class="p-4 rounded-xl border transition-all space-y-3 ${
            !isAnswered
              ? 'bg-slate-950/80 border-slate-800'
              : isCorrect
              ? 'bg-emerald-950/30 border-emerald-500/40'
              : 'bg-rose-950/30 border-rose-500/40'
          }">
            <div class="flex items-center justify-between gap-2">
              <span class="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-blue-500/20 text-cyan-300 border border-blue-500/30">
                Control #${idx + 1} (${escapeHtml(item.controlCode)})
              </span>
              ${
                isAnswered
                  ? `<span class="text-xs font-bold flex items-center gap-1 ${
                      isCorrect ? 'text-emerald-400' : 'text-rose-400'
                    }">
                      <i data-lucide="${
                        isCorrect ? 'check-circle-2' : 'x-circle'
                      }" class="w-4 h-4"></i>
                      ${
                        isCorrect
                          ? '¡Correcto!'
                          : `Es ${escapeHtml(item.correctDomain)}`
                      }
                    </span>`
                  : ''
              }
            </div>

            <p class="text-sm font-bold text-white">${escapeHtml(
              item.statement
            )}</p>

            <div class="grid grid-cols-2 gap-2">
              ${domBtns}
            </div>

            ${
              isAnswered
                ? `<p class="text-xs text-slate-300 pt-2 border-t border-slate-800/80 leading-relaxed">
                    ${escapeHtml(item.explanation)}
                  </p>`
                : ''
            }
          </div>
        `;
      })
      .join('');

    // Actividad 2: Auditoría de Alcance (3 casos)
    const act2Cases = practica.scopeCases || [];
    const act2CorrectCount = act2Cases.filter((sc) => {
      const selId = state.practicaAct2Answers[sc.id];
      const opt = sc.options.find((o) => o.id === selId);
      return Boolean(opt && opt.isCorrect);
    }).length;

    const act2CardsHtml = act2Cases
      .map((sc) => {
        const selectedOptId = state.practicaAct2Answers[sc.id];
        const selectedOpt = sc.options.find((o) => o.id === selectedOptId);
        const isAnswered = Boolean(selectedOpt);

        const optsHtml = sc.options
          .map((opt) => {
            const isThisSelected = selectedOptId === opt.id;
            let btnStyle =
              'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800';
            if (isAnswered) {
              if (opt.isCorrect) {
                btnStyle =
                  'bg-emerald-500/20 border-emerald-500/50 text-emerald-200 font-semibold';
              } else if (isThisSelected) {
                btnStyle = 'bg-rose-500/20 border-rose-500/50 text-rose-200';
              }
            }

            return `
              <button
                type="button"
                data-action="practica-act2-pick"
                data-case-id="${sc.id}"
                data-option-id="${opt.id}"
                class="w-full text-left p-3 rounded-lg border text-xs sm:text-sm transition-all cursor-pointer ${btnStyle}"
              >
                ${escapeHtml(opt.label)}
              </button>
            `;
          })
          .join('');

        return `
          <div class="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-4">
            <div class="flex flex-wrap items-center justify-between gap-2">
              <span class="text-xs font-bold uppercase px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                ${escapeHtml(sc.caseCode)} • Redactado de Alcance a Auditar
              </span>
              <span class="text-xs font-mono text-slate-400">
                ${escapeHtml(sc.clauseReference)}
              </span>
            </div>

            <blockquote class="p-4 rounded-lg bg-slate-900 border-l-4 border-l-amber-400 text-sm text-white italic">
              ${escapeHtml(sc.scopeDraft)}
            </blockquote>

            <div class="space-y-2">
              <p class="text-xs font-bold uppercase tracking-wider text-slate-400">
                Selecciona tu dictamen de auditoría:
              </p>
              ${optsHtml}
            </div>

            ${
              isAnswered
                ? `<div class="p-4 rounded-lg border text-xs space-y-1.5 ${
                    selectedOpt.isCorrect
                      ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-200'
                      : 'bg-rose-500/10 border-rose-500/30 text-rose-200'
                  }">
                    <p class="font-extrabold uppercase">
                      Veredicto Oficial: ${escapeHtml(sc.auditVerdict)}
                    </p>
                    <p class="leading-relaxed">${escapeHtml(sc.explanation)}</p>
                  </div>`
                : ''
            }
          </div>
        `;
      })
      .join('');

    return `
      <div class="space-y-8">
        <!-- ACTIVIDAD 1: CLASIFICADOR DE 12 CONTROLES EN LOS 4 DOMINIOS -->
        <div class="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5">
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-cyan-400">
                Laboratorio Gamificado 1 • Dominios ISO/IEC 27002:2022
              </span>
              <h3 class="text-xl font-bold text-white mt-1">
                ${escapeHtml(practica.activity1Title)}
              </h3>
              <p class="text-xs sm:text-sm text-slate-400 mt-1">
                ${escapeHtml(practica.activity1Instructions)}
              </p>
            </div>

            <div class="flex items-center gap-3 shrink-0">
              <div class="px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-right">
                <span class="text-[11px] text-slate-400 block">
                  Puntuación Actividad 1
                </span>
                <span class="text-lg font-extrabold text-emerald-400">
                  ${act1CorrectCount} / ${act1Items.length} aciertos
                </span>
              </div>
              <button
                type="button"
                data-action="reset-practica-act1"
                class="p-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white cursor-pointer"
                title="Reiniciar Clasificador"
              >
                <i data-lucide="rotate-ccw" class="w-4 h-4"></i>
              </button>
            </div>
          </div>

          <!-- Barra de Puntuación sobre 12 -->
          <div class="space-y-1.5">
            <div class="flex justify-between text-xs text-slate-400">
              <span>Controles clasificados: ${act1AnsweredCount} de ${
      act1Items.length
    }</span>
              <span class="font-bold text-cyan-400">
                ${Math.round((act1CorrectCount / act1Items.length) * 100)}% de precisión
              </span>
            </div>
            <div class="w-full h-2.5 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
              <div
                class="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 transition-all duration-300"
                style="width: ${(act1CorrectCount / act1Items.length) * 100}%"
              ></div>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${act1CardsHtml}
          </div>
        </div>

        <!-- ACTIVIDAD 2: AUDITORÍA DE ALCANCE (CLÁUSULA 4.3) -->
        <div class="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5">
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-amber-400">
                Laboratorio Gamificado 2 • Cláusula 4.3 de ISO/IEC 27001:2022
              </span>
              <h3 class="text-xl font-bold text-white mt-1">
                ${escapeHtml(practica.activity2Title)}
              </h3>
              <p class="text-xs sm:text-sm text-slate-400 mt-1">
                ${escapeHtml(practica.activity2Instructions)}
              </p>
            </div>

            <div class="flex items-center gap-3 shrink-0">
              <div class="px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-right">
                <span class="text-[11px] text-slate-400 block">
                  Puntuación Actividad 2
                </span>
                <span class="text-lg font-extrabold text-amber-400">
                  ${act2CorrectCount} / ${act2Cases.length} casos
                </span>
              </div>
              <button
                type="button"
                data-action="reset-practica-act2"
                class="p-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white cursor-pointer"
                title="Reiniciar Casos de Alcance"
              >
                <i data-lucide="rotate-ccw" class="w-4 h-4"></i>
              </button>
            </div>
          </div>

          <div class="space-y-5">
            ${act2CardsHtml}
          </div>
        </div>
      </div>
    `;
  }

  // --- PROCESO 6: APLICA (SIMULADOR DE TOMA DE DECISIONES CLÍNICO) ---
  function renderProcesoAplica(state, mod1) {
    const aplica = mod1.aplica;
    const selectedOpt = aplica.options.find(
      (o) => o.id === state.aplicaSelectedOption
    );

    const contextCardsHtml = aplica.clinicalContextDetails
      .map(
        (ctx) => `
        <div class="bg-slate-950 border border-slate-800 rounded-xl p-4">
          <span class="text-xs font-bold uppercase text-cyan-400 block">
            ${escapeHtml(ctx.label)}
          </span>
          <p class="text-xs text-slate-300 mt-1.5 leading-relaxed">
            ${escapeHtml(ctx.detail)}
          </p>
        </div>
      `
      )
      .join('');

    const optionsHtml = aplica.options
      .map((opt) => {
        const isSelected = state.aplicaSelectedOption === opt.id;
        let cardStyle =
          'bg-slate-950/90 border-slate-800 hover:border-slate-700 text-slate-200';
        if (isSelected) {
          cardStyle = opt.isCorrect
            ? 'bg-emerald-950/40 border-emerald-500 text-white shadow-xl'
            : 'bg-rose-950/40 border-rose-500 text-white shadow-xl';
        }

        return `
          <button
            type="button"
            data-action="select-aplica-option"
            data-option-id="${opt.id}"
            class="text-left p-5 rounded-xl border transition-all flex flex-col justify-between gap-4 cursor-pointer ${cardStyle}"
          >
            <div class="space-y-2.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-extrabold uppercase px-2.5 py-0.5 rounded bg-slate-900 text-cyan-300 border border-slate-700">
                  ${escapeHtml(opt.optionCode)}
                </span>
                ${
                  isSelected
                    ? `<i data-lucide="${
                        opt.isCorrect ? 'check-circle-2' : 'x-circle'
                      }" class="w-5 h-5 ${
                        opt.isCorrect ? 'text-emerald-400' : 'text-rose-400'
                      }"></i>`
                    : ''
                }
              </div>
              <h5 class="text-sm font-bold text-white leading-snug">
                ${escapeHtml(opt.title)}
              </h5>
              <p class="text-xs text-slate-300 leading-relaxed">
                ${escapeHtml(opt.description)}
              </p>
            </div>

            <div class="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs">
              <span class="text-cyan-400 font-semibold">
                ${isSelected ? 'Decisión simulada' : 'Simular esta decisión'}
              </span>
              <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
            </div>
          </button>
        `;
      })
      .join('');

    let decisionFeedbackHtml = '';
    if (selectedOpt) {
      const mappedBadges = selectedOpt.controlsMapped
        .map(
          (ctrl) => `
          <span class="text-xs font-medium px-3 py-1 rounded-lg bg-slate-950 text-cyan-300 border border-slate-800">
            ${escapeHtml(ctrl)}
          </span>
        `
        )
        .join('');

      decisionFeedbackHtml = `
        <div class="rounded-2xl p-6 border space-y-5 fade-in-view ${
          selectedOpt.isCorrect
            ? 'bg-emerald-950/30 border-emerald-500/50'
            : 'bg-rose-950/30 border-rose-500/50'
        }">
          <div class="flex items-center gap-2.5">
            <i data-lucide="${
              selectedOpt.isCorrect ? 'check-circle-2' : 'alert-triangle'
            }" class="w-6 h-6 ${
        selectedOpt.isCorrect ? 'text-emerald-400' : 'text-rose-400'
      }"></i>
            <h4 class="text-lg font-bold text-white">
              Resultado de la Simulación (${escapeHtml(selectedOpt.optionCode)})
            </h4>
          </div>

          <p class="text-sm text-slate-200 leading-relaxed">
            ${escapeHtml(selectedOpt.immediateFeedback)}
          </p>

          ${
            selectedOpt.isCorrect && selectedOpt.consequenceCard
              ? `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="p-4 rounded-xl bg-slate-950/90 border border-emerald-500/40 space-y-1.5">
                <span class="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  Consecuencia
                </span>
                <p class="text-sm font-semibold text-white leading-relaxed">
                  &ldquo;${escapeHtml(selectedOpt.consequenceCard)}&rdquo;
                </p>
              </div>
              <div class="p-4 rounded-xl bg-slate-950/90 border border-cyan-500/40 space-y-1.5">
                <span class="text-xs font-bold uppercase tracking-wider text-cyan-400">
                  Explicación
                </span>
                <p class="text-sm font-semibold text-white leading-relaxed">
                  &ldquo;${escapeHtml(selectedOpt.explanationCard)}&rdquo;
                </p>
              </div>
            </div>
          `
              : ''
          }

          <div>
            <p class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Controles ISO/IEC 27002:2022 evaluados en esta decisión:
            </p>
            <div class="flex flex-wrap gap-2">
              ${mappedBadges}
            </div>
          </div>
        </div>
      `;
    }

    return `
      <div class="space-y-6">
        <div class="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
          <div class="flex items-start gap-3.5">
            <div class="p-3 rounded-xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 shrink-0">
              <i data-lucide="stethoscope" class="w-6 h-6"></i>
            </div>
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-cyan-400">
                Caso Clínico Empresarial Real • Toma de Decisiones
              </span>
              <h3 class="text-xl sm:text-2xl font-bold text-white mt-0.5">
                ${escapeHtml(aplica.title)}
              </h3>
              <p class="text-xs sm:text-sm text-slate-400 mt-1">
                ${escapeHtml(aplica.subtitle)}
              </p>
            </div>
          </div>

          <div class="p-5 rounded-xl bg-slate-950 border border-blue-500/30 space-y-3">
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-blue-400">
                Situación Operativa:
              </span>
              <p class="text-base sm:text-lg font-bold text-white mt-1">
                &ldquo;${escapeHtml(aplica.situation)}&rdquo;
              </p>
            </div>
            <div class="pt-2 border-t border-slate-800">
              <span class="text-xs font-bold uppercase tracking-wider text-amber-400">
                Pregunta de Arquitectura de Controles:
              </span>
              <p class="text-sm sm:text-base font-bold text-amber-200 mt-1">
                ${escapeHtml(aplica.challengeQuestion)}
              </p>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            ${contextCardsHtml}
          </div>

          <div class="space-y-3">
            <h4 class="text-base font-bold text-white">
              Selecciona la Decisión de Implementación para la Clínica:
            </h4>
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
              ${optionsHtml}
            </div>
          </div>

          ${decisionFeedbackHtml}
        </div>
      </div>
    `;
  }

  // --- PROCESO 7: COMPRUEBA (CUESTIONARIO FORMATIVO DE 10 PREGUNTAS) ---
  function renderProcesoComprueba(state, mod1) {
    const comprueba = mod1.comprueba;
    const questions = comprueba.questions || [];
    const answeredCount = Object.keys(state.quizAnswers).length;

    const questionsHtml = questions
      .map((q) => {
        const selectedIdx = state.quizAnswers[q.id];
        const isAnswered = typeof selectedIdx === 'number';
        const isCorrect = selectedIdx === q.correctIndex;

        const optsHtml = q.options
          .map((opt, optIdx) => {
            const isThisSelected = selectedIdx === optIdx;
            let btnStyle =
              'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800';

            if (state.quizSubmitted) {
              if (optIdx === q.correctIndex) {
                btnStyle =
                  'bg-emerald-500/20 border-emerald-500 text-emerald-200 font-bold';
              } else if (isThisSelected) {
                btnStyle =
                  'bg-rose-500/20 border-rose-500 text-rose-200 font-semibold';
              }
            } else if (isThisSelected) {
              btnStyle =
                'bg-blue-600/25 border-blue-500 text-white font-semibold';
            }

            return `
              <button
                type="button"
                data-action="select-quiz-answer"
                data-question-id="${q.id}"
                data-option-index="${optIdx}"
                class="w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm transition-all cursor-pointer ${btnStyle}"
              >
                ${escapeHtml(opt)}
              </button>
            `;
          })
          .join('');

        return `
          <div class="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-4">
            <div class="flex flex-wrap items-center justify-between gap-2">
              <div class="flex items-center gap-2">
                <span class="text-xs font-bold px-2.5 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
                  Pregunta ${q.number} de 10
                </span>
                <span class="text-xs font-medium px-2.5 py-0.5 rounded bg-slate-900 text-cyan-300 border border-slate-800">
                  ${escapeHtml(q.type)}
                </span>
              </div>
              <span class="text-[11px] text-slate-400">${escapeHtml(
                q.category
              )}</span>
            </div>

            <p class="text-sm sm:text-base font-bold text-white leading-snug">
              ${escapeHtml(q.question)}
            </p>

            <div class="space-y-2">
              ${optsHtml}
            </div>

            ${
              (state.quizSubmitted || isAnswered)
                ? `<div class="p-3.5 rounded-lg border text-xs ${
                    isCorrect
                      ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-200'
                      : 'bg-blue-500/10 border-blue-500/30 text-blue-200'
                  }">
                    <p class="font-bold mb-1">
                      ${
                        isCorrect
                          ? '¡Respuesta Correcta! Sustento Normativo:'
                          : 'Explicación Normativa:'
                      }
                    </p>
                    <p class="leading-relaxed">${escapeHtml(q.explanation)}</p>
                  </div>`
                : ''
            }
          </div>
        `;
      })
      .join('');

    return `
      <div class="space-y-6">
        <div class="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5">
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-cyan-400">
                Evaluación Formativa Sin Penalización • 10 Preguntas
              </span>
              <h3 class="text-xl sm:text-2xl font-bold text-white mt-1">
                ${escapeHtml(comprueba.title)}
              </h3>
              <p class="text-xs sm:text-sm text-slate-400 mt-1">
                ${escapeHtml(comprueba.subtitle)}
              </p>
            </div>

            <div class="flex items-center gap-3 shrink-0">
              ${
                state.quizScore !== null
                  ? `<div class="px-4 py-2.5 rounded-xl border text-right ${
                      state.quizScore >= 70
                        ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300'
                        : 'bg-amber-500/15 border-amber-500/40 text-amber-300'
                    }">
                      <span class="text-[11px] block">Calificación</span>
                      <span class="text-xl font-extrabold">${
                        state.quizScore
                      }%</span>
                    </div>`
                  : ''
              }
              <button
                type="button"
                data-action="reset-quiz"
                class="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-white cursor-pointer"
              >
                <i data-lucide="rotate-ccw" class="w-4 h-4"></i>
                <span>Reiniciar Cuestionario</span>
              </button>
            </div>
          </div>

          <div class="space-y-5">
            ${questionsHtml}
          </div>

          <div class="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div class="text-xs sm:text-sm text-slate-300">
              Preguntas respondidas:
              <strong class="text-cyan-400">${answeredCount} / 10</strong>
              (Nota mínima aprobatoria: 70%)
            </div>

            <button
              type="button"
              data-action="submit-quiz"
              class="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-sm shadow-lg shadow-blue-600/25 transition-all cursor-pointer"
            >
              Calcular Nota Final y Guardar en Progreso
            </button>
          </div>
        </div>
      </div>
    `;
  }

  // --- PROCESO 8: RECUERDA (INFOGRAFÍA INTERACTIVA 5 PILARES + LOGRO) ---
  function renderProcesoRecuerda(state, mod1) {
    const recuerda = mod1.recuerda;
    const pillars = recuerda.pillars || [];
    const selectedPillar =
      pillars.find((p) => p.id === state.selectedRecuerdaPillarId) ||
      pillars[0];

    const pillarBtnsHtml = pillars
      .map((pillar) => {
        const isSelected = pillar.id === selectedPillar.id;
        return `
          <button
            type="button"
            data-action="select-recuerda-pillar"
            data-pillar-id="${pillar.id}"
            class="text-left p-4 rounded-xl border transition-all flex flex-col justify-between gap-2 cursor-pointer ${
              isSelected
                ? 'bg-blue-600/25 border-blue-500 text-white shadow-lg'
                : 'bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-800/80'
            }"
          >
            <span class="text-[11px] font-bold uppercase text-cyan-400">
              Pilar ${pillar.number} de 5
            </span>
            <p class="text-xs font-bold leading-snug line-clamp-3">
              ${escapeHtml(pillar.title)}
            </p>
          </button>
        `;
      })
      .join('');

    const checklistHtml = selectedPillar.checklist
      .map(
        (item) => `
        <div class="p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-200 flex items-start gap-2">
          <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-400 shrink-0 mt-0.5"></i>
          <span>${escapeHtml(item)}</span>
        </div>
      `
      )
      .join('');

    const allPillarsSummaryHtml = pillars
      .map(
        (p) => `
        <div class="p-4 rounded-xl bg-slate-950/70 border border-slate-800 flex items-start gap-3">
          <div class="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/40 text-cyan-300 font-extrabold text-sm flex items-center justify-center shrink-0">
            ${p.number}
          </div>
          <div>
            <h5 class="text-xs sm:text-sm font-bold text-white">
              ${escapeHtml(p.title)}
            </h5>
            <p class="text-xs text-slate-400 mt-1">${escapeHtml(
              p.coreStatement
            )}</p>
          </div>
        </div>
      `
      )
      .join('');

    return `
      <div class="space-y-6">
        <div class="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
          <div>
            <span class="text-xs font-bold uppercase tracking-wider text-cyan-400">
              Síntesis Visual de Alto Impacto • 5 Pilares del Módulo 1
            </span>
            <h3 class="text-xl sm:text-2xl font-bold text-white mt-1">
              ${escapeHtml(recuerda.title)}
            </h3>
            <p class="text-xs sm:text-sm text-slate-400 mt-1">
              ${escapeHtml(recuerda.subtitle)}
            </p>
          </div>

          <!-- Selector de los 5 Pilares -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            ${pillarBtnsHtml}
          </div>

          <!-- Tarjeta de Detalle del Pilar Activo -->
          <div class="bg-gradient-to-br from-slate-950 via-blue-950/50 to-slate-950 border border-blue-500/40 rounded-2xl p-6 space-y-4 shadow-xl">
            <div class="flex flex-wrap items-center justify-between gap-2">
              <span class="text-xs font-bold uppercase px-3 py-1 rounded-full bg-blue-500/20 text-cyan-300 border border-blue-500/30">
                ${escapeHtml(selectedPillar.badge)}
              </span>
              <span class="text-xs font-mono text-amber-300">
                ${escapeHtml(selectedPillar.keyMetrics)}
              </span>
            </div>

            <h4 class="text-lg sm:text-xl font-extrabold text-white">
              ${escapeHtml(selectedPillar.title)}
            </h4>

            <p class="text-sm text-slate-200 leading-relaxed">
              ${escapeHtml(selectedPillar.coreStatement)}
            </p>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
              ${checklistHtml}
            </div>

            <div class="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-200">
              <strong class="text-emerald-400">Regla de Oro para Auditoría: </strong>
              ${escapeHtml(selectedPillar.auditTakeaway)}
            </div>
          </div>

          <!-- Vista Rápida de los 5 Pilares en Cuadrícula -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
            ${allPillarsSummaryHtml}
          </div>

          <!-- Botón Final "Completar Módulo 1" y Notificación de Logro -->
          <div class="pt-5 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div class="text-xs sm:text-sm text-slate-300">
              Haz clic en el botón final para acreditar el 100% de los procesos del Módulo 1 en tu barra de progreso global.
            </div>
            <button
              type="button"
              data-action="complete-all-module-1"
              class="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-extrabold text-sm shadow-xl shadow-amber-500/25 transition-all cursor-pointer"
            >
              <i data-lucide="award" class="w-5 h-5"></i>
              <span>Completar Módulo 1</span>
            </button>
          </div>

          ${
            state.module1CompletedBanner
              ? `
            <div class="p-5 rounded-2xl bg-gradient-to-r from-emerald-950 via-teal-950 to-slate-900 border-2 border-emerald-400/60 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xl fade-in-view">
              <div class="flex items-center gap-3.5">
                <div class="p-3 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-400/40">
                  <i data-lucide="award" class="w-7 h-7"></i>
                </div>
                <div>
                  <span class="text-xs font-bold uppercase tracking-wider text-emerald-300">
                    ¡Logro Desbloqueado • 100% Módulo 1 Completado!
                  </span>
                  <h5 class="text-base sm:text-lg font-extrabold text-white">
                    Has dominado el SGSI bajo ISO/IEC 27001:2022 e ISO/IEC 27002:2022
                  </h5>
                </div>
              </div>
              <button
                type="button"
                data-action="open-certificate-modal"
                class="px-4 py-2.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-xs sm:text-sm shrink-0 cursor-pointer"
              >
                Abrir Mi Certificado Ahora
              </button>
            </div>
          `
              : ''
          }
        </div>
      </div>
    `;
  }

  // --- ENRUTADOR PRINCIPAL DEL MÓDULO 1 ---
  function renderModuleOneProcess(state) {
    const mod1 = window.LMS_DATA.MODULE_1_DATA;
    const processesMeta = mod1.processesMeta;
    const processId = state.activeView.processId || 'inicia';
    const currentIndex = processesMeta.findIndex((p) => p.id === processId);
    const currentMeta =
      currentIndex >= 0 ? processesMeta[currentIndex] : processesMeta[0];
    const prevProc = currentIndex > 0 ? processesMeta[currentIndex - 1] : null;
    const nextProc =
      currentIndex < processesMeta.length - 1
        ? processesMeta[currentIndex + 1]
        : null;
    const isCompleted = Boolean(state.completedProcesses[currentMeta.id]);

    const processPillsHtml = processesMeta
      .map((p) => {
        const isCurrent = p.id === currentMeta.id;
        const isDone = Boolean(state.completedProcesses[p.id]);
        return `
          <button
            type="button"
            data-action="select-process"
            data-process-id="${p.id}"
            class="px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shrink-0 border ${
              isCurrent
                ? 'bg-blue-600 text-white border-blue-400 shadow-lg shadow-blue-600/25'
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

    let processBodyHtml = '';
    switch (currentMeta.id) {
      case 'inicia':
        processBodyHtml = renderProcesoInicia(state, mod1);
        break;
      case 'aprende':
        processBodyHtml = renderProcesoAprende(state, mod1);
        break;
      case 'observa':
        processBodyHtml = renderProcesoObserva(state, mod1);
        break;
      case 'explora':
        processBodyHtml = renderProcesoExplora(state, mod1);
        break;
      case 'practica':
        processBodyHtml = renderProcesoPractica(state, mod1);
        break;
      case 'aplica':
        processBodyHtml = renderProcesoAplica(state, mod1);
        break;
      case 'comprueba':
        processBodyHtml = renderProcesoComprueba(state, mod1);
        break;
      case 'recuerda':
        processBodyHtml = renderProcesoRecuerda(state, mod1);
        break;
      default:
        processBodyHtml = renderProcesoInicia(state, mod1);
        break;
    }

    return `
      <div class="space-y-6 pb-12 fade-in-view">
        <!-- Cabecera del Módulo 1 + Cinta de los 8 Procesos Pedagógicos -->
        <section class="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl space-y-4">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div class="flex items-start gap-3.5">
              <div class="p-3 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-400 shrink-0 mt-0.5">
                <i data-lucide="${
                  currentMeta.icon || 'sparkles'
                }" class="w-5 h-5"></i>
              </div>
              <div>
                <div class="flex items-center gap-2 flex-wrap">
                  <span class="text-xs font-bold uppercase tracking-wider text-cyan-400">
                    Módulo 1 • SGSI ISO/IEC 27001:2022 & 27002:2022
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
              data-action="toggle-process-completed"
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
            ${processPillsHtml}
          </div>
        </section>

        <!-- Contenido del Proceso Pedagógico Activo -->
        ${processBodyHtml}

        <!-- Pie de Navegación Secuencial entre los 8 Procesos -->
        <footer class="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-5 flex flex-wrap items-center justify-between gap-3">
          ${
            prevProc
              ? `
              <button
                type="button"
                data-action="select-process"
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
                data-action="select-section-0"
                class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-200 border border-slate-800 text-xs sm:text-sm font-semibold cursor-pointer"
              >
                <i data-lucide="arrow-left" class="w-4 h-4"></i>
                <span>Volver a Sección 0: Bienvenida</span>
              </button>
            `
          }

          ${
            nextProc
              ? `
              <button
                type="button"
                data-action="complete-and-next-process"
                data-current-process-id="${currentMeta.id}"
                data-next-process-id="${nextProc.id}"
                class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-xs sm:text-sm font-bold shadow-lg cursor-pointer"
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

  // ==========================================================================
  // 5. MODAL DE CERTIFICADO Y REQUISITOS
  // ==========================================================================
  function renderCertificateModal(state, metrics) {
    const hasPassedQuiz =
      (state.finalExamScore !== null && state.finalExamScore >= 70) ||
      (state.quizScore !== null &&
        state.quizScore >= 70 &&
        (state.mod2QuizScore === null || state.mod2QuizScore >= 70) &&
        (state.mod3QuizScore === null || state.mod3QuizScore >= 70) &&
        (state.mod4QuizScore === null || state.mod4QuizScore >= 70));
    const isApprovalUnlocked =
      metrics.progressPercentage === 100 && hasPassedQuiz;
    const isParticipationUnlocked = metrics.progressPercentage >= 80;

    return `
      <div class="relative w-full max-w-3xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden my-8">
        <div class="p-5 sm:p-6 bg-slate-950 border-b border-slate-800 flex items-center justify-between gap-4 no-print">
          <div class="flex items-center gap-3">
            <div class="p-2.5 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
              <i data-lucide="award" class="w-6 h-6"></i>
            </div>
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-amber-400">
                Credenciales Académicas • G4-CIBER-2026
              </span>
              <h3 class="text-lg sm:text-xl font-bold text-white">
                Estado de Certificación y Requisitos
              </h3>
            </div>
          </div>

          <button
            type="button"
            data-action="close-certificate-modal"
            class="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white cursor-pointer"
            aria-label="Cerrar modal"
          >
            <i data-lucide="x" class="w-5 h-5"></i>
          </button>
        </div>

        <div class="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
          <div class="bg-slate-950/70 border border-slate-800 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 no-print">
            <div class="flex-1">
              <label for="input-student-name" class="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Nombre del participante para el Certificado:
              </label>
              <input
                id="input-student-name"
                type="text"
                value="${escapeHtml(state.studentName)}"
                placeholder="Ingresa tus nombres y apellidos"
                class="w-full px-3.5 py-2 rounded-lg bg-slate-900 border border-slate-700 text-sm text-white focus:outline-none focus:border-blue-500"
              />
            </div>
            <div class="text-right shrink-0">
              <span class="text-xs text-slate-400 block">Avance Global</span>
              <span class="text-2xl font-extrabold text-cyan-400">${
                metrics.progressPercentage
              }%</span>
              <span class="text-[11px] text-slate-400 block">(${
                metrics.completedUnits
              }/${metrics.totalTrackableUnits} unidades)</span>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 no-print">
            <div class="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold uppercase text-amber-400">
                  Certificado de Aprobación
                </span>
                <i data-lucide="${
                  isApprovalUnlocked ? 'check-circle-2' : 'lock'
                }" class="w-4 h-4 ${
      isApprovalUnlocked ? 'text-emerald-400' : 'text-slate-500'
    }"></i>
              </div>
              <ul class="space-y-1.5 text-xs text-slate-300">
                <li class="flex items-center gap-2">
                  <i data-lucide="check-circle-2" class="w-3.5 h-3.5 ${
                    metrics.progressPercentage === 100
                      ? 'text-emerald-400'
                      : 'text-slate-600'
                  }"></i>
                  <span>100% de procesos completados (Actual: ${
                    metrics.progressPercentage
                  }%)</span>
                </li>
                <li class="flex items-center gap-2">
                  <i data-lucide="check-circle-2" class="w-3.5 h-3.5 ${
                    hasPassedQuiz ? 'text-emerald-400' : 'text-slate-600'
                  }"></i>
                  <span>Nota ≥ 70% en Cuestionario Formativo (Actual: ${
                    state.quizScore !== null ? state.quizScore + '%' : 'Pendiente'
                  })</span>
                </li>
              </ul>
            </div>

            <div class="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold uppercase text-cyan-400">
                  Constancia de Participación
                </span>
                <i data-lucide="${
                  isParticipationUnlocked ? 'check-circle-2' : 'lock'
                }" class="w-4 h-4 ${
      isParticipationUnlocked ? 'text-emerald-400' : 'text-slate-500'
    }"></i>
              </div>
              <ul class="space-y-1.5 text-xs text-slate-300">
                <li class="flex items-center gap-2">
                  <i data-lucide="check-circle-2" class="w-3.5 h-3.5 ${
                    isParticipationUnlocked ? 'text-emerald-400' : 'text-slate-600'
                  }"></i>
                  <span>Al menos 80% de avance en procesos de aprendizaje</span>
                </li>
                <li class="flex items-center gap-2">
                  <i data-lucide="clock" class="w-3.5 h-3.5 text-blue-400"></i>
                  <span>Acredita 24 horas académicas (Modalidad 100% Asíncrona)</span>
                </li>
              </ul>
            </div>
          </div>

          <div id="certificate-printable-area" class="relative rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-slate-950 via-blue-950/60 to-slate-950 border-2 border-amber-500/40 text-center space-y-4 shadow-xl">
            <div class="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-400/40 text-amber-400 mx-auto">
              <i data-lucide="shield-check" class="w-8 h-8"></i>
            </div>

            <p class="text-xs font-bold uppercase tracking-[0.2em] text-amber-300">
              ${
                isApprovalUnlocked
                  ? 'Certificado Oficial de Aprobación'
                  : isParticipationUnlocked
                  ? 'Constancia de Participación'
                  : 'Vista Previa de Credencial Académica'
              }
            </p>

            <h4 id="certificate-student-name-display" class="text-xl sm:text-2xl font-extrabold text-white">
              ${escapeHtml(state.studentName || 'Estudiante G4-CIBER')}
            </h4>
            ${
              state.studentDni
                ? `<p class="text-xs font-mono text-amber-300 font-bold">DNI / Documento: ${escapeHtml(
                    state.studentDni
                  )}</p>`
                : ''
            }

            <p class="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
              Por haber desarrollado el programa especializado autogestionado
              <strong class="text-white">&ldquo;Marcos y Buenas Prácticas de Ciberseguridad&rdquo;</strong>
              (Código: <span class="text-cyan-300 font-mono">G4-CIBER-2026</span>),
              alineado a los estándares internacionales
              <strong class="text-amber-300">ISO/IEC 27001:2022, ISO/IEC 27002:2022, NIST CSF 2.0 y CIS Controls v8.1</strong>
              con una duración de 24 horas.
            </p>

            <div class="pt-3 flex items-center justify-center gap-6 text-xs text-slate-400 border-t border-slate-800/80">
              <span>Modalidad: 100% Asíncrono</span>
              <span>•</span>
              <span>Calificación: <strong class="text-emerald-400">${
                state.quizScore !== null ? state.quizScore + '%' : 'En curso'
              }</strong></span>
            </div>
          </div>
        </div>

        <div class="p-4 sm:p-5 bg-slate-950 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 no-print">
          <button
            type="button"
            data-action="reset-all-progress"
            class="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-rose-400 transition-colors cursor-pointer"
          >
            <i data-lucide="rotate-ccw" class="w-3.5 h-3.5"></i>
            <span>Reiniciar progreso guardado en localStorage</span>
          </button>

          <div class="flex items-center gap-3">
            <button
              type="button"
              data-action="print-certificate"
              class="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isParticipationUnlocked || isApprovalUnlocked
                  ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 hover:from-amber-400 hover:to-yellow-400'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }"
            >
              <i data-lucide="printer" class="w-4 h-4"></i>
              <span>Imprimir / Guardar PDF</span>
            </button>

            <button
              type="button"
              data-action="close-certificate-modal"
              class="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-semibold cursor-pointer"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    `;
  }

  window.LMS_COMPONENTS = {
    renderHeader,
    renderSidebar,
    renderSectionZero,
    renderModuleOneProcess,
    renderCertificateModal,
  };
})();

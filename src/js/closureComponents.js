/**
 * ============================================================================
 * COMPONENTES DE EVALUACIÓN FINAL Y CIERRE (SECCIONES VII Y VIII):
 * src/js/closureComponents.js
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

  function renderFinalExamView(state) {
    const exam = window.LMS_DATA.FINAL_EXAM_DATA;
    const answers = state.finalExamAnswers || {};
    const totalAnswered = exam.questions.filter(
      (q) => answers[q.id] !== undefined
    ).length;
    const passed =
      state.finalExamScore !== null && state.finalExamScore >= exam.passingScore;

    const resultBanner =
      state.finalExamSubmitted && state.finalExamScore !== null
        ? `
      <div class="rounded-2xl border p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
        passed
          ? 'bg-emerald-950/45 border-emerald-500/50 text-emerald-100'
          : 'bg-rose-950/40 border-rose-500/50 text-rose-100'
      }">
        <div class="flex items-center gap-3">
          <i data-lucide="trophy" class="w-8 h-8 ${
            passed ? 'text-emerald-400' : 'text-rose-400'
          } shrink-0"></i>
          <div>
            <div class="text-lg font-extrabold">
              Resultado Final: ${state.finalExamScore}% (Nota mínima aprobatoria: ${
            exam.passingScore
          }%)
            </div>
            <p class="text-xs sm:text-sm opacity-90">
              ${
                passed
                  ? '¡Felicitaciones! Aprobaste la Evaluación Final Certificable. Tu Certificado Digital ya está desbloqueado en la sección de Cierre.'
                  : 'No alcanzaste el 70% requerido. Revisa la retroalimentación y vuelve a intentarlo.'
              }
            </p>
          </div>
        </div>
        ${
          passed
            ? `
          <button
            type="button"
            data-action="select-closure"
            class="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs sm:text-sm font-extrabold cursor-pointer shrink-0"
          >
            Ir a Cierre y Certificado Digital
          </button>
        `
            : ''
        }
      </div>
    `
        : '';

    const questionsHtml = exam.questions
      .map((q) => {
        const chosen = answers[q.id];
        const isCorrect = chosen === q.correctIndex;

        const optsHtml = q.options
          .map((opt, idx) => {
            const isChosen = chosen === idx;
            let cls =
              'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-600';
            if (state.finalExamSubmitted) {
              if (idx === q.correctIndex) {
                cls =
                  'bg-emerald-950/50 border-emerald-500 text-emerald-200 font-semibold';
              } else if (isChosen) {
                cls = 'bg-rose-950/50 border-rose-500 text-rose-200';
              }
            } else if (isChosen) {
              cls = 'bg-amber-500/20 border-amber-400 text-white font-semibold';
            }

            return `
              <button
                type="button"
                ${state.finalExamSubmitted ? 'disabled' : ''}
                data-action="select-final-exam-answer"
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
          <div class="rounded-xl border border-slate-800 bg-slate-950/75 p-4 sm:p-5 space-y-3">
            <div class="flex flex-wrap items-center justify-between gap-2">
              <span class="text-xs font-bold text-amber-400">
                Pregunta ${q.number} de ${exam.questions.length}
              </span>
              <span class="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-800 text-cyan-300">
                ${escapeHtml(q.category)}
              </span>
            </div>
            <p class="text-sm sm:text-base font-bold text-white">${escapeHtml(
              q.question
            )}</p>
            <div class="space-y-2">${optsHtml}</div>
            ${
              state.finalExamSubmitted
                ? `
              <div class="p-3 rounded-lg border text-xs sm:text-sm leading-relaxed ${
                isCorrect
                  ? 'bg-emerald-950/35 border-emerald-500/40 text-emerald-200'
                  : 'bg-amber-950/35 border-amber-500/40 text-amber-200'
              }">
                <strong>Sustento Normativo: </strong>${escapeHtml(q.explanation)}
              </div>
            `
                : ''
            }
          </div>
        `;
      })
      .join('');

    return `
      <div class="max-w-5xl mx-auto space-y-6 pb-12">
        <div class="rounded-2xl border border-amber-500/30 bg-gradient-to-br from-slate-900 via-slate-900 to-amber-950/30 p-5 sm:p-6 shadow-xl">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span class="inline-block text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                Sección VII • Evaluación Sumativa
              </span>
              <h1 class="text-xl sm:text-2xl font-extrabold text-white mt-2">${escapeHtml(
                exam.title
              )}</h1>
              <p class="text-sm text-slate-300 mt-1">${escapeHtml(
                exam.subtitle
              )}</p>
            </div>
            <div class="flex items-center gap-2 shrink-0">
              <span class="text-xs font-bold px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-200">
                Respondidas: ${totalAnswered}/${exam.questions.length}
              </span>
              ${
                state.finalExamSubmitted
                  ? `
                <button
                  type="button"
                  data-action="reset-final-exam"
                  class="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 cursor-pointer"
                >
                  <i data-lucide="rotate-ccw" class="w-3.5 h-3.5"></i>
                  Reintentar
                </button>
              `
                  : ''
              }
            </div>
          </div>
        </div>

        ${resultBanner}

        <div class="space-y-4">${questionsHtml}</div>

        ${
          !state.finalExamSubmitted
            ? `
          <div class="flex justify-end pt-2">
            <button
              type="button"
              ${totalAnswered < exam.questions.length ? 'disabled' : ''}
              data-action="submit-final-exam"
              class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 disabled:opacity-40 text-slate-950 text-sm font-extrabold cursor-pointer"
            >
              <i data-lucide="clipboard-check" class="w-4 h-4"></i>
              Enviar Evaluación Final (${totalAnswered}/${exam.questions.length})
            </button>
          </div>
        `
            : ''
        }
      </div>
    `;
  }

  function renderClosureView(state) {
    const closure = window.LMS_DATA.CLOSURE_DATA;
    const selectedLayerId = state.closureSelectedLayerId || 'layer-iso';
    const activeLayer =
      closure.ecosystemLayers.find((l) => l.id === selectedLayerId) ||
      closure.ecosystemLayers[0];

    const layerColors = {
      amber: {
        border: 'border-amber-500/60 bg-amber-950/30',
        badge: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
        title: 'text-amber-300',
      },
      cyan: {
        border: 'border-cyan-500/60 bg-cyan-950/30',
        badge: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
        title: 'text-cyan-300',
      },
      emerald: {
        border: 'border-emerald-500/60 bg-emerald-950/30',
        badge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
        title: 'text-emerald-300',
      },
    };

    const layersButtonsHtml = closure.ecosystemLayers
      .map((layer) => {
        const isSel = layer.id === activeLayer.id;
        const theme = layerColors[layer.colorTheme] || layerColors.amber;
        return `
          <button
            type="button"
            data-action="select-closure-layer"
            data-layer-id="${layer.id}"
            class="w-full text-left p-4 sm:p-5 rounded-xl border transition-all cursor-pointer ${
              isSel
                ? `${theme.border} shadow-lg ring-1 ring-white/10`
                : 'bg-slate-950/75 border-slate-800 hover:border-slate-700'
            }"
          >
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span class="inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${
                  theme.badge
                }">
                  ${escapeHtml(layer.layerTitle)}
                </span>
                <h3 class="text-base sm:text-lg font-extrabold text-white mt-1.5">${escapeHtml(
                  layer.frameworkName
                )}</h3>
              </div>
              <span class="text-xs font-mono font-bold ${theme.title} shrink-0">
                ${escapeHtml(layer.roleQuestion)}
              </span>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-2 mt-3">
              ${layer.highlights
                .map(
                  (h) => `
                <div class="text-xs text-slate-300 bg-slate-900/80 border border-slate-800/80 rounded-lg p-2.5 flex items-start gap-1.5">
                  <i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5"></i>
                  <span>${escapeHtml(h)}</span>
                </div>
              `
                )
                .join('')}
            </div>
          </button>
        `;
      })
      .join('');

    const skillsHtml = closure.skillsAchieved
      .map(
        (sk) => `
        <div class="rounded-xl border border-slate-800 bg-slate-950/75 p-5 space-y-2.5">
          <span class="inline-block text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-blue-500/15 text-cyan-300 border border-cyan-500/30">
            Competencia ${sk.number} • ${escapeHtml(sk.frameworkBadge)}
          </span>
          <h3 class="text-base font-bold text-white">${escapeHtml(
            sk.title
          )}</h3>
          <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">${escapeHtml(
            sk.description
          )}</p>
        </div>
      `
      )
      .join('');

    const bibHtml = closure.bibliography
      .map(
        (b) => `
        <div class="rounded-xl border border-slate-800 bg-slate-950/75 p-4 flex flex-col justify-between space-y-3">
          <p class="text-xs sm:text-sm text-slate-200 leading-relaxed">${escapeHtml(
            b.citation
          )}</p>
          <div class="flex flex-wrap gap-2 pt-1">
            <a
              href="${b.primaryUrl}"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-bold text-cyan-300"
            >
              ${escapeHtml(b.primaryUrlLabel)}
              <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
            </a>
            ${
              b.toolUrl
                ? `
              <a
                href="${b.toolUrl}"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-950/50 hover:bg-emerald-900/50 border border-emerald-500/30 text-xs font-bold text-emerald-300"
              >
                ${escapeHtml(b.toolLabel)}
                <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
              </a>
            `
                : ''
            }
          </div>
        </div>
      `
      )
      .join('');

    // Encuesta de satisfacción
    const survey = state.satisfactionSurvey || {};
    const surveyRowsHtml = closure.surveyQuestions
      .map((sq) => {
        const currentVal = Number(survey[sq.id] || 0);
        const starsHtml = [1, 2, 3, 4, 5]
          .map((star) => {
            const filled = star <= currentVal;
            return `
              <button
                type="button"
                data-action="set-survey-rating"
                data-field="${sq.id}"
                data-stars="${star}"
                aria-label="Calificar con ${star} estrellas"
                class="p-1.5 rounded-lg transition-transform hover:scale-110 cursor-pointer ${
                  filled ? 'text-amber-400' : 'text-slate-600 hover:text-slate-400'
                }"
              >
                <i data-lucide="star" class="w-6 h-6 ${
                  filled ? 'fill-amber-400' : ''
                }"></i>
              </button>
            `;
          })
          .join('');

        return `
          <div class="rounded-xl border border-slate-800 bg-slate-950/75 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <span class="text-sm font-semibold text-white">${escapeHtml(
              sq.label
            )}</span>
            <div class="flex items-center gap-1 shrink-0">
              ${starsHtml}
              <span class="ml-2 text-xs font-mono text-amber-300">${currentVal}/5</span>
            </div>
          </div>
        `;
      })
      .join('');

    // Estado del Certificado
    const hasPassedFinal =
      state.finalExamScore !== null && state.finalExamScore >= 70;
    const isDiplomaUnlocked =
      hasPassedFinal || Boolean(state.closureInstructorPreview);
    const certMeta = closure.certificateMeta;
    const displayScore =
      state.finalExamScore !== null ? `${state.finalExamScore}%` : '85% (Vista Previa Instructor)';
    const issueDate = new Date().toLocaleDateString('es-PE', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    const participantName =
      (state.studentName || '').trim() || 'Participante G4-CIBER-2026';

    const certificateSectionHtml = isDiplomaUnlocked
      ? `
      <div class="space-y-5">
        <div class="no-print flex flex-col md:flex-row md:items-end justify-between gap-4 p-4 rounded-xl bg-slate-950/80 border border-slate-800">
          <div class="flex-1 space-y-1.5">
            <label for="closure-student-name-input" class="block text-xs font-bold uppercase tracking-wider text-amber-300">
              Nombre y Apellidos Completos del Participante (en tiempo real)
            </label>
            <input
              id="closure-student-name-input"
              type="text"
              data-action="closure-student-name-input"
              value="${escapeHtml(state.studentName || '')}"
              placeholder="Ej. María Fernanda Torres Mendoza"
              class="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:outline-none focus:border-amber-400"
            />
          </div>

          <div class="flex flex-wrap items-center gap-2.5 shrink-0">
            ${
              !hasPassedFinal && state.closureInstructorPreview
                ? `
              <button
                type="button"
                data-action="toggle-closure-instructor-preview"
                class="px-3.5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-300 border border-slate-700 cursor-pointer"
              >
                Salir de Vista Previa
              </button>
            `
                : ''
            }
            <button
              type="button"
              data-action="print-closure-diploma"
              class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs sm:text-sm font-extrabold shadow-lg shadow-amber-500/20 cursor-pointer"
            >
              <i data-lucide="printer" class="w-4 h-4"></i>
              Descargar / Imprimir Certificado en PDF
            </button>
          </div>
        </div>

        ${
          !hasPassedFinal && state.closureInstructorPreview
            ? `
          <div class="no-print p-3 rounded-xl bg-amber-950/40 border border-amber-500/40 text-xs text-amber-200 flex items-center gap-2">
            <i data-lucide="eye" class="w-4 h-4 text-amber-400 shrink-0"></i>
            <span><strong>Modo Vista Previa Instructor activo:</strong> visualizando el diseño oficial del diploma antes de rendir el Examen Final (puntaje actual: ${
              state.finalExamScore !== null ? state.finalExamScore + '%' : 'Pendiente'
            }).</span>
          </div>
        `
            : ''
        }

        <!-- DIPLOMA HORIZONTAL INSTITUCIONAL A4 -->
        <div
          id="closure-diploma-printable"
          class="relative rounded-2xl border-4 border-amber-500/80 bg-gradient-to-br from-[#071329] via-[#0c1f3f] to-[#08152b] p-6 sm:p-10 text-white shadow-2xl overflow-hidden"
        >
          <div class="border-2 border-amber-400/40 rounded-xl p-6 sm:p-10 relative space-y-6">
            <!-- Header Institucional -->
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-amber-400/30 pb-5">
              <div class="flex items-center gap-3">
                <div class="p-3 rounded-xl bg-amber-400/15 border border-amber-400/40 text-amber-300">
                  <i data-lucide="shield-check" class="w-8 h-8"></i>
                </div>
                <div>
                  <div class="text-xs font-bold uppercase tracking-[0.2em] text-amber-300">
                    Programa Especializado en Ciberseguridad
                  </div>
                  <h3 class="text-2xl sm:text-3xl font-black tracking-wide text-white mt-0.5">
                    ${escapeHtml(certMeta.headerTitle)}
                  </h3>
                </div>
              </div>

              <!-- Sello de Verificación -->
              <div class="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-amber-400/10 border border-amber-400/50 self-start sm:self-center">
                <i data-lucide="award" class="w-7 h-7 text-amber-300 shrink-0"></i>
                <div class="text-left">
                  <div class="text-[10px] font-bold uppercase tracking-wider text-amber-300">Sello Verificado</div>
                  <div class="text-xs font-mono font-bold text-white">${escapeHtml(
                    state.certificateVerificationCode || 'CERT-G4-2026-7492'
                  )}</div>
                </div>
              </div>
            </div>

            <!-- Cuerpo del Diploma -->
            <div class="text-center space-y-4 py-3">
              <p class="text-xs sm:text-sm uppercase tracking-[0.18em] text-slate-300">
                Se otorga el presente certificado a:
              </p>
              <div
                id="closure-diploma-name-display"
                class="text-2xl sm:text-4xl font-black text-amber-300 tracking-tight border-b-2 border-amber-400/40 pb-3 max-w-2xl mx-auto"
              >
                ${escapeHtml(participantName)}
              </div>
              ${
                state.studentDni
                  ? `<div class="text-xs sm:text-sm font-mono font-bold text-slate-200 tracking-wider">DNI / Documento de Identidad: <span class="text-amber-300">${escapeHtml(
                      state.studentDni
                    )}</span></div>`
                  : ''
              }
              <p class="text-xs sm:text-sm text-slate-200 max-w-3xl mx-auto leading-relaxed pt-1">
                Por haber aprobado satisfactoriamente el curso digital autogestionado:
              </p>
              <div class="text-base sm:text-xl font-extrabold text-white max-w-3xl mx-auto">
                "${escapeHtml(certMeta.courseTitle)}"
              </div>
            </div>

            <!-- Metadatos Oficiales -->
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 pt-4 border-t border-amber-400/25 text-center">
              <div class="p-3 rounded-lg bg-slate-950/50 border border-amber-400/20">
                <div class="text-[10px] uppercase tracking-wider text-slate-400">Código y Modalidad</div>
                <div class="text-xs sm:text-sm font-bold text-white mt-0.5">
                  ${escapeHtml(certMeta.courseCode)} • ${escapeHtml(
                    certMeta.modality
                  )}
                </div>
              </div>
              <div class="p-3 rounded-lg bg-slate-950/50 border border-amber-400/20">
                <div class="text-[10px] uppercase tracking-wider text-slate-400">Duración Certificada</div>
                <div class="text-xs sm:text-sm font-bold text-white mt-0.5">${escapeHtml(
                  certMeta.duration
                )}</div>
              </div>
              <div class="p-3 rounded-lg bg-slate-950/50 border border-amber-400/20">
                <div class="text-[10px] uppercase tracking-wider text-slate-400">Calificación Obtenida</div>
                <div class="text-xs sm:text-sm font-extrabold text-emerald-300 mt-0.5">${escapeHtml(
                  displayScore
                )}</div>
              </div>
              <div class="p-3 rounded-lg bg-slate-950/50 border border-amber-400/20">
                <div class="text-[10px] uppercase tracking-wider text-slate-400">Fecha de Emisión</div>
                <div class="text-xs sm:text-sm font-bold text-white mt-0.5">${escapeHtml(
                  issueDate
                )}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
      : `
      <div class="no-print rounded-2xl border border-amber-500/35 bg-slate-950/85 p-6 sm:p-8 text-center space-y-5">
        <div class="w-16 h-16 rounded-2xl bg-amber-500/15 border border-amber-500/35 text-amber-400 flex items-center justify-center mx-auto">
          <i data-lucide="lock" class="w-8 h-8"></i>
        </div>
        <div class="space-y-2 max-w-xl mx-auto">
          <h3 class="text-lg sm:text-xl font-extrabold text-white">
            Certificado Digital Bloqueado hasta Aprobar la Evaluación Final (≥ 70%)
          </h3>
          <p class="text-sm text-slate-300">
            Puntaje actual registrado en Evaluación Final:
            <strong class="text-amber-300">${
              state.finalExamScore !== null
                ? `${state.finalExamScore}%`
                : 'Pendiente por rendir'
            }</strong>.
            Completa el Examen Final Integrador con al menos 70% para emitir tu diploma oficial.
          </p>
        </div>

        <div class="flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            data-action="select-final-exam"
            class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-sm font-extrabold cursor-pointer"
          >
            <i data-lucide="clipboard-check" class="w-4 h-4"></i>
            Ir a Rendir el Examen Final
          </button>

          <button
            type="button"
            data-action="toggle-closure-instructor-preview"
            class="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-300 cursor-pointer"
          >
            <i data-lucide="eye" class="w-3.5 h-3.5"></i>
            Modo Vista Previa Instructor
          </button>
        </div>
      </div>
    `;

    return `
      <div class="max-w-6xl mx-auto space-y-8 pb-12">
        <!-- Encabezado de Sección Final -->
        <div class="no-print rounded-2xl border border-amber-500/35 bg-gradient-to-br from-slate-900 via-slate-900 to-amber-950/30 p-6 shadow-xl">
          <span class="inline-block text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
            Secciones VII y VIII • Cierre del Programa
          </span>
          <h1 class="text-2xl sm:text-3xl font-extrabold text-white mt-2">${escapeHtml(
            closure.title
          )}</h1>
          <p class="text-sm text-slate-300 mt-1.5">${escapeHtml(
            closure.subtitle
          )}</p>
        </div>

        <!-- 1. DIAGRAMA INTEGRAL INTERACTIVO DE 3 CAPAS -->
        <section class="no-print rounded-2xl border border-slate-800 bg-slate-900/90 p-5 sm:p-6 space-y-5">
          <div>
            <span class="text-xs font-bold uppercase tracking-wider text-cyan-400">
              1. Arquitectura Visual del Ecosistema
            </span>
            <h2 class="text-xl font-bold text-white mt-1">
              Diagrama Integral Interactivo en 3 Capas Conectadas
            </h2>
            <p class="text-sm text-slate-400 mt-1">
              Haz clic en cada capa para inspeccionar cómo fluye un control de punta a punta entre Gobernanza (ISO), Riesgo (NIST) y Ejecución Técnica (CIS).
            </p>
          </div>

          <div class="space-y-3">${layersButtonsHtml}</div>

          <div class="rounded-xl border border-cyan-500/35 bg-slate-950/85 p-5 space-y-3">
            <div class="text-xs font-bold uppercase tracking-wider text-cyan-300">
              Detalle de Flujo en Capa Seleccionada: ${escapeHtml(
                activeLayer.frameworkName
              )}
            </div>
            <p class="text-sm text-slate-200 leading-relaxed">${escapeHtml(
              activeLayer.flowDetail
            )}</p>
            <div class="p-3.5 rounded-lg bg-slate-900 border border-slate-800 text-xs sm:text-sm text-amber-200">
              <strong class="text-amber-300">Traza Completa Punta a Punta: </strong>
              ${escapeHtml(closure.endToEndExample)}
            </div>
          </div>
        </section>

        <!-- 2. HABILIDADES DESARROLLADAS Y PAQUETE DE RECURSOS -->
        <section class="no-print rounded-2xl border border-slate-800 bg-slate-900/90 p-5 sm:p-6 space-y-5">
          <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-emerald-400">
                2. Perfil de Egreso y Herramientas Reutilizables
              </span>
              <h2 class="text-xl font-bold text-white mt-1">
                Habilidades Desarrolladas y Paquete Consolidado de Plantillas
              </h2>
            </div>

            <button
              type="button"
              data-action="download-closure-bundle-csv"
              class="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs sm:text-sm font-extrabold shadow-lg shadow-emerald-500/20 cursor-pointer shrink-0"
            >
              <i data-lucide="download" class="w-4 h-4"></i>
              Descargar Paquete Completo de Plantillas (.CSV compatible con Excel)
            </button>
          </div>

          ${
            state.closureBundleDownloaded
              ? `
            <div class="p-3 rounded-xl bg-emerald-950/45 border border-emerald-500/40 text-xs sm:text-sm text-emerald-200 flex items-center gap-2">
              <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-400 shrink-0"></i>
              <span>Paquete Consolidado (.CSV UTF-8 con BOM) descargado con las 3 secciones unificadas: Matriz Cruzada ISO-NIST-CIS, Checklist IG1 y Modelo SoA ISO 27001.</span>
            </div>
          `
              : ''
          }

          <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">${skillsHtml}</div>
        </section>

        <!-- 3. BIBLIOGRAFÍA OFICIAL Y HERRAMIENTAS GRATUITAS -->
        <section class="no-print rounded-2xl border border-slate-800 bg-slate-900/90 p-5 sm:p-6 space-y-5">
          <div>
            <span class="text-xs font-bold uppercase tracking-wider text-violet-400">
              3. Sección VIII del Sílabo
            </span>
            <h2 class="text-xl font-bold text-white mt-1">
              Bibliografía Oficial y Herramientas Gratuitas para Continuar Aprendiendo
            </h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">${bibHtml}</div>
        </section>

        <!-- 4. ENCUESTA BREVE DE SATISFACCIÓN -->
        <section class="no-print rounded-2xl border border-slate-800 bg-slate-900/90 p-5 sm:p-6 space-y-5">
          <div>
            <span class="text-xs font-bold uppercase tracking-wider text-amber-400">
              4. Mejora Continua del Programa
            </span>
            <h2 class="text-xl font-bold text-white mt-1">
              Encuesta Breve de Satisfacción y Retroalimentación
            </h2>
            <p class="text-sm text-slate-400 mt-1">
              Evalúa de 1 a 5 estrellas tu experiencia en el curso. Tus respuestas quedan guardadas en localStorage.
            </p>
          </div>

          <div class="space-y-3">${surveyRowsHtml}</div>

          <div class="space-y-2">
            <label for="closure-survey-comments" class="block text-xs font-bold uppercase tracking-wider text-slate-400">
              Sugerencias de mejora (Opcional)
            </label>
            <textarea
              id="closure-survey-comments"
              data-action="closure-survey-comments-input"
              rows="3"
              placeholder="¿Qué te pareció más útil y qué mejorarías para futuras ediciones del curso G4-CIBER?"
              class="w-full rounded-xl bg-slate-950 border border-slate-800 p-3 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400"
            >${escapeHtml(survey.comments || '')}</textarea>
          </div>

          <div class="flex flex-wrap items-center justify-between gap-3">
            <button
              type="button"
              data-action="submit-closure-survey"
              class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs sm:text-sm font-extrabold cursor-pointer"
            >
              <i data-lucide="send" class="w-4 h-4"></i>
              Enviar Retroalimentación
            </button>

            ${
              survey.submitted
                ? `
              <span class="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-emerald-300">
                <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-400"></i>
                ¡Gracias! Retroalimentación guardada exitosamente en tu navegador.
              </span>
            `
                : ''
            }
          </div>
        </section>

        <!-- 5. GENERADOR Y DESCARGA DEL CERTIFICADO DIGITAL -->
        <section class="rounded-2xl border border-amber-500/35 bg-slate-900/90 p-5 sm:p-6 space-y-5">
          <div class="no-print">
            <span class="text-xs font-bold uppercase tracking-wider text-amber-400">
              5. Acreditación Digital Oficial
            </span>
            <h2 class="text-xl font-bold text-white mt-1">
              Generador y Descarga del Certificado Digital de Aprobación
            </h2>
          </div>

          ${certificateSectionHtml}
        </section>
      </div>
    `;
  }

  window.LMS_CLOSURE_COMPONENTS = {
    renderFinalExamView: renderFinalExamView,
    renderClosureView: renderClosureView,
  };
})();

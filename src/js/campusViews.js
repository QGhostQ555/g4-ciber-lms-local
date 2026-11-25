/**
 * ============================================================================
 * VISTAS CAMPUS ROMERO Y REPRODUCTOR YOUTUBE: src/js/campusViews.js
 * 1. Onboarding / Registro con DNI + Login con ID sin contraseña
 * 2. Panel del Participante (Vista 1)
 * 3. Vista de Clase / Proceso Activo (Vista 2 header y píldora flotante)
 * 4. Reproductor YouTube robusto (Error 153 fix + personalización)
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

  function extractYouTubeId(urlOrId) {
    const trimmed = String(urlOrId || '').trim();
    if (!trimmed) return 'inWWhr5tnEA';
    if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) return trimmed;

    const patterns = [
      /[?&]v=([a-zA-Z0-9_-]{11})/,
      /youtu\.be\/([a-zA-Z0-9_-]{11})/,
      /youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/,
      /youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/,
      /youtube-nocookie\.com\/embed\/([a-zA-Z0-9_-]{11})/,
    ];
    for (let i = 0; i < patterns.length; i++) {
      const m = trimmed.match(patterns[i]);
      if (m && m[1]) return m[1];
    }
    return 'inWWhr5tnEA';
  }

  function renderYouTubeEmbedPlayer(opts) {
    const videoKey = opts.videoKey;
    const customUrl =
      (opts.customUrls && opts.customUrls[videoKey]) || '';
    const activeSrc = customUrl.trim() ? customUrl : opts.defaultUrlOrId;
    const cleanId = extractYouTubeId(activeSrc);
    const embedSrc = `https://www.youtube.com/embed/${cleanId}?rel=0&modestbranding=1&playsinline=1`;
    const watchUrl = `https://www.youtube.com/watch?v=${cleanId}`;
    const isOpen = Boolean(
      window.LMS_YT_EDITORS_OPEN && window.LMS_YT_EDITORS_OPEN[videoKey]
    );

    return `
      <div class="space-y-2.5">
        <div class="relative w-full aspect-video rounded-xl overflow-hidden border border-slate-200 bg-slate-950 shadow-sm">
          <iframe
            src="${embedSrc}"
            title="${escapeHtml(opts.title || 'Video Educativo')}"
            class="w-full h-full border-0"
            referrerpolicy="strict-origin-when-cross-origin"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>

        <div class="flex flex-wrap items-center justify-between gap-2 px-1">
          <div class="flex flex-wrap items-center gap-2">
            <button
              type="button"
              data-action="toggle-yt-editor"
              data-video-key="${escapeHtml(videoKey)}"
              class="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-[#C13B2A] px-2.5 py-1 rounded-full bg-slate-100 hover:bg-[#FDF2F0] border border-slate-200 transition-colors cursor-pointer"
            >
              <i data-lucide="video" class="w-3.5 h-3.5"></i>
              <span>${
                isOpen ? 'Ocultar editor de video' : 'Cambiar video de YouTube'
              }</span>
            </button>

            ${
              customUrl
                ? `
              <span class="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                <i data-lucide="check-circle-2" class="w-3 h-3"></i>
                Video personalizado guardado
              </span>
            `
                : ''
            }
          </div>

          <div class="flex items-center gap-3">
            <a
              href="${watchUrl}"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1 text-xs font-medium text-slate-500 hover:text-[#C13B2A]"
            >
              Abrir en YouTube
              <i data-lucide="external-link" class="w-3 h-3"></i>
            </a>
            ${
              opts.fallbackSearchUrl
                ? `
              <a
                href="${opts.fallbackSearchUrl}"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-1 text-xs font-medium text-slate-500 hover:text-[#C13B2A]"
              >
                Videos alternativos
                <i data-lucide="external-link" class="w-3 h-3"></i>
              </a>
            `
                : ''
            }
          </div>
        </div>

        ${
          isOpen
            ? `
          <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5">
            <p class="text-xs text-slate-600">
              Pega cualquier URL de YouTube (<code class="text-[#C13B2A]">watch?v=...</code>, <code class="text-[#C13B2A]">youtu.be/...</code> o ID de 11 caracteres) para reproducir ese video en esta clase:
            </p>
            <div class="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                id="yt-custom-input-${escapeHtml(videoKey)}"
                value="${escapeHtml(customUrl)}"
                placeholder="https://www.youtube.com/watch?v=..."
                class="flex-1 px-3 py-2 rounded-lg bg-white border border-slate-300 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#C13B2A]"
              />
              <button
                type="button"
                data-action="save-yt-custom"
                data-video-key="${escapeHtml(videoKey)}"
                class="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full bg-[#C13B2A] hover:bg-[#A63122] text-white text-xs font-bold shrink-0 cursor-pointer"
              >
                <i data-lucide="refresh-cw" class="w-3.5 h-3.5"></i>
                Guardar video
              </button>
              ${
                customUrl
                  ? `
                <button
                  type="button"
                  data-action="reset-yt-custom"
                  data-video-key="${escapeHtml(videoKey)}"
                  class="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-full bg-white hover:bg-slate-100 border border-slate-300 text-slate-700 text-xs font-semibold shrink-0 cursor-pointer"
                >
                  Restaurar original
                </button>
              `
                  : ''
              }
            </div>
          </div>
        `
            : ''
        }
      </div>
    `;
  }

  function renderOnboardingView(savedProfiles, uiState) {
    const tab = uiState.authTab || 'register';
    const generatedId = uiState.generatedAccessId || null;
    const formError = uiState.formError || '';
    const loginError = uiState.loginError || '';
    const copiedId = Boolean(uiState.copiedId);
    const regInfo = uiState.lastRegisteredMeta || {};

    const savedProfilesHtml =
      savedProfiles.length > 0
        ? `
      <div class="pt-4 border-t border-slate-200 space-y-2.5">
        <div class="text-[11px] font-bold uppercase tracking-wider text-[#64748B]">
          Perfiles guardados en este navegador:
        </div>
        <div class="space-y-2 max-h-48 overflow-y-auto">
          ${savedProfiles
            .map(
              (prof) => `
            <button
              type="button"
              data-action="quick-login-id"
              data-access-id="${escapeHtml(prof.accessId)}"
              class="w-full text-left p-3 rounded-xl bg-[#FAF8F6] hover:bg-[#FDF2F0] border border-slate-200 hover:border-[#C13B2A]/40 transition-all flex items-center justify-between gap-2 cursor-pointer"
            >
              <div class="min-w-0">
                <div class="text-xs font-bold text-[#1E293B] truncate">${escapeHtml(
                  prof.studentName
                )}</div>
                <div class="text-[11px] text-[#64748B] font-mono">
                  ${escapeHtml(prof.accessId)} • DNI ${escapeHtml(
                prof.studentDni || '—'
              )}
                </div>
              </div>
              <span class="text-xs font-bold text-[#C13B2A] shrink-0">Entrar →</span>
            </button>
          `
            )
            .join('')}
        </div>
      </div>
    `
        : '';

    const rightCardBody =
      tab === 'register'
        ? generatedId
          ? `
          <div class="space-y-5 text-center">
            <div class="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto">
              <i data-lucide="check-circle-2" class="w-8 h-8"></i>
            </div>
            <div class="space-y-1.5">
              <span class="inline-block text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                ¡Registro Completado!
              </span>
              <h3 class="text-xl font-extrabold text-[#1E293B]">
                Este es tu ID de Progreso Sin Contraseña
              </h3>
              <p class="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                Guarda este código identificador. Con él podrás ingresar en cualquier momento sin contraseña y recuperar todo tu avance y tu certificado.
              </p>
            </div>

            <div class="p-5 rounded-2xl bg-[#FDF2F0] border-2 border-[#C13B2A]/30 space-y-2">
              <div class="text-[11px] font-bold uppercase tracking-wider text-[#C13B2A]">
                Tu Número Identificador Único
              </div>
              <div class="text-2xl sm:text-3xl font-black font-mono tracking-wider text-[#1E293B]">
                ${escapeHtml(generatedId)}
              </div>
              <div class="text-xs text-[#64748B]">
                Participante: <strong class="text-[#1E293B]">${escapeHtml(
                  regInfo.fullName || ''
                )}</strong> • DNI: <strong class="text-[#1E293B]">${escapeHtml(
            regInfo.dni || ''
          )}</strong>
              </div>
            </div>

            <div class="flex flex-col gap-2.5">
              <button
                type="button"
                data-action="copy-generated-id"
                data-access-id="${escapeHtml(generatedId)}"
                class="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-slate-50 border border-slate-300 text-[#1E293B] text-xs sm:text-sm font-bold cursor-pointer"
              >
                <i data-lucide="copy" class="w-4 h-4 text-[#C13B2A]"></i>
                <span>${
                  copiedId ? '¡ID Copiado al Portapapeles!' : 'Copiar mi ID'
                }</span>
              </button>

              <button
                type="button"
                data-action="quick-login-id"
                data-access-id="${escapeHtml(generatedId)}"
                class="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#C13B2A] hover:bg-[#A63122] text-white text-sm font-bold shadow-md cursor-pointer"
              >
                Empecemos — Entrar al Panel del Participante →
              </button>
            </div>
          </div>
        `
          : `
          <form id="form-register-participant" class="space-y-4">
            <div>
              <h3 class="text-lg font-extrabold text-[#1E293B]">
                Registro de Datos para Certificación
              </h3>
              <p class="text-xs text-[#64748B] mt-1">
                Estos datos saldrán impresos en tu Certificado Digital al aprobar el curso. No necesitas contraseña.
              </p>
            </div>

            <div class="space-y-1.5">
              <label for="reg-fullname" class="block text-xs font-bold text-[#1E293B]">
                Nombres y Apellidos Completos *
              </label>
              <input
                id="reg-fullname"
                type="text"
                required
                placeholder="Ej. Carlos Alberto Mendoza Quispe"
                class="w-full px-4 py-2.5 rounded-xl bg-[#FAF8F6] border border-slate-200 text-sm text-[#1E293B] placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#C13B2A]"
              />
            </div>

            <div class="space-y-1.5">
              <label for="reg-dni" class="block text-xs font-bold text-[#1E293B]">
                DNI / Documento de Identidad *
              </label>
              <input
                id="reg-dni"
                type="text"
                required
                placeholder="Ej. 74859210"
                class="w-full px-4 py-2.5 rounded-xl bg-[#FAF8F6] border border-slate-200 text-sm text-[#1E293B] placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#C13B2A]"
              />
            </div>

            <div class="space-y-1.5">
              <label for="reg-email" class="block text-xs font-bold text-[#1E293B]">
                Correo Electrónico *
              </label>
              <input
                id="reg-email"
                type="email"
                required
                placeholder="tu.nombre@correo.com"
                class="w-full px-4 py-2.5 rounded-xl bg-[#FAF8F6] border border-slate-200 text-sm text-[#1E293B] placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#C13B2A]"
              />
            </div>

            <div class="space-y-1.5">
              <label for="reg-org" class="block text-xs font-bold text-[#1E293B]">
                Empresa / Institución o Cargo (Opcional)
              </label>
              <input
                id="reg-org"
                type="text"
                placeholder="Ej. Analista TI / Universidad / Grupo Romero"
                class="w-full px-4 py-2.5 rounded-xl bg-[#FAF8F6] border border-slate-200 text-sm text-[#1E293B] placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#C13B2A]"
              />
            </div>

            ${
              formError
                ? `<div class="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs font-semibold text-rose-700">${escapeHtml(
                    formError
                  )}</div>`
                : ''
            }

            <button
              type="submit"
              class="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#C13B2A] hover:bg-[#A63122] text-white text-sm font-bold shadow-md cursor-pointer"
            >
              Registrarme y Generar mi ID de Progreso →
            </button>
          </form>
        `
        : `
          <div class="space-y-5">
            <div>
              <h3 class="text-lg font-extrabold text-[#1E293B]">
                Ingresa con tu ID de Progreso
              </h3>
              <p class="text-xs text-[#64748B] mt-1 leading-relaxed">
                Introduce el número identificador que recibiste al registrarte (ej. <code class="text-[#C13B2A] font-bold">G4-2026-4812</code>). Sin contraseña.
              </p>
            </div>

            <form id="form-login-id" class="space-y-4">
              <div class="space-y-1.5">
                <label for="login-access-id" class="block text-xs font-bold text-[#1E293B]">
                  Número Identificador (ID)
                </label>
                <input
                  id="login-access-id"
                  type="text"
                  required
                  placeholder="G4-2026-XXXX"
                  class="w-full px-4 py-3 rounded-xl bg-[#FAF8F6] border border-slate-200 text-sm font-mono uppercase text-[#1E293B] placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#C13B2A]"
                />
              </div>

              ${
                loginError
                  ? `<div class="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs font-semibold text-rose-700">${escapeHtml(
                      loginError
                    )}</div>`
                  : ''
              }

              <button
                type="submit"
                class="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#C13B2A] hover:bg-[#A63122] text-white text-sm font-bold shadow-md cursor-pointer"
              >
                Continuar con mi Progreso →
              </button>
            </form>

            ${savedProfilesHtml}
          </div>
        `;

    return `
      <div class="min-h-screen bg-[#FAF8F6] text-[#1E293B] flex flex-col">
        <header class="bg-white border-b border-slate-200/80 sticky top-0 z-30">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-[#C13B2A] text-white flex items-center justify-center shadow-sm">
                <i data-lucide="shield-check" class="w-6 h-6"></i>
              </div>
              <div>
                <span class="text-[11px] font-bold uppercase tracking-wider text-[#C13B2A]">
                  Campus Virtual • G4-CIBER-2026
                </span>
                <h1 class="text-sm sm:text-base font-extrabold text-[#1E293B] leading-tight">
                  Marcos y Buenas Prácticas de Ciberseguridad
                </h1>
              </div>
            </div>
            <span class="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
              <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
              100% Asíncrono • Acceso Abierto
            </span>
          </div>
        </header>

        <main class="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            <div class="lg:col-span-7 space-y-6">
              <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FDF2F0] border border-[#C13B2A]/20 text-[#C13B2A] text-xs font-bold">
                <i data-lucide="sparkles" class="w-4 h-4"></i>
                Programa Especializado Autogestionado (20–24 Horas Académicas)
              </div>

              <div class="space-y-4">
                <h2 class="text-3xl sm:text-4xl font-black text-[#1E293B] tracking-tight leading-tight">
                  Domina los Marcos Internacionales de <span class="text-[#C13B2A]">Ciberseguridad Empresarial</span>
                </h2>
                <p class="text-base sm:text-lg text-[#64748B] leading-relaxed">
                  Bienvenido a nuestro curso virtual interactivo. Aprenderás a gobernar, evaluar riesgos y ejecutar controles técnicos auditables conectando de punta a punta <strong class="text-[#1E293B]">ISO/IEC 27001 &amp; 27002:2022</strong>, <strong class="text-[#1E293B]">NIST CSF 2.0</strong> y <strong class="text-[#1E293B]">CIS Critical Security Controls v8.1</strong>.
                </p>
              </div>

              <div class="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  data-action="hero-empecemos"
                  class="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#C13B2A] hover:bg-[#A63122] text-white text-sm sm:text-base font-bold shadow-md cursor-pointer"
                >
                  Empecemos ahora
                  <i data-lucide="arrow-right" class="w-5 h-5"></i>
                </button>
                <button
                  type="button"
                  data-action="switch-auth-tab"
                  data-tab="login"
                  class="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 border border-slate-200 text-[#1E293B] text-sm font-bold shadow-sm cursor-pointer"
                >
                  <i data-lucide="key-round" class="w-4 h-4 text-[#C13B2A]"></i>
                  Ya tengo un ID de progreso
                </button>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div class="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm space-y-2">
                  <div class="w-10 h-10 rounded-full bg-[#FDF2F0] text-[#C13B2A] flex items-center justify-center">
                    <i data-lucide="layers" class="w-5 h-5"></i>
                  </div>
                  <h3 class="text-sm font-extrabold text-[#1E293B]">4 Módulos + 8 Procesos Pedagógicos</h3>
                  <p class="text-xs sm:text-sm text-[#64748B]">Inicia, Aprende, Observa con videos, Explora plantillas CSV, Practica, Aplica, Comprueba y Recuerda.</p>
                </div>

                <div class="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm space-y-2">
                  <div class="w-10 h-10 rounded-full bg-[#FDF2F0] text-[#C13B2A] flex items-center justify-center">
                    <i data-lucide="key-round" class="w-5 h-5"></i>
                  </div>
                  <h3 class="text-sm font-extrabold text-[#1E293B]">Acceso con ID Único Sin Contraseña</h3>
                  <p class="text-xs sm:text-sm text-[#64748B]">Al registrar tu DNI y datos recibirás un identificador único para ingresar siempre y conservar tu progreso.</p>
                </div>

                <div class="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm space-y-2">
                  <div class="w-10 h-10 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center">
                    <i data-lucide="award" class="w-5 h-5"></i>
                  </div>
                  <h3 class="text-sm font-extrabold text-[#1E293B]">Certificado Digital con DNI Verificable</h3>
                  <p class="text-xs sm:text-sm text-[#64748B]">Al aprobar la Evaluación Final (≥ 70%) emite tu diploma PDF horizontal A4 con nombre completo y DNI.</p>
                </div>

                <div class="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm space-y-2">
                  <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center">
                    <i data-lucide="clock" class="w-5 h-5"></i>
                  </div>
                  <h3 class="text-sm font-extrabold text-[#1E293B]">100% A Distancia y Autogestionado</h3>
                  <p class="text-xs sm:text-sm text-[#64748B]">Incluye simuladores clínicos, matrices SoA/NIST/CIS descargables y cuestionarios formativos.</p>
                </div>
              </div>
            </div>

            <div class="lg:col-span-5" id="onboarding-auth-card">
              <div class="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden">
                <div class="grid grid-cols-2 border-b border-slate-200 bg-slate-50/70">
                  <button
                    type="button"
                    data-action="switch-auth-tab"
                    data-tab="register"
                    class="py-3.5 px-4 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 border-b-2 cursor-pointer ${
                      tab === 'register'
                        ? 'border-[#C13B2A] text-[#C13B2A] bg-white'
                        : 'border-transparent text-[#64748B]'
                    }"
                  >
                    <i data-lucide="user-plus" class="w-4 h-4"></i>
                    Registrarme
                  </button>
                  <button
                    type="button"
                    data-action="switch-auth-tab"
                    data-tab="login"
                    class="py-3.5 px-4 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 border-b-2 cursor-pointer ${
                      tab === 'login'
                        ? 'border-[#C13B2A] text-[#C13B2A] bg-white'
                        : 'border-transparent text-[#64748B]'
                    }"
                  >
                    <i data-lucide="log-in" class="w-4 h-4"></i>
                    Ingresar con ID
                  </button>
                </div>
                <div class="p-6 sm:p-7">${rightCardBody}</div>
              </div>
            </div>
          </div>
        </main>
      </div>
    `;
  }

  function computeNextActivity(state) {
    const data = window.LMS_DATA;
    if (!state.sectionZeroCompleted) {
      return {
        stageName: 'Etapa 1 • Bienvenida y Diagnóstico',
        label: 'Bienvenida, Orientación y Diagnóstico Inicial',
        actionAttr: 'data-action="select-section-0"',
      };
    }

    const modules = [
      {
        type: 'module-1',
        stageName: 'Etapa 2 • Módulo 1 (ISO 27001/27002:2022)',
        doneMap: state.completedProcesses,
        metas: data.MODULE_1_DATA.processesMeta,
        actionName: 'select-process',
      },
      {
        type: 'module-2',
        stageName: 'Etapa 3 • Módulo 2 (NIST CSF 2.0)',
        doneMap: state.completedProcessesMod2,
        metas: data.MODULE_2_DATA.processesMeta,
        actionName: 'select-mod2-process',
      },
      {
        type: 'module-3',
        stageName: 'Etapa 4 • Módulo 3 (CIS Controls v8.1)',
        doneMap: state.completedProcessesMod3,
        metas: data.MODULE_3_DATA.processesMeta,
        actionName: 'select-mod3-process',
      },
      {
        type: 'module-4',
        stageName: 'Etapa 5 • Módulo 4 (Integración y Mapeo)',
        doneMap: state.completedProcessesMod4,
        metas: data.MODULE_4_DATA.processesMeta,
        actionName: 'select-mod4-process',
      },
    ];

    for (let i = 0; i < modules.length; i++) {
      const m = modules[i];
      for (let j = 0; j < m.metas.length; j++) {
        const p = m.metas[j];
        if (!m.doneMap[p.id]) {
          return {
            stageName: m.stageName,
            label: p.title,
            actionAttr: `data-action="${m.actionName}" data-process-id="${p.id}"`,
          };
        }
      }
    }

    if (!state.finalExamCompleted) {
      return {
        stageName: 'Etapa 6 • Evaluación Final',
        label: 'Examen Final Certificable (20 Preguntas)',
        actionAttr: 'data-action="select-final-exam"',
      };
    }

    return {
      stageName: 'Etapa 6 • Cierre y Certificación',
      label: 'Cierre, Encuesta de Satisfacción y Certificado Digital',
      actionAttr: 'data-action="select-closure"',
    };
  }

  function renderDashboardView(state, metrics, uiState) {
    const data = window.LMS_DATA;
    const nextAct = computeNextActivity(state);
    const expandedStage = state.dashboardExpandedStage;
    const copiedId = Boolean(uiState && uiState.copiedHeaderId);

    const mod1Done = metrics.completedProcessesCount || 0;
    const mod2Done = metrics.completedProcessesMod2Count || 0;
    const mod3Done = metrics.completedProcessesMod3Count || 0;
    const mod4Done = metrics.completedProcessesMod4Count || 0;
    const stage6Done =
      (state.finalExamCompleted ? 1 : 0) + (state.closureCompleted ? 1 : 0);

    const stages = [
      {
        num: 1,
        title: 'Bienvenida, Orientación y Diagnóstico',
        subtitle:
          'Introducción al programa G4-CIBER-2026 y evaluación diagnóstica inicial',
        pct: state.sectionZeroCompleted ? 100 : 0,
        isComplete: Boolean(state.sectionZeroCompleted),
        primaryAttr: 'data-action="select-section-0"',
        items: [
          {
            title: 'Orientación General, Video de Bienvenida y Test Diagnóstico',
            done: Boolean(state.sectionZeroCompleted),
            attr: 'data-action="select-section-0"',
          },
        ],
      },
      {
        num: 2,
        title: 'Módulo 1: SGSI ISO/IEC 27001:2022 y 27002:2022',
        subtitle:
          'Ciclo PHVA, Cláusulas 4–10, 93 Controles, Atributos y Declaración de Aplicabilidad (SoA)',
        pct: Math.round((mod1Done / 8) * 100),
        isComplete: mod1Done === 8,
        primaryAttr: `data-action="select-process" data-process-id="${
          (data.MODULE_1_DATA.processesMeta.find(
            (p) => !state.completedProcesses[p.id]
          ) || { id: 'inicia' }).id
        }"`,
        items: data.MODULE_1_DATA.processesMeta.map((p) => ({
          title: `${p.title} (${p.duration})`,
          done: Boolean(state.completedProcesses[p.id]),
          attr: `data-action="select-process" data-process-id="${p.id}"`,
        })),
      },
      {
        num: 3,
        title: 'Módulo 2: Gestión y Respuesta a Riesgos con NIST CSF 2.0',
        subtitle:
          'Función central GOVERN, ciclo operativo 6 funciones, Perfiles y Tiers de madurez',
        pct: Math.round((mod2Done / 8) * 100),
        isComplete: mod2Done === 8,
        primaryAttr: `data-action="select-mod2-process" data-process-id="${
          (data.MODULE_2_DATA.processesMeta.find(
            (p) => !state.completedProcessesMod2[p.id]
          ) || { id: 'inicia' }).id
        }"`,
        items: data.MODULE_2_DATA.processesMeta.map((p) => ({
          title: `${p.title} (${p.duration})`,
          done: Boolean(state.completedProcessesMod2[p.id]),
          attr: `data-action="select-mod2-process" data-process-id="${p.id}"`,
        })),
      },
      {
        num: 4,
        title: 'Módulo 3: Ciberdefensa Práctica con CIS Controls v8.1',
        subtitle:
          '18 Controles Críticos, 153 Salvaguardas y Grupos de Implementación IG1–IG3',
        pct: Math.round((mod3Done / 8) * 100),
        isComplete: mod3Done === 8,
        primaryAttr: `data-action="select-mod3-process" data-process-id="${
          (data.MODULE_3_DATA.processesMeta.find(
            (p) => !state.completedProcessesMod3[p.id]
          ) || { id: 'inicia' }).id
        }"`,
        items: data.MODULE_3_DATA.processesMeta.map((p) => ({
          title: `${p.title} (${p.duration})`,
          done: Boolean(state.completedProcessesMod3[p.id]),
          attr: `data-action="select-mod3-process" data-process-id="${p.id}"`,
        })),
      },
      {
        num: 5,
        title: 'Módulo 4: Integración y Mapeo (Requisito ↔ Función ↔ Control)',
        subtitle:
          'Matriz viva de trazabilidad cruzada ISO 27001 ↔ NIST CSF 2.0 ↔ CIS v8.1',
        pct: Math.round((mod4Done / 8) * 100),
        isComplete: mod4Done === 8,
        primaryAttr: `data-action="select-mod4-process" data-process-id="${
          (data.MODULE_4_DATA.processesMeta.find(
            (p) => !state.completedProcessesMod4[p.id]
          ) || { id: 'inicia' }).id
        }"`,
        items: data.MODULE_4_DATA.processesMeta.map((p) => ({
          title: `${p.title} (${p.duration})`,
          done: Boolean(state.completedProcessesMod4[p.id]),
          attr: `data-action="select-mod4-process" data-process-id="${p.id}"`,
        })),
      },
      {
        num: 6,
        title: 'Evaluación Final, Encuesta y Certificado Digital',
        subtitle:
          'Examen sumativo de 20 preguntas, bibliografía oficial, encuesta y diploma PDF',
        pct: Math.round((stage6Done / 2) * 100),
        isComplete: Boolean(state.finalExamCompleted && state.closureCompleted),
        primaryAttr: state.finalExamCompleted
          ? 'data-action="select-closure"'
          : 'data-action="select-final-exam"',
        items: [
          {
            title: 'Evaluación Final Certificable (20 Preguntas • Nota mín. 70%)',
            done: Boolean(state.finalExamCompleted),
            attr: 'data-action="select-final-exam"',
          },
          {
            title:
              'Cierre, Encuesta de Satisfacción y Generador de Certificado PDF',
            done: Boolean(state.closureCompleted),
            attr: 'data-action="select-closure"',
          },
        ],
      },
    ];

    const completedStages = stages.filter((s) => s.isComplete).length;
    const pendingStages = stages.length - completedStages;
    const certApproved =
      state.finalExamScore !== null && state.finalExamScore >= 70;

    const timelineHtml = stages
      .map((st) => {
        const isExp = expandedStage === st.num;
        const circleCls = st.isComplete
          ? 'bg-emerald-600 border-emerald-600 text-white'
          : st.pct > 0
          ? 'bg-[#C13B2A] border-[#C13B2A] text-white'
          : 'bg-white border-slate-300 text-[#1E293B]';

        const subHtml = isExp
          ? `
          <div class="border-t border-slate-100 bg-[#FAF8F6]/70 p-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            ${st.items
              .map(
                (it) => `
              <button
                type="button"
                ${it.attr}
                class="text-left p-3 rounded-xl bg-white hover:bg-[#FDF2F0] border border-slate-200/80 hover:border-[#C13B2A]/30 transition-all flex items-center justify-between gap-2.5 cursor-pointer"
              >
                <div class="flex items-center gap-2.5 min-w-0">
                  <i data-lucide="${
                    it.done ? 'check-circle-2' : 'circle'
                  }" class="w-4 h-4 ${
                  it.done ? 'text-emerald-600' : 'text-slate-300'
                } shrink-0"></i>
                  <span class="text-xs font-semibold text-[#1E293B] truncate">${escapeHtml(
                    it.title
                  )}</span>
                </div>
                <i data-lucide="play-circle" class="w-4 h-4 text-[#C13B2A] shrink-0"></i>
              </button>
            `
              )
              .join('')}
          </div>
        `
          : '';

        return `
          <div class="relative flex items-start gap-4">
            <div class="relative z-10 w-8 h-8 rounded-full flex items-center justify-center text-xs font-extrabold shrink-0 mt-4 border-2 ${circleCls}">
              ${st.isComplete ? '✓' : st.num}
            </div>
            <div class="flex-1 bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
              <div class="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <button
                  type="button"
                  data-action="toggle-dashboard-stage"
                  data-stage-num="${st.num}"
                  class="flex-1 text-left flex items-start gap-3 min-w-0 cursor-pointer"
                >
                  <div class="w-10 h-10 rounded-xl bg-[#FDF2F0] text-[#C13B2A] flex items-center justify-center shrink-0">
                    <i data-lucide="${
                      st.num === 1
                        ? 'compass'
                        : st.num === 6
                        ? 'award'
                        : 'book-open'
                    }" class="w-5 h-5"></i>
                  </div>
                  <div class="min-w-0">
                    <div class="flex flex-wrap items-center gap-2">
                      <h3 class="text-sm sm:text-base font-extrabold text-[#1E293B]">${escapeHtml(
                        st.title
                      )}</h3>
                      <span class="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#FDF2F0] text-[#C13B2A] border border-[#C13B2A]/20">${
                        st.pct
                      }%</span>
                      ${
                        st.isComplete
                          ? '<span class="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">✓ Completado</span>'
                          : ''
                      }
                    </div>
                    <p class="text-xs text-[#64748B] mt-1">${escapeHtml(
                      st.subtitle
                    )}</p>
                  </div>
                </button>

                <div class="flex items-center gap-3 shrink-0 self-end sm:self-center">
                  <button
                    type="button"
                    ${st.primaryAttr}
                    class="inline-flex items-center gap-1 text-xs font-extrabold text-[#C13B2A] hover:text-[#A63122] px-3 py-1.5 rounded-full bg-[#FDF2F0] cursor-pointer"
                  >
                    ${st.pct > 0 ? 'Continuar &gt;' : 'Iniciar &gt;'}
                  </button>
                  <button
                    type="button"
                    data-action="toggle-dashboard-stage"
                    data-stage-num="${st.num}"
                    class="p-1.5 rounded-lg text-[#64748B] hover:bg-slate-100 cursor-pointer"
                  >
                    <i data-lucide="${
                      isExp ? 'chevron-down' : 'chevron-right'
                    }" class="w-5 h-5"></i>
                  </button>
                </div>
              </div>
              ${subHtml}
            </div>
          </div>
        `;
      })
      .join('');

    return `
      <div class="max-w-6xl mx-auto space-y-8 pb-16">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div class="space-y-2">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold">
              <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
              ${
                metrics.progressPercentage === 100
                  ? '✓ Programa completado'
                  : '• En progreso activo'
              }
            </div>
            <h1 class="text-2xl sm:text-3xl font-black text-[#1E293B] tracking-tight">
              Panel del participante
            </h1>
            <p class="text-sm text-[#64748B]">
              Supervisa tus avances, próximas actividades y continúa con tu plan de estudio.
            </p>
          </div>

          ${
            state.accessId
              ? `
            <div class="bg-white rounded-2xl border border-slate-200/90 px-4 py-3 shadow-sm flex items-center gap-3 self-start md:self-auto">
              <div class="min-w-0">
                <div class="text-[11px] font-bold uppercase tracking-wider text-[#64748B]">
                  Participante • DNI ${escapeHtml(state.studentDni || '—')}
                </div>
                <div class="text-sm font-extrabold text-[#1E293B] truncate">${escapeHtml(
                  state.studentName
                )}</div>
                <div class="text-xs font-mono text-[#C13B2A] font-bold">ID Progreso: ${escapeHtml(
                  state.accessId
                )}</div>
              </div>
              <button
                type="button"
                data-action="copy-active-id"
                class="px-3 py-1.5 rounded-full bg-[#FAF8F6] hover:bg-[#FDF2F0] border border-slate-200 text-xs font-bold text-[#1E293B] inline-flex items-center gap-1 shrink-0 cursor-pointer"
              >
                <i data-lucide="copy" class="w-3.5 h-3.5 text-[#C13B2A]"></i>
                ${copiedId ? 'Copiado' : 'Copiar ID'}
              </button>
            </div>
          `
              : ''
          }
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm flex items-center gap-4">
            <div class="w-12 h-12 rounded-full bg-[#FDF2F0] text-[#C13B2A] flex items-center justify-center shrink-0">
              <i data-lucide="trending-up" class="w-6 h-6"></i>
            </div>
            <div>
              <div class="text-xs font-semibold text-[#64748B]">Progreso del curso</div>
              <div class="text-2xl font-black text-[#1E293B] mt-0.5">${
                metrics.progressPercentage
              }% completado</div>
              <div class="text-xs text-[#64748B] mt-0.5">${
                metrics.completedUnits
              } de ${metrics.totalTrackableUnits} actividades logradas</div>
            </div>
          </div>

          <div class="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm flex items-center gap-4">
            <div class="w-12 h-12 rounded-full bg-slate-100 text-[#1E293B] flex items-center justify-center shrink-0">
              <i data-lucide="layers" class="w-6 h-6"></i>
            </div>
            <div>
              <div class="text-xs font-semibold text-[#64748B]">Etapas completadas</div>
              <div class="text-2xl font-black text-[#1E293B] mt-0.5">${completedStages} de 6 etapas</div>
              <div class="text-xs text-[#64748B] mt-0.5">${
                pendingStages === 0
                  ? 'Todas las etapas completadas'
                  : `${pendingStages} ${
                      pendingStages === 1 ? 'etapa pendiente' : 'etapas pendientes'
                    }`
              }</div>
            </div>
          </div>

          <div class="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm flex items-center gap-4">
            <div class="w-12 h-12 rounded-full ${
              certApproved
                ? 'bg-emerald-50 text-emerald-700'
                : 'bg-amber-50 text-amber-700'
            } flex items-center justify-center shrink-0">
              <i data-lucide="award" class="w-6 h-6"></i>
            </div>
            <div>
              <div class="text-xs font-semibold text-[#64748B]">Estado de certificación</div>
              <div class="text-xl font-black text-[#1E293B] mt-0.5">${
                certApproved
                  ? `Aprobado (${state.finalExamScore}%)`
                  : state.finalExamScore !== null
                  ? `Nota: ${state.finalExamScore}%`
                  : 'Nota mín. 70%'
              }</div>
              <div class="text-xs text-[#64748B] mt-0.5">${
                certApproved
                  ? 'Certificado digital desbloqueado'
                  : 'Requiere ≥ 70% en Evaluación Final'
              }</div>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div class="lg:col-span-7 bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden flex flex-col justify-between">
            <div class="bg-gradient-to-r from-[#1E293B] via-[#273549] to-[#C13B2A] p-6 text-white">
              <div class="flex items-center justify-between gap-2">
                <span class="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/15 text-white">
                  G4-CIBER-2026 • 100% Asíncrono
                </span>
                <i data-lucide="shield-check" class="w-6 h-6 text-white/90"></i>
              </div>
              <h2 class="text-xl sm:text-2xl font-extrabold mt-3 leading-snug">
                Marcos y Buenas Prácticas de Ciberseguridad
              </h2>
            </div>
            <div class="p-6 space-y-5 flex-1 flex flex-col justify-between">
              <p class="text-sm text-[#64748B] leading-relaxed">
                Curso especializado en gobernanza auditable, gestión dinámica de riesgos y ciberdefensa técnica priorizada integrando <strong class="text-[#1E293B]">ISO/IEC 27001 y 27002:2022</strong>, <strong class="text-[#1E293B]">NIST CSF 2.0</strong> y <strong class="text-[#1E293B]">CIS Controls v8.1</strong>.
              </p>
              <div class="space-y-2">
                <div class="flex items-center justify-between text-xs font-bold">
                  <span class="text-[#64748B]">Avance global en la ruta</span>
                  <span class="text-[#C13B2A]">${metrics.progressPercentage}%</span>
                </div>
                <div class="w-full h-2.5 rounded-full bg-slate-100 overflow-hidden">
                  <div class="h-full bg-[#C13B2A] rounded-full transition-all duration-500" style="width: ${
                    metrics.progressPercentage
                  }%"></div>
                </div>
              </div>
            </div>
          </div>

          <div class="lg:col-span-5 bg-[#FDF6F5] rounded-2xl border border-[#C13B2A]/20 p-6 shadow-sm flex flex-col justify-between space-y-5">
            <div class="space-y-3">
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold">
                <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
                En progreso activo
              </span>
              <div>
                <h3 class="text-lg font-extrabold text-[#C13B2A]">Tu siguiente actividad</h3>
                <p class="text-xs font-bold uppercase tracking-wider text-[#64748B] mt-2">${escapeHtml(
                  nextAct.stageName
                )}</p>
                <p class="text-base sm:text-lg font-bold text-[#1E293B] mt-1 leading-snug">${escapeHtml(
                  nextAct.label
                )}</p>
              </div>
            </div>
            <div class="space-y-2.5">
              <button
                type="button"
                ${nextAct.actionAttr}
                class="w-full py-3.5 px-6 rounded-full bg-[#C13B2A] hover:bg-[#A63122] text-white text-sm font-bold shadow-md cursor-pointer"
              >
                Continuar →
              </button>
              <button
                type="button"
                data-action="select-closure"
                class="w-full py-2.5 px-5 rounded-full bg-white hover:bg-slate-50 border border-slate-200 text-[#1E293B] text-xs font-bold cursor-pointer"
              >
                Ver estado de Certificado y Cierre
              </button>
            </div>
          </div>
        </div>

        <div class="space-y-4">
          <div>
            <h2 class="text-xl font-extrabold text-[#1E293B]">Ruta de aprendizaje</h2>
            <p class="text-xs sm:text-sm text-[#64748B]">Haz clic en cualquier etapa del 1 al 6 para desplegar sus procesos y entrar directamente.</p>
          </div>
          <div class="relative pl-4 sm:pl-6 space-y-4">
            <div class="absolute left-[31px] sm:left-[39px] top-6 bottom-6 border-l-2 border-dashed border-slate-300 pointer-events-none"></div>
            ${timelineHtml}
          </div>
        </div>
      </div>
    `;
  }

  function buildFlatStepInfo(state) {
    const data = window.LMS_DATA;
    const steps = [
      {
        key: 'section-0',
        breadcrumb: 'Bienvenida / Orientación',
        title: 'Bienvenida, Orientación y Diagnóstico',
        actionAttr: 'data-action="select-section-0"',
        toggleAttr: 'data-action="toggle-sec0-complete"',
        isDone: Boolean(state.sectionZeroCompleted),
      },
    ];

    const mods = [
      {
        type: 'module-1',
        label: 'Módulo 1',
        metas: data.MODULE_1_DATA.processesMeta,
        doneMap: state.completedProcesses,
        selAction: 'select-process',
        togAction: 'toggle-process-completed',
      },
      {
        type: 'module-2',
        label: 'Módulo 2',
        metas: data.MODULE_2_DATA.processesMeta,
        doneMap: state.completedProcessesMod2,
        selAction: 'select-mod2-process',
        togAction: 'toggle-mod2-process-completed',
      },
      {
        type: 'module-3',
        label: 'Módulo 3',
        metas: data.MODULE_3_DATA.processesMeta,
        doneMap: state.completedProcessesMod3,
        selAction: 'select-mod3-process',
        togAction: 'toggle-mod3-process-completed',
      },
      {
        type: 'module-4',
        label: 'Módulo 4',
        metas: data.MODULE_4_DATA.processesMeta,
        doneMap: state.completedProcessesMod4,
        selAction: 'select-mod4-process',
        togAction: 'toggle-mod4-process-completed',
      },
    ];

    mods.forEach((m) => {
      m.metas.forEach((meta) => {
        steps.push({
          key: `${m.type}-${meta.id}`,
          breadcrumb: `${m.label} / ${meta.shortTitle || meta.id.toUpperCase()}`,
          title: meta.title,
          actionAttr: `data-action="${m.selAction}" data-process-id="${meta.id}"`,
          toggleAttr: `data-action="${m.togAction}" data-process-id="${meta.id}"`,
          isDone: Boolean(m.doneMap[meta.id]),
        });
      });
    });

    steps.push({
      key: 'final-exam',
      breadcrumb: 'Sección VII / Evaluación Final',
      title: 'Evaluación Final Certificable (20 Preguntas)',
      actionAttr: 'data-action="select-final-exam"',
      toggleAttr: 'data-action="select-closure"',
      isDone: Boolean(state.finalExamCompleted),
    });

    steps.push({
      key: 'closure',
      breadcrumb: 'Sección VIII / Certificado',
      title: 'Cierre, Encuesta de Satisfacción y Certificado Digital',
      actionAttr: 'data-action="select-closure"',
      toggleAttr: 'data-action="mark-closure-done"',
      isDone: Boolean(state.closureCompleted),
    });

    let activeKey = 'section-0';
    if (state.activeView.type === 'section-0') activeKey = 'section-0';
    else if (state.activeView.type === 'final-exam') activeKey = 'final-exam';
    else if (state.activeView.type === 'closure') activeKey = 'closure';
    else if (state.activeView.type !== 'dashboard') {
      activeKey = `${state.activeView.type}-${state.activeView.processId || 'inicia'}`;
    }

    const idx = steps.findIndex((s) => s.key === activeKey);
    return {
      current: idx >= 0 ? steps[idx] : steps[0],
      prev: idx > 0 ? steps[idx - 1] : null,
      next: idx >= 0 && idx < steps.length - 1 ? steps[idx + 1] : null,
    };
  }

  function renderActiveClassHeader(stepInfo) {
    const curr = stepInfo.current;
    const next = stepInfo.next;
    return `
      <div class="no-print bg-white rounded-2xl border border-slate-200/90 p-4 sm:p-5 shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
        <div class="space-y-1.5 min-w-0">
          <div class="flex items-center gap-2 text-xs font-bold text-[#64748B]">
            <button type="button" data-action="select-dashboard" class="hover:text-[#C13B2A] cursor-pointer">Panel</button>
            <span>/</span>
            <span class="text-[#C13B2A]">${escapeHtml(curr.breadcrumb)}</span>
          </div>
          <div class="flex items-center gap-2.5">
            <span class="w-7 h-7 rounded-full bg-[#FDF2F0] text-[#C13B2A] flex items-center justify-center shrink-0">
              <i data-lucide="play" class="w-3.5 h-3.5 fill-current"></i>
            </span>
            <h2 class="text-base sm:text-lg font-extrabold text-[#1E293B] truncate">${escapeHtml(
              curr.title
            )}</h2>
          </div>
        </div>

        <div class="flex flex-wrap items-center gap-2.5 shrink-0">
          <button
            type="button"
            ${curr.toggleAttr}
            class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold border cursor-pointer ${
              curr.isDone
                ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                : 'bg-slate-100 hover:bg-[#FDF2F0] text-[#1E293B] hover:text-[#C13B2A] border-slate-200'
            }"
          >
            <i data-lucide="check-circle-2" class="w-3.5 h-3.5"></i>
            <span>${
              curr.isDone ? '✓ Completado' : 'Marcar como completado'
            }</span>
          </button>

          ${
            next
              ? `<span class="text-xs font-semibold px-3.5 py-1.5 rounded-full bg-[#1E293B] text-white max-w-[260px] truncate">Siguiente: ${escapeHtml(
                  next.title
                )}</span>`
              : ''
          }
        </div>
      </div>
    `;
  }

  function renderFloatingBottomNav(stepInfo) {
    const prev = stepInfo.prev;
    const next = stepInfo.next;
    return `
      <div class="no-print sticky bottom-5 z-20 flex justify-center pointer-events-none mt-8">
        <div class="pointer-events-auto inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-white/95 backdrop-blur-md shadow-lg border border-slate-200 px-3 py-2">
          <button
            type="button"
            data-action="select-dashboard"
            class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold text-[#64748B] hover:text-[#1E293B] hover:bg-slate-100 cursor-pointer"
          >
            <i data-lucide="arrow-left" class="w-3.5 h-3.5"></i>
            <span>Volver al panel</span>
          </button>

          <span class="h-4 w-px bg-slate-200"></span>

          <button
            type="button"
            ${prev ? prev.actionAttr : 'disabled'}
            class="inline-flex items-center gap-1 px-3.5 py-2 rounded-full text-xs font-bold text-[#1E293B] hover:bg-slate-100 disabled:opacity-40 cursor-pointer"
          >
            <i data-lucide="chevron-left" class="w-3.5 h-3.5"></i>
            <span>Anterior</span>
          </button>

          <button
            type="button"
            ${next ? next.actionAttr : 'disabled'}
            class="inline-flex items-center gap-1 px-5 py-2 rounded-full bg-[#C13B2A] hover:bg-[#A63122] disabled:opacity-40 text-white text-xs font-bold shadow-sm cursor-pointer"
          >
            <span>Siguiente</span>
            <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
          </button>
        </div>
      </div>
    `;
  }

  window.LMS_YT_EDITORS_OPEN = {};
  window.LMS_CAMPUS_VIEWS = {
    extractYouTubeId: extractYouTubeId,
    renderYouTubeEmbedPlayer: renderYouTubeEmbedPlayer,
    renderOnboardingView: renderOnboardingView,
    renderDashboardView: renderDashboardView,
    buildFlatStepInfo: buildFlatStepInfo,
    renderActiveClassHeader: renderActiveClassHeader,
    renderFloatingBottomNav: renderFloatingBottomNav,
  };
})();

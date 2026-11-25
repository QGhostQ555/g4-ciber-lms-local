/**
 * ============================================================================
 * CONTROLADOR PRINCIPAL DE LA PLATAFORMA LMS: src/js/app.js
 * Orquesta todas las interacciones de Sección 0, Módulo 1 y Módulo 2,
 * descargas CSV con BOM UTF-8 y persistencia en localStorage.
 * ============================================================================
 */

(function () {
  let isCertificateModalOpen = false;
  let isMobileSidebarOpen = false;
  window.LMS_YT_EDITORS_OPEN = window.LMS_YT_EDITORS_OPEN || {};

  let uiState = {
    authTab: 'register',
    generatedAccessId: null,
    lastRegisteredMeta: null,
    formError: '',
    loginError: '',
    copiedId: false,
    copiedHeaderId: false,
  };

  function refreshIcons() {
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  }

  function downloadSoACsv() {
    const rowsData =
      (window.LMS_DATA.MODULE_1_DATA.explora &&
        window.LMS_DATA.MODULE_1_DATA.explora.soaSampleRows) ||
      [];

    const headers = [
      'Código Control',
      'Dominio ISO 27002:2022',
      'Nombre del Control',
      'Tipo (#Preventivo/#Detectivo/#Correctivo)',
      '¿Aplica? (SÍ/NO)',
      'Justificación de Inclusión o Exclusión',
      'Responsable',
      'Estado de Implementación (%)',
      'Documento/Evidencia de Referencia',
    ];

    const rows = rowsData.map((r) => [
      `"${r.code || ''}"`,
      `"${r.theme || ''}"`,
      `"${r.controlName || ''}"`,
      `"${r.controlType || ''}"`,
      `"${r.applicable || ''}"`,
      `"${r.justification || ''}"`,
      `"${r.owner || ''}"`,
      `"${r.implementationProgress || ''}"`,
      `"${r.evidenceReference || ''}"`,
    ]);

    const csvContent =
      '\uFEFF' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\r\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute(
      'download',
      'Plantilla_SoA_ISO27001_2022_G4_CIBER_Excel.csv'
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    window.LMS_STORAGE.markSoaDownloaded();
  }

  function downloadMod2CoreCsv() {
    const rowsData =
      (window.LMS_DATA.MODULE_2_DATA.explora &&
        window.LMS_DATA.MODULE_2_DATA.explora.coreMatrixRows) ||
      [];

    const headers = [
      'Código Función',
      'Función NIST CSF 2.0',
      'Código Categoría',
      'Nombre de Categoría Oficial',
      'Descripción de Resultados',
      'Subcategorías de Referencia',
      'Perfil Actual (1-4)',
      'Perfil Objetivo (1-4)',
      'Brecha Identificada',
    ];

    const rows = rowsData.map((r) => [
      `"${r.functionCode || ''}"`,
      `"${r.functionName || ''}"`,
      `"${r.categoryCode || ''}"`,
      `"${r.categoryName || ''}"`,
      `"${r.categoryDescription || ''}"`,
      `"${r.sampleSubcategories || ''}"`,
      `"${r.currentProfileScore || ''}"`,
      `"${r.targetProfileScore || ''}"`,
      `"${r.identifiedGap || ''}"`,
    ]);

    const csvContent =
      '\uFEFF' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\r\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Matriz_Core_NIST_CSF_2_0_G4_CIBER_Excel.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    window.LMS_STORAGE.markMod2CoreMatrixDownloaded();
  }

  function downloadMod3ChecklistCsv() {
    const rowsData =
      (window.LMS_DATA.MODULE_3_DATA.explora &&
        window.LMS_DATA.MODULE_3_DATA.explora.checklistRows) ||
      [];

    const headers = [
      'Control',
      'Código Salvaguarda',
      'Título de la Salvaguarda',
      'Clase de Activo',
      'Función de Seguridad',
      'Grupo de Implementación (IG1/IG2/IG3)',
      'Estado Actual',
      'Evidencia Técnica',
    ];

    const rows = rowsData.map((r) => [
      `"${r.control || ''}"`,
      `"${r.safeguardCode || ''}"`,
      `"${r.safeguardTitle || ''}"`,
      `"${r.assetClass || ''}"`,
      `"${r.securityFunction || ''}"`,
      `"${r.igGroup || ''}"`,
      `"${r.currentStatus || ''}"`,
      `"${r.technicalEvidence || ''}"`,
    ]);

    const csvContent =
      '\uFEFF' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\r\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute(
      'download',
      'Checklist_CIS_Controls_v8_1_G4_CIBER_Excel.csv'
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    window.LMS_STORAGE.markMod3ChecklistDownloaded();
  }

  function downloadMod4MatrixCsv() {
    const mod4 = window.LMS_DATA.MODULE_4_DATA;
    const headers = [
      'ID_Unificado',
      'Dominio_Seguridad',
      'ISO_27001_27002_2022',
      'NIST_CSF_2_0_Funcion_Categoria',
      'CIS_Controls_v8_1_IG',
      'Estado_Implementacion_Tecnica (%)',
      'Brecha_Gobernanza_Documental',
      'Evidencia_Auditable',
    ];
    const esc = (v) => `"${String(v).replace(/"/g, '""')}"`;
    const rows = mod4.explora.masterMatrixRows.map((r) => [
      esc(r.unifiedId),
      esc(r.domain),
      esc(r.isoRef),
      esc(r.nistRef),
      esc(r.cisRef),
      esc(`${r.techStatusPct}%`),
      esc(r.governanceGap),
      esc(r.auditableEvidence),
    ]);

    const csvContent =
      '\uFEFF' + [headers.map(esc).join(','), ...rows.map((e) => e.join(','))].join('\r\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute(
      'download',
      'Matriz_Integrada_ISO_NIST_CIS_G4_CIBER_Excel.csv'
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    window.LMS_STORAGE.markMod4MatrixDownloaded();
  }

  function downloadClosureBundleCsv() {
    const mod1Rows =
      (window.LMS_DATA.MODULE_1_DATA &&
        window.LMS_DATA.MODULE_1_DATA.explora &&
        window.LMS_DATA.MODULE_1_DATA.explora.soaSampleRows) ||
      [];
    const mod3Rows =
      (window.LMS_DATA.MODULE_3_DATA &&
        window.LMS_DATA.MODULE_3_DATA.explora &&
        window.LMS_DATA.MODULE_3_DATA.explora.checklistRows) ||
      [];
    const mod4Rows =
      (window.LMS_DATA.MODULE_4_DATA &&
        window.LMS_DATA.MODULE_4_DATA.explora &&
        window.LMS_DATA.MODULE_4_DATA.explora.masterMatrixRows) ||
      [];

    const esc = (v) => `"${String(v || '').replace(/"/g, '""')}"`;
    const lines = [];

    lines.push(esc('=== PAQUETE CONSOLIDADO G4-CIBER-2026: ISO 27001/27002:2022 + NIST CSF 2.0 + CIS CONTROLS v8.1 ==='));
    lines.push('');

    // SECCIÓN 1: MATRIZ CRUZADA
    lines.push(esc('SECCION 1: MATRIZ DE MAPEO CRUZADO ISO 27001/27002:2022 <-> NIST CSF 2.0 <-> CIS v8.1'));
    lines.push([
      'ID_Unificado',
      'Dominio_Seguridad',
      'ISO_27001_27002_2022',
      'NIST_CSF_2_0_Funcion_Categoria',
      'CIS_Controls_v8_1_IG',
      'Estado_Implementacion_Tecnica (%)',
      'Brecha_Gobernanza_Documental',
      'Evidencia_Auditable',
    ].map(esc).join(','));
    mod4Rows.forEach((r) => {
      lines.push([
        r.unifiedId,
        r.domain,
        r.isoRef,
        r.nistRef,
        r.cisRef,
        `${r.techStatusPct}%`,
        r.governanceGap,
        r.auditableEvidence,
      ].map(esc).join(','));
    });

    lines.push('');
    lines.push(esc('SECCION 2: CHECKLIST DE HIGIENE CIBERNETICA IG1 (CIS CONTROLS v8.1)'));
    lines.push([
      'Control CIS',
      'Codigo Salvaguarda',
      'Titulo de Salvaguarda',
      'Clase de Activo',
      'Funcion de Seguridad',
      'Grupo IG',
      'Estado Actual',
      'Evidencia Tecnica',
    ].map(esc).join(','));
    mod3Rows
      .filter((r) => r.igGroup === 'IG1')
      .forEach((r) => {
        lines.push([
          r.control,
          r.safeguardCode,
          r.safeguardTitle,
          r.assetClass,
          r.securityFunction,
          r.igGroup,
          r.currentStatus,
          r.technicalEvidence,
        ].map(esc).join(','));
      });

    lines.push('');
    lines.push(esc('SECCION 3: MODELO DE DECLARACION DE APLICABILIDAD (SoA) - ISO/IEC 27001:2022'));
    lines.push([
      'Codigo Control',
      'Dominio ISO 27002:2022',
      'Nombre del Control',
      'Tipo',
      'Aplica (SI/NO)',
      'Justificacion',
      'Responsable',
      'Implementacion (%)',
      'Evidencia Referencia',
    ].map(esc).join(','));
    mod1Rows.forEach((r) => {
      lines.push([
        r.code,
        r.theme,
        r.controlName,
        r.controlType,
        r.applicable,
        r.justification,
        r.owner,
        r.implementationProgress,
        r.evidenceReference,
      ].map(esc).join(','));
    });

    const csvContent = '\uFEFF' + lines.join('\r\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute(
      'download',
      'Paquete_Completo_Plantillas_G4_CIBER_2026_Excel.csv'
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    window.LMS_STORAGE.markClosureBundleDownloaded();
  }

  function renderApp() {
    const state = window.LMS_STORAGE.getState();
    const metrics = window.LMS_STORAGE.getMetrics();
    const savedProfiles = window.LMS_STORAGE.getSavedProfiles
      ? window.LMS_STORAGE.getSavedProfiles()
      : [];

    const onboardingRoot = document.getElementById('lms-onboarding-root');
    const campusShell = document.getElementById('lms-campus-shell');

    if (!state.isRegistered) {
      if (onboardingRoot && window.LMS_CAMPUS_VIEWS) {
        onboardingRoot.classList.remove('hidden');
        onboardingRoot.innerHTML = window.LMS_CAMPUS_VIEWS.renderOnboardingView(
          savedProfiles,
          uiState
        );
      }
      if (campusShell) {
        campusShell.classList.add('hidden');
      }
      refreshIcons();
      return;
    }

    if (onboardingRoot) {
      onboardingRoot.classList.add('hidden');
      onboardingRoot.innerHTML = '';
    }
    if (campusShell) {
      campusShell.classList.remove('hidden');
    }

    const headerEl = document.getElementById('lms-header');
    const sidebarDesktopEl = document.getElementById('lms-sidebar-desktop');
    const sidebarMobileEl = document.getElementById('lms-sidebar-mobile-content');
    const mobileDrawerWrapper = document.getElementById('lms-mobile-drawer');
    const mainEl = document.getElementById('lms-main-content');
    const modalContainerEl = document.getElementById('lms-certificate-modal');

    if (headerEl) {
      headerEl.innerHTML = window.LMS_COMPONENTS.renderHeader(state, metrics);
    }

    const sidebarMarkup = window.LMS_COMPONENTS.renderSidebar(state, metrics);
    if (sidebarDesktopEl) {
      if (state.desktopSidebarCollapsed) {
        sidebarDesktopEl.className =
          'no-print hidden lg:block w-0 overflow-hidden shrink-0 transition-all duration-300';
      } else {
        sidebarDesktopEl.className =
          'no-print hidden lg:block w-80 xl:w-[340px] shrink-0 sticky top-20 h-[calc(100vh-5rem)] transition-all duration-300';
      }
      sidebarDesktopEl.innerHTML = sidebarMarkup;
    }
    if (sidebarMobileEl) {
      sidebarMobileEl.innerHTML = sidebarMarkup;
    }

    if (mobileDrawerWrapper) {
      if (isMobileSidebarOpen) {
        mobileDrawerWrapper.classList.remove('hidden');
        mobileDrawerWrapper.classList.add('flex');
      } else {
        mobileDrawerWrapper.classList.add('hidden');
        mobileDrawerWrapper.classList.remove('flex');
      }
    }

    if (mainEl) {
      const showTemarioBar = state.desktopSidebarCollapsed
        ? `
          <div class="no-print mb-4 hidden lg:flex">
            <button
              type="button"
              data-action="expand-desktop-sidebar"
              class="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white hover:bg-[#FDF2F0] border border-slate-200 hover:border-[#C13B2A]/40 text-xs font-bold text-[#1E293B] hover:text-[#C13B2A] shadow-sm transition-colors cursor-pointer"
            >
              <span>Mostrar temario</span>
              <i data-lucide="chevron-right" class="w-4 h-4"></i>
            </button>
          </div>
        `
        : '';

      if (state.activeView.type === 'dashboard' && window.LMS_CAMPUS_VIEWS) {
        mainEl.innerHTML =
          showTemarioBar +
          window.LMS_CAMPUS_VIEWS.renderDashboardView(state, metrics, uiState);
      } else {
        let innerHtml = '';
        if (state.activeView.type === 'section-0') {
          innerHtml = window.LMS_COMPONENTS.renderSectionZero(state);
        } else if (state.activeView.type === 'module-2') {
          innerHtml =
            window.LMS_MODULE2_COMPONENTS.renderModuleTwoProcess(state);
        } else if (state.activeView.type === 'module-3') {
          innerHtml =
            window.LMS_MODULE3_COMPONENTS.renderModuleThreeProcess(state);
        } else if (state.activeView.type === 'module-4') {
          innerHtml = window.LMS_MODULE4_COMPONENTS.renderModuleFourProcess(
            state,
            state.activeView
          );
        } else if (state.activeView.type === 'final-exam') {
          innerHtml = window.LMS_CLOSURE_COMPONENTS.renderFinalExamView(state);
        } else if (state.activeView.type === 'closure') {
          innerHtml = window.LMS_CLOSURE_COMPONENTS.renderClosureView(state);
        } else {
          innerHtml = window.LMS_COMPONENTS.renderModuleOneProcess(state);
        }

        if (window.LMS_CAMPUS_VIEWS) {
          const stepInfo = window.LMS_CAMPUS_VIEWS.buildFlatStepInfo(state);
          mainEl.innerHTML =
            showTemarioBar +
            window.LMS_CAMPUS_VIEWS.renderActiveClassHeader(stepInfo) +
            `<div class="campus-theme-surface">${innerHtml}</div>` +
            window.LMS_CAMPUS_VIEWS.renderFloatingBottomNav(stepInfo);
        } else {
          mainEl.innerHTML =
            showTemarioBar + `<div class="campus-theme-surface">${innerHtml}</div>`;
        }
      }
    }

    if (modalContainerEl) {
      if (isCertificateModalOpen) {
        modalContainerEl.classList.remove('hidden');
        modalContainerEl.classList.add('flex');
        modalContainerEl.innerHTML = window.LMS_COMPONENTS.renderCertificateModal(
          state,
          metrics
        );
      } else {
        modalContainerEl.classList.add('hidden');
        modalContainerEl.classList.remove('flex');
        modalContainerEl.innerHTML = '';
      }
    }

    refreshIcons();
  }

  function setupEventListeners() {
    document.addEventListener('click', function (e) {
      const toggleMobileBtn = e.target.closest('#btn-toggle-mobile-sidebar');
      if (toggleMobileBtn) {
        isMobileSidebarOpen = !isMobileSidebarOpen;
        renderApp();
        return;
      }

      const mobileBackdrop = e.target.closest('#mobile-sidebar-backdrop');
      if (mobileBackdrop) {
        isMobileSidebarOpen = false;
        renderApp();
        return;
      }

      const actionBtn = e.target.closest('[data-action]');
      if (!actionBtn) return;

      const action = actionBtn.getAttribute('data-action');

      switch (action) {
        case 'hero-empecemos': {
          uiState.authTab = 'register';
          renderApp();
          const cardEl = document.getElementById('onboarding-auth-card');
          if (cardEl) {
            cardEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
          const nameInput = document.getElementById('reg-fullname');
          if (nameInput) nameInput.focus();
          break;
        }

        case 'switch-auth-tab': {
          const tab = actionBtn.getAttribute('data-tab') || 'register';
          uiState.authTab = tab;
          uiState.formError = '';
          uiState.loginError = '';
          renderApp();
          break;
        }

        case 'copy-generated-id': {
          const accId = actionBtn.getAttribute('data-access-id');
          if (accId && navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(accId).catch(() => {});
          }
          uiState.copiedId = true;
          renderApp();
          setTimeout(() => {
            uiState.copiedId = false;
            renderApp();
          }, 2200);
          break;
        }

        case 'quick-login-id': {
          const accId = actionBtn.getAttribute('data-access-id');
          const res = window.LMS_STORAGE.loginWithAccessId(accId);
          if (res && res.ok) {
            uiState.generatedAccessId = null;
            uiState.lastRegisteredMeta = null;
            uiState.loginError = '';
            uiState.formError = '';
            renderApp();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          } else {
            uiState.loginError =
              (res && res.error) || 'No se pudo ingresar con ese ID.';
            renderApp();
          }
          break;
        }

        case 'copy-active-id': {
          const st = window.LMS_STORAGE.getState();
          if (st.accessId && navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(st.accessId).catch(() => {});
          }
          uiState.copiedHeaderId = true;
          renderApp();
          setTimeout(() => {
            uiState.copiedHeaderId = false;
            renderApp();
          }, 2200);
          break;
        }

        case 'logout-to-landing':
          isCertificateModalOpen = false;
          isMobileSidebarOpen = false;
          uiState.authTab = 'login';
          uiState.generatedAccessId = null;
          uiState.lastRegisteredMeta = null;
          uiState.formError = '';
          uiState.loginError = '';
          window.LMS_STORAGE.logoutToLanding();
          window.scrollTo({ top: 0, behavior: 'smooth' });
          break;

        case 'toggle-desktop-sidebar':
          window.LMS_STORAGE.toggleDesktopSidebar(true);
          break;

        case 'expand-desktop-sidebar':
          window.LMS_STORAGE.toggleDesktopSidebar(false);
          break;

        case 'toggle-all-sidebar-modules':
          window.LMS_STORAGE.toggleAllSidebarModules();
          break;

        case 'select-dashboard':
          isMobileSidebarOpen = false;
          window.LMS_STORAGE.setActiveView({ type: 'dashboard' });
          window.scrollTo({ top: 0, behavior: 'smooth' });
          break;

        case 'toggle-dashboard-stage': {
          const stageNum = Number(
            actionBtn.getAttribute('data-stage-num') ||
              actionBtn.getAttribute('data-stage')
          );
          const st = window.LMS_STORAGE.getState();
          window.LMS_STORAGE.setDashboardExpandedStage(
            st.dashboardExpandedStage === stageNum ? null : stageNum
          );
          break;
        }

        case 'toggle-sec0-complete': {
          const st = window.LMS_STORAGE.getState();
          window.LMS_STORAGE.markSectionZeroCompleted(!st.sectionZeroCompleted);
          break;
        }

        case 'mark-closure-done':
          window.LMS_STORAGE.markClosureCompleted();
          break;

        case 'toggle-yt-editor': {
          const vKey = actionBtn.getAttribute('data-video-key');
          if (vKey) {
            window.LMS_YT_EDITORS_OPEN[vKey] =
              !window.LMS_YT_EDITORS_OPEN[vKey];
            renderApp();
          }
          break;
        }

        case 'save-yt-custom': {
          const vKey = actionBtn.getAttribute('data-video-key');
          if (vKey) {
            const inp = document.getElementById(`yt-custom-input-${vKey}`);
            if (inp && inp.value.trim()) {
              window.LMS_STORAGE.saveCustomVideoUrl(vKey, inp.value.trim());
              window.LMS_YT_EDITORS_OPEN[vKey] = false;
              renderApp();
            }
          }
          break;
        }

        case 'reset-yt-custom': {
          const vKey = actionBtn.getAttribute('data-video-key');
          if (vKey) {
            window.LMS_STORAGE.resetCustomVideoUrl(vKey);
            window.LMS_YT_EDITORS_OPEN[vKey] = false;
            renderApp();
          }
          break;
        }

        case 'select-section-0':
          isMobileSidebarOpen = false;
          window.LMS_STORAGE.setActiveView({ type: 'section-0' });
          window.scrollTo({ top: 0, behavior: 'smooth' });
          break;

        case 'toggle-module-1':
          window.LMS_STORAGE.toggleSidebarSection('module1');
          break;

        case 'toggle-aprende-submenu':
          e.stopPropagation();
          window.LMS_STORAGE.toggleSidebarSection('aprendeSubmenu');
          break;

        case 'toggle-module-2':
          window.LMS_STORAGE.toggleSidebarSection('module2');
          break;

        case 'toggle-mod2-aprende-submenu':
          e.stopPropagation();
          window.LMS_STORAGE.toggleSidebarSection('mod2AprendeSubmenu');
          break;

        case 'toggle-module-3':
          window.LMS_STORAGE.toggleSidebarSection('module3');
          break;

        case 'toggle-mod3-aprende-submenu':
          e.stopPropagation();
          window.LMS_STORAGE.toggleSidebarSection('mod3AprendeSubmenu');
          break;

        case 'toggle-module-4':
          window.LMS_STORAGE.toggleSidebarSection('module4');
          break;

        case 'toggle-mod4-aprende-submenu':
          e.stopPropagation();
          window.LMS_STORAGE.toggleSidebarSection('mod4AprendeSubmenu');
          break;

        case 'toggle-locked-module': {
          const modId = actionBtn.getAttribute('data-module-id');
          window.LMS_STORAGE.toggleSidebarSection('lockedModuleId', modId);
          break;
        }

        // --- NAVEGACIÓN MÓDULO 1 ---
        case 'select-process': {
          const procId = actionBtn.getAttribute('data-process-id');
          isMobileSidebarOpen = false;
          window.LMS_STORAGE.setActiveView({
            type: 'module-1',
            processId: procId,
          });
          window.scrollTo({ top: 0, behavior: 'smooth' });
          break;
        }

        case 'select-lesson': {
          const lessonId = actionBtn.getAttribute('data-lesson-id');
          isMobileSidebarOpen = false;
          window.LMS_STORAGE.setActiveView({
            type: 'module-1',
            processId: 'aprende',
            lessonId: lessonId,
          });
          window.scrollTo({ top: 0, behavior: 'smooth' });
          break;
        }

        case 'complete-and-next-lesson': {
          const currLessonId = actionBtn.getAttribute('data-current-lesson-id');
          const nextLessonId = actionBtn.getAttribute('data-next-lesson-id');
          window.LMS_STORAGE.markLessonCompleted(currLessonId, true);
          window.LMS_STORAGE.setActiveView({
            type: 'module-1',
            processId: 'aprende',
            lessonId: nextLessonId,
          });
          window.scrollTo({ top: 0, behavior: 'smooth' });
          break;
        }

        case 'select-orientation-card': {
          const cardId = actionBtn.getAttribute('data-card-id');
          window.LMS_STORAGE.setOrientationCard(cardId);
          break;
        }

        case 'answer-diagnostic': {
          const qId = actionBtn.getAttribute('data-question-id');
          const optIdx = Number(actionBtn.getAttribute('data-option-index'));
          window.LMS_STORAGE.saveDiagnosticAnswer(qId, optIdx);
          break;
        }

        case 'complete-sec0-start-mod1':
          window.LMS_STORAGE.markSectionZeroCompleted(true);
          window.LMS_STORAGE.setActiveView({
            type: 'module-1',
            processId: 'inicia',
          });
          window.scrollTo({ top: 0, behavior: 'smooth' });
          break;

        case 'toggle-process-completed': {
          const pId = actionBtn.getAttribute('data-process-id');
          window.LMS_STORAGE.toggleProcessCompleted(pId);
          break;
        }

        case 'complete-and-next-process': {
          const currId = actionBtn.getAttribute('data-current-process-id');
          const nextId = actionBtn.getAttribute('data-next-process-id');
          window.LMS_STORAGE.toggleProcessCompleted(currId, true);
          window.LMS_STORAGE.setActiveView({
            type: 'module-1',
            processId: nextId,
          });
          window.scrollTo({ top: 0, behavior: 'smooth' });
          break;
        }

        case 'toggle-lesson-completed': {
          const lesId = actionBtn.getAttribute('data-lesson-id');
          window.LMS_STORAGE.markLessonCompleted(lesId);
          break;
        }

        case 'select-clause-tab': {
          const clauseNum = actionBtn.getAttribute('data-clause-number');
          window.LMS_STORAGE.setSelectedClause(clauseNum);
          break;
        }

        case 'filter-syllabus-controls': {
          const onlyFeatured =
            actionBtn.getAttribute('data-only-featured') === 'true';
          window.LMS_STORAGE.setSyllabusFeaturedFilter(onlyFeatured);
          break;
        }

        case 'select-hashtag-filter': {
          const tag = actionBtn.getAttribute('data-hashtag');
          window.LMS_STORAGE.setHashtagFilter(tag);
          break;
        }

        case 'select-inicia-option': {
          const optId = actionBtn.getAttribute('data-option-id');
          window.LMS_STORAGE.selectIniciaOption(optId);
          break;
        }

        case 'select-soa-step': {
          const stepNum = Number(actionBtn.getAttribute('data-step-number'));
          window.LMS_STORAGE.setActiveSoaStep(stepNum);
          break;
        }

        case 'toggle-nc-accordion': {
          const caseId = actionBtn.getAttribute('data-case-id');
          window.LMS_STORAGE.toggleNcCaseAccordion(caseId);
          break;
        }

        case 'answer-observa-checkpoint': {
          const vidId = actionBtn.getAttribute('data-video-id');
          const optIdx = Number(actionBtn.getAttribute('data-option-index'));
          window.LMS_STORAGE.saveObservaCheckpoint(vidId, optIdx);
          break;
        }

        case 'download-soa-csv':
          downloadSoACsv();
          break;

        case 'practica-act1-pick': {
          const itemId = actionBtn.getAttribute('data-item-id');
          const dom = actionBtn.getAttribute('data-domain');
          window.LMS_STORAGE.savePracticaAct1Answer(itemId, dom);
          break;
        }

        case 'reset-practica-act1':
          window.LMS_STORAGE.resetPracticaAct1();
          break;

        case 'practica-act2-pick': {
          const caseId = actionBtn.getAttribute('data-case-id');
          const optId = actionBtn.getAttribute('data-option-id');
          window.LMS_STORAGE.savePracticaAct2Answer(caseId, optId);
          break;
        }

        case 'reset-practica-act2':
          window.LMS_STORAGE.resetPracticaAct2();
          break;

        case 'select-aplica-option': {
          const optId = actionBtn.getAttribute('data-option-id');
          window.LMS_STORAGE.selectAplicaOption(optId);
          break;
        }

        case 'select-quiz-answer': {
          const qId = actionBtn.getAttribute('data-question-id');
          const idx = Number(actionBtn.getAttribute('data-option-index'));
          window.LMS_STORAGE.saveQuizAnswer(qId, idx);
          break;
        }

        case 'submit-quiz': {
          const state = window.LMS_STORAGE.getState();
          const questions =
            window.LMS_DATA.MODULE_1_DATA.comprueba.questions || [];
          let correct = 0;
          questions.forEach((q) => {
            if (state.quizAnswers[q.id] === q.correctIndex) {
              correct += 1;
            }
          });
          const score =
            questions.length > 0
              ? Math.round((correct / questions.length) * 100)
              : 100;
          const passed =
            score >= (window.LMS_DATA.MODULE_1_DATA.comprueba.passingScore || 70);
          window.LMS_STORAGE.submitQuiz(score, passed);
          break;
        }

        case 'reset-quiz':
          window.LMS_STORAGE.resetQuiz();
          break;

        case 'select-recuerda-pillar': {
          const pillarId = actionBtn.getAttribute('data-pillar-id');
          window.LMS_STORAGE.setRecuerdaPillar(pillarId);
          break;
        }

        case 'complete-all-module-1':
          window.LMS_STORAGE.completeAllModule1();
          break;

        // --- ACCIONES MÓDULO 2 (NIST CSF 2.0) ---
        case 'select-mod2-process': {
          const procId = actionBtn.getAttribute('data-process-id');
          isMobileSidebarOpen = false;
          window.LMS_STORAGE.setActiveView({
            type: 'module-2',
            processId: procId,
            lessonId:
              procId === 'aprende' ? 'leccion-2-1' : undefined,
          });
          window.scrollTo({ top: 0, behavior: 'smooth' });
          break;
        }

        case 'select-mod2-lesson': {
          const lessonId = actionBtn.getAttribute('data-lesson-id');
          isMobileSidebarOpen = false;
          window.LMS_STORAGE.setActiveView({
            type: 'module-2',
            processId: 'aprende',
            lessonId: lessonId,
          });
          window.scrollTo({ top: 0, behavior: 'smooth' });
          break;
        }

        case 'complete-and-next-mod2-lesson': {
          const currLes = actionBtn.getAttribute('data-current-lesson-id');
          const nextLes = actionBtn.getAttribute('data-next-lesson-id');
          window.LMS_STORAGE.markMod2LessonCompleted(currLes, true);
          window.LMS_STORAGE.setActiveView({
            type: 'module-2',
            processId: 'aprende',
            lessonId: nextLes,
          });
          window.scrollTo({ top: 0, behavior: 'smooth' });
          break;
        }

        case 'toggle-mod2-process-completed': {
          const pId = actionBtn.getAttribute('data-process-id');
          window.LMS_STORAGE.toggleMod2ProcessCompleted(pId);
          break;
        }

        case 'complete-and-next-mod2-process': {
          const currId = actionBtn.getAttribute('data-current-process-id');
          const nextId = actionBtn.getAttribute('data-next-process-id');
          window.LMS_STORAGE.toggleMod2ProcessCompleted(currId, true);
          window.LMS_STORAGE.setActiveView({
            type: 'module-2',
            processId: nextId,
            lessonId: nextId === 'aprende' ? 'leccion-2-1' : undefined,
          });
          window.scrollTo({ top: 0, behavior: 'smooth' });
          break;
        }

        case 'toggle-mod2-lesson-completed': {
          const lesId = actionBtn.getAttribute('data-lesson-id');
          window.LMS_STORAGE.markMod2LessonCompleted(lesId);
          break;
        }

        case 'select-mod2-inicia-option': {
          const optId = actionBtn.getAttribute('data-option-id');
          window.LMS_STORAGE.selectMod2IniciaOption(optId);
          break;
        }

        case 'select-mod2-nist-fn': {
          const fnCode = actionBtn.getAttribute('data-fn-code');
          window.LMS_STORAGE.setMod2NistFnCode(fnCode);
          break;
        }

        case 'select-mod2-hierarchy': {
          const hId = actionBtn.getAttribute('data-hierarchy-id');
          window.LMS_STORAGE.setMod2HierarchyId(hId);
          break;
        }

        case 'select-mod2-timeline': {
          const tId = actionBtn.getAttribute('data-timeline-id');
          window.LMS_STORAGE.setMod2TimelineId(tId);
          break;
        }

        case 'answer-mod2-observa-checkpoint': {
          const vId = actionBtn.getAttribute('data-video-id');
          const oIdx = Number(actionBtn.getAttribute('data-option-index'));
          window.LMS_STORAGE.saveMod2ObservaCheckpoint(vId, oIdx);
          break;
        }

        case 'select-mod2-profile-step': {
          const sNum = Number(actionBtn.getAttribute('data-step-number'));
          window.LMS_STORAGE.setMod2ProfileStep(sNum);
          break;
        }

        case 'download-mod2-core-csv':
          downloadMod2CoreCsv();
          break;

        case 'mod2-practica-act1-pick': {
          const itemId = actionBtn.getAttribute('data-item-id');
          const fnCode = actionBtn.getAttribute('data-fn-code');
          window.LMS_STORAGE.saveMod2PracticaAct1Answer(itemId, fnCode);
          break;
        }

        case 'reset-mod2-practica-act1':
          window.LMS_STORAGE.resetMod2PracticaAct1();
          break;

        case 'mod2-practica-act2-pick': {
          const tier = actionBtn.getAttribute('data-tier-level');
          window.LMS_STORAGE.selectMod2PracticaAct2Tier(tier);
          break;
        }

        case 'reset-mod2-practica-act2':
          window.LMS_STORAGE.resetMod2PracticaAct2();
          break;

        case 'select-mod2-aplica-option': {
          const optId = actionBtn.getAttribute('data-option-id');
          window.LMS_STORAGE.selectMod2AplicaOption(optId);
          break;
        }

        case 'select-mod2-quiz-answer': {
          const qId = actionBtn.getAttribute('data-question-id');
          const oIdx = Number(actionBtn.getAttribute('data-option-index'));
          window.LMS_STORAGE.saveMod2QuizAnswer(qId, oIdx);
          break;
        }

        case 'submit-mod2-quiz': {
          const state = window.LMS_STORAGE.getState();
          const questions =
            window.LMS_DATA.MODULE_2_DATA.comprueba.questions || [];
          let correct = 0;
          questions.forEach((q) => {
            if (state.mod2QuizAnswers[q.id] === q.correctIndex) {
              correct += 1;
            }
          });
          const score =
            questions.length > 0
              ? Math.round((correct / questions.length) * 100)
              : 100;
          const passed =
            score >= (window.LMS_DATA.MODULE_2_DATA.comprueba.passingScore || 70);
          window.LMS_STORAGE.submitMod2Quiz(score, passed);
          break;
        }

        case 'reset-mod2-quiz':
          window.LMS_STORAGE.resetMod2Quiz();
          break;

        case 'select-mod2-recuerda-pillar': {
          const pId = actionBtn.getAttribute('data-pillar-id');
          window.LMS_STORAGE.setMod2RecuerdaPillar(pId);
          break;
        }

        case 'complete-all-module-2':
          window.LMS_STORAGE.completeAllModule2();
          break;

        // --- ACCIONES MÓDULO 3 (CIS CONTROLS v8.1) ---
        case 'select-mod3-process': {
          const procId = actionBtn.getAttribute('data-process-id');
          isMobileSidebarOpen = false;
          window.LMS_STORAGE.setActiveView({
            type: 'module-3',
            processId: procId,
            lessonId: procId === 'aprende' ? 'leccion-3-1' : undefined,
          });
          window.scrollTo({ top: 0, behavior: 'smooth' });
          break;
        }

        case 'select-mod3-lesson': {
          const lessonId = actionBtn.getAttribute('data-lesson-id');
          isMobileSidebarOpen = false;
          window.LMS_STORAGE.setActiveView({
            type: 'module-3',
            processId: 'aprende',
            lessonId: lessonId,
          });
          window.scrollTo({ top: 0, behavior: 'smooth' });
          break;
        }

        case 'complete-and-next-mod3-lesson': {
          const currLes = actionBtn.getAttribute('data-current-lesson-id');
          const nextLes = actionBtn.getAttribute('data-next-lesson-id');
          window.LMS_STORAGE.markMod3LessonCompleted(currLes, true);
          window.LMS_STORAGE.setActiveView({
            type: 'module-3',
            processId: 'aprende',
            lessonId: nextLes,
          });
          window.scrollTo({ top: 0, behavior: 'smooth' });
          break;
        }

        case 'toggle-mod3-process-completed': {
          const pId = actionBtn.getAttribute('data-process-id');
          window.LMS_STORAGE.toggleMod3ProcessCompleted(pId);
          break;
        }

        case 'complete-and-next-mod3-process': {
          const currId = actionBtn.getAttribute('data-current-process-id');
          const nextId = actionBtn.getAttribute('data-next-process-id');
          window.LMS_STORAGE.toggleMod3ProcessCompleted(currId, true);
          window.LMS_STORAGE.setActiveView({
            type: 'module-3',
            processId: nextId,
            lessonId: nextId === 'aprende' ? 'leccion-3-1' : undefined,
          });
          window.scrollTo({ top: 0, behavior: 'smooth' });
          break;
        }

        case 'toggle-mod3-lesson-completed': {
          const lesId = actionBtn.getAttribute('data-lesson-id');
          window.LMS_STORAGE.markMod3LessonCompleted(lesId);
          break;
        }

        case 'select-mod3-inicia-option': {
          const optId = actionBtn.getAttribute('data-option-id');
          window.LMS_STORAGE.selectMod3IniciaOption(optId);
          break;
        }

        case 'filter-mod3-controls-group': {
          const grp = actionBtn.getAttribute('data-group');
          window.LMS_STORAGE.setMod3ControlsGroupFilter(grp);
          break;
        }

        case 'answer-mod3-observa-checkpoint': {
          const vId = actionBtn.getAttribute('data-video-id');
          const oIdx = Number(actionBtn.getAttribute('data-option-index'));
          window.LMS_STORAGE.saveMod3ObservaCheckpoint(vId, oIdx);
          break;
        }

        case 'select-mod3-ig1-phase': {
          const phNum = Number(actionBtn.getAttribute('data-phase-number'));
          window.LMS_STORAGE.setMod3Ig1Phase(phNum);
          break;
        }

        case 'filter-mod3-checklist-ig': {
          const ig = actionBtn.getAttribute('data-ig');
          window.LMS_STORAGE.setMod3ChecklistIgFilter(ig);
          break;
        }

        case 'download-mod3-checklist-csv':
          downloadMod3ChecklistCsv();
          break;

        case 'mod3-practica-act1-pick': {
          const itemId = actionBtn.getAttribute('data-item-id');
          const igGroup = actionBtn.getAttribute('data-ig-group');
          window.LMS_STORAGE.saveMod3PracticaAct1Answer(itemId, igGroup);
          break;
        }

        case 'reset-mod3-practica-act1':
          window.LMS_STORAGE.resetMod3PracticaAct1();
          break;

        case 'mod3-seq-move': {
          const idx = Number(actionBtn.getAttribute('data-index'));
          const dir = Number(actionBtn.getAttribute('data-direction'));
          window.LMS_STORAGE.moveMod3SequencerItem(idx, dir);
          break;
        }

        case 'check-mod3-sequencer':
          window.LMS_STORAGE.checkMod3Sequencer();
          break;

        case 'reset-mod3-sequencer':
          window.LMS_STORAGE.resetMod3Sequencer();
          break;

        case 'select-mod3-aplica-option': {
          const optId = actionBtn.getAttribute('data-option-id');
          window.LMS_STORAGE.selectMod3AplicaOption(optId);
          break;
        }

        case 'select-mod3-quiz-answer': {
          const qId = actionBtn.getAttribute('data-question-id');
          const oIdx = Number(actionBtn.getAttribute('data-option-index'));
          window.LMS_STORAGE.saveMod3QuizAnswer(qId, oIdx);
          break;
        }

        case 'submit-mod3-quiz': {
          const state = window.LMS_STORAGE.getState();
          const questions =
            window.LMS_DATA.MODULE_3_DATA.comprueba.questions || [];
          let correct = 0;
          questions.forEach((q) => {
            if (state.mod3QuizAnswers[q.id] === q.correctIndex) {
              correct += 1;
            }
          });
          const score =
            questions.length > 0
              ? Math.round((correct / questions.length) * 100)
              : 100;
          const passed =
            score >= (window.LMS_DATA.MODULE_3_DATA.comprueba.passingScore || 70);
          window.LMS_STORAGE.submitMod3Quiz(score, passed);
          break;
        }

        case 'reset-mod3-quiz':
          window.LMS_STORAGE.resetMod3Quiz();
          break;

        case 'select-mod3-recuerda-pillar': {
          const pId = actionBtn.getAttribute('data-pillar-id');
          window.LMS_STORAGE.setMod3RecuerdaPillar(pId);
          break;
        }

        case 'complete-all-module-3':
          window.LMS_STORAGE.completeAllModule3();
          break;

        // --- NAVEGACIÓN Y ACCIONES MÓDULO 4 ---
        case 'select-mod4-process': {
          const procId = actionBtn.getAttribute('data-process-id');
          isMobileSidebarOpen = false;
          window.LMS_STORAGE.setActiveView({
            type: 'module-4',
            processId: procId,
            lessonId: procId === 'aprende' ? 'leccion-4-1' : undefined,
          });
          window.scrollTo({ top: 0, behavior: 'smooth' });
          break;
        }

        case 'select-mod4-lesson': {
          const lesId = actionBtn.getAttribute('data-lesson-id');
          isMobileSidebarOpen = false;
          window.LMS_STORAGE.setActiveView({
            type: 'module-4',
            processId: 'aprende',
            lessonId: lesId,
          });
          window.scrollTo({ top: 0, behavior: 'smooth' });
          break;
        }

        case 'complete-and-next-mod4-lesson': {
          const currLes = actionBtn.getAttribute('data-current-lesson');
          const nextLes = actionBtn.getAttribute('data-next-lesson');
          window.LMS_STORAGE.markMod4LessonCompleted(currLes, true);
          window.LMS_STORAGE.setActiveView({
            type: 'module-4',
            processId: 'aprende',
            lessonId: nextLes,
          });
          window.scrollTo({ top: 0, behavior: 'smooth' });
          break;
        }

        case 'toggle-mod4-process-completed': {
          const pId = actionBtn.getAttribute('data-process-id');
          window.LMS_STORAGE.toggleMod4ProcessCompleted(pId);
          break;
        }

        case 'complete-and-next-mod4-process': {
          const currId = actionBtn.getAttribute('data-current-process');
          const nextId = actionBtn.getAttribute('data-next-process');
          window.LMS_STORAGE.toggleMod4ProcessCompleted(currId, true);
          window.LMS_STORAGE.setActiveView({
            type: 'module-4',
            processId: nextId,
            lessonId: nextId === 'aprende' ? 'leccion-4-1' : undefined,
          });
          window.scrollTo({ top: 0, behavior: 'smooth' });
          break;
        }

        case 'toggle-mod4-lesson-completed': {
          const lesId = actionBtn.getAttribute('data-lesson-id');
          window.LMS_STORAGE.markMod4LessonCompleted(lesId);
          break;
        }

        case 'select-mod4-matrix-domain': {
          const domId = actionBtn.getAttribute('data-domain-id');
          window.LMS_STORAGE.setMod4MatrixDomainId(domId);
          break;
        }

        case 'select-mod4-inicia-option': {
          const optId = actionBtn.getAttribute('data-option-id');
          window.LMS_STORAGE.selectMod4IniciaOption(optId);
          break;
        }

        case 'answer-mod4-observa-checkpoint': {
          const vId = actionBtn.getAttribute('data-video-id');
          const oIdx = actionBtn.getAttribute('data-option-index');
          window.LMS_STORAGE.saveMod4ObservaCheckpoint(vId, oIdx);
          break;
        }

        case 'select-mod4-reading-tab': {
          const tId = actionBtn.getAttribute('data-tab-id');
          window.LMS_STORAGE.setMod4ReadingTabId(tId);
          break;
        }

        case 'download-mod4-matrix-csv':
          downloadMod4MatrixCsv();
          break;

        case 'mod4-practica-act1-pick': {
          const chId = actionBtn.getAttribute('data-challenge-id');
          const optId = actionBtn.getAttribute('data-option-id');
          window.LMS_STORAGE.saveMod4PracticaAct1Answer(chId, optId);
          break;
        }

        case 'reset-mod4-practica-act1':
          window.LMS_STORAGE.resetMod4PracticaAct1();
          break;

        case 'mod4-practica-act2-pick': {
          const gId = actionBtn.getAttribute('data-gap-id');
          const fw = actionBtn.getAttribute('data-framework');
          window.LMS_STORAGE.saveMod4PracticaAct2Answer(gId, fw);
          break;
        }

        case 'reset-mod4-practica-act2':
          window.LMS_STORAGE.resetMod4PracticaAct2();
          break;

        case 'select-mod4-aplica-option': {
          const optId = actionBtn.getAttribute('data-option-id');
          window.LMS_STORAGE.selectMod4AplicaOption(optId);
          break;
        }

        case 'select-mod4-quiz-answer': {
          const qId = actionBtn.getAttribute('data-question-id');
          const oIdx = actionBtn.getAttribute('data-option-index');
          window.LMS_STORAGE.saveMod4QuizAnswer(qId, oIdx);
          break;
        }

        case 'submit-mod4-quiz': {
          const state = window.LMS_STORAGE.getState();
          const questions = window.LMS_DATA.MODULE_4_DATA.comprueba.questions;
          let correct = 0;
          questions.forEach((q) => {
            if (state.mod4QuizAnswers[q.id] === q.correctIndex) {
              correct += 1;
            }
          });
          const score = Math.round((correct / questions.length) * 100);
          const passed =
            score >= window.LMS_DATA.MODULE_4_DATA.comprueba.passingScore;
          window.LMS_STORAGE.submitMod4Quiz(score, passed);
          break;
        }

        case 'reset-mod4-quiz':
          window.LMS_STORAGE.resetMod4Quiz();
          break;

        case 'select-mod4-recuerda-pillar': {
          const pId = actionBtn.getAttribute('data-pillar-id');
          window.LMS_STORAGE.setMod4RecuerdaPillar(pId);
          break;
        }

        case 'complete-all-module-4':
          window.LMS_STORAGE.completeAllModule4();
          break;

        // --- EVALUACIÓN FINAL Y CIERRE (SECCIONES VII Y VIII) ---
        case 'select-final-exam':
          isMobileSidebarOpen = false;
          window.LMS_STORAGE.setActiveView({ type: 'final-exam' });
          window.scrollTo({ top: 0, behavior: 'smooth' });
          break;

        case 'select-final-exam-answer': {
          const qId = actionBtn.getAttribute('data-question-id');
          const oIdx = actionBtn.getAttribute('data-option-index');
          window.LMS_STORAGE.saveFinalExamAnswer(qId, oIdx);
          break;
        }

        case 'submit-final-exam': {
          const st = window.LMS_STORAGE.getState();
          const questions = window.LMS_DATA.FINAL_EXAM_DATA.questions;
          let correct = 0;
          questions.forEach((q) => {
            if (st.finalExamAnswers[q.id] === q.correctIndex) {
              correct += 1;
            }
          });
          const score = Math.round((correct / questions.length) * 100);
          const passed =
            score >= window.LMS_DATA.FINAL_EXAM_DATA.passingScore;
          window.LMS_STORAGE.submitFinalExam(score, passed);
          break;
        }

        case 'reset-final-exam':
          window.LMS_STORAGE.resetFinalExam();
          break;

        case 'select-closure':
          isMobileSidebarOpen = false;
          window.LMS_STORAGE.setActiveView({ type: 'closure' });
          window.scrollTo({ top: 0, behavior: 'smooth' });
          break;

        case 'select-closure-layer': {
          const lId = actionBtn.getAttribute('data-layer-id');
          window.LMS_STORAGE.setClosureSelectedLayer(lId);
          break;
        }

        case 'download-closure-bundle-csv':
          downloadClosureBundleCsv();
          break;

        case 'set-survey-rating': {
          const field = actionBtn.getAttribute('data-field');
          const stars = actionBtn.getAttribute('data-stars');
          window.LMS_STORAGE.setSurveyRating(field, stars);
          break;
        }

        case 'submit-closure-survey':
          window.LMS_STORAGE.submitSatisfactionSurvey();
          break;

        case 'toggle-closure-instructor-preview':
          window.LMS_STORAGE.toggleClosureInstructorPreview();
          break;

        case 'print-closure-diploma':
          window.LMS_STORAGE.markClosureCompleted();
          window.print();
          break;

        // --- MODAL DE CERTIFICADO ---
        case 'open-certificate-modal':
          isCertificateModalOpen = true;
          renderApp();
          break;

        case 'close-certificate-modal':
          isCertificateModalOpen = false;
          renderApp();
          break;

        case 'print-certificate':
          window.print();
          break;

        case 'reset-all-progress':
          if (
            window.confirm(
              '¿Deseas reiniciar todo el progreso guardado en localStorage?'
            )
          ) {
            window.LMS_STORAGE.resetAllProgress();
            isCertificateModalOpen = false;
            renderApp();
          }
          break;

        default:
          break;
      }
    });

    document.addEventListener('input', function (e) {
      if (e.target && e.target.id === 'input-student-name') {
        const val = e.target.value;
        window.LMS_STORAGE.setStudentName(val);
        const nameDisplay = document.getElementById(
          'certificate-student-name-display'
        );
        if (nameDisplay) {
          nameDisplay.textContent = val || 'Estudiante G4-CIBER';
        }
        return;
      }

      if (
        e.target &&
        e.target.getAttribute('data-action') === 'closure-student-name-input'
      ) {
        const val = e.target.value;
        window.LMS_STORAGE.setStudentName(val);
        const diplomaDisplay = document.getElementById(
          'closure-diploma-name-display'
        );
        if (diplomaDisplay) {
          diplomaDisplay.textContent =
            val.trim() || 'Participante G4-CIBER-2026';
        }
        return;
      }

      if (
        e.target &&
        e.target.getAttribute('data-action') === 'closure-survey-comments-input'
      ) {
        window.LMS_STORAGE.setSurveyComments(e.target.value);
        return;
      }

      if (
        e.target &&
        e.target.getAttribute('data-action') === 'lesson-note-input'
      ) {
        const lesId = e.target.getAttribute('data-lesson-id');
        window.LMS_STORAGE.saveLessonNote(lesId, e.target.value);
        return;
      }

      if (
        e.target &&
        e.target.getAttribute('data-action') === 'mod2-lesson-note-input'
      ) {
        const lesId = e.target.getAttribute('data-lesson-id');
        window.LMS_STORAGE.saveMod2LessonNote(lesId, e.target.value);
        return;
      }

      if (
        e.target &&
        e.target.getAttribute('data-action') === 'mod3-lesson-note-input'
      ) {
        const lesId = e.target.getAttribute('data-lesson-id');
        window.LMS_STORAGE.saveMod3LessonNote(lesId, e.target.value);
        return;
      }

      if (
        e.target &&
        e.target.getAttribute('data-action') === 'mod4-lesson-note-input'
      ) {
        const lesId = e.target.getAttribute('data-lesson-id');
        window.LMS_STORAGE.saveMod4LessonNote(lesId, e.target.value);
        return;
      }

      if (
        e.target &&
        e.target.getAttribute('data-action') === 'mod3-controls-search'
      ) {
        const pos = e.target.selectionStart || 0;
        window.LMS_STORAGE.setMod3ControlsSearch(e.target.value);
        const inp = document.getElementById('mod3-controls-search-input');
        if (inp) {
          inp.focus();
          inp.setSelectionRange(pos, pos);
        }
      }
    });

    document.addEventListener('submit', function (e) {
      if (e.target && e.target.id === 'form-register-participant') {
        e.preventDefault();
        const fullName =
          (document.getElementById('reg-fullname') || {}).value || '';
        const dni = (document.getElementById('reg-dni') || {}).value || '';
        const email = (document.getElementById('reg-email') || {}).value || '';
        const organization =
          (document.getElementById('reg-org') || {}).value || '';

        if (!fullName.trim() || fullName.trim().length < 3) {
          uiState.formError =
            'Ingresa tu nombre completo (tal como aparecerá en el certificado).';
          renderApp();
          return;
        }
        if (!dni.trim() || dni.trim().length < 6) {
          uiState.formError =
            'Ingresa un número de DNI o documento de identidad válido.';
          renderApp();
          return;
        }

        const created = window.LMS_STORAGE.createParticipantProfile({
          fullName: fullName.trim(),
          dni: dni.trim(),
          email: email.trim(),
          organization: organization.trim(),
        });

        uiState.formError = '';
        uiState.generatedAccessId =
          created && typeof created === 'object' ? created.accessId : created;
        uiState.lastRegisteredMeta = {
          fullName: fullName.trim(),
          dni: dni.trim(),
        };
        renderApp();
        return;
      }

      if (e.target && e.target.id === 'form-login-id') {
        e.preventDefault();
        const rawId =
          (document.getElementById('login-access-id') || {}).value || '';
        const res = window.LMS_STORAGE.loginWithAccessId(rawId);
        if (res && res.ok) {
          uiState.loginError = '';
          uiState.formError = '';
          uiState.generatedAccessId = null;
          uiState.lastRegisteredMeta = null;
          renderApp();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          uiState.loginError =
            (res && res.error) ||
            'ID no encontrado. Verifica el código (ej. G4-2026-4812) o regístrate primero.';
          renderApp();
        }
      }
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    window.LMS_STORAGE.subscribe(renderApp);
    setupEventListeners();
    renderApp();
  });
})();

/**
 * ============================================================================
 * GESTOR DE PROGRESO EN LOCALSTORAGE: src/js/storage.js
 * Persiste procesos completados (Módulo 1 y Módulo 2), sub-lecciones,
 * respuestas de laboratorios, simuladores, notas de cuestionario y apuntes.
 * ============================================================================
 */

(function () {
  const STORAGE_KEY = 'g4_ciber_2026_local_static_progress_v2';
  const REGISTRY_KEY = 'g4_ciber_2026_local_profiles_registry_v1';
  const ACTIVE_ID_KEY = 'g4_ciber_2026_local_active_id_v1';

  const DEFAULT_STATE = {
    activeView: {
      type: 'dashboard', // 'dashboard' | 'section-0' | 'module-1' | 'module-2' | 'module-3' | 'module-4' | 'final-exam' | 'closure'
      processId: 'inicia',
      lessonId: 'leccion-1-1',
    },
    sectionZeroCompleted: false,
    activeOrientationCardId: 'como-funciona',
    diagnosticAnswers: {},

    // MÓDULO 1
    completedProcesses: {
      inicia: false,
      aprende: false,
      observa: false,
      explora: false,
      practica: false,
      aplica: false,
      comprueba: false,
      recuerda: false,
    },
    completedLessons: {
      'leccion-1-1': false,
      'leccion-1-2': false,
      'leccion-1-3': false,
      'leccion-1-4': false,
    },
    lessonNotes: {
      'leccion-1-1': '',
      'leccion-1-2': '',
      'leccion-1-3': '',
      'leccion-1-4': '',
    },
    selectedClauseNumber: 'Cláusula 4',
    showOnlySyllabusFeaturedControls: false,
    selectedHashtagFilter: 'TODOS',
    iniciaSelectedOption: null,
    activeSoaStep: 1,
    expandedNcCaseIds: {
      'nc-1': true,
      'nc-2': false,
      'nc-3': false,
      'nc-4': false,
    },
    observaCheckpoints: {},
    soaDownloaded: false,
    practicaAct1Answers: {},
    practicaAct2Answers: {},
    aplicaSelectedOption: null,
    quizAnswers: {},
    quizSubmitted: false,
    quizScore: null,
    selectedRecuerdaPillarId: 'pilar-1',
    module1CompletedBanner: false,

    // MÓDULO 2 (NIST CSF 2.0)
    completedProcessesMod2: {
      inicia: false,
      aprende: false,
      observa: false,
      explora: false,
      practica: false,
      aplica: false,
      comprueba: false,
      recuerda: false,
    },
    completedLessonsMod2: {
      'leccion-2-1': false,
      'leccion-2-2': false,
      'leccion-2-3': false,
      'leccion-2-4': false,
    },
    lessonNotesMod2: {
      'leccion-2-1': '',
      'leccion-2-2': '',
      'leccion-2-3': '',
      'leccion-2-4': '',
    },
    mod2SelectedNistFnCode: 'GV',
    mod2IniciaSelectedOption: null,
    mod2SelectedHierarchyId: 'hier-pr-aa',
    mod2SelectedTimelineId: 'tl-1',
    mod2ObservaCheckpoints: {},
    mod2ActiveProfileStep: 1,
    mod2CoreMatrixDownloaded: false,
    mod2PracticaAct1Answers: {},
    mod2PracticaAct2SelectedTier: null,
    mod2AplicaSelectedOption: null,
    mod2QuizAnswers: {},
    mod2QuizSubmitted: false,
    mod2QuizScore: null,
    mod2SelectedRecuerdaPillarId: 'm2-pilar-1',
    module2CompletedBanner: false,

    // MÓDULO 3 (CIS CONTROLS v8.1)
    completedProcessesMod3: {
      inicia: false,
      aprende: false,
      observa: false,
      explora: false,
      practica: false,
      aplica: false,
      comprueba: false,
      recuerda: false,
    },
    completedLessonsMod3: {
      'leccion-3-1': false,
      'leccion-3-2': false,
      'leccion-3-3': false,
      'leccion-3-4': false,
    },
    lessonNotesMod3: {
      'leccion-3-1': '',
      'leccion-3-2': '',
      'leccion-3-3': '',
      'leccion-3-4': '',
    },
    mod3ControlsGroupFilter: 'TODOS',
    mod3ControlsSearch: '',
    mod3IniciaSelectedOption: null,
    mod3ObservaCheckpoints: {},
    mod3ActiveIg1Phase: 1,
    mod3ChecklistIgFilter: 'TODOS',
    mod3ChecklistDownloaded: false,
    mod3PracticaAct1Answers: {},
    mod3SequencerOrder: ['seq-3', 'seq-1', 'seq-5', 'seq-2', 'seq-4'],
    mod3SequencerChecked: false,
    mod3AplicaSelectedOption: null,
    mod3QuizAnswers: {},
    mod3QuizSubmitted: false,
    mod3QuizScore: null,
    mod3SelectedRecuerdaPillarId: 'm3-pilar-1',
    module3CompletedBanner: false,

    // MÓDULO 4 (INTEGRACIÓN Y MAPEO ISO-NIST-CIS)
    completedProcessesMod4: {
      inicia: false,
      aprende: false,
      observa: false,
      explora: false,
      practica: false,
      aplica: false,
      comprueba: false,
      recuerda: false,
    },
    completedLessonsMod4: {
      'leccion-4-1': false,
      'leccion-4-2': false,
      'leccion-4-3': false,
      'leccion-4-4': false,
      'leccion-4-5': false,
    },
    lessonNotesMod4: {
      'leccion-4-1': '',
      'leccion-4-2': '',
      'leccion-4-3': '',
      'leccion-4-4': '',
      'leccion-4-5': '',
    },
    mod4SelectedMatrixDomainId: 'dom-backups',
    mod4IniciaSelectedOption: null,
    mod4ObservaCheckpoints: {},
    mod4ReadingTabId: 'eq-directa',
    mod4MatrixDownloaded: false,
    mod4PracticaAct1Answers: {},
    mod4PracticaAct2Answers: {},
    mod4AplicaSelectedOption: null,
    mod4QuizAnswers: {},
    mod4QuizSubmitted: false,
    mod4QuizScore: null,
    mod4SelectedRecuerdaPillarId: 'm4-pilar-1',
    module4CompletedBanner: false,

    // EVALUACIÓN FINAL Y CIERRE (SECCIONES VII Y VIII)
    finalExamAnswers: {},
    finalExamSubmitted: false,
    finalExamScore: null,
    finalExamCompleted: false,
    closureSelectedLayerId: 'layer-iso',
    closureBundleDownloaded: false,
    closureInstructorPreview: false,
    closureCompleted: false,
    satisfactionSurvey: {
      didacticQuality: 0,
      labsUtility: 0,
      navigationExperience: 0,
      comments: '',
      submitted: false,
      submittedAt: null,
    },
    certificateVerificationCode: 'CERT-G4-2026-7492',

    isRegistered: false,
    accessId: '',
    studentName: 'Estudiante G4-CIBER',
    studentDni: '',
    studentEmail: '',
    studentOrganization: '',
    registeredAt: '',
    customVideoUrls: {},
    desktopSidebarCollapsed: false,
    dashboardExpandedStage: 2,
    sidebarExpanded: {
      module1: true,
      aprendeSubmenu: true,
      module2: true,
      mod2AprendeSubmenu: true,
      module3: true,
      mod3AprendeSubmenu: true,
      module4: true,
      mod4AprendeSubmenu: true,
      lockedModuleId: 'evaluacion-final',
    },
  };

  function cloneDefaultState() {
    return JSON.parse(JSON.stringify(DEFAULT_STATE));
  }

  function mergeWithDefault(parsed) {
    const def = cloneDefaultState();
    return {
      ...def,
      ...parsed,
      activeView: {
        ...def.activeView,
        ...(parsed.activeView || {}),
      },
      completedProcesses: {
        ...def.completedProcesses,
        ...(parsed.completedProcesses || {}),
      },
      completedLessons: {
        ...def.completedLessons,
        ...(parsed.completedLessons || {}),
      },
      lessonNotes: {
        ...def.lessonNotes,
        ...(parsed.lessonNotes || {}),
      },
      expandedNcCaseIds: {
        ...def.expandedNcCaseIds,
        ...(parsed.expandedNcCaseIds || {}),
      },
      completedProcessesMod2: {
        ...def.completedProcessesMod2,
        ...(parsed.completedProcessesMod2 || {}),
      },
      completedLessonsMod2: {
        ...def.completedLessonsMod2,
        ...(parsed.completedLessonsMod2 || {}),
      },
      lessonNotesMod2: {
        ...def.lessonNotesMod2,
        ...(parsed.lessonNotesMod2 || {}),
      },
      completedProcessesMod3: {
        ...def.completedProcessesMod3,
        ...(parsed.completedProcessesMod3 || {}),
      },
      completedLessonsMod3: {
        ...def.completedLessonsMod3,
        ...(parsed.completedLessonsMod3 || {}),
      },
      lessonNotesMod3: {
        ...def.lessonNotesMod3,
        ...(parsed.lessonNotesMod3 || {}),
      },
      completedProcessesMod4: {
        ...def.completedProcessesMod4,
        ...(parsed.completedProcessesMod4 || {}),
      },
      completedLessonsMod4: {
        ...def.completedLessonsMod4,
        ...(parsed.completedLessonsMod4 || {}),
      },
      lessonNotesMod4: {
        ...def.lessonNotesMod4,
        ...(parsed.lessonNotesMod4 || {}),
      },
      satisfactionSurvey: {
        ...def.satisfactionSurvey,
        ...(parsed.satisfactionSurvey || {}),
      },
      customVideoUrls: {
        ...def.customVideoUrls,
        ...(parsed.customVideoUrls || {}),
      },
      sidebarExpanded: {
        ...def.sidebarExpanded,
        ...(parsed.sidebarExpanded || {}),
      },
    };
  }

  function readRegistry() {
    try {
      const raw = window.localStorage.getItem(REGISTRY_KEY);
      if (!raw) return {};
      return JSON.parse(raw) || {};
    } catch (e) {
      return {};
    }
  }

  function writeRegistry(registry) {
    try {
      window.localStorage.setItem(REGISTRY_KEY, JSON.stringify(registry));
    } catch (e) {
      // ignore quota errors
    }
  }

  function loadState() {
    try {
      const registry = readRegistry();
      const activeId = window.localStorage.getItem(ACTIVE_ID_KEY);
      if (activeId && registry[activeId]) {
        return mergeWithDefault({ ...registry[activeId], isRegistered: true });
      }
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return cloneDefaultState();
      const parsed = JSON.parse(raw);
      if (parsed && parsed.isRegistered && parsed.accessId) {
        const merged = mergeWithDefault(parsed);
        registry[parsed.accessId] = merged;
        writeRegistry(registry);
        window.localStorage.setItem(ACTIVE_ID_KEY, parsed.accessId);
        return merged;
      }
      return cloneDefaultState();
    } catch (err) {
      console.warn('Error leyendo localStorage, usando estado inicial:', err);
      return cloneDefaultState();
    }
  }

  let currentState = loadState();
  const listeners = [];

  function syncActiveProfileToRegistry() {
    if (currentState.isRegistered && currentState.accessId) {
      const reg = readRegistry();
      reg[currentState.accessId] = currentState;
      writeRegistry(reg);
      try {
        window.localStorage.setItem(ACTIVE_ID_KEY, currentState.accessId);
      } catch (e) {
        // ignore
      }
    }
  }

  function saveState() {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(currentState));
      syncActiveProfileToRegistry();
    } catch (err) {
      console.warn('No se pudo guardar en localStorage:', err);
    }
    listeners.forEach((fn) => fn(currentState));
  }

  function getMetrics() {
    const completedProcessesCount = Object.values(
      currentState.completedProcesses
    ).filter(Boolean).length;
    const completedProcessesMod2Count = Object.values(
      currentState.completedProcessesMod2
    ).filter(Boolean).length;
    const completedProcessesMod3Count = Object.values(
      currentState.completedProcessesMod3
    ).filter(Boolean).length;
    const completedProcessesMod4Count = Object.values(
      currentState.completedProcessesMod4
    ).filter(Boolean).length;
    const totalTrackableUnits = 35; // Sec 0 (1) + Mód 1-4 (32) + Eval Final (1) + Cierre (1)
    const completedUnits =
      (currentState.sectionZeroCompleted ? 1 : 0) +
      completedProcessesCount +
      completedProcessesMod2Count +
      completedProcessesMod3Count +
      completedProcessesMod4Count +
      (currentState.finalExamCompleted ? 1 : 0) +
      (currentState.closureCompleted ? 1 : 0);
    const progressPercentage = Math.round(
      (completedUnits / totalTrackableUnits) * 100
    );

    return {
      completedProcessesCount,
      completedProcessesMod2Count,
      completedProcessesMod3Count,
      completedProcessesMod4Count,
      totalTrackableUnits,
      completedUnits,
      progressPercentage,
    };
  }

  window.LMS_STORAGE = {
    getState: function () {
      return currentState;
    },

    getMetrics: getMetrics,

    subscribe: function (callback) {
      listeners.push(callback);
    },

    setActiveView: function (viewObj) {
      currentState.activeView = {
        ...currentState.activeView,
        ...viewObj,
      };
      saveState();
    },

    setOrientationCard: function (cardId) {
      currentState.activeOrientationCardId = cardId;
      saveState();
    },

    saveDiagnosticAnswer: function (questionId, optionIndex) {
      currentState.diagnosticAnswers[questionId] = optionIndex;
      saveState();
    },

    markSectionZeroCompleted: function (completed) {
      currentState.sectionZeroCompleted =
        typeof completed === 'boolean' ? completed : true;
      saveState();
    },

    toggleSidebarSection: function (key, value) {
      if (key === 'lockedModuleId') {
        currentState.sidebarExpanded.lockedModuleId =
          currentState.sidebarExpanded.lockedModuleId === value ? null : value;
      } else {
        currentState.sidebarExpanded[key] =
          typeof value === 'boolean'
            ? value
            : !currentState.sidebarExpanded[key];
      }
      saveState();
    },

    // --- MÓDULO 1 ---
    toggleProcessCompleted: function (processId, forceVal) {
      const nextVal =
        typeof forceVal === 'boolean'
          ? forceVal
          : !currentState.completedProcesses[processId];
      currentState.completedProcesses[processId] = nextVal;
      saveState();
    },

    markLessonCompleted: function (lessonId, forceVal) {
      currentState.completedLessons[lessonId] =
        typeof forceVal === 'boolean'
          ? forceVal
          : !currentState.completedLessons[lessonId];
      const allDone = Object.values(currentState.completedLessons).every(Boolean);
      if (allDone) {
        currentState.completedProcesses.aprende = true;
      }
      saveState();
    },

    saveLessonNote: function (lessonId, text) {
      currentState.lessonNotes[lessonId] = text;
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(currentState));
      } catch (e) {
        // Silencioso durante escritura
      }
    },

    setSelectedClause: function (clauseNumber) {
      currentState.selectedClauseNumber = clauseNumber;
      saveState();
    },

    setSyllabusFeaturedFilter: function (onlyFeatured) {
      currentState.showOnlySyllabusFeaturedControls = Boolean(onlyFeatured);
      saveState();
    },

    setHashtagFilter: function (tag) {
      currentState.selectedHashtagFilter = tag;
      saveState();
    },

    selectIniciaOption: function (optionId) {
      currentState.iniciaSelectedOption = optionId;
      saveState();
    },

    setActiveSoaStep: function (stepNum) {
      currentState.activeSoaStep = Number(stepNum);
      saveState();
    },

    toggleNcCaseAccordion: function (caseId) {
      currentState.expandedNcCaseIds[caseId] =
        !currentState.expandedNcCaseIds[caseId];
      saveState();
    },

    saveObservaCheckpoint: function (videoId, optionIndex) {
      currentState.observaCheckpoints[videoId] = Number(optionIndex);
      saveState();
    },

    markSoaDownloaded: function () {
      currentState.soaDownloaded = true;
      saveState();
    },

    savePracticaAct1Answer: function (itemId, domain) {
      currentState.practicaAct1Answers[itemId] = domain;
      saveState();
    },

    resetPracticaAct1: function () {
      currentState.practicaAct1Answers = {};
      saveState();
    },

    savePracticaAct2Answer: function (caseId, optionId) {
      currentState.practicaAct2Answers[caseId] = optionId;
      saveState();
    },

    resetPracticaAct2: function () {
      currentState.practicaAct2Answers = {};
      saveState();
    },

    selectAplicaOption: function (optionId) {
      currentState.aplicaSelectedOption = optionId;
      saveState();
    },

    saveQuizAnswer: function (questionId, optionIndex) {
      currentState.quizAnswers[questionId] = Number(optionIndex);
      saveState();
    },

    submitQuiz: function (score, passed) {
      currentState.quizSubmitted = true;
      currentState.quizScore = score;
      if (passed) {
        currentState.completedProcesses.comprueba = true;
      }
      saveState();
    },

    resetQuiz: function () {
      currentState.quizAnswers = {};
      currentState.quizSubmitted = false;
      currentState.quizScore = null;
      saveState();
    },

    setRecuerdaPillar: function (pillarId) {
      currentState.selectedRecuerdaPillarId = pillarId;
      saveState();
    },

    completeAllModule1: function () {
      currentState.sectionZeroCompleted = true;
      Object.keys(currentState.completedProcesses).forEach((k) => {
        currentState.completedProcesses[k] = true;
      });
      Object.keys(currentState.completedLessons).forEach((k) => {
        currentState.completedLessons[k] = true;
      });
      currentState.module1CompletedBanner = true;
      saveState();
    },

    // --- MÓDULO 2 ---
    toggleMod2ProcessCompleted: function (processId, forceVal) {
      const nextVal =
        typeof forceVal === 'boolean'
          ? forceVal
          : !currentState.completedProcessesMod2[processId];
      currentState.completedProcessesMod2[processId] = nextVal;
      saveState();
    },

    markMod2LessonCompleted: function (lessonId, forceVal) {
      currentState.completedLessonsMod2[lessonId] =
        typeof forceVal === 'boolean'
          ? forceVal
          : !currentState.completedLessonsMod2[lessonId];
      const allDone = Object.values(currentState.completedLessonsMod2).every(
        Boolean
      );
      if (allDone) {
        currentState.completedProcessesMod2.aprende = true;
      }
      saveState();
    },

    saveMod2LessonNote: function (lessonId, text) {
      currentState.lessonNotesMod2[lessonId] = text;
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(currentState));
      } catch (e) {
        // Silencioso durante escritura
      }
    },

    setMod2NistFnCode: function (fnCode) {
      currentState.mod2SelectedNistFnCode = fnCode;
      saveState();
    },

    selectMod2IniciaOption: function (optionId) {
      currentState.mod2IniciaSelectedOption = optionId;
      currentState.completedProcessesMod2.inicia = true;
      saveState();
    },

    setMod2HierarchyId: function (hierId) {
      currentState.mod2SelectedHierarchyId = hierId;
      saveState();
    },

    setMod2TimelineId: function (tlId) {
      currentState.mod2SelectedTimelineId = tlId;
      saveState();
    },

    saveMod2ObservaCheckpoint: function (videoId, optionIndex) {
      currentState.mod2ObservaCheckpoints[videoId] = Number(optionIndex);
      saveState();
    },

    setMod2ProfileStep: function (stepNum) {
      currentState.mod2ActiveProfileStep = Number(stepNum);
      saveState();
    },

    markMod2CoreMatrixDownloaded: function () {
      currentState.mod2CoreMatrixDownloaded = true;
      saveState();
    },

    saveMod2PracticaAct1Answer: function (itemId, fnCode) {
      currentState.mod2PracticaAct1Answers[itemId] = fnCode;
      saveState();
    },

    resetMod2PracticaAct1: function () {
      currentState.mod2PracticaAct1Answers = {};
      saveState();
    },

    selectMod2PracticaAct2Tier: function (tier) {
      currentState.mod2PracticaAct2SelectedTier = tier;
      saveState();
    },

    resetMod2PracticaAct2: function () {
      currentState.mod2PracticaAct2SelectedTier = null;
      saveState();
    },

    selectMod2AplicaOption: function (optionId) {
      currentState.mod2AplicaSelectedOption = optionId;
      const opt = (window.LMS_DATA.MODULE_2_DATA.aplica.options || []).find(
        (o) => o.id === optionId
      );
      if (opt && opt.isCorrect) {
        currentState.completedProcessesMod2.aplica = true;
      }
      saveState();
    },

    saveMod2QuizAnswer: function (questionId, optionIndex) {
      currentState.mod2QuizAnswers[questionId] = Number(optionIndex);
      saveState();
    },

    submitMod2Quiz: function (score, passed) {
      currentState.mod2QuizSubmitted = true;
      currentState.mod2QuizScore = score;
      if (passed) {
        currentState.completedProcessesMod2.comprueba = true;
      }
      saveState();
    },

    resetMod2Quiz: function () {
      currentState.mod2QuizAnswers = {};
      currentState.mod2QuizSubmitted = false;
      currentState.mod2QuizScore = null;
      saveState();
    },

    setMod2RecuerdaPillar: function (pillarId) {
      currentState.mod2SelectedRecuerdaPillarId = pillarId;
      saveState();
    },

    completeAllModule2: function () {
      Object.keys(currentState.completedProcessesMod2).forEach((k) => {
        currentState.completedProcessesMod2[k] = true;
      });
      Object.keys(currentState.completedLessonsMod2).forEach((k) => {
        currentState.completedLessonsMod2[k] = true;
      });
      currentState.module2CompletedBanner = true;
      saveState();
    },

    // --- MÓDULO 3 ---
    toggleMod3ProcessCompleted: function (processId, forceVal) {
      const nextVal =
        typeof forceVal === 'boolean'
          ? forceVal
          : !currentState.completedProcessesMod3[processId];
      currentState.completedProcessesMod3[processId] = nextVal;
      saveState();
    },

    markMod3LessonCompleted: function (lessonId, forceVal) {
      currentState.completedLessonsMod3[lessonId] =
        typeof forceVal === 'boolean'
          ? forceVal
          : !currentState.completedLessonsMod3[lessonId];
      const allDone = Object.values(currentState.completedLessonsMod3).every(
        Boolean
      );
      if (allDone) {
        currentState.completedProcessesMod3.aprende = true;
      }
      saveState();
    },

    saveMod3LessonNote: function (lessonId, text) {
      currentState.lessonNotesMod3[lessonId] = text;
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(currentState));
      } catch (e) {
        // Silencioso durante escritura
      }
    },

    setMod3ControlsGroupFilter: function (groupName) {
      currentState.mod3ControlsGroupFilter = groupName;
      saveState();
    },

    setMod3ControlsSearch: function (text) {
      currentState.mod3ControlsSearch = text;
      saveState();
    },

    selectMod3IniciaOption: function (optionId) {
      currentState.mod3IniciaSelectedOption = optionId;
      currentState.completedProcessesMod3.inicia = true;
      saveState();
    },

    saveMod3ObservaCheckpoint: function (videoId, optionIndex) {
      currentState.mod3ObservaCheckpoints[videoId] = Number(optionIndex);
      saveState();
    },

    setMod3Ig1Phase: function (phaseNum) {
      currentState.mod3ActiveIg1Phase = Number(phaseNum);
      saveState();
    },

    setMod3ChecklistIgFilter: function (ig) {
      currentState.mod3ChecklistIgFilter = ig;
      saveState();
    },

    markMod3ChecklistDownloaded: function () {
      currentState.mod3ChecklistDownloaded = true;
      saveState();
    },

    saveMod3PracticaAct1Answer: function (itemId, igGroup) {
      currentState.mod3PracticaAct1Answers[itemId] = igGroup;
      saveState();
    },

    resetMod3PracticaAct1: function () {
      currentState.mod3PracticaAct1Answers = {};
      saveState();
    },

    moveMod3SequencerItem: function (index, direction) {
      const arr = currentState.mod3SequencerOrder.slice();
      const targetIdx = index + direction;
      if (targetIdx < 0 || targetIdx >= arr.length) return;
      const temp = arr[index];
      arr[index] = arr[targetIdx];
      arr[targetIdx] = temp;
      currentState.mod3SequencerOrder = arr;
      currentState.mod3SequencerChecked = false;
      saveState();
    },

    checkMod3Sequencer: function () {
      currentState.mod3SequencerChecked = true;
      saveState();
    },

    resetMod3Sequencer: function () {
      currentState.mod3SequencerOrder = ['seq-3', 'seq-1', 'seq-5', 'seq-2', 'seq-4'];
      currentState.mod3SequencerChecked = false;
      saveState();
    },

    selectMod3AplicaOption: function (optionId) {
      currentState.mod3AplicaSelectedOption = optionId;
      const opt = (window.LMS_DATA.MODULE_3_DATA.aplica.options || []).find(
        (o) => o.id === optionId
      );
      if (opt && opt.isCorrect) {
        currentState.completedProcessesMod3.aplica = true;
      }
      saveState();
    },

    saveMod3QuizAnswer: function (questionId, optionIndex) {
      currentState.mod3QuizAnswers[questionId] = Number(optionIndex);
      saveState();
    },

    submitMod3Quiz: function (score, passed) {
      currentState.mod3QuizSubmitted = true;
      currentState.mod3QuizScore = score;
      if (passed) {
        currentState.completedProcessesMod3.comprueba = true;
      }
      saveState();
    },

    resetMod3Quiz: function () {
      currentState.mod3QuizAnswers = {};
      currentState.mod3QuizSubmitted = false;
      currentState.mod3QuizScore = null;
      saveState();
    },

    setMod3RecuerdaPillar: function (pillarId) {
      currentState.mod3SelectedRecuerdaPillarId = pillarId;
      saveState();
    },

    completeAllModule3: function () {
      Object.keys(currentState.completedProcessesMod3).forEach((k) => {
        currentState.completedProcessesMod3[k] = true;
      });
      Object.keys(currentState.completedLessonsMod3).forEach((k) => {
        currentState.completedLessonsMod3[k] = true;
      });
      currentState.module3CompletedBanner = true;
      saveState();
    },

    // --- MÓDULO 4 ---
    toggleMod4ProcessCompleted: function (processId, forceVal) {
      const nextVal =
        typeof forceVal === 'boolean'
          ? forceVal
          : !currentState.completedProcessesMod4[processId];
      currentState.completedProcessesMod4[processId] = nextVal;
      saveState();
    },

    markMod4LessonCompleted: function (lessonId, forceVal) {
      currentState.completedLessonsMod4[lessonId] =
        typeof forceVal === 'boolean'
          ? forceVal
          : !currentState.completedLessonsMod4[lessonId];
      const allDone = Object.values(currentState.completedLessonsMod4).every(
        Boolean
      );
      if (allDone) {
        currentState.completedProcessesMod4.aprende = true;
      }
      saveState();
    },

    saveMod4LessonNote: function (lessonId, text) {
      currentState.lessonNotesMod4[lessonId] = text;
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(currentState));
      } catch (e) {
        // Silencioso durante escritura
      }
    },

    setMod4MatrixDomainId: function (domainId) {
      currentState.mod4SelectedMatrixDomainId = domainId;
      saveState();
    },

    selectMod4IniciaOption: function (optionId) {
      currentState.mod4IniciaSelectedOption = optionId;
      currentState.completedProcessesMod4.inicia = true;
      saveState();
    },

    saveMod4ObservaCheckpoint: function (videoId, optionIndex) {
      currentState.mod4ObservaCheckpoints[videoId] = Number(optionIndex);
      saveState();
    },

    setMod4ReadingTabId: function (tabId) {
      currentState.mod4ReadingTabId = tabId;
      saveState();
    },

    markMod4MatrixDownloaded: function () {
      currentState.mod4MatrixDownloaded = true;
      saveState();
    },

    saveMod4PracticaAct1Answer: function (challengeId, optionId) {
      currentState.mod4PracticaAct1Answers[challengeId] = optionId;
      saveState();
    },

    resetMod4PracticaAct1: function () {
      currentState.mod4PracticaAct1Answers = {};
      saveState();
    },

    saveMod4PracticaAct2Answer: function (gapCaseId, frameworkName) {
      currentState.mod4PracticaAct2Answers[gapCaseId] = frameworkName;
      saveState();
    },

    resetMod4PracticaAct2: function () {
      currentState.mod4PracticaAct2Answers = {};
      saveState();
    },

    selectMod4AplicaOption: function (optionId) {
      currentState.mod4AplicaSelectedOption = optionId;
      const opt = (window.LMS_DATA.MODULE_4_DATA.aplica.options || []).find(
        (o) => o.id === optionId
      );
      if (opt && opt.isCorrect) {
        currentState.completedProcessesMod4.aplica = true;
      }
      saveState();
    },

    saveMod4QuizAnswer: function (questionId, optionIndex) {
      currentState.mod4QuizAnswers[questionId] = Number(optionIndex);
      saveState();
    },

    submitMod4Quiz: function (score, passed) {
      currentState.mod4QuizSubmitted = true;
      currentState.mod4QuizScore = score;
      if (passed) {
        currentState.completedProcessesMod4.comprueba = true;
      }
      saveState();
    },

    resetMod4Quiz: function () {
      currentState.mod4QuizAnswers = {};
      currentState.mod4QuizSubmitted = false;
      currentState.mod4QuizScore = null;
      saveState();
    },

    setMod4RecuerdaPillar: function (pillarId) {
      currentState.mod4SelectedRecuerdaPillarId = pillarId;
      saveState();
    },

    completeAllModule4: function () {
      Object.keys(currentState.completedProcessesMod4).forEach((k) => {
        currentState.completedProcessesMod4[k] = true;
      });
      Object.keys(currentState.completedLessonsMod4).forEach((k) => {
        currentState.completedLessonsMod4[k] = true;
      });
      currentState.module4CompletedBanner = true;
      saveState();
    },

    // --- EVALUACIÓN FINAL Y CIERRE ---
    saveFinalExamAnswer: function (questionId, optionIndex) {
      currentState.finalExamAnswers[questionId] = Number(optionIndex);
      saveState();
    },

    submitFinalExam: function (score, passed) {
      currentState.finalExamSubmitted = true;
      currentState.finalExamScore = score;
      if (passed) {
        currentState.finalExamCompleted = true;
        currentState.closureCompleted = true;
      }
      saveState();
    },

    resetFinalExam: function () {
      currentState.finalExamAnswers = {};
      currentState.finalExamSubmitted = false;
      currentState.finalExamScore = null;
      saveState();
    },

    setClosureSelectedLayer: function (layerId) {
      currentState.closureSelectedLayerId = layerId;
      saveState();
    },

    markClosureBundleDownloaded: function () {
      currentState.closureBundleDownloaded = true;
      saveState();
    },

    toggleClosureInstructorPreview: function () {
      currentState.closureInstructorPreview =
        !currentState.closureInstructorPreview;
      saveState();
    },

    setSurveyRating: function (field, stars) {
      currentState.satisfactionSurvey[field] = Number(stars);
      saveState();
    },

    setSurveyComments: function (text) {
      currentState.satisfactionSurvey.comments = text;
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(currentState));
      } catch (e) {
        // silent while typing
      }
    },

    submitSatisfactionSurvey: function () {
      currentState.satisfactionSurvey.submitted = true;
      currentState.satisfactionSurvey.submittedAt = new Date().toISOString();
      currentState.closureCompleted = true;
      saveState();
    },

    markClosureCompleted: function () {
      currentState.closureCompleted = true;
      saveState();
    },

    setStudentName: function (name) {
      currentState.studentName = name;
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(currentState));
        syncActiveProfileToRegistry();
      } catch (e) {
        // ignore
      }
    },

    getSavedProfiles: function () {
      const reg = readRegistry();
      return Object.values(reg).map((p) => ({
        accessId: p.accessId,
        studentName: p.studentName,
        studentDni: p.studentDni,
        studentEmail: p.studentEmail,
        studentOrganization: p.studentOrganization,
        registeredAt: p.registeredAt,
      }));
    },

    createParticipantProfile: function (payload) {
      const reg = readRegistry();
      let newId = '';
      do {
        const rnd = Math.floor(1000 + Math.random() * 9000);
        newId = `G4-2026-${rnd}`;
      } while (reg[newId]);

      const certDigits = Math.floor(1000 + Math.random() * 9000);
      const profile = cloneDefaultState();
      profile.activeView = { type: 'dashboard', processId: 'inicia', lessonId: 'leccion-1-1' };
      profile.isRegistered = true;
      profile.accessId = newId;
      profile.studentName = String(payload.fullName || '').trim();
      profile.studentDni = String(payload.dni || '').trim();
      profile.studentEmail = String(payload.email || '').trim();
      profile.studentOrganization = String(payload.organization || '').trim();
      profile.registeredAt = new Date().toISOString();
      profile.certificateVerificationCode = `CERT-G4-2026-${certDigits}`;

      reg[newId] = profile;
      writeRegistry(reg);
      return { accessId: newId };
    },

    loginWithAccessId: function (rawId) {
      const normalized = String(rawId || '').trim().toUpperCase();
      if (!normalized) {
        return { ok: false, error: 'Ingresa tu número identificador de progreso.' };
      }
      const reg = readRegistry();
      const found = reg[normalized];
      if (!found) {
        return {
          ok: false,
          error: `No encontramos ningún perfil registrado con el ID "${normalized}" en este navegador.`,
        };
      }
      currentState = mergeWithDefault({
        ...found,
        isRegistered: true,
        activeView: { type: 'dashboard', processId: 'inicia', lessonId: 'leccion-1-1' },
      });
      saveState();
      return { ok: true };
    },

    logoutToLanding: function () {
      try {
        window.localStorage.removeItem(ACTIVE_ID_KEY);
      } catch (e) {
        // ignore
      }
      currentState.isRegistered = false;
      saveState();
    },

    toggleDesktopSidebar: function (forceVal) {
      currentState.desktopSidebarCollapsed =
        typeof forceVal === 'boolean'
          ? forceVal
          : !currentState.desktopSidebarCollapsed;
      saveState();
    },

    toggleAllSidebarModules: function () {
      const s = currentState.sidebarExpanded;
      const allOpen = s.module1 && s.module2 && s.module3 && s.module4;
      const next = !allOpen;
      s.module1 = next;
      s.module2 = next;
      s.module3 = next;
      s.module4 = next;
      saveState();
    },

    setDashboardExpandedStage: function (stageNum) {
      const num = Number(stageNum);
      currentState.dashboardExpandedStage =
        currentState.dashboardExpandedStage === num ? null : num;
      saveState();
    },

    saveCustomVideoUrl: function (videoKey, urlOrId) {
      if (!currentState.customVideoUrls) currentState.customVideoUrls = {};
      currentState.customVideoUrls[videoKey] = String(urlOrId || '').trim();
      saveState();
    },

    resetCustomVideoUrl: function (videoKey) {
      if (currentState.customVideoUrls && currentState.customVideoUrls[videoKey]) {
        delete currentState.customVideoUrls[videoKey];
        saveState();
      }
    },

    resetAllProgress: function () {
      const fresh = cloneDefaultState();
      fresh.isRegistered = currentState.isRegistered;
      fresh.accessId = currentState.accessId;
      fresh.studentName = currentState.studentName;
      fresh.studentDni = currentState.studentDni;
      fresh.studentEmail = currentState.studentEmail;
      fresh.studentOrganization = currentState.studentOrganization;
      fresh.registeredAt = currentState.registeredAt;
      fresh.certificateVerificationCode = currentState.certificateVerificationCode;
      currentState = fresh;
      saveState();
    },
  };
})();

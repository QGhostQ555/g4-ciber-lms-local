/**
 * ============================================================================
 * ARCHIVO DE DATOS EXHAUSTIVO: src/data/module1Data.js
 * Curso: "Marcos y Buenas Prácticas de Ciberseguridad" (Código: G4-CIBER-2026)
 * Módulo 1: SGSI: ISO/IEC 27001:2022 y 27002:2022 (4 Hrs) - 8 Procesos Completos
 * ============================================================================
 */

window.LMS_DATA = {
  COURSE_META: {
    code: 'G4-CIBER-2026',
    title: 'Marcos y Buenas Prácticas de Ciberseguridad',
    badges: [
      'ISO 27001/27002:2022 | NIST CSF 2.0 | CIS v8.1',
      '100% Asíncrono',
    ],
    modality: '100% a distancia / 100% Asíncrono',
    duration: '20-24 Horas',
    modulesCount: '4 Módulos',
  },

  // ==========================================================================
  // SECCIÓN 0: BIENVENIDA, ORIENTACIÓN Y DIAGNÓSTICO (0.5 HRS)
  // ==========================================================================
  SECTION_ZERO_DATA: {
    code: 'SECCIÓN 0',
    title: 'Bienvenida, Orientación y Diagnóstico (0.5 Hrs)',
    duration: '0.5 Hrs (30 min)',
    welcomeVideoEmbedUrl: 'https://www.youtube.com/embed/inWWhr5tnEA',
    welcomeVideoDuration: '2:45 min',
    presentationText:
      'Bienvenido al programa especializado "Marcos y Buenas Prácticas de Ciberseguridad" (G4-CIBER-2026). Este curso autogestionado aborda de manera rigurosa y aplicada los estándares internacionales ISO/IEC 27001:2022, ISO/IEC 27002:2022, NIST Cybersecurity Framework (CSF) 2.0 y CIS Controls v8.1. Su finalidad es que estudiantes y profesionales de ingeniería, sistemas y tecnologías de la información (TI) logren alinear el cumplimiento normativo y la gobernanza estratégica con una defensa técnica efectiva, medible y auditable en entornos empresariales reales.',
    pillarsOverview: [
      {
        framework: 'ISO/IEC 27001:2022 & 27002:2022',
        role: 'Sistema de Gestión (SGSI) y Controles de Seguridad',
        focus:
          'Gobernanza auditable, gestión de riesgos, cláusulas 4 a 10 y 93 controles en 4 dominios con 5 atributos.',
      },
      {
        framework: 'NIST CSF 2.0',
        role: 'Gestión Estratégica y Operativa del Riesgo de Ciberseguridad',
        focus:
          '6 Funciones clave (Govern, Identify, Protect, Detect, Respond, Recover), Perfiles y Tiers de madurez.',
      },
      {
        framework: 'CIS Controls v8.1',
        role: 'Ciberdefensa Práctica y Priorizada',
        focus:
          '18 Controles críticos y 153 Salvaguardas priorizadas mediante Grupos de Implementación (IG1, IG2, IG3).',
      },
    ],
    interactiveCards: [
      {
        id: 'como-funciona',
        title: '1. Cómo funciona este curso',
        badge: 'Metodología 8 Procesos',
        summary:
          'Cada módulo sigue la ruta neuro-pedagógica de 8 procesos secuenciales diseñados para el aprendizaje autónomo de alto impacto:',
        bullets: [
          '1. INICIA (5-10 min): Activación cognitiva mediante casos detonantes reales y preguntas de reflexión.',
          '2. APRENDE (60-90 min): Desarrollo conceptual estructurado en 4 lecciones técnicas interactivas con notas.',
          '3. OBSERVA (20-40 min): Galería de video-análisis guiado sobre SoA y hallazgos reales de auditoría.',
          '4. EXPLORA (30-45 min): Lecturas comparativas, enlaces a normas oficiales y descarga de plantilla SoA en Excel/CSV.',
          '5. PRACTICA (60-90 min): 2 laboratorios interactivos gamificados (Clasificador de 12 controles y Auditoría de Alcance).',
          '6. APLICA (30-60 min): Simulador de toma de decisiones sobre un caso clínico empresarial real.',
          '7. COMPRUEBA (15-30 min): Cuestionario formativo de 10 preguntas sin penalización con sustento normativo.',
          '8. RECUERDA (5-10 min): Infografía interactiva de los 5 pilares clave y cierre del módulo.',
        ],
        highlight:
          'Todo tu avance se sincroniza automáticamente en tu navegador (localStorage).',
      },
      {
        id: 'que-encontraras',
        title: '2. Qué encontrarás en la plataforma',
        badge: '4 Módulos + Labs',
        summary:
          'Un ecosistema de entrenamiento práctico de 20 a 24 horas cronológicas distribuido en 4 módulos técnicos y una evaluación integradora:',
        bullets: [
          'Módulo 1 (4 Hrs): SGSI con ISO/IEC 27001:2022 y controles ISO/IEC 27002:2022.',
          'Módulo 2 (4 Hrs): Gestión y respuesta a riesgos con NIST CSF 2.0 (incluyendo la nueva función GOVERN).',
          'Módulo 3 (4 Hrs): Higiene cibernética y defensa priorizada con CIS Controls v8.1 (IG1, IG2, IG3).',
          'Módulo 4 (4 Hrs): Integración y mapeo cruzado: Requisito (ISO) ↔ Función (NIST) ↔ Control Técnico (CIS).',
          'Laboratorios interactivos, generador de Declaración de Aplicabilidad (SoA) y casos clínicos reales.',
        ],
        highlight:
          'Modalidad 100% a distancia / 100% Asíncrono: disponible 24/7 desde cualquier dispositivo.',
      },
      {
        id: 'como-avanzar',
        title: '3. Cómo avanzar y aprobar',
        badge: 'Ponderación Académica',
        summary:
          'Puedes navegar libremente o seguir la secuencia sugerida. El sistema de evaluación mide tres niveles taxonómicos de competencia:',
        bullets: [
          '30% Recordar / Comprender: Dominio de vocabulario normativo, cláusulas, definiciones y principios del SGSI.',
          '40% Interpretar / Aplicar Matrices: Uso práctico de matrices de riesgos, SoA, atributos ISO 27002 y mapeo de controles.',
          '30% Resolver Casos: Toma de decisiones técnicas y de gobernanza frente a brechas de seguridad y hallazgos de auditoría.',
          'Nota mínima aprobatoria en cuestionarios formativos y evaluación final: 70% (7/10 aciertos).',
        ],
        highlight:
          'Puedes reintentar las actividades prácticas y cuestionarios sin penalización para afianzar tu dominio técnico.',
      },
      {
        id: 'certificacion',
        title: '4. Certificado de Aprobación / Constancia',
        badge: 'Credencial Verificable',
        summary:
          'El curso otorga dos tipos de credenciales académicas según el nivel de logro alcanzado al finalizar los módulos:',
        bullets: [
          'Certificado de Aprobación (G4-CIBER-2026): Requiere 100% de los procesos completados y nota ≥ 70% en las evaluaciones.',
          'Constancia de Participación: Se otorga al completar al menos el 80% de las actividades de aprendizaje del programa.',
          'Incluye desglose de horas (24 horas académicas) y competencias en ISO 27001/27002:2022, NIST CSF 2.0 y CIS v8.1.',
        ],
        highlight:
          'Haz clic en el botón "Ver Certificado" en la barra superior en cualquier momento para verificar tus requisitos.',
      },
      {
        id: 'recomendaciones',
        title: '5. Recomendaciones y Requisitos Previos',
        badge: 'Perfil y Estudio',
        summary:
          'Para aprovechar al máximo la experiencia autogestionada te sugerimos las siguientes pautas y conocimientos base:',
        bullets: [
          'Requisitos previos: Conocimientos fundamentales de redes TCP/IP, sistemas operativos (Windows/Linux) y conceptos básicos de TI.',
          'Ritmo sugerido: Dedica bloques enfocados de 45 a 60 minutos diarios (completarás 1 módulo cada 4 días sin sobrecarga).',
          'Descarga la Plantilla SoA en el Proceso 4 (EXPLORA) y utilízala como cuaderno de trabajo durante los casos clínicos.',
          'Analiza la retroalimentación de cada pregunta en los procesos PRACTICA, APLICA y COMPRUEBA antes de avanzar.',
        ],
        highlight:
          '¿Listo para comenzar? Responde el Diagnóstico Rápido inferior y desbloquea tu ruta hacia el Módulo 1.',
      },
    ],
    diagnosticQuestions: [
      {
        id: 'diag-1',
        question:
          '¿Cuál es la diferencia fundamental entre ISO/IEC 27001:2022 e ISO/IEC 27002:2022?',
        options: [
          'ISO 27001 es para empresas públicas e ISO 27002 es exclusiva para bancos.',
          'ISO 27001 especifica los requisitos certificables del SGSI (Cláusulas 4-10 y Anexo A), mientras que ISO 27002 brinda la guía detallada de implementación para los 93 controles.',
          'ISO 27002 es la norma certificable por auditores externos e ISO 27001 es solo un catálogo opcional.',
          'No existe diferencia; son el mismo documento con distinto nombre regional.',
        ],
        correctIndex: 1,
        feedback:
          '¡Exacto! Una organización se certifica bajo ISO/IEC 27001:2022 (requisitos del SGSI), apoyándose en ISO/IEC 27002:2022 como manual de buenas prácticas para implementar y atribuir cada uno de los 93 controles.',
      },
      {
        id: 'diag-2',
        question:
          'En la actualización de NIST CSF 2.0 (2024), ¿qué nueva función transversal se incorporó a las 5 funciones clásicas (Identify, Protect, Detect, Respond, Recover)?',
        options: [
          'AUDIT (Auditar)',
          'GOVERN (Gobernar)',
          'ENCRYPT (Cifrar)',
          'COMPLY (Cumplir)',
        ],
        correctIndex: 1,
        feedback:
          '¡Correcto! La función GOVERN (GV) se sitúa en el centro de NIST CSF 2.0 para alinear la estrategia de ciberseguridad con el contexto organizacional, roles, políticas y supervisión de la cadena de suministro.',
      },
      {
        id: 'diag-3',
        question:
          'En CIS Controls v8.1, ¿qué grupo de implementación define la "higiene cibernética esencial" mínima que toda empresa debe aplicar para defenderse de los ataques más comunes?',
        options: [
          'IG3 (Implementation Group 3)',
          'IG0 (Implementation Group Zero)',
          'IG1 (Implementation Group 1)',
          'SoA Nivel 4',
        ],
        correctIndex: 2,
        feedback:
          '¡Muy bien! El Grupo de Implementación 1 (IG1) representa la ciberhigiene esencial y es el punto de partida obligatorio para pymes y grandes empresas antes de escalar a IG2 e IG3.',
      },
    ],
  },

  // ==========================================================================
  // TODOS LOS MÓDULOS Y SECCIONES ACTIVOS (SIN MÓDULOS BLOQUEADOS)
  // ==========================================================================
  LOCKED_MODULES_DATA: [],

  // ==========================================================================
  // MÓDULO 1: SGSI: ISO/IEC 27001:2022 y 27002:2022 (4 HRS)
  // Desarrollo exhaustivo y 100% interactivo de los 8 Procesos Pedagógicos
  // ==========================================================================
  MODULE_1_DATA: {
    courseCode: 'G4-CIBER-2026',
    courseTitle: 'Marcos y Buenas Prácticas de Ciberseguridad',
    modality: '100% a distancia / 100% Asíncrono',
    totalDuration: '20-24 Horas',
    moduleCode: 'MÓDULO 1',
    moduleTitle:
      'Sistema de Gestión de Seguridad de la Información (SGSI): ISO/IEC 27001:2022 y 27002:2022',
    moduleDuration: '4 Hrs',
    processesMeta: [
      {
        id: 'inicia',
        number: 1,
        title: '1. PROCESO INICIA',
        shortTitle: 'INICIA',
        duration: '5-10 min',
        icon: 'sparkles',
        subtitle:
          'Caso detonante interactivo: por qué la tecnología sola no reemplaza un SGSI',
      },
      {
        id: 'aprende',
        number: 2,
        title: '2. PROCESO APRENDE',
        shortTitle: 'APRENDE',
        duration: '60-90 min',
        icon: 'book-open',
        subtitle:
          '4 Lecciones interactivas: Ciclo PHVA, Cláusulas 4-10, 93 Controles y 5 Atributos',
        subLessons: [
          {
            id: 'leccion-1-1',
            code: 'Lección 1.1',
            title:
              'Fundamentos de ISO/IEC 27001:2022: Ciclo PHVA, Alcance y Cláusulas 4 a 10',
            duration: '25 min',
          },
          {
            id: 'leccion-1-2',
            code: 'Lección 1.2',
            title:
              'Transición y novedades de ISO/IEC 27002:2022: De 114 a 93 controles en 4 dominios',
            duration: '20 min',
          },
          {
            id: 'leccion-1-3',
            code: 'Lección 1.3',
            title:
              'Nuevos controles clave introducidos en 2022 (5.23, 8.9, 8.10, 8.11, 8.12 y más)',
            duration: '25 min',
          },
          {
            id: 'leccion-1-4',
            code: 'Lección 1.4',
            title:
              'El concepto de "Atributos de Control" y Filtrador Interactivo con Hashtags',
            duration: '20 min',
          },
        ],
      },
      {
        id: 'observa',
        number: 3,
        title: '3. PROCESO OBSERVA',
        shortTitle: 'OBSERVA',
        duration: '20-40 min',
        icon: 'play-circle',
        subtitle:
          'Galería de 2 videos de análisis: Estructura SoA y No Conformidades Mayores',
      },
      {
        id: 'explora',
        number: 4,
        title: '4. PROCESO EXPLORA',
        shortTitle: 'EXPLORA',
        duration: '30-45 min',
        icon: 'folder-open',
        subtitle:
          'Matriz comparativa 2013 vs 2022, enlaces oficiales ISO/INCIBE/NQA y descarga SoA',
      },
      {
        id: 'practica',
        number: 5,
        title: '5. PROCESO PRACTICA',
        shortTitle: 'PRACTICA',
        duration: '60-90 min',
        icon: 'gamepad-2',
        subtitle:
          '2 Laboratorios interactivos: Clasificador de 12 controles y Auditoría de Alcance',
      },
      {
        id: 'aplica',
        number: 6,
        title: '6. PROCESO APLICA',
        shortTitle: 'APLICA',
        duration: '30-60 min',
        icon: 'stethoscope',
        subtitle:
          'Simulador de Toma de Decisiones: Protección de Historias Clínicas ante robo por USB',
      },
      {
        id: 'comprueba',
        number: 7,
        title: '7. PROCESO COMPRUEBA',
        shortTitle: 'COMPRUEBA',
        duration: '15-30 min',
        icon: 'clipboard-check',
        subtitle:
          'Cuestionario formativo interactivo de 10 preguntas con retroalimentación normativa',
      },
      {
        id: 'recuerda',
        number: 8,
        title: '8. PROCESO RECUERDA',
        shortTitle: 'RECUERDA',
        duration: '5-10 min',
        icon: 'brain-circuit',
        subtitle:
          'Infografía resumen interactiva de los 5 pilares del módulo y cierre',
      },
    ],

    // ========================================================================
    // 1. PROCESO INICIA (5-10 MIN)
    // ========================================================================
    inicia: {
      objective:
        'Comprender la estructura de un SGSI auditable bajo ISO/IEC 27001:2022 y el catálogo renovado de controles del Anexo A / ISO/IEC 27002:2022.',
      caseTitle: 'Caso Detonante: El mito del "Blindaje 100% Tecnológico"',
      caseScenario:
        'Una entidad corporativa implementó antivirus y firewall de última generación, pero un colaborador sin acuerdos de confidencialidad filtró información confidencial de clientes a la competencia.',
      triggerQuestion: '¿Por qué la tecnología sola no evitó este incidente?',
      reflectionOptions: [
        {
          id: 'opt-inicia-1',
          label: 'Perspectiva A: Falla puramente de marca o licencia del Firewall',
          title:
            '“Porque el firewall y el antivirus estaban mal configurados o eran de una marca económica.”',
          isOptimalInsight: false,
          feedbackTitle: 'Análisis Incompleto: Visión Tecnocentrista Aislada',
          feedbackBody:
            'Aunque las herramientas técnicas son necesarias, ningún firewall perimetral ni antivirus tradicional detiene por sí solo a un empleado interno con credenciales legítimas que accede a información de su trabajo diario si no existen políticas de clasificación, acuerdos legales de confidencialidad (NDA), concientización, control de accesos por mínimo privilegio y prevención de fuga de datos (DLP). La seguridad de la información NO es únicamente un problema del departamento de TI: requiere un Sistema de Gestión integral (SGSI) que articule controles Organizacionales, de Personas, Físicos y Tecnológicos.',
          controlsInvolved: [
            'Cláusula 5: Liderazgo y Políticas',
            'Control 6.6: Acuerdos de confidencialidad (NDA)',
            'Control 6.3: Toma de conciencia',
            'Control 8.12: Prevención de fuga de datos (DLP)',
          ],
        },
        {
          id: 'opt-inicia-2',
          label:
            'Perspectiva B: Enfoque Integral de Gobernanza, Personas y Tecnología (SGSI)',
          title:
            '“Porque la seguridad no es solo un problema de TI: faltó un SGSI que integrara controles legales/humanos (NDA, concientización) con controles organizacionales y técnicos (DLP, clasificación).”',
          isOptimalInsight: true,
          feedbackTitle: '¡Diagnóstico Exacto de Arquitecto SGSI!',
          feedbackBody:
            '¡Excelente reflexión! La seguridad de la información no se resuelve comprando cajas tecnológicas aisladas (firewalls/antivirus). Un SGSI bajo ISO/IEC 27001:2022 e ISO/IEC 27002:2022 aborda el riesgo como un sistema holístico donde coexisten: 1) Gobernanza y Políticas (Cláusulas 4 a 10 y Dominio 5 Organizacional), 2) Gestión de Personas y respaldo jurídico como los Acuerdos de Confidencialidad - Control 6.6, Términos de empleo - Control 6.2 y Concientización - Control 6.3 (Dominio 6 Personas), 3) Seguridad del entorno físico (Dominio 7), y 4) Controles técnicos específicos contra exfiltración como DLP - Control 8.12 y control de acceso (Dominio 8 Tecnológico).',
          controlsInvolved: [
            'ISO/IEC 27001 Cláusulas 4-10 (Gobierno del SGSI)',
            'Control 6.2 y 6.6 (Términos de empleo y Acuerdos de confidencialidad)',
            'Control 5.12 y 5.15 (Clasificación de información y Control de acceso)',
            'Control 8.12 (Prevención de fuga de datos - DLP)',
          ],
        },
        {
          id: 'opt-inicia-3',
          label:
            'Perspectiva C: Prohibición total de acceso a datos para los empleados',
          title:
            '“Porque nunca se debe permitir que los colaboradores vean datos de clientes bajo ninguna circunstancia.”',
          isOptimalInsight: false,
          feedbackTitle:
            'Análisis Desalineado con el Negocio (Afecta la Disponibilidad)',
          feedbackBody:
            'Bloquear por completo el acceso a los datos impediría operar el negocio, vulnerando el principio de Disponibilidad de la tríada CIA. El propósito de un SGSI bajo ISO/IEC 27001:2022 no es paralizar la operación, sino habilitar el negocio de forma segura mediante evaluación de riesgos: otorgar acceso solo a quien lo necesita por su rol (mínimo privilegio), vincular legalmente al colaborador con Acuerdos de Confidencialidad (Control 6.6), educarlo (Control 6.3) y supervisar/restringir la extracción masiva mediante controles técnicos (Control 8.12 DLP).',
          controlsInvolved: [
            'Tríada CIA: Equilibrio Confidencialidad - Integridad - Disponibilidad',
            'Control 5.15: Control de acceso basado en roles',
            'Control 6.6: Acuerdos de confidencialidad o no divulgación',
          ],
        },
      ],
      holisticSynthesis:
        'Lección central del Caso Detonante: La tecnología aislada protege vectores técnicos específicos, pero es ciega frente a vacíos de gobernanza, procesos y factor humano. ISO/IEC 27001:2022 establece el sistema de gestión auditable (Cláusulas 4 a 10) e ISO/IEC 27002:2022 provee los 93 controles equilibrados entre Organización (37), Personas (8), Físico (14) y Tecnología (34).',
      keyStats: [
        {
          label: 'Cuerpo Obligatorio ISO 27001',
          value: 'Cláusulas 4 a 10',
          context:
            'Requisitos auditables del SGSI que operan bajo el ciclo de mejora continua PHVA.',
        },
        {
          label: 'Catálogo Renovado 2022',
          value: '93 Controles',
          context:
            'Agrupados en 4 dominios: Organizacionales (37), Personas (8), Físicos (14) y Tecnológicos (34).',
        },
        {
          label: 'Controles Nuevos en 2022',
          value: '11 Controles',
          context:
            'Incluyen Nube (5.23), Configuración (8.9), Borrado (8.10), Enmascaramiento (8.11) y DLP (8.12).',
        },
      ],
    },

    // ========================================================================
    // 2. PROCESO APRENDE (60-90 MIN) - 4 LECCIONES INTERACTIVAS
    // ========================================================================
    aprende: [
      // LECCIÓN 1.1
      {
        id: 'leccion-1-1',
        code: 'Lección 1.1',
        title:
          'Fundamentos de ISO/IEC 27001:2022: Ciclo PHVA, Alcance y Cláusulas Mandatorias (4 a 10)',
        duration: '25 min',
        summary:
          'ISO/IEC 27001:2022 es la norma internacional certificable que especifica los requisitos para establecer, implementar, mantener y mejorar continuamente un Sistema de Gestión de Seguridad de la Información (SGSI) dentro del contexto de la organización. Su arquitectura sigue la Estructura Armonizada de Alto Nivel (Anexo SL) basada en el ciclo PHVA (Planificar, Hacer, Verificar, Actuar).',
        keyConcepts: [
          {
            title: '¿Qué protege realmente un SGSI?',
            description:
              'Preserva la Confidencialidad (acceso solo a entidades autorizadas), Integridad (exactitud y completitud sin modificación no autorizada) y Disponibilidad (acceso oportuno cuando se requiere) de los activos de información en cualquier formato (digital, nube, papel, verbal).',
            tag: 'Tríada CIA',
          },
          {
            title: 'Enfoque Basado en Riesgos, no en Checklists Ciegos',
            description:
              'ISO/IEC 27001 no exige aplicar los 93 controles a ciegas: exige evaluar los riesgos propios del negocio (Cláusula 6.1.2) y seleccionar/justificar en la Declaración de Aplicabilidad (SoA) qué controles mitigan dichos riesgos.',
            tag: 'Filosofía ISO 27001',
          },
          {
            title: 'Prohibición de Excluir Cláusulas 4 a 10',
            description:
              'Si una organización desea obtener y mantener la certificación ISO/IEC 27001:2022, debe cumplir el 100% de los requisitos de las Cláusulas 4, 5, 6, 7, 8, 9 y 10. Solo los controles del Anexo A admiten exclusiones justificadas.',
            tag: 'Regla de Oro de Auditoría',
          },
          {
            title: 'Novedad en Cláusulas 2022: Cláusula 6.3 (Planificación de Cambios)',
            description:
              'La edición 2022 incorporó formalmente la sub-cláusula 6.3 exigiendo que cuando la organización determine la necesidad de realizar cambios en el SGSI, estos se lleven a cabo de manera planificada y controlada.',
            tag: 'Actualización 2022',
          },
        ],
        phvaCycle: [
          {
            phase: 'Planificar (Plan)',
            clauses: 'Cláusulas 4, 5, 6 y 7',
            summary:
              'Comprender el contexto interno/externo, definir el alcance del SGSI, asegurar el liderazgo de la alta dirección, establecer la metodología de apreciación y tratamiento de riesgos (SoA y PTR) y dotar los recursos y competencias necesarios.',
            deliverables: [
              'Documento de Alcance del SGSI (4.3)',
              'Política de Seguridad de la Información (5.2)',
              'Metodología y Matriz de Riesgos (6.1.2)',
              'Declaración de Aplicabilidad - SoA y Plan de Tratamiento (6.1.3)',
            ],
          },
          {
            phase: 'Hacer (Do)',
            clauses: 'Cláusula 8 (y ejecución del Anexo A)',
            summary:
              'Implementar y operar los procesos del SGSI, ejecutar el Plan de Tratamiento de Riesgos (PTR), poner en marcha los controles seleccionados del Anexo A y evaluar riesgos ante cambios significativos.',
            deliverables: [
              'Controles organizacionales, de personas, físicos y tecnológicos operando',
              'Registros de ejecución del Plan de Tratamiento de Riesgos (8.3)',
              'Evidencias operativas y controles de cambios',
            ],
          },
          {
            phase: 'Verificar (Check)',
            clauses: 'Cláusula 9',
            summary:
              'Monitorear y medir el desempeño de los procesos y controles mediante indicadores (KPIs/KRIs), ejecutar el programa de Auditoría Interna imparcial y realizar la Revisión por la Dirección.',
            deliverables: [
              'Tablero de métricas e indicadores de seguridad (9.1)',
              'Programa e Informes de Auditoría Interna (9.2)',
              'Acta de Revisión por la Dirección (9.3)',
            ],
          },
          {
            phase: 'Actuar (Act)',
            clauses: 'Cláusula 10',
            summary:
              'Reaccionar ante las No Conformidades detectadas, analizar su causa raíz, aplicar acciones correctivas verificando su eficacia y mejorar continuamente la conveniencia, adecuación y eficacia del SGSI.',
            deliverables: [
              'Registro de No Conformidades y Análisis de Causa Raíz (10.2)',
              'Plan de Acciones Correctivas cerradas y verificadas',
              'Actualizaciones de mejora continua del SGSI (10.1)',
            ],
          },
        ],
        scopeImportance: {
          title: 'Importancia Crítica de Definir el Alcance del SGSI (Cláusula 4.3)',
          description:
            'El Alcance es la frontera jurídica, técnica y geográfica sobre la cual se auditará y certificará el SGSI. Un alcance mal redactado —que excluya arbitrariamente servidores críticos o proveedores cloud donde residen los datos del proceso certificado— provoca inmediatamente una No Conformidad Mayor en Etapa 1 de auditoría.',
          checklist: [
            'Incluir los procesos de negocio o servicios específicos cubiertos por el SGSI.',
            'Especificar las ubicaciones físicas y lógicas (sedes, centros de datos, entornos cloud).',
            'Considerar las cuestiones internas/externas (4.1) y los requisitos de partes interesadas (4.2).',
            'Documentar claramente las interfaces y dependencias con actividades realizadas por otras áreas o terceros (proveedores cloud, outsourcing).',
          ],
        },
        mandatoryClauses: [
          {
            clauseNumber: 'Cláusula 4',
            title: 'Contexto de la organización',
            pdcaStage: 'Planificar (Plan)',
            summary:
              'Establece los cimientos del SGSI identificando factores internos y externos (4.1), necesidades y expectativas de las partes interesadas como clientes, reguladores y accionistas (4.2), determinando los límites y aplicabilidad del Alcance del SGSI (4.3) y estableciendo el sistema de gestión y sus procesos (4.4).',
            subClauses: [
              '4.1 Comprensión de la organización y de su contexto',
              '4.2 Comprensión de las necesidades y expectativas de las partes interesadas',
              '4.3 Determinación del alcance del SGSI (Información documentada obligatoria)',
              '4.4 Sistema de Gestión de la Seguridad de la Información',
            ],
            auditKeyRequirement:
              'El documento de Alcance (4.3) debe estar disponible como información documentada y reflejar fielmente las interfaces con terceros.',
          },
          {
            clauseNumber: 'Cláusula 5',
            title: 'Liderazgo',
            pdcaStage: 'Planificar (Plan)',
            summary:
              'Exige que la Alta Dirección demuestre liderazgo y compromiso activo con el SGSI (5.1), apruebe y comunique la Política de Seguridad de la Información (5.2) y asigne formalmente los roles, responsabilidades y autoridades dentro de la organización (5.3).',
            subClauses: [
              '5.1 Liderazgo y compromiso de la Alta Dirección',
              '5.2 Política de seguridad de la información (Información documentada obligatoria)',
              '5.3 Roles, responsabilidades y autoridades en la organización',
            ],
            auditKeyRequirement:
              'El auditor entrevistará a la Alta Dirección para verificar que no delegó el compromiso total en TI y que provee recursos reales.',
          },
          {
            clauseNumber: 'Cláusula 6',
            title: 'Planificación',
            pdcaStage: 'Planificar (Plan)',
            summary:
              'Es el núcleo metodológico del SGSI: define los criterios de aceptación y valoración de riesgos, ejecuta la apreciación de riesgos sobre la confidencialidad, integridad y disponibilidad (6.1.2), selecciona opciones de tratamiento, emite la Declaración de Aplicabilidad - SoA (6.1.3), fija Objetivos de Seguridad medibles (6.2) y planifica los cambios del SGSI (6.3).',
            subClauses: [
              '6.1.1 Generalidades (Riesgos y oportunidades)',
              '6.1.2 Apreciación de riesgos de seguridad de la información',
              '6.1.3 Tratamiento de riesgos de seguridad y Declaración de Aplicabilidad (SoA)',
              '6.2 Objetivos de seguridad de la información y planificación para lograrlos',
              '6.3 Planificación de los cambios (Nuevo en ISO 27001:2022)',
            ],
            auditKeyRequirement:
              'Trazabilidad perfecta entre Matriz de Riesgos ↔ Plan de Tratamiento (PTR) ↔ Declaración de Aplicabilidad (SoA) ↔ Aprobación de riesgos residuales por los dueños de riesgo.',
          },
          {
            clauseNumber: 'Cláusula 7',
            title: 'Soporte',
            pdcaStage: 'Planificar (Plan)',
            summary:
              'Asegura que el SGSI cuente con el presupuesto y herramientas necesarias (7.1), personal con competencia demostrada por educación, formación o experiencia (7.2), campañas de toma de conciencia (7.3), canales de comunicación interna/externa (7.4) y control riguroso de versiones y protección de la información documentada (7.5).',
            subClauses: [
              '7.1 Recursos',
              '7.2 Competencia (Evidencia documentada obligatoria)',
              '7.3 Toma de conciencia (Concienciación del personal)',
              '7.4 Comunicación (Qué, cuándo, a quién y cómo comunicar)',
              '7.5 Información documentada (Creación, actualización y control)',
            ],
            auditKeyRequirement:
              'Demostrar con registros (CVs, certificados, evaluaciones) la competencia de quienes ejercen roles críticos en el SGSI (ej. CISO, auditor interno).',
          },
          {
            clauseNumber: 'Cláusula 8',
            title: 'Operación',
            pdcaStage: 'Hacer (Do)',
            summary:
              'Pone en marcha los planes diseñados en la Cláusula 6: controla los procesos operacionales y los servicios contratados externamente (8.1), ejecuta las apreciaciones de riesgo a intervalos planificados o cuando ocurran cambios importantes (8.2) e implementa el plan de tratamiento de riesgos conservando evidencia documentada (8.3).',
            subClauses: [
              '8.1 Planificación y control operacional',
              '8.2 Apreciación de riesgos de seguridad de la información (Ejecución operativa)',
              '8.3 Tratamiento de riesgos de seguridad de la información (Ejecución del PTR)',
            ],
            auditKeyRequirement:
              'No basta con tener una matriz de riesgos teórica (Cláusula 6); en la Cláusula 8 se auditan los registros reales de su ejecución periódica.',
          },
          {
            clauseNumber: 'Cláusula 9',
            title: 'Evaluación del desempeño',
            pdcaStage: 'Verificar (Check)',
            summary:
              'Verifica si el SGSI funciona según lo esperado mediante el monitoreo y medición de indicadores (9.1), la ejecución de Auditorías Internas objetivas e imparciales (9.2) y la Revisión por la Dirección para evaluar la conveniencia, adecuación y eficacia continua del sistema (9.3).',
            subClauses: [
              '9.1 Seguimiento, medición, análisis y evaluación',
              '9.2 Auditoría interna (Programa e informes documentados)',
              '9.3 Revisión por la dirección (Entradas y salidas obligatorias)',
            ],
            auditKeyRequirement:
              'Ningún auditor interno puede auditar su propio trabajo (imparcialidad 9.2), y la Revisión por la Dirección (9.3) debe cubrir todas las entradas normativas.',
          },
          {
            clauseNumber: 'Cláusula 10',
            title: 'Mejora',
            pdcaStage: 'Actuar (Act)',
            summary:
              'Garantiza la evolución permanente del SGSI (10.1) y regula el tratamiento formal de las No Conformidades: reaccionar para controlarlas y corregirlas, analizar la causa raíz para que no vuelvan a ocurrir, implementar acciones correctivas y revisar su eficacia (10.2).',
            subClauses: [
              '10.1 Mejora continua',
              '10.2 No conformidad y acción correctiva (Información documentada obligatoria)',
            ],
            auditKeyRequirement:
              'Diferenciar claramente entre "corrección inmediata" (apagar el incendio) y "acción correctiva" (eliminar la causa raíz para evitar recurrencia).',
          },
        ],
        takeaway:
          'Las Cláusulas 4 a 10 conforman el esqueleto obligatorio de gobernanza del SGSI bajo el ciclo PHVA; sin ellas, los controles técnicos carecen de dirección, medición y mejora continua.',
      },

      // LECCIÓN 1.2
      {
        id: 'leccion-1-2',
        code: 'Lección 1.2',
        title:
          'Transición y novedades de ISO/IEC 27002:2022: De 114 a 93 controles en 4 Dominios',
        duration: '20 min',
        summary:
          'En 2022, ISO/IEC 27002 (y consecuentemente el Anexo A de ISO/IEC 27001:2022) experimentó su reestructuración más importante en una década: pasó de 114 controles repartidos en 14 dominios complejos (edición 2013) a un catálogo más ágil, moderno y libre de redundancias compuesto por 93 controles agrupados en solo 4 grandes temas o dominios.',
        keyConcepts: [
          {
            title: '¿Por qué se redujo de 114 a 93 controles?',
            description:
              'No se eliminó ningún objetivo de seguridad: se fusionaron 57 controles antiguos que eran redundantes en 24 controles consolidados, se actualizaron 58 controles al contexto actual, se mantuvo 1 sin cambios estructurales y se agregaron 11 controles totalmente nuevos (24 + 58 + 11 = 93).',
            tag: 'Fórmula: 24 + 58 + 11 = 93',
          },
          {
            title: 'Agrupación por Perspectiva de Gestión (4 Dominios)',
            description:
              'En lugar de 14 dominios técnicos fragmentados (A.5 a A.18), la versión 2022 agrupa los controles según el ámbito donde se aplican: Organizacional (Cláusula 5), Personas (Cláusula 6), Físico (Cláusula 7) y Tecnológico (Cláusula 8).',
            tag: 'Simplificación Estructural',
          },
          {
            title: 'Separación entre Propósito y Guía en ISO 27002:2022',
            description:
              'Cada uno de los 93 controles en ISO/IEC 27002:2022 presenta una tabla de Atributos, seguida del Control (qué se debe lograr), el Propósito (por qué es importante para el riesgo) y la Guía de implementación (cómo llevarlo a la práctica).',
            tag: 'Estructura de cada Control',
          },
          {
            title: 'Asignación Clara de Dueños de Control (Control Owners)',
            description:
              'La división en 4 temas facilita asignar responsabilidades: RR.HH. lidera gran parte del Dominio 6 (Personas), Administración/Seguridad Patrimonial lidera el Dominio 7 (Físico), TI/Ciberseguridad lidera el Dominio 8 (Tecnológico) y el Comité de Seguridad/CISO coordina el Dominio 5 (Organizacional).',
            tag: 'Gobernanza Práctica',
          },
        ],
        domains2022: [
          {
            clause: 'Cláusula 5',
            name: '1. Controles Organizacionales',
            count: 37,
            percentage: 40,
            purpose:
              'Gobiernan las políticas, roles, gestión de activos, relaciones con proveedores, uso de servicios en la nube, inteligencia de amenazas, gestión de incidentes, continuidad TIC y cumplimiento legal/contractual.',
            representativeControls: [
              '5.1 Políticas para la seguridad de la información',
              '5.7 Inteligencia de amenazas (Nuevo)',
              '5.9 Inventario de información y otros activos asociados',
              '5.12 Clasificación de la información',
              '5.15 Control de acceso',
              '5.19 Seguridad de la información en las relaciones con proveedores',
              '5.23 Seguridad de la información para el uso de servicios en la nube (Nuevo)',
              '5.24 a 5.28 Gestión de incidentes de seguridad y recolección de evidencia',
              '5.30 Preparación de las TIC para la continuidad del negocio (Nuevo)',
              '5.31 a 5.36 Cumplimiento legal, privacidad (PII) y revisión independiente',
            ],
          },
          {
            clause: 'Cláusula 6',
            name: '2. Controles de Personas',
            count: 8,
            percentage: 9,
            purpose:
              'Gestionan la seguridad humana antes, durante y después de la relación laboral o contractual: selección de personal, acuerdos legales, formación continua, teletrabajo y reporte de eventos.',
            representativeControls: [
              '6.1 Selección de personal / Verificación de antecedentes (Screening)',
              '6.2 Términos y condiciones de empleo',
              '6.3 Toma de conciencia, educación y formación en seguridad de la información',
              '6.4 Proceso disciplinario',
              '6.5 Responsabilidades después de la terminación o cambio de empleo',
              '6.6 Acuerdos de confidencialidad o no divulgación (NDA)',
              '6.7 Trabajo remoto (Teletrabajo)',
              '6.8 Reporte de eventos de seguridad de la información',
            ],
          },
          {
            clause: 'Cláusula 7',
            name: '3. Controles Físicos',
            count: 14,
            percentage: 15,
            purpose:
              'Protegen las instalaciones físicas, centros de datos, oficinas, áreas de carga, cableado y equipamiento frente a accesos físicos no autorizados, vigilancia, desastres ambientales y robo.',
            representativeControls: [
              '7.1 Perímetros de seguridad física',
              '7.2 Controles de entrada física',
              '7.3 Seguridad de oficinas, despachos e instalaciones',
              '7.4 Monitoreo de la seguridad física (Nuevo)',
              '7.5 Protección contra amenazas físicas y ambientales',
              '7.7 Escritorio limpio y pantalla limpia',
              '7.8 Ubicación y protección de equipos',
              '7.12 Seguridad del cableado',
              '7.14 Disposición o reutilización segura de equipos',
            ],
          },
          {
            clause: 'Cláusula 8',
            name: '4. Controles Tecnológicos',
            count: 34,
            percentage: 36,
            purpose:
              'Aseguran la infraestructura lógica, endpoints, identidades privilegiadas, criptografía, endurecimiento de configuraciones, borrado seguro, enmascaramiento, DLP, monitoreo de redes y ciclo de desarrollo seguro (DevSecOps).',
            representativeControls: [
              '8.1 Dispositivos de punto final del usuario (Endpoints)',
              '8.2 Derechos de acceso privilegiado (PAM)',
              '8.5 Autenticación segura (MFA)',
              '8.7 Protección contra malware',
              '8.8 Gestión de vulnerabilidades técnicas',
              '8.9 Gestión de configuración (Nuevo)',
              '8.10 Borrado de información (Nuevo)',
              '8.11 Enmascaramiento de datos (Nuevo)',
              '8.12 Prevención de fuga de datos - DLP (Nuevo)',
              '8.16 Actividades de monitoreo (Nuevo)',
              '8.23 Filtrado web (Nuevo)',
              '8.24 Uso de criptografía',
              '8.28 Codificación segura (Nuevo)',
            ],
          },
        ],
        normativeComparison: [
          {
            version2013: '114 controles distribuidos en 14 dominios (A.5 a A.18)',
            version2022: '93 controles agrupados en 4 dominios (Cláusulas 5, 6, 7 y 8)',
            impact:
              'Elimina duplicidades y organiza los controles de forma lógica según quién los gestiona.',
          },
          {
            version2013: '57 controles fragmentados y repetitivos en varios capítulos',
            version2022: 'Fusionados en 24 controles integrales de mayor claridad',
            impact:
              'Reduce la burocracia documental al elaborar y mantener la Declaración de Aplicabilidad (SoA).',
          },
          {
            version2013:
              'Sin controles específicos para Cloud, DLP, Enmascaramiento ni Threat Intelligence',
            version2022: '11 nuevos controles dedicados a amenazas modernas y privacidad',
            impact:
              'Cubre brechas críticas en arquitecturas multi-cloud, trabajo híbrido y protección de datos personales.',
          },
        ],
        takeaway:
          'Memoriza la distribución exacta de los 93 controles de ISO/IEC 27002:2022: 37 Organizacionales (Cláusula 5) + 8 de Personas (Cláusula 6) + 14 Físicos (Cláusula 7) + 34 Tecnológicos (Cláusula 8) = 93 Controles.',
      },

      // LECCIÓN 1.3
      {
        id: 'leccion-1-3',
        code: 'Lección 1.3',
        title:
          'Nuevos Controles Clave Introducidos en 2022: Implementación Técnica y Ejemplos Reales',
        duration: '25 min',
        summary:
          'La edición 2022 introdujo 11 controles nuevos para responder a la transformación digital, el uso masivo de la nube, las leyes de protección de datos personales y la sofisticación del cibercrimen. A continuación se desarrollan a fondo con ejemplos técnicos los 5 controles destacados del sílabo (5.23, 8.9, 8.10, 8.11 y 8.12) junto con los otros 6 nuevos controles que completan los 11.',
        keyConcepts: [
          {
            title: 'Enfoque Proactivo y Centrado en los Datos',
            description:
              'Los nuevos controles tecnológicos (8.9, 8.10, 8.11, 8.12) protegen todo el ciclo de vida del dato: desde que se configura el servidor (8.9), se usa en pruebas ofuscado (8.11), se previene su exfiltración (8.12), hasta su eliminación definitiva (8.10).',
            tag: 'Seguridad Centrada en Datos',
          },
          {
            title: 'Gobernanza de Nube y Resiliencia Operativa',
            description:
              'Los controles organizacionales 5.7 (Threat Intelligence), 5.23 (Servicios Cloud) y 5.30 (Continuidad TIC) elevan la ciberdefensa al nivel estratégico antes de que ocurra una interrupción.',
            tag: 'Resiliencia Moderna',
          },
        ],
        newControls2022: [
          {
            code: 'Control 5.23',
            name: 'Seguridad de la información para el uso de servicios en la nube',
            domain: 'Organizacional (Cláusula 5)',
            isFeaturedInSyllabus: true,
            purpose:
              'Especificar y gestionar los procesos de adquisición, uso, administración y salida (exit strategy) de servicios en la nube (IaaS, PaaS, SaaS) conforme a los requisitos de seguridad de la organización.',
            technicalExample:
              'Ejemplo técnico: Definir una Matriz de Responsabilidad Compartida para AWS/Azure/GCP, aplicar políticas CSPM (Cloud Security Posture Management), exigir cifrado KMS con llaves gestionadas por el cliente y documentar un plan de portabilidad/salida para migrar contenedores y bases de datos si el proveedor cloud cambia condiciones o sufre caída.',
            auditEvidence:
              'Política de Seguridad Cloud, Matriz de Responsabilidad Compartida por servicio SaaS/IaaS, contratos SLA con cláusulas de seguridad y plan de salida probado.',
            attributes: [
              '#Preventivo',
              '#Confidencialidad',
              '#Integridad',
              '#Disponibilidad',
              '#Proteger',
              '#Seguridad_de_proveedores',
              '#Gobernanza_y_Ecosistema',
            ],
          },
          {
            code: 'Control 8.9',
            name: 'Gestión de configuración (Configuration management)',
            domain: 'Tecnológico (Cláusula 8)',
            isFeaturedInSyllabus: true,
            purpose:
              'Establecer, documentar, implementar, monitorear y revisar las configuraciones de seguridad (incluyendo líneas base de hardening) para hardware, software, servicios y redes.',
            technicalExample:
              'Ejemplo técnico: Aplicar plantillas CIS Benchmarks Nivel 1/2 mediante Ansible, Terraform o GPOs de Active Directory; deshabilitar puertos y protocolos inseguros (SMBv1, Telnet); eliminar cuentas por defecto y usar monitoreo de integridad de archivos (FIM) o políticas Azure Policy/AWS Config para detectar y revertir desviaciones ("configuration drift").',
            auditEvidence:
              'Estándares de línea base (Hardening Baselines), reportes de cumplimiento automatizado (SCAP/CIS-CAT) y bitácoras de control de cambios de configuración.',
            attributes: [
              '#Preventivo',
              '#Confidencialidad',
              '#Integridad',
              '#Disponibilidad',
              '#Proteger',
              '#Configuración_segura',
              '#Protección',
            ],
          },
          {
            code: 'Control 8.10',
            name: 'Borrado de información (Information deletion)',
            domain: 'Tecnológico (Cláusula 8)',
            isFeaturedInSyllabus: true,
            purpose:
              'Eliminar de forma segura la información almacenada en sistemas de información, dispositivos o cualquier otro medio de almacenamiento cuando ya no sea necesaria, reduciendo la superficie de exposición y cumpliendo leyes de protección de datos.',
            technicalExample:
              'Ejemplo técnico: Configurar políticas automatizadas de retención y purga en bases de datos productivas, buckets S3 y buzones de correo tras vencer el plazo legal; aplicar borrado criptográfico (Crypto-Erase) o sanitización bajo estándar NIST SP 800-88 (Clear/Purge/Destroy) en discos SSD/NVMe antes de dar de baja servidores o devolver equipos en leasing.',
            auditEvidence:
              'Tabla de plazos de retención de datos, logs automatizados de purga de registros vencidos y certificados de destrucción/sanitización de medios.',
            attributes: [
              '#Preventivo',
              '#Confidencialidad',
              '#Proteger',
              '#Protección_de_la_información',
              '#Protección',
              '#Legal_y_cumplimiento',
            ],
          },
          {
            code: 'Control 8.11',
            name: 'Enmascaramiento de datos (Data masking)',
            domain: 'Tecnológico (Cláusula 8)',
            isFeaturedInSyllabus: true,
            purpose:
              'Limitar la exposición de datos sensibles (especialmente Datos Personales / PII, historias clínicas o tarjetas financieras) mediante técnicas de enmascaramiento, seudonimización o anonimización acordes a la política de control de acceso y necesidades del negocio.',
            technicalExample:
              'Ejemplo técnico: Aplicar Dynamic Data Masking (DDM) en SQL Server/Oracle para que los operadores de Call Center vean solo los últimos 4 dígitos del DNI o tarjeta (****-****-****-4821), y ejecutar pipelines de anonimización irreversible o tokenización al clonar bases de datos hacia entornos de Desarrollo y QA.',
            auditEvidence:
              'Política de privacidad y enmascaramiento, scripts de ofuscación en pipelines CI/CD para entornos no productivos y capturas de vistas restringidas por rol.',
            attributes: [
              '#Preventivo',
              '#Confidencialidad',
              '#Proteger',
              '#Protección_de_la_información',
              '#Protección',
            ],
          },
          {
            code: 'Control 8.12',
            name: 'Prevención de fuga de datos (Data leakage prevention - DLP)',
            domain: 'Tecnológico (Cláusula 8)',
            isFeaturedInSyllabus: true,
            purpose:
              'Aplicar medidas de prevención de fuga de datos a sistemas, redes y cualquier otro dispositivo que procese, almacene o transmita información sensible para detectar y bloquear la divulgación o extracción no autorizada.',
            technicalExample:
              'Ejemplo técnico: Desplegar agentes Endpoint DLP y Network/Cloud DLP (ej. Microsoft Purview DLP, Symantec DLP, Forcepoint) que inspeccionen expresiones regulares (DNI, historias clínicas, código fuente) y etiquetas de sensibilidad, bloqueando automáticamente la copia hacia memorias USB personales, la subida a WeTransfer/correos personales o la impresión no autorizada.',
            auditEvidence:
              'Reglas activas en consola DLP, reportes de incidentes de intento de exfiltración bloqueados y políticas de bloqueo de almacenamiento USB.',
            attributes: [
              '#Preventivo',
              '#Detectivo',
              '#Confidencialidad',
              '#Proteger',
              '#Detectar',
              '#Protección_de_la_información',
              '#Protección',
              '#Defensa',
            ],
          },
          {
            code: 'Control 5.7',
            name: 'Inteligencia de amenazas (Threat intelligence)',
            domain: 'Organizacional (Cláusula 5)',
            isFeaturedInSyllabus: false,
            purpose:
              'Recopilar y analizar información relativa a las amenazas de seguridad de la información para producir inteligencia estratégica, táctica y operativa que permita tomar decisiones preventivas.',
            technicalExample:
              'Ejemplo técnico: Integrar feeds STIX/TAXII e indicadores de compromiso (IoCs) de CERTs nacionales y plataformas MISP directamente en el SIEM/Firewall/EDR, además de analizar tácticas MITRE ATT&CK de grupos de ransomware que atacan el sector.',
            auditEvidence:
              'Boletines de inteligencia de amenazas, suscripción a alertas CERT/CSIRT y reglas de bloqueo alimentadas por IoCs.',
            attributes: [
              '#Preventivo',
              '#Detectivo',
              '#Confidencialidad',
              '#Integridad',
              '#Disponibilidad',
              '#Identificar',
              '#Detectar',
              '#Gestión_de_amenazas_y_vulnerabilidades',
              '#Defensa',
            ],
          },
          {
            code: 'Control 5.30',
            name: 'Preparación de las TIC para la continuidad del negocio',
            domain: 'Organizacional (Cláusula 5)',
            isFeaturedInSyllabus: false,
            purpose:
              'Planificar, implementar, mantener y probar la preparación de la infraestructura TIC para asegurar que la disponibilidad de la información y los activos tecnológicos cumpla con los objetivos de recuperación (RTO y RPO) ante desastres.',
            technicalExample:
              'Ejemplo técnico: Realizar simulacros semestrales de conmutación por error (Failover) hacia un sitio alterno o región cloud secundaria verificando que el ERP se recupere dentro del RTO de 2 horas y con pérdida de datos menor al RPO de 15 minutos.',
            auditEvidence:
              'Análisis de Impacto al Negocio (BIA), Plan de Recuperación ante Desastres Tecnológicos (DRP) e informes de pruebas reales de failover.',
            attributes: [
              '#Correctivo',
              '#Disponibilidad',
              '#Responder',
              '#Recuperar',
              '#Continuidad',
              '#Resiliencia',
            ],
          },
          {
            code: 'Control 7.4',
            name: 'Monitoreo de la seguridad física',
            domain: 'Físico (Cláusula 7)',
            isFeaturedInSyllabus: false,
            purpose:
              'Monitorear continuamente las instalaciones críticas (centros de datos, oficinas, almacenes) para detectar accesos físicos no autorizados o eventos sospechosos.',
            technicalExample:
              'Ejemplo técnico: Implementar cámaras CCTV con detección de movimiento, sensores de apertura de puertas en racks/gabinetes de comunicaciones y alarmas conectadas 24/7 al centro de control.',
            auditEvidence:
              'Bitácoras de monitoreo de CCTV, pruebas de sensores de intrusión y registros de retención de grabaciones de seguridad.',
            attributes: [
              '#Detectivo',
              '#Confidencialidad',
              '#Integridad',
              '#Disponibilidad',
              '#Detectar',
              '#Seguridad_física',
              '#Defensa',
            ],
          },
          {
            code: 'Control 8.16',
            name: 'Actividades de monitoreo',
            domain: 'Tecnológico (Cláusula 8)',
            isFeaturedInSyllabus: false,
            purpose:
              'Monitorear redes, sistemas y aplicaciones en busca de comportamientos anómalos y aplicar acciones apropiadas para evaluar posibles incidentes de seguridad.',
            technicalExample:
              'Ejemplo técnico: Centralizar telemetría en un SIEM/XDR/SOC con casos de uso para detectar fuerza bruta, escalamiento de privilegios, movimiento lateral o descargas masivas fuera de horario laboral.',
            auditEvidence:
              'Arquitectura de correlación SIEM, catálogo de casos de uso de detección y bitácoras de respuesta a alertas del SOC.',
            attributes: [
              '#Detectivo',
              '#Confidencialidad',
              '#Integridad',
              '#Disponibilidad',
              '#Detectar',
              '#Responder',
              '#Gestión_de_eventos_de_seguridad',
              '#Defensa',
            ],
          },
          {
            code: 'Control 8.23',
            name: 'Filtrado web (Web filtering)',
            domain: 'Tecnológico (Cláusula 8)',
            isFeaturedInSyllabus: false,
            purpose:
              'Gestionar el acceso de los usuarios a sitios web externos para reducir la exposición a contenido malicioso, phishing, descarga de malware o servidores de comando y control (C2).',
            technicalExample:
              'Ejemplo técnico: Configurar un Secure Web Gateway (SWG) o filtro DNS corporativo (ej. Cisco Umbrella / Cloudflare Gateway) que bloquee dominios recién registrados, sitios de phishing conocidos y portales de almacenamiento no autorizados.',
            auditEvidence:
              'Política de navegación segura, reglas de categorización en proxy/SWG y reportes mensuales de amenazas web bloqueadas.',
            attributes: [
              '#Preventivo',
              '#Confidencialidad',
              '#Integridad',
              '#Disponibilidad',
              '#Proteger',
              '#Seguridad_de_sistemas_y_red',
              '#Protección',
            ],
          },
          {
            code: 'Control 8.28',
            name: 'Codificación segura (Secure coding)',
            domain: 'Tecnológico (Cláusula 8)',
            isFeaturedInSyllabus: false,
            purpose:
              'Aplicar principios de codificación segura durante el desarrollo y mantenimiento de software (propio o de terceros) para prevenir la introducción de vulnerabilidades explotables.',
            technicalExample:
              'Ejemplo técnico: Integrar escáneres SAST (SonarQube/Checkmarx), SCA para librerías de código abierto (Dependabot/Snyk) y validación de entradas contra OWASP Top 10 dentro del pipeline CI/CD antes de autorizar cualquier despliegue a producción.',
            auditEvidence:
              'Estándar de codificación segura, reportes de remediación SAST/SCA sin vulnerabilidades críticas y actas de revisión de código.',
            attributes: [
              '#Preventivo',
              '#Confidencialidad',
              '#Integridad',
              '#Disponibilidad',
              '#Proteger',
              '#Seguridad_de_aplicaciones',
              '#Protección',
            ],
          },
        ],
        takeaway:
          'Los 11 nuevos controles de 2022 (3 Organizacionales: 5.7, 5.23, 5.30; 1 Físico: 7.4; y 7 Tecnológicos: 8.9, 8.10, 8.11, 8.12, 8.16, 8.23, 8.28) son foco prioritario en toda auditoría de transición o certificación inicial.',
      },

      // LECCIÓN 1.4
      {
        id: 'leccion-1-4',
        code: 'Lección 1.4',
        title:
          'El Concepto de "Atributos de Control": Filtrado por Hashtags y Cruce Multi-Marco',
        duration: '20 min',
        summary:
          'Una de las innovaciones más potentes de ISO/IEC 27002:2022 es la incorporación de 5 categorías de Atributos para cada uno de los 93 controles. Estos atributos funcionan como etiquetas (hashtags) que permiten a los arquitectos de seguridad y auditores filtrar el catálogo de controles según el tipo de defensa, la propiedad CIA afectada, la función del NIST CSF, la capacidad operativa del área responsable o el dominio estratégico.',
        keyConcepts: [
          {
            title: '¿Para qué sirven los Atributos en la práctica?',
            description:
              'Permiten crear vistas personalizadas de la Declaración de Aplicabilidad (SoA): por ejemplo, listar en segundos todos los controles #Detectivos para el equipo del SOC, o todos los controles alineados a #Proteger o #Responder para un informe basado en NIST CSF.',
            tag: 'Vistas Dinámicas',
          },
          {
            title: 'Puente Nativo entre ISO 27002, NIST CSF y CIS Controls',
            description:
              'El Atributo 3 (Conceptos de ciberseguridad) utiliza exactamente los 5 verbos clásicos del NIST Cybersecurity Framework (#Identificar, #Proteger, #Detectar, #Responder, #Recuperar), preparando el terreno para el mapeo cruzado que veremos en el Módulo 4.',
            tag: 'Interoperabilidad GRC',
          },
        ],
        attributeCategories: [
          {
            id: 'attr-1',
            number: 1,
            name: '1. Tipo de control (Control Type)',
            purpose:
              'Define cuándo y cómo actúa el control respecto a la ocurrencia de un incidente de seguridad de la información.',
            hashtags: ['#Preventivo', '#Detectivo', '#Correctivo'],
          },
          {
            id: 'attr-2',
            number: 2,
            name: '2. Propiedades de seguridad de la información (Information Security Properties)',
            purpose:
              'Indica qué dimensión de la tríada CIA preserva principalmente el control cuando se implementa.',
            hashtags: ['#Confidencialidad', '#Integridad', '#Disponibilidad'],
          },
          {
            id: 'attr-3',
            number: 3,
            name: '3. Conceptos de ciberseguridad (Cybersecurity Concepts - Alineado con NIST CSF)',
            purpose:
              'Asocia el control con las funciones operativas del marco de ciberseguridad ISO/IEC TS 27110 y NIST CSF.',
            hashtags: [
              '#Identificar',
              '#Proteger',
              '#Detectar',
              '#Responder',
              '#Recuperar',
            ],
          },
          {
            id: 'attr-4',
            number: 4,
            name: '4. Capacidades operativas (Operational Capabilities)',
            purpose:
              'Clasifica los controles desde la perspectiva de las capacidades prácticas de los equipos de TI, RR.HH., Legal y Operaciones (15 valores en total).',
            hashtags: [
              '#Gobernanza',
              '#Gestión_de_activos',
              '#Protección_de_la_información',
              '#Seguridad_de_recursos_humanos',
              '#Seguridad_física',
              '#Seguridad_de_sistemas_y_red',
              '#Seguridad_de_aplicaciones',
              '#Configuración_segura',
              '#Gestión_de_identidades_y_accesos',
              '#Gestión_de_amenazas_y_vulnerabilidades',
              '#Continuidad',
              '#Seguridad_de_proveedores',
              '#Legal_y_cumplimiento',
              '#Gestión_de_eventos_de_seguridad',
              '#Aseguramiento_de_la_seguridad',
            ],
          },
          {
            id: 'attr-5',
            number: 5,
            name: '5. Dominios de seguridad (Security Domains)',
            purpose:
              'Agrupa los controles en 4 macro-perspectivas ejecutivas para reportes de directorio y estrategia.',
            hashtags: [
              '#Gobernanza_y_Ecosistema',
              '#Protección',
              '#Defensa',
              '#Resiliencia',
            ],
          },
        ],
        filterableControls: [
          {
            code: '5.1',
            name: 'Políticas para la seguridad de la información',
            domain: 'Organizacional (Cláusula 5)',
            summary:
              'Directrices aprobadas por la Alta Dirección para orientar el SGSI.',
            hashtags: [
              '#Preventivo',
              '#Confidencialidad',
              '#Integridad',
              '#Disponibilidad',
              '#Identificar',
              '#Gobernanza',
              '#Gobernanza_y_Ecosistema',
            ],
          },
          {
            code: '5.7',
            name: 'Inteligencia de amenazas',
            domain: 'Organizacional (Cláusula 5)',
            summary:
              'Recolección y análisis de información sobre actores de amenaza e IoCs.',
            hashtags: [
              '#Preventivo',
              '#Detectivo',
              '#Confidencialidad',
              '#Integridad',
              '#Disponibilidad',
              '#Identificar',
              '#Detectar',
              '#Gestión_de_amenazas_y_vulnerabilidades',
              '#Defensa',
            ],
          },
          {
            code: '5.23',
            name: 'Seguridad para el uso de servicios en la nube',
            domain: 'Organizacional (Cláusula 5)',
            summary:
              'Gobernanza multi-cloud, responsabilidad compartida y estrategia de salida.',
            hashtags: [
              '#Preventivo',
              '#Confidencialidad',
              '#Integridad',
              '#Disponibilidad',
              '#Proteger',
              '#Seguridad_de_proveedores',
              '#Gobernanza_y_Ecosistema',
              '#Protección',
            ],
          },
          {
            code: '5.30',
            name: 'Preparación de las TIC para la continuidad del negocio',
            domain: 'Organizacional (Cláusula 5)',
            summary:
              'Asegurar RTO y RPO de sistemas críticos ante desastres o disrupciones.',
            hashtags: [
              '#Correctivo',
              '#Disponibilidad',
              '#Responder',
              '#Recuperar',
              '#Continuidad',
              '#Resiliencia',
            ],
          },
          {
            code: '6.6',
            name: 'Acuerdos de confidencialidad o no divulgación (NDA)',
            domain: 'Personas (Cláusula 6)',
            summary:
              'Obligaciones contractuales para proteger información sensible por empleados y terceros.',
            hashtags: [
              '#Preventivo',
              '#Confidencialidad',
              '#Proteger',
              '#Seguridad_de_recursos_humanos',
              '#Protección_de_la_información',
              '#Legal_y_cumplimiento',
              '#Protección',
            ],
          },
          {
            code: '7.4',
            name: 'Monitoreo de la seguridad física',
            domain: 'Físico (Cláusula 7)',
            summary:
              'Vigilancia continua mediante cámaras, sensores y alarmas de intrusión física.',
            hashtags: [
              '#Detectivo',
              '#Confidencialidad',
              '#Integridad',
              '#Disponibilidad',
              '#Detectar',
              '#Seguridad_física',
              '#Defensa',
            ],
          },
          {
            code: '8.9',
            name: 'Gestión de configuración',
            domain: 'Tecnológico (Cláusula 8)',
            summary:
              'Líneas base de hardening para hardware, software, servicios y redes.',
            hashtags: [
              '#Preventivo',
              '#Confidencialidad',
              '#Integridad',
              '#Disponibilidad',
              '#Proteger',
              '#Configuración_segura',
              '#Protección',
            ],
          },
          {
            code: '8.10',
            name: 'Borrado de información',
            domain: 'Tecnológico (Cláusula 8)',
            summary:
              'Eliminación segura de datos cuando ya no son requeridos para cumplir regulaciones.',
            hashtags: [
              '#Preventivo',
              '#Confidencialidad',
              '#Proteger',
              '#Protección_de_la_información',
              '#Legal_y_cumplimiento',
              '#Protección',
            ],
          },
          {
            code: '8.11',
            name: 'Enmascaramiento de datos',
            domain: 'Tecnológico (Cláusula 8)',
            summary:
              'Anonimización, seudonimización y ofuscación de PII en pruebas y consultas.',
            hashtags: [
              '#Preventivo',
              '#Confidencialidad',
              '#Proteger',
              '#Protección_de_la_información',
              '#Protección',
            ],
          },
          {
            code: '8.12',
            name: 'Prevención de fuga de datos (DLP)',
            domain: 'Tecnológico (Cláusula 8)',
            summary:
              'Detección y bloqueo de exfiltración por correo, web, nube o puertos USB.',
            hashtags: [
              '#Preventivo',
              '#Detectivo',
              '#Confidencialidad',
              '#Proteger',
              '#Detectar',
              '#Protección_de_la_información',
              '#Protección',
              '#Defensa',
            ],
          },
          {
            code: '8.16',
            name: 'Actividades de monitoreo',
            domain: 'Tecnológico (Cláusula 8)',
            summary:
              'Monitoreo continuo de redes, sistemas y aplicaciones (SIEM/SOC) ante anomalías.',
            hashtags: [
              '#Detectivo',
              '#Confidencialidad',
              '#Integridad',
              '#Disponibilidad',
              '#Detectar',
              '#Responder',
              '#Gestión_de_eventos_de_seguridad',
              '#Defensa',
            ],
          },
        ],
        takeaway:
          'Usa el Mini-Filtrador interactivo en pantalla para comprobar cómo un mismo control puede actuar en múltiples dimensiones y cómo los hashtags facilitan el cruce con NIST CSF y CIS Controls.',
      },
    ],

    // ========================================================================
    // 3. PROCESO OBSERVA (20-40 MIN) - GALERÍA DE 2 VIDEOS CON GUÍAS
    // ========================================================================
    observa: {
      video1: {
        id: 'obs-video-1',
        title:
          'Video 1 (10 min): "Análisis visual: ¿Cómo navegar la Declaración de Aplicabilidad (SoA) bajo ISO 27001:2022?"',
        duration: '10 min',
        embedUrl: 'https://www.youtube.com/embed/bPVaOlJ6ln0',
        youtubeFallbackUrl:
          'https://www.youtube.com/results?search_query=Declaracion+de+Aplicabilidad+SoA+ISO+27001+2022',
        summary:
          'La Declaración de Aplicabilidad o SoA (Statement of Applicability, exigida en la Cláusula 6.1.3 d) es el documento columna vertebral que todo auditor de certificación solicita el primer día. Conecta los resultados de tu apreciación de riesgos con los 93 controles del Anexo A.',
        soaSteps: [
          {
            stepNumber: 1,
            fieldName: 'ID del Control y Dominio',
            questionAnswered: '¿Qué código normativo identifica al control?',
            description:
              'Debe listar de forma íntegra los 93 controles del Anexo A de ISO/IEC 27001:2022 (desde el 5.1 hasta el 8.34), sin borrar ninguna fila.',
            exampleValue: 'Control 8.12 (Dominio 8: Tecnológico)',
            commonAuditMistake:
              'Borrar de la tabla las filas de los controles que no aplican en vez de mantenerlos y justificar su exclusión.',
          },
          {
            stepNumber: 2,
            fieldName: 'Nombre Oficial del Control',
            questionAnswered: '¿Cuál es el título normativo exacto del control?',
            description:
              'Enuncia el nombre oficial según el Anexo A de ISO/IEC 27001:2022 e ISO/IEC 27002:2022 junto con su objetivo.',
            exampleValue:
              'Prevención de fuga de datos (Data leakage prevention - DLP)',
            commonAuditMistake:
              'Usar nombres antiguos de la versión 2013 (ej. A.13.2.1) en una auditoría bajo la edición 2022.',
          },
          {
            stepNumber: 3,
            fieldName: '¿Aplica? (SÍ / NO)',
            questionAnswered: '¿El control es aplicable al alcance del SGSI?',
            description:
              'Determina de forma binaria si el control es necesario para la organización o si se declara excluido.',
            exampleValue: 'SÍ (Aplicable)',
            commonAuditMistake:
              'Dejar celdas en blanco o ambiguas ("Tal vez / En evaluación") al momento de la auditoría de certificación.',
          },
          {
            stepNumber: 4,
            fieldName:
              'Justificación de Inclusión o Exclusión vinculada al Riesgo',
            questionAnswered:
              '¿Por qué se incluye o por qué se excluye este control?',
            description:
              'Explica la razón técnica, legal, contractual o el código de riesgo específico de la Matriz de Riesgos que obliga a incluir el control, o la razón por la que es imposible que aplique.',
            exampleValue:
              'Incluido para mitigar el riesgo R-08 (Exfiltración de historias clínicas y PII por USB o correo personal) y por Ley de Protección de Datos Personales.',
            commonAuditMistake:
              'Escribir frases genéricas como "Aplica por buenas prácticas" sin vincularlo al análisis de riesgos ni a requisitos legales.',
          },
          {
            stepNumber: 5,
            fieldName: 'Estado de Implementación',
            questionAnswered:
              '¿El control ya está operando en la realidad o solo planificado?',
            description:
              'Indica el nivel real de despliegue (ej. Implementado 100%, Parcialmente implementado 60%, o En Plan de Tratamiento).',
            exampleValue:
              'Implementado (100% en endpoints y correo corporativo)',
            commonAuditMistake:
              'Declarar "100% Implementado" en el papel cuando en la inspección técnica el control aún no está configurado.',
          },
          {
            stepNumber: 6,
            fieldName: 'Evidencia / Documento o Procedimiento Asociado',
            questionAnswered:
              '¿Dónde puede verificar el auditor que el control existe y opera?',
            description:
              'Referencia el código de la política, procedimiento, estándar técnico, consola o registro que demuestra la operación del control.',
            exampleValue:
              'EST-SEG-014 Estándar DLP, Consola Microsoft Purview DLP y Reporte Mensual SOC-DLP-2026.',
            commonAuditMistake:
              'No vincular ninguna evidencia verificable o referenciar documentos obsoletos sin firma ni control de versión.',
          },
        ],
        checkpointQuestion: {
          question:
            'Si tu organización no desarrolla software propio ni modifica código fuente (todo es SaaS cerrado), ¿cómo debes registrar el control 8.28 (Codificación segura) en la SoA?',
          options: [
            'Borrar la fila 8.28 del archivo Excel para que no estorbe.',
            'Mantener la fila 8.28, marcar "¿Aplica?: NO" y documentar en la justificación que dentro del alcance no se realiza desarrollo de software interno ni por encargo.',
            'Marcar "¿Aplica?: SÍ" e inventar un acta falsa de desarrollo.',
            'No presentar SoA porque la empresa usa SaaS.',
          ],
          correctIndex: 1,
          explanation:
            '¡Exacto! En la SoA deben figurar los 93 controles. Cuando un control se excluye válidamente, se marca como "NO aplicable" y se detalla la justificación objetiva vinculada al alcance y al análisis de riesgos.',
        },
      },
      video2: {
        id: 'obs-video-2',
        title:
          'Video 2 (10 min): "Casos reales de no conformidades mayores en auditorías de certificación del SGSI"',
        duration: '10 min',
        embedUrl: 'https://www.youtube.com/embed/U_P23SqJaDc',
        youtubeFallbackUrl:
          'https://www.youtube.com/results?search_query=no+conformidades+auditoria+ISO+27001+2022',
        summary:
          'Una No Conformidad Mayor (NC Mayor) impide otorgar o renovar el certificado ISO/IEC 27001:2022 hasta que sea subsanada con análisis de causa raíz y evidencia de acción correctiva. Analiza los 4 casos reales más frecuentes en auditorías de Etapa 1 y Etapa 2.',
        nonConformityCases: [
          {
            id: 'nc-1',
            number: 1,
            title:
              'Caso Real 1: Declaración de Aplicabilidad (SoA) desconectada de la Matriz de Riesgos',
            clauseViolated: 'Incumplimiento de Cláusula 6.1.3 d) y 6.1.2',
            scenario:
              'Una empresa descargó una plantilla SoA de internet donde marcaba 90 controles como aplicables, pero al revisar su Matriz de Riesgos los auditores descubrieron que los riesgos críticos identificados (ej. caída de servicios cloud y robo de laptops de teletrabajadores) no tenían ningún control asociado en el Plan de Tratamiento ni referencia en la SoA.',
            whyMajorNC:
              'Rompe la trazabilidad sistémica del SGSI: la SoA no es el resultado del análisis de riesgos de la organización, sino un documento copiado sin sustento real.',
            correctiveAction:
              'Reconstruir la trazabilidad vinculando cada riesgo evaluado sobre el umbral de aceptación con su opción de tratamiento, su Plan de Tratamiento (PTR) y su justificación específica en la SoA.',
          },
          {
            id: 'nc-2',
            number: 2,
            title:
              'Caso Real 2: Alcance que excluye infraestructura compartida crítica sin justificación',
            clauseViolated:
              'Incumplimiento de Cláusula 4.3 (Determinación del alcance del SGSI)',
            scenario:
              'Una financiera buscó certificar su "Proceso de originación de créditos digitales", pero excluyó del alcance la red corporativa y los servidores de bases de datos compartidos con otras unidades del grupo argumentando que "son administrados por el área de infraestructura corporativa".',
            whyMajorNC:
              'La Cláusula 4.3 exige considerar las interfaces y dependencias con actividades realizadas por otras áreas u organizaciones. No se puede certificar un proceso dejando fuera de gobierno los activos donde reside su información crítica.',
            correctiveAction:
              'Incluir en el alcance los activos que soportan el proceso o establecer controles formales de acuerdos de nivel de servicio interno/externo, auditando las interfaces y dependencias.',
          },
          {
            id: 'nc-3',
            number: 3,
            title:
              'Caso Real 3: Falta de evidencia de Revisión por la Dirección (Management Review)',
            clauseViolated:
              'Incumplimiento de Cláusula 9.3 (Revisión por la dirección)',
            scenario:
              'Durante la auditoría de Etapa 2, el CISO mostró un correo donde enviaba un resumen en PDF al Gerente General, pero no existía un acta ni evidencia de que la Alta Dirección hubiera revisado todas las entradas obligatorias de la Cláusula 9.3 (estado de acciones previas, cambios en el contexto, desempeño de seguridad, resultados de auditorías, estado de riesgos) ni tomado decisiones de mejora o asignación de recursos.',
            whyMajorNC:
              'Incumplimiento total de una cláusula mandatoria (9.3) y falta de evidencia de liderazgo (5.1). Enviar un correo unilateral no constituye una Revisión por la Dirección.',
            correctiveAction:
              'Celebrar formalmente la sesión de Revisión por la Dirección abordando todos los puntos de entrada (9.3.2) y documentando las decisiones de salida y recursos aprobados (9.3.3).',
          },
          {
            id: 'nc-4',
            number: 4,
            title:
              'Caso Real 4: Auditoría interna realizada sin objetividad ni competencia demostrada',
            clauseViolated:
              'Incumplimiento de Cláusula 9.2 (Auditoría interna) y Cláusula 7.2 (Competencia)',
            scenario:
              'Para ahorrar costos antes de la certificación, el propio Coordinador de Seguridad de la Información que redactó las políticas, la matriz de riesgos y la SoA firmó también el Informe de Auditoría Interna auditando el 100% del SGSI sin intervención de un tercero independiente.',
            whyMajorNC:
              'Viola directamente el requisito de la Cláusula 9.2.2 b): la organización debe seleccionar auditores y llevar a cabo auditorías que aseguren la objetividad y la imparcialidad del proceso (nadie puede auditar su propio trabajo).',
            correctiveAction:
              'Designar auditores internos calificados (Cláusula 7.2) de otra área independiente al diseño del SGSI o contratar un servicio de auditoría interna externa antes de la auditoría de certificación.',
          },
        ],
        checkpointQuestion: {
          question:
            '¿Cuál de las siguientes situaciones constituye una No Conformidad Mayor segura durante una auditoría de certificación ISO/IEC 27001:2022?',
          options: [
            'Que el propio responsable que diseñó e implementó el SGSI realice y firme la auditoría interna de todo su trabajo (violación de imparcialidad en Cláusula 9.2).',
            'Utilizar una hoja de cálculo o software GRC para gestionar la Declaración de Aplicabilidad (SoA).',
            'Realizar dos revisiones por la dirección al año en lugar de solo una.',
            'Aplicar los 5 atributos de ISO/IEC 27002:2022 para filtrar controles en la SoA.',
          ],
          correctIndex: 0,
          explanation:
            '¡Correcto! Auditar el propio trabajo destruye la objetividad e imparcialidad exigidas por la Cláusula 9.2 de ISO/IEC 27001:2022, generando una No Conformidad Mayor.',
        },
      },
    },

    // ========================================================================
    // 4. PROCESO EXPLORA (30-45 MIN)
    // ========================================================================
    explora: {
      comparativeReadingTitle:
        'Lectura Interactiva: Matriz Comparativa Resumida — Cambios Estructurales entre ISO/IEC 27002:2013 e ISO/IEC 27002:2022',
      comparativeReadingSubtitle:
        'Analiza cómo evolucionó la arquitectura de controles para simplificar la gestión, eliminar redundancias y adoptar atributos modernos.',
      structuralChangesTable: [
        {
          criterion: 'Número total de controles',
          iso2013: '114 controles',
          iso2022: '93 controles',
          practicalMeaning:
            'Reducción neta de 21 controles gracias a la consolidación de controles redundantes, sin perder cobertura de seguridad.',
        },
        {
          criterion: 'Agrupación en Dominios / Temas',
          iso2013: '14 dominios (Cláusulas A.5 a A.18)',
          iso2022: '4 grandes temas/dominios (Cláusulas 5, 6, 7 y 8)',
          practicalMeaning:
            'Organizacionales (37), Personas (8), Físicos (14) y Tecnológicos (34). Mucho más claro para asignar responsables.',
        },
        {
          criterion: 'Controles fusionados (Merged)',
          iso2013: '57 controles dispersos en múltiples secciones',
          iso2022: '24 controles consolidados',
          practicalMeaning:
            'Simplifica drásticamente la documentación de políticas y evidencias en la Declaración de Aplicabilidad (SoA).',
        },
        {
          criterion: 'Controles nuevos (New)',
          iso2013: 'No contemplados explícitamente en 2013',
          iso2022: '11 controles nuevos incorporados',
          practicalMeaning:
            '5.7 Threat Intel, 5.23 Cloud, 5.30 Continuidad TIC, 7.4 Monitoreo físico, 8.9 Configuración, 8.10 Borrado, 8.11 Enmascaramiento, 8.12 DLP, 8.16 Monitoreo, 8.23 Filtrado web y 8.28 Codificación segura.',
        },
        {
          criterion: 'Controles actualizados (Updated)',
          iso2013: '58 controles con redacción de 2013',
          iso2022: '58 controles modernizados (más 1 sin cambios estructurales)',
          practicalMeaning:
            'Lenguaje actualizado a entornos híbridos, identidades federadas, DevOps y teletrabajo.',
        },
        {
          criterion: 'Sistema de Atributos de Control',
          iso2013: 'Inexistente (solo jerarquía rígida de capítulos)',
          iso2022: '5 Categorías de Atributos con hashtags (#)',
          practicalMeaning:
            'Permite filtrar por Tipo (#Preventivo/#Detectivo/#Correctivo), CIA, Conceptos NIST CSF, Capacidades operativas y Dominios.',
        },
      ],
      officialDocuments: [
        {
          id: 'doc-iso-27001',
          badge: 'Estándar Certificable Oficial',
          title:
            'Norma Oficial ISO/IEC 27001:2022 — Seguridad de la información, ciberseguridad y protección de la privacidad',
          organization:
            'Portal Oficial ISO (International Organization for Standardization)',
          url: 'https://www.iso.org/standard/27001',
          description:
            'Ficha oficial y resumen ejecutivo del estándar certificable ISO/IEC 27001:2022 que define los requisitos obligatorios del SGSI (Cláusulas 4 a 10) y el catálogo normativo del Anexo A.',
          keyTopics: [
            'Cláusulas 4 a 10',
            'Ciclo PHVA',
            'Anexo A (93 controles)',
            'Certificación acreditada',
          ],
        },
        {
          id: 'doc-iso-27002',
          badge: 'Catálogo Oficial de Controles',
          title:
            'Norma Oficial ISO/IEC 27002:2022 — Controles de seguridad de la información (Vista previa y catálogo ISO)',
          organization: 'Portal Oficial ISO — ISO/IEC JTC 1/SC 27',
          url: 'https://www.iso.org/standard/75652.html',
          description:
            'Referencia oficial del estándar ISO/IEC 27002:2022 con la guía detallada de implementación, propósito y tabla de 5 atributos para los 93 controles distribuidos en los 4 dominios.',
          keyTopics: [
            '37 Organizacionales',
            '8 Personas',
            '14 Físicos',
            '34 Tecnológicos',
            '5 Atributos',
          ],
        },
        {
          id: 'doc-incibe',
          badge: 'Guías Prácticas en Español',
          title:
            'Guía de Implementación de un SGSI y Políticas de Seguridad para Empresas',
          organization: 'INCIBE — Instituto Nacional de Ciberseguridad',
          url: 'https://www.incibe.es/empresas/guias',
          description:
            'Colección abierta de guías técnicas, plantillas de políticas corporativas, análisis de riesgos y buenas prácticas en español alineadas con el estándar ISO/IEC 27001.',
          keyTopics: [
            'Políticas de seguridad',
            'Gestión de riesgos',
            'Continuidad de negocio',
            'PyMEs y Corporativos',
          ],
        },
        {
          id: 'doc-nqa',
          badge: 'Guía de Transición y Auditoría',
          title:
            'Guía de Transición ISO/IEC 27001:2022 y Mapeo de Controles 2013 a 2022',
          organization: 'NQA — Organismo Global de Certificación',
          url: 'https://www.nqa.com/es-es/resources/blog/october-2022/iso-27001-2022-update',
          description:
            'Análisis técnico desde la perspectiva de un ente certificador sobre los cambios en las cláusulas (como la 6.3), los 11 nuevos controles y los criterios clave evaluados en auditoría.',
          keyTopics: [
            'Transición 2013 → 2022',
            'Cláusula 6.3',
            'Auditoría Etapa 1 y 2',
            'Mapeo Anexo A',
          ],
        },
      ],
      soaTemplateTitle:
        'Recurso Descargable Funcional: Plantilla Básica en Hoja de Cálculo para la Declaración de Aplicabilidad (SoA)',
      soaTemplateDescription:
        'Descarga esta plantilla pre-poblada en formato .CSV compatible directamente con Microsoft Excel y Google Sheets (codificada con BOM UTF-8 para preservar tildes y caracteres especiales). Incluye las 9 columnas auditables exigidas por la Cláusula 6.1.3 d) de ISO/IEC 27001:2022.',
      soaSampleRows: [
        {
          code: '5.1',
          theme: 'Organizacional (Cláusula 5)',
          controlName: 'Políticas para la seguridad de la información',
          controlType: '#Preventivo',
          applicable: 'SÍ',
          justification:
            'Requisito obligatorio Cláusula 5.2 y mitigación de riesgo de falta de gobierno ejecutivo (R-01).',
          owner: 'CISO / Comité de Seguridad',
          implementationProgress: '100%',
          evidenceReference:
            'POL-SGSI-001 Política General de Seguridad v2.0 aprobada por Directorio',
        },
        {
          code: '5.7',
          theme: 'Organizacional (Cláusula 5)',
          controlName: 'Inteligencia de amenazas (Threat intelligence)',
          controlType: '#Preventivo / #Detectivo',
          applicable: 'SÍ',
          justification:
            'Mitigación de riesgo R-04 de campañas de phishing y ransomware dirigidas al sector.',
          owner: 'Líder de SOC / Ciberinteligencia',
          implementationProgress: '85%',
          evidenceReference:
            'PRO-SOC-004 Procedimiento de Ingesta de IoCs y Boletines CERT',
        },
        {
          code: '5.23',
          theme: 'Organizacional (Cláusula 5)',
          controlName:
            'Seguridad de la información para el uso de servicios en la nube',
          controlType: '#Preventivo',
          applicable: 'SÍ',
          justification:
            'Mitigación de riesgo R-07 en infraestructura híbrida y plataformas SaaS/IaaS críticas.',
          owner: 'Arquitecto Cloud / CISO',
          implementationProgress: '90%',
          evidenceReference:
            'MAT-CLOUD-002 Matriz de Responsabilidad Compartida AWS/Azure y Plan de Salida',
        },
        {
          code: '5.30',
          theme: 'Organizacional (Cláusula 5)',
          controlName:
            'Preparación de las TIC para la continuidad del negocio',
          controlType: '#Correctivo',
          applicable: 'SÍ',
          justification:
            'Cumplimiento de RTO <= 2h y RPO <= 15m definidos en el BIA corporativo (Riesgo R-11).',
          owner: 'Gerente de Infraestructura y Operaciones TI',
          implementationProgress: '80%',
          evidenceReference:
            'PLN-DRP-001 Plan de Continuidad TIC e Informe de Simulacro Failover 2026',
        },
        {
          code: '6.1',
          theme: 'Personas (Cláusula 6)',
          controlName: 'Selección de personal (Screening)',
          controlType: '#Preventivo',
          applicable: 'SÍ',
          justification:
            'Mitigación de riesgo de fraude interno y validación de idoneidad en puestos críticos (R-14).',
          owner: 'Gerencia de Recursos Humanos',
          implementationProgress: '100%',
          evidenceReference:
            'PRO-RRHH-003 Protocolo de Verificación de Antecedentes y Referencias',
        },
        {
          code: '6.6',
          theme: 'Personas (Cláusula 6)',
          controlName: 'Acuerdos de confidencialidad o no divulgación (NDA)',
          controlType: '#Preventivo',
          applicable: 'SÍ',
          justification:
            'Protección jurídica de datos de clientes e historias clínicas para personal fijo, temporal y terceros (R-15).',
          owner: 'Gerencia Legal / Recursos Humanos',
          implementationProgress: '100%',
          evidenceReference:
            'FOR-LEG-009 Contrato NDA para Colaboradores, Temporales y Proveedores',
        },
        {
          code: '6.7',
          theme: 'Personas (Cláusula 6)',
          controlName: 'Trabajo remoto (Teletrabajo)',
          controlType: '#Preventivo',
          applicable: 'SÍ',
          justification:
            'Mitigación de riesgo de acceso remoto desde redes domésticas por personal híbrido (R-18).',
          owner: 'CISO / Recursos Humanos',
          implementationProgress: '95%',
          evidenceReference:
            'POL-TEL-005 Política de Teletrabajo Seguro (VPN + MFA + Cifrado BitLocker)',
        },
        {
          code: '7.1',
          theme: 'Físico (Cláusula 7)',
          controlName: 'Perímetros de seguridad física',
          controlType: '#Preventivo',
          applicable: 'SÍ',
          justification:
            'Protección perimetral de sede central y sala de servidores local (R-21).',
          owner: 'Jefe de Seguridad Patrimonial',
          implementationProgress: '100%',
          evidenceReference:
            'MAN-FIS-001 Manual de Seguridad Física y Control de Accesos Biométrico',
        },
        {
          code: '7.4',
          theme: 'Físico (Cláusula 7)',
          controlName: 'Monitoreo de la seguridad física',
          controlType: '#Detectivo',
          applicable: 'SÍ',
          justification:
            'Detección temprana de intrusión física en cuarto de telecomunicaciones y data center (R-22).',
          owner: 'Jefe de Seguridad Patrimonial',
          implementationProgress: '100%',
          evidenceReference:
            'REG-CCTV-002 Sistema de Videovigilancia 24/7 y Sensores de Apertura en Racks',
        },
        {
          code: '8.9',
          theme: 'Tecnológico (Cláusula 8)',
          controlName: 'Gestión de configuración',
          controlType: '#Preventivo',
          applicable: 'SÍ',
          justification:
            'Mitigación de vulnerabilidades por configuraciones por defecto en servidores y red (R-26).',
          owner: 'Administrador de Sistemas y Redes',
          implementationProgress: '85%',
          evidenceReference:
            'EST-HARD-004 Línea Base de Hardening CIS Benchmark Windows/Linux',
        },
        {
          code: '8.10',
          theme: 'Tecnológico (Cláusula 8)',
          controlName: 'Borrado de información',
          controlType: '#Preventivo',
          applicable: 'SÍ',
          justification:
            'Cumplimiento de Ley de Protección de Datos Personales al vencer periodo de retención (R-28).',
          owner: 'Administrador de Bases de Datos (DBA)',
          implementationProgress: '75%',
          evidenceReference:
            'PRO-DAT-007 Procedimiento de Sanitización NIST 800-88 y Purga Automatizada',
        },
        {
          code: '8.11',
          theme: 'Tecnológico (Cláusula 8)',
          controlName: 'Enmascaramiento de datos',
          controlType: '#Preventivo',
          applicable: 'SÍ',
          justification:
            'Protección de PII e historias clínicas en ambientes de QA/Pruebas y pantallas de consulta (R-29).',
          owner: 'Arquitecto de Datos / Líder QA',
          implementationProgress: '80%',
          evidenceReference:
            'EST-MASK-003 Estándar de Anonimización y Dynamic Data Masking',
        },
        {
          code: '8.12',
          theme: 'Tecnológico (Cláusula 8)',
          controlName: 'Prevención de fuga de datos (DLP)',
          controlType: '#Preventivo / #Detectivo',
          applicable: 'SÍ',
          justification:
            'Mitigación crítica contra extracción no autorizada por puertos USB, correo o web (R-30).',
          owner: 'Especialista de Ciberseguridad / SOC',
          implementationProgress: '90%',
          evidenceReference:
            'POL-DLP-001 Reglas de Bloqueo USB y Prevención de Exfiltración en Endpoints',
        },
        {
          code: '8.27',
          theme: 'Tecnológico (Cláusula 8)',
          controlName:
            'Principios de arquitectura e ingeniería de sistemas seguros',
          controlType: '#Preventivo',
          applicable: 'NO',
          justification:
            'EXCLUSIÓN JUSTIFICADA: Dentro del alcance certificado no se realiza diseño ni desarrollo de software/sistemas a medida; toda la operación descansa sobre plataformas SaaS cerradas evaluadas bajo el control 5.23.',
          owner: 'Gerente de TI / CISO',
          implementationProgress: 'N/A (Excluido)',
          evidenceReference:
            'DOC-ALC-001 Alcance del SGSI sección 4.2 (Sin desarrollo de software in-house)',
        },
      ],
    },

    // ========================================================================
    // 5. PROCESO PRACTICA (60-90 MIN) - 2 LABORATORIOS INTERACTIVOS
    // ========================================================================
    practica: {
      activity1Title:
        'Actividad 1: Clasificador de los 12 Controles en los 4 Dominios (Organizacional, Personas, Físico, Tecnológico)',
      activity1Instructions:
        'Clasifica cada uno de los siguientes 12 controles oficiales de ISO/IEC 27002:2022 en su dominio correcto haciendo clic en la categoría correspondiente. Recibirás retroalimentación técnica inmediata y tu puntuación sobre 12.',
      classificationItems: [
        {
          id: 'p1-1',
          controlCode: '5.7',
          statement: '5.7 Inteligencia de amenazas',
          correctDomain: 'Organizacional',
          explanation:
            '¡Correcto! El control 5.7 (Inteligencia de amenazas) es uno de los 37 controles del Dominio Organizacional (Cláusula 5), pues articula la recolección y análisis estratégico/táctico de amenazas para toda la organización.',
        },
        {
          id: 'p1-2',
          controlCode: '5.23',
          statement:
            '5.23 Seguridad de la información en el uso de servicios en la nube',
          correctDomain: 'Organizacional',
          explanation:
            '¡Correcto! El control 5.23 pertenece al Dominio Organizacional (Cláusula 5) ya que regula la gobernanza, contratos, responsabilidades compartidas y estrategia de salida de los servicios cloud.',
        },
        {
          id: 'p1-3',
          controlCode: '5.1',
          statement: '5.1 Políticas para la seguridad de la información',
          correctDomain: 'Organizacional',
          explanation:
            '¡Correcto! El control 5.1 abre el Dominio Organizacional (Cláusula 5) estableciendo el marco normativo de políticas aprobadas por la dirección.',
        },
        {
          id: 'p1-4',
          controlCode: '6.1',
          statement: '6.1 Selección de personal (Screening)',
          correctDomain: 'Personas',
          explanation:
            '¡Correcto! El control 6.1 pertenece a los 8 controles del Dominio Personas (Cláusula 6), verificando antecedentes e idoneidad de candidatos antes de su contratación.',
        },
        {
          id: 'p1-5',
          controlCode: '6.6',
          statement: '6.6 Acuerdos de confidencialidad o no divulgación (NDA)',
          correctDomain: 'Personas',
          explanation:
            '¡Correcto! El control 6.6 forma parte del Dominio Personas (Cláusula 6), asegurando que trabajadores, temporales y terceros firmen compromisos formales de reserva de información.',
        },
        {
          id: 'p1-6',
          controlCode: '6.7',
          statement: '6.7 Trabajo remoto (Teletrabajo)',
          correctDomain: 'Personas',
          explanation:
            '¡Correcto! El control 6.7 se ubica en el Dominio Personas (Cláusula 6), regulando el comportamiento seguro del colaborador cuando trabaja fuera de las instalaciones de la empresa.',
        },
        {
          id: 'p1-7',
          controlCode: '7.1',
          statement: '7.1 Perímetros de seguridad física',
          correctDomain: 'Físico',
          explanation:
            '¡Correcto! El control 7.1 encabeza los 14 controles del Dominio Físico (Cláusula 7), definiendo barreras físicas, muros y accesos perimetrales.',
        },
        {
          id: 'p1-8',
          controlCode: '7.4',
          statement: '7.4 Monitoreo de la seguridad física',
          correctDomain: 'Físico',
          explanation:
            '¡Correcto! El control 7.4 es el nuevo control incorporado en 2022 dentro del Dominio Físico (Cláusula 7) para la vigilancia continua de instalaciones mediante CCTV y sensores.',
        },
        {
          id: 'p1-9',
          controlCode: '7.8',
          statement: '7.8 Ubicación y protección de equipos',
          correctDomain: 'Físico',
          explanation:
            '¡Correcto! El control 7.8 pertenece al Dominio Físico (Cláusula 7), resguardando el emplazamiento físico de servidores y equipamiento frente a riesgos ambientales o miradas no autorizadas.',
        },
        {
          id: 'p1-10',
          controlCode: '8.9',
          statement: '8.9 Gestión de configuración',
          correctDomain: 'Tecnológico',
          explanation:
            '¡Correcto! El control 8.9 forma parte de los 34 controles del Dominio Tecnológico (Cláusula 8), exigiendo líneas base de hardening en hardware, software, servicios y redes.',
        },
        {
          id: 'p1-11',
          controlCode: '8.11',
          statement: '8.11 Enmascaramiento de datos',
          correctDomain: 'Tecnológico',
          explanation:
            '¡Correcto! El control 8.11 es un nuevo control del Dominio Tecnológico (Cláusula 8) enfocado en anonimizar, seudonimizar u ofuscar datos sensibles.',
        },
        {
          id: 'p1-12',
          controlCode: '8.12',
          statement: '8.12 Prevención de fuga de datos (DLP)',
          correctDomain: 'Tecnológico',
          explanation:
            '¡Correcto! El control 8.12 pertenece al Dominio Tecnológico (Cláusula 8), desplegando controles técnicos para detectar y bloquear la exfiltración de datos por USB, web o correo.',
        },
      ],
      activity2Title:
        'Actividad 2: Auditoría de Alcance — Identificar errores en la redacción de un alcance de certificación de SGSI (Cláusula 4.3)',
      activity2Instructions:
        'Actúa como Auditor Líder de Certificación ISO/IEC 27001:2022. Evalúa los 3 redactados de alcance empresarial y selecciona el diagnóstico técnico correcto para cada caso.',
      scopeCases: [
        {
          id: 'scope-case-a',
          caseCode: 'Caso A',
          scopeDraft:
            '"El SGSI abarca toda la empresa, excepto el servidor de base de datos de clientes porque está administrado por un proveedor externo y es muy difícil de auditar."',
          options: [
            {
              id: 'sca-1',
              label:
                'Alcance Conforme: Es válido excluir cualquier servidor administrado por un tercero para facilitar la auditoría.',
              isCorrect: false,
            },
            {
              id: 'sca-2',
              label:
                'Error Crítico de Alcance: Exclusión arbitraria de un activo crítico que almacena información central del negocio sin gestionar las interfaces ni el riesgo de terceros (Cláusula 4.3).',
              isCorrect: true,
            },
            {
              id: 'sca-3',
              label:
                'Alcance Conforme siempre y cuando el servidor tenga instalado un antivirus gratuito.',
              isCorrect: false,
            },
          ],
          auditVerdict: 'ERROR CRÍTICO DE ALCANCE',
          explanation:
            'Dictamen de Auditoría: La Cláusula 4.3 exige considerar las interfaces y dependencias con las actividades realizadas por otras organizaciones (proveedores). Excluir arbitrariamente la base de datos de clientes porque "es difícil de auditar" invalida el alcance del SGSI y genera una No Conformidad Mayor.',
          clauseReference:
            'ISO/IEC 27001:2022 Cláusula 4.3 c) y Controles 5.19 - 5.23',
        },
        {
          id: 'scope-case-b',
          caseCode: 'Caso B',
          scopeDraft: '"Certificación ISO 27001 de la oficina de TI."',
          options: [
            {
              id: 'scb-1',
              label:
                'Error Crítico de Alcance: Redacción ambigua; no define procesos de negocio, servicios de valor, ubicaciones físicas/lógicas ni interfaces o dependencias con otras áreas.',
              isCorrect: true,
            },
            {
              id: 'scb-2',
              label:
                'Alcance Conforme: Mientras más corto y genérico sea el texto del alcance, mejor para el certificado.',
              isCorrect: false,
            },
            {
              id: 'scb-3',
              label:
                'Alcance Conforme: Los organismos de acreditación solo certifican oficinas físicas aisladas sin procesos.',
              isCorrect: false,
            },
          ],
          auditVerdict: 'ERROR CRÍTICO DE ALCANCE',
          explanation:
            'Dictamen de Auditoría: Un alcance no puede redactarse como "la oficina de TI" en abstracto. Debe precisar qué procesos o servicios específicos están cubiertos, qué activos de información protegen, en qué sedes o entornos operan y bajo qué Declaración de Aplicabilidad (SoA) se gobiernan.',
          clauseReference: 'ISO/IEC 27001:2022 Cláusula 4.3 a), b) y c)',
        },
        {
          id: 'scope-case-c',
          caseCode: 'Caso C',
          scopeDraft:
            '"El SGSI aplica a los procesos de gestión, almacenamiento y respaldo de historias clínicas digitales operados por la Dirección de TI en la sede central y su infraestructura en la nube híbrida, de acuerdo con la Declaración de Aplicabilidad versión 2.0."',
          options: [
            {
              id: 'scc-1',
              label:
                'Error Crítico de Alcance: Nunca se debe mencionar la nube híbrida ni la Declaración de Aplicabilidad en el alcance.',
              isCorrect: false,
            },
            {
              id: 'scc-2',
              label:
                'Alcance Bien Redactado (Conforme): Define con precisión los procesos cubiertos, el activo crítico (historias clínicas digitales), el área responsable, la ubicación física/nube híbrida y la referencia expresa a la SoA vigente.',
              isCorrect: true,
            },
            {
              id: 'scc-3',
              label:
                'Error Crítico de Alcance: Falta listar el nombre y DNI de todos los pacientes dentro del párrafo del alcance.',
              isCorrect: false,
            },
          ],
          auditVerdict: 'ALCANCE BIEN REDACTADO (CONFORME)',
          explanation:
            'Dictamen de Auditoría: ¡Redacción ejemplar conforme a la Cláusula 4.3! Delimita claramente los procesos (gestión, almacenamiento y respaldo), el activo de información (historias clínicas digitales), la unidad organizativa (Dirección de TI), las fronteras físicas y lógicas (sede central e infraestructura en nube híbrida) y su vinculación con la SoA v2.0.',
          clauseReference:
            'ISO/IEC 27001:2022 Cláusula 4.3 (Conforme para Certificación)',
        },
      ],
    },

    // ========================================================================
    // 6. PROCESO APLICA (30-60 MIN) - SIMULADOR DE TOMA DE DECISIONES
    // ========================================================================
    aplica: {
      title:
        'Simulador de Toma de Decisiones: Protección de Historias Clínicas en Entorno Híbrido',
      subtitle:
        'Analiza el escenario clínico real y toma la decisión de arquitectura de controles que articula las dimensiones humana/legal y tecnológica.',
      situation:
        'Una clínica local almacena historias clínicas en servidores físicos y en la nube.',
      challengeQuestion:
        '¿Qué control de Personas/Organizativo y qué control Tecnológico de ISO 27002 son indispensables para evitar que el personal temporal descargue datos médicos a dispositivos USB personales?',
      clinicalContextDetails: [
        {
          label: 'Activo Crítico en Riesgo',
          detail:
            'Historias clínicas electrónicas y diagnósticos médicos (Datos Personales Sensibles / Salud) alojados en servidores locales y nube.',
        },
        {
          label: 'Vector de Exposición',
          detail:
            'Personal temporal rotativo con acceso legítimo al sistema clínico desde estaciones de trabajo con puertos USB habilitados y sin restricción contractual específica.',
        },
        {
          label: 'Impacto Potencial',
          detail:
            'Exfiltración masiva de datos médicos, sanciones regulatorias severas por violación de privacidad de pacientes y pérdida irreversible de reputación clínica.',
        },
      ],
      options: [
        {
          id: 'aplica-opt-a',
          optionCode: 'Opción A',
          title: 'Enfoque Perimetral Aislado',
          description:
            'Instalar únicamente un firewall perimetral más costoso y cambiar las contraseñas del Wi-Fi cada mes.',
          isCorrect: false,
          immediateFeedback:
            'Decisión Incorrecta: Un firewall perimetral y el cambio de clave Wi-Fi no frenan a un usuario interno autorizado que ya inició sesión en la PC del consultorio y conecta físicamente una memoria USB personal, ni tampoco establecen responsabilidad legal formal.',
          controlsMapped: [
            'Sin cobertura sobre puertos extraíbles ni acuerdos legales de personal',
          ],
        },
        {
          id: 'aplica-opt-b',
          optionCode: 'Opción B (Decisión Correcta)',
          title:
            'Coexistencia de Control de Personas/Legal + Control Tecnológico DLP/Endpoints',
          description:
            'Implementar acuerdos de confidencialidad y términos de empleo (Dominio Personas: 6.2 / 6.6) junto con políticas de control de acceso y herramientas de Prevención de Fuga de Datos - DLP y bloqueo de puertos extraíbles (Dominio Tecnológico: 8.12 / 8.1).',
          isCorrect: true,
          immediateFeedback:
            '¡Decisión Óptima de Arquitecto SGSI! Has combinado la salvaguarda jurídica/administrativa sobre el personal temporal con el bloqueo técnico preventivo en el endpoint.',
          consequenceCard:
            'Se establece responsabilidad legal formal y se mitiga el riesgo de exfiltración no autorizada mediante bloqueos por software.',
          explanationCard:
            'Un SGSI requiere la coexistencia coordinada de medidas administrativas/legales con salvaguardas técnicas preventivas.',
          controlsMapped: [
            'Control 6.2: Términos y condiciones de empleo',
            'Control 6.6: Acuerdos de confidencialidad o no divulgación (NDA)',
            'Control 5.15: Control de acceso (Mínimo privilegio)',
            'Control 8.1: Dispositivos de punto final del usuario (Bloqueo de medios USB)',
            'Control 8.12: Prevención de fuga de datos (DLP en endpoints y nube)',
          ],
        },
        {
          id: 'aplica-opt-c',
          optionCode: 'Opción C',
          title: 'Enfoque Solo Documental sin Bloqueo Técnico',
          description:
            'Hacer firmar una declaración jurada al personal temporal pero dejar todos los puertos USB y carpetas compartidas abiertas para no afectar la velocidad del trabajo médico.',
          isCorrect: false,
          immediateFeedback:
            'Decisión Incorrecta: Carece por completo de control técnico preventivo. Si un trabajador temporal copia 50,000 historias clínicas en un USB en 30 segundos, la declaración jurada permitirá iniciar un juicio posterior, pero el robo de datos médicos y el daño reputacional y regulatorio a la clínica ya estarán consumados.',
          controlsMapped: [
            'Falta Control Tecnológico 8.12 (DLP) y 8.1 (Protección de Endpoints)',
          ],
        },
      ],
    },

    // ========================================================================
    // 7. PROCESO COMPRUEBA (15-30 MIN) - CUESTIONARIO FORMATIVO DE 10 PREGUNTAS
    // ========================================================================
    comprueba: {
      title: 'Cuestionario Formativo del Módulo 1 (10 Preguntas)',
      subtitle:
        'Evaluación interactiva sin penalización sobre las Cláusulas 4 a 10 de ISO/IEC 27001:2022 y los dominios, controles y atributos de ISO/IEC 27002:2022. Puedes reiniciar y practicar cuantas veces desees.',
      passingScore: 70,
      questions: [
        {
          id: 'q1',
          number: 1,
          type: 'Opción Múltiple',
          category: 'Recordar/Comprender (30%)',
          question:
            '¿Cómo evolucionó la estructura del catálogo de controles entre ISO/IEC 27002:2013 e ISO/IEC 27002:2022?',
          options: [
            'Pasó de 93 controles en 4 dominios a 114 controles en 14 dominios.',
            'Pasó de 114 controles en 14 dominios (2013) a 93 controles agrupados en 4 grandes dominios: Organizacionales (37), Personas (8), Físicos (14) y Tecnológicos (34).',
            'Eliminó todos los controles físicos y dejó únicamente 50 controles de nube.',
            'Se fusionó con ITIL v4 y ahora tiene 34 prácticas de servicio.',
          ],
          correctIndex: 1,
          explanation:
            'ISO/IEC 27002:2022 simplificó los 114 controles de 2013 en 93 controles (24 fusionados, 58 actualizados y 11 nuevos) distribuidos en 4 temas: Organizacionales (37), Personas (8), Físicos (14) y Tecnológicos (34).',
        },
        {
          id: 'q2',
          number: 2,
          type: 'Verdadero / Falso Argumentado',
          category: 'Recordar/Comprender (30%)',
          question:
            'VERDADERO O FALSO: "Una organización que busca certificarse en ISO/IEC 27001:2022 puede declarar como No Aplicable la Cláusula 9 (Auditoría interna y Revisión por la dirección) si justifica que tiene poco personal."',
          options: [
            'Verdadero, porque todas las cláusulas de la 4 a la 10 son opcionales para las PyMEs.',
            'Falso, porque las Cláusulas 4 a la 10 son 100% mandatorias y ninguna puede excluirse; solo los controles del Anexo A admiten exclusiones justificadas en la SoA.',
          ],
          correctIndex: 1,
          explanation:
            '¡Falso! Las Cláusulas 4, 5, 6, 7, 8, 9 y 10 constituyen el cuerpo obligatorio del SGSI. Omitir la auditoría interna (9.2) o la revisión por la dirección (9.3) genera una No Conformidad Mayor automática.',
        },
        {
          id: 'q3',
          number: 3,
          type: 'Opción Múltiple',
          category: 'Recordar/Comprender (30%)',
          question:
            '¿Cuál de las siguientes listas contiene únicamente controles NUEVOS introducidos por primera vez en la versión 2022 de ISO/IEC 27002?',
          options: [
            '5.23 Seguridad en servicios en la nube, 8.9 Gestión de configuración, 8.10 Borrado de información, 8.11 Enmascaramiento de datos y 8.12 Prevención de fuga de datos (DLP).',
            '5.1 Políticas para la seguridad, 6.1 Selección de personal y 7.1 Perímetros de seguridad física.',
            '6.2 Términos de empleo, 7.2 Controles de entrada física y 8.2 Derechos de acceso privilegiado.',
            'Ninguno, la versión 2022 no introdujo controles nuevos.',
          ],
          correctIndex: 0,
          explanation:
            'Los controles 5.23 (Cloud), 8.9 (Configuración), 8.10 (Borrado), 8.11 (Enmascaramiento) y 8.12 (DLP) forman parte de los 11 controles nuevos incorporados en 2022 (junto con 5.7, 5.30, 7.4, 8.16, 8.23 y 8.28).',
        },
        {
          id: 'q4',
          number: 4,
          type: 'Opción Múltiple',
          category: 'Interpretar/Aplicar (40%)',
          question:
            'En el sistema de 5 Atributos de Control de ISO/IEC 27002:2022, ¿cuáles son los valores de hashtag que corresponden a la categoría "Conceptos de ciberseguridad" (alineada con NIST CSF)?',
          options: [
            '#Preventivo, #Detectivo y #Correctivo',
            '#Confidencialidad, #Integridad y #Disponibilidad',
            '#Identificar, #Proteger, #Detectar, #Responder y #Recuperar',
            '#Organizacional, #Personas, #Físico y #Tecnológico',
          ],
          correctIndex: 2,
          explanation:
            'La tercera categoría de atributos ("Conceptos de ciberseguridad") utiliza los hashtags #Identificar, #Proteger, #Detectar, #Responder y #Recuperar, permitiendo cruzar cada control ISO 27002 con las funciones del NIST CSF.',
        },
        {
          id: 'q5',
          number: 5,
          type: 'Opción Múltiple',
          category: 'Interpretar/Aplicar (40%)',
          question:
            '¿Cuál es la función primordial de la Declaración de Aplicabilidad (SoA - Cláusula 6.1.3 d) dentro de una auditoría de certificación ISO/IEC 27001:2022?',
          options: [
            'Listar el salario anual de los miembros del equipo de soporte técnico.',
            'Actuar como el documento puente auditable que vincula el análisis y tratamiento de riesgos con los 93 controles del Anexo A, justificando qué controles se incluyen, su estado de implementación y justificando cualquier exclusión.',
            'Reemplazar por completo a la Política de Seguridad y al Alcance del SGSI.',
            'Servir únicamente como inventario de licencias de antivirus.',
          ],
          correctIndex: 1,
          explanation:
            'La SoA (Statement of Applicability) es el documento central de auditoría exigido en la Cláusula 6.1.3 d) que demuestra la coherencia entre los riesgos identificados y los controles seleccionados o excluidos.',
        },
        {
          id: 'q6',
          number: 6,
          type: 'Verdadero / Falso Argumentado',
          category: 'Interpretar/Aplicar (40%)',
          question:
            'VERDADERO O FALSO: "Según la Cláusula 9.2 (Auditoría interna), el mismo CISO o Jefe de TI que diseñó la matriz de riesgos y redactó la SoA puede auditar su propio trabajo si tiene mucha experiencia técnica."',
          options: [
            'Verdadero, porque la experiencia técnica reemplaza el requisito de imparcialidad.',
            'Falso, porque la Cláusula 9.2 exige seleccionar auditores y conducir auditorías que aseguren la objetividad y la imparcialidad del proceso; auditar el propio trabajo genera una No Conformidad Mayor.',
          ],
          correctIndex: 1,
          explanation:
            '¡Falso! La Cláusula 9.2 exige objetividad e imparcialidad en las auditorías internas. Quien diseña o administra el SGSI no puede auditar sus propios procesos.',
        },
        {
          id: 'q7',
          number: 7,
          type: 'Opción Múltiple',
          category: 'Interpretar/Aplicar (40%)',
          question:
            '¿Qué nueva sub-cláusula fue añadida en el cuerpo de ISO/IEC 27001:2022 dentro de la Cláusula 6 (Planificación)?',
          options: [
            'Cláusula 6.3 Planificación de los cambios (exige que cuando se determine la necesidad de cambios en el SGSI, estos se lleven a cabo de manera planificada).',
            'Cláusula 6.9 Compra de criptomonedas corporativas.',
            'Cláusula 6.5 Eliminación del alcance del SGSI.',
            'Cláusula 6.8 Tercerización total de la Alta Dirección.',
          ],
          correctIndex: 0,
          explanation:
            'La sub-cláusula 6.3 "Planificación de los cambios" se incorporó en la edición 2022 para garantizar que las modificaciones al SGSI se ejecuten de forma controlada y planificada.',
        },
        {
          id: 'q8',
          number: 8,
          type: 'Opción Múltiple',
          category: 'Resolver Casos (30%)',
          question:
            'Un hospital necesita entregar una copia de su base de datos de pacientes a un equipo externo de programación para probar una nueva interfaz web, evitando exponer nombres reales ni diagnósticos confidenciales. ¿Qué nuevo control de ISO/IEC 27002:2022 debe aplicar?',
          options: [
            'Control 7.4 Monitoreo de la seguridad física',
            'Control 8.11 Enmascaramiento de datos (Data masking)',
            'Control 5.30 Preparación de las TIC para la continuidad del negocio',
            'Control 6.4 Proceso disciplinario',
          ],
          correctIndex: 1,
          explanation:
            'El Control 8.11 (Enmascaramiento de datos) emplea técnicas de anonimización, seudonimización y ofuscación para ocultar datos sensibles (PII/historias clínicas) en entornos de prueba o consulta.',
        },
        {
          id: 'q9',
          number: 9,
          type: 'Opción Múltiple',
          category: 'Resolver Casos (30%)',
          question:
            'Una empresa define el alcance de su SGSI como: "Toda la organización, excepto la base de datos en AWS donde se guardan las transacciones de clientes porque la administra un proveedor externo". ¿Qué dictamen emitirá el auditor de certificación?',
          options: [
            'Aprobado con felicitaciones por ahorrar tiempo de auditoría.',
            'No Conformidad Mayor por incumplir la Cláusula 4.3, al excluir arbitrariamente un activo crítico e ignorar las interfaces y dependencias con servicios de terceros.',
            'Observación menor sin importancia porque AWS nunca requiere controles del cliente.',
            'Recomendación de borrar también el control 5.1.',
          ],
          correctIndex: 1,
          explanation:
            'Excluir arbitrariamente el activo donde se procesa la información central del alcance incumple la Cláusula 4.3 (interfaces y dependencias) y el control 5.23 (Seguridad en servicios en la nube).',
        },
        {
          id: 'q10',
          number: 10,
          type: 'Opción Múltiple',
          category: 'Resolver Casos (30%)',
          question:
            'Para impedir que colaboradores temporales extraigan datos confidenciales en memorias USB personales, ¿por qué es indispensable combinar controles del Dominio 6 (Personas: 6.2/6.6 NDA) con controles del Dominio 8 (Tecnológico: 8.12 DLP / 8.1 Endpoints)?',
          options: [
            'Porque los acuerdos legales (6.2/6.6) establecen la responsabilidad jurídica formal y la disuasión, mientras que el DLP y bloqueo de puertos (8.12/8.1) previenen técnicamente la exfiltración en tiempo real.',
            'Porque ISO 27002 prohíbe usar controles tecnológicos si no se compran al mismo proveedor legal.',
            'Porque el acuerdo de confidencialidad cifra automáticamente las memorias USB sin necesidad de software.',
            'No es necesario combinarlos; basta con poner un cartel en la pared de la cafetería.',
          ],
          correctIndex: 0,
          explanation:
            'Un SGSI eficaz requiere la coexistencia coordinada de medidas administrativas/legales (Dominio 6 Personas) con salvaguardas técnicas preventivas y detectivas (Dominio 8 Tecnológico).',
        },
      ],
    },

    // ========================================================================
    // 8. PROCESO RECUERDA (5-10 MIN) - INFOGRAFÍA RESUMEN INTERACTIVA (5 PILARES)
    // ========================================================================
    recuerda: {
      title:
        'Infografía Resumen Interactiva: Los 5 Pilares Maestros del Módulo 1',
      subtitle:
        'Haz clic en cada uno de los 5 pilares para consolidar tu dominio de ISO/IEC 27001:2022 e ISO/IEC 27002:2022 antes de completar el módulo.',
      pillars: [
        {
          id: 'pilar-1',
          number: 1,
          badge: 'Pilar 1 • Certificación vs. Guía',
          title:
            'ISO/IEC 27001 define los requisitos auditables; ISO/IEC 27002 es la guía de implementación',
          coreStatement:
            'ISO/IEC 27001:2022 define los requisitos obligatorios y auditables del SGSI (Cláusulas 4 a 10 bajo el ciclo PHVA y Anexo A); ISO/IEC 27002:2022 es la guía de implementación de buenas prácticas que detalla cómo aplicar cada control.',
          keyMetrics:
            'Cláusulas 4 a 10 (100% Obligatorias) + Anexo A (Referencia Normativa)',
          auditTakeaway:
            'Una organización se certifica contra ISO/IEC 27001:2022, nunca contra ISO/IEC 27002:2022, pero utiliza ISO 27002 como su manual técnico de cabecera.',
          checklist: [
            'Ciclo PHVA activo: Planificar (4-7), Hacer (8), Verificar (9), Actuar (10)',
            'Cero exclusiones en las cláusulas mandatorias 4 a 10',
            'Nueva Cláusula 6.3 implementada para la planificación de cambios del SGSI',
          ],
        },
        {
          id: 'pilar-2',
          number: 2,
          badge: 'Pilar 2 • Evolución 114 → 93',
          title:
            'De 114 controles (2013) a 93 controles (2022) agrupados en 4 grandes temas',
          coreStatement:
            'Los controles pasaron de 114 en 14 dominios (en 2013) a 93 controles simplificados (en 2022), agrupados en solo 4 temas: Organizacionales (37), Personas (8), Físicos (14) y Tecnológicos (34).',
          keyMetrics:
            '37 Organizacionales + 8 Personas + 14 Físicos + 34 Tecnológicos = 93 Controles',
          auditTakeaway:
            'Los 93 controles resultan de 24 controles fusionados, 58 actualizados y 11 controles nuevos (5.7, 5.23, 5.30, 7.4, 8.9, 8.10, 8.11, 8.12, 8.16, 8.23 y 8.28).',
          checklist: [
            'Dominio 5 Organizacional: 37 controles (incluye Nube 5.23, Threat Intel 5.7, Continuidad TIC 5.30)',
            'Dominio 6 Personas: 8 controles (Selección 6.1, NDA 6.6, Teletrabajo 6.7)',
            'Dominio 7 Físico (14 controles) y Dominio 8 Tecnológico (34 controles, incluye DLP 8.12 y Enmascaramiento 8.11)',
          ],
        },
        {
          id: 'pilar-3',
          number: 3,
          badge: 'Pilar 3 • 5 Atributos (#)',
          title:
            'Los 5 Atributos de Control permiten filtrar y mapear controles con otros marcos',
          coreStatement:
            'Las 5 categorías de Atributos de Control con hashtags permiten filtrar, gestionar y mapear controles por tipo (#Preventivo, #Detectivo, #Correctivo), propiedades CIA, conceptos de ciberseguridad (NIST CSF), capacidades operativas y dominios de seguridad.',
          keyMetrics:
            '5 Categorías de Hashtags por cada uno de los 93 controles',
          auditTakeaway:
            'El atributo "Conceptos de ciberseguridad" (#Identificar, #Proteger, #Detectar, #Responder, #Recuperar) conecta nativamente ISO 27002:2022 con NIST CSF.',
          checklist: [
            '1. Tipo de control (#Preventivo, #Detectivo, #Correctivo)',
            '2. Propiedades CIA (#Confidencialidad, #Integridad, #Disponibilidad)',
            '3. Conceptos NIST CSF, 4. Capacidades operativas (15) y 5. Dominios de seguridad (4)',
          ],
        },
        {
          id: 'pilar-4',
          number: 4,
          badge: 'Pilar 4 • Puente de Auditoría',
          title:
            'La SoA (Declaración de Aplicabilidad) justifica controles incluidos y excluidos',
          coreStatement:
            'La SoA (Declaración de Aplicabilidad, Cláusula 6.1.3 d) es el documento puente obligatorio en auditoría que conecta la matriz de riesgos con el Anexo A, justificando tanto los controles incluidos como los excluidos.',
          keyMetrics:
            '93 filas obligatorias en la SoA (ningún control del Anexo A se borra)',
          auditTakeaway:
            'Una SoA desconectada del análisis de riesgos o con exclusiones arbitrarias sin sustento técnico es causa directa de No Conformidad Mayor.',
          checklist: [
            'Cada control aplicable vinculado a riesgos o requisitos legales/contractuales',
            'Estado real de implementación y documento/evidencia de referencia',
            'Exclusiones del Anexo A debidamente justificadas y aprobadas',
          ],
        },
        {
          id: 'pilar-5',
          number: 5,
          badge: 'Pilar 5 • Base de Gobernanza',
          title:
            'El liderazgo y compromiso de la Alta Dirección son la base indispensable (Cláusula 5)',
          coreStatement:
            'El liderazgo y el compromiso de la alta dirección son la base indispensable de la Cláusula 5 para que el SGSI funcione: sin patrocinio ejecutivo, asignación de recursos, aprobación de políticas y revisión por la dirección (9.3), la seguridad queda reducida a un esfuerzo aislado de TI.',
          keyMetrics:
            'Cláusula 5.1 (Compromiso), 5.2 (Política), 5.3 (Roles) y 9.3 (Revisión por la Dirección)',
          auditTakeaway:
            'La Alta Dirección aprueba la Política de Seguridad, asigna recursos y valida que el SGSI cumpla los resultados previstos para el negocio.',
          checklist: [
            'Alta Dirección involucrada activamente y proveedora de recursos (5.1)',
            'Roles y responsabilidades de seguridad comunicados en toda la organización (5.3)',
            'Aprobación formal de riesgos residuales por los Dueños de Riesgo (6.1.3 f)',
          ],
        },
      ],
    },
  },
};

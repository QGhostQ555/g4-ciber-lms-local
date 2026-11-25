/**
 * ============================================================================
 * ARCHIVO DE DATOS EXHAUSTIVO MÓDULO 2: src/data/module2Data.js
 * Módulo 2: Gestión y Respuesta a Riesgos con NIST CSF 2.0 (4 Hrs)
 * ============================================================================
 */

window.LMS_DATA = window.LMS_DATA || {};

window.LMS_DATA.MODULE_2_DATA = {
  moduleCode: 'MÓDULO 2',
  moduleTitle:
    'Gestión y Respuesta a Riesgos con NIST Cybersecurity Framework (CSF) 2.0',
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
        'Caso detonante: 220 días de permanencia interna (Dwell Time) pese al perímetro blindado',
    },
    {
      id: 'aprende',
      number: 2,
      title: '2. PROCESO APRENDE',
      shortTitle: 'APRENDE',
      duration: '60-90 min',
      icon: 'book-open',
      subtitle:
        '4 Lecciones interactivas: Evolución v2.0, Govern (GV), 6 Funciones, Perfiles y Tiers',
      subLessons: [
        {
          id: 'leccion-2-1',
          code: 'Lección 2.1',
          title:
            'Evolución de NIST CSF v1.1 (2018) a v2.0 (2024): Naturaleza flexible y outcome-based',
          duration: '15 min',
        },
        {
          id: 'leccion-2-2',
          code: 'Lección 2.2',
          title:
            'La nueva función central GOVERN (GV) y sus 6 categorías oficiales',
          duration: '20 min',
        },
        {
          id: 'leccion-2-3',
          code: 'Lección 2.3',
          title:
            'Ciclo operativo de las 5 funciones complementarias y Explorador Visual del Core (6 Funciones)',
          duration: '30 min',
        },
        {
          id: 'leccion-2-4',
          code: 'Lección 2.4',
          title:
            'Perfiles (Current vs. Target Profile), Gap Analysis e Implementation Tiers (1 al 4)',
          duration: '25 min',
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
        'Galería de 2 videos: Anatomía del Core CSF 2.0 y Simulación de Ransomware (DE, RS, RC)',
    },
    {
      id: 'explora',
      number: 4,
      title: '4. PROCESO EXPLORA',
      shortTitle: 'EXPLORA',
      duration: '30-45 min',
      icon: 'folder-open',
      subtitle:
        'Guía NIST de Perfiles en 5 pasos, enlaces oficiales y descarga Matriz del Core (.CSV)',
    },
    {
      id: 'practica',
      number: 5,
      title: '5. PROCESO PRACTICA',
      shortTitle: 'PRACTICA',
      duration: '60-90 min',
      icon: 'gamepad-2',
      subtitle:
        '2 Laboratorios: Clasificador de 10 escenarios (GV-RC) y Diagnóstico de Madurez (Tiers 1-4)',
    },
    {
      id: 'aplica',
      number: 6,
      title: '6. PROCESO APLICA',
      shortTitle: 'APLICA',
      duration: '30-60 min',
      icon: 'stethoscope',
      subtitle:
        'Simulador de Resiliencia Operativa: Respuesta (RS) y Recuperación (RC) tras caída por malware',
    },
    {
      id: 'comprueba',
      number: 7,
      title: '7. PROCESO COMPRUEBA',
      shortTitle: 'COMPRUEBA',
      duration: '15-30 min',
      icon: 'clipboard-check',
      subtitle:
        'Cuestionario formativo de 10 preguntas sobre Govern, 5 funciones, Perfiles y Tiers',
    },
    {
      id: 'recuerda',
      number: 8,
      title: '8. PROCESO RECUERDA',
      shortTitle: 'RECUERDA',
      duration: '5-10 min',
      icon: 'brain-circuit',
      subtitle:
        'Infografía resumen interactiva de los 5 pilares del Módulo 2 y cierre',
    },
  ],

  // =========================================================================
  // 1. PROCESO INICIA (5-10 MIN)
  // =========================================================================
  inicia: {
    objective:
      'Analizar la arquitectura del NIST Cybersecurity Framework (CSF) 2.0, reconociendo el impacto estratégico de la nueva función transversal Govern (Gobernar), el ciclo operativo de las 5 funciones complementarias y su aplicabilidad universal en todo tipo de organizaciones.',
    caseTitle:
      'Caso Detonante: La ilusión del perímetro impenetrable y los 220 días de invisibilidad',
    caseScenario:
      'Una entidad financiera tiene defensas perimetrales impenetrables, pero tardó 220 días en percatarse de que un atacante ya estaba dentro de su red lateralizando accesos.',
    triggerQuestion: '¿Qué función de ciberseguridad falló?',
    reflectionOptions: [
      {
        id: 'mod2-inicia-protect',
        label: 'Opción 1: Protect (PR - Proteger)',
        title:
          '“Falló únicamente la función Protect (PR) porque no se compraron más firewalls perimetrales.”',
        isOptimalInsight: false,
        feedbackTitle:
          'Diagnóstico Parcial: El incidente demostró que la prevención perimetral no es absoluta',
        feedbackBody:
          'Si bien ningún perímetro es 100% infalible frente a credenciales robadas, phishing dirigido o vulnerabilidades día-cero, el síntoma crítico de este caso es el tiempo de permanencia (dwell time) de 220 días dentro de la red corporativa. Añadir un firewall más en el borde no permite observar la lateralización interna de cuentas ni correlacionar anomalías en tiempo real: esa es responsabilidad directa de la función Detect (DE).',
        controlsInvolved: [
          'PR.AA: Gestión de identidades y control de acceso',
          'Brecha crítica real: Ausencia de visibilidad interna (Detect - DE)',
          'Riesgo asumido sin supervisión (Govern - GV.OV)',
        ],
      },
      {
        id: 'mod2-inicia-detect',
        label: 'Opción 2: Detect (DE - Detectar)',
        title:
          '“Falló la función Detect (DE): faltó monitoreo continuo (DE.CM) y análisis de eventos adversos (DE.AE) para descubrir al atacante lateralizando accesos antes de 220 días.”',
        isOptimalInsight: true,
        feedbackTitle: '¡Diagnóstico Exacto según NIST CSF 2.0!',
        feedbackBody:
          '¡Correcto! Falló de manera crítica la función Detect (DE). En ciberseguridad moderna se asume la premisa "Assume Breach" (asume que el perímetro puede ser superado). Cuando un atacante permanece 220 días (dwell time) moviéndose lateralmente entre servidores sin disparar alertas, el fallo radica en la ausencia de Monitoreo Continuo (DE.CM) mediante telemetría de endpoints/red (EDR, NDR, SIEM) y Análisis de Eventos Adversos (DE.AE) para correlacionar inicios de sesión atípicos o escalamiento de privilegios. Además, bajo NIST CSF 2.0, la función transversal Govern (GV) exige definir metas de detección (MTTD - Mean Time To Detect) y supervisar que realmente operen.',
        controlsInvolved: [
          'DE.CM: Monitoreo continuo de redes, activos y usuarios',
          'DE.AE: Análisis de eventos adversos y correlación de alertas',
          'GV.OV: Supervisión ejecutiva de métricas de desempeño (MTTD)',
          'RS.MA: Activación oportuna de gestión de incidentes',
        ],
      },
      {
        id: 'mod2-inicia-recover',
        label: 'Opción 3: Recover (RC - Recuperar)',
        title:
          '“Falló la función Recover (RC) porque los respaldos debieron alertar automáticamente la intrusión lateral.”',
        isOptimalInsight: false,
        feedbackTitle:
          'Confusión Funcional: Recover restaura el servicio tras el impacto, no detecta intrusiones activas',
        feedbackBody:
          'La función Recover (RC) tiene como propósito restaurar de forma oportuna las capacidades o servicios afectados tras un incidente confirmado (mediante planes de recuperación RC.RP y comunicación RC.CO). Sin embargo, antes de recuperar algo, la organización debe descubrir que el adversario está operando en su red interna; esa misión corresponde exclusivamente a Detect (DE: DE.CM y DE.AE), que falló durante 220 días.',
        controlsInvolved: [
          'RC.RP: Ejecución de planes de recuperación (no aplica a detección)',
          'Función que realmente falló: Detect (DE.CM y DE.AE)',
        ],
      },
    ],
    holisticSynthesis:
      'Lección central de NIST CSF 2.0: Proteger el perímetro no basta sin visibilidad interna. Cuando el tiempo de permanencia (dwell time) alcanza 220 días, el adversario dispone de meses para mapear bases de datos críticas y desactivar respaldos. NIST CSF 2.0 articula las 6 funciones bajo el mando estratégico de GOVERN (GV) para equilibrar inversión preventiva (PR) con detección rápida (DE), contención (RS) y recuperación resiliente (RC).',
    keyStats: [
      {
        label: 'Nueva Función Central 2.0',
        value: 'GOVERN (GV)',
        context:
          'Publicado en febrero de 2024; sitúa la gobernanza y el apetito de riesgo en el corazón del marco.',
      },
      {
        label: 'Arquitectura del Core',
        value: '6 Funciones • 22 Categorías',
        context:
          'GV (6), ID (3), PR (5), DE (2), RS (4) y RC (2) organizadas en 106 subcategorías orientadas a resultados.',
      },
      {
        label: 'Enfoque de Diseño',
        value: 'Outcome-Based',
        context:
          'Voluntario, flexible y no prescriptivo: define qué resultados lograr sin atarse a una única tecnología.',
      },
    ],
  },

  // =========================================================================
  // 2. PROCESO APRENDE (60-90 MIN) - 4 LECCIONES INTERACTIVAS
  // =========================================================================
  aprende: [
    {
      id: 'leccion-2-1',
      code: 'Lección 2.1',
      title:
        'Evolución de NIST CSF a la versión 2.0: De infraestructura crítica a alcance universal',
      duration: '15 min',
      summary:
        'El Instituto Nacional de Estándares y Tecnología (NIST) de EE. UU. publicó en febrero de 2024 la actualización NIST Cybersecurity Framework (CSF) 2.0 (NIST CSWP 29). Esta revisión transforma el marco desde una guía enfocada en infraestructura crítica (v1.1 de 2018) hacia un estándar universal aplicable a cualquier organización pública, privada, pyme o entidad gubernamental sin importar su tamaño o madurez.',
      keyConcepts: [
        {
          title: 'Salto histórico: De v1.1 (2018) a v2.0 (Febrero 2024)',
          description:
            'El CSF 1.0 (2014) y CSF 1.1 (2018) nacieron enfocados en operadores de infraestructura crítica (banca, energía, telecomunicaciones). En CSF 2.0 se amplió el alcance para servir tanto a pequeñas empresas como a corporaciones multinacionales y entidades públicas.',
          tag: 'Alcance Universal',
        },
        {
          title: 'Naturaleza Voluntaria, Flexible y No Prescriptiva',
          description:
            'NIST CSF 2.0 no impone listas rígidas de herramientas ni pasos únicos obligatorios. Cada organización adapta el Core, los Perfiles y los Tiers a su contexto de negocio, obligaciones regulatorias y presupuesto.',
          tag: 'Adaptabilidad',
        },
        {
          title: 'Enfoque Basado en Resultados (Outcome-Based)',
          description:
            'El marco describe QUÉ resultados de ciberseguridad deben lograrse (por ejemplo, PR.AA-01: gestionar identidades y credenciales), dejando el CÓMO implementarlo técnicamente a estándares como CIS Controls v8.1 o ISO/IEC 27002:2022.',
          tag: 'Qué vs. Cómo',
        },
        {
          title: 'Lenguaje Común entre Directorio y Equipo Técnico',
          description:
            'Permite que un CISO explique el riesgo al Directorio en términos claros (Govern, Identify, Protect, Detect, Respond, Recover) mientras el SOC y TI traducen cada subcategoría en configuraciones concretas.',
          tag: 'Puente Ejecutivo-Técnico',
        },
      ],
      evolutionComparison: [
        {
          aspect: 'Público Objetivo y Alcance',
          csf11:
            'Diseñado principalmente para operadores de Infraestructura Crítica (energía, finanzas, salud, transporte).',
          csf20:
            'Aplicable a TODA organización (Pymes, startups, corporaciones, ONGs, gobiernos y educación) sin importar su tamaño o madurez.',
          impact:
            'Incluye guías rápidas de inicio (Quick-Start Guides) diferenciadas para pequeñas empresas y alta dirección.',
        },
        {
          aspect: 'Estructura de Funciones del Core',
          csf11: '5 Funciones lineales: Identify, Protect, Detect, Respond, Recover.',
          csf20:
            '6 Funciones con GOVERN (GV) en el centro como eje transversal que gobierna a las otras 5 funciones.',
          impact:
            'Eleva la ciberseguridad desde un tema técnico de TI hacia una prioridad de gobierno corporativo y gestión de riesgo empresarial (ERM).',
        },
        {
          aspect: 'Riesgo de Cadena de Suministro (C-SCRM)',
          csf11: 'Cubierto parcialmente como una categoría dentro de Identify (ID.SC).',
          csf20:
            'Elevado a categoría estratégica dentro de Govern (GV.SC) con 10 subcategorías detalladas.',
          impact:
            'Exige políticas formales, cláusulas contractuales, monitoreo de proveedores cloud/SaaS y planes de contingencia ante terceros.',
        },
        {
          aspect: 'Ecosistema Digital de Implementación',
          csf11: 'Documentos PDF estáticos con referencias informativas limitadas.',
          csf20:
            'Integrado con la herramienta online CPRTs (Cybersecurity and Privacy Reference Tool) y mapeos dinámicos a ISO 27001, CIS v8 y NIST 800-53.',
          impact:
            'Acelera el análisis de brechas, la creación de Perfiles y las auditorías multi-marco.',
        },
      ],
      takeaway:
        'NIST CSF 2.0 no reemplaza a ISO 27001 ni a CIS Controls: actúa como la brújula estratégica basada en resultados ("qué lograr") que cualquier organización puede adoptar voluntariamente y conectar con controles técnicos ("cómo lograrlo").',
    },
    {
      id: 'leccion-2-2',
      code: 'Lección 2.2',
      title: 'La nueva función central: GOVERN (GV) y sus 6 Categorías Oficiales',
      duration: '20 min',
      summary:
        'La gran transformación arquitectónica de NIST CSF 2.0 es la incorporación de GOVERN (Gobernar - GV) en el centro del marco. Govern rodea y dirige continuamente a Identify, Protect, Detect, Respond y Recover, alineando la ciberseguridad con la estrategia empresarial, el apetito de riesgo y las obligaciones legales.',
      keyConcepts: [
        {
          title: '¿Por qué GOVERN está en el centro de la rueda NIST CSF 2.0?',
          description:
            'Porque sin contexto de negocio, presupuesto aprobado, roles claros, políticas vigentes, supervisión ejecutiva y control de proveedores, las herramientas técnicas de Protección o Detección operan desconectadas de la realidad corporativa.',
          tag: 'Eje Transversal',
        },
        {
          title: 'Conexión directa con la Alta Dirección y Regulación',
          description:
            'Govern traduce los objetivos estratégicos del Directorio y las exigencias legales/contractuales en criterios claros de tolerancia y apetito de riesgo.',
          tag: 'Apetito de Riesgo',
        },
      ],
      governCategories: [
        {
          code: 'GV.OC',
          name: 'Contexto Organizacional (Organizational Context)',
          description:
            'Comprender la misión del negocio, las expectativas de partes interesadas, los requisitos legales y las dependencias internas y externas que condicionan las decisiones de ciberseguridad.',
          practicalExample:
            'Ejemplo: Una clínica privada identifica que debe cumplir la Ley de Protección de Datos Personales y garantizar disponibilidad 24/7 en emergencias antes de definir su Target Profile.',
        },
        {
          code: 'GV.RM',
          name: 'Estrategia de Gestión de Riesgos (Risk Management Strategy)',
          description:
            'Establecer prioridades, restricciones, declaraciones de apetito y tolerancia al riesgo, líneas estratégicas de inversión y métodos estandarizados dentro del ERM corporativo.',
          practicalExample:
            'Ejemplo: El Comité de Riesgos define tolerancia cero a la exposición pública de tarjetas bancarias y aprueba asignar el 12% del presupuesto TI a controles críticos.',
        },
        {
          code: 'GV.RR',
          name: 'Roles, Responsabilidades y Autoridades (Roles, Responsibilities, and Authorities)',
          description:
            'Definir y comunicar formalmente quién es responsable de la gestión del riesgo cibernético en la junta directiva, gerencia, CISO, dueños de procesos y colaboradores.',
          practicalExample:
            'Ejemplo: Nombramiento oficial del CISO con reporte directo al Comité de Auditoría, matriz RACI para respuesta a incidentes y responsabilidades en descripciones de puesto.',
        },
        {
          code: 'GV.PO',
          name: 'Políticas (Policy)',
          description:
            'Establecer, comunicar, hacer cumplir y revisar periódicamente las políticas, procesos y procedimientos institucionales de ciberseguridad aprobados por la alta dirección.',
          practicalExample:
            'Ejemplo: Política Corporativa de Seguridad revisada anualmente y firmada por Gerencia General, acompañada de estándares de contraseñas, uso aceptable y nube.',
        },
        {
          code: 'GV.OV',
          name: 'Supervisión (Oversight)',
          description:
            'Evaluar los resultados de la estrategia de gestión de riesgos cibernéticos y el desempeño de las otras 5 funciones mediante métricas (KPIs/KRIs) y auditorías.',
          practicalExample:
            'Ejemplo: Tablero trimestral presentado al Directorio con indicadores de MTTD, cobertura de MFA, parches críticos y resultados de simulacros de recuperación.',
        },
        {
          code: 'GV.SC',
          name: 'Gestión de Riesgos de la Cadena de Suministro de Ciberseguridad (C-SCRM)',
          description:
            'Identificar, establecer, gestionar, monitorear y mejorar los riesgos cibernéticos asociados a proveedores, contratistas, servicios cloud/SaaS y software de terceros.',
          practicalExample:
            'Ejemplo: Exigir certificación SOC 2 / ISO 27001 y cláusulas de notificación de brechas en 24h a proveedores SaaS antes de firmar contrato.',
        },
      ],
      takeaway:
        'Las 6 categorías de GOVERN (GV.OC, GV.RM, GV.RR, GV.PO, GV.OV y GV.SC) responden al PORQUÉ y PARA QUIÉN se protege la organización, sirviendo de paraguas estratégico para toda la operación técnica.',
    },
    {
      id: 'leccion-2-3',
      code: 'Lección 2.3',
      title:
        'Ciclo operativo de las 5 funciones complementarias y Explorador Visual del Core (6 Funciones)',
      duration: '30 min',
      summary:
        'Mientras GOVERN (GV) dirige la estrategia desde el centro, las 5 funciones operativas —Identify (ID), Protect (PR), Detect (DE), Respond (RS) y Recover (RC)— describen el ciclo de vida continuo para gestionar el riesgo cibernético antes, durante y después de un incidente. Explora interactivamente las 6 funciones con sus códigos de color oficiales del NIST.',
      keyConcepts: [
        {
          title: 'Antes del Incidente: Identify (ID) y Protect (PR)',
          description:
            'Identify permite saber qué activos, datos y riesgos existen; Protect implementa salvaguardas preventivas (identidades, capacitación, cifrado, resiliencia) para evitar o reducir la probabilidad e impacto de ataques.',
          tag: 'Fase Preventiva',
        },
        {
          title: 'Durante y Después del Incidente: Detect (DE), Respond (RS) y Recover (RC)',
          description:
            'Detect descubre anomalías en tiempo real; Respond contiene el daño y coordina comunicaciones; Recover restaura las operaciones normales y aprende lecciones para fortalecer el ciclo completo.',
          tag: 'Fase Reactiva y Resiliente',
        },
      ],
      nistFunctions: [
        {
          code: 'GV',
          name: 'GOVERN',
          spanishName: 'Gobernar',
          isCentralTransversal: true,
          nistColorName: 'Amarillo Dorado (NIST Official)',
          colorClasses: {
            badge: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
            border: 'border-amber-500/50',
            bg: 'bg-amber-950/30',
            accentText: 'text-amber-300',
          },
          purpose:
            'Establecer, comunicar y supervisar la estrategia, expectativas y políticas de gestión de riesgos de ciberseguridad de la organización, incluyendo la cadena de suministro.',
          categories: [
            {
              code: 'GV.OC',
              name: 'Contexto Organizacional',
              description:
                'Misión, partes interesadas, requisitos legales/regulatorios y dependencias.',
              practicalExample:
                'Mapeo de regulaciones de privacidad y SLA críticos de clientes.',
            },
            {
              code: 'GV.RM',
              name: 'Estrategia de Gestión de Riesgos',
              description:
                'Apetito, tolerancia al riesgo y objetivos estratégicos de ciberseguridad.',
              practicalExample:
                'Declaración formal de apetito de riesgo aprobada por el Directorio.',
            },
            {
              code: 'GV.RR',
              name: 'Roles, Responsabilidades y Autoridades',
              description:
                'Asignación de liderazgo, rendición de cuentas y recursos.',
              practicalExample:
                'Estructura RACI entre Directorio, CISO, TI, Legal y dueños de datos.',
            },
            {
              code: 'GV.PO',
              name: 'Políticas',
              description:
                'Creación, comunicación y cumplimiento de normativas internas.',
              practicalExample:
                'Política de Seguridad Corporativa y estándares técnicos actualizados.',
            },
            {
              code: 'GV.OV',
              name: 'Supervisión',
              description:
                'Revisión ejecutiva de resultados y eficacia del programa de riesgo.',
              practicalExample:
                'Comité trimestral de riesgos revisando KRIs, auditorías y brechas.',
            },
            {
              code: 'GV.SC',
              name: 'Riesgos de Cadena de Suministro',
              description:
                'Evaluación, contratación y monitoreo continuo de proveedores y terceros.',
              practicalExample:
                'Due diligence de seguridad a proveedores cloud y cláusulas de brecha.',
            },
          ],
        },
        {
          code: 'ID',
          name: 'IDENTIFY',
          spanishName: 'Identificar',
          nistColorName: 'Azul Cielo / Cerúleo (NIST Official)',
          colorClasses: {
            badge: 'bg-sky-500/20 text-sky-300 border-sky-500/40',
            border: 'border-sky-500/50',
            bg: 'bg-sky-950/30',
            accentText: 'text-sky-300',
          },
          purpose:
            'Comprender los activos actuales (hardware, software, datos, sistemas, servicios), los riesgos cibernéticos que los amenazan y las oportunidades de mejora continua.',
          categories: [
            {
              code: 'ID.AM',
              name: 'Gestión de Activos (Asset Management)',
              description:
                'Mantener inventarios actualizados de hardware, software, servicios en la nube, datos y flujos de comunicación críticos para el negocio.',
              practicalExample:
                'CMDB automatizada con descubrimiento de red, inventario de APIs y clasificación de bases de datos PII.',
            },
            {
              code: 'ID.RA',
              name: 'Evaluación de Riesgos (Risk Assessment)',
              description:
                'Identificar vulnerabilidades, inteligencia de amenazas, probabilidades e impactos para priorizar riesgos y definir respuestas.',
              practicalExample:
                'Escaneo continuo de vulnerabilidades (CVSS + contexto de negocio) y matriz de amenazas trimestral.',
            },
            {
              code: 'ID.IM',
              name: 'Mejora (Improvement)',
              description:
                'Identificar oportunidades de mejora a partir de evaluaciones, ejercicios, pruebas operativas y lecciones aprendidas.',
              practicalExample:
                'Registro de mejoras tras pruebas de penetración (pentesting) y ejercicios tabletop.',
            },
          ],
        },
        {
          code: 'PR',
          name: 'PROTECT',
          spanishName: 'Proteger',
          nistColorName: 'Púrpura / Índigo (NIST Official)',
          colorClasses: {
            badge: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
            border: 'border-purple-500/50',
            bg: 'bg-purple-950/30',
            accentText: 'text-purple-300',
          },
          purpose:
            'Aplicar salvaguardas técnicas y humanas para gestionar los riesgos de ciberseguridad y prevenir o reducir la probabilidad e impacto de eventos adversos.',
          categories: [
            {
              code: 'PR.AA',
              name: 'Gestión de Identidades, Autenticación y Control de Acceso',
              description:
                'Gestionar el ciclo de vida de identidades, aplicar mínimo privilegio, separación de funciones y autenticación robusta (MFA).',
              practicalExample:
                'MFA resistente a phishing (FIDO2) para accesos VPN/Cloud y PAM para cuentas administradoras.',
            },
            {
              code: 'PR.AT',
              name: 'Concientización y Capacitación (Awareness and Training)',
              description:
                'Formar al personal general y a los roles especializados para que ejecuten sus tareas reduciendo el riesgo humano.',
              practicalExample:
                'Campañas mensuales de simulación de phishing y capacitación de desarrollo seguro para programadores.',
            },
            {
              code: 'PR.DS',
              name: 'Seguridad de Datos (Data Security)',
              description:
                'Proteger la confidencialidad, integridad y disponibilidad de los datos en reposo, en tránsito y en uso.',
              practicalExample:
                'Cifrado AES-256 en discos/bases de datos, TLS 1.3 en tránsito y políticas DLP en endpoints.',
            },
            {
              code: 'PR.PS',
              name: 'Seguridad de Plataformas (Platform Security)',
              description:
                'Gestionar hardware, software, firmware y servicios con configuraciones endurecidas (hardening), parches y mantenimiento seguro.',
              practicalExample:
                'Aplicación de CIS Benchmarks, gestión automatizada de parches críticos y deshabilitación de servicios innecesarios.',
            },
            {
              code: 'PR.IR',
              name: 'Resiliencia de Infraestructura Tecnológica',
              description:
                'Proteger redes y arquitecturas mediante segmentación, redundancia, copias de respaldo protegidas y capacidad de soporte.',
              practicalExample:
                'Segmentación de VLANs / Zero Trust Network Access y backups inmutables aislados (3-2-1-1-0).',
            },
          ],
        },
        {
          code: 'DE',
          name: 'DETECT',
          spanishName: 'Detectar',
          nistColorName: 'Naranja / Coral (NIST Official)',
          colorClasses: {
            badge: 'bg-orange-500/20 text-orange-300 border-orange-500/40',
            border: 'border-orange-500/50',
            bg: 'bg-orange-950/30',
            accentText: 'text-orange-300',
          },
          purpose:
            'Encontrar y analizar oportunamente posibles ataques de ciberseguridad, compromisos activos y anomalías antes de que escalen en impacto.',
          categories: [
            {
              code: 'DE.CM',
              name: 'Monitoreo Continuo (Continuous Monitoring)',
              description:
                'Supervisar de forma permanente redes, entornos físicos, personal, proveedores de servicios y activos tecnológicos para detectar anomalías e indicadores de compromiso.',
              practicalExample:
                'Agentes EDR/XDR en endpoints, sensores NDR en red interna y recolección centralizada de logs en SIEM 24/7.',
            },
            {
              code: 'DE.AE',
              name: 'Análisis de Eventos Adversos (Adverse Event Analysis)',
              description:
                'Correlacionar telemetría de múltiples fuentes, establecer líneas base de comportamiento, estimar impacto/alcance y declarar incidentes confirmados.',
              practicalExample:
                'Reglas de correlación SIEM/SOAR que detectan movimiento lateral por Kerberoasting o descargas masivas fuera de horario.',
            },
          ],
        },
        {
          code: 'RS',
          name: 'RESPOND',
          spanishName: 'Responder',
          nistColorName: 'Rojo Carmesí (NIST Official)',
          colorClasses: {
            badge: 'bg-rose-500/20 text-rose-300 border-rose-500/40',
            border: 'border-rose-500/50',
            bg: 'bg-rose-950/30',
            accentText: 'text-rose-300',
          },
          purpose:
            'Tomar medidas inmediatas una vez detectado un incidente de ciberseguridad para contener su propagación, analizar la causa raíz, comunicar y mitigar los efectos.',
          categories: [
            {
              code: 'RS.MA',
              name: 'Gestión de Incidentes (Incident Management)',
              description:
                'Ejecutar los playbooks de respuesta, categorizar la severidad del incidente, coordinar equipos CSIRT y activar canales de escalamiento.',
              practicalExample:
                'Activación del Plan de Respuesta a Incidentes (IRP) y clasificación de severidad P1 ante alerta de ransomware.',
            },
            {
              code: 'RS.AN',
              name: 'Análisis de Incidentes (Incident Analysis)',
              description:
                'Investigar eventos notificados, preservar evidencia forense digital (cadena de custodia) y determinar el vector de entrada y alcance.',
              practicalExample:
                'Captura de memoria RAM, análisis forense de registros de autenticación y determinación del paciente cero.',
            },
            {
              code: 'RS.CO',
              name: 'Comunicación y Reporte de Respuesta',
              description:
                'Coordinar notificaciones internas y externas con reguladores, fuerzas del orden, clientes o socios.',
              practicalExample:
                'Reporte dentro de las 48-72h a la Autoridad de Protección de Datos y CSIRT sectorial según protocolo legal.',
            },
            {
              code: 'RS.MI',
              name: 'Mitigación de Incidentes (Incident Mitigation)',
              description:
                'Contener y erradicar el incidente evitando que se propague a otros sistemas, revocando accesos comprometidos y eliminando artefactos maliciosos.',
              practicalExample:
                'Aislamiento de red de hosts infectados desde consola EDR, bloqueo de VLAN y revocación de tokens de sesión.',
            },
          ],
        },
        {
          code: 'RC',
          name: 'RECOVER',
          spanishName: 'Recuperar',
          nistColorName: 'Verde Esmeralda (NIST Official)',
          colorClasses: {
            badge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
            border: 'border-emerald-500/50',
            bg: 'bg-emerald-950/30',
            accentText: 'text-emerald-300',
          },
          purpose:
            'Restaurar de manera oportuna y ordenada las capacidades y los servicios afectados por un incidente, fortaleciendo la resiliencia operativa.',
          categories: [
            {
              code: 'RC.RP',
              name: 'Ejecución del Plan de Recuperación',
              description:
                'Activar procedimientos de restauración (DRP), verificar la integridad y limpieza de las copias de respaldo, restablecer servicios en orden de criticidad y declarar el retorno a operación normal.',
              practicalExample:
                'Restauración de servidores críticos desde snapshots inmutables validados libre de malware dentro del RTO pactado.',
            },
            {
              code: 'RC.CO',
              name: 'Comunicación de Recuperación',
              description:
                'Coordinar las comunicaciones internas y externas durante la restauración de los servicios, gestionando la confianza de clientes, usuarios y partes interesadas.',
              practicalExample:
                'Comunicado oficial transparente a clientes informando el restablecimiento seguro de la plataforma y medidas de resguardo.',
            },
          ],
        },
      ],
      takeaway:
        'Las 6 funciones (GV, ID, PR, DE, RS, RC) forman un sistema vivo de defensa integral: GOVERN dirige el timón estratégico mientras las 5 funciones operativas cierran el ciclo desde la identificación de activos hasta la recuperación tras incidentes.',
    },
    {
      id: 'leccion-2-4',
      code: 'Lección 2.4',
      title:
        'Perfiles (Current vs. Target Profile), Gap Analysis e Implementation Tiers (1 al 4)',
      duration: '25 min',
      summary:
        'Un Perfil de Marco (Framework Profile) es el mecanismo que utiliza NIST CSF 2.0 para alinear los resultados de las 6 funciones con los objetivos de negocio, requisitos legales y recursos de una organización específica. Por su parte, los Implementation Tiers (Niveles 1 al 4) caracterizan el grado de rigor, formalidad y agilidad con el que la organización gobierna y ejecuta sus prácticas de gestión de riesgos.',
      keyConcepts: [
        {
          title: 'Los Perfiles NO son iguales para todas las empresas',
          description:
            'Un banco sistémico tendrá un Target Profile con metas exigentes en las 106 subcategorías, mientras que una pyme de comercio electrónico priorizará identidad, respaldos, nube y respuesta básica.',
          tag: 'Personalización por Riesgo',
        },
        {
          title: 'Los Tiers NO son una certificación de madurez obligatoria',
          description:
            'Alcanzar el Tier 4 no siempre es necesario ni rentable para todas las organizaciones: una empresa debe aspirar al Tier costo-efectivo frente a su perfil de riesgo.',
          tag: 'Criterio Costo-Beneficio',
        },
      ],
      profileConcepts: {
        currentProfile: {
          title: 'Current Profile (Perfil Actual)',
          description:
            'Fotografía objetiva de los resultados de ciberseguridad que la organización está logrando hoy en día.',
          inputs: [
            'Inventarios reales de activos y controles en operación',
            'Resultados de auditorías internas, pentesting y escaneos',
            'Métricas reales de incidentes y tiempos de detección/respuesta',
          ],
        },
        targetProfile: {
          title: 'Target Profile (Perfil Objetivo)',
          description:
            'Definición estratégica de los resultados de ciberseguridad que la organización desea alcanzar según su apetito de riesgo.',
          inputs: [
            'Objetivos estratégicos del negocio y tolerancia al riesgo (GV.RM)',
            'Requisitos legales, contractuales y normativos (GV.OC)',
            'Panorama actual de amenazas del sector (ID.RA)',
          ],
        },
        gapAnalysis: {
          title: 'Análisis de Brechas (Gap Analysis) y Hoja de Ruta',
          description:
            'Comparar el Current Profile frente al Target Profile revela las brechas exactas para priorizar presupuestos y proyectos.',
          exampleActionPlan: [
            'Brecha DE.CM-01 (Actual 1 vs. Objetivo 3) → Proyecto Q1: Desplegar SIEM + EDR 24/7.',
            'Brecha GV.SC-04 (Actual 1 vs. Objetivo 3) → Proyecto Q2: Evaluar proveedores SaaS críticos.',
            'Brecha RC.RP-03 (Actual 2 vs. Objetivo 4) → Proyecto Q3: Backups inmutables y simulacros.',
          ],
        },
      },
      implementationTiers: [
        {
          level: 'Tier 1',
          name: 'Tier 1: Parcial (Partial)',
          riskGovernance: 'Informal y reactiva',
          riskProcess: 'Ad-hoc, caso por caso y sin priorización consistente',
          externalParticipation: 'Nula o casi inexistente',
          summary:
            'Las prácticas de gestión de riesgos de ciberseguridad no están formalizadas; las acciones se ejecutan de manera reactiva (apagando incendios) y la conciencia del riesgo varía de un equipo a otro.',
          characteristics: [
            'Sin políticas institucionales estandarizadas ni apetito de riesgo definido.',
            'La ciberseguridad depende del esfuerzo individual de técnicos de TI.',
            'Alta vulnerabilidad ante incidentes imprevistos o rotación de personal.',
          ],
        },
        {
          level: 'Tier 2',
          name: 'Tier 2: Informado sobre el riesgo (Risk Informed)',
          riskGovernance: 'Aprobada por la gerencia, pero no institucionalizada',
          riskProcess: 'Consciente del riesgo, pero aplicada de forma aislada por áreas',
          externalParticipation: 'Recibe información externa, pero rara vez colabora',
          summary:
            'La gerencia aprueba prácticas de gestión de riesgos y existen controles básicos, pero todavía no se han establecido como una política obligatoria y repetible en toda la organización.',
          characteristics: [
            'Existen políticas aprobadas por gerencia y controles técnicos básicos.',
            'Falta un proceso uniforme y repetible en todas las unidades de negocio.',
            'El personal recuerda sus roles solo ante una auditoría puntual o incidente.',
          ],
        },
        {
          level: 'Tier 3',
          name: 'Tier 3: Repetible (Repeatable)',
          riskGovernance: 'Políticas formales aprobadas e institucionalizadas',
          riskProcess: 'Procesos consistentes, repetibles y actualizados periódicamente',
          externalParticipation: 'Colaboración regular con socios y CERTs',
          summary:
            'Las prácticas de gestión de riesgos están formalmente aprobadas como políticas en toda la organización y se ejecutan de manera consistente ante cambios de amenazas.',
          characteristics: [
            'Políticas formales, roles RACI claros y procedimientos documentados en toda la empresa.',
            'Revisiones periódicas de riesgos y pruebas regulares de respuesta y recuperación.',
            'Gestión estructurada de riesgos con proveedores y terceros críticos (GV.SC).',
          ],
        },
        {
          level: 'Tier 4',
          name: 'Tier 4: Adaptativo (Adaptive)',
          riskGovernance: 'Integrada en la cultura y decisiones estratégicas en tiempo real',
          riskProcess: 'Mejora continua basada en inteligencia y métricas predictivas',
          externalParticipation: 'Intercambio bidireccional activo en ecosistemas CSIRT',
          summary:
            'La organización adapta sus prácticas de ciberseguridad en tiempo real basándose en lecciones aprendidas, inteligencia de amenazas y métricas predictivas.',
          characteristics: [
            'Detección y automatización continua con ajuste inmediato al apetito de riesgo.',
            'Simulacros frecuentes (Red/Purple Team) que ajustan defensas proactivamente.',
            'Ciberseguridad asumida como ventaja competitiva y cultura transversal.',
          ],
        },
      ],
      takeaway:
        'Recuerda el flujo estratégico: Defines tu Current Profile + Target Profile → Calculas las brechas (Gap Analysis) → Priorizas inversiones y decides hasta qué Tier (1 al 4) necesita madurar tu organización según su riesgo.',
    },
  ],

  // =========================================================================
  // 3. PROCESO OBSERVA (20-40 MIN)
  // =========================================================================
  observa: {
    video1: {
      id: 'mod2-obs-video-1',
      title:
        'Video 1 (10 min): "NIST CSF 2.0 paso a paso: Anatomía del Core (Funciones, Categorías y Subcategorías)"',
      duration: '10 min',
      embedUrl: 'https://www.youtube.com/embed/hXSFdwIOfnE',
      youtubeFallbackUrl:
        'https://www.youtube.com/results?search_query=NIST+CSF+2.0+explicado+en+espanol',
      summary:
        'El Core de NIST CSF 2.0 organiza sus resultados en una taxonomía jerárquica de 3 niveles: Función (2 letras) → Categoría (4 letras) → Subcategoría (código numérico). Comprender esta estructura te permite leer cualquier perfil institucional y auditar controles con precisión.',
      hierarchyExamples: [
        {
          id: 'hier-pr-aa',
          functionCode: 'PR',
          functionName: 'Protect (PR) — Proteger',
          categoryCode: 'PR.AA',
          categoryName:
            'Gestión de Identidades, Autenticación y Control de Acceso',
          subcategoryCode: 'PR.AA-01',
          subcategoryDescription:
            'Gestión de identidades y credenciales para usuarios, servicios y hardware autorizados.',
          implementationExample:
            'Implementación real: Directorio Activo / Entra ID centralizado, aprovisionamiento automatizado en altas/bajas (Joiner-Mover-Leaver) y autenticación multifactor (MFA) obligatoria.',
        },
        {
          id: 'hier-gv-sc',
          functionCode: 'GV',
          functionName: 'Govern (GV) — Gobernar',
          categoryCode: 'GV.SC',
          categoryName:
            'Gestión de Riesgos de la Cadena de Suministro de Ciberseguridad',
          subcategoryCode: 'GV.SC-04',
          subcategoryDescription:
            'Los proveedores son conocidos y priorizados según su criticidad antes de establecer relaciones contractuales.',
          implementationExample:
            'Implementación real: Registro de proveedores SaaS/IaaS clasificados en Nivel Crítico, Medio y Bajo con evaluación anual SOC 2 / ISO 27001.',
        },
        {
          id: 'hier-de-cm',
          functionCode: 'DE',
          functionName: 'Detect (DE) — Detectar',
          categoryCode: 'DE.CM',
          categoryName: 'Monitoreo Continuo',
          subcategoryCode: 'DE.CM-01',
          subcategoryDescription:
            'Las redes y los servicios de red son monitoreados para encontrar eventos potencialmente adversos.',
          implementationExample:
            'Implementación real: Sensores NDR, firewall logs y flujo NetFlow correlacionados en el SIEM 24/7 para detectar escaneos internos o exfiltración.',
        },
        {
          id: 'hier-rc-rp',
          functionCode: 'RC',
          functionName: 'Recover (RC) — Recuperar',
          categoryCode: 'RC.RP',
          categoryName: 'Ejecución del Plan de Recuperación ante Incidentes',
          subcategoryCode: 'RC.RP-03',
          subcategoryDescription:
            'La integridad de las copias de seguridad y otros activos de restauración se verifica antes de utilizarlos para la recuperación.',
          implementationExample:
            'Implementación real: Verificación automatizada de hashes y escaneo anti-malware en sandbox de respaldo antes de montar snapshots en producción.',
        },
      ],
      checkpointQuestion: {
        question:
          'En la taxonomía del Core de NIST CSF 2.0, ¿qué representa el código "PR.AA-01"?',
        options: [
          'Una norma certificable diferente al NIST CSF 2.0.',
          'Una Subcategoría ("Gestión de identidades y credenciales") dentro de la Categoría PR.AA, perteneciente a la Función Protect (PR).',
          'Un nivel de madurez Tier 1 exclusivamente para pymes.',
          'Un protocolo de cifrado de red inalámbrica.',
        ],
        correctIndex: 1,
        explanation:
          '¡Exacto! La nomenclatura sigue la jerarquía estricta: Función (PR = Protect) → Categoría (PR.AA = Gestión de Identidades, Autenticación y Control de Acceso) → Subcategoría (PR.AA-01 = Gestión de identidades y credenciales).',
      },
    },
    video2: {
      id: 'mod2-obs-video-2',
      title:
        'Video 2 (10 min): "Simulación de un incidente de ransomware analizado a través de Detect, Respond y Recover"',
      duration: '10 min',
      embedUrl: 'https://www.youtube.com/embed/z5nc9MDbvkw',
      youtubeFallbackUrl:
        'https://www.youtube.com/results?search_query=respuesta+incidentes+ransomware+NIST+CSF',
      summary:
        'Observa cómo un equipo SOC/CSIRT coordina en tiempo real las funciones Detect (DE), Respond (RS) y Recover (RC) frente a un brote de ransomware, minimizando el tiempo de inactividad (RTO) y evitando el pago de rescate.',
      timelineSteps: [
        {
          id: 'tl-1',
          timeLabel: 'Minuto 0 (Detección Temprana)',
          nistFunction: 'Detect (DE)',
          categoryCode: 'DE.CM / DE.AE',
          actionTitle:
            'Detección por EDR de cifrado anómalo y alerta correlacionada en SIEM',
          technicalDetail:
            'El agente EDR detecta creación masiva de extensiones aleatorias y borrado de Shadow Copies. El SIEM correlaciona la alerta (DE.AE) y confirma un incidente activo de severidad P1 en menos de 3 minutos.',
          evidenceGenerated:
            'Ticket de incidente INC-2026-041, telemetría de proceso malicioso y hash SHA-256.',
        },
        {
          id: 'tl-2',
          timeLabel: 'Minuto 15 (Contención Inmediata)',
          nistFunction: 'Respond (RS)',
          categoryCode: 'RS.MI / RS.MA / RS.AN',
          actionTitle:
            'Aislamiento de VLAN afectada, revocación de cuentas y preservación forense',
          technicalDetail:
            'El CSIRT ejecuta el playbook de contención (RS.MI): aísla lógicamente la VLAN de servidores afectada y bloquea la máquina origen desde la consola EDR sin apagarla, preservando memoria volátil para análisis forense (RS.AN).',
          evidenceGenerated:
            'Registro de aislamiento de red, volcado de memoria forense y línea de tiempo del paciente cero.',
        },
        {
          id: 'tl-3',
          timeLabel: 'Hora 2 (Restauración Segura)',
          nistFunction: 'Recover (RC)',
          categoryCode: 'RC.RP',
          actionTitle:
            'Restauración limpia desde copias de respaldo inmutables verificadas',
          technicalDetail:
            'Confirmada la erradicación del vector inicial (RS.MI), Infraestructura activa el DRP (RC.RP): valida la integridad y ausencia de malware en las copias inmutables y reconstruye los servidores críticos dentro del RTO objetivo.',
          evidenceGenerated:
            'Acta de validación de integridad de backups y confirmación de retorno operativo de servicios.',
        },
        {
          id: 'tl-4',
          timeLabel: 'Hora 4 (Comunicación y Cierre)',
          nistFunction: 'Recover (RC) & Govern (GV)',
          categoryCode: 'RC.CO / RS.CO / ID.IM',
          actionTitle:
            'Comunicado oficial transparente y lecciones aprendidas para mejora',
          technicalDetail:
            'La Dirección y Legal emiten el comunicado oficial de normalización a clientes y reguladores (RC.CO / RS.CO), protegiendo la confianza institucional. Posteriormente se registra un informe post-incidente (ID.IM).',
          evidenceGenerated:
            'Comunicado oficial a clientes/regulador e informe de lecciones aprendidas Post-Mortem.',
        },
      ],
      checkpointQuestion: {
        question:
          'Durante la línea de tiempo de respuesta ante ransomware, ¿por qué en el Minuto 15 se aísla la VLAN desde el EDR en lugar de formatear inmediatamente el servidor afectado?',
        options: [
          'Porque formatear inmediatamente destruye la evidencia forense necesaria para RS.AN (determinar cómo entró el atacante) y puede dejar la puerta trasera abierta en otros equipos.',
          'Porque el framework NIST prohíbe usar copias de seguridad antes de 30 días.',
          'Porque el aislamiento de red es una tarea exclusiva de Recursos Humanos.',
          'No hay diferencia; formatear sin investigar siempre es la mejor práctica.',
        ],
        correctIndex: 0,
        explanation:
          '¡Correcto! Aislar primero (RS.MI) frena la propagación mientras preserva evidencia crítica para RS.AN (Análisis de Incidentes). Sin identificar la causa raíz, el atacante volverá a cifrar los servidores restaurados.',
      },
    },
  },

  // =========================================================================
  // 4. PROCESO EXPLORA (30-45 MIN)
  // =========================================================================
  explora: {
    guideTitle:
      'Lectura Interactiva: Guía Rápida del NIST — Cómo Crear un Perfil de Ciberseguridad Institucional en 5 Pasos',
    guideSubtitle:
      'Metodología práctica recomendada por el documento oficial NIST CSF 2.0 (CSWP 29) para pasar de la teoría a una hoja de ruta medible.',
    profileSteps: [
      {
        stepNumber: 1,
        title: 'Paso 1: Definir el alcance y los objetivos del Perfil',
        description:
          'Determina a qué unidad de negocio, sistema crítico o a toda la organización aplicará el Perfil, alineándolo con la misión institucional, requisitos legales (GV.OC) y tolerancia al riesgo (GV.RM).',
        deliverable: 'Acta de Alcance del Perfil y Objetivos Estratégicos.',
        tip: 'No intentes abarcar todo sin contexto: inicia por los procesos que generan mayor valor o manejan datos regulados.',
      },
      {
        stepNumber: 2,
        title: 'Paso 2: Recopilar información del estado actual (Current Profile)',
        description:
          'Documenta los activos, políticas, controles técnicos, contratos con proveedores y capacidades de detección/respuesta existentes hoy para evaluar qué subcategorías se cumplen actualmente.',
        deliverable: 'Matriz de Current Profile calificada con evidencias reales.',
        tip: 'Básate en evidencia verificable (logs, políticas aprobadas, configuraciones), nunca en suposiciones optimistas.',
      },
      {
        stepNumber: 3,
        title:
          'Paso 3: Evaluar brechas entre el Current Profile y el Target Profile',
        description:
          'Establece el Target Profile deseado según el apetito de riesgo de la alta dirección y compara cada categoría frente al estado actual (Gap Analysis) para visibilizar deficiencias críticas.',
        deliverable: 'Informe de Análisis de Brechas (Gap Analysis) por Función.',
        tip: 'Identifica primero las brechas que afectan la continuidad operativa y el cumplimiento regulatorio obligatorio.',
      },
      {
        stepNumber: 4,
        title: 'Paso 4: Priorizar el plan de acción según riesgo y presupuesto',
        description:
          'Transforma las brechas en iniciativas concretas ordenadas por relación costo-beneficio y reducción de riesgo, asignando responsables (GV.RR), presupuesto y plazos realistas.',
        deliverable:
          'Roadmap Priorizado de Proyectos de Ciberseguridad (30-90-180 días).',
        tip: 'Combina victorias rápidas de alto impacto (MFA, backups inmutables) con proyectos estructurales (SIEM o C-SCRM).',
      },
      {
        stepNumber: 5,
        title:
          'Paso 5: Implementar, medir resultados y monitorear continuamente',
        description:
          'Ejecuta el plan de acción integrando las actualizaciones en la operación diaria, mide el avance con indicadores de supervisión (GV.OV) y repite el ciclo ante nuevas amenazas.',
        deliverable:
          'Tablero Ejecutivo de Madurez y Actualización Periódica del Perfil.',
        tip: 'Un Perfil de NIST CSF 2.0 es un documento vivo: actualízalo tras cada incidente, cambio tecnológico mayor o revisión anual.',
      },
    ],
    officialDocuments: [
      {
        id: 'nist-cswp-29',
        badge: 'Estándar Oficial PDF',
        title:
          'The NIST Cybersecurity Framework (CSF) 2.0 — Documentación Oficial (NIST CSWP 29)',
        organization: 'NIST — National Institute of Standards and Technology',
        url: 'https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf',
        description:
          'Publicación oficial completa de febrero de 2024 que define las 6 funciones (incluyendo Govern), el Core, los Perfiles Organizacionales, los Implementation Tiers y el enfoque de mejora continua.',
        keyTopics: [
          'NIST CSWP 29',
          'Govern (GV)',
          'Perfiles y Tiers',
          'Texto Normativo Oficial',
        ],
      },
      {
        id: 'nist-portal-cprt',
        badge: 'Portal Oficial y Herramienta CPRT',
        title: 'Portal Oficial NIST CSF 2.0 y Herramienta de Referencia (CPRTs)',
        organization: 'NIST Cybersecurity Framework Portal',
        url: 'https://www.nist.gov/cyberframework',
        description:
          'Centro oficial de recursos de NIST CSF 2.0 con acceso a la herramienta interactiva CPRT (Cybersecurity and Privacy Reference Tool) para navegar las 106 subcategorías y exportar mapeos.',
        keyTopics: [
          'Herramienta CPRT',
          'Mapeos ISO/CIS',
          'Recursos Multimedia',
          'Actualizaciones',
        ],
      },
      {
        id: 'nist-smb-guide',
        badge: 'Guía Práctica para Pymes',
        title:
          'Small Business Quick-Start Guide — Guía Rápida de Inicio NIST CSF 2.0',
        organization: 'NIST — Small Business Guidance',
        url: 'https://www.nist.gov/cyberframework/getting-started/small-business-quick-start-guide',
        description:
          'Guía práctica diseñada para pequeñas y medianas organizaciones sin departamento dedicado de ciberseguridad, priorizando acciones esenciales en cada una de las 6 funciones.',
        keyTopics: [
          'Pymes y Startups',
          'Priorización Práctica',
          'Higiene Inicial',
          'Bajo Costo',
        ],
      },
      {
        id: 'nist-cscrm',
        badge: 'Cadena de Suministro (GV.SC)',
        title: 'Cyber Supply Chain Risk Management (C-SCRM) — Guía Oficial NIST',
        organization: 'NIST Computer Security Resource Center (CSRC)',
        url: 'https://csrc.nist.gov/projects/cyber-supply-chain-risk-management',
        description:
          'Proyecto oficial del NIST dedicado a la gestión de riesgos cibernéticos en proveedores, software de terceros y servicios cloud, base directa de la nueva categoría GV.SC en CSF 2.0.',
        keyTopics: [
          'Categoría GV.SC',
          'Evaluación de Proveedores',
          'NIST SP 800-161',
          'Cloud y Terceros',
        ],
      },
    ],
    coreMatrixTitle:
      'Recurso Descargable Funcional: Diagrama y Matriz Completa del Core de NIST CSF 2.0 (6 Funciones y 22 Categorías)',
    coreMatrixDescription:
      'Descarga esta hoja de cálculo (.CSV compatible con Microsoft Excel y Google Sheets con BOM UTF-8) con las 6 Funciones y sus 22 Categorías oficiales, códigos, descripciones, ejemplos de subcategorías y columnas para evaluar Perfil Actual (1-4), Perfil Objetivo (1-4) y Brecha Identificada.',
    coreMatrixRows: [
      {
        functionCode: 'GV',
        functionName: 'GOVERN (Gobernar)',
        categoryCode: 'GV.OC',
        categoryName: 'Contexto Organizacional',
        categoryDescription:
          'Comprender misión, partes interesadas, requisitos legales/regulatorios y dependencias críticas.',
        sampleSubcategories: 'GV.OC-01 a GV.OC-05',
        currentProfileScore: '2',
        targetProfileScore: '3',
        identifiedGap: '1 (Formalizar matriz de requisitos legales por servicio)',
      },
      {
        functionCode: 'GV',
        functionName: 'GOVERN (Gobernar)',
        categoryCode: 'GV.RM',
        categoryName: 'Estrategia de Gestión de Riesgos',
        categoryDescription:
          'Establecer prioridades, apetito y tolerancia al riesgo integrados al ERM corporativo.',
        sampleSubcategories: 'GV.RM-01 a GV.RM-07',
        currentProfileScore: '2',
        targetProfileScore: '4',
        identifiedGap: '2 (Definir declaración cuantitativa de apetito de riesgo)',
      },
      {
        functionCode: 'GV',
        functionName: 'GOVERN (Gobernar)',
        categoryCode: 'GV.RR',
        categoryName: 'Roles, Responsabilidades y Autoridades',
        categoryDescription:
          'Asignar liderazgo, rendición de cuentas y recursos suficientes en toda la organización.',
        sampleSubcategories: 'GV.RR-01 a GV.RR-04',
        currentProfileScore: '3',
        targetProfileScore: '4',
        identifiedGap: '1 (Actualizar matriz RACI con dueños de datos)',
      },
      {
        functionCode: 'GV',
        functionName: 'GOVERN (Gobernar)',
        categoryCode: 'GV.PO',
        categoryName: 'Políticas',
        categoryDescription:
          'Establecer, comunicar, hacer cumplir y revisar políticas y procedimientos de ciberseguridad.',
        sampleSubcategories: 'GV.PO-01 a GV.PO-02',
        currentProfileScore: '3',
        targetProfileScore: '3',
        identifiedGap: '0 (Conforme - Revisión anual vigente)',
      },
      {
        functionCode: 'GV',
        functionName: 'GOVERN (Gobernar)',
        categoryCode: 'GV.OV',
        categoryName: 'Supervisión',
        categoryDescription:
          'Evaluar resultados de la estrategia de riesgo cibernético y ajustar el programa mediante métricas.',
        sampleSubcategories: 'GV.OV-01 a GV.OV-03',
        currentProfileScore: '2',
        targetProfileScore: '3',
        identifiedGap: '1 (Implementar comité trimestral con KRIs)',
      },
      {
        functionCode: 'GV',
        functionName: 'GOVERN (Gobernar)',
        categoryCode: 'GV.SC',
        categoryName: 'Gestión de Riesgos de Cadena de Suministro (C-SCRM)',
        categoryDescription:
          'Identificar, evaluar, contratar y monitorear riesgos de proveedores, software y terceros.',
        sampleSubcategories: 'GV.SC-01 a GV.SC-10',
        currentProfileScore: '1',
        targetProfileScore: '3',
        identifiedGap: '2 (Brecha crítica: evaluar proveedores SaaS y contratos)',
      },
      {
        functionCode: 'ID',
        functionName: 'IDENTIFY (Identificar)',
        categoryCode: 'ID.AM',
        categoryName: 'Gestión de Activos',
        categoryDescription:
          'Inventariar hardware, software, servicios cloud, datos y flujos de red según importancia.',
        sampleSubcategories: 'ID.AM-01 a ID.AM-08',
        currentProfileScore: '2',
        targetProfileScore: '4',
        identifiedGap: '2 (Automatizar CMDB y clasificación de datos PII)',
      },
      {
        functionCode: 'ID',
        functionName: 'IDENTIFY (Identificar)',
        categoryCode: 'ID.RA',
        categoryName: 'Evaluación de Riesgos',
        categoryDescription:
          'Identificar vulnerabilidades, amenazas internas/externas, probabilidades e impactos.',
        sampleSubcategories: 'ID.RA-01 a ID.RA-10',
        currentProfileScore: '2',
        targetProfileScore: '3',
        identifiedGap: '1 (Integrar inteligencia de amenazas al análisis)',
      },
      {
        functionCode: 'ID',
        functionName: 'IDENTIFY (Identificar)',
        categoryCode: 'ID.IM',
        categoryName: 'Mejora',
        categoryDescription:
          'Identificar mejoras a partir de auditorías, ejercicios y evaluaciones operativas.',
        sampleSubcategories: 'ID.IM-01 a ID.IM-04',
        currentProfileScore: '2',
        targetProfileScore: '3',
        identifiedGap: '1 (Sistematizar seguimiento de lecciones aprendidas)',
      },
      {
        functionCode: 'PR',
        functionName: 'PROTECT (Proteger)',
        categoryCode: 'PR.AA',
        categoryName: 'Gestión de Identidades, Autenticación y Control de Acceso',
        categoryDescription:
          'Controlar acceso lógico y físico bajo mínimo privilegio, MFA y gestión de identidades.',
        sampleSubcategories: 'PR.AA-01 a PR.AA-06',
        currentProfileScore: '3',
        targetProfileScore: '4',
        identifiedGap: '1 (Extender MFA resistente a phishing al 100%)',
      },
      {
        functionCode: 'PR',
        functionName: 'PROTECT (Proteger)',
        categoryCode: 'PR.AT',
        categoryName: 'Concientización y Capacitación',
        categoryDescription:
          'Capacitar a colaboradores y roles especializados en prácticas seguras y detección de phishing.',
        sampleSubcategories: 'PR.AT-01 a PR.AT-02',
        currentProfileScore: '2',
        targetProfileScore: '3',
        identifiedGap: '1 (Ejecutar simulacros trimestrales de phishing)',
      },
      {
        functionCode: 'PR',
        functionName: 'PROTECT (Proteger)',
        categoryCode: 'PR.DS',
        categoryName: 'Seguridad de Datos',
        categoryDescription:
          'Proteger datos en reposo, en tránsito y en uso mediante cifrado, integridad y DLP.',
        sampleSubcategories: 'PR.DS-01, PR.DS-02, PR.DS-10, PR.DS-11',
        currentProfileScore: '2',
        targetProfileScore: '4',
        identifiedGap: '2 (Activar cifrado KMS y DLP en endpoints)',
      },
      {
        functionCode: 'PR',
        functionName: 'PROTECT (Proteger)',
        categoryCode: 'PR.PS',
        categoryName: 'Seguridad de Plataformas',
        categoryDescription:
          'Gestionar configuraciones seguras (hardening), parches, software y registros de plataformas.',
        sampleSubcategories: 'PR.PS-01 a PR.PS-06',
        currentProfileScore: '2',
        targetProfileScore: '3',
        identifiedGap: '1 (Estandarizar líneas base CIS Benchmarks)',
      },
      {
        functionCode: 'PR',
        functionName: 'PROTECT (Proteger)',
        categoryCode: 'PR.IR',
        categoryName: 'Resiliencia de Infraestructura Tecnológica',
        categoryDescription:
          'Proteger redes y arquitectura con segmentación, redundancia y disponibilidad de recursos.',
        sampleSubcategories: 'PR.IR-01 a PR.IR-04',
        currentProfileScore: '2',
        targetProfileScore: '4',
        identifiedGap: '2 (Segmentar VLANs críticas y aislar respaldos)',
      },
      {
        functionCode: 'DE',
        functionName: 'DETECT (Detectar)',
        categoryCode: 'DE.CM',
        categoryName: 'Monitoreo Continuo',
        categoryDescription:
          'Supervisar continuamente redes, endpoints, personal y servicios para detectar anomalías.',
        sampleSubcategories: 'DE.CM-01, DE.CM-02, DE.CM-03, DE.CM-06, DE.CM-09',
        currentProfileScore: '1',
        targetProfileScore: '4',
        identifiedGap: '3 (Brecha crítica: desplegar EDR + SIEM 24/7)',
      },
      {
        functionCode: 'DE',
        functionName: 'DETECT (Detectar)',
        categoryCode: 'DE.AE',
        categoryName: 'Análisis de Eventos Adversos',
        categoryDescription:
          'Analizar y correlacionar eventos para caracterizar ataques, impacto y declarar incidentes.',
        sampleSubcategories: 'DE.AE-02 a DE.AE-08',
        currentProfileScore: '1',
        targetProfileScore: '3',
        identifiedGap: '2 (Definir reglas de correlación y umbrales de alerta)',
      },
      {
        functionCode: 'RS',
        functionName: 'RESPOND (Responder)',
        categoryCode: 'RS.MA',
        categoryName: 'Gestión de Incidentes',
        categoryDescription:
          'Gestionar respuestas coordinadas a incidentes confirmados mediante triage y escalamiento.',
        sampleSubcategories: 'RS.MA-01 a RS.MA-05',
        currentProfileScore: '2',
        targetProfileScore: '3',
        identifiedGap: '1 (Formalizar playbooks para ransomware y phishing)',
      },
      {
        functionCode: 'RS',
        functionName: 'RESPOND (Responder)',
        categoryCode: 'RS.AN',
        categoryName: 'Análisis de Incidentes',
        categoryDescription:
          'Investigar el alcance, causa raíz y preservar evidencia forense durante la respuesta.',
        sampleSubcategories: 'RS.AN-03, RS.AN-06, RS.AN-07, RS.AN-08',
        currentProfileScore: '1',
        targetProfileScore: '3',
        identifiedGap: '2 (Definir procedimiento de cadena de custodia digital)',
      },
      {
        functionCode: 'RS',
        functionName: 'RESPOND (Responder)',
        categoryCode: 'RS.CO',
        categoryName: 'Comunicación y Reporte de Respuesta',
        categoryDescription:
          'Coordinar notificaciones internas y externas con partes interesadas y autoridades.',
        sampleSubcategories: 'RS.CO-02, RS.CO-03',
        currentProfileScore: '1',
        targetProfileScore: '3',
        identifiedGap: '2 (Crear plantillas legales de notificación de brecha)',
      },
      {
        functionCode: 'RS',
        functionName: 'RESPOND (Responder)',
        categoryCode: 'RS.MI',
        categoryName: 'Mitigación de Incidentes',
        categoryDescription:
          'Contener y erradicar el incidente para impedir su propagación en la infraestructura.',
        sampleSubcategories: 'RS.MI-01, RS.MI-02',
        currentProfileScore: '2',
        targetProfileScore: '4',
        identifiedGap: '2 (Automatizar aislamiento de hosts vía EDR/SOAR)',
      },
      {
        functionCode: 'RC',
        functionName: 'RECOVER (Recuperar)',
        categoryCode: 'RC.RP',
        categoryName: 'Ejecución del Plan de Recuperación',
        categoryDescription:
          'Restaurar servicios afectados mediante backups verificados e integridad comprobada.',
        sampleSubcategories: 'RC.RP-01 a RC.RP-06',
        currentProfileScore: '2',
        targetProfileScore: '4',
        identifiedGap: '2 (Implementar copias inmutables y pruebas semestrales)',
      },
      {
        functionCode: 'RC',
        functionName: 'RECOVER (Recuperar)',
        categoryCode: 'RC.CO',
        categoryName: 'Comunicación de Recuperación',
        categoryDescription:
          'Comunicar el avance de recuperación y retorno seguro a partes internas y clientes.',
        sampleSubcategories: 'RC.CO-03, RC.CO-04',
        currentProfileScore: '1',
        targetProfileScore: '3',
        identifiedGap: '2 (Establecer protocolo de comunicación de crisis)',
      },
    ],
  },

  // =========================================================================
  // 5. PROCESO PRACTICA (60-90 MIN)
  // =========================================================================
  practica: {
    activity1Title:
      'Actividad 1: Clasificador de 10 Escenarios de Mitigación según la Función de NIST CSF 2.0 (GV, ID, PR, DE, RS, RC)',
    activity1Instructions:
      'Analiza cada uno de los 10 escenarios operativos o estratégicos y asígnalo a la función exacta del Core de NIST CSF 2.0. Obtendrás retroalimentación inmediata por categoría y tu puntaje acumulado sobre 10.',
    classificationItems: [
      {
        id: 'm2-p1-1',
        number: 1,
        scenario:
          'Aprobar el presupuesto anual de ciberseguridad y definir la política institucional desde la alta dirección.',
        correctFunction: 'GV',
        categoryHint: 'GV.RM / GV.PO / GV.RR',
        explanation:
          '¡Correcto! Pertenece a Govern (GV). La aprobación presupuestaria, la estrategia de riesgos y las políticas institucionales desde la alta dirección son el corazón de la nueva función central GV.',
      },
      {
        id: 'm2-p1-2',
        number: 2,
        scenario:
          'Evaluar los riesgos de seguridad de los proveedores externos de software antes de firmar contrato.',
        correctFunction: 'GV',
        categoryHint: 'GV.SC (Gestión de Riesgos de Cadena de Suministro)',
        explanation:
          '¡Correcto! Pertenece a Govern (GV), específicamente a la categoría GV.SC (Cybersecurity Supply Chain Risk Management), elevada a nivel estratégico en CSF 2.0.',
      },
      {
        id: 'm2-p1-3',
        number: 3,
        scenario:
          'Levantar un inventario actualizado de todos los servidores, laptops y flujos de datos críticos.',
        correctFunction: 'ID',
        categoryHint: 'ID.AM (Gestión de Activos)',
        explanation:
          '¡Correcto! Pertenece a Identify (ID), categoría ID.AM. No se puede proteger ni monitorear aquello que la organización no sabe que existe.',
      },
      {
        id: 'm2-p1-4',
        number: 4,
        scenario:
          'Realizar un análisis de vulnerabilidades y clasificar el impacto financiero de posibles amenazas.',
        correctFunction: 'ID',
        categoryHint: 'ID.RA (Evaluación de Riesgos)',
        explanation:
          '¡Correcto! Pertenece a Identify (ID), categoría ID.RA. Comprender vulnerabilidades, amenazas e impactos permite priorizar inversiones de seguridad.',
      },
      {
        id: 'm2-p1-5',
        number: 5,
        scenario:
          'Implementar autenticación multifactor (MFA) y cifrado de bases de datos sensibles.',
        correctFunction: 'PR',
        categoryHint: 'PR.AA (Control de Acceso) y PR.DS (Seguridad de Datos)',
        explanation:
          '¡Correcto! Pertenece a Protect (PR). Tanto el MFA (PR.AA) como el cifrado de bases de datos (PR.DS) son salvaguardas preventivas clave.',
      },
      {
        id: 'm2-p1-6',
        number: 6,
        scenario:
          'Capacitar trimestralmente al personal para reconocer correos de phishing.',
        correctFunction: 'PR',
        categoryHint: 'PR.AT (Concientización y Capacitación)',
        explanation:
          '¡Correcto! Pertenece a Protect (PR), categoría PR.AT (Awareness and Training), orientada a fortalecer la primera línea de defensa humana.',
      },
      {
        id: 'm2-p1-7',
        number: 7,
        scenario:
          'Correlacionar alertas de inicio de sesión anómalos en un SIEM las 24 horas.',
        correctFunction: 'DE',
        categoryHint: 'DE.CM (Monitoreo Continuo) y DE.AE (Análisis de Eventos)',
        explanation:
          '¡Correcto! Pertenece a Detect (DE). Monitorear telemetría 24/7 (DE.CM) y correlacionar eventos adversos (DE.AE) permite descubrir intrusiones rápidamente.',
      },
      {
        id: 'm2-p1-8',
        number: 8,
        scenario:
          'Aislar inmediatamente de la red un servidor infectado para frenar la propagación de malware.',
        correctFunction: 'RS',
        categoryHint: 'RS.MI (Mitigación de Incidentes)',
        explanation:
          '¡Correcto! Pertenece a Respond (RS), categoría RS.MI. Una vez detectado el ataque, aislar el equipo contiene el radio de impacto.',
      },
      {
        id: 'm2-p1-9',
        number: 9,
        scenario:
          'Notificar formalmente a los reguladores y usuarios afectados tras confirmar una brecha.',
        correctFunction: 'RS',
        categoryHint: 'RS.CO (Comunicación y Reporte de Respuesta)',
        explanation:
          '¡Correcto! Pertenece a Respond (RS), categoría RS.CO, encargada de coordinar los reportes internos y externos durante la respuesta a un incidente confirmado.',
      },
      {
        id: 'm2-p1-10',
        number: 10,
        scenario:
          'Restaurar la operación de los sistemas críticos usando respaldos limpios y verificar su integridad.',
        correctFunction: 'RC',
        categoryHint: 'RC.RP (Ejecución del Plan de Recuperación)',
        explanation:
          '¡Correcto! Pertenece a Recover (RC), categoría RC.RP, enfocada en validar copias de respaldo y restablecer la continuidad operativa del negocio.',
      },
    ],
    activity2Title:
      'Actividad 2: Diagnóstico de Madurez Organizacional — Clasificar el Tier (Tier 1 a Tier 4) a partir de un Informe de Auditoría',
    activity2Instructions:
      'Lee atentamente el extracto del informe de auditoría de "Corporación Andina Logística S.A." y determina en qué Implementation Tier de NIST CSF 2.0 se encuentra hoy la empresa.',
    tierAuditCase: {
      companyName: 'Corporación Andina Logística S.A.',
      auditContext:
        'Informe de Evaluación de Madurez Cibernética — Revisión Anual de Gestión de Riesgos (Extracto Ejecutivo):',
      findings: [
        'Hallazgo 1: La empresa cuenta con políticas de seguridad aprobadas por gerencia y un equipo de TI que aplica controles básicos (antivirus, firewall y respaldos semanales).',
        'Hallazgo 2: Sin embargo, cada área operativa (Almacenes, Finanzas, Comercio Electrónico) gestiona sus riesgos tecnológicos de forma aislada, sin métricas compartidas.',
        'Hallazgo 3: No existe un proceso formal y repetible en toda la organización para actualizar controles ni evaluar proveedores cuando surgen nuevas amenazas.',
        'Hallazgo 4: El personal conoce sus responsabilidades de seguridad únicamente cuando ocurre un incidente grave o ante una auditoría externa puntual.',
      ],
      question:
        'Según los 4 hallazgos anteriores, ¿qué nivel de Implementation Tier describe exactamente la madurez actual de Corporación Andina Logística S.A.?',
      correctTier: 'Tier 2',
      tierOptions: [
        {
          level: 'Tier 1',
          label: 'Tier 1: Parcial (Partial)',
          subtitle:
            'Prácticas completamente ad-hoc, reactivas y sin aprobación gerencial.',
          isCorrect: false,
          feedbackTitle: 'Subestimación de Madurez (No es Tier 1)',
          feedbackBody:
            'Aunque la empresa tiene vacíos importantes, el informe indica explícitamente que SÍ cuenta con políticas de seguridad aprobadas por la gerencia y un equipo de TI que aplica controles básicos. En el Tier 1 (Parcial) no existe ni siquiera esa aprobación ni conciencia gerencial estructurada.',
          pathToNextTier:
            'Revisa el nivel que reconoce la aprobación gerencial pero evidencia silos entre áreas y falta de procesos repetibles en toda la empresa.',
        },
        {
          level: 'Tier 2',
          label: 'Tier 2: Informado sobre el riesgo (Risk Informed)',
          subtitle:
            'Prácticas aprobadas por gerencia, pero aplicadas en silos sin un proceso formal repetible en toda la empresa.',
          isCorrect: true,
          feedbackTitle:
            '¡Diagnóstico Exacto: Tier 2 (Informado sobre el riesgo)!',
          feedbackBody:
            '¡Excelente criterio de auditoría! El caso coincide exactamente con los criterios oficiales del Tier 2 de NIST CSF 2.0: existe conciencia del riesgo a nivel gerencial (políticas aprobadas y controles básicos de TI), pero las prácticas aún NO están institucionalizadas como un proceso formal y repetible en toda la organización (silos por áreas y respuesta solo ante incidentes o auditorías).',
          pathToNextTier:
            '¿Qué le falta para alcanzar el Tier 3 (Repetible)? Institucionalizar una política corporativa obligatoria para todas las áreas (sin silos), definir un proceso formal y periódico de actualización de controles ante nuevas amenazas, capacitar continuamente al personal en sus roles (GV.RR / PR.AT) y gestionar formalmente la cadena de suministro (GV.SC).',
        },
        {
          level: 'Tier 3',
          label: 'Tier 3: Repetible (Repeatable)',
          subtitle:
            'Políticas formales institucionalizadas en toda la organización y procesos repetibles actualizados periódicamente.',
          isCorrect: false,
          feedbackTitle: 'Sobreestimación de Madurez (Aún no alcanza Tier 3)',
          feedbackBody:
            'Para estar en Tier 3 (Repetible), la organización debe contar con procesos formales, consistentes y actualizados periódicamente en TODAS sus áreas. Los hallazgos prueban que cada área trabaja aislada y no existe un proceso repetible ante nuevas amenazas.',
          pathToNextTier:
            'El Tier 3 es precisamente la meta a la que debería aspirar la empresa tras superar su estado actual.',
        },
        {
          level: 'Tier 4',
          label: 'Tier 4: Adaptativo (Adaptive)',
          subtitle:
            'Mejora continua en tiempo real basada en inteligencia de amenazas, métricas predictivas y cultura integrada.',
          isCorrect: false,
          feedbackTitle: 'Sobreestimación Severa (Muy lejos de Tier 4)',
          feedbackBody:
            'El Tier 4 exige cultura de seguridad integrada en toda la empresa, telemetría en tiempo real y adaptación proactiva frente a adversarios avanzados. Corporación Andina Logística S.A. apenas recuerda roles durante auditorías puntuales.',
          pathToNextTier:
            'Reevalúa considerando los silos organizacionales y la ausencia de procesos repetibles.',
        },
      ],
    },
  },

  // =========================================================================
  // 6. PROCESO APLICA (30-60 MIN)
  // =========================================================================
  aplica: {
    title:
      'Simulador de Resiliencia Operativa: Respuesta (RS) y Recuperación (RC) tras caída crítica por malware',
    subtitle:
      'Toma la decisión prioritaria de arquitectura operativa para restablecer el negocio y proteger la reputación institucional.',
    situation:
      'Tras sufrir una caída de servidores por malware, una organización logra aislar los equipos afectados, pero no posee procedimientos para restablecer los servicios críticos ni un plan de comunicación de crisis con sus clientes.',
    challengeQuestion:
      '¿Qué acciones prioritarias deben formularse dentro de las funciones Respond y Recover?',
    clinicalContextDetails: [
      {
        label: 'Estado Actual del Incidente',
        detail:
          'Los servidores infectados ya fueron contenidos y aislados de la red, pero los servicios críticos al cliente continúan fuera de línea.',
      },
      {
        label: 'Vacíos Críticos Detectados',
        detail:
          'Ausencia total de procedimientos de recuperación ordenada (DRP) y carencia de protocolos de comunicación con clientes, usuarios y reguladores.',
      },
      {
        label: 'Riesgo de Negocio Inminente',
        detail:
          'Prolongación descontrolada del tiempo de inactividad (RTO), posible pérdida de evidencia forense y crisis de desconfianza reputacional.',
      },
    ],
    options: [
      {
        id: 'mod2-aplica-opt-a',
        optionCode: 'Opción A',
        title: 'Formateo Inmediato y Silencio Corporativo',
        description:
          'Formatear todos los servidores inmediatamente sin preservar evidencia forense y mantener silencio público hasta que el sistema vuelva en línea.',
        isCorrect: false,
        immediateFeedback:
          'Decisión Incorrecta: Formatear sin investigar destruye la evidencia forense indispensable para RS.AN (Análisis de Incidentes), impidiendo saber cómo ingresó el malware y arriesgando una reinfección. El silencio público viola RS.CO y RC.CO, generando pánico y sanciones regulatorias.',
        controlsMapped: [
          'Vulneración de RS.AN (Destrucción de evidencia forense)',
          'Vulneración de RS.CO / RC.CO (Falta de comunicación de crisis)',
        ],
      },
      {
        id: 'mod2-aplica-opt-b',
        optionCode: 'Opción B',
        title:
          'Decisión Correcta: Plan DRP con Backups Inmutables (RC.RP) + Protocolos de Comunicación de Crisis (RS.CO / RC.CO)',
        description:
          'Desarrollar planes de recuperación ante desastres (DRP) con copias de respaldo inmutables y verificadas (RC.RP), junto con protocolos predefinidos de comunicación interna y externa de incidentes (RS.CO y RC.CO).',
        isCorrect: true,
        immediateFeedback:
          '¡Decisión Óptima de Resiliencia Operativa! Articulas exactamente la restauración técnica ordenada sobre copias verificadas (Recover) con la gestión transparente de partes interesadas y reguladores (Respond / Recover).',
        consequenceCard:
          'Se reduce drásticamente el tiempo de inactividad operativa (RTO) y se preserva la reputación institucional ante clientes y reguladores.',
        explanationCard:
          'NIST CSF subraya que la ciberseguridad no concluye con la defensa perimetral; la resiliencia operativa radica en la respuesta oportuna y la recuperación metódica.',
        controlsMapped: [
          'RC.RP: Planes DRP con copias de respaldo inmutables y verificadas',
          'RS.CO: Comunicación oportuna con reguladores y partes interesadas',
          'RC.CO: Comunicación transparente de recuperación con clientes',
          'RS.AN: Preservación forense previa a la reconstrucción limpia',
        ],
      },
      {
        id: 'mod2-aplica-opt-c',
        optionCode: 'Opción C',
        title: 'Compra Perimetral y Seguro Tardío',
        description:
          'Comprar un segundo firewall perimetral y contratar un seguro cibernético antes de intentar levantar los servicios caídos.',
        isCorrect: false,
        immediateFeedback:
          'Decisión Incorrecta: Adquirir un segundo firewall es una medida preventiva futura (Protect) y el seguro no resuelve la emergencia actual: restablecer los sistemas críticos caídos (RC.RP) ni informar a clientes y reguladores (RS.CO / RC.CO).',
        controlsMapped: [
          'No resuelve RC.RP (Servicios siguen caídos)',
          'No resuelve RS.CO / RC.CO (Crisis comunicacional sin gestión)',
        ],
      },
    ],
  },

  // =========================================================================
  // 7. PROCESO COMPRUEBA (15-30 MIN) - 10 PREGUNTAS
  // =========================================================================
  comprueba: {
    title: 'Cuestionario Formativo del Módulo 2: NIST CSF 2.0 (10 Preguntas)',
    subtitle:
      'Evaluación interactiva sin penalización sobre la función Govern (GV), las 5 funciones operativas, los Perfiles (Current vs. Target) y los Implementation Tiers (1 al 4).',
    passingScore: 70,
    questions: [
      {
        id: 'm2-q1',
        number: 1,
        type: 'Opción Múltiple',
        category: 'Recordar/Comprender (30%)',
        question:
          '¿Cuál fue la principal innovación arquitectónica introducida en NIST Cybersecurity Framework (CSF) 2.0 en febrero de 2024 respecto a la versión 1.1?',
        options: [
          'Se eliminó la función Detect para fusionarla dentro de Protect.',
          'Se incorporó la función transversal GOVERN (GV) en el centro del marco y se amplió el alcance para aplicarse a cualquier tipo de organización, no solo infraestructura crítica.',
          'Se convirtió en una certificación obligatoria de pago emitida por el NIST.',
          'Se redujeron las funciones operativas de cinco a tres.',
        ],
        correctIndex: 1,
        explanation:
          'NIST CSF 2.0 agregó GOVERN (GV) como eje transversal rodeando a Identify, Protect, Detect, Respond y Recover, y eliminó la restricción de "infraestructura crítica" para servir a toda organización.',
      },
      {
        id: 'm2-q2',
        number: 2,
        type: 'Verdadero / Falso Argumentado',
        category: 'Recordar/Comprender (30%)',
        question:
          'VERDADERO O FALSO: "NIST CSF 2.0 es un marco prescriptivo que obliga a usar marcas específicas de software y exige alcanzar obligatoriamente el Tier 4 en todas las empresas."',
        options: [
          'Verdadero, toda organización debe alcanzar el Tier 4 para poder usar el marco NIST.',
          'Falso, NIST CSF 2.0 es voluntario, flexible, basado en resultados (outcome-based) y no prescriptivo; cada empresa selecciona su Target Profile y el Tier costo-efectivo según su riesgo.',
        ],
        correctIndex: 1,
        explanation:
          '¡Falso! NIST CSF 2.0 define QUÉ resultados lograr (outcomes), dejando el CÓMO a estándares como CIS o ISO, y aclara que el Tier 3 o Tier 2 puede ser suficiente según el apetito de riesgo.',
      },
      {
        id: 'm2-q3',
        number: 3,
        type: 'Opción Múltiple',
        category: 'Recordar/Comprender (30%)',
        question:
          '¿Cuáles son las 6 categorías oficiales de la nueva función GOVERN (GV) en NIST CSF 2.0?',
        options: [
          'GV.OC (Contexto), GV.RM (Estrategia de Riesgos), GV.RR (Roles y Responsabilidades), GV.PO (Políticas), GV.OV (Supervisión) y GV.SC (Cadena de Suministro).',
          'GV.ID, GV.PR, GV.DE, GV.RS, GV.RC y GV.USB.',
          'GV.AM (Activos), GV.CM (Monitoreo), GV.DS (Datos), GV.MI (Mitigación), GV.RP (Recuperación) y GV.AT (Capacitación).',
          'GV.1 a GV.6 sin códigos estandarizados.',
        ],
        correctIndex: 0,
        explanation:
          'Las 6 categorías oficiales de Govern son GV.OC, GV.RM, GV.RR, GV.PO, GV.OV y GV.SC.',
      },
      {
        id: 'm2-q4',
        number: 4,
        type: 'Opción Múltiple',
        category: 'Interpretar/Aplicar (40%)',
        question:
          'Una empresa revisa los logs de su red y descubre que un atacante estuvo exfiltrando información silenciosamente durante 220 días sin disparar alertas. ¿Qué categorías de NIST CSF 2.0 fallaron principalmente?',
        options: [
          'RC.RP (Plan de Recuperación) y RC.CO (Comunicación de Recuperación)',
          'DE.CM (Monitoreo Continuo) y DE.AE (Análisis de Eventos Adversos) dentro de la función Detect (DE)',
          'PR.AT (Capacitación de usuarios) exclusivamente',
          'ID.AM (Inventario físico de impresoras)',
        ],
        correctIndex: 1,
        explanation:
          'Un tiempo de permanencia (dwell time) de 220 días revela una falla crítica en Detect (DE): ausencia de monitoreo continuo efectivo (DE.CM) y de análisis de eventos adversos (DE.AE).',
      },
      {
        id: 'm2-q5',
        number: 5,
        type: 'Opción Múltiple',
        category: 'Interpretar/Aplicar (40%)',
        question:
          '¿Para qué sirve comparar el "Current Profile" contra el "Target Profile" dentro de NIST CSF 2.0?',
        options: [
          'Para calcular el salario del equipo de desarrollo web.',
          'Para ejecutar un Análisis de Brechas (Gap Analysis) y priorizar inversiones de ciberseguridad según el riesgo y el presupuesto disponible.',
          'Para reemplazar el inventario de activos y las políticas de seguridad.',
          'Para desactivar el monitoreo continuo una vez creado el perfil.',
        ],
        correctIndex: 1,
        explanation:
          'Comparar el Perfil Actual con el Perfil Objetivo permite identificar brechas y construir una hoja de ruta priorizada.',
      },
      {
        id: 'm2-q6',
        number: 6,
        type: 'Opción Múltiple',
        category: 'Interpretar/Aplicar (40%)',
        question:
          'Una organización cuenta con políticas de seguridad aprobadas por su gerencia y aplica controles básicos de TI, pero cada área gestiona sus riesgos de forma aislada y sin un proceso formal repetible en toda la empresa. ¿En qué Implementation Tier se encuentra?',
        options: [
          'Tier 1 (Parcial)',
          'Tier 2 (Informado sobre el riesgo)',
          'Tier 3 (Repetible)',
          'Tier 4 (Adaptativo)',
        ],
        correctIndex: 1,
        explanation:
          'Corresponde exactamente al Tier 2 (Informado sobre el riesgo): hay conciencia gerencial y prácticas aprobadas, pero falta formalización e institucionalización consistente y repetible en toda la organización.',
      },
      {
        id: 'm2-q7',
        number: 7,
        type: 'Verdadero / Falso Argumentado',
        category: 'Interpretar/Aplicar (40%)',
        question:
          'VERDADERO O FALSO: "En NIST CSF 2.0, la evaluación de riesgos cibernéticos de proveedores SaaS y contratos con terceros corresponde a la categoría GV.SC dentro de GOVERN."',
        options: [
          'Verdadero, GV.SC (Cybersecurity Supply Chain Risk Management) integra el riesgo de proveedores y cadena de suministro directamente en la gobernanza corporativa.',
          'Falso, los proveedores externos nunca forman parte del análisis de riesgos de NIST CSF 2.0.',
        ],
        correctIndex: 0,
        explanation:
          '¡Verdadero! Una de las mayores mejoras de CSF 2.0 fue mover y ampliar la gestión de riesgos de cadena de suministro hacia GV.SC.',
      },
      {
        id: 'm2-q8',
        number: 8,
        type: 'Opción Múltiple',
        category: 'Resolver Casos (30%)',
        question:
          'Un equipo CSIRT logra aislar en 15 minutos los servidores afectados por un ransomware (RS.MI) y preserva la memoria forense (RS.AN). ¿Qué paso crítico corresponde inmediatamente dentro de la categoría RC.RP antes de volver a poner los servicios en producción?',
        options: [
          'Pagar el rescate en criptomonedas para obtener la clave más rápido.',
          'Verificar la integridad y ausencia de malware en las copias de respaldo inmutables (RC.RP-03) y restaurar en orden de criticidad según el DRP.',
          'Eliminar todos los registros de auditoría para liberar espacio en disco.',
          'Deshabilitar el MFA para que los usuarios ingresen más rápido tras la caída.',
        ],
        correctIndex: 1,
        explanation:
          'Dentro de RC.RP (Ejecución del Plan de Recuperación), verificar la integridad y limpieza de los respaldos (RC.RP-03) antes de restaurar evita reintroducir el ransomware.',
      },
      {
        id: 'm2-q9',
        number: 9,
        type: 'Opción Múltiple',
        category: 'Resolver Casos (30%)',
        question:
          '¿Cuál de los siguientes pares asocia CORRECTAMENTE la acción técnica con su Función y Categoría en NIST CSF 2.0?',
        options: [
          'Implementar MFA y control de mínimo privilegio → Protect (PR.AA)',
          'Implementar MFA y control de mínimo privilegio → Recover (RC.CO)',
          'Aislar una VLAN comprometida por malware → Identify (ID.AM)',
          'Realizar copias de respaldo inmutables verificadas tras un ataque → Govern (GV.OC)',
        ],
        correctIndex: 0,
        explanation:
          'La gestión de identidades, autenticación (MFA) y control de acceso pertenece a la categoría PR.AA dentro de Protect (PR).',
      },
      {
        id: 'm2-q10',
        number: 10,
        type: 'Opción Múltiple',
        category: 'Resolver Casos (30%)',
        question:
          'Si una entidad sufre la caída de sus sistemas por malware y ya aisló los equipos infectados, pero carece de procedimientos de restauración y de un plan de comunicación de crisis con clientes, ¿qué combinación de categorías debe construir prioritariamente?',
        options: [
          'RC.RP (Plan de recuperación ante desastres con respaldos verificados) junto con RS.CO y RC.CO (Protocolos de comunicación interna/externa de incidentes y recuperación).',
          'Únicamente GV.OC sin elaborar planes de recuperación ni comunicación.',
          'Comprar un segundo firewall perimetral y guardar silencio ante los clientes.',
          'Eliminar el departamento de atención al cliente.',
        ],
        correctIndex: 0,
        explanation:
          'La resiliencia operativa en NIST CSF 2.0 requiere combinar la recuperación metódica (RC.RP) con la coordinación comunicacional transparente ante crisis (RS.CO y RC.CO).',
      },
    ],
  },

  // =========================================================================
  // 8. PROCESO RECUERDA (5-10 MIN)
  // =========================================================================
  recuerda: {
    title:
      'Infografía Resumen Interactiva: Los 5 Pilares Maestros de NIST CSF 2.0',
    subtitle:
      'Haz clic en cada uno de los 5 pilares para consolidar tu dominio de la gobernanza y respuesta a riesgos bajo NIST CSF 2.0 antes de completar el módulo.',
    pillars: [
      {
        id: 'm2-pilar-1',
        number: 1,
        badge: 'Pilar 1 • Nueva Función Central',
        title:
          'NIST CSF 2.0 incorpora formalmente GOVERN (GV) como eje transversal con la alta dirección',
        coreStatement:
          'NIST CSF 2.0 incorpora formalmente la función GOVERN (GV) como eje transversal que conecta la ciberseguridad con la alta dirección, el contexto de negocio, el apetito de riesgo, las políticas, la supervisión y la cadena de suministro.',
        keyMetrics: '6 Categorías en GV: GV.OC, GV.RM, GV.RR, GV.PO, GV.OV, GV.SC',
        auditTakeaway:
          'Sin Govern en el centro, los esfuerzos técnicos de seguridad carecen de alineación estratégica, presupuesto sostenido y rendición de cuentas ejecutiva.',
        checklist: [
          'Apetito y tolerancia al riesgo definidos con el Directorio (GV.RM)',
          'Roles y responsabilidades formales en toda la organización (GV.RR)',
          'Riesgos de proveedores y terceros gobernados desde el contrato (GV.SC)',
        ],
      },
      {
        id: 'm2-pilar-2',
        number: 2,
        badge: 'Pilar 2 • Visión Integral de 6 Funciones',
        title:
          'Sus 6 funciones representan una visión integral y continua de la ciberseguridad',
        coreStatement:
          'Sus 6 funciones (Govern, Identify, Protect, Detect, Respond, Recover) representan una visión integral y continua de la ciberseguridad: previenen ataques, reducen el tiempo de permanencia (dwell time) y aseguran recuperación resiliente.',
        keyMetrics: '6 Funciones • 22 Categorías • 106 Subcategorías',
        auditTakeaway:
          'Invertir solo en Protect (perímetro) sin Detect (DE) y Respond (RS) deja a la organización ciega frente a intrusiones internas.',
        checklist: [
          'GV dirige la estrategia; ID y PR preparan y protegen los activos',
          'DE descubre anomalías oportunamente (DE.CM y DE.AE)',
          'RS contiene el incidente y RC restaura servicios y confianza (RC.RP / RC.CO)',
        ],
      },
      {
        id: 'm2-pilar-3',
        number: 3,
        badge: 'Pilar 3 • Current vs. Target Profile',
        title:
          'Los Perfiles facilitan el análisis de brechas (Gap Analysis) entre el estado actual y el deseado',
        coreStatement:
          'Los Perfiles (Current vs. Target Profile) facilitan el análisis de brechas (Gap Analysis) entre el estado actual y el objetivo deseado, permitiendo priorizar proyectos e inversiones según riesgo y presupuesto.',
        keyMetrics: 'Current Profile + Target Profile = Hoja de Ruta Priorizada',
        auditTakeaway:
          'El Análisis de Brechas evita gastar en herramientas redundantes y enfoca el presupuesto en cerrar las vulnerabilidades más críticas para el negocio.',
        checklist: [
          'Paso 1-2: Definir alcance y medir Current Profile con evidencia real',
          'Paso 3: Establecer Target Profile acorde al apetito de riesgo',
          'Paso 4-5: Priorizar roadmap de cierre de brechas y monitorear avance',
        ],
      },
      {
        id: 'm2-pilar-4',
        number: 4,
        badge: 'Pilar 4 • Implementation Tiers (1-4)',
        title:
          'Los Implementation Tiers (1 al 4) evalúan madurez, formalidad y agilidad en gestión de riesgos',
        coreStatement:
          'Los Implementation Tiers (Tier 1 Parcial, Tier 2 Informado sobre el riesgo, Tier 3 Repetible, Tier 4 Adaptativo) evalúan el grado de madurez, formalidad y agilidad con el que la organización gestiona sus riesgos cibernéticos.',
        keyMetrics:
          'Tier 1 (Ad-hoc) → Tier 2 (Silos) → Tier 3 (Repetible) → Tier 4 (Adaptativo)',
        auditTakeaway:
          'El objetivo óptimo no siempre es Tier 4: las organizaciones deben aspirar al Tier que brinde el equilibrio costo-efectivo adecuado a su nivel de riesgo.',
        checklist: [
          'Tier 1: Reactivo e informal; Tier 2: Aprobado por gerencia pero aislado en silos',
          'Tier 3: Políticas formales y procesos repetibles en toda la organización',
          'Tier 4: Adaptación continua basada en inteligencia de amenazas y métricas predictivas',
        ],
      },
      {
        id: 'm2-pilar-5',
        number: 5,
        badge: 'Pilar 5 • Marco Universal y Outcome-Based',
        title:
          'Es un marco flexible, voluntario y basado en resultados, adaptable a cualquier empresa',
        coreStatement:
          'NIST CSF 2.0 es un marco flexible, voluntario y basado en resultados (outcome-based), adaptable a cualquier sector o tamaño de empresa —desde pymes hasta corporaciones multinacionales y entidades públicas.',
        keyMetrics:
          'Qué lograr (NIST CSF 2.0) ↔ Cómo implementarlo (ISO 27002 / CIS v8.1)',
        auditTakeaway:
          'Su naturaleza no prescriptiva permite traducir fácilmente los resultados del Core en controles concretos de ISO/IEC 27001/27002 y CIS Controls v8.1.',
        checklist: [
          'Aplicable a todo sector (público, privado, pymes y grandes empresas)',
          'Lenguaje común comprensible para el Directorio, Legal y equipos de SOC/TI',
          'Base estructural para la integración multi-marco del Módulo 4',
        ],
      },
    ],
  },
};

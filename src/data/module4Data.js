/**
 * ============================================================================
 * ARCHIVO DE DATOS EXHAUSTIVO: src/data/module4Data.js
 * Curso: "Marcos y Buenas Prácticas de Ciberseguridad" (Código: G4-CIBER-2026)
 * Módulo 4: Integración y Mapeo: Relación entre Requisito, Función y Control (4 Hrs)
 * ============================================================================
 */

window.LMS_DATA = window.LMS_DATA || {};

window.LMS_DATA.MODULE_4_DATA = {
  moduleCode: 'MÓDULO 4',
  moduleTitle:
    'Integración y Mapeo: Relación entre Requisito, Función y Control',
  moduleDuration: '4 Hrs',
  processesMeta: [
    {
      id: 'inicia',
      number: 1,
      title: '1. PROCESO INICIA',
      shortTitle: 'INICIA',
      duration: '5-10 min',
      subtitle:
        'Caso detonante: El CISO ante tres interlocutores (Directorio, Auditor ISO y Admin CIS)',
    },
    {
      id: 'aprende',
      number: 2,
      title: '2. PROCESO APRENDE',
      shortTitle: 'APRENDE',
      duration: '60-90 min',
      subtitle:
        '5 Lecciones interactivas + Explorador Vivo de Matriz de Trazabilidad (6 dominios)',
      subLessons: [
        {
          id: 'leccion-4-1',
          code: 'Lección 4.1',
          title:
            'Arquitectura conceptual: Jerarquía entre Requisito, Función y Salvaguarda',
          duration: '15 min',
        },
        {
          id: 'leccion-4-2',
          code: 'Lección 4.2',
          title:
            'El rol de ISO/IEC 27001:2022 como marco de gobernanza y certificación ("El Qué")',
          duration: '15 min',
        },
        {
          id: 'leccion-4-3',
          code: 'Lección 4.3',
          title:
            'El rol de NIST CSF 2.0 como articulador del ciclo de vida del riesgo ("El Cuándo y Dónde")',
          duration: '15 min',
        },
        {
          id: 'leccion-4-4',
          code: 'Lección 4.4',
          title:
            'El rol de CIS Controls v8.1 como catalizador técnico de primera línea ("El Cómo prescriptivo")',
          duration: '15 min',
        },
        {
          id: 'leccion-4-5',
          code: 'Lección 4.5',
          title:
            'Construcción práctica de matrices de trazabilidad y mapeo cruzado',
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
      subtitle:
        'Video-análisis: Hilo conductor de backups y traducción de métricas técnicas a ejecutivas',
    },
    {
      id: 'explora',
      number: 4,
      title: '4. PROCESO EXPLORA',
      shortTitle: 'EXPLORA',
      duration: '30-45 min',
      subtitle:
        'Lectura técnica de equivalencias, 4 fuentes oficiales y Matriz Integrada CSV descargable',
    },
    {
      id: 'practica',
      number: 5,
      title: '5. PROCESO PRACTICA',
      shortTitle: 'PRACTICA',
      duration: '60-90 min',
      subtitle:
        '2 Laboratorios: Correspondencia Triple (5 retos) y Diagnóstico de Auditoría (3 casos)',
    },
    {
      id: 'aplica',
      number: 6,
      title: '6. PROCESO APLICA',
      shortTitle: 'APLICA',
      duration: '30-60 min',
      subtitle:
        'Simulador: Certificación ISO 27001 en entidad pública con controles CIS previos',
    },
    {
      id: 'comprueba',
      number: 7,
      title: '7. PROCESO COMPRUEBA',
      shortTitle: 'COMPRUEBA',
      duration: '15-30 min',
      subtitle:
        'Cuestionario formativo de 10 preguntas sobre interoperabilidad ISO-NIST-CIS',
    },
    {
      id: 'recuerda',
      number: 8,
      title: '8. PROCESO RECUERDA',
      shortTitle: 'RECUERDA',
      duration: '5-10 min',
      subtitle:
        'Infografía de los 5 pilares de integración normativa y cierre del Módulo 4',
    },
  ],

  // ==========================================================================
  // 1. PROCESO INICIA
  // ==========================================================================
  inicia: {
    objective:
      'Conectar armónicamente la visión estratégica y de cumplimiento (ISO/IEC 27001:2022), la gestión dinámica de riesgos (NIST CSF 2.0) y la ejecución técnica prescriptiva (CIS Controls v8.1) en una matriz unificada que elimine la duplicidad de auditorías y gastos.',
    caseTitle:
      'El Dilema de la Triple Rendición de Cuentas: ¿Tres proyectos o una arquitectura integrada?',
    caseScenario:
      'Un Oficial de Seguridad de la Información (CISO) debe rendir cuentas simultáneamente ante tres audiencias críticas: (1) el Directorio, que exige cumplimiento legal y continuidad del negocio; (2) el Auditor Externo, que evalúa la conformidad documental y de procesos bajo ISO/IEC 27001:2022; y (3) el Administrador de Red y Sistemas, que opera diariamente implementando endurecimiento técnico basado en CIS Controls v8.1.',
    triggerQuestion:
      '¿Cómo hablar un lenguaje común sin duplicar esfuerzos, auditorías ni gastos?',
    reflectionOptions: [
      {
        id: 'm4-inicia-a',
        label: 'Opción A',
        title:
          'Crear tres equipos de seguridad independientes y aprobar tres presupuestos separados para implementar ISO 27001, NIST CSF y CIS Controls desde cero como proyectos aislados.',
        isOptimalInsight: false,
        feedbackTitle:
          'Ineficiencia Operativa y Fatiga de Auditoría ("Silos de Cumplimiento")',
        feedbackBody:
          'Tratar cada marco como un silo separado multiplica por tres las entrevistas al personal de TI, genera contradicciones en las métricas reportadas al Directorio y desperdicia presupuesto en herramientas redundantes. Ningún estándar internacional exige aislarse de los demás; al contrario, están diseñados para mapearse entre sí.',
        controlsInvolved: [
          'Riesgo: Duplicidad de costos y fatiga de auditoría',
          'Falta de trazabilidad entre GRC y operación TI',
        ],
      },
      {
        id: 'm4-inicia-b',
        label: 'Opción B',
        title:
          'Construir una Matriz Única de Trazabilidad Cruzada (Mapeo de Interoperabilidad) donde una misma salvaguarda técnica (CIS) cumpla simultáneamente una capacidad de riesgo (NIST) y sirva como evidencia auditable de un requisito normativo (ISO).',
        isOptimalInsight: true,
        feedbackTitle:
          '¡Decisión Estratégica Óptima! Gobernanza, Gestión y Operación en un Solo Hilo',
        feedbackBody:
          'Bajo la arquitectura por capas ("Test Once, Comply Many" / Audita una vez, cumple muchas), el Administrador de Red configura una única salvaguarda (ej. CIS 6.3 MFA), NIST CSF 2.0 la contabiliza dentro de la capacidad de protección de identidad (PR.AA-03) para elevar el Tier de madurez ante el Directorio, e ISO/IEC 27001:2022 la acepta como evidencia objetiva del Control 8.5 del Anexo A. Así se optimiza el presupuesto, se unifica el lenguaje y se agilizan todas las auditorías.',
        controlsInvolved: [
          'Nivel Estratégico: ISO/IEC 27001:2022 (Requisito / Qué)',
          'Nivel Táctico: NIST CSF 2.0 (Función / Cuándo y Dónde)',
          'Nivel Operativo: CIS Controls v8.1 (Control / Cómo)',
        ],
      },
      {
        id: 'm4-inicia-c',
        label: 'Opción C',
        title:
          'Descartar ISO 27001 y NIST CSF por completo y presentar al auditor únicamente capturas de pantalla de la configuración del firewall perimetral.',
        isOptimalInsight: false,
        feedbackTitle:
          'Visión Puramente Técnica Insuficiente para Certificación y Gobierno',
        feedbackBody:
          'Un firewall bien configurado no demuestra evaluación de riesgos, alcance del SGSI, roles de liderazgo ni capacidad de respuesta o recuperación ante incidentes. Sin el paraguas de gobernanza de ISO 27001 ni la gestión del ciclo de vida de NIST CSF 2.0, la empresa reprobará la auditoría de certificación y carecerá de indicadores estratégicos para el Directorio.',
        controlsInvolved: [
          'No Conformidad Mayor: Ausencia de SGSI (Cláusulas 4-10)',
          'Ceguera ejecutiva ante brechas de riesgo no técnicas',
        ],
      },
    ],
    holisticSynthesis:
      'La jerarquía moderna de ciberseguridad opera en tres niveles complementarios: Gobernanza (ISO 27001 define el Requisito obligatorio), Gestión del Riesgo (NIST CSF 2.0 articula la Función a lo largo del ciclo de vida) y Operación Técnica (CIS v8.1 prescribe el Control ejecutable). La interoperabilidad ahorra tiempo de ingeniería, evita gastos redundantes y convierte la evidencia técnica en cumplimiento auditable.',
    keyStats: [
      {
        label: 'Capas de Arquitectura Integrada',
        value: '3 Niveles',
        context:
          'Requisito Normativo (ISO) → Función de Riesgo (NIST) → Salvaguarda Técnica (CIS).',
      },
      {
        label: 'Principio de Eficiencia GRC',
        value: '1 Evidencia = N Marcos',
        context:
          'Un solo log o configuración verificada sustenta simultáneamente auditorías ISO, madurez NIST e higiene CIS.',
      },
      {
        label: 'Ahorro en Esfuerzo de Auditoría',
        value: 'Hasta 60%',
        context:
          'Al unificar controles y repositorios de evidencias en una matriz viva de trazabilidad.',
      },
    ],
  },

  // ==========================================================================
  // 2. PROCESO APRENDE (5 LECCIONES INTERACTIVAS + MATRIZ VIVA)
  // ==========================================================================
  aprende: [
    {
      id: 'leccion-4-1',
      code: 'Lección 4.1',
      title:
        'Arquitectura conceptual: La jerarquía entre Política/Requisito, Capacidad/Función y Salvaguarda/Control',
      duration: '15 min',
      summary:
        'Para integrar marcos de ciberseguridad sin confusiones terminológicas, es indispensable distinguir los tres niveles de abstracción que gobiernan cualquier programa de seguridad corporativo: el Requisito, la Función y el Control.',
      keyConcepts: [
        {
          tag: 'Nivel 1 • Estratégico',
          title: 'Requisito (Política / Obligación Auditable)',
          description:
            'Define obligaciones de gobierno, responsabilidad legal y criterios de cumplimiento auditables. Responde a la pregunta "¿Qué debe garantizar la organización para demostrar debida diligencia?". Es lenguaje de Directorio, reguladores y auditores externos.',
        },
        {
          tag: 'Nivel 2 • Táctico',
          title: 'Función (Capacidad / Ciclo de Vida del Riesgo)',
          description:
            'Organiza las capacidades operativas y estratégicas a lo largo del tiempo (antes, durante y después de un incidente). Permite medir niveles de madurez, asignar prioridades de presupuesto y comunicar brechas de riesgo entre negocio y TI.',
        },
        {
          tag: 'Nivel 3 • Operativo',
          title: 'Control / Salvaguarda (Configuración Prescriptiva)',
          description:
            'Prescribe la acción técnica o procedimental exacta sobre servidores, redes, identidades y endpoints. Indica parámetros concretos verificables (ej. activar MFA en cuentas privilegiadas, cifrar backups offline o parchar vulnerabilidades críticas en 15 días).',
        },
        {
          tag: 'Analogía Integradora',
          title: 'De la Ley de Tránsito al Freno ABS',
          description:
            'El Requisito (ISO) exige "garantizar la seguridad vial de los pasajeros mediante mantenimiento verificable". La Función (NIST) estructura las capacidades de "prevenir, detectar fallas y responder ante colisiones". La Salvaguarda (CIS) ordena "calibrar pastillas de freno cada 10,000 km y validar sensores ABS".',
        },
      ],
      hierarchyLayers: [
        {
          level: 1,
          abstraction: 'Nivel Estratégico / Normativo',
          conceptName: 'REQUISITO (Política y Gobierno)',
          frameworkRole: 'ISO/IEC 27001:2022 & 27002:2022',
          coreQuestion: '¿Qué debe existir y ser auditable?',
          audience: 'Directorio, Alta Dirección, Reguladores y Auditores Certificadores',
          example:
            'Cláusula 6.1.2 (Evaluar riesgos) y Anexo A 8.5 (Autenticación segura conforme a política de acceso).',
        },
        {
          level: 2,
          abstraction: 'Nivel Táctico / Gestión de Riesgos',
          conceptName: 'FUNCIÓN (Capacidad y Madurez)',
          frameworkRole: 'NIST Cybersecurity Framework (CSF) 2.0',
          coreQuestion: '¿Cuándo y dónde actuamos frente al riesgo?',
          audience: 'CISO, Comités de Riesgo, Gerentes de TI y Arquitectura Empresarial',
          example:
            'Función PROTECT (PR.AA-03: Gestionar acceso a activos y autenticación en Perfil Objetivo Tier 3).',
        },
        {
          level: 3,
          abstraction: 'Nivel Operativo / Técnico',
          conceptName: 'SALVAGUARDA / CONTROL (Ejecución)',
          frameworkRole: 'CIS Critical Security Controls v8.1',
          coreQuestion: '¿Cómo lo configuro exactamente en sistemas?',
          audience: 'Administradores de Sistemas, Redes, SOC, DevSecOps y Soporte',
          example:
            'Control 6 / Salvaguarda 6.3 (Exigir MFA para todas las aplicaciones externas/remotas) y 6.5 (MFA administrativo).',
        },
      ],
      takeaway:
        'Un programa maduro nunca confunde una política de 20 páginas con un control técnico, ni una regla de firewall con un sistema de gestión. Los 3 niveles se necesitan y se alimentan mutuamente.',
    },
    {
      id: 'leccion-4-2',
      code: 'Lección 4.2',
      title:
        'El rol de ISO/IEC 27001:2022 como marco de gobernanza y certificación ("El Qué")',
      duration: '15 min',
      summary:
        'ISO/IEC 27001:2022 no le dice al administrador qué comando ejecutar en Linux o qué marca de EDR comprar; su poder radica en establecer qué debe existir, mantenerse y mejorarse en un SGSI auditable y certificable internacionalmente.',
      keyConcepts: [
        {
          tag: 'Mandato Certificable',
          title: 'Cláusulas 4 a 10: La Columna Vertebral de Gobernanza',
          description:
            'Define el Alcance (Cl. 4.3), Liderazgo y Política (Cl. 5), Metodología de Riesgos y Objetivos (Cl. 6), Competencias y Documentación (Cl. 7), Operación (Cl. 8), Auditoría Interna y Revisión por la Dirección (Cl. 9) y No Conformidades/Mejora (Cl. 10).',
        },
        {
          tag: 'Debida Diligencia',
          title: 'Sello de Confianza ante Clientes y Reguladores',
          description:
            'Es el único estándar de la tríada que emite una certificación formal acreditada por organismos terceros. Demuestra legal y contractualmente que la empresa protege información confidencial bajo el ciclo PHVA.',
        },
        {
          tag: 'Anexo A + ISO 27002',
          title: '93 Controles como Referencia de Alcance (SoA)',
          description:
            'A través de la Declaración de Aplicabilidad (SoA), la organización justifica qué controles de los 4 dominios (Organizacional, Personas, Físico, Tecnológico) aplican a su realidad de negocio y cómo se implementan.',
        },
        {
          tag: 'Neutralidad Tecnológica',
          title: 'Por qué ISO no prescribe herramientas específicas',
          description:
            'Al decir "la información debe respaldarse y probarse regularmente" (8.13) sin atarse a un software, la norma sigue siendo válida tanto para un servidor on-premise como para un clúster Kubernetes en nube pública.',
        },
      ],
      takeaway:
        'ISO/IEC 27001:2022 responde al "QUÉ" exigir para gobernar la seguridad con validez legal y certificable; deja intencionalmente abierto el "CÓMO" técnico para que sea cubierto por estándares especializados como CIS Controls.',
    },
    {
      id: 'leccion-4-3',
      code: 'Lección 4.3',
      title:
        'El rol de NIST CSF 2.0 como articulador del ciclo de vida del riesgo ("El Cuándo y Dónde")',
      duration: '15 min',
      summary:
        'NIST CSF 2.0 funciona como el tablero de mando y lenguaje puente entre el riesgo empresarial y las capacidades operativas, permitiendo diagnosticar dónde estamos hoy, a dónde queremos llegar y equilibrar inversión preventiva con resiliencia.',
      keyConcepts: [
        {
          tag: 'Ciclo de Vida Completo',
          title: 'Las 6 Funciones: De Govern a Recover',
          description:
            'GOVERN (GV) fija el rumbo y apetito de riesgo; IDENTIFY (ID) mapea activos y brechas; PROTECT (PR) reduce probabilidades; DETECT (DE) acorta el tiempo de permanencia del atacante; RESPOND (RS) contiene el impacto; RECOVER (RC) restaura operaciones.',
        },
        {
          tag: 'Medición de Madurez',
          title: 'Implementation Tiers (Niveles 1 a 4)',
          description:
            'Evalúa la rigurosidad y repetibilidad de las prácticas: de Parcial (Tier 1) e Informado de Riesgos (Tier 2) a Repetible (Tier 3) y Adaptativo ante amenazas emergentes (Tier 4).',
        },
        {
          tag: 'Gestión de Brechas',
          title: 'Current Profile vs. Target Profile',
          description:
            'Permite trazar un mapa de calor ejecutivo comparando la capacidad actual frente al perfil objetivo aprobado por el Directorio, justificando exactamente dónde invertir el presupuesto del próximo año.',
        },
        {
          tag: 'Cadena de Suministro',
          title: 'Gestión de Riesgos de Terceros (GV.SC)',
          description:
            'En su versión 2.0, NIST eleva la seguridad de proveedores y terceros a categoría estratégica transversal bajo GOVERN, alineándose directamente con los controles 5.19–5.23 de ISO 27002:2022.',
        },
      ],
      takeaway:
        'NIST CSF 2.0 responde al "CUÁNDO" actuar (antes, durante y después del ataque) y "DÓNDE" concentrar recursos para equilibrar prevención, detección y recuperación.',
    },
    {
      id: 'leccion-4-4',
      code: 'Lección 4.4',
      title:
        'El rol de CIS Controls v8.1 como catalizador técnico de primera línea ("El Cómo prescriptivo")',
      duration: '15 min',
      summary:
        'Cuando el equipo de ingeniería recibe una política de ISO 27001 o un objetivo de NIST CSF 2.0 y pregunta "¿por dónde empezamos mañana en la consola?", CIS Controls v8.1 entrega la lista priorizada y verificable de tareas técnicas exactas.',
      keyConcepts: [
        {
          tag: 'Ejecución Concreta',
          title: '18 Controles y 153 Salvaguardas Medibles',
          description:
            'Traduce aspiraciones abstractas en acciones atómicas: "mantener inventario activo de software", "exigir MFA en cuentas administrativas", "habilitar registros de DNS", "probar restauraciones de respaldo trimestralmente".',
        },
        {
          tag: 'Priorización Inteligente',
          title: 'Grupos de Implementación IG1 → IG2 → IG3',
          description:
            'Evita que una organización compre herramientas complejas de nivel IG3 antes de dominar las 56 salvaguardas de ciberhigiene esencial (IG1). Permite demostrar victorias rápidas medibles en semanas.',
        },
        {
          tag: 'Evidencia Objetiva Directa',
          title: 'Automatización de Evidencias para Auditoría',
          description:
            'Cada salvaguarda CIS produce artefactos técnicos nativos (reportes de escáner de vulnerabilidades, políticas GPO/Intune, logs de SIEM, bitácoras de restauración) que alimentan directamente el expediente de auditoría ISO 27001.',
        },
        {
          tag: 'Alineación Novedosa v8.1',
          title: 'Clasificación por Security Functions y Governance',
          description:
            'CIS v8.1 adopta explícitamente el vocabulario de funciones de seguridad (Govern, Identify, Protect, Detect, Respond, Recover) para hacer casi automático su mapeo hacia NIST CSF 2.0 e ISO 27001.',
        },
      ],
      takeaway:
        'CIS Controls v8.1 es el "CÓMO" técnico prescriptivo: convierte el mandato del Directorio en configuraciones verificables que detienen ataques reales y producen evidencia auditable.',
    },
    {
      id: 'leccion-4-5',
      code: 'Lección 4.5',
      title:
        'Construcción práctica de matrices de trazabilidad y mapeo cruzado ("Audita una vez, cumple muchas")',
      duration: '25 min',
      summary:
        'Una Matriz Viva de Trazabilidad conecta horizontalmente el dominio corporativo con el requisito ISO 27001/27002, la función/subcategoría NIST CSF 2.0, la salvaguarda CIS v8.1 y la evidencia objetiva que valida las tres normas a la vez. Haz clic en cualquiera de los 6 dominios críticos para inspeccionar su hilo conductor completo.',
      keyConcepts: [
        {
          tag: 'Regla 1 de Mapeo',
          title: 'Identificar el Dominio de Seguridad Común',
          description:
            'Nunca mapees artículos sueltos sin agruparlos primero por proceso/dominio de negocio (ej. Copias de Seguridad, Control de Accesos, Vulnerabilidades, Logs).',
        },
        {
          tag: 'Regla 2 de Mapeo',
          title: 'Distinguir Relación 1:1 de Relación 1:N',
          description:
            'Un solo Control de ISO 27002 (ej. 8.5 Autenticación segura) suele requerir múltiples Salvaguardas CIS (ej. 5.2 contraseñas únicas, 6.3 MFA externo, 6.4 MFA remoto, 6.5 MFA administrativo) para cumplirse al 100%.',
        },
      ],
      traceabilityMatrix: [
        {
          id: 'dom-backups',
          domain: 'Copias de Seguridad y Resiliencia',
          badge: 'Respaldos e Integridad',
          isoRef: 'ISO 27001 Cl. 8.1 | ISO 27002 Control 8.13 (Respaldo de información)',
          nistRef: 'Recover (RC.RP-03): Verificar integridad de copias de seguridad antes de restaurar',
          cisRef: 'Control 11 (Recuperación de Datos): Salvaguardas 11.1 a 11.5 (IG1/IG2)',
          auditEvidence:
            'Política de retención RPO/RTO aprobada, logs de ejecución diaria cifrada, evidencia de copia offline/inmutable (11.4) y actas trimestrales de pruebas exitosas de restauración (11.5).',
          mappingNote:
            'El Control 8.13 de ISO exige mantener y probar respaldos; CIS Control 11 prescribe exactamente cifrado, aislamiento offline y pruebas periódicas; NIST RC.RP-03 valida que esos respaldos no estén contaminados durante la fase Recover.',
        },
        {
          id: 'dom-access-mfa',
          domain: 'Control de Acceso y Autenticación (MFA)',
          badge: 'Identidad y Accesos',
          isoRef: 'ISO 27002 Controles 5.15 (Control de acceso), 5.18 (Derechos) y 8.5 (Autenticación segura)',
          nistRef: 'Protect (PR.AA-01, PR.AA-03, PR.AA-05): Gestión de identidades, autenticación y mínimo privilegio',
          cisRef: 'Control 05 (Gestión de Cuentas) y Control 06 (Control de Acceso): Salvaguardas 6.3, 6.4 y 6.5 (IG1)',
          auditEvidence:
            'Reporte del proveedor de identidad (Entra ID / Okta) mostrando 100% de cobertura MFA en cuentas remotas y administrativas, matriz RBAC y registros trimestrales de recertificación de privilegios.',
          mappingNote:
            'Un único reporte de cumplimiento MFA del IdP demuestra simultáneamente la Salvaguarda CIS 6.3/6.5, el resultado PR.AA-03 de NIST Protect y la eficacia técnica del Control ISO 8.5.',
        },
        {
          id: 'dom-vulns',
          domain: 'Gestión Continua de Vulnerabilidades y Parches',
          badge: 'Exposición y Parcheo',
          isoRef: 'ISO 27002 Control 8.8 (Gestión de vulnerabilidades técnicas)',
          nistRef: 'Identify (ID.RA-01) y Protect (PR.PS-02): Identificar vulnerabilidades y mantener software seguro',
          cisRef: 'Control 07 (Gestión Continua de Vulnerabilidades): Salvaguardas 7.1 a 7.7 (IG1/IG2)',
          auditEvidence:
            'Calendario SLA de remediación (críticas ≤ 15 días), reportes semanales de escáner autenticado (7.5/7.6) y ticket de cambio aprobado de despliegue mensual de parches (7.3/7.4).',
          mappingNote:
            'Mientras ID.RA-01 (NIST) descubre la exposición y PR.PS-02 aplica correcciones, CIS Control 7 define la cadencia técnica exacta de escaneo y remediación exigida por ISO 8.8.',
        },
        {
          id: 'dom-ir',
          domain: 'Gestión y Respuesta a Incidentes',
          badge: 'Contención y Crisis',
          isoRef: 'ISO 27002 Controles 5.24 (Planificación), 5.25 (Evaluación) y 5.26 (Respuesta a incidentes)',
          nistRef: 'Respond (RS.MA-01, RS.AN-03, RS.MI-01): Gestión, análisis de causa raíz y contención',
          cisRef: 'Control 17 (Gestión de Respuesta a Incidentes): Salvaguardas 17.1 a 17.9 (IG1/IG2/IG3)',
          auditEvidence:
            'Plan de Respuesta a Incidentes con matriz RACI y contactos (17.1/17.2), playbooks de ransomware/phishing, actas de simulacros tabletop anuales (17.7) y reportes post-incidente (17.8).',
          mappingNote:
            'ISO 5.24-5.28 aporta el marco formal de escalamiento y lecciones aprendidas; NIST Respond ordena la secuencia de triaje, comunicación y mitigación; CIS Control 17 exige ejercicios prácticos anuales.',
        },
        {
          id: 'dom-gov',
          domain: 'Gobernanza, Políticas y Roles de Seguridad',
          badge: 'Dirección y Cumplimiento',
          isoRef: 'ISO 27001 Cláusulas 5.1, 5.2, 5.3 y 9.3 | ISO 27002 Controles 5.1 (Políticas) y 5.2 (Roles)',
          nistRef: 'Govern (GV.OC-01, GV.RM-01, GV.RR-02, GV.PO-01): Contexto, apetito de riesgo, roles y política',
          cisRef: 'Mapeo CIS v8.1 Función Govern + Procesos documentados en Controles 1.1, 5.1, 11.1, 14.1, 17.1',
          auditEvidence:
            'Política de Seguridad firmada por Gerencia General, matriz RACI de seguridad, actas de Comité de Seguridad/Revisión por la Dirección y registro de revisión anual.',
          mappingNote:
            'Aquí lidera ISO 27001 (Cláusula 5) junto con la nueva función GOVERN de NIST CSF 2.0; CIS v8.1 apoya exigiendo que cada proceso técnico tenga un documento formal aprobado y revisado cada año.',
        },
        {
          id: 'dom-logs',
          domain: 'Registro de Eventos, Logs y Monitoreo Continuo',
          badge: 'Visibilidad y Detección',
          isoRef: 'ISO 27002 Controles 8.15 (Registro / Logging) y 8.16 (Actividades de monitoreo) + 8.17 (Sincronización reloj)',
          nistRef: 'Detect (DE.CM-01, DE.CM-09, DE.AE-02): Monitoreo continuo de redes/sistemas y análisis de anomalías',
          cisRef: 'Control 08 (Gestión de Logs de Auditoría: 8.1-8.12) y Control 13 (Monitoreo y Defensa de Red)',
          auditEvidence:
            'Configuración de NTP corporativo (8.4 / ISO 8.17), política de retención ≥ 90 días (8.3), inventario de fuentes enviando logs al SIEM (8.2/8.9) y reglas de alerta validadas.',
          mappingNote:
            'Sin los logs exigidos por CIS Control 8 y sincronizados (8.4), ni la función Detect de NIST ni el monitoreo exigido por ISO 8.16 pueden detectar intrusiones silenciosas.',
        },
      ],
      takeaway:
        'La Matriz Viva de Trazabilidad transforma la ciberseguridad en un sistema de contabilidad única: cada esfuerzo técnico suma simultáneamente al cumplimiento ISO, a la madurez NIST y a la higiene CIS.',
    },
  ],

  // ==========================================================================
  // 3. PROCESO OBSERVA
  // ==========================================================================
  observa: {
    video1: {
      id: 'm4-video-1',
      title:
        'Matriz viva: Mapeando la gestión de copias de seguridad desde la Cláusula de ISO hasta el Control 11 de CIS y la función Recover de NIST',
      duration: '10:00 min',
      embedUrl: 'https://www.youtube.com/embed/U_P23SqJaDc',
      youtubeFallbackUrl:
        'https://www.youtube.com/results?search_query=mapeo+ISO+27001+NIST+CSF+CIS+Controls+ciberseguridad',
      summary:
        'Recorrido práctico mostrando cómo un requisito de negocio (no perder datos críticos ante ransomware) atraviesa los 3 estándares: desde la planificación operacional de ISO 27001 (Cláusula 8.1 / Control 8.13) hasta la ejecución técnica en CIS Control 11 (11.1 a 11.5) y la verificación de integridad de NIST Recover (RC.RP-03).',
      backupThreadCards: [
        {
          framework: 'ISO/IEC 27001:2022 & 27002:2022',
          reference: 'Cláusula 8.1 • Control Anexo A 8.13',
          roleBadge: 'REQUISITO ("El Qué")',
          description:
            'Exige planificar y mantener copias de seguridad de la información, el software y los sistemas de acuerdo con la política de respaldos acordada, realizando pruebas periódicas de restauración.',
        },
        {
          framework: 'NIST CSF 2.0',
          reference: 'Función RECOVER • RC.RP-03',
          roleBadge: 'FUNCIÓN ("El Cuándo y Dónde")',
          description:
            'Dentro de la capacidad de Recuperación, exige verificar la integridad de las copias de seguridad y otros activos de restauración antes de utilizarlos para restablecer servicios tras un incidente.',
        },
        {
          framework: 'CIS Controls v8.1',
          reference: 'Control 11 • Salvaguardas 11.1 a 11.5',
          roleBadge: 'CONTROL ("El Cómo prescriptivo")',
          description:
            '11.1 Establecer proceso; 11.2 Automatizar backups semanales/diarios; 11.3 Proteger con cifrado; 11.4 Mantener al menos 1 instancia aislada/inmutable (offline); 11.5 Probar recuperación trimestralmente.',
        },
      ],
      checkpointQuestion: {
        question:
          'Si un auditor ISO 27001 solicita evidencia de que los respaldos resisten un ataque de ransomware capaz de cifrar carpetas compartidas de red, ¿qué salvaguarda de CIS Control 11 y qué subcategoría NIST respaldan la respuesta técnica?',
        options: [
          'CIS 11.4 (Instancia de respaldo aislada/inmutable fuera de línea) + NIST RC.RP-03 (Verificar integridad de respaldos en Recover).',
          'Únicamente CIS 1.1 (Inventario de hardware) + NIST GV.PO-01 (Política general).',
          'Desactivar los respaldos automáticos para evitar consumo de ancho de banda.',
          'Firmar un acuerdo de confidencialidad sin almacenar copias externas.',
        ],
        correctIndex: 0,
        explanation:
          'Exacto. La salvaguarda CIS 11.4 exige proteger datos de respaldo con aislamiento o inmutabilidad (equivalente físico/lógico a la regla 3-2-1-1-0), mientras NIST RC.RP-03 asegura verificar la integridad antes de restaurar, satisfaciendo integralmente ISO 27002:2022 Control 8.13.',
      },
    },
    video2: {
      id: 'm4-video-2',
      title:
        'Cómo presentar reportes ejecutivos integrados combinando métricas técnicas con cumplimiento normativo',
      duration: '10:00 min',
      embedUrl: 'https://www.youtube.com/embed/inWWhr5tnEA',
      youtubeFallbackUrl:
        'https://www.youtube.com/results?search_query=reporte+ejecutivo+ciberseguridad+CISO+metricas+ISO+NIST',
      summary:
        'Un Directorio no toma decisiones leyendo puertos TCP o CVE sin contexto; un CISO efectivo traduce indicadores técnicos de CIS Controls v8.1 en grados de madurez NIST CSF 2.0 y porcentajes de conformidad ISO/IEC 27001:2022.',
      metricTranslations: [
        {
          id: 'tr-mfa',
          topic: 'Cobertura de Autenticación Multifactor (MFA)',
          cisMetric:
            'CIS 6.3 / 6.5: "98% de los 450 usuarios corporativos y 100% de cuentas privilegiadas cuentan con MFA activo en Entra ID".',
          nistTranslation:
            'NIST PR.AA-01 / PR.AA-03: "Capacidad de autenticación en Nivel Tier 3 (Repetible); brecha residual de 2% en cuentas heredadas planificada para Q2".',
          isoTranslation:
            'ISO 27002 Control 8.5 (Autenticación segura): "Implementado al 98% con plan de tratamiento formal para el 2% restante (Criterio conforme para auditoría)".',
        },
        {
          id: 'tr-patch',
          topic: 'Remediación de Vulnerabilidades Críticas',
          cisMetric:
            'CIS 7.3 / 7.4: "Tiempo promedio de parcheo en servidores Windows/Linux reducido de 42 días a 11 días (SLA ≤ 15 días)".',
          nistTranslation:
            'NIST ID.RA-01 & PR.PS-02: "Ventana de exposición crítica reducida en 74%, consolidando madurez Tier 3 en gestión de parches".',
          isoTranslation:
            'ISO 27002 Control 8.8 (Gestión de vulnerabilidades técnicas): "Evidencia de eficacia del tratamiento de riesgo técnico conforme a Cláusula 9.1 (Seguimiento y medición)".',
        },
        {
          id: 'tr-edr',
          topic: 'Visibilidad de Endpoints y Monitoreo SOC',
          cisMetric:
            'CIS 10.1 / 8.2: "99.2% de estaciones reportando telemetría EDR y logs centralizados con 180 días de retención".',
          nistTranslation:
            'NIST DE.CM-09: "Capacidad de detección temprana con visibilidad casi total del parque; MTTD reducido por debajo de 30 minutos".',
          isoTranslation:
            'ISO 27002 Controles 8.7, 8.15 y 8.16: "Cumplimiento verificable contra malware, registro de eventos y monitoreo continuo de seguridad".',
        },
      ],
      checkpointQuestion: {
        question:
          'Al presentar al Directorio un avance de seguridad basado en el dato técnico CIS "98% de endpoints con MFA activado en Control 6.3", ¿cómo debe traducirse en lenguaje NIST e ISO?',
        options: [
          'Entregar al Directorio el archivo CSV crudo con las direcciones MAC de todos los empleados.',
          'Traducirlo a indicador de madurez NIST (Nivel Tier 3 en PR.AA-01/PR.AA-03) y estado de cumplimiento ISO (Control Anexo A 8.5 implementado al 98%).',
          'Ocultar el 2% pendiente y reportar 100% sin plan de acción.',
          'Decir que el MFA reemplaza la necesidad de realizar auditorías internas de la Cláusula 9.2.',
        ],
        correctIndex: 1,
        explanation:
          '¡Correcto! Traducir la métrica técnica (CIS) a madurez de capacidad/riesgo (NIST) y conformidad auditable (ISO) permite al Directorio entender el nivel de protección real, aprobar recursos para cerrar el 2% restante y respaldar la certificación.',
      },
    },
  },

  // ==========================================================================
  // 4. PROCESO EXPLORA
  // ==========================================================================
  explora: {
    readingTitle:
      'Documento técnico: CIS Controls v8.1 Mapping to NIST CSF 2.0 and ISO/IEC 27001:2022 — Metodología de equivalencia directa vs. parcial',
    readingSubtitle:
      'Criterios metodológicos oficiales para construir tablas de correspondencia sin caer en falsas equivalencias durante una auditoría.',
    readingSections: [
      {
        id: 'eq-directa',
        badge: 'Equivalencia Directa (1:1 o Exact Match)',
        title: 'Correspondencia completa de objetivo técnico y normativo',
        summary:
          'Ocurre cuando la implementación íntegra de una salvaguarda CIS satisface prácticamente toda la intención del control ISO o de la subcategoría NIST correspondiente.',
        example:
          'Ejemplo: CIS 8.4 (Sincronización de relojes mediante fuentes autorizadas de tiempo) tiene equivalencia directa con ISO/IEC 27002:2022 Control 8.17 (Sincronización del reloj) y respalda la integridad forense en NIST DE.AE-02.',
        ruleForAuditors:
          'La evidencia generada por la salvaguarda técnica puede anexarse directamente al expediente de auditoría sin controles compensatorios adicionales.',
      },
      {
        id: 'eq-parcial',
        badge: 'Equivalencia Parcial (Subset / Superset)',
        title: 'Cuando un marco exige mayor alcance o gobernanza adicional',
        summary:
          'Sucede cuando una salvaguarda técnica cubre solo una parte del requisito normativo (Subset), o cuando varias salvaguardas deben combinarse para cubrir un control más amplio (Many-to-One).',
        example:
          'Ejemplo: CIS 6.3 (MFA para acceso externo) cubre parcialmente ISO 8.5 (Autenticación segura), ya que ISO 8.5 también abarca fortaleza de contraseñas (CIS 5.2), MFA remoto (CIS 6.4), MFA administrativo (CIS 6.5) y gestión segura de credenciales.',
        ruleForAuditors:
          'Nunca marques un Control ISO como "100% Cumplido" basándote en una sola salvaguarda parcial; agrupa todas las salvaguardas CIS y políticas asociadas hasta cerrar la brecha completa.',
      },
      {
        id: 'eq-complementaria',
        badge: 'Brecha de Gobernanza (No Mapeable solo con Tecnología)',
        title: 'Requisitos de Sistema de Gestión que la técnica no sustituye',
        summary:
          'Las Cláusulas 4 a 10 de ISO/IEC 27001:2022 (Alcance, Liderazgo, Auditoría Interna, Revisión por la Dirección) y gran parte de GOVERN en NIST CSF 2.0 requieren actas, decisiones de negocio y procesos de mejora continua.',
        example:
          'Ejemplo: Puedes cumplir los 18 controles CIS en servidores, pero sin metodología documentada de riesgos (ISO Cl. 6.1.2) ni revisión gerencial (ISO Cl. 9.3), el SGSI no es certificable.',
        ruleForAuditors:
          'Toda matriz integrada debe incluir una columna explícita de "Brecha Documental / Gobernanza" junto al porcentaje de implementación técnica.',
      },
    ],
    officialDocuments: [
      {
        id: 'doc-cis-nist',
        category: 'Mapeo Oficial CIS ↔ NIST',
        title: 'Mapeo Oficial CIS Controls v8.1 a NIST CSF 2.0 (CIS)',
        description:
          'White paper y tabla oficial del Center for Internet Security que correlaciona cada salvaguarda v8.1 con las 6 funciones (incluida Govern) y subcategorías de NIST CSF 2.0.',
        url: 'https://www.cisecurity.org/insights/white-papers/cis-controls-v8-1-mapping-to-nist-csf-2-0',
        formatBadge: 'CIS White Paper / Excel',
      },
      {
        id: 'doc-cis-iso',
        category: 'Mapeo Oficial CIS ↔ ISO',
        title: 'Mapeo Oficial CIS Controls v8 a ISO/IEC 27001:2022 (CIS)',
        description:
          'Documento oficial de equivalencia entre los Controles CIS y los 93 controles del Anexo A / ISO 27002:2022 para sustentar Declaraciones de Aplicabilidad (SoA).',
        url: 'https://www.cisecurity.org/insights/white-papers/cis-controls-v8-mapping-to-iso-iec-27001-2022',
        formatBadge: 'CIS Mapping / CSV',
      },
      {
        id: 'doc-nist-cprt',
        category: 'Herramienta Oficial NIST',
        title:
          'Cybersecurity and Privacy Reference Tool (CPRT - Mapeos Cruzados Oficiales)',
        description:
          'Plataforma oficial interactiva del NIST para consultar y exportar relaciones entre NIST CSF 2.0, SP 800-53, ISO/IEC 27001 y estándares internacionales.',
        url: 'https://csrc.nist.gov/projects/cprt/catalog#/cprt/framework/version/CSF_2_0_0/home',
        formatBadge: 'NIST CPRT Portal',
      },
      {
        id: 'doc-incibe',
        category: 'Guía Práctica Empresarial',
        title: 'Guías de Integración de Marcos de Seguridad (INCIBE / ENISA)',
        description:
          'Colección oficial en español de guías técnicas y metodológicas para alinear cumplimiento normativo, gestión de riesgos y controles técnicos en organizaciones.',
        url: 'https://www.incibe.es/empresas/guias',
        formatBadge: 'INCIBE Guías PDF',
      },
    ],
    matrixTitle:
      'Matriz Editable de Alineación Cruzada y Cumplimiento de Brechas (15 Controles Maestros)',
    matrixDescription:
      'Vista previa de los 15 controles maestros integrados. Descarga el archivo .CSV compatible con Microsoft Excel (codificado en UTF-8 con BOM) para editar porcentajes, brechas documentales y evidencias de tu organización.',
    masterMatrixRows: [
      {
        unifiedId: 'INT-01',
        domain: 'Gobernanza y Políticas',
        isoRef: 'ISO 27001 Cl. 5.2 / ISO 27002 5.1',
        nistRef: 'Govern (GV.PO-01)',
        cisRef: 'CIS v8.1 Función Govern / Revisión anual (IG1)',
        techStatusPct: 85,
        governanceGap: 'Falta firma anual de actualización por Gerencia General',
        auditableEvidence: 'Política General de Seguridad publicada y actas de difusión',
      },
      {
        unifiedId: 'INT-02',
        domain: 'Roles y Responsabilidades',
        isoRef: 'ISO 27001 Cl. 5.3 / ISO 27002 5.2',
        nistRef: 'Govern (GV.RR-02)',
        cisRef: 'Responsables asignados en Procesos CIS 1.1, 5.1, 17.1 (IG1)',
        techStatusPct: 90,
        governanceGap: 'Formalizar suplente oficial del CISO en matriz RACI',
        auditableEvidence: 'Matriz RACI aprobada y descriptivos de puesto',
      },
      {
        unifiedId: 'INT-03',
        domain: 'Inventario de Hardware',
        isoRef: 'ISO 27002 5.9 (Inventario de activos)',
        nistRef: 'Identify (ID.AM-01)',
        cisRef: 'CIS Control 01: Salvaguarda 1.1 y 1.2 (IG1)',
        techStatusPct: 78,
        governanceGap: 'Definir criterio de baja de activos obsoletos en CMDB',
        auditableEvidence: 'Exportación CMDB / MDM y logs de escaneo DHCP/ARP',
      },
      {
        unifiedId: 'INT-04',
        domain: 'Inventario de Software',
        isoRef: 'ISO 27002 5.9 y 8.19 (Instalación software)',
        nistRef: 'Identify (ID.AM-02)',
        cisRef: 'CIS Control 02: Salvaguardas 2.1, 2.2 y 2.3 (IG1)',
        techStatusPct: 72,
        governanceGap: 'Aprobar lista oficial de software autorizado (Allowlist)',
        auditableEvidence: 'Inventario de aplicaciones descubiertas y catálogo autorizado',
      },
      {
        unifiedId: 'INT-05',
        domain: 'Clasificación y Cifrado de Datos',
        isoRef: 'ISO 27002 5.12, 5.13 y 8.24 (Criptografía)',
        nistRef: 'Protect (PR.DS-01 y PR.DS-02)',
        cisRef: 'CIS Control 03: Salvaguardas 3.6 y 3.10 (IG1/IG2)',
        techStatusPct: 80,
        governanceGap: 'Documentar esquema de clasificación (Pública/Interna/Confidencial)',
        auditableEvidence: 'Estado BitLocker/FileVault en consola MDM y políticas TLS 1.3',
      },
      {
        unifiedId: 'INT-06',
        domain: 'Configuración Segura (Hardening)',
        isoRef: 'ISO 27002 8.9 (Gestión de configuración)',
        nistRef: 'Protect (PR.PS-01)',
        cisRef: 'CIS Control 04: Salvaguardas 4.1 a 4.7 (IG1)',
        techStatusPct: 68,
        governanceGap: 'Aprobar líneas base CIS Benchmarks como estándar corporativo',
        auditableEvidence: 'Reportes de cumplimiento GPO / Ansible / CIS-CAT',
      },
      {
        unifiedId: 'INT-07',
        domain: 'Gestión de Cuentas y Privilegios',
        isoRef: 'ISO 27002 5.15, 5.18 y 8.2 (Privilegios)',
        nistRef: 'Protect (PR.AA-01 y PR.AA-05)',
        cisRef: 'CIS Control 05: Salvaguardas 5.1 a 5.4 (IG1)',
        techStatusPct: 92,
        governanceGap: 'Sin brecha crítica; mantener revisión trimestral de cuentas',
        auditableEvidence: 'Actas de recertificación de accesos y listado de Domain Admins',
      },
      {
        unifiedId: 'INT-08',
        domain: 'Autenticación Robusta (MFA)',
        isoRef: 'ISO 27002 8.5 (Autenticación segura)',
        nistRef: 'Protect (PR.AA-03)',
        cisRef: 'CIS Control 06: Salvaguardas 6.3, 6.4 y 6.5 (IG1)',
        techStatusPct: 98,
        governanceGap: 'Documentar excepción temporal de 2% cuentas legacy',
        auditableEvidence: 'Reporte IdP de cobertura MFA y políticas de acceso condicional',
      },
      {
        unifiedId: 'INT-09',
        domain: 'Gestión de Vulnerabilidades y Parches',
        isoRef: 'ISO 27002 8.8 (Vulnerabilidades técnicas)',
        nistRef: 'Identify (ID.RA-01) / Protect (PR.PS-02)',
        cisRef: 'CIS Control 07: Salvaguardas 7.1 a 7.7 (IG1/IG2)',
        techStatusPct: 75,
        governanceGap: 'Publicar SLA formal por criticidad CVSS (Crítica ≤ 15 días)',
        auditableEvidence: 'Informes de escáner autenticado y tickets de parcheo',
      },
      {
        unifiedId: 'INT-10',
        domain: 'Logs de Auditoría y Sincronización',
        isoRef: 'ISO 27002 8.15 (Logs) y 8.17 (Relojes)',
        nistRef: 'Detect (DE.CM-01 / DE.AE-02)',
        cisRef: 'CIS Control 08: Salvaguardas 8.1, 8.2, 8.4 y 8.5 (IG1/IG2)',
        techStatusPct: 84,
        governanceGap: 'Establecer tabla formal de retención mínima (90-365 días)',
        auditableEvidence: 'Configuración NTP y dashboard de ingesta de fuentes en SIEM',
      },
      {
        unifiedId: 'INT-11',
        domain: 'Defensa contra Malware / EDR',
        isoRef: 'ISO 27002 8.7 (Protección contra malware)',
        nistRef: 'Protect (PR.PS-04) / Detect (DE.CM-09)',
        cisRef: 'CIS Control 10: Salvaguardas 10.1, 10.2 y 10.5 (IG1/IG2)',
        techStatusPct: 96,
        governanceGap: 'Ninguna brecha documental mayor',
        auditableEvidence: 'Consola EDR con 96%+ agentes saludables y bloqueo USB',
      },
      {
        unifiedId: 'INT-12',
        domain: 'Copias de Seguridad y Restauración',
        isoRef: 'ISO 27001 Cl. 8.1 / ISO 27002 8.13',
        nistRef: 'Recover (RC.RP-03)',
        cisRef: 'CIS Control 11: Salvaguardas 11.1 a 11.5 (IG1/IG2)',
        techStatusPct: 88,
        governanceGap: 'Adjuntar evidencia firmada del último simulacro de restauración',
        auditableEvidence: 'Logs diarios de respaldo inmutable y acta trimestral de restore',
      },
      {
        unifiedId: 'INT-13',
        domain: 'Concientización y Phishing',
        isoRef: 'ISO 27002 6.3 (Concientización y formación)',
        nistRef: 'Protect (PR.AT-01 y PR.AT-02)',
        cisRef: 'CIS Control 14: Salvaguardas 14.1 y 14.2 (IG1)',
        techStatusPct: 90,
        governanceGap: 'Incluir evaluación obligatoria en onboarding de nuevos ingresos',
        auditableEvidence: 'Registros LMS de asistencia y métricas de campañas phishing',
      },
      {
        unifiedId: 'INT-14',
        domain: 'Seguridad en Proveedores / Terceros',
        isoRef: 'ISO 27002 5.19, 5.20 y 5.23 (Cloud)',
        nistRef: 'Govern (GV.SC-01 a GV.SC-06)',
        cisRef: 'CIS Control 15: Salvaguardas 15.1, 15.2 y 15.4 (IG1/IG2)',
        techStatusPct: 62,
        governanceGap: 'Incorporar anexo contractual de seguridad y notificación de brechas',
        auditableEvidence: 'Inventario de proveedores críticos y cuestionarios evaluados',
      },
      {
        unifiedId: 'INT-15',
        domain: 'Gestión y Respuesta a Incidentes',
        isoRef: 'ISO 27002 5.24, 5.25 y 5.26',
        nistRef: 'Respond (RS.MA-01 y RS.MI-01)',
        cisRef: 'CIS Control 17: Salvaguardas 17.1, 17.2 y 17.7 (IG1/IG2)',
        techStatusPct: 70,
        governanceGap: 'Ejecutar y documentar simulacro anual tipo tabletop',
        auditableEvidence: 'Plan de Respuesta a Incidentes, árbol de llamadas y acta tabletop',
      },
    ],
  },

  // ==========================================================================
  // 5. PROCESO PRACTICA (2 LABORATORIOS INTERACTIVOS)
  // ==========================================================================
  practica: {
    activity1Title:
      'Actividad 1: Laboratorio de Correspondencia Triple (ISO ↔ NIST ↔ CIS)',
    activity1Instructions:
      'Para cada dominio de seguridad planteado, selecciona la triada exacta que vincula correctamente el Requisito ISO/IEC 27001/27002:2022, la Función/Subcategoría NIST CSF 2.0 y la Salvaguarda CIS Controls v8.1.',
    tripleChallenges: [
      {
        id: 'tri-1',
        number: 1,
        domainTitle: 'Gestión de Activos',
        prompt:
          '¿Cuál es la correspondencia triple exacta para mantener el inventario actualizado de activos de información y hardware corporativo?',
        correctOptionId: 'tri-1-b',
        options: [
          {
            id: 'tri-1-a',
            label:
              'ISO 27002 8.13 (Respaldos) ↔ NIST Recover (RC.RP-03) ↔ CIS Control 11 (11.4)',
          },
          {
            id: 'tri-1-b',
            label:
              'ISO 27002 5.9 (Inventario de información y activos) ↔ NIST Identify (ID.AM-01) ↔ CIS Control 01 (Salvaguarda 1.1)',
          },
          {
            id: 'tri-1-c',
            label:
              'ISO 27002 5.24 (Incidentes) ↔ NIST Respond (RS.MA-01) ↔ CIS Control 17 (17.1)',
          },
        ],
        explanation:
          '¡Correcto! ISO 27002 Control 5.9 exige inventariar los activos asociados a la información; NIST CSF 2.0 lo ubica en Identify (ID.AM-01: inventarios de hardware) y CIS v8.1 lo ejecuta mediante Control 01 / Salvaguarda 1.1.',
      },
      {
        id: 'tri-2',
        number: 2,
        domainTitle: 'Autenticación Robusta',
        prompt:
          '¿Qué triada integra el requisito normativo de autenticación segura, la protección de acceso y el despliegue técnico obligatorio de MFA?',
        correctOptionId: 'tri-2-a',
        options: [
          {
            id: 'tri-2-a',
            label:
              'ISO 27002 8.5 (Autenticación segura) ↔ NIST Protect (PR.AA-03) ↔ CIS Control 06 (Salvaguarda 6.3 MFA)',
          },
          {
            id: 'tri-2-b',
            label:
              'ISO 27002 8.17 (Sincronización de reloj) ↔ NIST Detect (DE.CM-01) ↔ CIS Control 08 (8.4)',
          },
          {
            id: 'tri-2-c',
            label:
              'ISO 27001 Cláusula 5.2 (Política) ↔ NIST Govern (GV.PO-01) ↔ CIS Control 02 (2.1)',
          },
        ],
        explanation:
          '¡Exacto! ISO 8.5 fija el requisito de autenticación robusta, NIST PR.AA-03 articula la capacidad de verificación de identidad en Protect y CIS Control 6 / Salvaguarda 6.3 prescribe técnicamente la exigencia de MFA.',
      },
      {
        id: 'tri-3',
        number: 3,
        domainTitle: 'Monitoreo de Eventos',
        prompt:
          '¿Qué combinación correlaciona correctamente la detección de anomalías, el monitoreo de redes/sistemas y la centralización técnica de logs?',
        correctOptionId: 'tri-3-c',
        options: [
          {
            id: 'tri-3-a',
            label:
              'ISO 27002 6.3 (Concientización) ↔ NIST Protect (PR.AT-01) ↔ CIS Control 14 (14.1)',
          },
          {
            id: 'tri-3-b',
            label:
              'ISO 27002 5.19 (Proveedores) ↔ NIST Govern (GV.SC-01) ↔ CIS Control 15 (15.1)',
          },
          {
            id: 'tri-3-c',
            label:
              'ISO 27002 8.16 (Actividades de monitoreo) ↔ NIST Detect (DE.CM-01) ↔ CIS Control 08 / 13 (Centralización de logs y alertas)',
          },
        ],
        explanation:
          '¡Muy bien! El monitoreo continuo de ISO 27002 Control 8.16 depende de la función Detect de NIST (DE.CM-01) y se materializa en infraestructura con CIS Control 08 (Logs) y Control 13 (Monitoreo y Defensa de Red).',
      },
      {
        id: 'tri-4',
        number: 4,
        domainTitle: 'Gestión de Incidentes',
        prompt:
          'Selecciona la triada que conecta la planificación formal de incidentes, la capacidad de respuesta y el playbook técnico de actuación.',
        correctOptionId: 'tri-4-b',
        options: [
          {
            id: 'tri-4-a',
            label:
              'ISO 27002 8.8 (Vulnerabilidades) ↔ NIST Identify (ID.RA-01) ↔ CIS Control 07 (7.1)',
          },
          {
            id: 'tri-4-b',
            label:
              'ISO 27002 5.24 (Planificación y preparación de gestión de incidentes) ↔ NIST Respond (RS.MA-01) ↔ CIS Control 17 (Salvaguarda 17.1)',
          },
          {
            id: 'tri-4-c',
            label:
              'ISO 27002 8.24 (Uso de criptografía) ↔ NIST Protect (PR.DS-01) ↔ CIS Control 03 (3.10)',
          },
        ],
        explanation:
          '¡Correcto! ISO 5.24 establece la preparación organizacional de incidentes, NIST Respond (RS.MA-01) coordina la ejecución del plan cuando ocurre un evento y CIS Control 17 (17.1+) define responsables, contactos y simulacros.',
      },
      {
        id: 'tri-5',
        number: 5,
        domainTitle: 'Gobernanza y Políticas',
        prompt:
          '¿Cuál es el mapeo triple correcto para la dirección estratégica, establecimiento de políticas y supervisión institucional?',
        correctOptionId: 'tri-5-a',
        options: [
          {
            id: 'tri-5-a',
            label:
              'ISO 27001 Cláusula 5.2 / ISO 27002 5.1 ↔ NIST Govern (GV.PO-01) ↔ CIS v8.1 Mapeo Govern / Políticas institucionales',
          },
          {
            id: 'tri-5-b',
            label:
              'ISO 27002 8.7 (Anti-malware) ↔ NIST Protect (PR.PS-04) ↔ CIS Control 10 (10.1)',
          },
          {
            id: 'tri-5-c',
            label:
              'ISO 27002 8.9 (Configuración) ↔ NIST Protect (PR.PS-01) ↔ CIS Control 04 (4.1)',
          },
        ],
        explanation:
          '¡Excelente! La Cláusula 5.2 de ISO 27001 junto al Control 5.1 de ISO 27002 se enlazan directamente con GV.PO-01 de la nueva función Govern en NIST CSF 2.0 y con los requisitos documentales de gobernanza incorporados en CIS v8.1.',
      },
    ],
    activity2Title:
      'Actividad 2: Análisis de Plan de Acción — ¿Qué marco está desatendido en auditoría?',
    activity2Instructions:
      'Analiza los 3 escenarios corporativos reales e identifica cuál de los tres marcos (ISO/IEC 27001:2022, NIST CSF 2.0 o CIS Controls v8.1) está siendo descuidado por la organización.',
    auditGapCases: [
      {
        id: 'gap-1',
        number: 1,
        companyLabel: 'Escenario Empresarial 1 • Brecha Técnica Operativa',
        scenario:
          '"Una empresa tiene todas sus políticas de seguridad firmadas por el Gerente General y su matriz de riesgos en orden, pero sus servidores Windows siguen sin parches críticos desde hace 8 meses y no tienen MFA habilitado."',
        correctFramework: 'CIS Controls v8.1',
        explanation:
          'Falla la ejecución técnica prescriptiva de CIS Controls v8.1 (específicamente Control 06 de MFA y Control 07 de Gestión Continua de Vulnerabilidades). Tienen papel ("el qué"), pero carecen de defensa real en los sistemas ("el cómo").',
      },
      {
        id: 'gap-2',
        number: 2,
        companyLabel: 'Escenario Empresarial 2 • Brecha de Gobernanza Certificable',
        scenario:
          '"Un equipo de TI aplica excelente hardening y respaldos automatizados en sus equipos, pero la empresa no tiene definidos roles formales de seguridad, ni revisión por la dirección, ni auditorías internas para certificarse."',
        correctFramework: 'ISO/IEC 27001:2022',
        explanation:
          'Está desatendido ISO/IEC 27001:2022: faltan los requisitos mandatorios de gobernanza y mejora continua de las Cláusulas 4 a 10 (Liderazgo, Alcance, Roles 5.3, Auditoría Interna 9.2 y Revisión por la Dirección 9.3).',
      },
      {
        id: 'gap-3',
        number: 3,
        companyLabel: 'Escenario Empresarial 3 • Brecha de Ciclo de Riesgo y Resiliencia',
        scenario:
          '"Una organización cumple auditorías documentales anuales y tiene firewall/antivirus, pero no mide su nivel de madurez, no evalúa riesgos en su cadena de suministro ni tiene un plan de resiliencia para recuperar operaciones tras un incidente."',
        correctFramework: 'NIST CSF 2.0',
        explanation:
          'Está desatendido NIST CSF 2.0: falta la articulación dinámica del ciclo de riesgo (Govern GV.SC para cadena de suministro, Respond y Recover) así como la medición de madurez mediante Implementation Tiers y Perfiles (Current vs. Target).',
      },
    ],
  },

  // ==========================================================================
  // 6. PROCESO APLICA (SIMULADOR DE CERTIFICACIÓN EN ENTIDAD PÚBLICA)
  // ==========================================================================
  aplica: {
    title:
      'Simulador de Certificación: Auditoría ISO/IEC 27001:2022 en Entidad Pública',
    subtitle:
      'Toma de decisiones gerenciales y técnicas sobre cómo articular controles CIS ya implementados frente a un requisito certificable.',
    situation:
      'Una entidad pública requiere aprobar una auditoría de certificación basada en ISO/IEC 27001:2022, pero el equipo de TI reporta que únicamente ha implementado controles técnicos de CIS Controls v8.1 en sus servidores Linux y Windows.',
    challengeQuestion:
      '¿Es suficiente lo implementado por TI para obtener la certificación del SGSI? ¿Qué elementos faltan para articular la relación entre requisito y control?',
    clinicalContextDetails: [
      {
        label: 'Lo que TI SÍ logró (Base CIS v8.1)',
        detail:
          'Endurecimiento técnico (CIS Control 4), parcheo (CIS Control 7), MFA en administradores (CIS Control 6) y antivirus/EDR (CIS Control 10) activos en servidores Linux y Windows.',
      },
      {
        label: 'Lo que el Auditor ISO Evalúa (Cláusulas 4–10 + SoA)',
        detail:
          'Alcance formal del SGSI, Política aprobada por la Alta Dirección, Metodología y Plan de Tratamiento de Riesgos, Auditoría Interna (9.2), Revisión por la Dirección (9.3) y Declaración de Aplicabilidad (SoA).',
      },
      {
        label: 'Desafío de Eficiencia Pública',
        detail:
          'Evitar rehacer desde cero el trabajo técnico en servidores y aprovechar lo ya implementado como evidencia auditable dentro del SGSI.',
      },
    ],
    options: [
      {
        id: 'm4-aplica-a',
        optionCode: 'Opción A',
        title:
          'Sí es suficiente; entregar directamente al auditor externo el listado de configuraciones CIS de los servidores Linux y Windows para recibir el certificado ISO 27001.',
        description:
          'Asumir que tener controles técnicos en servidores equivale automáticamente a contar con un Sistema de Gestión de Seguridad de la Información certificable.',
        isCorrect: false,
        immediateFeedback:
          'Incorrecto: La auditoría concluirá con múltiples No Conformidades Mayores y negará la certificación.',
        consequenceCard:
          'El auditor certificador rechaza el expediente porque ISO/IEC 27001:2022 audita un Sistema de Gestión (Cláusulas 4 a 10), no configuraciones aisladas. Al no existir alcance, análisis de riesgos ni auditoría interna, los servidores protegidos no bastan para certificar.',
        explanationCard:
          'Los controles técnicos (CIS) satisfacen la implementación práctica en infraestructura, pero no sustituyen el marco de gobernanza, evaluación de riesgos y mejora continua exigido por un requisito normativo (ISO).',
        controlsMapped: [
          'Falla en Cláusulas 4, 5, 6, 9 y 10 de ISO 27001',
          'SoA inexistente o sin sustento de riesgos',
        ],
      },
      {
        id: 'm4-aplica-b',
        optionCode: 'Opción B',
        title:
          'No es suficiente por sí solo. Elaborar la gobernanza formal (Cláusulas 4-10 de ISO 27001) y mapear los controles CIS ya implementados como evidencia técnica en la SoA del Anexo A.',
        description:
          'Construir el Alcance, Política, Evaluación/Tratamiento de Riesgos, Auditoría Interna y Revisión por la Dirección, vinculando el endurecimiento Linux/Windows de CIS como cumplimiento de los controles tecnológicos y organizacionales del Anexo A.',
        isCorrect: true,
        immediateFeedback:
          '¡Decisión Correcta! Articulación perfecta entre Requisito (ISO 27001) y Control Técnico (CIS v8.1).',
        consequenceCard:
          'Se formaliza el SGSI auditable sin rehacer el trabajo técnico de los administradores de sistemas, integrando la defensa técnica de CIS dentro de la documentación y gobernanza exigida por ISO 27001.',
        explanationCard:
          'Los controles técnicos (CIS) satisfacen la implementación práctica en infraestructura, pero no sustituyen el marco de gobernanza, evaluación de riesgos y mejora continua exigido por un requisito normativo (ISO).',
        controlsMapped: [
          'ISO 27001 Cláusulas 4 a 10 (Gobernanza y Riesgos)',
          'Declaración de Aplicabilidad (SoA) mapeada a CIS v8.1',
          'Controles Técnicos Linux/Windows preservados como Evidencia',
        ],
      },
      {
        id: 'm4-aplica-c',
        optionCode: 'Opción C',
        title:
          'Desinstalar las configuraciones de CIS Controls en los servidores y reconfigurarlos desde cero usando únicamente la redacción teórica de ISO 27002.',
        description:
          'Desechar el trabajo de hardening ejecutado por el equipo de TI por no llevar el título de "ISO" en la consola.',
        isCorrect: false,
        immediateFeedback:
          'Incorrecto: Desperdicio innecesario de presupuesto, tiempo operativo y exposición temporal de los servidores.',
        consequenceCard:
          'ISO/IEC 27002:2022 es un marco de buenas prácticas agnóstico que NO ofrece comandos técnicos propios; al retirar CIS Benchmarks de Linux/Windows solo se reduce la postura de seguridad sin avanzar en el SGSI.',
        explanationCard:
          'La interoperabilidad busca reutilizar las salvaguardas CIS existentes mapeándolas al Anexo A, jamás destruir trabajo técnico válido.',
        controlsMapped: [
          'Pérdida de tiempo de ingeniería',
          'Desconocimiento del principio de interoperabilidad',
        ],
      },
    ],
  },

  // ==========================================================================
  // 7. PROCESO COMPRUEBA (CUESTIONARIO FORMATIVO DE 10 PREGUNTAS)
  // ==========================================================================
  comprueba: {
    title: 'Evaluación Formativa del Módulo 4: Integración y Mapeo Cruzado',
    subtitle:
      '10 preguntas sobre jerarquía Requisito-Función-Control, matrices de trazabilidad ISO-NIST-CIS y casos corporativos integrales. Nota mínima aprobatoria: 70%.',
    passingScore: 70,
    questions: [
      {
        id: 'm4-q1',
        number: 1,
        type: 'Opción Múltiple',
        category: 'Recordar/Comprender (30%)',
        question:
          'Dentro de la arquitectura conceptual en tres niveles de la ciberseguridad corporativa, ¿qué pregunta clave responde cada marco?',
        options: [
          'ISO 27001 responde "El Cómo técnico"; CIS v8.1 responde "El Qué normativo"; NIST CSF responde "Solo compras".',
          'ISO 27001 define "El Qué" (Requisito auditable y gobernanza); NIST CSF 2.0 articula "El Cuándo y Dónde" (Función de riesgo); CIS v8.1 prescribe "El Cómo" (Control técnico ejecutable).',
          'Los tres marcos responden exactamente a la misma pregunta técnica y son excluyentes entre sí.',
          'NIST CSF 2.0 es únicamente un listado de comandos Linux y Windows.',
        ],
        correctIndex: 1,
        explanation:
          'ISO/IEC 27001:2022 establece qué debe gestionarse en un SGSI certificable; NIST CSF 2.0 organiza cuándo y dónde desplegar capacidades en el ciclo de riesgo; CIS Controls v8.1 detalla cómo ejecutar técnicamente las salvaguardas.',
      },
      {
        id: 'm4-q2',
        number: 2,
        type: 'Verdadero / Falso Argumentado',
        category: 'Recordar/Comprender (30%)',
        question:
          'Verdadero o Falso: "Implementar las 56 salvaguardas de IG1 de CIS Controls v8.1 garantiza automáticamente la aprobación de una auditoría de certificación ISO/IEC 27001:2022 sin necesidad de redactar alcance, evaluación de riesgos ni revisión por la dirección."',
        options: [
          'Verdadero: Si los servidores son seguros, el auditor externo omite las Cláusulas 4 a 10.',
          'Falso: Los controles técnicos de CIS cubren la implementación en infraestructura, pero no sustituyen los requisitos obligatorios de gobernanza, gestión de riesgos y mejora continua de las Cláusulas 4-10 de ISO 27001.',
        ],
        correctIndex: 1,
        explanation:
          'Falso. Una certificación ISO 27001 evalúa todo el Sistema de Gestión (alcance, liderazgo, riesgos, auditoría interna y revisión gerencial), no únicamente controles técnicos aislados.',
      },
      {
        id: 'm4-q3',
        number: 3,
        type: 'Opción Múltiple',
        category: 'Interpretar/Aplicar Matrices (40%)',
        question:
          'En una Matriz Viva de Trazabilidad sobre Copias de Seguridad, ¿qué triada conecta correctamente la normativa ISO, la capacidad de recuperación NIST y la ejecución técnica CIS?',
        options: [
          'ISO 27002 8.13 ↔ NIST Recover (RC.RP-03) ↔ CIS Control 11 (Salvaguardas 11.1 a 11.5)',
          'ISO 27002 5.9 ↔ NIST Protect (PR.AT-01) ↔ CIS Control 14 (Concientización)',
          'ISO 27002 8.5 ↔ NIST Identify (ID.AM-01) ↔ CIS Control 01 (Hardware)',
          'ISO 27002 8.17 ↔ NIST Govern (GV.SC-01) ↔ CIS Control 15 (Proveedores)',
        ],
        correctIndex: 0,
        explanation:
          'El Control 8.13 de ISO 27002 (Respaldo de información) se alinea directamente con la verificación de integridad de copias en Recover (RC.RP-03) de NIST CSF 2.0 y se ejecuta técnicamente mediante CIS Control 11 (11.1 a 11.5).',
      },
      {
        id: 'm4-q4',
        number: 4,
        type: 'Opción Múltiple',
        category: 'Interpretar/Aplicar Matrices (40%)',
        question:
          '¿Por qué en metodología de mapeo cruzado decimos que la relación entre ISO 27002 Control 8.5 (Autenticación segura) y CIS Controls v8.1 suele ser "1 a Muchos (1:N)" y de equivalencia parcial por salvaguarda individual?',
        options: [
          'Porque ISO 8.5 prohíbe usar contraseñas.',
          'Porque cumplir íntegramente ISO 8.5 requiere combinar varias salvaguardas CIS (como 5.2 contraseñas únicas, 6.3 MFA externo, 6.4 MFA remoto y 6.5 MFA administrativo), no basta una sola.',
          'Porque CIS v8.1 eliminó los controles de autenticación.',
          'Porque un control ISO solo puede mapearse con herramientas físicas.',
        ],
        correctIndex: 1,
        explanation:
          'Un control amplio de ISO 27002 abarca múltiples escenarios (usuarios finales, accesos remotos, administradores y reglas de credenciales), por lo que requiere agrupar varias salvaguardas atómicas de los Controles 5 y 6 de CIS.',
      },
      {
        id: 'm4-q5',
        number: 5,
        type: 'Opción Múltiple',
        category: 'Interpretar/Aplicar Matrices (40%)',
        question:
          'Un CISO reporta al Directorio: "Reducimos el tiempo de parcheo crítico de 42 a 11 días (CIS 7.3/7.4)". ¿Cómo debe traducirse este indicador al lenguaje de NIST CSF 2.0 e ISO 27002:2022?',
        options: [
          'Indicar que el firewall está bloqueando el puerto 80.',
          'Mostrar que eleva la madurez en NIST ID.RA-01 / PR.PS-02 hacia Tier 3 y demuestra la eficacia del Control ISO 8.8 (Gestión de vulnerabilidades técnicas) bajo la Cláusula 9.1.',
          'Reportar que ya no hace falta gestionar riesgos en proveedores.',
          'Clasificarlo únicamente como Control Físico 7.1.',
        ],
        correctIndex: 1,
        explanation:
          'Traducir métricas operativas CIS a reducción de exposición/madurez (NIST) y cumplimiento auditable de medición (ISO Cl. 9.1 + Control 8.8) habla el idioma ejecutivo del Directorio.',
      },
      {
        id: 'm4-q6',
        number: 6,
        type: 'Opción Múltiple',
        category: 'Recordar/Comprender (30%)',
        question:
          '¿Cuál es la ventaja principal del principio "Test Once, Comply Many" (Audita una vez, cumple muchas) al usar una matriz integrada ISO-NIST-CIS?',
        options: [
          'Eliminar por completo la necesidad de aplicar parches o backups.',
          'Permitir que un único artefacto o evidencia técnica recopilada en TI sustente simultáneamente auditorías ISO 27001, evaluaciones de madurez NIST e higiene CIS, reduciendo costos y fatiga operativa.',
          'Evitar contratar administradores de sistemas.',
          'Reemplazar la ley de protección de datos del país.',
        ],
        correctIndex: 1,
        explanation:
          'Al mapear los controles en una matriz unificada, un mismo reporte de IdP, SIEM o escáner de vulnerabilidades responde a múltiples auditores y reguladores sin duplicar pedidos al equipo técnico.',
      },
      {
        id: 'm4-q7',
        number: 7,
        type: 'Verdadero / Falso Argumentado',
        category: 'Interpretar/Aplicar Matrices (40%)',
        question:
          'Verdadero o Falso: "CIS Controls v8.1 incorpora en su estructura las Security Functions (Govern, Identify, Protect, Detect, Respond, Recover), lo que facilita su alineación directa con NIST CSF 2.0."',
        options: [
          'Verdadero: La actualización v8.1 adoptó formalmente ese vocabulario funcional e incorporó Govern.',
          'Falso: CIS v8.1 solo utiliza las 3 categorías antiguas de Básico, Fundacional y Organizacional.',
        ],
        correctIndex: 0,
        explanation:
          'Verdadero. La actualización v8.1 (2024) incorporó la función Govern y armonizó sus etiquetas funcionales con NIST CSF 2.0 precisamente para simplificar el mapeo cruzado.',
      },
      {
        id: 'm4-q8',
        number: 8,
        type: 'Opción Múltiple',
        category: 'Resolver Casos (30%)',
        question:
          'En una auditoría, una empresa demuestra tener todas las políticas firmadas por el Gerente General y su matriz de riesgos actualizada, pero sus servidores siguen sin parches críticos desde hace 8 meses y carecen de MFA. ¿Qué componente de la tríada está fallando?',
        options: [
          'La gobernanza documental de alto nivel.',
          'La ejecución técnica prescriptiva de CIS Controls v8.1 (Controles 06 y 07).',
          'La compra de mobiliario físico.',
          'Únicamente la redacción del alcance.',
        ],
        correctIndex: 1,
        explanation:
          'Tienen gobernanza en papel, pero fallaron en traducir sus requisitos al "cómo" operativo de CIS Controls v8.1 (parcheo continuo Control 7 y MFA Control 6), dejando la infraestructura expuesta.',
      },
      {
        id: 'm4-q9',
        number: 9,
        type: 'Opción Múltiple',
        category: 'Resolver Casos (30%)',
        question:
          'Una organización posee excelente endurecimiento Linux/Windows (CIS v8.1) y cumple anualmente checklists técnicos, pero desconoce su nivel de madurez, no gestiona riesgos de proveedores críticos y carece de plan de recuperación de operaciones tras crisis. ¿Qué marco está desatendido?',
        options: [
          'CIS Controls v8.1 únicamente.',
          'NIST CSF 2.0 (gestión del ciclo de riesgo Govern-GV.SC, Tiers de madurez y capacidad Recover).',
          'ISO/IEC 27002 Control 7.1 (Perímetro físico).',
          'El protocolo DNS.',
        ],
        correctIndex: 1,
        explanation:
          'Carecen de la visión estratégica y dinámica de riesgo de NIST CSF 2.0: medición de madurez por Tiers, gestión de riesgos de cadena de suministro (GV.SC) y resiliencia estructurada en Respond y Recover.',
      },
      {
        id: 'm4-q10',
        number: 10,
        type: 'Opción Múltiple',
        category: 'Resolver Casos (30%)',
        question:
          '¿Qué debe hacer el CISO de una entidad pública cuyo equipo de TI ya aplicó CIS v8.1 en sus servidores, si la Alta Dirección necesita certificarse en ISO/IEC 27001:2022?',
        options: [
          'Borrar las configuraciones CIS y empezar de cero.',
          'Implementar el sistema de gobernanza (Cláusulas 4 a 10 de ISO 27001) y mapear en la SoA las salvaguardas CIS ya configuradas como evidencia técnica de los controles del Anexo A.',
          'Presentar únicamente capturas del antivirus al auditor externo.',
          'Esperar 5 años hasta que salga otra norma.',
        ],
        correctIndex: 1,
        explanation:
          'Es la ruta más eficiente y conforme: se construyen las cláusulas de gestión (alcance, riesgos, auditoría interna, revisión gerencial) y se reutiliza todo el endurecimiento CIS como evidencia técnica verificable del Anexo A.',
      },
    ],
  },

  // ==========================================================================
  // 8. PROCESO RECUERDA (INFOGRAFÍA DE LOS 5 PILARES)
  // ==========================================================================
  recuerda: {
    title: 'Infografía Maestra de Síntesis: El Triángulo Integrado ISO – NIST – CIS',
    subtitle:
      'Los 5 principios esenciales del Módulo 4 que convierten tres marcos internacionales en una sola estrategia cohesiva de ciberseguridad.',
    pillars: [
      {
        id: 'm4-pilar-1',
        number: 1,
        badge: 'Pilar 1 • Requisito ("El Qué")',
        title: 'Requisito (ISO/IEC 27001:2022)',
        coreStatement:
          'Norma qué debe gestionarse para asegurar cumplimiento legal, gobierno corporativo y certificación internacional auditable mediante un SGSI vivo bajo el ciclo PHVA.',
        keyMetrics: 'Cláusulas 4-10 + Anexo A (93 Controles)',
        auditTakeaway:
          'Sin gobernanza, alcance y evaluación de riesgos documentada en ISO 27001, ninguna configuración técnica aislada logra certificación.',
        checklist: [
          'Define responsabilidades de Alta Dirección y alcance formal.',
          'Exige auditorías internas (9.2) y revisión gerencial (9.3).',
          'Se consolida en la Declaración de Aplicabilidad (SoA).',
        ],
      },
      {
        id: 'm4-pilar-2',
        number: 2,
        badge: 'Pilar 2 • Función ("El Cuándo y Dónde")',
        title: 'Función (NIST CSF 2.0)',
        coreStatement:
          'Organiza estratégicamente cuándo y dónde desplegar capacidades de ciberseguridad a lo largo de todo el ciclo de vida del riesgo: antes, durante y después de un incidente.',
        keyMetrics: '6 Funciones: GV • ID • PR • DE • RS • RC',
        auditTakeaway:
          'Convierte la postura técnica en lenguaje de riesgo y madurez (Tiers 1–4 y Current vs. Target Profile) comprensible para el Directorio.',
        checklist: [
          'GOVERN (GV) alinea estrategia, roles y cadena de suministro.',
          'Equilibra inversión entre prevención (PR), detección (DE) y resiliencia (RS/RC).',
          'Permite medir brechas reales año tras año.',
        ],
      },
      {
        id: 'm4-pilar-3',
        number: 3,
        badge: 'Pilar 3 • Control ("El Cómo")',
        title: 'Control (CIS Controls v8.1)',
        coreStatement:
          'Prescribe cómo ejecutar la acción técnica exacta, priorizada y comprobable en endpoints, redes, identidades y nube para cerrar brechas operativas reales.',
        keyMetrics: '18 Controles • 153 Salvaguardas • IG1/IG2/IG3',
        auditTakeaway:
          'Brinda al equipo de ingeniería y SOC tareas concretas (como MFA 6.3, parcheo 7.3 o backups inmutables 11.4) con evidencia automática.',
        checklist: [
          'IG1 (56 salvaguardas) detiene la mayoría de ataques cotidianos.',
          'Traduce políticas abstractas en parámetros verificables.',
          'Genera artefactos listos para auditoría externa.',
        ],
      },
      {
        id: 'm4-pilar-4',
        number: 4,
        badge: 'Pilar 4 • Sinergia Arquitectónica',
        title: 'Los Marcos No Compiten Entre Sí',
        coreStatement:
          'ISO 27001, NIST CSF 2.0 y CIS Controls v8.1 no son estándares rivales ni excluyentes; se complementan y potencian mutuamente en una arquitectura por capas.',
        keyMetrics: 'Gobernanza + Riesgo + Técnica',
        auditTakeaway:
          'Intentar resolver todo solo con documentos (ISO sin CIS) o solo con comandos (CIS sin ISO/NIST) deja brechas críticas ante ataques o auditores.',
        checklist: [
          'Requisito sin Control = Seguridad solo en papel.',
          'Control sin Requisito = Esfuerzo técnico sin respaldo ni certificación.',
          'Ambos sin Función = Incapacidad de medir madurez y priorizar el riesgo.',
        ],
      },
      {
        id: 'm4-pilar-5',
        number: 5,
        badge: 'Pilar 5 • Matriz Unificada',
        title: 'Una Matriz de Mapeo Evita Duplicidades',
        coreStatement:
          'Mantener una única matriz de trazabilidad cruzada evita duplicar inversiones tecnológicas, reduce radicalmente la fatiga de auditoría y simplifica la rendición de cuentas.',
        keyMetrics: 'Audita Una Vez, Cumple Muchas',
        auditTakeaway:
          'Una misma evidencia técnica (reporte MFA, log SIEM o prueba de backup) alimenta simultáneamente cumplimiento ISO, madurez NIST e higiene CIS.',
        checklist: [
          'Identifica equivalencias directas vs. parciales con rigor.',
          'Registra siempre brechas documentales junto al avance técnico.',
          'Unifica el diálogo entre Directorio, Auditor y Administrador TI.',
        ],
      },
    ],
  },
};

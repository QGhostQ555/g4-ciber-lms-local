/**
 * ============================================================================
 * ARCHIVO DE DATOS EXHAUSTIVO: src/data/closureData.js
 * Curso: "Marcos y Buenas Prácticas de Ciberseguridad" (Código: G4-CIBER-2026)
 * Secciones VII y VIII: Evaluación Final (2.0 Hrs) y Cierre / Encuesta / Certificado (1.5 Hrs)
 * ============================================================================
 */

window.LMS_DATA = window.LMS_DATA || {};

window.LMS_DATA.FINAL_EXAM_DATA = {
  code: 'EVALUACIÓN FINAL',
  title: 'Evaluación Final Certificable (2.0 Hrs)',
  subtitle:
    'Examen sumativo de 20 preguntas ponderado según el sílabo (30% Recordar/Comprender • 40% Interpretar Matrices • 30% Resolver Casos). Nota mínima aprobatoria: 70% (14/20).',
  passingScore: 70,
  questions: [
    {
      id: 'fe-q1',
      number: 1,
      category: 'Recordar/Comprender (30%)',
      question:
        '¿Cuántos controles y dominios estructuran actualmente el Anexo A de ISO/IEC 27001:2022 e ISO/IEC 27002:2022?',
      options: [
        '114 controles en 14 dominios',
        '93 controles organizados en 4 dominios (Organizacional, Personas, Físico y Tecnológico)',
        '153 controles en 6 funciones',
        '18 controles en 3 grupos IG',
      ],
      correctIndex: 1,
      explanation:
        'La revisión 2022 consolidó los 114 controles previos en 93 controles agrupados en 4 dominios temáticos (Cláusulas 5, 6, 7 y 8 de ISO 27002:2022).',
    },
    {
      id: 'fe-q2',
      number: 2,
      category: 'Recordar/Comprender (30%)',
      question:
        '¿Qué documento obligatorio dentro de ISO/IEC 27001:2022 (Cláusula 6.1.3 d) lista los controles aplicables del Anexo A y justifica las exclusiones?',
      options: [
        'El Diagrama de Red Perimetral',
        'La Declaración de Aplicabilidad (Statement of Applicability - SoA)',
        'El Contrato de Prestación de Internet',
        'El Listado de Puertos TCP',
      ],
      correctIndex: 1,
      explanation:
        'La SoA (Declaración de Aplicabilidad) es el documento troncal auditable que conecta la evaluación de riesgos con la selección e implementación de controles del Anexo A.',
    },
    {
      id: 'fe-q3',
      number: 3,
      category: 'Recordar/Comprender (30%)',
      question:
        'En NIST CSF 2.0 (2024), ¿cuál es la sexta función incorporada en el centro del marco para dirigir la estrategia, políticas, roles y riesgos de cadena de suministro?',
      options: ['ASSURE', 'GOVERN (GV)', 'MONITOR', 'PREVENT'],
      correctIndex: 1,
      explanation:
        'GOVERN (GV) se introdujo en NIST CSF 2.0 como función transversal central que orienta las decisiones de riesgo de Identify, Protect, Detect, Respond y Recover.',
    },
    {
      id: 'fe-q4',
      number: 4,
      category: 'Recordar/Comprender (30%)',
      question:
        '¿Qué representa el Grupo de Implementación 1 (IG1) dentro de CIS Critical Security Controls v8.1?',
      options: [
        'Controles avanzados exclusivos para bancos multinacionales con SOC 24/7',
        'La ciberhigiene esencial mínima (56 salvaguardas) aplicable a toda organización como primera línea de defensa',
        'Únicamente pruebas de penetración Red Team',
        'Un conjunto opcional de políticas sin aplicación técnica',
      ],
      correctIndex: 1,
      explanation:
        'IG1 define las 56 salvaguardas esenciales de ciberhigiene que toda pyme o gran empresa debe consolidar primero antes de avanzar a IG2 (130) e IG3 (153).',
    },
    {
      id: 'fe-q5',
      number: 5,
      category: 'Recordar/Comprender (30%)',
      question:
        '¿Cuál fue la innovación estructural clave de CIS Controls v8.1 respecto a la versión 8.0?',
      options: [
        'Redujo los controles de 18 a 5',
        'Incorporó etiquetas explícitas de Security Functions (incluida Govern) y Asset Classes actualizadas para alinearse directamente con NIST CSF 2.0',
        'Eliminó la necesidad de inventariar hardware',
        'Prohibió el uso de entornos cloud',
      ],
      correctIndex: 1,
      explanation:
        'CIS v8.1 actualizó sus clases de activos y alineó las Security Functions con NIST CSF 2.0, añadiendo soporte explícito para Govern.',
    },
    {
      id: 'fe-q6',
      number: 6,
      category: 'Recordar/Comprender (30%)',
      question:
        'En la jerarquía conceptual Requisito – Función – Control, ¿qué pregunta responde cada uno?',
      options: [
        'ISO (Requisito): "El Qué" auditable; NIST (Función): "El Cuándo y Dónde" del riesgo; CIS (Control): "El Cómo" técnico prescriptivo',
        'CIS: "El Qué"; ISO: "El Cómo técnico"; NIST: "Solo presupuesto"',
        'Los tres responden únicamente "El Cómo"',
        'Ninguno aborda gobernanza',
      ],
      correctIndex: 0,
      explanation:
        'ISO 27001 define el qué debe gestionarse, NIST CSF 2.0 articula cuándo y dónde actuar en el ciclo de vida del riesgo, y CIS v8.1 detalla cómo ejecutar técnicamente cada salvaguarda.',
    },
    {
      id: 'fe-q7',
      number: 7,
      category: 'Interpretar Matrices (40%)',
      question:
        'En el catálogo de atributos de ISO/IEC 27002:2022, ¿qué combinación de 5 atributos permite filtrar y clasificar cada control?',
      options: [
        'Color, Precio, Marca, Proveedor y Licencia',
        'Tipo de Control, Propiedades de Seguridad (C/I/D), Conceptos de Ciberseguridad, Capacidades Operacionales y Dominios de Seguridad',
        'IP, MAC, Puerto, Protocolo y VLAN',
        'IG1, IG2, IG3, Tier 1 y Tier 2',
      ],
      correctIndex: 1,
      explanation:
        'Los 5 atributos de ISO 27002:2022 permiten crear vistas personalizadas compatibles con NIST (#Identify, #Protect, #Detect, #Respond, #Recover) y roles internos.',
    },
    {
      id: 'fe-q8',
      number: 8,
      category: 'Interpretar Matrices (40%)',
      question:
        'Al comparar Perfiles en NIST CSF 2.0, ¿qué diferencia existe entre el "Current Profile" y el "Target Profile"?',
      options: [
        'Ninguna, ambos muestran el historial de hace 5 años',
        'Current Profile refleja la postura real actual de resultados NIST alcanzados; Target Profile define la meta deseada según apetito de riesgo, permitiendo priorizar brechas',
        'Target Profile solo aplica a servidores Linux',
        'Current Profile reemplaza al inventario de activos',
      ],
      correctIndex: 1,
      explanation:
        'El análisis de brechas (Gap Analysis) compara el Perfil Actual frente al Perfil Objetivo para construir una hoja de ruta priorizada de mejora.',
    },
    {
      id: 'fe-q9',
      number: 9,
      category: 'Interpretar Matrices (40%)',
      question:
        '¿Qué triada de trazabilidad cruzada correlaciona exactamente la gestión de copias de seguridad resilientes?',
      options: [
        'ISO 27002 Control 8.13 ↔ NIST Recover (RC.RP-03) ↔ CIS Control 11 (11.1 a 11.5)',
        'ISO 27002 Control 6.3 ↔ NIST Govern (GV.PO-01) ↔ CIS Control 01 (1.1)',
        'ISO 27002 Control 7.1 ↔ NIST Detect (DE.CM-01) ↔ CIS Control 06 (6.3)',
        'ISO 27002 Control 8.5 ↔ NIST Identify (ID.AM-01) ↔ CIS Control 14 (14.1)',
      ],
      correctIndex: 0,
      explanation:
        'ISO 8.13 (Respaldo de información), NIST RC.RP-03 (Verificar integridad de respaldos en Recover) y CIS Control 11 (Recuperación de Datos) forman la triada directa de resiliencia.',
    },
    {
      id: 'fe-q10',
      number: 10,
      category: 'Interpretar Matrices (40%)',
      question:
        '¿Qué triada vincula correctamente el requisito de autenticación robusta y despliegue de MFA?',
      options: [
        'ISO 27002 Control 8.5 ↔ NIST Protect (PR.AA-03) ↔ CIS Control 06 (Salvaguardas 6.3, 6.4, 6.5)',
        'ISO 27002 Control 8.17 ↔ NIST Respond (RS.MA-01) ↔ CIS Control 17 (17.1)',
        'ISO 27002 Control 5.9 ↔ NIST Recover (RC.RP-03) ↔ CIS Control 11 (11.2)',
        'ISO 27002 Control 8.8 ↔ NIST Govern (GV.SC-01) ↔ CIS Control 15 (15.1)',
      ],
      correctIndex: 0,
      explanation:
        'ISO 8.5 (Autenticación segura) requiere protección de acceso PR.AA-03 en NIST Protect y ejecución prescriptiva de MFA en CIS Control 6.',
    },
    {
      id: 'fe-q11',
      number: 11,
      category: 'Interpretar Matrices (40%)',
      question:
        '¿Por qué una salvaguarda CIS individual (ej. CIS 6.3 MFA externo) se clasifica como "equivalencia parcial" frente a un control ISO amplio (ej. 8.5 Autenticación segura)?',
      options: [
        'Porque CIS 6.3 no sirve en la nube',
        'Porque ISO 8.5 abarca múltiples controles de credenciales (contraseñas únicas 5.2, MFA remoto 6.4 y MFA admin 6.5), requiriendo relación 1:N',
        'Porque ISO 27002 prohíbe MFA',
        'Porque las matrices cruzadas prohíben agrupar salvaguardas',
      ],
      correctIndex: 1,
      explanation:
        'La relación entre controles normativos amplios y salvaguardas técnicas atómicas suele ser 1:N; deben consolidarse todas las salvaguardas asociadas antes de declarar cumplimiento pleno.',
    },
    {
      id: 'fe-q12',
      number: 12,
      category: 'Interpretar Matrices (40%)',
      question:
        'En la hoja de ruta práctica de CIS Controls v8.1 (IG1), ¿cuál es el orden lógico prioritario antes de desplegar un SIEM complejo?',
      options: [
        'Comprar primero herramientas de Pentesting (Control 18) y luego inventariar',
        'Consolidar visibilidad (Controles 1 y 2: Inventarios), asegurar cuentas/MFA (5 y 6), endurecer/parchar (4 y 7) y respaldar/concientizar (11 y 14)',
        'Desactivar los logs del Control 8 para ahorrar disco',
        'Publicar políticas sin revisar los equipos',
      ],
      correctIndex: 1,
      explanation:
        'No se puede proteger ni monitorear lo que no se conoce: primero inventarios (C1-C2), luego identidades/accesos (C5-C6), hardening/parches (C4, C7) y backups/formación (C11, C14).',
    },
    {
      id: 'fe-q13',
      number: 13,
      category: 'Interpretar Matrices (40%)',
      question:
        'Si el indicador técnico CIS 7.3 muestra "parcheo crítico en ≤ 11 días", ¿cómo se reporta en lenguaje combinado NIST e ISO?',
      options: [
        'Tier 3 en NIST ID.RA-01 / PR.PS-02 + Evidencia de eficacia del Control ISO 8.8 bajo Cláusula 9.1',
        'Tier 1 en NIST Recover + Control Físico ISO 7.1',
        'No es relevante para auditoría ni Directorio',
        'Reemplaza al Plan de Respuesta a Incidentes',
      ],
      correctIndex: 0,
      explanation:
        'Conectar la métrica de ingeniería (CIS 7.3) con reducción de vulnerabilidades/madurez NIST y medición normativa ISO Cl. 9.1/8.8 unifica el reporte ejecutivo.',
    },
    {
      id: 'fe-q14',
      number: 14,
      category: 'Interpretar Matrices (40%)',
      question:
        '¿Qué par de controles nuevos de ISO/IEC 27002:2022 cubre la prevención de fugas de información y la gestión segura de servicios en la nube?',
      options: [
        'Controles 8.12 (Prevención de fuga de datos - DLP) y 5.23 (Seguridad de la información para uso de servicios en la nube)',
        'Controles 7.1 (Perímetro físico) y 6.1 (Selección)',
        'Únicamente el control 5.1 (Políticas)',
        'No existen controles cloud en la edición 2022',
      ],
      correctIndex: 0,
      explanation:
        'Entre los 11 controles nuevos de 2022 destacan 5.23 (Servicios Cloud) y 8.12 (DLP), junto con 5.7 (Threat Intelligence), 8.9 (Configuración) y 8.28 (Codificación segura).',
    },
    {
      id: 'fe-q15',
      number: 15,
      category: 'Resolver Casos (30%)',
      question:
        'Caso 1: Una firma tiene antivirus y firewall de última generación, pero un colaborador sin acuerdo de confidencialidad filtró datos a la competencia. ¿Por qué falló la defensa?',
      options: [
        'Faltaba comprar un segundo firewall',
        'Porque la tecnología sola no reemplaza un SGSI integral; faltaron controles organizacionales y de personas (ISO 6.2 Acuerdos de confidencialidad y 6.3 Concientización)',
        'Porque NIST CSF prohíbe acuerdos laborales',
        'Porque los colaboradores no forman parte del alcance',
      ],
      correctIndex: 1,
      explanation:
        'Un SGSI efectivo integra controles tecnológicos, organizacionales, legales y de gestión de personas; la tecnología perimetral no detiene fugas internas sin gobierno ni cultura.',
    },
    {
      id: 'fe-q16',
      number: 16,
      category: 'Resolver Casos (30%)',
      question:
        'Caso 2: Una entidad financiera con defensas perimetrales sólidas tardó 220 días en notar que un atacante lateralizaba accesos internamente. ¿Qué función NIST falló principalmente?',
      options: [
        'RECOVER (RC)',
        'DETECT (DE): monitoreo continuo DE.CM y análisis de eventos adversos DE.AE',
        'Únicamente el perímetro físico',
        'El respaldo en cinta',
      ],
      correctIndex: 1,
      explanation:
        'Un tiempo de permanencia (dwell time) de 220 días evidencia una brecha crítica en la función Detect (DE.CM / DE.AE) al no correlacionar logs ni detectar movimientos laterales.',
    },
    {
      id: 'fe-q17',
      number: 17,
      category: 'Resolver Casos (30%)',
      question:
        'Caso 3: Una pyme con presupuesto muy limitado quiere frenar phishing y ransomware sin malgastar dinero en herramientas complejas. ¿Por dónde debe comenzar?',
      options: [
        'Contratar inmediatamente un Red Team de IG3 y comprar un SIEM empresarial sin tener inventarios',
        'Priorizar las 56 salvaguardas esenciales de IG1 de CIS v8.1 (inventarios, MFA, parches, backups aislados y concientización phishing)',
        'Desactivar los respaldos',
        'Redactar únicamente una política de 100 páginas sin cambios técnicos',
      ],
      correctIndex: 1,
      explanation:
        'IG1 representa la ciberhigiene de mayor retorno de inversión frente a phishing y ransomware antes de adquirir tecnología compleja de IG2/IG3.',
    },
    {
      id: 'fe-q18',
      number: 18,
      category: 'Resolver Casos (30%)',
      question:
        'Caso 4: Una empresa permite conectar laptops personales (BYOD) sin control a su red Wi-Fi interna de servidores. ¿Qué par de controles CIS v8.1 corrige de raíz esta brecha?',
      options: [
        'CIS Control 01 (1.3/1.4 Inventario y segmentación/cuarentena de activos no autorizados) + CIS Control 12 / 13 (NAC 802.1X y segmentación de red)',
        'Eliminar el Wi-Fi corporativo y usar USB públicos',
        'Únicamente pedir a los usuarios que prometan no conectar virus',
        'Desinstalar el sistema operativo de los servidores',
      ],
      correctIndex: 0,
      explanation:
        'CIS Control 1 junto a Controles 12/13 exige descubrir activos no autorizados, aplicar control de acceso a red (NAC) y aislar dispositivos BYOD en una VLAN aislada.',
    },
    {
      id: 'fe-q19',
      number: 19,
      category: 'Resolver Casos (30%)',
      question:
        'Caso 5: Una entidad pública configuró CIS v8.1 en sus servidores Linux/Windows pero necesita certificarse en ISO/IEC 27001:2022. ¿Qué acción resuelve la brecha sin rehacer TI?',
      options: [
        'Desinstalar CIS Benchmarks de todos los servidores',
        'Construir la gobernanza formal (Cláusulas 4–10 de ISO 27001: Alcance, Riesgos, Auditoría Interna, Revisión Dirección) y mapear las salvaguardas CIS como evidencia técnica en la SoA',
        'Entregar al auditor solo capturas de terminal sin evaluación de riesgos',
        'Esperar a que ISO adopte el formato IG1',
      ],
      correctIndex: 1,
      explanation:
        'Se formalizan los requisitos obligatorios de Sistema de Gestión (Cláusulas 4-10) y se aprovecha el endurecimiento CIS existente como evidencia auditable del Anexo A.',
    },
    {
      id: 'fe-q20',
      number: 20,
      category: 'Resolver Casos (30%)',
      question:
        'Caso 6: Al diseñar un programa maduro, ¿por qué los controles técnicos CIS, las funciones NIST CSF 2.0 y los requisitos ISO 27001:2022 nunca deben tratarse como proyectos aislados?',
      options: [
        'Porque la ley prohíbe tener más de un estándar en carpeta',
        'Porque forman una arquitectura complementaria por capas donde una matriz única de trazabilidad ("Audita una vez, cumple muchas") evita duplicar costos y simplifica la rendición de cuentas',
        'Porque NIST reemplaza las contraseñas',
        'Porque CIS sustituye la firma de la Alta Dirección',
      ],
      correctIndex: 1,
      explanation:
        'La interoperabilidad por capas convierte la evidencia técnica diaria (CIS) en madurez estratégica ante el riesgo (NIST) y en conformidad auditable certificable (ISO).',
    },
  ],
};

window.LMS_DATA.CLOSURE_DATA = {
  code: 'SECCIÓN FINAL',
  title: 'Cierre, Encuesta de Satisfacción y Certificado Digital (1.5 Hrs)',
  subtitle:
    'Síntesis integral del ecosistema de marcos de seguridad (Secciones VII y VIII del sílabo), paquete consolidado de plantillas, encuesta de calidad y emisión de diploma.',
  ecosystemLayers: [
    {
      id: 'layer-iso',
      order: 1,
      layerTitle: 'Capa Superior — Gobernanza y Cumplimiento',
      frameworkName: 'ISO/IEC 27001:2022 & ISO/IEC 27002:2022',
      roleQuestion: 'EL QUÉ (Requisito Auditable y Certificable)',
      colorTheme: 'amber',
      highlights: [
        'Cláusulas 4 a 10 estructuradas bajo mejora continua (Ciclo PHVA)',
        'Declaración de Aplicabilidad (SoA) vinculada a la evaluación de riesgos',
        '93 controles en 4 dominios: Organizacional (37), Personas (8), Físico (14) y Tecnológico (34)',
      ],
      flowDetail:
        'Define la obligación institucional: establece el Alcance del SGSI, el apetito de riesgo aprobado por la Alta Dirección y exige mediante Cláusulas 8 y 9 evidencias objetivas verificables de los controles aplicables del Anexo A (ej. Control 8.5 Autenticación segura y 8.13 Respaldo de información).',
    },
    {
      id: 'layer-nist',
      order: 2,
      layerTitle: 'Capa Intermedia — Gestión de Riesgos y Resiliencia',
      frameworkName: 'NIST Cybersecurity Framework (CSF) 2.0',
      roleQuestion: 'EL CUÁNDO Y DÓNDE (Capacidades y Ciclo de Vida)',
      colorTheme: 'cyan',
      highlights: [
        'Función central transversal GOVERN (GV) dirigiendo contexto, roles y terceros',
        'Ciclo operativo continuo: Identify → Protect → Detect → Respond → Recover',
        'Medición de brechas mediante Perfiles (Current vs. Target) y Tiers (1–4)',
      ],
      flowDetail:
        'Traduce el mandato de ISO 27001 en capacidades priorizadas antes, durante y después de un incidente. Mide dónde está la brecha crítica hoy (Current Profile Tier 1–2), define hasta dónde invertir (Target Profile Tier 3–4) y reporta al Directorio madurez real y resiliencia.',
    },
    {
      id: 'layer-cis',
      order: 3,
      layerTitle: 'Capa Base — Ejecución Técnica Priorizada',
      frameworkName: 'CIS Critical Security Controls v8.1',
      roleQuestion: 'EL CÓMO PRESCRIPTIVO (Ingeniería y Salvaguardas)',
      colorTheme: 'emerald',
      highlights: [
        '18 Controles críticos y 153 Salvaguardas técnicas verificables',
        'Despliegue progresivo por madurez: IG1 (56) → IG2 (130) → IG3 (153)',
        'Generación directa de artefactos técnicos de auditoría (IdP, SIEM, MDM, backups)',
      ],
      flowDetail:
        'Entrega a los administradores de infraestructura la lista exacta de configuraciones a desplegar en servidores, endpoints, redes y nube (ej. CIS 6.3 MFA obligatorio o CIS 11.4 backups aislados/inmutables). Sus registros devuelven evidencia verificada hacia NIST e ISO.',
    },
  ],
  endToEndExample:
    'Flujo de punta a punta (Ejemplo Autenticación MFA): ISO 27001/27002 Control 8.5 exige autenticación segura ("El Qué") → NIST CSF 2.0 PR.AA-03 prioriza cerrar la brecha de acceso hacia Tier 3 ("El Cuándo/Dónde") → CIS v8.1 Salvaguarda 6.3/6.5 configura MFA obligatorio en Entra ID/VPN ("El Cómo") → El reporte del IdP valida simultáneamente a los tres marcos.',
  skillsAchieved: [
    {
      id: 'skill-1',
      number: 1,
      frameworkBadge: 'ISO/IEC 27001 & 27002:2022',
      title: 'Formulación de Declaraciones de Aplicabilidad (SoA) y Alcance Auditable',
      description:
        'Capacidad para definir límites precisos del SGSI (Cláusula 4.3), redactar políticas bajo el ciclo PHVA, justificar inclusiones/exclusiones de los 93 controles y prevenir No Conformidades Mayores.',
    },
    {
      id: 'skill-2',
      number: 2,
      frameworkBadge: 'NIST CSF 2.0',
      title: 'Estructuración de Perfiles de Riesgo Institucional y Planes de Resiliencia',
      description:
        'Competencia para articular la función GOVERN junto a Identify, Protect, Detect, Respond y Recover, evaluando madurez por Implementation Tiers (1–4) y comparando Current vs. Target Profiles.',
    },
    {
      id: 'skill-3',
      number: 3,
      frameworkBadge: 'CIS Controls v8.1 + Mapeo',
      title: 'Despliegue de Controles Técnicos Priorizados (IG1–IG3) y Matrices Cruzadas',
      description:
        'Habilidad para implementar salvaguardas técnicas de alto impacto comenzando por ciberhigiene esencial IG1 (56 salvaguardas) y construir matrices unificadas ISO ↔ NIST ↔ CIS.',
    },
  ],
  bibliography: [
    {
      id: 'bib-cis',
      citation:
        'Center for Internet Security (CIS). (2024). CIS Critical Security Controls Version 8.1. East Greenbush, NY: CIS.',
      primaryUrlLabel: 'Documento Oficial CIS Controls v8.1',
      primaryUrl: 'https://www.cisecurity.org/controls/v8-1',
      toolLabel: 'Herramienta Gratuita: CIS CSAT (Self-Assessment Tool)',
      toolUrl:
        'https://www.cisecurity.org/controls/cis-controls-self-assessment-tool-cis-csat',
    },
    {
      id: 'bib-iso27001',
      citation:
        'ISO/IEC 27001:2022. Information security, cybersecurity and privacy protection — Information security management systems — Requirements. Ginebra: ISO.',
      primaryUrlLabel: 'Ficha Oficial ISO/IEC 27001:2022',
      primaryUrl: 'https://www.iso.org/standard/27001',
      toolLabel: null,
      toolUrl: null,
    },
    {
      id: 'bib-iso27002',
      citation:
        'ISO/IEC 27002:2022. Information security, cybersecurity and privacy protection — Information security controls. Ginebra: ISO.',
      primaryUrlLabel: 'Ficha Oficial ISO/IEC 27002:2022',
      primaryUrl: 'https://www.iso.org/standard/75652.html',
      toolLabel: null,
      toolUrl: null,
    },
    {
      id: 'bib-nist',
      citation:
        'National Institute of Standards and Technology (NIST). (2024). The NIST Cybersecurity Framework (CSF) 2.0. NIST Special Publication CSWP 29. U.S. Department of Commerce.',
      primaryUrlLabel: 'PDF Oficial NIST CSF 2.0 (CSWP 29)',
      primaryUrl: 'https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf',
      toolLabel: 'Herramienta Gratuita: NIST CPRT (Crosswalks & Catalog)',
      toolUrl:
        'https://csrc.nist.gov/projects/cprt/catalog#/cprt/framework/version/CSF_2_0_0/home',
    },
  ],
  surveyQuestions: [
    {
      id: 'didacticQuality',
      label: 'Calidad didáctica y claridad de los 8 procesos pedagógicos',
    },
    {
      id: 'labsUtility',
      label:
        'Utilidad práctica de los laboratorios, simuladores y matrices descargables',
    },
    {
      id: 'navigationExperience',
      label: 'Experiencia de navegación en la plataforma web',
    },
  ],
  certificateMeta: {
    headerTitle: 'CERTIFICADO DE APROBACIÓN',
    courseTitle:
      'Marcos y Buenas Prácticas de Ciberseguridad (ISO/IEC 27001/27002:2022, NIST CSF 2.0 y CIS Controls v8.1)',
    courseCode: 'G4-CIBER-2026',
    modality: '100% Asíncrono',
    duration: '20 Horas Académicas',
    verificationPrefix: 'CERT-G4-2026-',
  },
};

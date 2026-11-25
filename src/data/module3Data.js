/**
 * ============================================================================
 * ARCHIVO DE DATOS EXHAUSTIVO MÓDULO 3: src/data/module3Data.js
 * Módulo 3: Ciberdefensa Práctica y Priorizada: CIS Controls v8.1 (4 Hrs)
 * ============================================================================
 */

window.LMS_DATA = window.LMS_DATA || {};

window.LMS_DATA.MODULE_3_DATA = {
  moduleCode: 'MÓDULO 3',
  moduleTitle:
    'Ciberdefensa Práctica y Priorizada: CIS Critical Security Controls v8.1',
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
        'Caso detonante: Pyme con presupuesto limitado frente a phishing y ransomware',
    },
    {
      id: 'aprende',
      number: 2,
      title: '2. PROCESO APRENDE',
      shortTitle: 'APRENDE',
      duration: '60-90 min',
      icon: 'book-open',
      subtitle:
        '4 Lecciones interactivas: 18 Controles, 153 Salvaguardas, IG1/IG2/IG3 y novedades v8.1',
      subLessons: [
        {
          id: 'leccion-3-1',
          code: 'Lección 3.1',
          title:
            'Introducción a CIS Controls v8.1: Enfoque prescriptivo y 153 Salvaguardas',
          duration: '15 min',
        },
        {
          id: 'leccion-3-2',
          code: 'Lección 3.2',
          title:
            'Higiene Cibernética Básica y Explorador Completo de los 18 Controles',
          duration: '30 min',
        },
        {
          id: 'leccion-3-3',
          code: 'Lección 3.3',
          title:
            'Grupos de Implementación (IG1: 56, IG2: 130, IG3: 153 salvaguardas)',
          duration: '25 min',
        },
        {
          id: 'leccion-3-4',
          code: 'Lección 3.4',
          title:
            'Actualizaciones clave en CIS Controls v8.1: Govern, Asset Classes y Nube',
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
        'Galería técnica: Control 1 y 2 (Inventarios) y Control 6 (MFA y Contraseñas)',
    },
    {
      id: 'explora',
      number: 4,
      title: '4. PROCESO EXPLORA',
      shortTitle: 'EXPLORA',
      duration: '30-45 min',
      icon: 'folder-open',
      subtitle:
        'Hoja de ruta IG1 en 4 fases, enlaces oficiales CIS y descarga Checklist (.CSV)',
    },
    {
      id: 'practica',
      number: 5,
      title: '5. PROCESO PRACTICA',
      shortTitle: 'PRACTICA',
      duration: '60-90 min',
      icon: 'gamepad-2',
      subtitle:
        '2 Laboratorios: Clasificador IG1/IG2/IG3 (9 salvaguardas) y Secuenciador de Servidor',
    },
    {
      id: 'aplica',
      number: 6,
      title: '6. PROCESO APLICA',
      shortTitle: 'APLICA',
      duration: '30-60 min',
      icon: 'stethoscope',
      subtitle:
        'Simulador de Control de Acceso a la Red: Mitigación ante BYOD no autorizado',
    },
    {
      id: 'comprueba',
      number: 7,
      title: '7. PROCESO COMPRUEBA',
      shortTitle: 'COMPRUEBA',
      duration: '15-30 min',
      icon: 'clipboard-check',
      subtitle:
        'Cuestionario formativo de 10 preguntas sobre CIS Controls v8.1 y Grupos IG',
    },
    {
      id: 'recuerda',
      number: 8,
      title: '8. PROCESO RECUERDA',
      shortTitle: 'RECUERDA',
      duration: '5-10 min',
      icon: 'brain-circuit',
      subtitle:
        'Infografía resumen interactiva de los 5 pilares de CIS v8.1 y cierre',
    },
  ],

  // =========================================================================
  // 1. PROCESO INICIA (5-10 MIN)
  // =========================================================================
  inicia: {
    objective:
      'Aplicar los 18 Controles de Seguridad Críticos de CIS Controls v8.1 y sus 153 Salvaguardas técnicas medibles, priorizados mediante Grupos de Implementación (IG1, IG2 e IG3) según la exposición al riesgo y los recursos reales de cada organización.',
    caseTitle:
      'Caso Detonante: Priorización bajo presupuesto limitado frente a Phishing y Ransomware',
    caseScenario:
      'Una pyme con presupuesto muy limitado desea protegerse de ataques de phishing y ransomware.',
    triggerQuestion:
      '¿Por dónde debe comenzar para no malgastar sus recursos en herramientas costosas?',
    reflectionOptions: [
      {
        id: 'mod3-inicia-opt-a',
        label: 'Opción A: Inversión Compleja Prematura (IG3)',
        title:
          'Adquirir inmediatamente un SIEM empresarial de última generación y contratar un equipo de pruebas de penetración Red Team (IG3).',
        isOptimalInsight: false,
        feedbackTitle:
          'Error de Priorización: Sobredimensionamiento Técnico y Parálisis Presupuestaria',
        feedbackBody:
          'Un SIEM empresarial y un ejercicio Red Team (propios de IG2/IG3) consumen gran parte del presupuesto y requieren analistas SOC dedicados 24/7 para interpretarlos. Si la pyme ni siquiera sabe cuántas laptops o cuentas administrativas tiene, carece de MFA y no realiza respaldos aislados, el Red Team solo confirmará lo obvio mientras un ransomware común cifra la empresa mañana. CIS v8.1 ordena empezar por IG1.',
        controlsInvolved: [
          'Control 13 / 18 (Nivel IG2/IG3: No prioritario sin base IG1)',
          'Riesgo: Agotar presupuesto sin cubrir higiene básica',
        ],
      },
      {
        id: 'mod3-inicia-opt-b',
        label: 'Opción B: Higiene Cibernética Esencial (IG1)',
        title:
          'Comenzar por la Higiene Cibernética Esencial (IG1): inventariar sus equipos y software, aplicar parches básicos, activar MFA y configurar copias de seguridad aisladas.',
        isOptimalInsight: true,
        feedbackTitle:
          '¡Decisión Óptima de Ciberdefensa Priorizada (IG1)!',
        feedbackBody:
          '¡Exacto! CIS Controls v8.1 evita la parálisis por análisis priorizando salvaguardas de alto impacto y bajo costo mediante el Grupo de Implementación 1 (IG1: 56 salvaguardas). Al inventariar activos y software (Controles 01 y 02), parchar vulnerabilidades críticas (Control 07), exigir MFA en accesos externos y remotos (Control 06) y mantener respaldos automatizados aislados (Control 11), la pyme neutraliza más del 80% de los vectores reales de phishing y ransomware sin gastar en herramientas complejas que no puede operar.',
        controlsInvolved: [
          'IG1: Higiene Cibernética Esencial (56 Salvaguardas)',
          'Control 01 y 02: Inventario de Activos y Software',
          'Control 06: Autenticación Multifactor (MFA)',
          'Control 07 y 11: Parches y Recuperación de Datos',
        ],
      },
      {
        id: 'mod3-inicia-opt-c',
        label: 'Opción C: Burocracia Documental sin Controles Técnicos',
        title:
          'Redactar únicamente un manual de políticas de 200 páginas sin aplicar configuraciones técnicas en sus computadoras ni correos.',
        isOptimalInsight: false,
        feedbackTitle:
          'Falsa Sensación de Seguridad: El Papel no Detiene un Ransomware',
        feedbackBody:
          'Las políticas son necesarias para gobernanza, pero un documento PDF de 200 páginas no bloquea macros maliciosas, ni exige segundo factor de autenticación, ni impide la ejecución de software no autorizado. CIS Controls v8.1 se caracteriza precisamente por ser prescriptivo y técnico ("qué configurar exactamente y cómo medirlo") para cerrar brechas operativas reales.',
        controlsInvolved: [
          'Falta ejecución técnica de Controles 04, 06, 09 y 10',
          'Riesgo: Exposición total pese a tener documentos',
        ],
      },
    ],
    holisticSynthesis:
      'Lección central de CIS Controls v8.1: No todas las organizaciones necesitan empezar por el nivel máximo ni comprar las herramientas más caras. Los Implementation Groups (IG1, IG2, IG3) garantizan que cada dólar invertido cierre primero los vectores de ataque más frecuentes.',
    keyStats: [
      {
        label: 'Catálogo Técnico',
        value: '18 Controles • 153 Salvaguardas',
        context:
          'Acciones concretas, medibles y basadas en inteligencia de ataques reales.',
      },
      {
        label: 'Base Obligatoria (IG1)',
        value: '56 Salvaguardas',
        context:
          'Higiene Cibernética Esencial diseñada para proteger a toda empresa con recursos limitados.',
      },
      {
        label: 'Novedad v8.1 (2024)',
        value: 'Govern + Asset Classes',
        context:
          'Alineación directa con la función Govern de NIST CSF 2.0 y refinamiento de clases de activos.',
      },
    ],
  },

  // =========================================================================
  // 2. PROCESO APRENDE (60-90 MIN) - 4 LECCIONES INTERACTIVAS
  // =========================================================================
  aprende: [
    // LECCIÓN 3.1
    {
      id: 'leccion-3-1',
      code: 'Lección 3.1',
      title:
        'Introducción a CIS Controls v8.1: Enfoque prescriptivo y 153 Salvaguardas medibles',
      duration: '15 min',
      summary:
        'Los CIS Critical Security Controls v8.1, mantenidos por el Center for Internet Security (CIS), constituyen un conjunto priorizado y prescriptivo de prácticas técnicas de ciberdefensa. A diferencia de marcos estratégicos que dicen qué resultados lograr (como NIST CSF 2.0), CIS Controls v8.1 responde directamente al CÓMO hacerlo técnicamente: qué configurar, cómo implementarlo y cómo medir su eficacia frente a amenazas reales.',
      keyConcepts: [
        {
          title: 'Enfoque Prescriptivo ("Qué hacer exactamente y cómo medirlo")',
          description:
            'Cada salvaguarda de CIS v8.1 especifica una acción técnica verificable —por ejemplo, "Deshabilitar cuentas inactivas tras 45 días" (5.3) o "Exigir MFA para acceso administrativo" (6.5)— eliminando ambigüedades para los administradores de sistemas.',
          tag: 'Accionable y Medible',
        },
        {
          title: 'Basado en Inteligencia de Ataques Reales y Defensa en Profundidad',
          description:
            'Las 153 salvaguardas se derivan del análisis continuo de incidentes reales (Verizon DBIR, MITRE ATT&CK, reportes de CSIRT) para neutralizar las técnicas más explotadas por actores de amenazas, combinando prevención, detección y recuperación.',
          tag: 'Threat-Informed Defense',
        },
        {
          title: 'Estructura Jerárquica: 18 Controles y 153 Salvaguardas',
          description:
            'CIS reorganizó sus antiguos 20 controles (v7) en 18 Controles Críticos enfocados en activos modernos (nube, SaaS, trabajo remoto), desglosados en 153 Salvaguardas específicas clasificadas por Clase de Activo, Función de Seguridad y Grupo IG.',
          tag: '18 Controles / 153 Salvaguardas',
        },
        {
          title: 'Complemento Técnico Perfecto de ISO 27001 y NIST CSF 2.0',
          description:
            'Mientras ISO/IEC 27001 establece el sistema de gestión y NIST CSF 2.0 gestiona el riesgo estratégico, CIS Controls v8.1 proporciona las instrucciones de ingeniería paso a paso para endurecer servidores, identidades, redes y aplicaciones.',
          tag: 'Sinergia Multi-Marco',
        },
      ],
      takeaway:
        'CIS Controls v8.1 traduce la estrategia de ciberseguridad en 153 tareas técnicas medibles distribuidas en 18 controles críticos, diseñadas a partir de los ataques que realmente ocurren en el mundo real.',
    },

    // LECCIÓN 3.2
    {
      id: 'leccion-3-2',
      code: 'Lección 3.2',
      title:
        'Higiene Cibernética Básica y Catálogo Completo de los 18 Controles Oficiales',
      duration: '30 min',
      summary:
        'Explora de forma interactiva los 18 CIS Critical Security Controls v8.1 y el conteo exacto de sus 153 salvaguardas. Observa cómo los primeros controles aseguran la visibilidad de hardware, software y datos antes de avanzar hacia configuraciones, cuentas, vulnerabilidades, monitoreo y pruebas ofensivas.',
      keyConcepts: [
        {
          title: 'La Regla de Oro: Inventario antes que Defensa Compleja',
          description:
            'Los Controles 01 (Activos Empresariales) y 02 (Software) abren el catálogo porque es técnicamente imposible aplicar parches, configurar firewalls o detectar intrusiones sobre equipos y aplicaciones desconocidas ("Shadow IT").',
          tag: 'Controles 01 y 02',
        },
        {
          title: 'Cobertura Integral de Capas Técnicas y Humanas',
          description:
            'Los 18 controles abarcan desde datos (03), hardening (04), identidades (05-06), parches y logs (07-08), correo/web/malware/backups (09-11), red y monitoreo (12-13), hasta capacitación (14), proveedores (15), DevSecOps (16), respuesta a incidentes (17) y pentesting (18).',
          tag: 'Defensa en Profundidad',
        },
      ],
      controlsCatalog: [
        {
          number: 1,
          code: 'Control 01',
          title: 'Inventario y Control de Activos Empresariales',
          safeguardsCount: 5,
          ig1Count: 2,
          ig2Count: 4,
          ig3Count: 5,
          focusGroup: 'Visibilidad y Fundamentos',
          purpose:
            'Gestionar activamente (inventariar, rastrear y corregir) todos los activos empresariales (dispositivos de usuario final, portátiles, servidores, IoT y equipos de red) conectados a la infraestructura física, virtual, remota o en la nube para saber exactamente qué debe protegerse y evitar equipos no autorizados.',
          keySafeguards: [
            '1.1 Establecer y mantener inventario detallado de activos (IG1)',
            '1.2 Abordar activos no autorizados semanalmente (IG1)',
            '1.3 Utilizar herramienta automatizada de descubrimiento activo (IG2)',
            '1.4 Utilizar DHCP logging para actualizar inventario (IG2)',
            '1.5 Usar descubrimiento pasivo de activos (IG3)',
          ],
        },
        {
          number: 2,
          code: 'Control 02',
          title: 'Inventario y Control de Software',
          safeguardsCount: 7,
          ig1Count: 3,
          ig2Count: 6,
          ig3Count: 7,
          focusGroup: 'Visibilidad y Fundamentos',
          purpose:
            'Gestionar activamente todo el software (sistemas operativos, aplicaciones, librerías y scripts) en la red para que únicamente el software autorizado pueda instalarse y ejecutarse, eliminando aplicaciones obsoletas o no licenciadas.',
          keySafeguards: [
            '2.1 Establecer inventario de software autorizado (IG1)',
            '2.2 Asegurar que software autorizado cuente con soporte vigente (IG1)',
            '2.3 Desinstalar o bloquear software no autorizado (IG1)',
            '2.5 Permitir solo ejecución de aplicaciones en lista blanca / Allowlisting (IG2)',
            '2.7 Permitir ejecución solo de scripts autorizados (IG3)',
          ],
        },
        {
          number: 3,
          code: 'Control 03',
          title: 'Protección de Datos',
          safeguardsCount: 14,
          ig1Count: 6,
          ig2Count: 12,
          ig3Count: 14,
          focusGroup: 'Protección de Datos y Configuraciones',
          purpose:
            'Desarrollar procesos y controles técnicos para identificar, clasificar, manejar de forma segura, retener y disponer de los datos corporativos y personales (PII), aplicando cifrado en reposo y tránsito y prevención de fuga (DLP).',
          keySafeguards: [
            '3.1 Establecer proceso de gestión y retención de datos (IG1)',
            '3.3 Configurar listas de control de acceso (ACL) a datos (IG1)',
            '3.6 Cifrar datos en dispositivos de punto final / laptops (IG1)',
            '3.11 Cifrar datos sensibles en reposo en servidores (IG2)',
            '3.14 Registrar acceso a datos sensibles (IG3)',
          ],
        },
        {
          number: 4,
          code: 'Control 04',
          title: 'Configuración Segura de Activos Empresariales y Software',
          safeguardsCount: 12,
          ig1Count: 7,
          ig2Count: 11,
          ig3Count: 12,
          focusGroup: 'Protección de Datos y Configuraciones',
          purpose:
            'Establecer y mantener la configuración segura (hardening basado en CIS Benchmarks) de dispositivos finales, servidores, dispositivos de red y aplicaciones, eliminando configuraciones inseguras por defecto.',
          keySafeguards: [
            '4.1 Establecer proceso de configuración segura (IG1)',
            '4.3 Configurar bloqueo automático de sesión (IG1)',
            '4.4 Implementar firewall en servidores y estaciones (IG1)',
            '4.7 Gestionar cuentas predeterminadas del fabricante (IG1)',
            '4.8 Desinstalar o deshabilitar servicios y puertos innecesarios (IG2)',
          ],
        },
        {
          number: 5,
          code: 'Control 05',
          title: 'Gestión de Cuentas',
          safeguardsCount: 6,
          ig1Count: 4,
          ig2Count: 6,
          ig3Count: 6,
          focusGroup: 'Identidades y Accesos',
          purpose:
            'Utilizar procesos y herramientas para asignar y gestionar la autorización de credenciales para cuentas de usuario, cuentas de administrador y cuentas de servicio en activos empresariales y software.',
          keySafeguards: [
            '5.1 Establecer inventario de cuentas corporativas (IG1)',
            '5.2 Utilizar contraseñas únicas para todas las cuentas (IG1)',
            '5.3 Deshabilitar cuentas inactivas tras 45 días (IG1)',
            '5.4 Restringir privilegios de administrador a cuentas dedicadas (IG1)',
            '5.5 Establecer inventario de cuentas de servicio (IG2)',
          ],
        },
        {
          number: 6,
          code: 'Control 06',
          title: 'Gestión del Control de Acceso',
          safeguardsCount: 8,
          ig1Count: 5,
          ig2Count: 7,
          ig3Count: 8,
          focusGroup: 'Identidades y Accesos',
          purpose:
            'Crear, asignar, gestionar y revocar credenciales de acceso y privilegios aplicando mínimo privilegio, autenticación multifactor (MFA) y control centralizado de acceso basado en roles.',
          keySafeguards: [
            '6.1 Establecer proceso de concesión de acceso en altas (IG1)',
            '6.2 Establecer proceso de revocación inmediata en bajas (IG1)',
            '6.3 Exigir MFA para aplicaciones expuestas externamente (IG1)',
            '6.4 Exigir MFA para acceso remoto a la red (IG1)',
            '6.5 Exigir MFA para todo acceso administrativo (IG1)',
          ],
        },
        {
          number: 7,
          code: 'Control 07',
          title: 'Gestión Continua de Vulnerabilidades',
          safeguardsCount: 7,
          ig1Count: 4,
          ig2Count: 7,
          ig3Count: 7,
          focusGroup: 'Vulnerabilidades, Logs y Amenazas',
          purpose:
            'Evaluar y rastrear continuamente las vulnerabilidades en todos los activos empresariales con el fin de remediarlas mediante parches automatizados y minimizar la ventana de oportunidad para los atacantes.',
          keySafeguards: [
            '7.1 Establecer proceso de gestión de vulnerabilidades (IG1)',
            '7.3 Realizar gestión automatizada de parches de SO (IG1)',
            '7.4 Realizar gestión automatizada de parches de aplicaciones (IG1)',
            '7.5 Realizar escaneos automatizados de vulnerabilidades internas (IG2)',
            '7.6 Realizar escaneos automatizados externos (IG2)',
          ],
        },
        {
          number: 8,
          code: 'Control 08',
          title: 'Gestión de Registros de Auditoría / Logs',
          safeguardsCount: 12,
          ig1Count: 3,
          ig2Count: 11,
          ig3Count: 12,
          focusGroup: 'Vulnerabilidades, Logs y Amenazas',
          purpose:
            'Recopilar, alertar, revisar y conservar registros de auditoría (logs) de eventos que puedan ayudar a detectar, comprender o recuperarse de un ataque.',
          keySafeguards: [
            '8.1 Establecer proceso de gestión de registros de auditoría (IG1)',
            '8.2 Recopilar registros de auditoría en activos (IG1)',
            '8.5 Recopilar registros detallados para activos críticos (IG2)',
            '8.9 Centralizar recopilación de registros en SIEM/Log Collector (IG2)',
            '8.12 Recopilar registros de proveedores de servicios en la nube (IG3)',
          ],
        },
        {
          number: 9,
          code: 'Control 09',
          title: 'Protecciones de Correo Electrónico y Navegador Web',
          safeguardsCount: 7,
          ig1Count: 2,
          ig2Count: 6,
          ig3Count: 7,
          focusGroup: 'Vulnerabilidades, Logs y Amenazas',
          purpose:
            'Mejorar la protección y detección de amenazas provenientes de los vectores de interacción humana más explotados: navegadores web y clientes de correo electrónico (phishing, adjuntos maliciosos, SPF/DKIM/DMARC).',
          keySafeguards: [
            '9.1 Asegurar uso exclusivo de navegadores y clientes con soporte (IG1)',
            '9.2 Utilizar servicios de filtrado DNS para bloquear dominios maliciosos (IG1)',
            '9.5 Implementar DMARC/SPF/DKIM para correo electrónico (IG2)',
            '9.6 Bloquear tipos de archivos innecesarios en pasarela de correo (IG2)',
          ],
        },
        {
          number: 10,
          code: 'Control 10',
          title: 'Defensas contra Malware',
          safeguardsCount: 7,
          ig1Count: 3,
          ig2Count: 7,
          ig3Count: 7,
          focusGroup: 'Vulnerabilidades, Logs y Amenazas',
          purpose:
            'Prevenir o controlar la instalación, propagación y ejecución de aplicaciones, códigos o scripts maliciosos en los activos empresariales mediante antimalware/EDR administrado centralmente.',
          keySafeguards: [
            '10.1 Desplegar y mantener software antimalware administrado (IG1)',
            '10.2 Configurar actualizaciones automáticas de firmas antimalware (IG1)',
            '10.3 Deshabilitar ejecución automática (autorun) de medios extraíbles (IG1)',
            '10.5 Habilitar funciones antiexplotación / EDR en endpoints (IG2)',
          ],
        },
        {
          number: 11,
          code: 'Control 11',
          title: 'Recuperación de Datos',
          safeguardsCount: 5,
          ig1Count: 4,
          ig2Count: 5,
          ig3Count: 5,
          focusGroup: 'Resiliencia y Red',
          purpose:
            'Establecer y mantener prácticas de recuperación de datos suficientes para restaurar los activos empresariales dentro del alcance a un estado confiable previo al incidente (especialmente frente a ransomware).',
          keySafeguards: [
            '11.1 Establecer proceso de recuperación de datos (IG1)',
            '11.2 Realizar copias de seguridad automatizadas (IG1)',
            '11.3 Proteger los datos de recuperación (cifrado y control de acceso) (IG1)',
            '11.4 Mantener al menos una instancia de respaldo aislada / inmutable (IG1)',
            '11.5 Probar la restauración de copias de seguridad periódicamente (IG2)',
          ],
        },
        {
          number: 12,
          code: 'Control 12',
          title: 'Gestión de la Infraestructura de Red',
          safeguardsCount: 8,
          ig1Count: 1,
          ig2Count: 7,
          ig3Count: 8,
          focusGroup: 'Resiliencia y Red',
          purpose:
            'Establecer, implementar y gestionar activamente (monitorear, reportar y corregir) los dispositivos de red con el fin de evitar que los atacantes exploten servicios y puntos de acceso vulnerables.',
          keySafeguards: [
            '12.1 Asegurar que la infraestructura de red esté actualizada (IG1)',
            '12.2 Establecer y mantener una arquitectura de red segura y segmentada (IG2)',
            '12.6 Utilizar protocolos seguros de gestión y comunicación de red (SSH/HTTPS) (IG2)',
            '12.8 Establecer recursos informáticos dedicados para tareas administrativas (IG3)',
          ],
        },
        {
          number: 13,
          code: 'Control 13',
          title: 'Monitoreo y Defensa de la Red',
          safeguardsCount: 11,
          ig1Count: 0,
          ig2Count: 6,
          ig3Count: 11,
          focusGroup: 'Resiliencia y Red',
          purpose:
            'Operar procesos y herramientas para establecer y mantener un monitoreo y defensa integral de la red contra amenazas de seguridad en toda la infraestructura.',
          keySafeguards: [
            '13.1 Centralizar las alertas de eventos de seguridad de toda la red (IG2)',
            '13.2 Desplegar solución de detección de intrusiones en host (HIDS/EDR) (IG2)',
            '13.4 Realizar filtrado de tráfico entre segmentos de red (IG2)',
            '13.6 Recopilar registros de flujo de tráfico de red (NetFlow) (IG2)',
            '13.11 Ajustar alertas de eventos de seguridad continuamente (IG3)',
          ],
        },
        {
          number: 14,
          code: 'Control 14',
          title: 'Concientización y Capacitación en Habilidades de Seguridad',
          safeguardsCount: 9,
          ig1Count: 8,
          ig2Count: 9,
          ig3Count: 9,
          focusGroup: 'Cultura, Terceros, Software y Respuesta',
          purpose:
            'Establecer y mantener un programa de concientización en seguridad para influir en el comportamiento de la fuerza laboral con el fin de ser conscientes de la seguridad y reducir los riesgos de ciberseguridad.',
          keySafeguards: [
            '14.1 Establecer programa de concientización y formación (IG1)',
            '14.2 Capacitar en reconocimiento de ataques de ingeniería social / phishing (IG1)',
            '14.3 Capacitar sobre mejores prácticas de autenticación (IG1)',
            '14.4 Capacitar sobre manejo seguro de datos (IG1)',
            '14.9 Realizar capacitación específica por rol (IG2)',
          ],
        },
        {
          number: 15,
          code: 'Control 15',
          title: 'Gestión de Proveedores de Servicios',
          safeguardsCount: 7,
          ig1Count: 1,
          ig2Count: 5,
          ig3Count: 7,
          focusGroup: 'Cultura, Terceros, Software y Respuesta',
          purpose:
            'Desarrollar un proceso para evaluar a los proveedores de servicios que poseen datos sensibles o son responsables de plataformas críticas de TI, asegurando que protejan adecuadamente esos activos.',
          keySafeguards: [
            '15.1 Establecer y mantener inventario de proveedores de servicios (IG1)',
            '15.2 Establecer política de gestión de proveedores (IG2)',
            '15.4 Asegurar que contratos de proveedores incluyan requisitos de seguridad (IG2)',
            '15.6 Monitorear a los proveedores de servicios periódicamente (IG3)',
          ],
        },
        {
          number: 16,
          code: 'Control 16',
          title: 'Seguridad del Software de Aplicación',
          safeguardsCount: 14,
          ig1Count: 0,
          ig2Count: 11,
          ig3Count: 14,
          focusGroup: 'Cultura, Terceros, Software y Respuesta',
          purpose:
            'Gestionar el ciclo de vida de seguridad del software desarrollado internamente, adquirido o contratado para prevenir, detectar y remediar debilidades de seguridad antes de que afecten la producción.',
          keySafeguards: [
            '16.1 Establecer proceso de desarrollo seguro (SDLC) (IG2)',
            '16.4 Gestionar vulnerabilidades en componentes de terceros / librerías (IG2)',
            '16.11 Aprovechar módulos o servicios verificados para tareas de seguridad (IG2)',
            '16.12 Implementar análisis estático y dinámico de código (SAST/DAST) (IG3)',
            '16.14 Realizar modelado de amenazas en diseños críticos (IG3)',
          ],
        },
        {
          number: 17,
          code: 'Control 17',
          title: 'Gestión de Respuesta a Incidentes',
          safeguardsCount: 9,
          ig1Count: 3,
          ig2Count: 8,
          ig3Count: 9,
          focusGroup: 'Cultura, Terceros, Software y Respuesta',
          purpose:
            'Establecer un programa para desarrollar y mantener la capacidad de respuesta a incidentes (políticas, planes, procedimientos, roles definidos, capacitación y comunicaciones) para prepararse, detectar y responder rápidamente.',
          keySafeguards: [
            '17.1 Designar personal clave para gestionar el manejo de incidentes (IG1)',
            '17.2 Establecer y mantener información de contacto para reportar incidentes (IG1)',
            '17.3 Establecer proceso empresarial para reportar incidentes (IG1)',
            '17.6 Definir mecanismos de comunicación durante un incidente (IG2)',
            '17.9 Establecer umbrales y métricas de incidentes de seguridad (IG3)',
          ],
        },
        {
          number: 18,
          code: 'Control 18',
          title: 'Pruebas de Penetración / Pentesting',
          safeguardsCount: 5,
          ig1Count: 0,
          ig2Count: 2,
          ig3Count: 5,
          focusGroup: 'Cultura, Terceros, Software y Respuesta',
          purpose:
            'Probar la eficacia y resiliencia de los activos empresariales identificando y explotando debilidades en controles (personas, procesos y tecnología) mediante ataques simulados para validar defensas.',
          keySafeguards: [
            '18.1 Establecer programa de pruebas de penetración (IG2)',
            '18.2 Realizar pruebas de penetración externas periódicas (IG2)',
            '18.3 Remediar hallazgos de pruebas de penetración según severidad (IG2)',
            '18.4 Validar medidas de seguridad tras cambios relevantes (IG3)',
            '18.5 Ejecutar pruebas de penetración internas periódicas (Red Team) (IG3)',
          ],
        },
      ],
      takeaway:
        'Suma verificada del catálogo: 5 + 7 + 14 + 12 + 6 + 8 + 7 + 12 + 7 + 7 + 5 + 8 + 11 + 9 + 7 + 14 + 9 + 5 = 153 Salvaguardas oficiales distribuidas en 18 Controles Críticos.',
    },

    // LECCIÓN 3.3
    {
      id: 'leccion-3-3',
      code: 'Lección 3.3',
      title:
        'Grupos de Implementación (IG1, IG2, IG3): Escalera Acumulativa de Priorización',
      duration: '25 min',
      summary:
        'El genio práctico de CIS Controls v8.1 reside en los Implementation Groups (IGs): una guía de autoevaluación y priorización basada en el perfil de riesgo y recursos disponibles de la organización. Los grupos son acumulativos: para cumplir IG2 primero debes haber implementado el 100% de IG1; y para cumplir IG3 debes haber completado IG1 + IG2.',
      keyConcepts: [
        {
          title: 'Escalera Acumulativa (No son caminos separados)',
          description:
            'Ninguna organización puede saltarse IG1. Una corporación multinacional (IG3) también debe cumplir las 56 salvaguardas básicas de IG1 (como inventario, MFA y copias aisladas), sumando luego las de IG2 y finalmente IG3.',
          tag: 'Modelo Acumulativo',
        },
        {
          title: 'Criterio de Clasificación para Elegir tu IG Objetivo',
          description:
            'Depende de tres factores: 1) Sensibilidad de los datos procesados (PII, salud, tarjetas, secretos industriales), 2) Impacto de una interrupción en el negocio o sociedad, y 3) Disponibilidad de personal técnico especializado y presupuesto.',
          tag: 'Perfilamiento por Riesgo',
        },
      ],
      implementationGroups: [
        {
          id: 'IG1',
          name: 'IG1 — Higiene Cibernética Esencial (Essential Cyber Hygiene)',
          safeguardsCumulative: 56,
          safeguardsIncremental: 56,
          percentageOfTotal: 37,
          targetOrgProfile:
            'Pequeñas y medianas empresas (Pymes), startups o entidades con personal de TI limitado (o generalistas) que manejan datos de baja/media sensibilidad y enfrentan ataques comunes automatizados (phishing, ransomware básico).',
          defenseGoal:
            'Establecer la línea base mínima obligatoria ("ciberhigiene fundamental") con acciones de bajo costo y altísimo impacto preventivo.',
          representativeExamples: [
            '1.1 Inventario básico de equipos | 2.1 Inventario de software autorizado',
            '4.4 Firewalls en endpoints | 5.2 Contraseñas únicas | 6.3-6.5 MFA en accesos externos y admin',
            '7.3-7.4 Parches automatizados | 10.1 Antimalware centralizado | 11.4 Backup aislado/inmutable',
          ],
        },
        {
          id: 'IG2',
          name: 'IG2 — Organizaciones Medianas / Complejas con Equipos de TI',
          safeguardsCumulative: 130,
          safeguardsIncremental: 74,
          percentageOfTotal: 85,
          targetOrgProfile:
            'Empresas medianas o grandes con múltiples departamentos, infraestructura híbrida/cloud, datos sensibles/regulados y personal dedicado a administrar y proteger la infraestructura de TI.',
          defenseGoal:
            'Añadir 74 salvaguardas (alcanzando 130 en total) para escalar hacia automatización, centralización de telemetría (SIEM), segmentación de red, escaneo de vulnerabilidades y gestión de proveedores.',
          representativeExamples: [
            '1.3 Descubrimiento automatizado de activos | 2.5 Listas blancas de aplicaciones (Allowlisting)',
            '4.8 Deshabilitar puertos/servicios | 7.5 Escaneos automatizados de vulnerabilidades internas',
            '8.9 Centralización de logs (SIEM) | 13.1 Centralización de alertas de red | 16.1 Proceso SDLC',
          ],
        },
        {
          id: 'IG3',
          name: 'IG3 — Entidades Críticas y Altamente Reguladas (Defensa Avanzada)',
          safeguardsCumulative: 153,
          safeguardsIncremental: 23,
          percentageOfTotal: 100,
          targetOrgProfile:
            'Bancos sistémicos, infraestructura crítica, salud de alta complejidad o corporaciones globales con equipos especializados (SOC, AppSec, Red Team) expuestas a amenazas persistentes avanzadas (APT) y ataques dirigidos.',
          defenseGoal:
            'Incorporar las últimas 23 salvaguardas especializadas (alcanzando las 153 totales) enfocadas en detección avanzada, análisis de código, modelado de amenazas y validación ofensiva.',
          representativeExamples: [
            '2.7 Permitir solo scripts autorizados | 3.14 Registrar acceso a datos altamente sensibles',
            '12.8 Estaciones dedicadas exclusivamente a administración | 13.11 Ajuste fino continuo de alertas',
            '16.12 Pruebas SAST/DAST en desarrollo propio | 18.5 Pentesting interno continuo (Red Team)',
          ],
        },
      ],
      takeaway:
        'Memoriza la progresión exacta de CIS Controls v8.1: IG1 = 56 salvaguardas (Higiene Esencial) → IG2 = 130 acumuladas (+74) → IG3 = 153 totales (+23).',
    },

    // LECCIÓN 3.4
    {
      id: 'leccion-3-4',
      code: 'Lección 3.4',
      title:
        'Actualizaciones clave en la versión 8.1: Govern, Clases de Activos y Nube',
      duration: '20 min',
      summary:
        'Publicado en junio de 2024, CIS Controls v8.1 representa una actualización evolutiva estratégica diseñada para alinear la ciberdefensa técnica con la realidad del cómputo en la nube moderno y con el recién publicado NIST CSF 2.0, sin romper la compatibilidad de numeración con la versión 8.0.',
      keyConcepts: [
        {
          title: 'Compatibilidad Total de Numeración (18 Controles / 153 Salvaguardas)',
          description:
            'Una ventaja clave de CIS v8.1 es que mantuvo exactamente los mismos 18 Controles y 153 códigos de Salvaguardas de la versión 8.0. Las organizaciones que ya trabajaban con v8.0 no tienen que renumerar sus matrices ni auditorías.',
          tag: 'Migración Sin Fricción',
        },
        {
          title: 'Alineación Nativa con NIST CSF 2.0 (Incorporación de Govern)',
          description:
            'Hasta la versión 8.0, cada salvaguarda se etiquetaba únicamente con las 5 funciones clásicas de NIST (Identify, Protect, Detect, Respond, Recover). En v8.1 se incorporó oficialmente la función de seguridad "Govern" (Gobernar) para las salvaguardas de políticas, inventarios estratégicos y gestión de programas.',
          tag: 'Función Govern',
        },
      ],
      v81Updates: [
        {
          id: 'upd-govern',
          title: '1. Incorporación de la Función de Seguridad "Govern" (Gobernar)',
          badge: 'Alineación NIST CSF 2.0',
          detail:
            'CIS v8.1 agregó "Govern" como etiqueta oficial en la propiedad Security Function de las salvaguardas de gobierno (como 1.1, 2.1, 3.1, 4.1, 5.1, 7.1, 8.1, 11.1, 14.1, 15.2, 16.1, 17.1 y 18.1), reflejando que las decisiones de políticas, roles y supervisión pertenecen al gobierno organizacional.',
          practicalBenefit:
            'Facilita el mapeo automático bidireccional entre CIS Controls v8.1, NIST CSF 2.0 e ISO/IEC 27001:2022.',
        },
        {
          id: 'upd-assets',
          title: '2. Refinamiento de las Clases de Activos (Asset Classes)',
          badge: 'Taxonomía Mejorada',
          detail:
            'Se reorganizaron y precisaron las Asset Classes para clarificar sobre qué elemento actúa cada salvaguarda: Devices (Dispositivos), Software, Data (Datos), Users (Usuarios), Network (Red) y la incorporación/clarificación de Documentation (Documentación/Gobernanza) para procesos y políticas.',
          practicalBenefit:
            'Permite asignar responsabilidades técnicas exactas a cada equipo (Infraestructura, AppSec, Identidades, Redes, GRC).',
        },
        {
          id: 'upd-cloud',
          title: '3. Clarificaciones en Nube, Trabajo Remoto y Activos Distribuidos',
          badge: 'Modernización Cloud & Híbrida',
          detail:
            'Se refinaron las redacciones y glosarios para incluir explícitamente entornos IaaS/PaaS/SaaS, APIs, contenedores, identidades federadas y dispositivos remotos fuera del perímetro tradicional de oficina.',
          practicalBenefit:
            'Evita interpretaciones obsoletas centradas solo en servidores físicos locales (on-premise).',
        },
      ],
      takeaway:
        'CIS Controls v8.1 conserva los 18 controles y 153 salvaguardas de v8.0, pero añade la función Govern (sincronizada con NIST CSF 2.0), refina las Asset Classes (incluyendo Documentation) y actualiza su vocabulario para entornos cloud y remotos.',
    },
  ],

  // =========================================================================
  // 3. PROCESO OBSERVA (20-40 MIN)
  // =========================================================================
  observa: {
    video1: {
      id: 'mod3-obs-video-1',
      title:
        'Video 1 (10 min): "Demostración técnica: Implementando el Control 1 (Inventario de Activos) y Control 2 (Inventario de Software)"',
      duration: '10 min',
      embedUrl: 'https://www.youtube.com/embed/9GZlKZ1_1-c',
      youtubeFallbackUrl:
        'https://www.youtube.com/results?search_query=CIS+Controls+v8+Control+1+Control+2+inventario+activos',
      summary:
        'Observa cómo pasar de hojas de cálculo manuales obsoletas a un descubrimiento automatizado de activos físicos/cloud (Control 01) combinado con control de ejecución de software autorizado (Control 02).',
      discoveryToolsTable: [
        {
          toolType: 'Escaneo de Descubrimiento Activo (Ej. Nmap / Lansweeper)',
          cisSafeguard: '1.3 Descubrimiento Activo Automatizado (IG2)',
          howItWorks:
            'Sondea rangos IP/subredes periódicamente enviando paquetes TCP/ICMP/SNMP para detectar nuevos equipos, puertos abiertos y sistemas operativos.',
          prosAndLimits:
            'Detecta dispositivos sin agente (impresoras, IoT); requiere cuidado en redes sensibles (OT).',
        },
        {
          toolType: 'Agentes MDM / EDR (Ej. Microsoft Intune / CrowdStrike / Wazuh)',
          cisSafeguard: '1.1 y 2.1 Inventario de Activos y Software (IG1)',
          howItWorks:
            'Reportan en tiempo real hardware, parches, versiones exactas de software instalado y estado de cifrado incluso cuando la laptop trabaja desde casa.',
          prosAndLimits:
            'Visibilidad profunda fuera de la oficina; solo ve equipos donde el agente está instalado.',
        },
        {
          toolType: 'Registros DHCP y Descubrimiento Pasivo (NAC / NDR)',
          cisSafeguard: '1.4 DHCP Logging (IG2) y 1.5 Pasivo (IG3)',
          howItWorks:
            'Analiza solicitudes DHCP y tráfico de red en tiempo real (SPAN/TAP) sin generar tráfico adicional para identificar direcciones MAC y hostnames.',
          prosAndLimits:
            'Cero impacto en red productiva; ideal para detectar laptops BYOD conectadas sin permiso.',
        },
        {
          toolType: 'Allowlisting de Software (Ej. Microsoft AppLocker / WDAC)',
          cisSafeguard: '2.5 Permitir solo software autorizado (IG2)',
          howItWorks:
            'Bloquea por firma digital o ruta la ejecución de ejecutables (.exe, .msi, scripts) que no figuren en la lista blanca corporativa aprobada.',
          prosAndLimits:
            'Frena de raíz ransomware y malware desconocido; exige mantener actualizada la lista blanca.',
        },
      ],
      checkpointQuestion: {
        question:
          'Si un empleado conecta un fin de semana una impresora Wi-Fi o laptop personal sin agente EDR instalado a la red de la oficina, ¿qué mecanismo de Control 01 permite detectarlo automáticamente?',
        options: [
          'Únicamente preguntar por correo a fin de año quién trajo equipos.',
          'Combinar registros de asignación DHCP (1.4), descubrimiento activo/pasivo de red (1.3 / 1.5) y control de acceso 802.1X.',
          'Instalar una lista blanca únicamente en el navegador web.',
          'Ninguno; el Control 01 solo aplica a servidores en la nube.',
        ],
        correctIndex: 1,
        explanation:
          '¡Correcto! Los equipos personales o IoT no tienen agentes instalados, por lo que el descubrimiento a nivel de red (DHCP logging 1.4, escaneo activo 1.3 y monitoreo pasivo 1.5) es indispensable para detectarlos y bloquearlos.',
      },
    },
    video2: {
      id: 'mod3-obs-video-2',
      title:
        'Video 2 (10 min): "Por qué la autenticación multifactor (MFA) y las contraseñas robustas (Control 6) neutralizan la mayoría de los ataques comunes"',
      duration: '10 min',
      embedUrl: 'https://www.youtube.com/embed/bPVaOlJ6ln0',
      youtubeFallbackUrl:
        'https://www.youtube.com/results?search_query=CIS+Control+6+autenticacion+multifactor+MFA+seguridad',
      summary:
        'El robo de credenciales mediante phishing y Credential Stuffing (reutilización de claves filtradas) es la puerta de entrada número uno en brechas corporativas. Analiza cómo las Salvaguardas 6.3, 6.4 y 6.5 neutralizan este vector.',
      mfaScenarios: [
        {
          id: 'mfa-no',
          label: 'Escenario SIN MFA (Solo Contraseña)',
          badge: 'Vulnerable a Phishing y Credential Stuffing',
          attackVector:
            'El atacante obtiene la contraseña del usuario mediante un correo de phishing o la compra en una filtración previa (dark web) donde el empleado reutilizó su clave.',
          outcome:
            'Acceso inmediato e indistinguible del usuario legítimo a correo corporativo, VPN o panel administrativo en la nube.',
          isSecure: false,
        },
        {
          id: 'mfa-63',
          label: 'Salvaguarda 6.3 (IG1): MFA para Aplicaciones Externas',
          badge: 'Neutraliza Robo de Claves en SaaS / Correo',
          attackVector:
            'Incluso si el atacante posee usuario y contraseña válidos de Microsoft 365, Google Workspace o ERP web, la aplicación exige un segundo factor.',
          outcome:
            'El inicio de sesión es bloqueado en el perímetro de identidad y se genera alerta al usuario y al equipo de TI.',
          isSecure: true,
        },
        {
          id: 'mfa-64',
          label: 'Salvaguarda 6.4 (IG1): MFA para Acceso Remoto a la Red',
          badge: 'Protege VPN, RDP y Escritorios Remotos',
          attackVector:
            'Un atacante intenta conectarse por VPN o puerta de enlace remota usando credenciales filtradas de un colaborador en teletrabajo.',
          outcome:
            'La VPN rechaza el túnel al no completarse el desafío MFA (idealmente mediante app autenticadora o token FIDO2).',
          isSecure: true,
        },
        {
          id: 'mfa-65',
          label: 'Salvaguarda 6.5 (IG1): MFA para Cuentas Administrativas',
          badge: 'Evita Escalamiento Total en Servidores y Nube',
          attackVector:
            'Un atacante intenta acceder a consolas de dominio, AWS/Azure root o paneles de respaldo para borrar backups antes de desplegar ransomware.',
          outcome:
            'El acceso privilegiado queda protegido por MFA dedicado + cuenta administrativa separada (5.4), frustrando el control total del dominio.',
          isSecure: true,
        },
      ],
      checkpointQuestion: {
        question:
          'Dentro del Grupo de Implementación 1 (IG1) del Control 06, ¿en qué tres ámbitos exige CIS Controls v8.1 activar autenticación multifactor (MFA)?',
        options: [
          'Únicamente en el reloj biométrico de la puerta principal.',
          'En aplicaciones expuestas externamente (6.3), acceso remoto a la red (6.4) y acceso administrativo (6.5).',
          'Solo cuando la empresa supera los 5,000 empleados (nivel IG3).',
          'Exclusivamente en cuentas de redes sociales de marketing.',
        ],
        correctIndex: 1,
        explanation:
          '¡Exacto! Las salvaguardas 6.3, 6.4 y 6.5 forman parte de IG1 (higiene cibernética esencial), lo que significa que toda organización —incluidas las pymes— debe implementar MFA en apps externas, acceso remoto y cuentas administrativas.',
      },
    },
  },

  // =========================================================================
  // 4. PROCESO EXPLORA (30-45 MIN)
  // =========================================================================
  explora: {
    guideTitle:
      'Lectura Ejecutiva de CIS: Hoja de Ruta en 4 Fases para Implementar IG1 en Organizaciones con Recursos Limitados',
    guideSubtitle:
      'Metodología práctica para desplegar las 56 salvaguardas esenciales de Higiene Cibernética (IG1) de forma ordenada y sin sobrecargar al equipo de TI.',
    ig1Phases: [
      {
        phaseNumber: 1,
        title: 'Fase 1: Visibilidad de Activos, Software y Cuentas',
        controlsInvolved: 'Controles 01, 02, 05 y 15',
        summary:
          'Levanta el inventario base de computadoras, servidores y teléfonos (1.1), software autorizado (2.1), cuentas de usuario/administrador (5.1) y proveedores externos (15.1), deshabilitando cuentas inactivas tras 45 días (5.3).',
        quickWin:
          'Victoria rápida: Eliminar cuentas huérfanas de ex-empleados (6.2) y separar cuentas administrativas de las cuentas de correo diario (5.4).',
      },
      {
        phaseNumber: 2,
        title: 'Fase 2: Endurecimiento (Hardening) y Parches',
        controlsInvolved: 'Controles 04 y 07',
        summary:
          'Aplica configuraciones seguras básicas (4.1), activa firewalls locales en equipos (4.4), cambia contraseñas por defecto (4.7), configura bloqueo automático de pantalla (4.3) y automatiza parches de sistema operativo y navegadores/apps (7.3 y 7.4).',
        quickWin:
          'Victoria rápida: Activar actualización automática de Windows/macOS, Chrome/Edge y herramientas ofimáticas.',
      },
      {
        phaseNumber: 3,
        title: 'Fase 3: Protección de Acceso (MFA), Datos, Web y Antimalware',
        controlsInvolved: 'Controles 03, 06, 09 y 10',
        summary:
          'Exige MFA en correo/apps externas (6.3), acceso remoto/VPN (6.4) y cuentas admin (6.5); cifra laptops (3.6); activa filtrado DNS contra phishing/malware (9.2) y despliega antimalware administrado centralmente deshabilitando autorun USB (10.1-10.3).',
        quickWin:
          'Victoria rápida: Activar MFA obligatorio en Microsoft 365 / Google Workspace y cifrado BitLocker/FileVault.',
      },
      {
        phaseNumber: 4,
        title: 'Fase 4: Respaldos Aislados, Logs, Respuesta y Cultura',
        controlsInvolved: 'Controles 08, 11, 14 y 17',
        summary:
          'Configura copias de seguridad automatizadas (11.2) con al menos una copia aislada/inmutable fuera de línea (11.4), habilita logs básicos (8.2), capacita al personal contra phishing (14.2) y designa responsables y contactos de respuesta a incidentes (17.1-17.3).',
        quickWin:
          'Victoria rápida: Verificar que el backup no sea accesible desde las credenciales de usuario normal ni pueda ser borrado por un ransomware.',
      },
    ],
    officialDocuments: [
      {
        id: 'cis-v8-1-official',
        badge: 'Estándar Oficial CIS v8.1',
        title: 'CIS Critical Security Controls Version 8.1 — Portal Oficial',
        organization: 'CIS — Center for Internet Security',
        url: 'https://www.cisecurity.org/controls/v8-1',
        description:
          'Página oficial de la versión 8.1 con la especificación completa de los 18 Controles, 153 Salvaguardas, el mapeo a la nueva función Govern y el glosario actualizado de Clases de Activos.',
        keyTopics: ['CIS v8.1', '18 Controles', '153 Salvaguardas', 'Función Govern'],
      },
      {
        id: 'cis-csat-tool',
        badge: 'Herramienta Gratuita Oficial',
        title: 'CIS CSAT (Controls Self Assessment Tool) — Autoevaluación Oficial',
        organization: 'CIS Security Tools',
        url: 'https://www.cisecurity.org/controls/cis-controls-self-assessment-tool-cis-csat',
        description:
          'Plataforma oficial gratuita (versión hospedada o descargable) que permite a equipos de TI y auditores medir su porcentaje de cumplimiento por Control y por Grupo IG1/IG2/IG3.',
        keyTopics: ['Autoevaluación', 'Métricas IG1-IG3', 'Seguimiento', 'Gratuita'],
      },
      {
        id: 'cis-ig1-guide',
        badge: 'Higiene Cibernética IG1',
        title: 'Guía Oficial de Higiene Cibernética Esencial (CIS IG1 Implementation Guide)',
        organization: 'CIS — Essential Cyber Hygiene',
        url: 'https://www.cisecurity.org/controls/essential-cyber-hygiene',
        description:
          'Guía práctica enfocada en pequeñas y medianas organizaciones para implementar las 56 salvaguardas fundamentales de IG1 contra phishing, ransomware y robo de credenciales.',
        keyTopics: ['IG1 (56 Salvaguardas)', 'Pymes', 'Defensa Ransomware', 'Paso a Paso'],
      },
      {
        id: 'cis-benchmarks',
        badge: 'Líneas Base de Hardening',
        title: 'Catálogo Oficial de Configuraciones Seguras (CIS Benchmarks)',
        organization: 'CIS Benchmarks Community',
        url: 'https://www.cisecurity.org/cis-benchmarks',
        description:
          'Más de 100 guías técnicas gratuitas de endurecimiento (Control 04) para Windows, Linux, macOS, AWS, Azure, GCP, Docker, Kubernetes, bases de datos y navegadores.',
        keyTopics: ['Hardening Nivel 1/2', 'Windows/Linux', 'AWS/Azure/GCP', 'Control 04'],
      },
    ],
    checklistTitle:
      'Recurso Descargable Funcional: Checklist de Salvaguardas de CIS Controls v8.1 Filtrable por Grupo IG',
    checklistDescription:
      'Filtra en pantalla por IG1, IG2 o IG3 y descarga la hoja de cálculo (.CSV compatible con Microsoft Excel con BOM UTF-8) para auditar y registrar el estado de implementación técnica en tu organización.',
    checklistRows: [
      {
        control: 'Control 01: Inventario y Control de Activos Empresariales',
        safeguardCode: '1.1',
        safeguardTitle:
          'Establecer y mantener un inventario detallado de activos empresariales',
        assetClass: 'Devices',
        securityFunction: 'Identify / Govern',
        igGroup: 'IG1',
        currentStatus: 'En progreso',
        technicalEvidence: 'CMDB / Inventario Intune y DHCP',
      },
      {
        control: 'Control 01: Inventario y Control de Activos Empresariales',
        safeguardCode: '1.3',
        safeguardTitle:
          'Utilizar una herramienta automatizada de descubrimiento activo de activos',
        assetClass: 'Devices',
        securityFunction: 'Identify',
        igGroup: 'IG2',
        currentStatus: 'Planificado',
        technicalEvidence: 'Escáner de red programado semanalmente',
      },
      {
        control: 'Control 02: Inventario y Control de Software',
        safeguardCode: '2.1',
        safeguardTitle:
          'Establecer y mantener un inventario de software autorizado',
        assetClass: 'Software',
        securityFunction: 'Identify / Govern',
        igGroup: 'IG1',
        currentStatus: 'Implementado',
        technicalEvidence: 'Catálogo de software aprobado v2.0',
      },
      {
        control: 'Control 02: Inventario y Control de Software',
        safeguardCode: '2.5',
        safeguardTitle:
          'Permitir la ejecución únicamente de software autorizado (Allowlisting)',
        assetClass: 'Software',
        securityFunction: 'Protect',
        igGroup: 'IG2',
        currentStatus: 'Pendiente',
        technicalEvidence: 'Política AppLocker / WDAC en endpoints',
      },
      {
        control: 'Control 03: Protección de Datos',
        safeguardCode: '3.6',
        safeguardTitle:
          'Cifrar datos en dispositivos de punto final del usuario (laptops)',
        assetClass: 'Data',
        securityFunction: 'Protect',
        igGroup: 'IG1',
        currentStatus: 'Implementado',
        technicalEvidence: 'BitLocker / FileVault administrado por MDM',
      },
      {
        control: 'Control 04: Configuración Segura',
        safeguardCode: '4.4',
        safeguardTitle:
          'Implementar y gestionar un firewall en servidores y dispositivos finales',
        assetClass: 'Devices',
        securityFunction: 'Protect',
        igGroup: 'IG1',
        currentStatus: 'Implementado',
        technicalEvidence: 'GPO Windows Defender Firewall activo',
      },
      {
        control: 'Control 05: Gestión de Cuentas',
        safeguardCode: '5.2',
        safeguardTitle:
          'Utilizar contraseñas únicas para todas las cuentas empresariales',
        assetClass: 'Users',
        securityFunction: 'Protect',
        igGroup: 'IG1',
        currentStatus: 'Implementado',
        technicalEvidence: 'Política de contraseñas + Gestor corporativo',
      },
      {
        control: 'Control 06: Gestión del Control de Acceso',
        safeguardCode: '6.3',
        safeguardTitle:
          'Exigir MFA para aplicaciones expuestas externamente',
        assetClass: 'Users',
        securityFunction: 'Protect',
        igGroup: 'IG1',
        currentStatus: 'Implementado',
        technicalEvidence: 'MFA activo en Microsoft 365 / SSO',
      },
      {
        control: 'Control 06: Gestión del Control de Acceso',
        safeguardCode: '6.5',
        safeguardTitle:
          'Exigir MFA para todo acceso administrativo',
        assetClass: 'Users',
        securityFunction: 'Protect',
        igGroup: 'IG1',
        currentStatus: 'Implementado',
        technicalEvidence: 'MFA obligatorio en consolas Admin/Cloud',
      },
      {
        control: 'Control 07: Gestión Continua de Vulnerabilidades',
        safeguardCode: '7.5',
        safeguardTitle:
          'Realizar escaneos automatizados de vulnerabilidades de activos internos',
        assetClass: 'Software',
        securityFunction: 'Identify',
        igGroup: 'IG2',
        currentStatus: 'En progreso',
        technicalEvidence: 'Reporte quincenal Nessus / Qualys / OpenVAS',
      },
      {
        control: 'Control 08: Gestión de Registros de Auditoría',
        safeguardCode: '8.9',
        safeguardTitle:
          'Centralizar la recopilación de registros de auditoría (SIEM)',
        assetClass: 'Network',
        securityFunction: 'Detect',
        igGroup: 'IG2',
        currentStatus: 'Planificado',
        technicalEvidence: 'Colector Wazuh / SIEM centralizado',
      },
      {
        control: 'Control 09: Protecciones de Correo y Navegador Web',
        safeguardCode: '9.2',
        safeguardTitle:
          'Utilizar servicios de filtrado DNS para bloquear dominios maliciosos',
        assetClass: 'Network',
        securityFunction: 'Protect',
        igGroup: 'IG1',
        currentStatus: 'Implementado',
        technicalEvidence: 'Filtro DNS corporativo activo',
      },
      {
        control: 'Control 10: Defensas contra Malware',
        safeguardCode: '10.1',
        safeguardTitle:
          'Desplegar y mantener software antimalware administrado centralmente',
        assetClass: 'Devices',
        securityFunction: 'Protect',
        igGroup: 'IG1',
        currentStatus: 'Implementado',
        technicalEvidence: 'Consola EDR/Antimalware al 100%',
      },
      {
        control: 'Control 11: Recuperación de Datos',
        safeguardCode: '11.2',
        safeguardTitle:
          'Realizar copias de seguridad automatizadas de datos dentro del alcance',
        assetClass: 'Data',
        securityFunction: 'Recover',
        igGroup: 'IG1',
        currentStatus: 'Implementado',
        technicalEvidence: 'Jobs diarios automatizados + copia aislada (11.4)',
      },
      {
        control: 'Control 13: Monitoreo y Defensa de la Red',
        safeguardCode: '13.1',
        safeguardTitle:
          'Centralizar las alertas de eventos de seguridad de toda la red',
        assetClass: 'Network',
        securityFunction: 'Detect',
        igGroup: 'IG2',
        currentStatus: 'Pendiente',
        technicalEvidence: 'Correlación de alertas SOC / SIEM',
      },
      {
        control: 'Control 14: Concientización y Capacitación',
        safeguardCode: '14.2',
        safeguardTitle:
          'Capacitar al personal para reconocer ataques de ingeniería social',
        assetClass: 'Users',
        securityFunction: 'Protect',
        igGroup: 'IG1',
        currentStatus: 'Implementado',
        technicalEvidence: 'Campaña trimestral de simulación de phishing',
      },
      {
        control: 'Control 16: Seguridad del Software de Aplicación',
        safeguardCode: '16.12',
        safeguardTitle:
          'Implementar análisis estático y dinámico de código (SAST/DAST)',
        assetClass: 'Software',
        securityFunction: 'Protect',
        igGroup: 'IG3',
        currentStatus: 'Pendiente',
        technicalEvidence: 'Pipeline CI/CD con SonarQube y OWASP ZAP',
      },
      {
        control: 'Control 17: Gestión de Respuesta a Incidentes',
        safeguardCode: '17.1',
        safeguardTitle:
          'Designar personal clave para gestionar el manejo de incidentes',
        assetClass: 'Documentation',
        securityFunction: 'Respond / Govern',
        igGroup: 'IG1',
        currentStatus: 'Implementado',
        technicalEvidence: 'Matriz de escalamiento CSIRT vigente',
      },
      {
        control: 'Control 18: Pruebas de Penetración',
        safeguardCode: '18.5',
        safeguardTitle:
          'Ejecutar pruebas de penetración periódicas internas (Red Team)',
        assetClass: 'Network',
        securityFunction: 'Identify',
        igGroup: 'IG3',
        currentStatus: 'Pendiente',
        technicalEvidence: 'Informe anual de Pentest interno y remediación',
      },
    ],
  },

  // =========================================================================
  // 5. PROCESO PRACTICA (60-90 MIN) - 2 LABORATORIOS INTERACTIVOS
  // =========================================================================
  practica: {
    activity1Title:
      'Actividad 1: Clasificador de Salvaguardas por Grupo de Implementación (IG1, IG2 o IG3)',
    activity1Instructions:
      'Asigna cada una de las 9 salvaguardas técnicas de CIS Controls v8.1 a su Grupo de Implementación mínimo correspondiente (IG1 = Higiene Esencial, IG2 = Empresa Mediana/Compleja, IG3 = Defensa Avanzada).',
    classificationItems: [
      {
        id: 'm3-p1-1',
        number: 1,
        safeguardCode: '1.1',
        statement:
          '1.1 Establecer y mantener un inventario detallado de activos empresariales.',
        correctGroup: 'IG1',
        explanation:
          '¡Correcto! Pertenece a IG1 (Higiene Cibernética Esencial). Ninguna empresa, por pequeña que sea, puede defender sus equipos si no sabe qué dispositivos existen.',
      },
      {
        id: 'm3-p1-2',
        number: 2,
        safeguardCode: '5.2',
        statement:
          '5.2 Utilizar contraseñas únicas para todas las cuentas empresariales.',
        correctGroup: 'IG1',
        explanation:
          '¡Correcto! Pertenece a IG1. Evitar contraseñas reutilizadas frena los ataques masivos de Credential Stuffing con costo mínimo.',
      },
      {
        id: 'm3-p1-3',
        number: 3,
        safeguardCode: '6.3',
        statement:
          '6.3 Exigir autenticación multifactor (MFA) para aplicaciones expuestas externamente.',
        correctGroup: 'IG1',
        explanation:
          '¡Correcto! Pertenece a IG1. El MFA en correo corporativo y aplicaciones web es una salvaguarda esencial obligatoria para cualquier organización.',
      },
      {
        id: 'm3-p1-4',
        number: 4,
        safeguardCode: '11.2',
        statement:
          '11.2 Realizar copias de seguridad automatizadas de los datos dentro del alcance.',
        correctGroup: 'IG1',
        explanation:
          '¡Correcto! Pertenece a IG1. Los respaldos automatizados (junto con su aislamiento 11.4) constituyen el salvavidas fundamental frente a ransomware y fallas de hardware.',
      },
      {
        id: 'm3-p1-5',
        number: 5,
        safeguardCode: '7.5',
        statement:
          '7.5 Realizar escaneos automatizados de vulnerabilidades internas de forma periódica.',
        correctGroup: 'IG2',
        explanation:
          '¡Correcto! Pertenece a IG2. A diferencia de los parches básicos de IG1 (7.3/7.4), operar escáneres internos periódicos requiere infraestructura dedicada y personal de TI para analizar hallazgos.',
      },
      {
        id: 'm3-p1-6',
        number: 6,
        safeguardCode: '8.9',
        statement:
          '8.9 Centralizar la recopilación de registros de auditoría (SIEM / Log Collector).',
        correctGroup: 'IG2',
        explanation:
          '¡Correcto! Pertenece a IG2. En IG1 basta con habilitar logs locales en los equipos (8.2); centralizarlos en un SIEM corresponde al nivel IG2.',
      },
      {
        id: 'm3-p1-7',
        number: 7,
        safeguardCode: '13.1',
        statement:
          '13.1 Centralizar las alertas de eventos de seguridad de toda la red.',
        correctGroup: 'IG2',
        explanation:
          '¡Correcto! Pertenece a IG2 (Control 13 no tiene salvaguardas en IG1). Centralizar alertas de red y telemetría requiere madurez operativa de equipo TI/SOC.',
      },
      {
        id: 'm3-p1-8',
        number: 8,
        safeguardCode: '16.12',
        statement:
          '16.12 Implementar análisis estático y dinámico de código (SAST/DAST) en desarrollo propio.',
        correctGroup: 'IG3',
        explanation:
          '¡Correcto! Pertenece a IG3. Integrar pipelines automatizados SAST/DAST en desarrollo propio exige equipos especializados de AppSec/DevSecOps.',
      },
      {
        id: 'm3-p1-9',
        number: 9,
        safeguardCode: '18.5',
        statement:
          '18.5 Ejecutar pruebas de penetración periódicas internas y externas (Red Team / Pentest).',
        correctGroup: 'IG3',
        explanation:
          '¡Correcto! Pertenece a IG3. El pentesting interno continuo y ejercicios Red Team evalúan la resiliencia de defensas maduras ante adversarios sofisticados.',
      },
    ],
    activity2Title:
      'Actividad 2: Secuenciador Cronológico — Ordenar las acciones prioritarias de defensa técnica para un servidor recién desplegado según CIS',
    activity2Instructions:
      'Un equipo de infraestructura acaba de aprovisionar un nuevo servidor corporativo. Utiliza los botones Subir (↑) / Bajar (↓) para ordenar las 5 acciones en la secuencia lógica de defensa CIS v8.1 (del Paso 1 al Paso 5) y verifica tu secuencia.',
    sequencerCorrectSteps: [
      {
        id: 'seq-1',
        correctOrder: 1,
        controlsRef: 'Controles 01 y 02',
        title:
          'Registrar el servidor en el inventario oficial de activos y software (Controles 01 y 02).',
        rationale:
          'Paso 1 obligatorio: Todo activo debe quedar inventariado desde su nacimiento (hardware/VM y software base) para no convertirse en un servidor fantasma sin dueño.',
      },
      {
        id: 'seq-2',
        correctOrder: 2,
        controlsRef: 'Control 04',
        title:
          'Aplicar la línea base de configuración segura (hardening), deshabilitando puertos y servicios innecesarios (Control 04).',
        rationale:
          'Paso 2: Antes de exponer el servidor o crear múltiples accesos, se reduce la superficie de ataque aplicando CIS Benchmarks y firewall local.',
      },
      {
        id: 'seq-3',
        correctOrder: 3,
        controlsRef: 'Controles 05 y 06',
        title:
          'Configurar cuentas administrativas nominativas, principio de mínimo privilegio y MFA (Controles 05 y 06).',
        rationale:
          'Paso 3: Se eliminan credenciales por defecto, se restringe el acceso administrativo mediante cuentas dedicadas y MFA antes de ponerlo en operación.',
      },
      {
        id: 'seq-4',
        correctOrder: 4,
        controlsRef: 'Controles 07, 08 y 10',
        title:
          'Instalar el agente antimalware/EDR, activar el registro de logs y aplicar parches críticos (Controles 07, 08 y 10).',
        rationale:
          'Paso 4: Se dota al servidor de protección activa contra malware, telemetría de auditoría y remediación de vulnerabilidades conocidas antes de cargar datos reales.',
      },
      {
        id: 'seq-5',
        correctOrder: 5,
        controlsRef: 'Control 11',
        title:
          'Incorporar el servidor a la política de copias de seguridad automatizadas e inmutables (Control 11).',
        rationale:
          'Paso 5: Con el servidor endurecido y listo para operar datos productivos, se garantiza la resiliencia y recuperación ante cualquier falla o ataque.',
      },
    ],
  },

  // =========================================================================
  // 6. PROCESO APLICA (30-60 MIN) - SIMULADOR CONTROL DE ACCESO A LA RED
  // =========================================================================
  aplica: {
    title:
      'Simulador de Control de Acceso a la Red: Contención ante BYOD no autorizado',
    subtitle:
      'Diagnostica el vector de exposición física/Wi-Fi y selecciona los dos controles CIS v8.1 inmediatos para cerrar la brecha.',
    situation:
      'Una empresa descubre que empleados conectan computadoras personales (BYOD no autorizado) a la red corporativa cableada y Wi-Fi sin autorización ni parches de seguridad al día.',
    challengeQuestion:
      '¿Cuáles son los dos controles CIS que se deben activar de inmediato para mitigar este vector de ataque?',
    clinicalContextDetails: [
      {
        label: 'Vector de Intrusión Interna',
        detail:
          'Equipos personales (BYOD) sin cifrado, sin parches críticos y posiblemente infectados con malware doméstico se conectan directamente a la LAN y Wi-Fi internas.',
      },
      {
        label: 'Fallo de Control Detectado',
        detail:
          'Los puertos de red Ethernet y la red Wi-Fi aceptan cualquier dispositivo sin validar inventario ni identidad del equipo, y los equipos corporativos carecen de defensa centralizada uniforme.',
      },
      {
        label: 'Riesgo de Propagación',
        detail:
          'Movimiento lateral instantáneo de gusanos o ransomware desde un equipo personal hacia servidores de archivos corporativos internos.',
      },
    ],
    options: [
      {
        id: 'mod3-aplica-opt-a',
        optionCode: 'Opción A',
        title: 'Controles Avanzados IG3 (Pentesting y Código Intranet)',
        description:
          'Contratar pruebas de penetración externas (Control 18) y auditar el código fuente de la intranet (Control 16).',
        isCorrect: false,
        immediateFeedback:
          'Decisión Incorrecta: Los Controles 16 y 18 son salvaguardas avanzadas (IG2/IG3) enfocadas en desarrollo de software y simulación externa, pero no bloquean la conexión física o Wi-Fi de laptops personales no autorizadas ni detienen malware en los endpoints internos.',
        controlsMapped: [
          'Control 18 (No impide conexiones BYOD)',
          'Control 16 (No mitiga puertos cableados/Wi-Fi abiertos)',
        ],
      },
      {
        id: 'mod3-aplica-opt-b',
        optionCode: 'Opción B',
        title:
          'Decisión Correcta: Control 01 (Inventario y Bloqueo 802.1X/MAC) + Control 10 (Defensas contra Malware)',
        description:
          'Activar el Control 01 (Inventario y Control de Activos Empresariales) mediante control de acceso a la red (802.1X / filtrado de direcciones MAC para bloquear equipos no registrados) y el Control 10 (Defensas contra Malware) con agentes administrados centralmente en los equipos corporativos autorizados.',
        isCorrect: true,
        immediateFeedback:
          '¡Decisión Óptima de Ciberdefensa! Has cerrado el acceso de red a hardware desconocido mediante Control 01 (NAC/802.1X) y blindado los endpoints autorizados con Control 10.',
        consequenceCard:
          'Se bloquea automáticamente el acceso de hardware no identificado a la red interna y se previene la propagación de código malicioso desde equipos sin parches.',
        explanationCard:
          'No se puede proteger lo que no se conoce; el inventario y control activo de activos (Control 01) combinado con defensas antimalware administradas (Control 10) constituye la primera línea de contención técnica.',
        controlsMapped: [
          'Control 01 (1.1 / 1.2 / 1.4): Inventario y control de acceso a red 802.1X / NAC',
          'Control 10 (10.1 / 10.2 / 10.5): Defensas contra malware administradas centralmente',
          'Complemento Control 12: Aislamiento de red de invitados fuera de la LAN corporativa',
        ],
      },
      {
        id: 'mod3-aplica-opt-c',
        optionCode: 'Opción C',
        title: 'Solicitud Amable por Correo sin Bloqueo Técnico',
        description:
          'Enviar un correo solicitando amablemente a los empleados que instalen un antivirus gratuito en sus laptops personales antes de conectarlas.',
        isCorrect: false,
        immediateFeedback:
          'Decisión Incorrecta: Delegar la seguridad corporativa a la buena voluntad de los usuarios en equipos personales no administrados viola el principio prescriptivo de CIS Controls. Un solo empleado que ignore el correo o tenga malware oculto comprometerá la red interna completa.',
        controlsMapped: [
          'Sin control técnico de acceso a red (Falla Control 01)',
          'Sin gestión centralizada de antimalware (Falla Control 10)',
        ],
      },
    ],
  },

  // =========================================================================
  // 7. PROCESO COMPRUEBA (15-30 MIN) - 10 PREGUNTAS
  // =========================================================================
  comprueba: {
    title: 'Cuestionario Formativo del Módulo 3: CIS Controls v8.1 (10 Preguntas)',
    subtitle:
      'Evaluación interactiva sin penalización sobre los 18 Controles, las 153 Salvaguardas, la escalera IG1/IG2/IG3 y las actualizaciones de CIS v8.1.',
    passingScore: 70,
    questions: [
      {
        id: 'm3-q1',
        number: 1,
        type: 'Opción Múltiple',
        category: 'Recordar/Comprender (30%)',
        question:
          '¿Cuántos Controles Críticos y cuántas Salvaguardas técnicas medibles componen el estándar CIS Controls v8.1?',
        options: [
          '20 Controles y 171 Salvaguardas.',
          '18 Controles Críticos desglosados en 153 Salvaguardas técnicas medibles.',
          '93 Controles en 4 Dominios.',
          '6 Funciones y 22 Categorías.',
        ],
        correctIndex: 1,
        explanation:
          'CIS Controls v8.1 consta exactamente de 18 Controles Críticos y 153 Salvaguardas técnicas (con la misma numeración que v8.0).',
      },
      {
        id: 'm3-q2',
        number: 2,
        type: 'Opción Múltiple',
        category: 'Recordar/Comprender (30%)',
        question:
          '¿Cuál es la cantidad exacta de salvaguardas en cada Grupo de Implementación (IG1, IG2 e IG3) bajo el modelo acumulativo de CIS v8.1?',
        options: [
          'IG1: 56 salvaguardas | IG2: 130 acumuladas (+74) | IG3: 153 acumuladas (+23).',
          'IG1: 10 salvaguardas | IG2: 50 acumuladas | IG3: 93 acumuladas.',
          'IG1: 153 salvaguardas | IG2: 56 | IG3: 23.',
          'Todos los grupos tienen exactamente 51 salvaguardas independientes.',
        ],
        correctIndex: 0,
        explanation:
          'Los grupos son acumulativos: IG1 contiene las 56 salvaguardas de higiene cibernética esencial; IG2 suma 74 más (130 en total); e IG3 suma 23 más (153 en total).',
      },
      {
        id: 'm3-q3',
        number: 3,
        type: 'Verdadero / Falso Argumentado',
        category: 'Recordar/Comprender (30%)',
        question:
          'VERDADERO O FALSO: "Los dos primeros controles de CIS v8.1 (Control 01 y Control 02) se dedican exclusivamente al inventario y control de activos empresariales (hardware) y software."',
        options: [
          'Verdadero, porque no se puede defender, parchar ni monitorear aquello que la organización no sabe que está conectado o instalado.',
          'Falso, los dos primeros controles de CIS v8.1 son Red Team y Desarrollo Seguro.',
        ],
        correctIndex: 0,
        explanation:
          '¡Verdadero! Control 01 (Inventario de Activos Empresariales, 5 salvaguardas) y Control 02 (Inventario de Software, 7 salvaguardas) sientan la base de visibilidad indispensable.',
      },
      {
        id: 'm3-q4',
        number: 4,
        type: 'Opción Múltiple',
        category: 'Interpretar/Aplicar (40%)',
        question:
          '¿Qué mejora estratégica incorporó CIS Controls v8.1 (2024) para alinearse directamente con NIST CSF 2.0?',
        options: [
          'Eliminó el Control 11 de recuperación de datos.',
          'Incorporó la función de seguridad "Govern" (Gobernar) en el mapeo de salvaguardas y refinó las Clases de Activos (Asset Classes) y entornos cloud.',
          'Renumeró los controles del 1 al 500.',
          'Reemplazó las contraseñas únicas por notas adhesivas en el monitor.',
        ],
        correctIndex: 1,
        explanation:
          'CIS v8.1 mantuvo intactos los 18 controles y 153 salvaguardas, pero agregó la función Govern en las propiedades de las salvaguardas y refinó las Clases de Activos (incluyendo Documentation) y aclaraciones cloud/remotas.',
      },
      {
        id: 'm3-q5',
        number: 5,
        type: 'Opción Múltiple',
        category: 'Interpretar/Aplicar (40%)',
        question:
          '¿A qué Grupo de Implementación (IG) pertenecen la centralización de registros de auditoría en SIEM (8.9) y los escaneos automatizados internos de vulnerabilidades (7.5)?',
        options: [
          'IG1 (Higiene Esencial)',
          'IG2 (Organizaciones medianas o complejas con equipo dedicado de TI)',
          'IG3 exclusivamente',
          'No forman parte de CIS Controls v8.1',
        ],
        correctIndex: 1,
        explanation:
          'Tanto la salvaguarda 7.5 como la 8.9 se incorporan a partir de IG2, ya que requieren herramientas dedicadas y personal técnico para gestionar escaneos y correlacionar logs centralizados.',
      },
      {
        id: 'm3-q6',
        number: 6,
        type: 'Opción Múltiple',
        category: 'Interpretar/Aplicar (40%)',
        question:
          'Según la Salvaguarda 11.4 de CIS Controls v8.1 (nivel IG1), ¿qué característica clave debe tener al menos una instancia de copia de seguridad?',
        options: [
          'Estar guardada en la misma carpeta compartida abierta donde trabajan todos los usuarios.',
          'Mantenerse aislada (air-gapped / inmutable) de los activos productivos para que un ransomware no pueda cifrarla ni borrarla.',
          'Imprimirse en papel cada mes.',
          'Deshabilitar todo cifrado y control de acceso.',
        ],
        correctIndex: 1,
        explanation:
          'La salvaguarda 11.4 (IG1) exige mantener al menos una instancia de los datos de recuperación aislada para garantizar que el ransomware no destruya los respaldos.',
      },
      {
        id: 'm3-q7',
        number: 7,
        type: 'Verdadero / Falso Argumentado',
        category: 'Interpretar/Aplicar (40%)',
        question:
          'VERDADERO O FALSO: "Exigir autenticación multifactor (MFA) para aplicaciones externas (6.3), acceso remoto (6.4) y acceso administrativo (6.5) es una exigencia avanzada exclusiva de IG3."',
        options: [
          'Verdadero, las pymes en IG1 no requieren MFA.',
          'Falso, las salvaguardas 6.3, 6.4 y 6.5 forman parte de IG1 (Higiene Cibernética Esencial) y aplican a toda organización sin importar su tamaño.',
        ],
        correctIndex: 1,
        explanation:
          '¡Falso! Las salvaguardas 6.3, 6.4 y 6.5 son parte de las 56 salvaguardas de IG1 porque neutralizan el robo de credenciales y phishing.',
      },
      {
        id: 'm3-q8',
        number: 8,
        type: 'Opción Múltiple',
        category: 'Resolver Casos (30%)',
        question:
          'Una pyme con presupuesto muy ajustado busca frenar phishing y ransomware. ¿Qué conjunto de acciones representa correctamente la estrategia IG1?',
        options: [
          'Comprar un SIEM de $100,000 y contratar un Red Team externo (IG3).',
          'Inventariar activos y software (01-02), aplicar parches automáticos (07), activar MFA (06), antimalware (10) y mantener respaldos aislados (11).',
          'Redactar únicamente un manual de políticas de 200 páginas sin cambios técnicos.',
          'Desconectar a toda la empresa de internet permanentemente.',
        ],
        correctIndex: 1,
        explanation:
          'IG1 prioriza medidas de altísimo impacto preventivo y bajo costo operativo para neutralizar los vectores más comunes.',
      },
      {
        id: 'm3-q9',
        number: 9,
        type: 'Opción Múltiple',
        category: 'Resolver Casos (30%)',
        question:
          'Una empresa descubre que colaboradores conectan laptops personales (BYOD no autorizado) sin parches a la red cableada y Wi-Fi corporativa. ¿Qué dos controles CIS deben activarse de inmediato?',
        options: [
          'Control 18 (Pruebas de penetración) y Control 16 (Código fuente intranet).',
          'Control 01 (Inventario y control de activos mediante 802.1X/NAC para bloquear hardware no registrado) y Control 10 (Defensas contra malware administradas centralmente).',
          'Control 14 únicamente mediante un correo amable.',
          'Eliminar todas las contraseñas de Wi-Fi.',
        ],
        correctIndex: 1,
        explanation:
          'El Control 01 (con NAC/802.1X) bloquea equipos no autorizados en la red y el Control 10 protege activamente los endpoints corporativos frente a código malicioso.',
      },
      {
        id: 'm3-q10',
        number: 10,
        type: 'Opción Múltiple',
        category: 'Resolver Casos (30%)',
        question:
          'Al desplegar un nuevo servidor corporativo desde cero según el orden lógico de CIS v8.1, ¿qué debe hacerse inmediatamente DESPUÉS de registrarlo en el inventario (Controles 01 y 02) y aplicarle configuración segura/hardening (Control 04)?',
        options: [
          'Configurar cuentas administrativas nominativas, mínimo privilegio y MFA (Controles 05 y 06), seguido de antimalware/logs/parches (07, 08, 10) y backups (11).',
          'Publicarlo directo a internet sin contraseñas para probar si alguien entra.',
          'Ejecutar primero pruebas Red Team (Control 18) antes de crear cuentas o instalar parches.',
          'Borrar el registro del servidor del inventario.',
        ],
        correctIndex: 0,
        explanation:
          'La secuencia lógica CIS asegura visibilidad (01-02) → hardening (04) → identidades y MFA (05-06) → parches/logs/EDR (07-08-10) → copias de seguridad (11).',
      },
    ],
  },

  // =========================================================================
  // 8. PROCESO RECUERDA (5-10 MIN)
  // =========================================================================
  recuerda: {
    title:
      'Infografía Resumen Interactiva: Los 5 Pilares Maestros de CIS Controls v8.1',
    subtitle:
      'Haz clic en cada uno de los 5 pilares para consolidar tu dominio de la ciberdefensa práctica y priorizada antes de completar el Módulo 3.',
    pillars: [
      {
        id: 'm3-pilar-1',
        number: 1,
        badge: 'Pilar 1 • 18 Controles y 153 Salvaguardas',
        title:
          'CIS v8.1 consta de 18 Controles Críticos y 153 Salvaguardas técnicas medibles',
        coreStatement:
          'CIS Controls v8.1 organiza la ciberdefensa en 18 Controles Críticos desglosados en 153 Salvaguardas técnicas medibles y accionables, además de incorporar en v8.1 la función Govern y el refinamiento de Asset Classes.',
        keyMetrics: '18 Controles • 153 Salvaguardas • Compatible 100% con v8.0',
        auditTakeaway:
          'Cada salvaguarda tiene un propósito claro, una Clase de Activo asignada y una Función de Seguridad (incluyendo Govern).',
        checklist: [
          'Numeración intacta respecto a v8.0 para migraciones sin fricción',
          'Alineación nativa con NIST CSF 2.0 mediante la etiqueta Govern',
          'Cobertura desde hardware/software hasta nube, DevSecOps y pentesting',
        ],
      },
      {
        id: 'm3-pilar-2',
        number: 2,
        badge: 'Pilar 2 • Higiene Fundamental IG1',
        title:
          'IG1 (56 salvaguardas) representa la "Higiene Cibernética Fundamental" obligatoria',
        coreStatement:
          'IG1 (56 salvaguardas) representa la "Higiene Cibernética Fundamental" obligatoria para toda entidad, sin importar su tamaño o presupuesto, antes de escalar hacia IG2 (130 acumuladas) e IG3 (153 totales).',
        keyMetrics: 'IG1: 56 | IG2: 130 (+74) | IG3: 153 (+23)',
        auditTakeaway:
          'Nunca se debe invertir en herramientas IG3 complejas si no se han cerrado primero las 56 salvaguardas básicas de IG1.',
        checklist: [
          'IG1: Pymes y punto de partida obligatorio para grandes empresas',
          'IG2: Automatización, escaneo de vulnerabilidades y SIEM centralizado',
          'IG3: Defensa avanzada (SAST/DAST, monitoreo continuo, Red Team)',
        ],
      },
      {
        id: 'm3-pilar-3',
        number: 3,
        badge: 'Pilar 3 • Inventario Primero',
        title:
          'Los primeros dos controles se enfocan exclusivamente en inventario (Hardware y Software)',
        coreStatement:
          'Los primeros dos controles se enfocan exclusivamente en inventario: Control 01 (Activos de Hardware / Empresariales: 5 salvaguardas) y Control 02 (Activos de Software: 7 salvaguardas), eliminando el Shadow IT y dispositivos BYOD no autorizados.',
        keyMetrics: 'Control 01 (Hardware) + Control 02 (Software) = Visibilidad Total',
        auditTakeaway:
          'No se puede proteger, parchar ni controlar en red aquello que la organización desconoce que existe.',
        checklist: [
          '1.1 y 2.1 Inventarios detallados desde IG1',
          'Control de acceso a red (802.1X / NAC) para bloquear equipos desconocidos',
          'Allowlisting (2.5) en IG2 para impedir ejecución de malware o software pirata',
        ],
      },
      {
        id: 'm3-pilar-4',
        number: 4,
        badge: 'Pilar 4 • Prescriptivo y Técnico',
        title:
          'Es un estándar altamente prescriptivo y técnico ("qué hacer y cómo medirlo")',
        coreStatement:
          'A diferencia de marcos de alto nivel, CIS Controls v8.1 es altamente prescriptivo y técnico ("qué hacer exactamente y cómo medirlo"), siendo la herramienta predilecta de los equipos operativos de TI, Infraestructura y SOC.',
        keyMetrics: 'Complemento técnico de ISO 27001 y NIST CSF 2.0',
        auditTakeaway:
          'Mientras NIST CSF 2.0 responde QUÉ resultado lograr, CIS v8.1 (junto con CIS Benchmarks) indica CÓMO configurarlo en el sistema.',
        checklist: [
          'Reglas concretas: deshabilitar cuentas tras 45 días (5.3)',
          'MFA en apps externas (6.3), remoto (6.4) y admin (6.5)',
          'Herramienta gratuita CIS CSAT para medir avance porcentual',
        ],
      },
      {
        id: 'm3-pilar-5',
        number: 5,
        badge: 'Pilar 5 • Reducción de Exposición',
        title:
          'Reduce sustancialmente la superficie de exposición ante phishing y ransomware',
        coreStatement:
          'La aplicación disciplinada de CIS v8.1 reduce drásticamente la superficie de exposición frente a los vectores más habituales como phishing, robo de credenciales y ransomware mediante defensa en profundidad.',
        keyMetrics: 'MFA (06) + Parches (07) + Antimalware (10) + Backups Aislados (11)',
        auditTakeaway:
          'La combinación de cuentas privilegiadas separadas, MFA, filtrado DNS, EDR y copias inmutables frustra el 80%+ de ataques automatizados.',
        checklist: [
          'Filtrado DNS (9.2) y capacitación contra phishing (14.2)',
          'Antimalware administrado sin autorun USB (10.1-10.3)',
          'Copias de respaldo automatizadas e inmutables (11.2 y 11.4)',
        ],
      },
    ],
  },
};

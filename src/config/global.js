export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad: 'El concepto de organización y la teoría de organizaciones',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: '1. Evolución histórica de las teorías organizacionales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Teorías organizacionales',
            hash: 't_1_1',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Título tema',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Escuelas de la administración',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Enfoques de la administración',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Transición de enfoques mecanicistas a sistémicos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Polanco, Y. J. Santos, P. & Cruz, G. A. D. L. (2020). Teoría y estructura organizacional: ( ed.). Universidad Abierta para Adultos (UAPA). ',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/175883?page=7 ',
    },
    {
      referencia:
        'Sanabria, M. (Il.) & Reyes Ortiz, G. E. (Il.). (2024). La estrategia organizacional: aproximaciones a la teoría y la práctica de este campo: (1 ed.). Editorial Universidad del Rosario. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/273464',
    },
    {
      referencia:
        'Polanco, Y. J. Santos, P. & Cruz, G. A. D. L. (2020). Teoría y estructura organizacional: ( ed.). Universidad Abierta para Adultos (UAPA). ',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/175883?page=7 ',
    },
    {
      referencia:
        'Daniel Zalazar, R. J. (2012). Introducción a la administración: paradigmas en las organizaciones: ( ed.). B - EUMED. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/51722 ',
    },
    {
      referencia:
        'Sanchez Garcia, J. C. (2003). La aproximación contingente en la teoría organizacional: ¿hacia un nuevo enfoque?: ( ed.). Colegio Oficial de la Psicología de Madrid. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/21256?page=3 ',
    },
    {
      referencia:
        'Malavé, J. (1999). Prácticas organizacionales: una perspectiva de procesos en la teoría de la organización: ( ed.). D - Ediciones IESA.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/119383 ',
    },
  ],
  glosario: [
    {
      termino: 'Administración Científica',
      significado:
        'La administración científica buscaba optimizar la eficiencia en el trabajo a través de estudios de tiempos y movimientos. Promovía la especialización de tareas y la supervisión estricta.',
    },
    {
      termino: 'Burocracia',
      significado:
        'Describe un sistema de administración basado en reglas, jerarquía, procedimientos formales y especialización. Establece una estructura organizacional rígida y altamente controlada.',
    },
    {
      termino: 'Enfoque Contingencial',
      significado:
        'No existe una única forma de organizar; la efectividad depende de la adaptación al entorno y las condiciones específicas. Se enfatiza la flexibilidad y el ajuste a las circunstancias.',
    },
    {
      termino: 'Humanismo',
      significado:
        'Corriente que pone al ser humano en el centro de las organizaciones, priorizando sus necesidades, emociones y relaciones sociales. En el ámbito organizacional, se enfoca en la motivación, el bienestar y el desarrollo personal de los trabajadores, destacando la importancia de los factores humanos en el éxito empresarial.',
    },
    {
      termino: 'Mecanicismo',
      significado:
        'Es un enfoque que considera a las organizaciones como máquinas, donde cada parte (individual o proceso) tiene una función específica y predefinida. Este enfoque promueve la eficiencia, la estandarización y el control estricto, enfatizando la jerarquía y la especialización de tareas. Está asociado a las teorías clásicas y científicas de la administración.',
    },
    {
      termino: 'Organización',
      significado:
        'Conjunto de personas, recursos y procesos que interactúan de manera estructurada para alcanzar objetivos comunes. Las organizaciones pueden adoptar diversas formas y estructuras, desde jerárquicas hasta flexibles, dependiendo de su propósito y entorno.',
    },
    {
      termino: 'Organizaciones Postmodernas',
      significado:
        'Desafía los enfoques tradicionales y aboga por estructuras más flexibles, horizontales y centradas en la creatividad y la innovación en respuesta a entornos cambiantes.',
    },
    {
      termino: 'Relaciones Humanas',
      significado:
        'Enfatiza la importancia de los factores humanos y sociales en el lugar de trabajo. Los estudios de Hawthorne revelaron que la motivación y la satisfacción del empleado son esenciales para la productividad.',
    },
    {
      termino: 'Teoría',
      significado:
        'Conjunto de ideas, principios y conceptos interrelacionados que explican un fenómeno o conjunto de fenómenos. En el contexto organizacional, las teorías ofrecen marcos analíticos para comprender y mejorar el diseño, el comportamiento y el desempeño de las organizaciones.',
    },
    {
      termino: 'Transición',
      significado:
        'Proceso de cambio o transformación de un estado, enfoque o paradigma hacia otro. En el ámbito organizacional, la transición puede referirse al paso de enfoques tradicionales (mecanicistas) a enfoques más modernos (sistémicos o humanistas), adaptándose a los cambios en el entorno y las necesidades sociales.',
    },
  ],
}

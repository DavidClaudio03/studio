import type { NavLink } from '@/types';

export const navLinks: NavLink[] = [
  { href: '/', label: 'Activación', icon: 'PlayCircle' },
  { href: '/conecta', label: 'Fundamentos', icon: 'FileText' },
  { href: '/explora', label: 'Exploración', icon: 'Search' },
  { href: '/interactua', label: 'Laboratorio IA', icon: 'Bot' },
  { href: '/reto-final', label: 'Evaluación', icon: 'Trophy' },
];

export const urls = {
  infographic: 'https://drive.google.com/file/d/1Hzw-rGoeDs27QnZBgv-JkMIsKbGbBcLo/view?usp=sharing',
  activationAudio: 'https://drive.google.com/file/d/16_LenNt17G-e6ebyqy060L_3uNkXcZ7u/view?usp=sharing',
  compendium: 'https://docs.google.com/document/d/16_LenNt17G-e6ebyqy060L_3uNkXcZ7u/preview',
  canvaSlide1: 'https://www.canva.com/design/DAHAkKTcoQo/ogIciyh0j9XeYni7ZlzxjQ/view?embed',
  canvaSlide2: 'https://www.canva.com/design/DAHBvOz_8Vc/b8jBKub3e0lFIUcn1EYX_A/view?embed',
  finalChallengeGuide: 'https://docs.google.com/document/d/1rv1ugJCnqXlahkfsHOycTkueTkc7Up9i/preview',
};

export const videos = [
  { id: 1, src: 'https://drive.google.com/file/d/1-bQrSwSUTPQ1KocHeDODHJSXT4w7U9VA/view?usp=sharing', title: 'Importancia de las plantas', imageId: 'video1' },
  { id: 2, src: 'https://drive.google.com/file/d/1e_MfNPij1QOIlwMd5yrBvHR94e0qtLJW/view?usp=sharing', title: 'Partes de las plantas', imageId: 'video2' },
  { id: 3, src: 'https://drive.google.com/file/d/1TuWn973yEoEddPn_m6V-5CTmYbKHd8s8/view?usp=sharing', title: 'Ciclo de las plantas', imageId: 'video3' },
  { id: 4, src: 'https://drive.google.com/file/d/1rv1ugJCnqXlahkfsHOycTkueTkc7Up9i/view?usp=sharing', title: 'Animales Invertebrados', imageId: 'video4' },
  { id: 5, src: 'https://drive.google.com/file/d/1YINqtGlnBtXyHNeu5M4dFocyZXwElLN0/view?usp=sharing', title: 'Animales Vertebrados', imageId: 'video5' },
];


export const plantFlashcards = [
  { id: 'raiz', name: 'Raíz', function: 'Absorbe agua y nutrientes del suelo, ancla la planta y almacena reservas de alimento.' },
  { id: 'tallo', name: 'Tallo', function: 'Soporta las hojas, flores y frutos; transporta agua y nutrientes desde la raíz a las hojas, y el alimento producido en las hojas al resto de la planta.' },
  { id: 'hoja', name: 'Hoja', function: 'Principal órgano de la fotosíntesis, donde la planta produce su alimento (glucosa) utilizando luz solar, agua y dióxido de carbono. También regula la transpiración.' },
  { id: 'flor', name: 'Flor', function: 'Estructura reproductiva de las plantas angiospermas. Su función es producir semillas a través de la reproducción sexual (polinización y fecundación).' },
  { id: 'fruto', name: 'Fruto', function: 'Protege las semillas y ayuda en su dispersión. Se desarrolla a partir del ovario de la flor después de la fecundación.' },
  { id: 'semilla', name: 'Semilla', function: 'Contiene el embrión de una nueva planta y una reserva de alimento, protegidos por una cubierta. Germina bajo condiciones adecuadas para dar origen a una nueva planta.' },
];

export const animalData = [
  { id: 'leon', name: 'León', type: 'Vertebrado', imageId: 'animal1', explanation: 'Correcto. Los leones tienen una columna vertebral que les proporciona soporte estructural.' },
  { id: 'medusa', name: 'Medusa', type: 'Invertebrado', imageId: 'animal2', explanation: 'Correcto. Las medusas no poseen columna vertebral; su cuerpo es gelatinoso y soportado por el agua.' },
  { id: 'aguila', name: 'Águila', type: 'Vertebrado', imageId: 'animal3', explanation: 'Correcto. Las águilas son aves y, como todos los vertebrados, tienen un esqueleto interno con columna vertebral.' },
  { id: 'pulpo', name: 'Pulpo', type: 'Invertebrado', imageId: 'animal4', explanation: 'Correcto. Los pulpos son moluscos sin esqueleto interno. Su cuerpo blando les permite una gran flexibilidad.' },
  { id: 'serpiente', name: 'Serpiente', type: 'Vertebrado', imageId: 'animal5', explanation: 'Correcto. A pesar de su cuerpo flexible, las serpientes tienen una columna vertebral muy larga compuesta de muchas vértebras.' },
];

export const aiExperts = [
    { id: 'learning-assistant', name: 'Tutor General', icon: 'BrainCircuitIcon', description: 'Tu asistente principal para cualquier duda general.' },
    { id: 'eleven-labs', name: 'Asistente de Voz', icon: 'Bot', description: 'Explora temas complejos conversando conmigo.' },
    { id: 'botany-expert', name: 'Experto en Botánica', icon: 'LeafIcon', description: 'Pregúntame sobre el reino de las plantas.' },
    { id: 'fauna-specialist', name: 'Especialista en Fauna', icon: 'DnaIcon', description: 'Analicemos la diversidad y adaptaciones del reino animal.' },
    { id: 'science-tutor', name: 'Tutor de Ciencias', icon: 'AtomIcon', description: 'Profundicemos en los principios de la física y la química.' },
];


export const rubricCriteria = [
  { criterion: 'Claridad y Precisión', excellent: 'Presenta conceptos con total claridad y sin errores.', good: 'Presenta conceptos de forma clara con errores menores.', needsImprovement: 'La presentación de conceptos es confusa o tiene errores significativos.' },
  { criterion: 'Uso de Recursos', excellent: 'Integra creativamente todos los recursos del módulo.', good: 'Utiliza la mayoría de los recursos del módulo de forma adecuada.', needsImprovement: 'No utiliza o utiliza incorrectamente los recursos del módulo.' },
  { criterion: 'Análisis Crítico', excellent: 'Demuestra un análisis profundo y original del tema.', good: 'Realiza un análisis correcto pero superficial.', needsImprovement: 'No hay evidencia de análisis crítico.' },
  { criterion: 'Presentación', excellent: 'El formato es innovador, organizado y estéticamente agradable.', good: 'El formato es claro y organizado.', needsImprovement: 'El formato es desorganizado o difícil de seguir.' },
];

export const quizData = [
    {
      level: 1,
      title: 'Nivel 1: Partes de la Planta',
      questions: [
        {
          id: 'q1',
          text: '¿Qué parte de la planta es responsable de absorber agua y nutrientes del suelo?',
          options: ['Hoja', 'Tallo', 'Raíz', 'Flor'],
          correctIndex: 2,
          explanation: '¡Correcto! La raíz ancla la planta y absorbe el agua y los nutrientes esenciales para su crecimiento.'
        },
      ],
    },
    {
      level: 2,
      title: 'Nivel 2: Fotosíntesis',
      questions: [
        {
          id: 'q2',
          text: '¿En qué parte de la planta ocurre principalmente la fotosíntesis?',
          options: ['Raíz', 'Flor', 'Tallo', 'Hoja'],
          correctIndex: 3,
          explanation: '¡Así es! Las hojas son como los paneles solares de la planta, capturando la luz del sol para producir su alimento.'
        },
      ],
    },
    {
      level: 3,
      title: 'Nivel 3: Ciclo de Vida',
      questions: [
        {
          id: 'q3',
          text: '¿Qué estructura de la planta se convierte en el fruto?',
          options: ['El pétalo', 'El ovario de la flor', 'La hoja', 'El tallo'],
          correctIndex: 1,
          explanation: '¡Exacto! Después de la polinización, el ovario de la flor se desarrolla para convertirse en el fruto, que protege las semillas.'
        },
      ],
    },
    {
      level: 4,
      title: 'Nivel 4: Vertebrados',
      questions: [
        {
          id: 'q4',
          text: '¿Cuál de estos animales es vertebrado, es decir, tiene columna vertebral?',
          options: ['Medusa', 'Pulpo', 'Serpiente', 'Lombriz'],
          correctIndex: 2,
          explanation: '¡Muy bien! Aunque no tiene patas, la serpiente tiene una larga y flexible columna vertebral.'
        },
      ],
    },
    {
      level: 5,
      title: 'Nivel 5: Invertebrados',
      questions: [
        {
          id: 'q5',
          text: '¿Cuál de las siguientes características pertenece a los animales invertebrados?',
          options: ['Tienen esqueleto interno', 'No tienen columna vertebral', 'Todos tienen 6 patas', 'Son siempre pequeños'],
          correctIndex: 1,
          explanation: '¡Perfecto! La característica principal que define a los invertebrados es la ausencia de una columna vertebral.'
        },
      ],
    },
  ];

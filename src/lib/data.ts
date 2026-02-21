import type { NavLink } from '@/types';
import { BrainCircuitIcon } from '@/components/icons/BrainCircuitIcon';
import { LeafIcon } from '@/components/icons/LeafIcon';
import { DnaIcon } from '@/components/icons/DnaIcon';
import { AtomIcon } from '@/components/icons/AtomIcon';
import { Bot } from 'lucide-react';

export const navLinks: NavLink[] = [
  { href: '/', label: 'Home', icon: 'LayoutGrid' },
  { href: '/conecta', label: 'Conecta', icon: 'Link2' },
  { href: '/explora', label: 'Explora', icon: 'FlaskConical' },
  { href: '/interactua', label: 'Interactúa', icon: 'ToyBrick' },
  { href: '/reto-final', label: 'Reto Final', icon: 'Trophy' },
];

export const urls = {
  infographic: 'LINK_PDF_INFO',
  compendium: 'https://docs.google.com/document/d/16_LenNt17G-e6ebyqy060L_3uNkXcZ7u/preview',
  canvaSlide1: 'https://www.canva.com/design/DAHAkKTcoQo/view?embed',
  canvaSlide2: 'https://www.canva.com/design/DAHBvOz_8Vc/view?embed',
  finalChallengeGuide: 'https://docs.google.com/document/d/1rv1ugJCnqXlahkfsHOycTkueTkc7Up9i/preview',
};

export const videos = [
  { id: 1, src: 'https://drive.google.com/file/d/1xiGkmATkrmyNjhdcybUqun1NZBmEubIK/view?usp=sharing', title: 'Video Educativo 1', imageId: 'video1' },
  { id: 2, src: 'https://drive.google.com/file/d/1-bQrSwSUTPQ1KocHeDODHJSXT4w7U9VA/view?usp=sharing', title: 'Video Educativo 2', imageId: 'video2' },
  { id: 3, src: 'https://drive.google.com/file/d/1e_MfNPij1QOIlwMd5yrBvHR94e0qtLJW/view?usp=sharing', title: 'Video Educativo 3', imageId: 'video3' },
  { id: 4, src: 'https://drive.google.com/file/d/1TuWn973yEoEddPn_m6V-5CTmYbKHd8s8/view?usp=sharing', title: 'Video Educativo 4', imageId: 'video4' },
  { id: 5, src: 'https://drive.google.com/file/d/1YINqtGlnBtXyHNeu5M4dFocyZXwElLN0/view?usp=sharing', title: 'Video Educativo 5', imageId: 'video5' },
];

export const faqs = [
  {
    question: '¿Qué es la fotosíntesis?',
    answer: 'La fotosíntesis es el proceso que realizan las plantas para convertir la luz solar, el agua y el dióxido de carbono en glucosa (su alimento) y oxígeno.',
  },
  {
    question: '¿Por qué los camaleones cambian de color?',
    answer: 'Los camaleones cambian de color principalmente para regular su temperatura, comunicarse con otros camaleones y camuflarse para protegerse de depredadores o para cazar.',
  },
  {
    question: '¿Cuál es el animal más grande del mundo?',
    answer: 'El animal más grande del mundo es la ballena azul. Puede llegar a medir hasta 30 metros de largo y pesar más de 170 toneladas.',
  },
  {
    question: '¿Cómo respiran los peces bajo el agua?',
    answer: 'Los peces respiran a través de branquias, que son órganos especiales que les permiten extraer el oxígeno disuelto en el agua y liberar dióxido de carbono.',
  },
];

export const aiBots = [
  { id: 'learning-assistant', name: 'Asistente de Aprendizaje', icon: BrainCircuitIcon, description: "Pregúntame cualquier cosa sobre tus lecciones." },
  { id: 'eleven-labs', name: 'Asistente de Voz', icon: Bot, description: "Habla conmigo para explorar nuevos temas." },
  { id: 'biology-bot', name: 'Bot de Biología', icon: LeafIcon, description: "Explora el fascinante mundo de los seres vivos." },
  { id: 'genetics-bot', name: 'Bot de Genética', icon: DnaIcon, description: "Descubre los secretos del ADN y la herencia." },
  { id: 'physics-bot', name: 'Bot de Física', icon: AtomIcon, description: "Entiende las leyes que gobiernan el universo." },
];

export const rubricCriteria = [
  { criterion: 'Claridad y Precisión', excellent: 'Presenta conceptos con total claridad y sin errores.', good: 'Presenta conceptos de forma clara con errores menores.', needsImprovement: 'La presentación de conceptos es confusa o tiene errores significativos.' },
  { criterion: 'Uso de Recursos', excellent: 'Integra creativamente todos los recursos del módulo.', good: 'Utiliza la mayoría de los recursos del módulo de forma adecuada.', needsImprovement: 'No utiliza o utiliza incorrectamente los recursos del módulo.' },
  { criterion: 'Análisis Crítico', excellent: 'Demuestra un análisis profundo y original del tema.', good: 'Realiza un análisis correcto pero superficial.', needsImprovement: 'No hay evidencia de análisis crítico.' },
  { criterion: 'Presentación', excellent: 'El formato es innovador, organizado y estéticamente agradable.', good: 'El formato es claro y organizado.', needsImprovement: 'El formato es desorganizado o difícil de seguir.' },
];

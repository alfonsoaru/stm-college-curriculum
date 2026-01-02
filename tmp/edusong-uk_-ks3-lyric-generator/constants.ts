
import { Subject } from './types';

export const SUBJECTS: Subject[] = [
  'Science',
  'History',
  'Geography',
  'English',
  'Maths',
  'RS',
  'Computer Science'
];

export const GENRES = [
  { id: 'k-pop', name: 'K-Pop', icon: '✨' },
  { id: 'mainstream-pop', name: 'Pop', icon: '🎤' },
  { id: 'uk-drill', name: 'UK Drill / Grime', icon: '🎧' },
  { id: 'indie-rock', name: 'Indie Rock / Britpop', icon: '🎸' },
  { id: 'synth-pop', name: 'Synth-Pop / 80s', icon: '🎹' },
  { id: 'lofi', name: 'Lo-Fi Study Beats', icon: '📚' },
  { id: 'musical', name: 'Musical Theatre', icon: '🎭' },
  { id: 'pop-punk', name: 'Pop-Punk', icon: '🔥' }
];

export const CURRICULUM_TOPICS: Record<string, Record<string, string[]>> = {
  'Year 7': {
    'Science': ['Cells and Organization', 'Particles and their behavior', 'Forces and Motion', 'The Solar System'],
    'History': ['The Norman Conquest (1066)', 'Mediaeval Life & Black Death', 'Magna Carta', 'Islamic Civilisations'],
    'Geography': ['Map Skills', 'UK Landscapes', 'Weather and Climate', 'Settlement and Change'],
    'English': ['Introduction to Shakespeare', 'Poetry through the Ages', 'Creative Writing', 'Greek Mythology'],
    'Maths': ['Algebraic Thinking', 'Place Value and FDP', 'Equality and Equivalence', 'Directed Number'],
    'RS': ['Introduction to World Religions', 'Hinduism Beliefs', 'Christianity and its Origins'],
    'Computer Science': ['E-Safety', 'Hardware and Software', 'Introduction to Python', 'Binary and Algorithms']
  },
  'Year 8': {
    'Science': ['The Periodic Table', 'Ecosystems & Photosynthesis', 'Light and Sound', 'Electricity and Magnetism'],
    'History': ['The Tudors & Stuarts', 'The Industrial Revolution', 'Transatlantic Slave Trade', 'The British Empire'],
    'Geography': ['Population and Migration', 'Rivers and Coasts', 'Development and Globalisation', 'Asia Study'],
    'English': ['Dystopian Fiction', 'Gothic Literature', 'Persuasive Speech', 'Shakespearean Tragedy'],
    'Maths': ['Proportional Reasoning', 'Representations of Data', 'Algebraic Techniques', 'Circles and Pythagoras'],
    'RS': ['Islam in the Modern World', 'Ethics and Morality', 'Sikhism and Community'],
    'Computer Science': ['Web Development', 'App Prototyping', 'Cybersecurity', 'Small Basic Coding']
  }
};

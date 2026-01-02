
export type Subject = 'Science' | 'History' | 'Geography' | 'English' | 'Maths' | 'RS' | 'Computer Science';

export type YearGroup = 'Year 7' | 'Year 8';

export interface LyricSection {
  section: string;
  content: string;
}

export interface SongResponse {
  title: string;
  lyrics: LyricSection[];
  aiStylePrompt: string;
  educationalFocus: string;
}

export interface AppState {
  subject: Subject;
  year: YearGroup;
  topic: string;
  genre: string;
  loading: boolean;
  result: SongResponse | null;
  error: string | null;
}

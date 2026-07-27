export interface TimelineEntry {
  period: string;
  title: string;
  organization: string;
  location?: string;
  description?: string;
  kind: 'Experience' | 'Education';
}

export const timeline: TimelineEntry[] = [
  {
    period: 'Current · start date to confirm',
    title: 'Research Assistant',
    organization: 'NYU WIRELESS',
    location: 'Brooklyn, NY',
    description: 'Research in wireless channel modeling, learning-based prediction, ray tracing, and robotic measurement systems.',
    kind: 'Experience'
  },
  {
    period: 'Jan 2025–present',
    title: 'PhD, Electrical and Computer Engineering',
    organization: 'New York University',
    location: 'Brooklyn, NY',
    kind: 'Education'
  },
  {
    period: 'Oct–Dec 2024',
    title: 'Network Operations Intern',
    organization: 'China Telecom',
    location: 'Shaoxing, China',
    description: 'Analyzed cellular coverage, handover behavior, and channel quality using RSRP.',
    kind: 'Experience'
  },
  {
    period: 'Sep 2022–May 2024',
    title: 'MS, Computer Engineering',
    organization: 'New York University',
    location: 'Brooklyn, NY',
    kind: 'Education'
  },
  {
    period: 'Sep 2018–Jul 2022',
    title: 'BSc (Hons), Computer Science with Artificial Intelligence',
    organization: 'University of Nottingham Ningbo China',
    location: 'Ningbo, China',
    kind: 'Education'
  }
];

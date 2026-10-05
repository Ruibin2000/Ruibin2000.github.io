export interface TimelineEntry {
  period: string;
  title: string;
  organization: string;
  location?: string;
  description?: string;
  kind: 'Experience' | 'Education' | 'Education & Research';
}

export const timeline: TimelineEntry[] = [
  {
    period: 'Jan 2025–present',
    title: 'PhD Student & Research Assistant',
    organization: 'New York University · NYU WIRELESS',
    location: 'Brooklyn, NY',
    description: 'Pursuing a PhD while conducting research in FR3 channel sounding, handset digital twins, learning-based prediction and array activation, UAV sensing simulation, and robotic transmitter localization.',
    kind: 'Education & Research'
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

export const profile = {
  name: 'Ruibin Chen',
  role: 'PhD Student in Electrical and Computer Engineering',
  affiliation: 'NYU Tandon School of Engineering · NYU WIRELESS',
  location: 'Brooklyn, New York',
  email: 'rc5018@nyu.edu',
  updated: 'October 4, 2026',
  statement:
    'I study how wireless systems can sense, predict, and adapt—connecting channel modeling and machine learning with real-time RF and robotic platforms.',
  bio:
    'Ruibin Chen is a PhD student in Electrical and Computer Engineering at NYU Tandon and a Research Assistant at NYU WIRELESS. His work spans FR3 channel sounding, handset digital twins, learning-based channel prediction and array activation, UAV sensing simulation, and robotic transmitter localization.',
  researchApproach:
    'I connect high-fidelity simulation with deployable systems—from Sionna ray-tracing scenes and learning-based array activation to RFSoC signal paths and ROS 2 measurement robots.',
  cvPath: 'files/Ruibin-Chen-CV.pdf',
  photoPath: 'images/ruibin-chen-profile.jpg'
} as const;

export const researchInterests = [
  'Wireless communications',
  'Channel modeling & estimation',
  'Ray tracing with Sionna',
  'Machine learning for wireless',
  'MIMO & OFDM',
  'RFSoC & FPGA systems',
  'Robotic transmitter localization',
  'Integrated sensing & communications'
] as const;

export interface SocialLink {
  label: string;
  href: string | null;
  note: string | null;
}

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/Ruibin2000', note: null },
  { label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=sQWvCLsAAAAJ&hl=en&oi=ao', note: null },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ruibin-chen-422290357/', note: null }
];

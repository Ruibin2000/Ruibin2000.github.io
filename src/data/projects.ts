export type ProjectStatus = 'Ongoing' | 'Completed' | 'Status to confirm';

export interface Project {
  slug: string;
  title: string;
  eyebrow: string;
  period: string;
  status: ProjectStatus;
  description: string;
  technologies: string[];
  visual: 'waveform' | 'attention' | 'ray' | 'robot';
  link?: { label: string; href: string };
  pendingLink?: string;
}

export const projects: Project[] = [
  {
    slug: 'rfsoc-waveform-transmitter',
    title: 'RFSoC Waveform Transmitter',
    eyebrow: 'Real-time RF hardware',
    period: 'Date not supplied',
    status: 'Status to confirm',
    description:
      'A hardware–software signal path for real-time IQ waveform playback on an RFSoC 4x2, connecting the RF Data Converter to custom memory-mapped and streaming interfaces.',
    technologies: ['RFSoC 4x2', 'Vivado', 'Vitis HLS', 'PYNQ', 'AXI4', 'BRAM'],
    visual: 'waveform',
    pendingLink: 'Project link pending'
  },
  {
    slug: 'transformer-rate-prediction',
    title: 'Transformer-Based Multi-Band Rate Prediction',
    eyebrow: 'Learning for wireless systems',
    period: 'Feb–Sep 2025',
    status: 'Completed',
    description:
      'A temporal convolution and Transformer model for predicting per-antenna rates from sparse measurements across multi-band cellular handset channels.',
    technologies: ['Python', 'Sionna RT', 'Transformers', 'Temporal convolution', 'FR1 / FR3'],
    visual: 'attention',
    link: { label: 'View publication', href: '#publications' }
  },
  {
    slug: 'ray-tracing-channel-modeling',
    title: 'Ray-Tracing-Assisted Channel Modeling',
    eyebrow: 'Simulation & estimation',
    period: 'Mar–Aug 2024',
    status: 'Completed',
    description:
      'A reflection-model-based interpolation framework for estimating spatial MIMO channel features from ray-traced samples in urban LOS and NLOS scenarios.',
    technologies: ['Sionna RT', 'MIMO', 'Kernel regression', 'Path clustering', '28 GHz'],
    visual: 'ray',
    link: { label: 'View publication', href: '#publications' }
  },
  {
    slug: 'robotic-wireless-measurement',
    title: 'Robotic Wireless Measurement Platform',
    eyebrow: 'Autonomous measurement',
    period: 'Oct 2025–present',
    status: 'Ongoing',
    description:
      'A ROS 2 platform for repeatable wireless measurements, robot and gimbal control, SLAM visualization, and angle-of-arrival-assisted transmitter localization.',
    technologies: ['ROS 2', 'TurtleBot 4', 'Clearpath Jackal', 'SLAM', 'RViz', 'Fast DDS'],
    visual: 'robot',
    pendingLink: 'Project link pending'
  }
];

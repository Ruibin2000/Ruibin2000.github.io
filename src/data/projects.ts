export type ProjectStatus = 'Ongoing' | 'Completed' | 'Status to confirm';

export interface Project {
  slug: string;
  title: string;
  eyebrow: string;
  period: string;
  role?: string;
  status: ProjectStatus;
  description: string;
  technologies: string[];
  visual: 'waveform' | 'attention' | 'ray' | 'robot';
  links?: { label: string; href: string }[];
  pendingLink?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: 'rfsoc-waveform-transmitter',
    title: 'FR3 Synchronized Channel Sounder Design',
    eyebrow: 'Real-time RF hardware',
    period: 'Jul 2026–present',
    status: 'Ongoing',
    description:
      'An RFSoC 4x2 platform for synchronized 2 × 2 MIMO and single-shot SISO FR3 channel sounding. Custom DDR-to-BRAM, waveform playback, detector, and fine-synchronization IP support multipath channel estimation, with a Pi-radio Marie Curie mixer converting a 1 GHz signal to 10 GHz.',
    technologies: ['RFSoC 4x2', 'Vivado', 'Vitis', 'BRAM', 'AXI4-Lite', 'Pi-radio Marie Curie'],
    visual: 'waveform',
    pendingLink: 'Project link pending'
  },
  {
    slug: 'handset-digital-twin',
    title: 'Multi-Cell Multi-Band Handset Digital Twin for Learning-Based Closed-Loop Array Activation',
    eyebrow: 'Digital twins & reinforcement learning',
    period: 'Sep 2025–May 2026',
    role: 'Research Assistant & First Author',
    status: 'Completed',
    description:
      'A Sionna ray-tracing digital twin combining NYU Tandon urban geometry, multi-cell FR1/FR3 base stations, and an eight-array handset. Mobility and self-rotation generate CQI and rate traces for energy-constrained array activation using PPO-based rate-aware and risk-aware policies.',
    technologies: ['Sionna RT', 'FR1 / FR3', 'CQI', 'PPO', 'Reinforcement learning'],
    visual: 'attention',
    pendingLink: 'Project link pending'
  },
  {
    slug: 'uav-rcs-simulation',
    title: 'UAV RCS Simulation for Integrated Sensing and Communications',
    eyebrow: 'Sensing & channel simulation',
    period: 'Feb–Aug 2026',
    role: 'Research Assistant',
    status: 'Completed',
    description:
      'UAV radar-cross-section channel simulation in NVIDIA Sionna, with random three-dimensional flight trajectories to generate datasets for integrated sensing and communications.',
    technologies: ['NVIDIA Sionna', 'UAV RCS', '3D trajectories', 'ISAC'],
    visual: 'ray',
    pendingLink: 'Project link pending'
  },
  {
    slug: 'transformer-rate-prediction',
    title: 'Transformer-Based Rate Prediction for Multi-Band Cellular Handsets',
    eyebrow: 'Learning for wireless systems',
    period: 'Feb–Sep 2025',
    role: 'Research Assistant & First Author',
    status: 'Completed',
    description:
      'A temporal convolution and Transformer model for predicting per-antenna rates from sparse measurements across multi-band cellular handset channels.',
    technologies: ['Python', 'Sionna RT', 'Transformers', 'Temporal convolution', 'FR1 / FR3'],
    visual: 'attention',
    links: [{ label: 'View publication', href: '#publications' }]
  },
  {
    slug: 'ray-tracing-channel-modeling',
    title: 'Interpolation Techniques for Fast Channel Estimation in Ray Tracing',
    eyebrow: 'Simulation & estimation',
    period: 'Mar–Aug 2024',
    role: 'Research Assistant & First Author',
    status: 'Completed',
    description:
      'A reflection-model-based interpolation framework for estimating spatial MIMO channel features from ray-traced samples in urban LOS and NLOS scenarios.',
    technologies: ['Sionna RT', 'MIMO', 'Kernel regression', 'Path clustering', '28 GHz'],
    visual: 'ray',
    links: [{ label: 'View publication', href: '#publications' }]
  },
  {
    slug: 'robotic-wireless-measurement',
    title: 'TurtleBot-Based FR3 TX Localization',
    eyebrow: 'Autonomous measurement',
    period: 'Oct 2025–Sep 2026',
    role: 'Lead Programmer',
    status: 'Completed',
    description:
      'A ROS 2 platform connecting TurtleBot motion, PTUD48 gimbal control, and an FR3 receiver through Fast DDS. Angle-of-arrival messages and RViz marker arrays visualize robot orientation, AoA history, and transmitter location estimates from line intersections.',
    technologies: ['ROS 2', 'TurtleBot 4', 'PTUD48 Gimbal', 'SLAM', 'RViz', 'Fast DDS'],
    visual: 'robot',
    links: [
      { label: 'View code', href: 'https://github.com/Ruibin2000/turtlebot4_project' },
      { label: 'Watch demo', href: 'https://youtu.be/nbqg_tmVgjU?si=MARgUfUTI6UjY8u3' }
    ]
  },
  {
    slug: 'breath-monitoring-system',
    title: 'Breath Monitoring System Design',
    eyebrow: 'Embedded sensing',
    period: 'Nov–Dec 2022',
    role: 'Team Leader & Algorithm Engineer',
    status: 'Completed',
    description:
      'Led a four-member team to build an event-driven STM32F4 monitoring device using an SGP30 sensor, with LCD and LED alerts based on gas measurements.',
    technologies: ['STM32F4', 'SGP30', 'PlatformIO', 'LCD'],
    visual: 'waveform',
    pendingLink: 'Project link pending',
    featured: false
  },
  {
    slug: 'ndn-health-monitoring',
    title: 'Efficient and Plug-in Named Data Network (NDN) in Health Monitor System',
    eyebrow: 'Network mobility',
    period: 'Jan–Oct 2021',
    role: 'Research Assistant & Contribution Author',
    status: 'Completed',
    description:
      'Proposed a Neighborhood Registration Scheme for producer mobility in remote health monitoring. Implemented and evaluated routing algorithms using ndnSIM (ns-3) and MATLAB under faculty supervision.',
    technologies: ['NDN', 'ndnSIM', 'ns-3', 'MATLAB'],
    visual: 'attention',
    links: [{ label: 'View publication', href: '#publications' }],
    featured: false
  },
  {
    slug: 'wireless-sensor-network',
    title: 'Efficient Wireless Sensor Network Architecture Design',
    eyebrow: 'Energy-efficient networks',
    period: 'Jun–Aug 2020',
    role: 'Research Assistant & First Author',
    status: 'Completed',
    description:
      'Designed a clustering scheme using communication distance and residual energy to select energy-efficient cluster heads and improve wireless sensor network lifetime, with simulations in MATLAB.',
    technologies: ['Wireless sensor networks', 'Clustering', 'MATLAB'],
    visual: 'ray',
    links: [{ label: 'View publication', href: '#publications' }],
    featured: false
  }
];

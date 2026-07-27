export interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: number;
  status?: string;
  links?: { label: string; href: string }[];
}

export const publications: Publication[] = [
  {
    title: 'Transformer-Based Rate Prediction for Multi-Band Cellular Handsets',
    authors: 'Ruibin Chen, H. Lei, H. Guo, M. Mezzavilla, H. Poddar, T. Yoshimura, and S. Rangan',
    venue: 'IEEE ICC 2026 Workshop (WS02): 4th Workshop on Intelligent Movable and Reconfigurable Antennas for Future Wireless Communication and Sensing',
    year: 2026,
    status: 'Accepted',
    links: [{ label: 'arXiv', href: 'https://arxiv.org/abs/2509.25722' }]
  },
  {
    title: 'Interpolation Techniques for Fast Channel Estimation in Ray Tracing',
    authors: 'Ruibin Chen, J. Joy, Y. Hu, M. Yin, M. Mezzavilla, and S. Rangan',
    venue: '2024 58th Asilomar Conference on Signals, Systems, and Computers, pp. 1383–1388',
    year: 2024
  },
  {
    title: 'An Efficient Producer Mobility Management Technique for Real-Time Communication in NDN-Based Remote Health Monitoring Systems',
    authors: 'P. Kar, Ruibin Chen, and Y. Qian',
    venue: 'Smart Health, vol. 26, article 100309',
    year: 2022
  },
  {
    title: 'WLEACH-CK: Weighted K-Means Based LEACH-C Algorithm for Cluster Head Selection',
    authors: 'Ruibin Chen et al',
    venue: '2021 17th International Conference on the Design of Reliable Communication Networks (DRCN)',
    year: 2021
  }
];

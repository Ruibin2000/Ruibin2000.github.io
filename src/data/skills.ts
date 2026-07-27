export const skillGroups = [
  { title: 'Wireless', items: ['MIMO', 'OFDM', 'Channel modeling', 'Channel estimation', 'FR1 / FR3'] },
  { title: 'Simulation', items: ['NVIDIA Sionna', 'MATLAB', 'Python', 'Wireless InSite'] },
  { title: 'FPGA & RF', items: ['Vivado', 'Vitis HLS', 'RFSoC', 'PYNQ', 'AXI4'] },
  { title: 'Robotics', items: ['ROS 2', 'TurtleBot 4', 'Clearpath Jackal', 'SLAM', 'RViz'] },
  { title: 'Programming', items: ['Python', 'C++', 'C', 'MATLAB', 'Tcl', 'Java'] }
] as const;

export const awards = [
  {
    title: 'The Myron M. Rosenthal Award for Best MS Academic Achievement',
    organization: 'New York University',
    year: '2024'
  },
  {
    title: 'First Class Honors',
    organization: 'University of Nottingham Ningbo China',
    year: '2022'
  },
  {
    title: 'Head’s Scholarship',
    organization: 'University of Nottingham Ningbo China',
    year: '2022'
  }
] as const;

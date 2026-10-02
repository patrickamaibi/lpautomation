/**
 * Projects Data
 * Case study placeholders for LP Power & Automation engineering projects.
 */
export const projectsData = [
  {
    id: "solar-installation",
    slug: "commercial-solar-microgrid",
    title: "Commercial Solar Microgrid & Energy Storage",
    category: "Solar Installation",
    client: "West Africa Agro-Processing Hub",
    location: "Ibeju-Lekki, Lagos, Nigeria",
    year: "2024",
    summary: "High-capacity hybrid solar PV installation with lithium energy storage and automated generator failover.",
    overview: "Engineered a resilient 120kWp solar PV microgrid with 200kWh lithium-ion battery storage, delivering 85% generator fuel displacement and seamless power continuity for automated grain processing lines.",
    challenge: "The processing facility suffered constant grid outages and high diesel generator expenditures that risked equipment shutdowns during sensitive grain drying cycles.",
    solution: "Installed a synchronized zero-export 120kWp monocrystalline array paired with high-voltage LiFePO4 battery banks and an automated transfer switch connected to an intelligent energy management controller.",
    results: [
      "85% reduction in monthly diesel fuel consumption",
      "Zero downtime during daily grid interruptions",
      "Payback period projected within 32 months",
      "Real-time solar generation monitoring via cloud SCADA"
    ],
    scope: [
      "120kWp Tier-1 Monocrystalline Solar Array",
      "200kWh LiFePO4 Energy Storage System",
      "Zero-export Grid Synchronization Inverters",
      "Automatic Transfer Switch (ATS) & Generator Integration",
      "Cloud Telemetry & Mobile Generation Monitoring"
    ],
    specifications: {
      "Solar Capacity": "120 kWp",
      "Storage Bank": "200 kWh LiFePO4",
      "Inverter System": "3-Phase Hybrid 150 kVA",
      "Fuel Displacement": "85% Monthly Savings",
      "System Voltage": "415V AC 3-Phase",
      "Commissioning Standard": "IEC 62446 / IEEE 1547"
    },
    image: "/images/projects/solar-installation.jpg",
    badge: "Solar PV",
    icon: "MdWbSunny"
  },
  {
    id: "smart-home-setup",
    slug: "luxury-residence-smart-automation",
    title: "Executive Residential Smart Home Automation",
    category: "Smart Home Setup",
    client: "Private Residential Estate",
    location: "Ikoyi, Lagos, Nigeria",
    year: "2024",
    summary: "Whole-home intelligent lighting, multi-zone climate control, and biometrically integrated security system.",
    overview: "Designed and commissioned an integrated automation architecture for a 5-bedroom luxury residence. Features centralized scene control, automated motorized shade scheduling, intelligent load shedding during grid outages, and biometric perimeter access.",
    challenge: "The homeowner wanted complete control over lighting, audio, HVAC, and power routing through a single intuitive interface without cumbersome third-party hubs or visible control cabling.",
    solution: "Deployed a unified Zigbee 3.0 and KNX-compatible smart architecture with wall-mounted touch controllers, automated occupancy dimmers, and an energy-aware load shedding controller that prioritizes essential loads when inverter power is active.",
    results: [
      "100% centralized control via capacitive touch panels and mobile app",
      "Automatic energy optimization reducing AC standby load by 28%",
      "Seamless integration with residential solar inverter and backup power",
      "Encrypted biometric access control with real-time visitor audit log"
    ],
    scope: [
      "Centralized Touch Panel & Voice Command Engine",
      "Multi-zone Smart Architectural Lighting & Dimming",
      "Smart Thermostat & Inverter AC Integration",
      "Biometric Access Control & IP Surveillance",
      "Energy-Priority Smart Load Management"
    ],
    specifications: {
      "Automation Nodes": "96 Connected Endpoints",
      "Protocols": "KNX / Zigbee 3.0 / Matter",
      "Control Interface": "Wall Touchscreens & Mobile App",
      "Backup Integration": "Inverter-Aware Load Shedding",
      "Security Protocols": "Biometric + AES-128 Encryption",
      "Lighting Circuits": "36 Dimming & Relay Channels"
    },
    image: "/images/projects/smart-home-setup.jpg",
    badge: "Smart Home",
    icon: "MdHome"
  },
  {
    id: "industrial-lv-panel",
    slug: "industrial-lv-distribution-panel",
    title: "Industrial Low-Voltage (LV) Distribution & MCC Panel",
    category: "Industrial LV Panel Setup",
    client: "Apex Manufacturing Industrial Complex",
    location: "Ikeja Industrial Estate, Lagos, Nigeria",
    year: "2023",
    summary: "IEC 61439-compliant 1600A Form 4b main low-voltage switchboard and automated motor control center.",
    overview: "Engineered, fabricated, and field-commissioned a Form 4b type-tested low-voltage distribution board with integrated Motor Control Center (MCC). Includes digital power quality metering, transient surge suppression, busbar trunking, and PLC-controlled interlocks.",
    challenge: "The manufacturing plant was expanding its extrusion production lines and needed a custom low-voltage power distribution infrastructure capable of safely managing high inrush currents without tripping upstream breakers.",
    solution: "Custom-built a modular Form 4b segregated switchboard equipped with air circuit breakers (ACBs), smart molded-case circuit breakers (MCCBs), variable frequency drives (VFDs), and Class 1 digital power metering tied to an automated failover logic system.",
    results: [
      "Safe, compartmentalized Form 4b protection minimizing arc-flash risk",
      "Stable motor startup with zero harmonic voltage distortion",
      "Certified under IEC 61439-1/2 type-tested standards",
      "Zero unassisted trips across 14 months of 24/7 continuous operation"
    ],
    scope: [
      "1600A Form 4b Low-Voltage Switchboard",
      "Direct-On-Line & VFD Motor Starter Feeders",
      "Automated Mains-Fail (AMF) Logic Control",
      "Class 1 Power Quality & Harmonic Monitoring",
      "Factory Acceptance Testing (FAT) & Thermal Imaging"
    ],
    specifications: {
      "Rated Current": "1600A @ 415V 50Hz",
      "Short-Circuit Rating": "50 kA / 1 second (Icw)",
      "Enclosure Class": "IP54 Heavy Industrial",
      "Form of Separation": "IEC 61439-2 Form 4b",
      "Busbar Material": "High-Conductivity Tinned Copper",
      "Protection": "Microprocessor Trip Unit + SPD Class II"
    },
    image: "/images/projects/industrial-lv-panel.webp",
    badge: "LV Switchgear",
    icon: "MdElectricMeter"
  },
  {
    id: "industrial-automation-scada",
    slug: "automated-bottling-scada-system",
    title: "High-Speed Bottling Automation & SCADA System",
    category: "Automation & Control",
    client: "Premier Beverage Bottling Facility",
    location: "Ogun Industrial Corridor, Nigeria",
    year: "2024",
    summary: "Turnkey PLC programming, optical sensor synchronization, and centralized SCADA real-time monitoring.",
    overview: "Upgraded legacy pneumatic conveyor machinery with high-speed Siemens S7-1500 PLCs, variable frequency drives (VFDs), and an intuitive touch HMI and plant-wide SCADA dashboard, increasing production throughput by 34%.",
    challenge: "Frequent mechanical jams and unsynchronized conveyor belts caused bottling spills, high reject rates, and lack of real-time visibility into machine downtime.",
    solution: "Designed a centralized automation architecture using dual Siemens S7-1500 controllers, distributed IO over PROFINET, high-precision laser position sensors, and an Ignition SCADA interface with automated alarm reporting.",
    results: [
      "34% increase in production throughput",
      "Spill reject rate reduced to under 0.2%",
      "Real-time operator feedback with capacitive industrial HMIs",
      "Predictive motor thermal tracking preventing unplanned breakdowns"
    ],
    scope: [
      "Siemens S7-1500 PLC Architecture & Programming",
      "High-Precision VFD Multi-Motor Synchronization",
      "15-inch Capacitive Industrial Touch HMI",
      "Plant-wide Ignition SCADA Data Logging",
      "Emergency Stop Category 4 Safety Circuitry"
    ],
    specifications: {
      "Control Platform": "Siemens S7-1500 / PROFINET",
      "Throughput Gain": "+34% Bottles Per Hour",
      "Safety Integrity": "SIL 3 / PLe Cat 4",
      "Fieldbus Protocol": "PROFINET / Modbus TCP",
      "HMI Display": "15\" Widescreen Multi-Touch IP66",
      "IO Count": "240 Digital / 32 Analog IOs"
    },
    image: "/images/projects/industrial-automation.webp",
    badge: "PLC / SCADA",
    icon: "MdSettings"
  }
];

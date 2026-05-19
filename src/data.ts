import type { IconName } from './components/icons'

export interface NavLink {
  href: string
  label: string
  external?: boolean
}

export interface SkillGroup {
  title: string
  skills: string[]
}

export interface Experience {
  company: string
  icon: IconName
  role: string
  period: string
  bullets: string[]
  tech: string[]
}

export interface FeaturedProject {
  title: string
  description: string
  icon: IconName
  tech: string[]
}

export const navLinks: NavLink[] = [
  { href: '#about', label: 'About' },
  { href: '#work-experience', label: 'Work' },
  { href: '#projects', label: 'Projects' },
  { href: 'https://www.linkedin.com/in/brunaprauchner', label: 'Contact', external: true },
]

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    skills: ['React', 'TypeScript','HTML/CSS'],
  },
  {
    title: 'Backend',
    skills: ['Python', 'C# .NET Core', 'Java Spring Boot'],
  },
  {
    title: 'Cloud & DevOps',
    skills: ['AWS', 'CI/CD', 'Docker', 'Kubernetes'],
  },
  {
    title: 'Tools',
    skills: ['Grafana', 'Terraform', 'Prometheus', 'OpenTelemetry'],
  },
]

export const experiences: Experience[] = [
  {
    company: 'Albertsons Companies, Inc.',
    icon: 'shoppingCart',
    role: 'Site Reliability Engineer',
    period: 'Jul 2024 - Present',
    bullets: [
      'Built end-to-end observability across 50+ production microservices using Prometheus, OpenTelemetry, and Grafana.',
      'Contributed to CI/CD pipelines ensuring reliable builds, automated testing, and safe deployments.',
      'Coordinated troubleshooting and incident response and executed disaster recovery exercises.',
    ],
    tech: ['Java Spring Boot', 'Python', 'Azure', 'AKS', 'Kafka', 'Prometheus', 'Grafana'],
  },
  {
    company: 'ADP, Inc.',
    icon: 'office',
    role: 'Senior Software Engineer',
    period: 'Aug 2022 - Feb 2023',
    bullets: [
      'Automated 20% of the Direct Deposit System workflow using event-driven microservices.',
      'Developed Python automation reducing manual DDS source matching by 9%.',
      'Collaborated with stakeholders to align requirements, make technical decisions, and deliver quality solutions.',
    ],
    tech: ['Java Spring Boot', 'Python', 'AWS', 'MySQL', 'Kafka', 'SQS', 'Git'],
  },
  {
    company: 'Dell Technologies Inc.',
    icon: 'monitor',
    role: 'Software Engineer',
    period: 'Apr 2020 - Jul 2022',
    bullets: [
      'Designed and developed RESTful APIs with RabbitMQ messaging for payment communication.',
      'Improved product quality with pair programming and TDD, increasing test coverage by 15%.',
      'Worked on SFTP ingestion and settlement workflows, ensuring correct data exchange with partner financial institutions.',
    ],
    tech: ['C# .NET', 'Entity Framework', 'RabbitMQ', 'xUnit', 'SFTP', 'Git'],
  },
]

export const featuredProjects: FeaturedProject[] = [
  {
    title: 'Retail Payment Platform',
    description: 'Microservices platform powering grocery payments and retail eCommerce at scale.',
    icon: 'shoppingCart',
    tech: ['Java Spring Boot', 'Kafka', 'AWS', 'CI/CD'],
  },
  {
    title: 'Observability Platform',
    description: 'Production monitoring across 50+ microservices with metrics, traces, and dashboards.',
    icon: 'activityChart',
    tech: ['Prometheus', 'Grafana', 'OpenTelemetry', 'AKS'],
  },
  {
    title: 'Direct Deposit Automation',
    description: 'Python automation reducing manual source matching and improving workflow efficiency.',
    icon: 'bolt',
    tech: ['Python', 'AWS', 'MySQL', 'SQS'],
  },
  {
    title: 'Financial APIs',
    description: 'RESTful APIs and RabbitMQ messaging for secure payment communication.',
    icon: 'code',
    tech: ['C# .NET', 'RabbitMQ', 'Entity Framework', 'xUnit'],
  },
]

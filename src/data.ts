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
  githubUrl: string
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
    title: 'Budget Tracker API',
    description: 'Microservice for tracking expenses, categorizing transactions, and generating monthly spending insights',
    icon: 'shoppingCart',
    githubUrl: 'https://github.com/brunaPrauchner/budget-tracker-api',
    tech: ['Java Spring Boot', 'AWS', 'CI/CD', 'K3S'],
  },
  {
    title: 'Budget Tracker UI',
    description: 'User interface for the budget tracking application',
    icon: 'shoppingCart',
    githubUrl: 'https://github.com/brunaPrauchner/budget-tracker-ui',
    tech: ['React', 'TypeScript', 'HTML/CSS'],
  },
  {
    title: 'Observability Platform',
    description: 'Monitoring microservices with metrics, traces, and dashboards',
    icon: 'activityChart',
    githubUrl: 'https://github.com/brunaPrauchner',
    tech: ['In Progress', 'Prometheus', 'Grafana', 'OpenTelemetry', 'Terraform'],
  },
  {
    title: 'Meal planner',
    description: 'A meal planning app that generates personalized meal ideas based on preferences, ingredients, and nutrition goals',
    icon: 'chefHat',
    githubUrl: 'https://github.com/brunaPrauchner',
    tech: ['In Progress', 'Python', 'AWS', 'MySQL', 'SQS'],
  },
  {
    title: 'AI - Automated planning',
    description: 'A Unity-based planning simulation where agents rescue runaway zoo giraffes from different danger situations while testing planner scalability across increasingly complex scenarios',
    icon: 'code',
    githubUrl: 'https://github.com/brunaPrauchner/AI-AutomatedPlanning-SaveGiraffe',
    tech: ['PDDL4J', 'Fast Downward', 'Web Planner', 'Planning Domains', 'Unity'],
  },
]

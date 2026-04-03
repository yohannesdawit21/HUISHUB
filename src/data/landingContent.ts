export type Cta = {
  href: string
  label: string
  variant?: 'primary' | 'secondary' | 'ghost'
}

export type HeroQuoteCard = {
  about: string
  currentRole: string
  headline: string
  imageAlt: string
  imageSrc: string
  linkedinUrl: string
  location: string
  name: string
}

export type HeroContent = {
  ctas: Cta[]
  description: string
  eyebrow: string
  quoteCard: HeroQuoteCard
  titleAccent: string
  titleLeading: string
}

export type Course = {
  code: string
  ects: number
  id: string
  serialNumber: number
  title: string
}

export type CurriculumSemester = {
  courses: Course[]
  id: string
  label: string
  note?: string
}

export type CurriculumYear = {
  description: string
  headline: string
  id: string
  label: string
  semesters: CurriculumSemester[]
}

export type CareerPath = {
  id: string
  title: string
}

export type GrowthMetric = {
  description: string
  label: string
  value: string
}

export type OverviewCard = {
  bullets: string[]
  description: string
  eyebrow: string
  id: string
  title: string
}

export type OverviewContent = {
  cards: OverviewCard[]
  description: string
  eyebrow: string
  title: string
}

export const heroContent: HeroContent = {
  eyebrow: 'Information Systems Department',
  titleLeading: 'Welcome to the',
  titleAccent: 'IS HUB',
  description:
    'The Digital Home for Information System Students. Curating excellence in technology, strategy, and innovation at Haramaya University.',
  ctas: [
    { href: '#registration', label: 'Join the HUB' },
    { href: '#curriculum', label: 'Explore Courses', variant: 'secondary' },
  ],
  quoteCard: {
    imageSrc: '/head-yisak.jpg',
    imageAlt: 'Profile portrait shown for Yisehak Gebeyehu.',
    name: 'Yisehak Gebeyehu',
    headline: 'Full Stack Web Application Developer | Creative Graphics Designer',
    currentRole: 'Information Systems Department Head',
    location: 'Harar, Ethiopia',
    linkedinUrl: 'https://www.linkedin.com/in/yisehak-gebeyehu-547a40155/',
    about:
      "Passionate educator and technology enthusiast with a BSc in Information Systems and an MSc in Information Technology, combining lecturing, full-stack web development, and visual design to build practical, user-friendly digital experiences.",
  },
}

export const overviewContent: OverviewContent = {
  eyebrow: 'About Information Systems',
  title: 'Information Systems at Haramaya University and in the World',
  description:
    'Information Systems connects people, processes, data, and digital tools. This field helps learners understand both the technical and organizational side of modern systems.',
  cards: [
    {
      id: 'haramaya-university',
      eyebrow: 'At Haramaya University',
      title: 'A program that links technology with real institutional needs.',
      description:
        'At Haramaya University, Information Systems can be understood as a field that prepares students to see how software, databases, networks, and management practices work together. It supports learners who want to improve services, communication, decision-making, and digital operations in organizations and communities.',
      bullets: [
        'Combines computing, analysis, and management thinking.',
        'Helps students solve practical problems with digital systems.',
        'Builds readiness for roles in design, development, support, and coordination.',
      ],
    },
    {
      id: 'global-information-systems',
      eyebrow: 'Across the World',
      title: 'A global field focused on making information useful and actionable.',
      description:
        'Across the world, Information Systems helps organizations collect, organize, secure, and use information effectively. The field supports digital transformation through enterprise platforms, databases, analytics, cybersecurity, web and mobile services, and decision-support systems.',
      bullets: [
        'Connects people, process, data, and technology.',
        'Improves efficiency, collaboration, and evidence-based decisions.',
        'Creates opportunities in business, government, education, health, and entrepreneurship.',
      ],
    },
  ],
}

function createCourse(
  id: string,
  serialNumber: number,
  title: string,
  code: string,
  ects: number,
): Course {
  return {
    id,
    serialNumber,
    title,
    code,
    ects,
  }
}

export const curriculumYears: CurriculumYear[] = [
  {
    id: 'year-ii',
    label: 'Year II',
    headline: 'Build the analytical foundation behind modern digital systems.',
    description:
      'Semester I builds the social, managerial, and analytical base of the program, while Semester II deepens programming, databases, and computer systems.',
    semesters: [
      {
        id: 'year-ii-semester-i',
        label: 'Semester I',
        courses: [
          createCourse(
            'global-trends',
            1,
            'Global Trends and International Relations',
            'GTr2013',
            4,
          ),
          createCourse('inclusiveness', 2, 'Inclusiveness', 'Incl2011', 4),
          createCourse(
            'intro-is-society',
            3,
            'Introduction to Information Systems and Society',
            'InSy2021',
            5,
          ),
          createCourse(
            'system-analysis-design',
            4,
            'System Analysis and Design',
            'InSy2061',
            6,
          ),
          createCourse(
            'intro-management',
            5,
            'Introduction to Management',
            'MgMt2025',
            5,
          ),
          createCourse(
            'basic-computer-programming-ii',
            6,
            'Basic Computer Programming II',
            'InSy2031',
            5,
          ),
          createCourse(
            'discrete-mathematics-combinatory',
            7,
            'Discrete Mathematics and Combinatory',
            'Math2031',
            5,
          ),
        ],
      },
      {
        id: 'year-ii-semester-ii',
        label: 'Semester II',
        courses: [
          createCourse(
            'introduction-statistics',
            1,
            'Introduction to Statistics',
            'Stat2023',
            4,
          ),
          createCourse('economics', 2, 'Economics', 'Econ3021', 4),
          createCourse(
            'object-oriented-programming',
            3,
            'Object Oriented Programming',
            'InSy2042',
            7,
          ),
          createCourse(
            'fundamentals-of-accounting',
            4,
            'Fundamentals of Accounting',
            'AcFn2022',
            5,
          ),
          createCourse(
            'fundamentals-of-database-systems',
            5,
            'Fundamentals of Database Systems',
            'InSy2071',
            5,
          ),
          createCourse(
            'computer-organization-architecture',
            6,
            'Computer Organization and Architecture',
            'InSy2052',
            5,
          ),
          createCourse(
            'data-structure-algorithms',
            7,
            'Data Structure and Algorithms',
            'InSy2044',
            5,
          ),
        ],
      },
    ],
  },
  {
    id: 'year-iii',
    label: 'Year III',
    headline: 'Shift from theory into delivery across networks, web systems, AI, and project work.',
    description:
      'The third year moves into applied systems practice, with Semester I focused on core platform engineering and Semester II expanding into mobile, AI, retrieval, and project management.',
    semesters: [
      {
        id: 'year-iii-semester-i',
        label: 'Semester I',
        courses: [
          createCourse(
            'data-communication-computer-networks',
            1,
            'Data Communication and Computer Networks',
            'InSy2081',
            5,
          ),
          createCourse('operating-systems', 2, 'Operating Systems', 'InSy3051', 5),
          createCourse(
            'research-methods-information-systems',
            3,
            'Research Methods in Information Systems',
            'InSy3062',
            5,
          ),
          createCourse(
            'event-driven-programming',
            4,
            'Event Driven Programming',
            'InSy3043',
            5,
          ),
          createCourse(
            'advanced-database-systems',
            5,
            'Advanced Database Systems',
            'InSy3071',
            5,
          ),
          createCourse(
            'internet-programming',
            6,
            'Internet Programming',
            'InSy3091',
            5,
          ),
        ],
      },
      {
        id: 'year-iii-semester-ii',
        label: 'Semester II',
        courses: [
          createCourse(
            'information-storage-retrieval',
            1,
            'Introduction to Information Storage & Retrieval',
            'InSy3072',
            5,
          ),
          createCourse(
            'mobile-application-development',
            2,
            'Mobile Application Development',
            'InSy3124',
            5,
          ),
          createCourse(
            'multimedia-information-systems',
            3,
            'Multimedia Information Systems',
            'InSy3122',
            5,
          ),
          createCourse(
            'information-systems-project-management',
            4,
            'Information Systems Project Management',
            'InSy3112',
            6,
          ),
          createCourse(
            'fundamentals-of-artificial-intelligence',
            5,
            'Fundamentals of Artificial Intelligence',
            'InSy3102',
            5,
          ),
          createCourse(
            'systems-network-administration',
            6,
            'Systems and Network Administration',
            'InSy3083',
            5,
          ),
          createCourse(
            'seminar-information-system',
            7,
            'Seminar in Information System',
            'InSy3134',
            1,
          ),
        ],
      },
    ],
  },
  {
    id: 'year-iv',
    label: 'Year IV',
    headline:
      'Translate advanced study into portfolio-ready outcomes, enterprise systems, and final-year delivery.',
    description:
      'Final-year semesters combine specialization, security, machine learning, enterprise systems, and the final project path into a portfolio-ready finish.',
    semesters: [
      {
        id: 'year-iv-semester-i',
        label: 'Semester I',
        note: 'Internship is taken during the summer at the end of Year III Semester II.',
        courses: [
          createCourse('elective-i', 1, 'Elective I', 'InSy414k', 5),
          createCourse(
            'knowledge-management',
            2,
            'Knowledge Management',
            'InSy4103',
            5,
          ),
          createCourse(
            'introduction-machine-learning',
            3,
            'Introduction to Machine Learning',
            'InSy4101',
            5,
          ),
          createCourse(
            'information-system-security',
            4,
            'Information System Security',
            'InSy4081',
            5,
          ),
          createCourse(
            'human-computer-interaction',
            5,
            'Human Computer Interaction',
            'InSy4123',
            5,
          ),
          createCourse(
            'final-year-project-i',
            6,
            'Final Year Project I',
            'InSy4133',
            5,
          ),
          createCourse('internship', 7, 'Internship', 'InSy4131', 3),
        ],
      },
      {
        id: 'year-iv-semester-ii',
        label: 'Semester II',
        courses: [
          createCourse(
            'management-information-systems-services',
            1,
            'Management of Information Systems and Services',
            'InSy4112',
            5,
          ),
          createCourse('elective-ii', 2, 'Elective II', 'InSy414X', 5),
          createCourse(
            'final-year-project-ii',
            3,
            'Final Year Project II',
            'InSy4132',
            5,
          ),
          createCourse(
            'entrepreneurship-small-business-management',
            4,
            'Entrepreneurship and Small Business Management',
            'MgMt4136',
            4,
          ),
          createCourse(
            'enterprise-systems',
            5,
            'Enterprise Systems',
            'InSy4116',
            5,
          ),
          createCourse(
            'organizational-behavior',
            6,
            'Organizational Behavior',
            'MgMt4114',
            5,
          ),
        ],
      },
    ],
  },
]

export const careerPaths: CareerPath[] = [
  { id: 'erp-specialist', title: 'ERP specialist' },
  {
    id: 'information-auditing-compliance-specialist',
    title: 'Information Auditing and Compliance Specialist',
  },
  { id: 'it-architect', title: 'IT Architect' },
  { id: 'it-asset-manager', title: 'IT Asset Manager' },
  { id: 'it-consultant', title: 'IT Consultant' },
  { id: 'it-operations-manager', title: 'IT Operations Manager' },
  { id: 'it-security-risk-manager', title: 'IT Security and Risk Manager' },
  {
    id: 'network-designer-developer',
    title: 'Network Designer and Developer',
  },
  { id: 'network-administrator', title: 'Network Administrator' },
  { id: 'project-manager', title: 'Project Manager' },
  { id: 'user-interface-designer', title: 'User Interface Designer' },
  { id: 'web-content-manager', title: 'Web Content Manager' },
  { id: 'ict-policy-maker', title: 'ICT Policy Maker' },
  { id: 'information-systems-researcher', title: 'Information Systems Researcher' },
  { id: 'information-systems-trainer', title: 'Information Systems Trainer' },
  {
    id: 'innovation-change-entrepreneurship',
    title: 'Innovation, Organizational Change, and Entrepreneurship',
  },
  {
    id: 'is-strategy-governance',
    title: 'IS Strategy and Governance (ISS&G)',
  },
  {
    id: 'systems-development-deployment',
    title: 'Systems Development and Deployment (SD&D)',
  },
]

export const skillsCloud = [
  'Project management',
  'System management',
  'Data management',
  'Software development / Application development',
  'IT support',
  'Network infrastructure',
  'Process management',
  'Data analysis',
  'Information Assurance (BC&I)',
  'Data, Information, and Content Management',
  'Application developer',
  'System Analyst',
  'System Designer',
  'Chief Information Officer',
  'Programmer',
  'Business Process Analyst',
  'Database Administrator',
  'Database Analyst',
  'Database Developer',
  'E-business manager',
]

export const growthMetric: GrowthMetric = {
  label: 'Growth Metric',
  value: '+15%',
  description: 'Projected growth for IS roles in the next decade.',
}

export const registrationYearOptions = ['Year II', 'Year III', 'Year IV']

export const footerLinks = [
  { href: '#curriculum', label: 'Curriculum' },
  { href: '#career', label: 'Career' },
  { href: '#registration', label: 'Join Us' },
  { href: '#top', label: 'Back to Top' },
]

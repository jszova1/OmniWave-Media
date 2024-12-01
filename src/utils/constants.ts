export const NAVIGATION_LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Our Work' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' }
] as const;

export const SERVICES_DATA = [
  {
    title: 'Web Development',
    description: 'Custom websites built with modern technologies that drive results',
    features: ['Responsive Design', 'SEO Optimization', 'Performance Focus'],
    icon: 'Code'
  },
  {
    title: 'Digital Marketing',
    description: 'Strategic marketing campaigns that reach your target audience',
    features: ['Social Media', 'Content Strategy', 'Email Marketing'],
    icon: 'BarChart'
  },
  {
    title: 'Brand Design',
    description: 'Create a memorable brand identity that stands out',
    features: ['Logo Design', 'Brand Guidelines', 'Visual Identity'],
    icon: 'PenTool'
  },
  {
    title: 'Growth Strategy',
    description: 'Data-driven strategies to scale your business',
    features: ['Market Analysis', 'Growth Planning', 'Performance Tracking'],
    icon: 'Rocket'
  }
] as const;
export const ROUTES = {
  'home': {
    label: 'home',
    path: '#home'
  },
  'about': {
    label: 'about',
    path: '#about'
  },
  'experiences': {
    label: 'experiences',
    path: '#experiences'
  },
  'projects': {
    label: 'projects',
    path: '#projects'
  },
  'contact': {
    label: 'contact',
    path: '#contact'
  },
} as const

export type RouteKeysType = keyof typeof ROUTES;
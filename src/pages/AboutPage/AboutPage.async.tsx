import { lazy } from 'react'

export const AboutPageAsync = lazy(() => new Promise(resolve => {
  // @ts-ignore TODO потом убрать задержку
  setTimeout(() => resolve(import('./AboutPage')), 2000)
}))
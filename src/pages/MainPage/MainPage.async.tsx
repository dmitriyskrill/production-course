import { lazy } from 'react'

export const MainPageAsync = lazy(() => new Promise(resolve => {
  // @ts-ignore TODO потом убрать задержку
  setTimeout(() => resolve(import('./MainPage')), 2000)
}))
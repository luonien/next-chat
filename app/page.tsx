'use client'
import Navigation from '@/components/home/Navigation'
import Main from '@/components/home/Main'
import { useAppContext } from '@/components/AppContext'
export default function Home() {
  const {
    state: { themeMode }
  } = useAppContext()
  return (
      <div className={`flex  ${themeMode==='dark'?'bg-gray-800 dark':'bg-white'} w-screen h-screen`}>
        <Navigation />
        <Main />
      </div>
  )
}

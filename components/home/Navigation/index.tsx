'use client'
import { useAppContext } from '@/components/AppContext'
import Menubar from './Menubar'
import Toolbar from './Toolbar'
import ChatList from './ChatList'

export default function Navigation() {
  const {
    state: { displayNavigation },
  } = useAppContext()
  return (
    <nav
      className={`dark flex flex-col w-[260px] relative bg-gray-900 text-gray-300 h-full transform transition-all duration-300  p-2 ${
        displayNavigation ? '-translate-x-0' : '-translate-x-[260px] ml-[-260px]'
      } `}
    >
      <Menubar />
      <ChatList/>
      <Toolbar/>
    </nav>
  )
}

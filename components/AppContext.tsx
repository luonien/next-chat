'use client'

import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useMemo, useState } from 'react'

interface IState {
  displayNavigation: boolean
}
interface AppContextProps {
  state: IState
  setState: Dispatch<SetStateAction<IState>>
}

const AppContext = createContext<AppContextProps>(null!)
export  function useAppContext(){
  return useContext(AppContext)
}
export default function AppContextProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState({ displayNavigation: true })
  const contextValue = useMemo(() => {
    return { state, setState }
  }, [state, setState])
  return <AppContext.Provider value={contextValue}>{children} </AppContext.Provider>
}

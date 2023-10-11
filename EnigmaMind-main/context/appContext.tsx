import { createContext, useState } from "react";
import { Documents } from "sanity/schema";

type AppContextType = {
  data: Documents[] | null
  setData: React.Dispatch<React.SetStateAction<Documents[] | null>>
}

export const AppContext = createContext<AppContextType>({ data: null, setData: () => { } } as AppContextType)

export default function AppProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<Documents[] | null>(null)
  return (
    <AppContext.Provider value={{ data, setData }}>
      {children}
    </AppContext.Provider>
  );
}
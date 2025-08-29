// NavContext.tsx
import React, { createContext, useState, type ReactNode, type Dispatch, type SetStateAction, useContext } from "react";

type NavContextType = [boolean, Dispatch<SetStateAction<boolean>>];

export const NavBarContext = createContext<NavContextType | undefined>(undefined);

const NavContextProvider = ({ children }: { children: ReactNode }) => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <NavBarContext.Provider value={[navOpen, setNavOpen]}>
      {children}
    </NavBarContext.Provider>
  );
};

// ✅ Custom hook
export const useNav = () => {
  const ctx = useContext(NavBarContext);
  if (!ctx) throw new Error("useNav must be used inside NavContextProvider");
  return ctx;
};

export default NavContextProvider;
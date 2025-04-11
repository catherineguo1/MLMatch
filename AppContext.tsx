import React, { createContext, useState, ReactNode } from 'react';

// Define the shape of the context
interface AppContextType {
  currentView: string;
  setCurrentView: (view: string) => void;
  viewParams: any; // You can replace `any` with a more specific type if known
  setViewParams: (params: any) => void;
}

// Create context with a default value (you can also use `undefined` and check before using)
export const AppContext = createContext<AppContextType | undefined>(undefined);

// Define the props for the provider component
interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [currentView, setCurrentView] = useState<string>('home');
  const [viewParams, setViewParams] = useState<any>(null); // Again, replace `any` with a concrete type if possible

  return (
    <AppContext.Provider value={{ currentView, setCurrentView, viewParams, setViewParams }}>
      {children}
    </AppContext.Provider>
  );
};

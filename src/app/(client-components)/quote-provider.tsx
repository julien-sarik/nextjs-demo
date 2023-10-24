'use client'

import { createContext, useState } from "react";

// a context allows to pass a state in a component deep down in the tree without relying on props
export const QuoteContext = createContext({currentQuote: '', setCurrentQuote: (a: any) => {}});

export default function QuoteProvider({ children }: { children: React.ReactNode }) {
  const [currentQuote, setCurrentQuote] = useState('');
  return <QuoteContext.Provider value={{currentQuote, setCurrentQuote}}>{children}</QuoteContext.Provider>
}
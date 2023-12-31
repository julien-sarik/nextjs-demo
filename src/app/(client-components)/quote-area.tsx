'use client'

import Quote from "../(server-components)/quote";
import { useState } from 'react';

export default function QuoteArea() {
  // test if sessionStorage is defined to avoid crashing during static export
  const [quote, setQuote] = useState(typeof sessionStorage !== 'undefined'? sessionStorage.getItem('quote'): null);

  async function handleClick() {
    const quote: string = await generateQuote()
    sessionStorage.setItem('quote', quote)
    setQuote(quote)
  }

  return <>
    <Quote quote={quote}></Quote>
    <button onClick={handleClick}>Generate new quote</button>
  </>
}

async function generateQuote(): Promise<string> {
  return await fetch(`${process.env.NEXT_PUBLIC_QUOTE_URL}`).then(res => res.json())
}
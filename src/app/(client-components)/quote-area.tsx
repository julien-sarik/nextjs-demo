'use client'

import Quote from "../(server-components)/quote";
import { useContext } from 'react';
import { QuoteContext } from "./quote-provider";

export default function QuoteArea() {

  async function handleClick() {
    const quote: string = await generateQuote()
    ctx.setCurrentQuote(quote)
  }

  const ctx = useContext(QuoteContext)
  return <>
    <Quote quote={ctx.currentQuote}></Quote>
    <button onClick={handleClick}>Generate new quote</button>
  </>
}

async function generateQuote(): Promise<string> {
  return await fetch(`${process.env.NEXT_PUBLIC_QUOTE_URL}`).then(res => res.json())
}
import QuoteArea from "@/app/(client-components)/quote-area";

// `app/data-fetching/client-side/page.tsx` is the UI for the `/data-fetching/client-side` URL
export default function Page() {
  return <>
    <h1>Below is a client component that fetches data from <a href={process.env.NEXT_PUBLIC_QUOTE_URL}>{process.env.NEXT_PUBLIC_QUOTE_URL}</a></h1>
    <QuoteArea/>
  </>
}
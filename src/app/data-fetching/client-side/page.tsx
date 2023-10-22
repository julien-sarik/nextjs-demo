import Quote from "../../(quotes)/quote";

// `app/data-fetching/client-side/page.tsx` is the UI for the `/data-fetching/client-side` URL
export default function Page() {
    return <div className="content">
      <h1>Below is a client component that fetches data from https://ron-swanson-quotes.herokuapp.com/v2/quotes</h1>
      <Quote/>
    </div>
}
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="home">
        <p>This is a simple website I did when learning React & Next.js.</p>
        <p>It&apos;s deployed through the awesome <a href="https://pages.github.com/">Github Pages</a>.</p>
      </div>
    </main>
  )
}

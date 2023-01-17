import Link from 'next/link'

export default function Home() {
  return (
    <div className='page'>
      <h1 className='animate-gradient-text'>Introduction to Next.js</h1>
      <div className='container'>
        <Link href={'https://github.com/knowit-finland-javascript-guild/nextjs-introduction'}>
          Check github for more instructions
        </Link>
      </div>
    </div>
  )
}

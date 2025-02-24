import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-travel-beige text-travel-espresso p-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="font-bold text-2xl flex items-center">
          <span className="text-travel-accent">Schwippy</span>Trippy
        </Link>
        
        <div className="space-x-6">
          <Link href="/" className="hover:text-travel-accent transition-colors duration-200">Home</Link>
          <Link href="/destinations" className="hover:text-travel-accent transition-colors duration-200">Destinations</Link>
          <Link href="/about" className="hover:text-travel-accent transition-colors duration-200">About</Link>
          <Link href="/travel-tips" className="hover:text-travel-accent transition-colors duration-200">Travel Tips</Link>
          <Link href="/blog" className="hover:text-travel-accent transition-colors duration-200">Blog</Link>
        </div>
      </div>
    </nav>
  )
}
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  // Featured destinations data
  const featuredDestinations = [
    {
      id: 1,
      title: "Bali Bliss",
      image: "/images/bali.jpg", 
      description: "Discover the spiritual paradise of temples and beaches",
      slug: "bali-bliss"
    },
    {
      id: 2,
      title: "Tokyo Adventure",
      image: "/images/tokyo.jpg",
      description: "Navigate the neon-lit streets of Japan's dynamic capital",
      slug: "tokyo-adventure"
    },
    {
      id: 3,
      title: "Paris Romance",
      image: "/images/paris.jpg",
      description: "Explore the city of lights and its timeless charm",
      slug: "paris-romance"
    },
  ];

  // Recent blog posts data
  const recentPosts = [
    {
      id: 1,
      title: "10 Essential Packing Tips For Long-Term Travel",
      image: "/images/packing.jpg",
      date: "February 18, 2025",
      excerpt: "Master the art of minimalist packing with these game-changing tips...",
      slug: "essential-packing-tips"
    },
    {
      id: 2,
      title: "How to Travel on a Budget Without Sacrificing Experience",
      image: "/images/budget-travel.jpg",
      date: "February 10, 2025",
      excerpt: "Discover smart strategies to stretch your travel budget further...",
      slug: "budget-travel-tips"
    },
  ];

  return (
    <main className="bg-travel-beige min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-travel-sand flex items-center">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="container mx-auto px-6 relative z-10 text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Explore. Dream. Discover.</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Join our journey as we wander the world and share our adventures, tips, and stories.
          </p>
          <Link href="/destinations" 
                className="bg-travel-accent hover:bg-travel-caramel text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 inline-block">
            Start Exploring
          </Link>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-travel-espresso mb-2">Featured Destinations</h2>
            <p className="text-travel-caramel">Get inspired for your next adventure</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDestinations.map((destination) => (
              <Link href={`/destinations/${destination.slug}`} key={destination.id} className="group">
                <div className="bg-travel-beige rounded-lg overflow-hidden shadow-lg transition-transform duration-300 group-hover:transform group-hover:scale-105">
                  <div className="relative h-64 w-full">
                    <div className="absolute inset-0 bg-travel-accent opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    {/* Replace with actual Images once you have them */}
                    <div className="bg-travel-sand h-full w-full flex items-center justify-center text-travel-espresso">
                      {destination.title} Image
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-travel-espresso mb-2">{destination.title}</h3>
                    <p className="text-travel-caramel">{destination.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/destinations" 
                  className="border-2 border-travel-caramel text-travel-caramel hover:bg-travel-caramel hover:text-white font-semibold py-2 px-6 rounded-full transition-colors duration-300">
              View All Destinations
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Blog Posts */}
      <section className="py-16 bg-travel-beige">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-travel-espresso mb-2">From The Blog</h2>
            <p className="text-travel-caramel">Travel stories, tips, and inspiration</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recentPosts.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.id}>
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-64 w-full">
                    {/* Replace with actual Images once you have them */}
                    <div className="bg-travel-sand h-full w-full flex items-center justify-center text-travel-espresso">
                      {post.title} Image
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-travel-accent font-medium mb-2">{post.date}</p>
                    <h3 className="text-xl font-bold text-travel-espresso mb-2">{post.title}</h3>
                    <p className="text-travel-caramel mb-4">{post.excerpt}</p>
                    <span className="text-travel-accent font-medium flex items-center">
                      Read More
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/blog" 
                  className="bg-travel-caramel hover:bg-travel-espresso text-white font-semibold py-2 px-6 rounded-full transition-colors duration-300">
              Read All Posts
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-travel-sand">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-travel-espresso mb-2">Join Our Travel Community</h2>
            <p className="text-travel-caramel mb-8">
              Subscribe to our newsletter and get travel tips, exclusive content, and inspiration delivered straight to your inbox.
            </p>
            
            <form className="flex flex-col md:flex-row gap-4 justify-center">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-3 rounded-full flex-grow max-w-md focus:outline-none focus:ring-2 focus:ring-travel-accent"
                required
              />
              <button 
                type="submit" 
                className="bg-travel-accent hover:bg-travel-caramel text-white font-bold py-3 px-8 rounded-full transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
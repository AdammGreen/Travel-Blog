import Link from 'next/link'

export default function Blog() {
  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "10 Essential Packing Tips For Long-Term Travel",
      excerpt: "Master the art of minimalist packing with these game-changing tips that will make your journey smoother and more enjoyable.",
      image: "/images/packing.jpg",
      category: "Travel Tips",
      date: "February 18, 2025",
      author: "Arlene Schwippert",
      authorImage: "/images/alex.jpg",
      slug: "essential-packing-tips",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "How to Travel on a Budget Without Sacrificing Experience",
      excerpt: "Discover smart strategies to stretch your travel budget further while still enjoying authentic and memorable experiences.",
      image: "/images/budget-travel.jpg",
      category: "Budget Travel",
      date: "February 10, 2025",
      author: "Maya Johnson",
      authorImage: "/images/maya.jpg",
      slug: "budget-travel-tips",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "The Art of Solo Travel: Finding Yourself Abroad",
      excerpt: "Embark on a journey of self-discovery as we explore the transformative power of traveling alone and embracing new cultures.",
      image: "/images/solo-travel.jpg",
      category: "Solo Travel",
      date: "February 5, 2025",
      author: "Jordan Chen",
      authorImage: "/images/jordan.jpg",
      slug: "art-of-solo-travel",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Hidden Gems: Unexplored Beaches of Southeast Asia",
      excerpt: "Escape the crowds and discover these pristine, lesser-known beaches that offer tranquility and natural beauty.",
      image: "/images/beaches.jpg",
      category: "Destinations",
      date: "January 29, 2025",
      author: "Sophia Patel",
      authorImage: "/images/sophia.jpg",
      slug: "hidden-beaches-southeast-asia",
      readTime: "8 min read"
    },
    {
      id: 5,
      title: "Sustainable Travel: How to Reduce Your Environmental Impact",
      excerpt: "Learn practical ways to make your travels more eco-friendly while still having amazing experiences around the world.",
      image: "/images/sustainable.jpg",
      category: "Sustainable Travel",
      date: "January 22, 2025",
      author: "Leo Thompson",
      authorImage: "/images/leo.jpg",
      slug: "sustainable-travel-guide",
      readTime: "6 min read"
    },
    {
      id: 6,
      title: "Digital Nomad Life: Working Remotely From Paradise",
      excerpt: "Insights and tips from experienced digital nomads on how to balance work and travel while living your dream lifestyle.",
      image: "/images/digital-nomad.jpg",
      category: "Digital Nomad",
      date: "January 15, 2025",
      author: "Emma Wright",
      authorImage: "/images/emma.jpg",
      slug: "digital-nomad-life",
      readTime: "9 min read"
    }
  ];

  // Sample categories
  const categories = [
    "All Categories",
    "Travel Tips",
    "Budget Travel",
    "Solo Travel",
    "Destinations",
    "Sustainable Travel",
    "Digital Nomad",
    "Food & Cuisine",
    "Adventure Travel"
  ];

  return (
    <main className="bg-travel-beige min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-travel-sand flex items-center">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="container mx-auto px-6 relative z-10 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Travel Blog</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Stories, tips, and insights from our global adventures
          </p>
        </div>
      </section>

      {/* Blog Filter */}
      <section className="py-8 bg-white sticky top-16 z-30 shadow-md">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-between">
            <div className="flex space-x-4 overflow-x-auto pb-2 flex-grow">
              {categories.map((category, index) => (
                <button 
                  key={index}
                  className={`px-4 py-2 rounded-full whitespace-nowrap font-medium transition-colors duration-200 ${
                    index === 0 
                      ? "bg-travel-accent text-white" 
                      : "bg-travel-beige text-travel-espresso hover:bg-travel-sand"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="mt-4 md:mt-0">
              <input 
                type="search" 
                placeholder="Search articles..." 
                className="px-4 py-2 rounded-full border border-travel-sand focus:outline-none focus:ring-2 focus:ring-travel-accent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <Link href={`/blog/${blogPosts[0].slug}`}>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="bg-travel-sand flex items-center justify-center md:h-full">
                  {/* Replace with actual image */}
                  <div className="p-12 text-travel-espresso font-semibold">Featured Post Image</div>
                </div>
                <div className="p-8 md:p-12">
                  <div className="mb-4">
                    <span className="bg-travel-accent/10 text-travel-accent px-3 py-1 rounded-full text-sm font-medium">
                      {blogPosts[0].category}
                    </span>
                    <span className="ml-4 text-travel-caramel text-sm">
                      {blogPosts[0].date}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-travel-espresso mb-4">{blogPosts[0].title}</h2>
                  <p className="text-travel-caramel mb-6 text-lg">{blogPosts[0].excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-travel-sand flex items-center justify-center mr-3">
                        {/* Author avatar placeholder */}
                      </div>
                      <div>
                        <p className="font-medium text-travel-espresso">{blogPosts[0].author}</p>
                        <p className="text-sm text-travel-caramel">{blogPosts[0].readTime}</p>
                      </div>
                    </div>
                    <button className="text-travel-accent font-medium flex items-center group">
                      Read Article
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform duration-200" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.id}>
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  <div className="h-48 bg-travel-sand flex items-center justify-center">
                    {/* Replace with actual image */}
                    <div className="text-travel-espresso font-semibold">{post.title} Image</div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="mb-3">
                      <span className="bg-travel-accent/10 text-travel-accent px-2 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                      <span className="ml-3 text-travel-caramel text-xs">
                        {post.date}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-travel-espresso mb-2">{post.title}</h3>
                    <p className="text-travel-caramel mb-4 flex-grow">{post.excerpt}</p>
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-travel-sand flex items-center justify-center mr-2">
                          {/* Author avatar placeholder */}
                        </div>
                        <div>
                          <p className="font-medium text-travel-espresso text-sm">{post.author}</p>
                          <p className="text-xs text-travel-caramel">{post.readTime}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-12 flex justify-center">
            <button className="bg-travel-caramel hover:bg-travel-espresso text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-travel-sand">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-travel-espresso mb-2">Never Miss a Story</h2>
            <p className="text-travel-caramel mb-8">
              Subscribe to our newsletter and get the latest travel tips, destination guides, and inspiration delivered to your inbox.
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
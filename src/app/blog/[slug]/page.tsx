import Link from 'next/link'

// This is a sample blog post page template
export default function BlogPost({ params }: { params: { slug: string } }) {
  // Sample post data - in a real app, this would come from a CMS or API
  const post = {
    title: "10 Essential Packing Tips For Long-Term Travel",
    excerpt: "Master the art of minimalist packing with these game-changing tips.",
    content: `
      <p>Packing for long-term travel can be a daunting task. Whether you're embarking on a six-month backpacking adventure or planning a year abroad as a digital nomad, the way you pack can make or break your experience.</p>

      <h2>1. Invest in the Right Backpack or Suitcase</h2>
      <p>The foundation of good packing starts with choosing the right luggage. For long-term travelers, a 40-60L backpack often works best.</p>

      <h2>2. Embrace the Capsule Wardrobe Concept</h2>
      <p>Choose a consistent color palette with 3-4 complementary colors that mix and match easily.</p>

      <h2>3. Master the Art of Rolling (Not Folding)</h2>
      <p>Rolling clothes instead of folding them saves significant space and reduces wrinkles.</p>
    `,
    image: "/images/packing.jpg",
    category: "Travel Tips",
    date: "February 18, 2025",
    author: "Arlene Schwippert",
    authorImage: "/images/alex.jpg",
    readTime: "5 min read",
    tags: ["Packing Tips", "Long-Term Travel", "Minimalist Travel"]
  };

  // Related posts
  const relatedPosts = [
    {
      id: 1,
      title: "How to Travel on a Budget Without Sacrificing Experience",
      image: "/images/budget-travel.jpg",
      category: "Budget Travel",
      date: "February 10, 2025",
      slug: "budget-travel-tips"
    },
    {
      id: 2,
      title: "The Art of Solo Travel: Finding Yourself Abroad",
      image: "/images/solo-travel.jpg",
      category: "Solo Travel",
      date: "February 5, 2025",
      slug: "art-of-solo-travel"
    }
  ];

  return (
    <main className="bg-travel-beige min-h-screen pb-16">
      {/* Hero Banner */}
      <section className="relative h-[40vh] bg-travel-sand flex items-center">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="container mx-auto px-6 relative z-10 text-white">
          <div className="max-w-4xl">
            <div className="mb-4">
              <Link href="/blog" className="inline-flex items-center text-white hover:text-travel-accent transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Back to Blog
              </Link>
            </div>
            <span className="bg-travel-accent px-3 py-1 rounded-full text-sm font-medium">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold mt-3 mb-4">{post.title}</h1>
            <div className="flex items-center text-sm md:text-base">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-travel-sand border-2 border-white flex items-center justify-center mr-3">
                  {/* Author avatar placeholder */}
                </div>
                <span className="font-medium">{post.author}</span>
              </div>
              <span className="mx-3">•</span>
              <span>{post.date}</span>
              <span className="mx-3">•</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl p-6 md:p-10 shadow-md">
                <div className="h-96 bg-travel-sand flex items-center justify-center rounded-lg mb-8">
                  {/* Main post image placeholder */}
                  <div className="text-travel-espresso font-semibold">Main Post Image</div>
                </div>
                
                <div className="prose max-w-none text-travel-espresso" dangerouslySetInnerHTML={{ __html: post.content }}>
                </div>
                
                {/* Tags */}
                <div className="mt-8 flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <Link href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`} key={index}>
                      <span className="bg-travel-beige px-3 py-1 rounded-full text-sm font-medium text-travel-espresso hover:bg-travel-sand transition-colors duration-200">
                        #{tag}
                      </span>
                    </Link>
                  ))}
                </div>
                
                {/* Share Buttons */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <p className="font-medium text-travel-espresso mb-3">Share this article:</p>
                  <div className="flex space-x-4">
                    <button className="bg-[#3b5998] p-2 rounded-full text-white">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      </svg>
                    </button>
                    <button className="bg-[#1da1f2] p-2 rounded-full text-white">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </button>
                    <button className="bg-[#bd081c] p-2 rounded-full text-white">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 0a12 12 0 00-4.5 23.142c-.06-.525-.12-1.33-.015-1.907.105-.88.69-5.54.69-5.54s-.18-.36-.18-.877c0-.825.48-1.438 1.065-1.438.495 0 .75.375.75.825 0 .5-.315 1.238-.48 1.926-.135.56.285 1.035.855 1.035 1.035 0 1.725-1.313 1.725-2.87 0-1.185-.795-2.07-2.25-2.07-1.635 0-2.655 1.215-2.655 2.58 0 .465.135.795.345 1.05.105.12.12.165.075.315-.03.105-.09.36-.12.465-.03.135-.135.195-.27.135-1-.405-1.44-1.5-1.44-2.73 0-2.025 1.71-4.47 5.1-4.47 2.73 0 4.515 1.965 4.515 4.095 0 2.805-1.56 4.89-3.855 4.89-.78 0-1.5-.42-1.755-.9l-.48 1.893c-.165.63-.615 1.426-.915 1.917A12.147 12.147 0 0012 24a12 12 0 000-24z" />
                      </svg>
                    </button>
                    <button className="bg-travel-caramel p-2 rounded-full text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Author Card */}
              <div className="bg-white rounded-xl p-6 shadow-md mb-8">
                <h3 className="text-xl font-bold text-travel-espresso mb-4">About the Author</h3>
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-travel-sand flex items-center justify-center mr-4">
                    {/* Author avatar placeholder */}
                  </div>
                  <div>
                    <h4 className="font-bold text-travel-espresso">{post.author}</h4>
                    <p className="text-travel-caramel text-sm">Travel Writer & Photographer</p>
                  </div>
                </div>
                <p className="text-travel-caramel mb-4">A passionate traveler who has explored over 30 countries and loves sharing practical travel tips.</p>
                <div className="flex space-x-3">
                  <a href="#" className="text-travel-espresso hover:text-travel-accent">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="text-travel-espresso hover:text-travel-accent">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="text-travel-espresso hover:text-travel-accent">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M9.75 20.85c7.2 0 11.15-5.95 11.15-11.15 0-.2 0-.35-.05-.55a7.95 7.95 0 001.95-2.05c-.7.35-1.45.55-2.25.65.8-.5 1.4-1.25 1.7-2.15-.75.45-1.6.8-2.5 1a3.93 3.93 0 00-6.65 3.6 11 11 0 01-8-4.05 4 4 0 001.2 5.25 4.05 4.05 0 01-1.8-.5v.05a3.93 3.93 0 003.15 3.85 4.9 4.9 0 01-1.8.1 3.9 3.9 0 003.65 2.7A7.95 7.95 0 011.55 19a10.5 10.5 0 008.2 1.85z" />
                    </svg>
                  </a>
                </div>
              </div>
              
              {/* Related Posts */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-travel-espresso mb-4">Related Articles</h3>
                <div className="space-y-4">
                  {relatedPosts.map((relatedPost) => (
                    <Link href={`/blog/${relatedPost.slug}`} key={relatedPost.id}>
                      <div className="flex items-start group">
                        <div className="w-20 h-20 bg-travel-sand flex-shrink-0 rounded-md mr-3 flex items-center justify-center">
                          {/* Post thumbnail placeholder */}
                        </div>
                        <div>
                          <h4 className="font-medium text-travel-espresso group-hover:text-travel-accent transition-colors duration-200">
                            {relatedPost.title}
                          </h4>
                          <p className="text-travel-caramel text-sm">
                            {relatedPost.date}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-12 bg-travel-sand mt-12">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-travel-espresso mb-2">Enjoyed this article?</h2>
            <p className="text-travel-caramel mb-6">
              Subscribe to get more travel tips and destination guides delivered to your inbox.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 justify-center">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 rounded-full flex-grow max-w-md focus:outline-none focus:ring-2 focus:ring-travel-accent"
                required
              />
              <button 
                type="submit" 
                className="bg-travel-accent hover:bg-travel-caramel text-white font-bold py-2 px-6 rounded-full transition-colors duration-300"
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
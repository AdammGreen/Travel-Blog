import React from 'react';
import Link from 'next/link';

export default function TravelTips() {
  // Sample categories of travel tips
  const tipCategories = [
    {
      id: 1,
      title: "Packing & Gear",
      icon: "📦",
      description: "Smart packing strategies and essential travel gear recommendations",
      slug: "packing-gear",
      tipCount: 12
    },
    {
      id: 2,
      title: "Budget Travel",
      icon: "💰",
      description: "Money-saving tips for traveling on a tight budget",
      slug: "budget-travel",
      tipCount: 15
    },
    {
      id: 3,
      title: "Travel Safety",
      icon: "🛡️",
      description: "Stay safe and secure while exploring new destinations",
      slug: "travel-safety",
      tipCount: 8
    },
    {
      id: 4,
      title: "Solo Travel",
      icon: "🧭",
      description: "Advice for making the most of your solo adventures",
      slug: "solo-travel",
      tipCount: 10
    },
    {
      id: 5,
      title: "Food & Dining",
      icon: "🍽️",
      description: "Culinary adventures and dining etiquette around the world",
      slug: "food-dining",
      tipCount: 9
    },
    {
      id: 6,
      title: "Photography",
      icon: "📸",
      description: "Capture stunning travel memories with these photography tips",
      slug: "photography",
      tipCount: 7
    },
    {
      id: 7,
      title: "Digital Nomad",
      icon: "💻",
      description: "Working remotely while traveling the world",
      slug: "digital-nomad",
      tipCount: 11
    },
    {
      id: 8,
      title: "Sustainable Travel",
      icon: "🌱",
      description: "Eco-friendly tips for reducing your travel footprint",
      slug: "sustainable-travel",
      tipCount: 8
    }
  ];

  // Sample featured tips
  const featuredTips = [
    {
      id: 1,
      title: "10 Essential Packing Tips For Long-Term Travel",
      category: "Packing & Gear",
      image: "/images/packing.jpg",
      excerpt: "Master the art of minimalist packing with these game-changing tips.",
      slug: "essential-packing-tips"
    },
    {
      id: 2,
      title: "How to Keep Your Belongings Safe While Traveling",
      category: "Travel Safety",
      image: "/images/travel-safety.jpg",
      excerpt: "Practical security tips to protect your valuables on the road.",
      slug: "belongings-safety-tips"
    },
    {
      id: 3,
      title: "Budget Accommodation: Beyond Hotels and Hostels",
      category: "Budget Travel",
      image: "/images/budget-accommodation.jpg",
      excerpt: "Discover alternative accommodation options that save money and enhance your experience.",
      slug: "budget-accommodation-options"
    }
  ];

  return (
    <main className="bg-travel-beige min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-travel-sand flex items-center">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="container mx-auto px-6 relative z-10 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Travel Tips</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Practical advice to help you travel smarter, safer, and more enjoyably
          </p>
        </div>
      </section>

      {/* Featured Tips */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-travel-espresso mb-8 text-center">Featured Tips</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredTips.map((tip) => (
              <div key={tip.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 bg-travel-sand flex items-center justify-center">
                  {/* Image placeholder */}
                  <div className="text-travel-espresso font-semibold">{tip.title} Image</div>
                </div>
                <div className="p-6">
                  <div className="mb-3">
                    <span className="bg-travel-accent/10 text-travel-accent px-3 py-1 rounded-full text-sm font-medium">
                      {tip.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-travel-espresso mb-2">{tip.title}</h3>
                  <p className="text-travel-caramel mb-4">{tip.excerpt}</p>
                  <Link 
                    href={`/blog/${tip.slug}`} 
                    className="text-travel-accent font-medium flex items-center group"
                  >
                    Read More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform duration-200" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tip Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-travel-espresso mb-8 text-center">Browse Tips by Category</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tipCategories.map((category) => (
              <Link 
                href={`/travel-tips/${category.slug}`} 
                key={category.id}
                className="bg-travel-beige rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 hover:bg-travel-sand"
              >
                <div className="flex flex-col h-full">
                  <div className="text-4xl mb-3">{category.icon}</div>
                  <h3 className="text-xl font-bold text-travel-espresso mb-2">{category.title}</h3>
                  <p className="text-travel-caramel mb-4 flex-grow">{category.description}</p>
                  <div className="text-sm text-travel-accent font-medium">
                    {category.tipCount} tips
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Tips */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-travel-espresso">Latest Travel Tips</h2>
            <Link 
              href="/blog?category=travel-tips" 
              className="bg-travel-accent hover:bg-travel-caramel text-white font-medium py-2 px-6 rounded-full transition-colors duration-300"
            >
              View All Tips
            </Link>
          </div>
          
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-md">
            <ul className="divide-y divide-travel-sand">
              <li className="py-4">
                <Link href="/blog/travel-safety-apps" className="group">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-travel-accent text-sm font-medium">Travel Safety</span>
                      <h3 className="text-lg font-semibold text-travel-espresso group-hover:text-travel-accent transition-colors duration-200">7 Must-Have Safety Apps for International Travel</h3>
                    </div>
                    <div className="text-travel-caramel text-sm">Feb 20, 2025</div>
                  </div>
                </Link>
              </li>
              <li className="py-4">
                <Link href="/blog/budget-airline-tips" className="group">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-travel-accent text-sm font-medium">Budget Travel</span>
                      <h3 className="text-lg font-semibold text-travel-espresso group-hover:text-travel-accent transition-colors duration-200">How to Find the Best Deals on Budget Airlines</h3>
                    </div>
                    <div className="text-travel-caramel text-sm">Feb 15, 2025</div>
                  </div>
                </Link>
              </li>
              <li className="py-4">
                <Link href="/blog/travel-photography-beginners" className="group">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-travel-accent text-sm font-medium">Photography</span>
                      <h3 className="text-lg font-semibold text-travel-espresso group-hover:text-travel-accent transition-colors duration-200">Travel Photography for Beginners: Capturing Memories Without Expensive Gear</h3>
                    </div>
                    <div className="text-travel-caramel text-sm">Feb 12, 2025</div>
                  </div>
                </Link>
              </li>
              <li className="py-4">
                <Link href="/blog/solo-travel-confidence" className="group">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-travel-accent text-sm font-medium">Solo Travel</span>
                      <h3 className="text-lg font-semibold text-travel-espresso group-hover:text-travel-accent transition-colors duration-200">Building Confidence for Your First Solo Trip</h3>
                    </div>
                    <div className="text-travel-caramel text-sm">Feb 8, 2025</div>
                  </div>
                </Link>
              </li>
              <li className="py-4">
                <Link href="/blog/street-food-safety" className="group">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-travel-accent text-sm font-medium">Food & Dining</span>
                      <h3 className="text-lg font-semibold text-travel-espresso group-hover:text-travel-accent transition-colors duration-200">How to Enjoy Street Food Safely Around the World</h3>
                    </div>
                    <div className="text-travel-caramel text-sm">Feb 5, 2025</div>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Email Tips Signup */}
      <section className="py-16 bg-travel-sand">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-travel-espresso mb-4">Get Weekly Travel Tips</h2>
            <p className="text-travel-caramel mb-8">
              Subscribe to our newsletter and receive a curated selection of our best travel tips directly to your inbox every week.
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

            <p className="mt-4 text-travel-caramel text-sm">
              Join 15,000+ travelers who already receive our tips. No spam, unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
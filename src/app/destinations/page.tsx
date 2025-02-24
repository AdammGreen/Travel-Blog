import Link from 'next/link'

export default function Destinations() {
  // Sample destinations data - in a real app, this would come from a database or API
  const continents = [
    {
      name: "Asia",
      destinations: [
        { id: 1, name: "Bali, Indonesia", slug: "bali-indonesia", imageUrl: "/images/bali.jpg" },
        { id: 2, name: "Tokyo, Japan", slug: "tokyo-japan", imageUrl: "/images/tokyo.jpg" },
        { id: 3, name: "Bangkok, Thailand", slug: "bangkok-thailand", imageUrl: "/images/bangkok.jpg" },
        { id: 4, name: "Kyoto, Japan", slug: "kyoto-japan", imageUrl: "/images/kyoto.jpg" },
      ]
    },
    {
      name: "Europe",
      destinations: [
        { id: 5, name: "Paris, France", slug: "paris-france", imageUrl: "/images/paris.jpg" },
        { id: 6, name: "Santorini, Greece", slug: "santorini-greece", imageUrl: "/images/santorini.jpg" },
        { id: 7, name: "Rome, Italy", slug: "rome-italy", imageUrl: "/images/rome.jpg" },
        { id: 8, name: "Barcelona, Spain", slug: "barcelona-spain", imageUrl: "/images/barcelona.jpg" },
      ]
    },
    {
      name: "North America",
      destinations: [
        { id: 9, name: "New York City, USA", slug: "new-york-city-usa", imageUrl: "/images/new-york.jpg" },
        { id: 10, name: "San Francisco, USA", slug: "san-francisco-usa", imageUrl: "/images/san-francisco.jpg" },
        { id: 11, name: "Mexico City, Mexico", slug: "mexico-city-mexico", imageUrl: "/images/mexico-city.jpg" },
        { id: 12, name: "Vancouver, Canada", slug: "vancouver-canada", imageUrl: "/images/vancouver.jpg" },
      ]
    }
  ];

  return (
    <main className="bg-travel-beige min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-travel-sand flex items-center">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="container mx-auto px-6 relative z-10 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Explore Destinations</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Discover breathtaking locations and plan your next adventure with our comprehensive travel guides.
          </p>
        </div>
      </section>

      {/* Destination Filter */}
      <section className="py-8 bg-white shadow-md sticky top-16 z-30">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-between">
            <div className="flex space-x-4 overflow-x-auto pb-2 flex-grow">
              <button className="px-4 py-2 rounded-full bg-travel-accent text-white font-medium whitespace-nowrap">
                All Destinations
              </button>
              <button className="px-4 py-2 rounded-full bg-travel-beige text-travel-espresso font-medium hover:bg-travel-sand whitespace-nowrap transition-colors duration-200">
                Asia
              </button>
              <button className="px-4 py-2 rounded-full bg-travel-beige text-travel-espresso font-medium hover:bg-travel-sand whitespace-nowrap transition-colors duration-200">
                Europe
              </button>
              <button className="px-4 py-2 rounded-full bg-travel-beige text-travel-espresso font-medium hover:bg-travel-sand whitespace-nowrap transition-colors duration-200">
                North America
              </button>
              <button className="px-4 py-2 rounded-full bg-travel-beige text-travel-espresso font-medium hover:bg-travel-sand whitespace-nowrap transition-colors duration-200">
                South America
              </button>
              <button className="px-4 py-2 rounded-full bg-travel-beige text-travel-espresso font-medium hover:bg-travel-sand whitespace-nowrap transition-colors duration-200">
                Africa
              </button>
              <button className="px-4 py-2 rounded-full bg-travel-beige text-travel-espresso font-medium hover:bg-travel-sand whitespace-nowrap transition-colors duration-200">
                Oceania
              </button>
            </div>
            <div className="mt-4 md:mt-0">
              <input 
                type="search" 
                placeholder="Search destinations..." 
                className="px-4 py-2 rounded-full border border-travel-sand focus:outline-none focus:ring-2 focus:ring-travel-accent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Destinations By Continent */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          {continents.map((continent) => (
            <div key={continent.name} className="mb-16">
              <h2 className="text-3xl font-bold text-travel-espresso mb-8 border-b-2 border-travel-sand pb-2">
                {continent.name}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {continent.destinations.map((destination) => (
                  <Link href={`/destinations/${destination.slug}`} key={destination.id}>
                    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <div className="relative h-56 bg-travel-sand flex items-center justify-center">
                        {/* Replace with actual images when available */}
                        <div className="text-travel-espresso font-semibold">
                          {destination.name} Image
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="text-xl font-bold text-travel-espresso">{destination.name}</h3>
                        <div className="flex items-center mt-2">
                          <span className="text-yellow-500 mr-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          </span>
                          <span className="text-travel-caramel">4.8</span>
                          <span className="mx-2 text-travel-caramel">•</span>
                          <span className="text-travel-caramel">Travel Guide</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-travel-sand">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-travel-espresso mb-4">Can't Find Your Dream Destination?</h2>
          <p className="text-travel-caramel mb-8 max-w-2xl mx-auto">
            We're constantly adding new destinations to our collection. Let us know what you'd like to see next!
          </p>
          <button className="bg-travel-accent hover:bg-travel-caramel text-white font-bold py-3 px-8 rounded-full transition-colors duration-300">
            Request a Destination
          </button>
        </div>
      </section>
    </main>
  )
}
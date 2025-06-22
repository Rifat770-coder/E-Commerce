import { Button } from '@/components/ui/button';

export default function FeaturedProducts() {
  const featuredCategories = [
    {
      title: 'Unparalleled Sound',
      description: 'Experience crystal-clear audio with premium headphones.',
      image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800',
      cta: 'Buy now',
      bgColor: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Stay Connected',
      description: 'Compact and stylish earphones for every occasion.',
      image: 'https://images.pexels.com/photos/8048020/pexels-photo-8048020.jpeg?auto=compress&cs=tinysrgb&w=800',
      cta: 'Buy now',
      bgColor: 'from-blue-500 to-teal-500'
    },
    {
      title: 'Power in Every Pixel',
      description: 'Shop the latest laptops for work, gaming, and more.',
      image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
      cta: 'Buy now',
      bgColor: 'from-green-500 to-blue-500'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto rounded-full"></div>
        </div>

        {/* Featured Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredCategories.map((category, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-lg group hover:shadow-2xl transition-all duration-300"
            >
              {/* Background Image */}
              <div className="aspect-[4/3] relative">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.bgColor} opacity-80 group-hover:opacity-70 transition-opacity duration-300`}></div>
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                <p className="text-white/90 mb-4 leading-relaxed">
                  {category.description}
                </p>
                <Button 
                  className="self-start bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  {category.cta} ↗
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Gaming Section */}
        <div className="mt-16 relative overflow-hidden rounded-3xl shadow-2xl">
          <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Content */}
              <div className="text-white space-y-6">
                <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                  Gaming Collection
                </div>
                <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                  Ultimate gaming experience with everything you need to win
                </h3>
                <p className="text-white/90 text-lg leading-relaxed">
                  Discover our complete gaming ecosystem designed for champions. From high-performance consoles to precision controllers.
                </p>
                <Button 
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Buy now →
                </Button>
              </div>

              {/* Image */}
              <div className="relative">
                <div className="relative z-10">
                  <img
                    src="https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Gaming setup"
                    className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-xl"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-orange-500/20 rounded-full blur-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
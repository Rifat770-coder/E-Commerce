'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Heart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { useCart } from '@/hooks/useCart';
import { toast } from 'sonner';

const popularProducts = [
  {
    id: '1',
    name: 'Apple AirPods Pro 2nd gen',
    description: 'Apple AirPods Pro (2nd Gen) with MagSafe Case',
    price: 399.99,
    originalPrice: 499.99,
    rating: 4.5,
    reviews: 1234,
    image: 'https://images.pexels.com/photos/8048020/pexels-photo-8048020.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Audio'
  },
  {
    id: '2',
    name: 'Canon EOS R5',
    description: 'The Canon EOS R5 is a game-changing mirrorless camera',
    price: 3899.99,
    originalPrice: 4299.99,
    rating: 4.8,
    reviews: 567,
    image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Cameras'
  },
  {
    id: '3',
    name: 'PlayStation 5',
    description: 'The PlayStation 5 takes gaming to the next level',
    price: 499.99,
    originalPrice: 599.99,
    rating: 4.6,
    reviews: 2890,
    image: 'https://images.pexels.com/photos/10627840/pexels-photo-10627840.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Gaming'
  },
  {
    id: '4',
    name: 'Samsung Galaxy S23',
    description: 'The Samsung Galaxy S23 offers an incredible mobile experience',
    price: 799.99,
    originalPrice: 899.99,
    rating: 4.3,
    reviews: 1567,
    image: 'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Phones'
  },
  {
    id: '5',
    name: 'ASUS ROG Zephyrus G16',
    description: 'The ASUS ROG Zephyrus G16 gaming laptop delivers exceptional performance',
    price: 1999.99,
    originalPrice: 2299.99,
    rating: 4.7,
    reviews: 423,
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=500',
    category: 'Laptops'
  },
  {
    id: '6',
    name: 'Garmin Venu 2',
    description: 'The Garmin Venu 2 smartwatch blends fitness tracking with style',
    price: 349.99,
    originalPrice: 399.99,
    rating: 4.5,
    reviews: 890,
    image: 'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Wearables'
  },
  {
    id: '7',
    name: 'Sony WF-1000XM5',
    description: 'Sony WF-1000XM5 true wireless earbuds with industry-leading noise canceling',
    price: 299.99,
    originalPrice: 349.99,
    rating: 4.6,
    reviews: 1123,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Audio'
  },
  {
    id: '8',
    name: 'Samsung Projector 4k',
    description: 'The Samsung 4K Projector offers an immersive home theater experience',
    price: 1499.99,
    originalPrice: 1799.99,
    rating: 4.4,
    reviews: 234,
    image: 'https://images.pexels.com/photos/274937/pexels-photo-274937.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Electronics'
  },
  {
    id: '9',
    name: 'Bose QuietComfort 45',
    description: 'The Bose QuietComfort 45 headphones deliver world-class noise cancellation',
    price: 329.99,
    originalPrice: 379.99,
    rating: 4.7,
    reviews: 1678,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Audio'
  },
  {
    id: '10',
    name: 'MacBook Pro 16',
    description: 'The MacBook Pro 16, powered by Apple Silicon, delivers unprecedented performance',
    price: 2499.99,
    originalPrice: 2799.99,
    rating: 4.8,
    reviews: 892,
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=500',
    category: 'Laptops'
  }
];

export default function PopularProducts() {
  const [wishlist, setWishlist] = useState<string[]>([]);
  const { addItem } = useCart();

  const toggleWishlist = (productId: string) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const handleAddToCart = (product: any) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
    toast.success(`${product.name} added to cart!`);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < Math.floor(rating)
            ? 'text-yellow-400 fill-current'
            : index < rating
            ? 'text-yellow-400 fill-current opacity-50'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Popular products</h2>
          <Link 
            href="/shop" 
            className="text-orange-500 hover:text-orange-600 font-medium transition-colors"
          >
            See more →
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {popularProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md overflow-hidden">
              <div className="relative">
                <div className="aspect-square overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* Wishlist Button */}
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className="absolute top-3 right-3 p-2 bg-white/90 hover:bg-white rounded-full shadow-md transition-all duration-200"
                >
                  <Heart
                    className={`h-4 w-4 ${
                      wishlist.includes(product.id)
                        ? 'text-red-500 fill-current'
                        : 'text-gray-400'
                    }`}
                  />
                </button>

                {/* Discount Badge */}
                {product.originalPrice > product.price && (
                  <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-md text-xs font-semibold">
                    -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                  </div>
                )}
              </div>

              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1 line-clamp-1">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {product.description}
                </p>
                
                {/* Rating */}
                <div className="flex items-center gap-1 mb-3">
                  <div className="flex">
                    {renderStars(product.rating)}
                  </div>
                  <span className="text-sm text-gray-500 ml-1">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-lg font-bold text-gray-900">
                    ${product.price}
                  </span>
                  {product.originalPrice > product.price && (
                    <span className="text-sm text-gray-500 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
              </CardContent>

              <CardFooter className="p-4 pt-0">
                <Button
                  onClick={() => handleAddToCart(product)}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg transition-colors duration-200"
                >
                  Buy now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
import HeroSection from '@/components/home/HeroSection';
import PopularProducts from '@/components/home/PopularProducts';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import Newsletter from '@/components/home/Newsletter';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <PopularProducts />
      <FeaturedProducts />
      <Newsletter />
    </div>
  );
}
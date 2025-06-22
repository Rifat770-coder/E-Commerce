import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shop - QuickCart',
  description: 'Browse our wide selection of products with great deals and fast shipping.',
};

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Shop</h1>
          <p className="text-lg text-gray-600 mb-8">
            Browse our amazing collection of products
          </p>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-500">
              Shop page is under development. Product filtering, search, and advanced features coming soon!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
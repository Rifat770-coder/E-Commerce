import { Metadata } from 'next';
import CartContent from '@/components/cart/CartContent';

export const metadata: Metadata = {
  title: 'Shopping Cart - QuickCart',
  description: 'Review your selected items and proceed to checkout.',
};

export default function CartPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
        <CartContent />
      </div>
    </div>
  );
}
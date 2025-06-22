import { Metadata } from 'next';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Admin Dashboard - QuickCart',
  description: 'Manage products, orders, and customers.',
};

export default function AdminPage() {
  // In a real app, you'd check user role here
  // const { userId } = auth();
  // if (!userId) redirect('/sign-in');

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Admin Dashboard</h1>
          <p className="text-lg text-gray-600 mb-8">
            Manage your e-commerce platform
          </p>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-500">
              Admin dashboard with product management, order tracking, and analytics coming soon!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
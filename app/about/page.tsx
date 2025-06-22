import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - QuickCart',
  description: 'Learn more about QuickCart and our mission to provide the best online shopping experience.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
          <p className="text-lg text-gray-600 mb-8">
            Learn more about QuickCart and our mission
          </p>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-500">
              About page content coming soon. Learn about our company history, mission, and values.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
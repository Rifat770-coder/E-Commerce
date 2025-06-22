import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - QuickCart',
  description: 'Get in touch with our customer support team. We\'re here to help!',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 mb-8">
            We'd love to hear from you. Get in touch!
          </p>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-500">
              Contact form and support information coming soon.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
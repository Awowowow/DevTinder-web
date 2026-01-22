import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="space-y-6 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">1. Introduction</h2>
            <p>
              Welcome to DevConnect. We respect your privacy and are committed to protecting your personal data. 
              This privacy policy will inform you about how we look after your personal data when you visit our 
              website and tell you about your privacy rights and how the law protects you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">2. Data We Collect</h2>
            <p>We may collect, use, store and transfer different kinds of personal data about you:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Identity Data: first name, last name, username</li>
              <li>Contact Data: email address, profile information</li>
              <li>Technical Data: IP address, browser type, device information</li>
              <li>Usage Data: information about how you use our website and services</li>
              <li>Marketing and Communications Data: your preferences for marketing communications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">3. How We Use Your Data</h2>
            <p>We use your personal data for the following purposes:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>To register you as a new user and manage your account</li>
              <li>To provide and maintain our services</li>
              <li>To process your transactions and manage payments</li>
              <li>To communicate with you about updates and changes</li>
              <li>To improve our website and services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">4. Payment Processing</h2>
            <p>
              We use Razorpay as our payment gateway. When you make a payment, your payment information 
              is processed securely by Razorpay. We do not store your complete credit card information 
              on our servers. Please refer to Razorpay's privacy policy for more information on how they 
              handle your payment data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">5. Data Security</h2>
            <p>
              We have implemented appropriate security measures to prevent your personal data from being 
              accidentally lost, used, or accessed in an unauthorized way. We limit access to your personal 
              data to those employees, agents, contractors, and other third parties who have a business need 
              to know.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">6. Your Rights</h2>
            <p>Under data protection laws, you have rights including:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>The right to access your personal data</li>
              <li>The right to correct inaccurate personal data</li>
              <li>The right to request deletion of your personal data</li>
              <li>The right to object to processing of your personal data</li>
              <li>The right to data portability</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">7. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our privacy practices, please contact us at:
            </p>
            <p className="mt-2">
              Email: privacy@devconnect.com<br />
              Address: [Your Company Address]
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
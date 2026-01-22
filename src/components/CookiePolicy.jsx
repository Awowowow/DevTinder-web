import React from 'react';

const CookiePolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">Cookie Policy</h1>
        <p className="text-sm text-gray-500 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="space-y-6 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">1. What Are Cookies</h2>
            <p>
              Cookies are small text files that are placed on your computer or mobile device when you visit 
              our website. They are widely used to make websites work more efficiently and provide information 
              to the website owners.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">2. How We Use Cookies</h2>
            <p>DevConnect uses cookies for the following purposes:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li><strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility.</li>
              <li><strong>Authentication Cookies:</strong> We use cookies to keep you logged in and remember your session.</li>
              <li><strong>Preference Cookies:</strong> These cookies allow us to remember your preferences and settings.</li>
              <li><strong>Analytics Cookies:</strong> We use these to understand how visitors interact with our website, helping us improve user experience.</li>
              <li><strong>Performance Cookies:</strong> These cookies help us measure and improve the performance of our website.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">3. Types of Cookies We Use</h2>
            
            <div className="mt-4">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Session Cookies</h3>
              <p>
                These are temporary cookies that expire when you close your browser. We use session cookies 
                to maintain your login state and ensure smooth navigation through our website.
              </p>
            </div>

            <div className="mt-4">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Persistent Cookies</h3>
              <p>
                These cookies remain on your device for a set period or until you delete them. We use persistent 
                cookies to remember your preferences and provide a personalized experience.
              </p>
            </div>

            <div className="mt-4">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Third-Party Cookies</h3>
              <p>
                Some cookies are placed by third-party services that appear on our pages. These may include:
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Analytics providers (e.g., Google Analytics)</li>
                <li>Payment processors (e.g., Razorpay)</li>
                <li>Social media platforms</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">4. Cookie Details</h2>
            <div className="overflow-x-auto mt-4">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2 text-left">Cookie Name</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Purpose</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">auth_token</td>
                    <td className="border border-gray-300 px-4 py-2">Authentication and session management</td>
                    <td className="border border-gray-300 px-4 py-2">7 days</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">user_preferences</td>
                    <td className="border border-gray-300 px-4 py-2">Store user preferences and settings</td>
                    <td className="border border-gray-300 px-4 py-2">1 year</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">_ga</td>
                    <td className="border border-gray-300 px-4 py-2">Google Analytics - distinguish users</td>
                    <td className="border border-gray-300 px-4 py-2">2 years</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">_gid</td>
                    <td className="border border-gray-300 px-4 py-2">Google Analytics - distinguish users</td>
                    <td className="border border-gray-300 px-4 py-2">24 hours</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">5. Managing Cookies</h2>
            <p>
              You have the right to decide whether to accept or reject cookies. You can set or amend your 
              web browser controls to accept or refuse cookies.
            </p>
            
            <div className="mt-4">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Browser Settings</h3>
              <p>Most web browsers allow you to control cookies through their settings. To find out more about cookies and how to manage them, visit:</p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Chrome: Settings &gt; Privacy and security &gt; Cookies</li>
                <li>Firefox: Settings &gt; Privacy & Security &gt; Cookies and Site Data</li>
                <li>Safari: Preferences &gt; Privacy &gt; Cookies and website data</li>
                <li>Edge: Settings &gt; Privacy, search, and services &gt; Cookies</li>
              </ul>
            </div>

            <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm">
                <strong>Note:</strong> If you choose to disable cookies, some features of our website may not 
                function properly, and you may not be able to access certain parts of our service.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">6. Do Not Track Signals</h2>
            <p>
              Some browsers incorporate a "Do Not Track" (DNT) feature that signals to websites you visit that 
              you do not want to have your online activity tracked. We currently do not respond to DNT signals.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">7. Third-Party Cookies</h2>
            <p>
              In addition to our own cookies, we may also use various third-party cookies to report usage 
              statistics and deliver advertisements. These third parties have their own privacy policies:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Google Analytics: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">Privacy Policy</a></li>
              <li>Razorpay: <a href="https://razorpay.com/privacy/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">Privacy Policy</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">8. Updates to This Policy</h2>
            <p>
              We may update our Cookie Policy from time to time to reflect changes in our practices or for 
              other operational, legal, or regulatory reasons. We encourage you to review this page periodically.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">9. Contact Us</h2>
            <p>
              If you have any questions about our use of cookies, please contact us at:
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

export default CookiePolicy;
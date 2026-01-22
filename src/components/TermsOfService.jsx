import React from 'react';

const TermsOfService = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">Terms of Service</h1>
        <p className="text-sm text-gray-500 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="space-y-6 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">1. Acceptance of Terms</h2>
            <p>
              By accessing and using DevConnect, you accept and agree to be bound by the terms and provision 
              of this agreement. If you do not agree to these Terms of Service, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">2. Use of Service</h2>
            <p>You agree to use DevConnect only for lawful purposes and in accordance with these Terms. You agree not to:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Use the service in any way that violates any applicable laws or regulations</li>
              <li>Impersonate or attempt to impersonate another user or person</li>
              <li>Engage in any conduct that restricts or inhibits anyone's use of the service</li>
              <li>Use any automated system to access the service</li>
              <li>Transmit any viruses, malware, or other harmful code</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">3. User Accounts</h2>
            <p>
              When you create an account with us, you must provide information that is accurate, complete, 
              and current. Failure to do so constitutes a breach of the Terms. You are responsible for 
              safeguarding the password and for all activities that occur under your account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">4. Payments and Subscriptions</h2>
            <p>
              If you purchase any services or subscriptions through DevConnect, you agree to pay all fees 
              and charges incurred. All payments are processed through Razorpay. By making a purchase, you 
              agree to provide current, complete, and accurate purchase and account information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">5. Intellectual Property</h2>
            <p>
              The service and its original content, features, and functionality are owned by DevConnect and 
              are protected by international copyright, trademark, patent, trade secret, and other intellectual 
              property laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">6. User Content</h2>
            <p>
              You retain all rights to any content you submit, post, or display on or through the service. 
              By posting content, you grant us a non-exclusive, worldwide, royalty-free license to use, 
              display, and distribute your content in connection with the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">7. Limitation of Liability</h2>
            <p>
              In no event shall DevConnect, nor its directors, employees, partners, agents, suppliers, or 
              affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, 
              including loss of profits, data, or other intangible losses.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">8. Termination</h2>
            <p>
              We may terminate or suspend your account immediately, without prior notice, for any reason, 
              including breach of these Terms. Upon termination, your right to use the service will immediately cease.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">9. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. We will notify users of any changes by 
              posting the new Terms of Service on this page. Your continued use of the service after changes 
              constitutes acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">10. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="mt-2">
              Email: support@devconnect.com<br />
              Address: [Your Company Address]
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
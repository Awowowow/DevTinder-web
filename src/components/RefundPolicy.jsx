import React from 'react';

const RefundPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">Refund & Cancellation Policy</h1>
        <p className="text-sm text-gray-500 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="space-y-6 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">1. Overview</h2>
            <p>
              At DevConnect, we strive to provide the best service possible. This Refund and Cancellation 
              Policy outlines the conditions under which refunds and cancellations are processed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">2. Subscription Cancellations</h2>
            <p>
              You may cancel your subscription at any time through your account settings. Upon cancellation:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Your subscription will remain active until the end of your current billing period</li>
              <li>You will not be charged for subsequent billing periods</li>
              <li>You will retain access to premium features until the subscription expires</li>
              <li>No refunds will be provided for the unused portion of your current billing period</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">3. Refund Eligibility</h2>
            <p>Refunds may be considered under the following circumstances:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Technical issues that prevent you from using the service, which we are unable to resolve within 7 business days</li>
              <li>Duplicate charges or billing errors</li>
              <li>Unauthorized transactions (subject to verification)</li>
              <li>Service was not as described and complaint is made within 7 days of purchase</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">4. Non-Refundable Items</h2>
            <p>The following are not eligible for refunds:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Subscription fees for periods already consumed</li>
              <li>One-time purchases after 7 days from the date of purchase</li>
              <li>Services or features that have been fully utilized</li>
              <li>Discounted or promotional subscriptions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">5. Refund Process</h2>
            <p>To request a refund:</p>
            <ol className="list-decimal ml-6 mt-2 space-y-1">
              <li>Contact our support team at support@devconnect.com with your order details</li>
              <li>Provide a detailed explanation of why you're requesting a refund</li>
              <li>Our team will review your request within 3-5 business days</li>
              <li>If approved, refunds will be processed within 7-10 business days</li>
              <li>Refunds will be credited to the original payment method used for purchase</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">6. Payment Processing</h2>
            <p>
              All payments are processed through Razorpay. In case of payment-related issues or disputes, 
              you may also contact Razorpay's support team. Please note that processing times may vary 
              depending on your bank or card issuer.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">7. Promotional Offers</h2>
            <p>
              Special promotional offers, discounts, and trial periods may have different cancellation and 
              refund terms. These will be clearly communicated at the time of purchase. Please review the 
              specific terms before making a purchase.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">8. Changes to This Policy</h2>
            <p>
              We reserve the right to modify this Refund and Cancellation Policy at any time. Changes will 
              be effective immediately upon posting to our website. Your continued use of our services after 
              changes are posted constitutes acceptance of the modified policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">9. Contact Information</h2>
            <p>
              For questions about refunds or cancellations, please contact us:
            </p>
            <p className="mt-2">
              Email: support@devconnect.com<br />
              Phone: 4536456743<br />
              Address: Himachal Pradesh
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
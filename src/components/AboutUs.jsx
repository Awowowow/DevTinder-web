import React from 'react';

const AboutUs = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          About DevConnect
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Connecting developers worldwide to build, collaborate, and grow together in the ever-evolving tech landscape.
        </p>
      </div>

      {/* Mission Section */}
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Mission</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          At DevConnect, we believe that the best innovations happen when talented developers come together. 
          Our mission is to create a vibrant community where developers of all skill levels can connect, 
          share knowledge, and collaborate on exciting projects.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          We're building more than just a platform – we're fostering a global network of passionate developers 
          who support each other's growth and celebrate collective achievements.
        </p>
      </div>

      {/* Values Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 shadow-md">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Collaboration</h3>
            <p className="text-gray-600">
              We believe in the power of working together. Great things happen when developers unite their 
              skills and perspectives.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 shadow-md">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Continuous Learning</h3>
            <p className="text-gray-600">
              Technology never stops evolving, and neither should we. We encourage constant learning and 
              knowledge sharing.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 shadow-md">
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Inclusivity</h3>
            <p className="text-gray-600">
              We welcome developers from all backgrounds, experience levels, and locations. Diversity makes 
              us stronger.
            </p>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Story</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          DevConnect was born from a simple observation: while there are countless platforms for developers 
          to showcase their work or find jobs, there was a gap in truly connecting developers on a personal 
          and professional level.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Founded in 2024, we set out to create a space where developers could not just network, but form 
          meaningful connections that lead to collaboration, mentorship, and friendship. What started as a 
          small project has grown into a thriving community of developers from around the world.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          Today, DevConnect serves thousands of developers, facilitating connections that have led to 
          successful projects, career opportunities, and lifelong friendships.
        </p>
      </div>

      {/* Features Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">What We Offer</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-md">
            <div className="text-3xl">👥</div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Smart Matching</h3>
              <p className="text-gray-600">
                Our algorithm connects you with developers who share your interests, skills, and goals.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-md">
            <div className="text-3xl">💬</div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Real-time Chat</h3>
              <p className="text-gray-600">
                Connect instantly with other developers through our seamless messaging system.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-md">
            <div className="text-3xl">🎯</div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Profile Showcase</h3>
              <p className="text-gray-600">
                Present your skills, projects, and experience in a way that attracts the right connections.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-md">
            <div className="text-3xl">🚀</div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Collaboration Opportunities</h3>
              <p className="text-gray-600">
                Find partners for your next big project or join exciting initiatives from the community.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl shadow-xl p-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Join Our Growing Community</h2>
        <p className="text-lg mb-8 opacity-90">
          Be part of a network that's shaping the future of developer collaboration.
        </p>
        <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition transform hover:scale-105">
          Get Started Today
        </button>
      </div>

      {/* Contact Info */}
      <div className="mt-12 text-center text-gray-600">
        <p className="mb-2">Have questions? We'd love to hear from you!</p>
        <p>
          Email us at <a href="mailto:hello@devconnect.com" className="text-purple-600 hover:underline">hello@devconnect.com</a>
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
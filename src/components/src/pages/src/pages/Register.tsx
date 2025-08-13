import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-slate-800 to-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Registration Information
          </h1>
          <p className="text-xl text-slate-100 max-w-3xl mx-auto">
            All attendees must register to comply with insurance regulations. 
            Register early to save and secure your spot at this historic gathering.
          </p>
        </div>
      </section>

      {/* Registration Rates */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Individual Registration */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Individual Registration</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b">
                  <div>
                    <span className="font-semibold">Early Bird</span>
                    <p className="text-sm text-gray-600">Until Dec 31, 2025</p>
                  </div>
                  <span className="text-green-600 font-bold text-xl">$190</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <div>
                    <span className="font-semibold">Regular</span>
                    <p className="text-sm text-gray-600">Jan 1 - Feb 28, 2026</p>
                  </div>
                  <span className="text-blue-600 font-bold text-xl">$210</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <div>
                    <span className="font-semibold">Late Registration</span>
                    <p className="text-sm text-gray-600">March 1+, 2026</p>
                  </div>
                  <span className="text-red-600 font-bold text-xl">$245</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <div>
                    <span className="font-semibold">On-Site</span>
                    <p className="text-sm text-gray-600">At the event</p>
                  </div>
                  <span className="text-gray-600 font-bold text-xl">$260</span>
                </div>
              </div>
            </div>

            {/* Georgia Residents */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Georgia Residents</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b">
                  <div>
                    <span className="font-semibold">Early Bird Local</span>
                    <p className="text-sm text-gray-600">Until Dec 31, 2025</p>
                  </div>
                  <span className="text-green-600 font-bold text-xl">$175</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <div>
                    <span className="font-semibold">Regular Local</span>
                    <p className="text-sm text-gray-600">Jan 1+, 2026</p>
                  </div>
                  <span className="text-blue-600 font-bold text-xl">$195</span>
                </div>
              </div>
              <div className="bg-yellow-50 rounded-lg p-4 mt-6">
                <p className="text-sm text-gray-700">
                  <strong>Verification Required:</strong> Name, address, and phone number must be verified.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <Link to="/register-form">
              <button className="bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white font-bold py-4 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200 text-lg">
                Register Now
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;

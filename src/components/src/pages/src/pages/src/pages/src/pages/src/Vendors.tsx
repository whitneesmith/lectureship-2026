import React from 'react';

const Vendors = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-slate-800 to-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Vendor Information
          </h1>
          <p className="text-xl text-slate-100 max-w-3xl mx-auto">
            Join us as a vendor at the 80th Annual National Lectureship. 
            Connect with thousands of attendees from Churches of Christ nationwide.
          </p>
        </div>
      </section>

      {/* Vendor Benefits */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Become a Vendor?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Reach thousands of potential customers from Churches of Christ congregations across the nation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-slate-600 text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Large Audience</h3>
              <p className="text-gray-600">
                Connect with thousands of attendees from Churches of Christ congregations nationwide
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-slate-600 text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Targeted Market</h3>
              <p className="text-gray-600">
                Reach people specifically interested in Christian books, resources, and services
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-slate-600 text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Networking</h3>
              <p className="text-gray-600">
                Build relationships with church leaders, ministers, and active church members
              </p>
            </div>
          </div>

          {/* Vendor Packages */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Vendor Packages</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Standard Table */}
              <div className="border border-gray-200 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Standard Vendor Table</h4>
                <div className="text-3xl font-bold text-slate-600 mb-4">$350</div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    8-foot table with linens
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    2 chairs included
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Prime location in vendor area
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Access to electrical outlets
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    All 5 days of the lectureship
                  </li>
                </ul>
              </div>

              {/* Premium Table */}
              <div className="border-2 border-slate-300 rounded-lg p-6 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-slate-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Premium Vendor Table</h4>
                <div className="text-3xl font-bold text-slate-600 mb-4">$500</div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    8-foot table with premium linens
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    4 chairs included
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Corner or high-traffic location
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Dedicated electrical access
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    All 5 days of the lectureship
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Logo in program materials
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Application Process */}
          <div className="bg-slate-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">How to Apply</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Application Requirements</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Completed vendor application form</li>
                  <li>• Business license or tax ID number</li>
                  <li>• Product/service description</li>
                  <li>• Payment in full with application</li>
                  <li>• Proof of liability insurance</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Important Dates</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>Application Deadline:</strong> January 15, 2026</li>
                  <li>• <strong>Setup Day:</strong> March 7, 2026</li>
                  <li>• <strong>Event Dates:</strong> March 8-12, 2026</li>
                  <li>• <strong>Breakdown:</strong> March 12, 2026 (evening)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-lg p-8 mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Ready to Become a Vendor?</h3>
            <div className="text-center">
              <p className="text-gray-600 mb-6">
                Contact us today to secure your vendor table at the 80th Annual National Lectureship
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center">
                  <span className="text-slate-600 text-xl mr-2">📞</span>
                  <span className="font-semibold">(800) 609-6211</span>
                </div>
                <div className="flex items-center">
                  <span className="text-slate-600 text-xl mr-2">✉️</span>
                  <span className="font-semibold">cocnl1945@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vendors;

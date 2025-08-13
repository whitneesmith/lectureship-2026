import React from 'react';

const Hotel = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-slate-800 to-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Hotel Information
          </h1>
          <p className="text-xl text-slate-100 max-w-3xl mx-auto">
            Stay at the beautiful Wyndham Courtland Grand Hotel in downtown Atlanta, 
            our official venue for the 80th Annual National Lectureship.
          </p>
        </div>
      </section>

      {/* Hotel Details */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&h=400"
                alt="Elegant hotel lobby with modern furnishings"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Wyndham Courtland Grand Hotel
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-slate-600 text-xl mr-3 mt-1">📍</span>
                  <div>
                    <p className="font-semibold text-gray-900">Address</p>
                    <p className="text-gray-600">
                      75 Courtland Street NE<br />
                      Atlanta, GA 30303
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-slate-600 text-xl mr-3 mt-1">📞</span>
                  <div>
                    <p className="font-semibold text-gray-900">Reservations</p>
                    <p className="text-gray-600">(404) 659-2660</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-slate-600 text-xl mr-3 mt-1">💰</span>
                  <div>
                    <p className="font-semibold text-gray-900">Special Rate</p>
                    <p className="text-gray-600">$149/night + taxes</p>
                    <p className="text-sm text-gray-500">Group rate for lectureship attendees</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Information */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">How to Book</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Online Booking</h4>
                <p className="text-gray-600 mb-4">
                  Visit the hotel's website and use our group code to access special rates.
                </p>
                <div className="bg-slate-50 rounded-lg p-4">
                  <p className="font-semibold text-gray-900">Group Code:</p>
                  <p className="text-slate-600 font-mono text-lg">COCNL2026</p>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Phone Reservations</h4>
                <p className="text-gray-600 mb-4">
                  Call the hotel directly and mention the Churches of Christ National Lectureship.
                </p>
                <div className="bg-slate-50 rounded-lg p-4">
                  <p className="font-semibold text-gray-900">Phone:</p>
                  <p className="text-slate-600 text-lg">(404) 659-2660</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hotel Amenities */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Hotel Amenities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-slate-600 text-2xl">🏊</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Indoor Pool</h4>
                <p className="text-gray-600 text-sm">Heated indoor swimming pool</p>
              </div>
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-slate-600 text-2xl">💪</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Fitness Center</h4>
                <p className="text-gray-600 text-sm">24-hour fitness facility</p>
              </div>
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-slate-600 text-2xl">📶</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Free WiFi</h4>
                <p className="text-gray-600 text-sm">Complimentary high-speed internet</p>
              </div>
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-slate-600 text-2xl">🚗</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Valet Parking</h4>
                <p className="text-gray-600 text-sm">Professional valet service</p>
              </div>
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-slate-600 text-2xl">🍽️</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Restaurant</h4>
                <p className="text-gray-600 text-sm">On-site dining options</p>
              </div>
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-slate-600 text-2xl">🏢</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Business Center</h4>
                <p className="text-gray-600 text-sm">Meeting and business facilities</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hotel;

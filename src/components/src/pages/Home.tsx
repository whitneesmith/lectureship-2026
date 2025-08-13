import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="mb-8">
              <span className="inline-block bg-slate-700/50 backdrop-blur-sm text-slate-200 px-4 py-2 rounded-full text-sm font-medium mb-4">
                March 8-12, 2026 • Atlanta, Georgia
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              80th Annual <span className="text-slate-300">"Historical"</span>
              <br />
              <span className="bg-gradient-to-r from-slate-200 to-white bg-clip-text text-transparent">
                National Lectureship
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join us for five transformative days of worship, fellowship, and spiritual growth as we celebrate 
              eight decades of God's faithfulness in the Churches of Christ community.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/register-form">
                <button className="bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white font-bold py-4 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200 text-lg">
                  Register Now
                </button>
              </Link>
              <Link to="/hotel">
                <button className="border-2 border-slate-300 text-slate-200 hover:bg-slate-300 hover:text-slate-900 font-bold py-4 px-8 rounded-lg transition-all duration-200 text-lg">
                  Hotel Information
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Scripture Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Foundation</h3>
                <blockquote className="text-lg text-gray-700 italic leading-relaxed">
                  "Stand firm therefore, having belted your waist with truth, and having put on the
                  breastplate of righteousness, and having strapped on your feet the preparation of
                  the gospel of peace; in addition to all, taking up the shield of faith with which you
                  will be able to extinguish all the flaming arrows of the evil one."
                </blockquote>
                <cite className="block mt-4 text-blue-800 font-semibold">
                  — Ephesians 6:14-16 NASB
                </cite>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <img 
                src="https://images.pexels.com/photos/272337/pexels-photo-272337.jpeg?auto=compress&cs=tinysrgb&h=350"
                alt="Open Bible with colored pencils on wooden table"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Event Highlights</h2>
          <p className="text-center text-gray-600 mb-12">Join us for five days of fellowship, worship, and spiritual growth</p>
          
          <div className="mb-12">
            <img 
              src="https://images.pexels.com/photos/8815020/pexels-photo-8815020.jpeg?auto=compress&cs=tinysrgb&h=350"
              alt="Diverse group of adults in joyful prayer and worship"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-50 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 bg-slate-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📅</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">5 Days</h3>
              <p className="text-gray-600">March 8-12, 2026</p>
            </div>

            <div className="bg-slate-50 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 bg-slate-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🏨</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Premium Venue</h3>
              <p className="text-gray-600">Wyndham Courtland Grand Hotel</p>
            </div>

            <div className="bg-slate-50 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 bg-slate-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🎤</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Inspiring Speakers</h3>
              <p className="text-gray-600">Renowned Bible scholars</p>
            </div>

            <div className="bg-slate-50 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 bg-slate-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🤝</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fellowship</h3>
              <p className="text-gray-600">Connect with believers nationwide</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

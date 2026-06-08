import React from "react";
import { Map as MapIcon } from "lucide-react";
import { auth } from "@/auth";
import AuthButton from "@/components/auth-button";

export default async function LandingPage() {
  const session = await auth();
  const isLoggedIn = !!session?.user;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-pink-100 to-purple-200 py-24 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent py-2">
                Plan like a Pro, Lets go!
              </h1>
              <p className="text-xl md:text-2xl text-gray-500 mb-8">
                Create itineraries, organize destinations, and store your travel
                plans all in one place.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <AuthButton
                  isLoggedIn={isLoggedIn}
                  className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600  text-white px-6 py-3 rounded-lg transition-colors duration-200 flex items-center justify-center"
                >
                  {isLoggedIn ? (
                    "Check it Out"
                  ) : (
                    <>
                      <svg
                        className="w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.04-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.09 1.83 1.24 1.83 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.05.14 3.01.41 2.29-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.63-5.48 5.93.43.37.81 1.1.81 2.23 0 1.61-.02 2.91-.02 3.31 0 .32.22.69.83.57C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      <span className="ml-2">Log in</span>
                    </>
                  )}
                </AuthButton>
                
              </div>
            </div>
          </div>
          {/* Decorative Clipped Background at the Bottom 
          <div
            className="absolute bottom-0 left-0 right-0 h-24 bg-white"
            style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 100%)" }}
          />*/}
                    {/* Moving SVG Wave Divider */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden h-[60px] md:h-[120px] pointer-events-none">
            {/* Injecting pure CSS animations natively inside the component */}
            <style>{`
              @keyframes move-wave-front {
                0% { transform: translate3d(0, 0, 0); }
                50% { transform: translate3d(-25%, 2px, 0); }
                100% { transform: translate3d(-50%, 0, 0); }
              }
              @keyframes move-wave-back {
                0% { transform: translate3d(-50%, 0, 0); }
                50% { transform: translate3d(-25%, -3px, 0); }
                100% { transform: translate3d(0, 0, 0); }
              }
              .animate-wave-front {
                animation: move-wave-front 12s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite;
              }
              .animate-wave-back {
                animation: move-wave-back 16s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite;
              }
            `}</style>

            <svg 
              className="absolute bottom-0 w-[200%] h-full min-w-[2400px]" 
              viewBox="0 0 2400 120" 
              preserveAspectRatio="none" 
              xmlns="http://w3.org"
            >
              {/* Back Wave Layer (Slower, translucent opacity for 3D depth) */}
              <path 
                className="animate-wave-back"
                d="M0,60 C300,30 600,90 900,60 C1200,30 1500,90 1800,60 C2100,30 2400,90 2700,60 V120 H0 Z" 
                fill="#ffffff"
                opacity="0.4"
              />
              
              {/* Front Wave Layer (Faster, crisp solid white matching the next section) */}
              <path 
                className="animate-wave-front"
                d="M0,60 C300,90 600,30 900,60 C1200,90 1500,30 1800,60 C2100,90 2400,30 2700,60 V120 H0 Z" 
                fill="#ffffff"
              />
            </svg>
          </div>

        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Plan with Love, travel with Anu
            </h2>
            <div className="grid md:grid-cols-3 gap-8 [perspective:1000px]">
              <div className="p-6 rounded-lg border border-gray-100 shadow-sm bg-gradient-to-r from-pink-100 to-purple-100 transition-all duration-500 ease-out [transform-style:preserve-3d]
                  hover:shadow-xl
                  hover:[transform:rotateX(10deg)_rotateY(-10deg)_translateZ(10px)]">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4 [transform:translateZ(20px)]">
                  <MapIcon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Interactive Maps</h3>
                <p className="text-gray-600">
                  Visualize your trip with interactive maps. See your entire
                  itinerary at a glance.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-gray-100 shadow-sm bg-gradient-to-r from-pink-100 to-purple-100 transition-all duration-500 ease-out [transform-style:preserve-3d]
                  hover:shadow-xl
                  hover:[transform:rotateX(10deg)_rotateY(-10deg)_translateZ(10px)]">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-4 [transform:translateZ(20px)]">
                  <svg
                    className="h-6 w-6 text-travel-amber"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Day-by-Day Itineraries
                </h3>
                <p className="text-gray-600">
                  Organize your trip day by day. Never miss a beat with
                  structured planning.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-gray-100 shadow-sm bg-gradient-to-r from-pink-100 to-purple-100 transition-all duration-500 ease-out [transform-style:preserve-3d]
                  hover:shadow-xl
                  hover:[transform:rotateX(10deg)_rotateY(-10deg)_translateZ(10px)]">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4 [transform:translateZ(20px)]">
                  <svg
                    className="h-6 w-6 text-green-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M3 15a4 4 0 004 4h9a5 5 0 10-4.5-6.5L12 7" />
                    <path d="M15 5v4h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Drag & Drop Planning
                </h3>
                <p className="text-gray-600">
                  Easily rearrange your itinerary with simple drag and drop
                  functionality.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-pink-100 to-purple-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
              Ready to plan your next adventure?
            </h2>
            <p className="text-xl text-gray-500 mb-8 max-w-2xl mx-auto">
              Join thousands of travelers who plan better trips with
              TripPlanner.
            </p>
            <AuthButton
              isLoggedIn={isLoggedIn}
              className="inline-block bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600  text-white px-6 py-3 rounded-lg transition-colors duration-200"
            >
              {isLoggedIn ? "Check it out" : "Sign Up Now"}
            </AuthButton>
          </div>
        </section>
      </main>

      {/* Footer */}
    </div>
  );
}
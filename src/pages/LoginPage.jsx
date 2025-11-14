import { Link } from 'react-router-dom';

export default function LoginPage() {
  return (
    <div className="font-sans bg-white text-gray-900">
      <div className="container mx-auto my-16 px-6 max-w-5xl">

        
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-3">Log In</h1>
          <nav className="flex justify-center items-center space-x-2 text-sm text-gray-500">
            <Link to="/" className="hover:underline font-semibold">Home</Link>
            <span>&gt;</span>
            <span className="font-semibold text-black">Account</span>
          </nav>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          
          <div>
            <h2 className="text-2xl font-bold mb-6">Log In</h2>

            <form className="space-y-6">
              <div>
                <input 
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>

              <div>
                <input 
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>

              <div>
                <a href="#" className="text-sm font-semibold underline hover:text-pink-500">
                  Forgot your password?
                </a>
              </div>

              <div>
                <button 
                  type="submit"
                  className="w-full bg-pink-500 text-white font-bold py-3 px-4 rounded-md hover:bg-pink-600"
                >
                  SIGN IN
                </button>
              </div>
            </form>
          </div>

          
          <div>
            <h2 className="text-2xl font-bold mb-6">New Customer</h2>
            <p className="text-gray-700 mb-8">
              Sign up for early Sale access plus tailored new arrivals, trends, and promotions.
            </p>

            <Link to="/signup">
              <button 
                type="button"
                className="bg-pink-500 text-white font-bold py-3 px-8 rounded-md hover:bg-pink-600"
              >
                REGISTER
              </button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}

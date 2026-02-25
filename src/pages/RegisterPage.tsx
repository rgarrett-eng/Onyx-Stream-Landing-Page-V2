import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Mail, Lock, LockOpen, X } from 'lucide-react';
import onyxLogo from '/onyx-logo.png';

export function RegisterPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleRegister = async (e: FormEvent) => {
    e.preventDefault();
    setError('');

    // Basic Validation
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    setIsLoading(true);

    try {
      // TODO: Connect to your Backend (e.g., Supabase/Firebase) here
      // const response = await supabase.auth.signUp({ email, password });
      
      // Simulate network request
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Permanently mark the device as a registered Lite user
      localStorage.setItem('onyx_is_registered', 'true');
      localStorage.setItem('onyx_user_email', email);
      
      // Remove the trial timer completely
      localStorage.removeItem('onyx_trial_start');

      // Redirect to homepage with success message
      navigate('/', { replace: true });
      
      // Show success notification
      setTimeout(() => {
        alert('Welcome to Onyx Lite! Your guest timer has been removed. Enjoy unrestricted streaming.');
      }, 300);

    } catch (err) {
      setError('Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <a href="/" className="flex items-center gap-3 opacity-70 hover:opacity-100 transition">
            <img src={onyxLogo} alt="Onyx Stream" className="w-10 h-10 rounded-lg" />
            <span className="text-xl font-bold">Onyx Stream</span>
          </a>
          <button
            onClick={() => navigate('/')}
            className="w-10 h-10 rounded-full bg-gray-900 hover:bg-gray-800 flex items-center justify-center transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Icon */}
        <div className="w-20 h-20 rounded-full bg-blue-600/10 border border-blue-600/30 flex items-center justify-center mb-6">
          <LockOpen className="w-10 h-10 text-blue-500" />
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          Unlock Onyx Lite
        </h1>
        <p className="text-gray-400 text-lg mb-8">
          Create your free account to remove the 30-minute guest limit and save your provider details securely.
        </p>

        {/* Value Proposition */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 mb-8 space-y-4">
          <div className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
            <p className="text-gray-300 text-sm font-medium">Unlimited playback time forever</p>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
            <p className="text-gray-300 text-sm font-medium">Save your Xtream & M3U credentials</p>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
            <p className="text-gray-300 text-sm font-medium">Access the Now & Next TV Guide</p>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
            <p className="text-gray-300 text-sm font-medium">No credit card required</p>
          </div>
        </div>

        {/* Registration Form */}
        <form onSubmit={handleRegister} className="space-y-5">
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-white mb-2 uppercase tracking-wide">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="w-full bg-gray-950 border border-gray-800 rounded-xl pl-12 pr-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition"
                required
              />
            </div>
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-white mb-2 uppercase tracking-wide">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create a secure password"
                className="w-full bg-gray-950 border border-gray-800 rounded-xl pl-12 pr-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition"
                required
              />
            </div>
            <p className="text-xs text-gray-500 mt-2">Must be at least 6 characters</p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-900/20 border border-red-600/50 rounded-lg p-3">
              <p className="text-red-400 text-sm font-medium">{error}</p>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-700 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Creating Account...</span>
              </>
            ) : (
              'Create Free Account'
            )}
          </button>
        </form>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-xs">
            By registering, you agree to our{' '}
            <a href="/terms" className="text-blue-400 hover:text-blue-300 font-semibold">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="/privacy" className="text-blue-400 hover:text-blue-300 font-semibold">
              Privacy Policy
            </a>
          </p>
        </div>

        {/* Already have account */}
        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm">
            Already have an account?{' '}
            <a href="/login" className="text-blue-400 hover:text-blue-300 font-semibold">
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

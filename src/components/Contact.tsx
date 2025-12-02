import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-b from-rose-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have questions about our sarees or want to place a custom order?
            We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="flex items-center justify-center w-14 h-14 bg-rose-100 rounded-full flex-shrink-0">
                <MapPin className="w-7 h-7 text-rose-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Our Workshop</h3>
                <p className="text-gray-600 leading-relaxed">
                  123 Silk Weaver Lane, Textile District<br />
                  Varanasi, Uttar Pradesh 221001
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex items-center justify-center w-14 h-14 bg-amber-100 rounded-full flex-shrink-0">
                <Phone className="w-7 h-7 text-amber-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
                <p className="text-gray-600 leading-relaxed">
                  +91 98765 43210<br />
                  Mon - Sat: 9:00 AM - 6:00 PM
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex items-center justify-center w-14 h-14 bg-orange-100 rounded-full flex-shrink-0">
                <Mail className="w-7 h-7 text-orange-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-600 leading-relaxed">
                  info@sareesilk.com<br />
                  orders@sareesilk.com
                </p>
              </div>
            </div>
          </div>

          <form className="space-y-6 bg-white p-8 rounded-2xl shadow-xl">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition-all"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition-all"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition-all resize-none"
                placeholder="Tell us about your requirements"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-all transform hover:scale-105 shadow-lg font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

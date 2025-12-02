import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-screen bg-gradient-to-br from-rose-50 via-amber-50 to-orange-50 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-white bg-opacity-70"></div>

      <nav className="absolute top-0 left-0 right-0 z-20 px-6 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-8 h-8 text-rose-600" />
            <span className="text-2xl font-bold text-gray-900">Saree Silk</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-700 hover:text-rose-600 transition-colors">About</a>
            <a href="#collection" className="text-gray-700 hover:text-rose-600 transition-colors">Collection</a>
            <a href="#process" className="text-gray-700 hover:text-rose-600 transition-colors">Our Process</a>
            <a href="#contact" className="text-gray-700 hover:text-rose-600 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <div className="relative h-full flex items-center justify-center px-6 z-10">
        <div className="max-w-4xl text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Weaving Traditions,
            <span className="block text-rose-600">Creating Elegance</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Handcrafted sarees that blend centuries-old artistry with contemporary design.
            Each piece tells a story of passion, tradition, and meticulous craftsmanship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#collection"
              className="px-8 py-4 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Explore Collection
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-white text-rose-600 border-2 border-rose-600 rounded-lg hover:bg-rose-50 transition-all transform hover:scale-105 shadow-lg"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10"></div>
    </div>
  );
}

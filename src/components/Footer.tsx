import { Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Sparkles className="w-8 h-8 text-rose-500" />
              <span className="text-2xl font-bold">Saree Silk</span>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md">
              Weaving traditions and creating elegance since 1950.
              Experience the finest handcrafted sarees that blend heritage with contemporary style.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#collection" className="text-gray-400 hover:text-white transition-colors">Collections</a></li>
              <li><a href="#process" className="text-gray-400 hover:text-white transition-colors">Our Process</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Facebook</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pinterest</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">YouTube</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Saree Silk. All rights reserved. Crafted with passion and tradition.</p>
        </div>
      </div>
    </footer>
  );
}

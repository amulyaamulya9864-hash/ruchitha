import { Heart, Award, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Our Heritage</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            For over three generations, we've been crafting exquisite sarees that celebrate
            the rich cultural heritage of India while embracing modern aesthetics.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-rose-100 rounded-full mb-6 group-hover:bg-rose-600 transition-colors">
              <Heart className="w-10 h-10 text-rose-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Passion & Pride</h3>
            <p className="text-gray-600 leading-relaxed">
              Every saree is crafted with love and dedication, honoring the timeless art
              passed down through generations of master weavers.
            </p>
          </div>

          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-amber-100 rounded-full mb-6 group-hover:bg-amber-600 transition-colors">
              <Award className="w-10 h-10 text-amber-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality Excellence</h3>
            <p className="text-gray-600 leading-relaxed">
              We use only the finest silk and materials, ensuring each piece meets the
              highest standards of quality and durability.
            </p>
          </div>

          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-orange-100 rounded-full mb-6 group-hover:bg-orange-600 transition-colors">
              <Sparkles className="w-10 h-10 text-orange-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Artistic Innovation</h3>
            <p className="text-gray-600 leading-relaxed">
              While rooted in tradition, we continuously innovate our designs to create
              contemporary pieces that resonate with modern sensibilities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

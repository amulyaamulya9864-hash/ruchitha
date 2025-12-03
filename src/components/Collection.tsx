import { useState } from 'react';

export default function Collection() {
  const [activeCollection, setActiveCollection] = useState(0);

  const collections = [
    {
      name: 'Banarasi Silk',
      description: 'Luxurious silk sarees with intricate zari work and gold embellishments',
      items: [
        {
          id: 1,
          image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=500',
          name: 'Royal Maroon',
        },
        {
          id: 2,
          image: 'https://images.pexels.com/photos/1288255/pexels-photo-1288255.jpeg?auto=compress&cs=tinysrgb&w=500',
          name: 'Golden Elegance',
        },
        {
          id: 3,
          image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=500',
          name: 'Deep Crimson',
        },
      ],
    },
    {
      name: 'Kanjivaram Heritage',
      description: 'Traditional South Indian temple border designs with richest colors',
      items: [
        {
          id: 1,
          image: 'https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=500',
          name: 'Temple Gold',
        },
        {
          id: 2,
          image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=500',
          name: 'Sacred Red',
        },
        {
          id: 3,
          image: 'https://images.pexels.com/photos/1288255/pexels-photo-1288255.jpeg?auto=compress&cs=tinysrgb&w=500',
          name: 'Peacock Blue',
        },
      ],
    },
    {
      name: 'Chanderi Elegance',
      description: 'Lightweight sarees with subtle shimmer perfect for summer',
      items: [
        {
          id: 1,
          image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=500',
          name: 'Pastel Dream',
        },
        {
          id: 2,
          image: 'https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=500',
          name: 'Subtle Shimmer',
        },
        {
          id: 3,
          image: 'https://images.pexels.com/photos/1288255/pexels-photo-1288255.jpeg?auto=compress&cs=tinysrgb&w=500',
          name: 'Ivory Lace',
        },
      ],
    },
    {
      name: 'Sambalpuri Traditional',
      description: 'Handwoven Odisha sarees with distinctive tie-and-dye patterns',
      items: [
        {
          id: 1,
          image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=500',
          name: 'Tie Dye Indigo',
        },
        {
          id: 2,
          image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=500',
          name: 'Natural Weave',
        },
        {
          id: 3,
          image: 'https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=500',
          name: 'Geometric Pattern',
        },
      ],
    },
    {
      name: 'Tussar Silk',
      description: 'Natural tussar silk with earthy tones and rich texture',
      items: [
        {
          id: 1,
          image: 'https://images.pexels.com/photos/1288255/pexels-photo-1288255.jpeg?auto=compress&cs=tinysrgb&w=500',
          name: 'Honey Gold',
        },
        {
          id: 2,
          image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=500',
          name: 'Earthy Brown',
        },
        {
          id: 3,
          image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=500',
          name: 'Wine Tussar',
        },
      ],
    },
    {
      name: 'Printed Modern',
      description: 'Contemporary printed designs with bold colors and artistic motifs',
      items: [
        {
          id: 1,
          image: 'https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=500',
          name: 'Botanical Print',
        },
        {
          id: 2,
          image: 'https://images.pexels.com/photos/1288255/pexels-photo-1288255.jpeg?auto=compress&cs=tinysrgb&w=500',
          name: 'Floral Burst',
        },
        {
          id: 3,
          image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=500',
          name: 'Abstract Art',
        },
      ],
    },
    {
      name: 'Dhakai Cotton',
      description: 'Pure cotton sarees known for their breathability and comfort',
      items: [
        {
          id: 1,
          image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=500',
          name: 'Cotton Comfort',
        },
        {
          id: 2,
          image: 'https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=500',
          name: 'Pure White',
        },
        {
          id: 3,
          image: 'https://images.pexels.com/photos/1288255/pexels-photo-1288255.jpeg?auto=compress&cs=tinysrgb&w=500',
          name: 'Pastel Cotton',
        },
      ],
    },
    {
      name: 'Mysore Silk',
      description: 'Premium Mysore silk with lustrous finish and traditional appeal',
      items: [
        {
          id: 1,
          image: 'https://images.pexels.com/photos/1288255/pexels-photo-1288255.jpeg?auto=compress&cs=tinysrgb&w=500',
          name: 'Lustre Gold',
        },
        {
          id: 2,
          image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=500',
          name: 'Silk Maroon',
        },
        {
          id: 3,
          image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=500',
          name: 'Shaded Silk',
        },
      ],
    },
  ];

  return (
    <section id="collection" className="py-24 px-6 bg-gradient-to-b from-white to-rose-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Our Collections</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our extensive range of handcrafted sarees, each collection
            celebrating unique regional traditions and contemporary artistry.
          </p>
        </div>

        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {collections.map((collection, index) => (
            <button
              key={index}
              onClick={() => setActiveCollection(index)}
              className={`px-5 py-2 rounded-full font-semibold transition-all transform hover:scale-105 text-sm md:text-base ${
                activeCollection === index
                  ? 'bg-rose-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {collection.name}
            </button>
          ))}
        </div>

        <div className="mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-2">
            {collections[activeCollection].name}
          </h3>
          <p className="text-lg text-gray-600">
            {collections[activeCollection].description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {collections[activeCollection].items.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <div className="relative h-96 overflow-hidden bg-gray-200">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h4 className="text-2xl font-bold text-white">{item.name}</h4>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {collections.map((collection, index) => (
            <div
              key={index}
              className="text-center p-4 rounded-xl hover:bg-white transition-colors cursor-pointer"
              onClick={() => setActiveCollection(index)}
            >
              <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-3 rounded-full overflow-hidden shadow-lg">
                <img
                  src={collection.items[0].image}
                  alt={collection.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-semibold text-gray-900 text-sm">{collection.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

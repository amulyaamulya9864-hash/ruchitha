export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Design Conceptualization',
      description: 'Our designers create unique patterns inspired by traditional motifs and contemporary art.',
    },
    {
      number: '02',
      title: 'Material Selection',
      description: 'We carefully source the finest silk and threads, ensuring premium quality for every saree.',
    },
    {
      number: '03',
      title: 'Master Weaving',
      description: 'Skilled artisans weave each saree on traditional looms, a process that can take days or weeks.',
    },
    {
      number: '04',
      title: 'Quality Assurance',
      description: 'Every piece undergoes rigorous inspection to meet our exacting standards before reaching you.',
    },
  ];

  return (
    <section id="process" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Our Craft Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From concept to creation, every saree goes through a meticulous process
            that honors traditional techniques while ensuring exceptional quality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-7xl font-bold text-rose-100 mb-4">{step.number}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 -right-4 w-8 h-0.5 bg-rose-200"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

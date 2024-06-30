import React from 'react';

const Header = () => (
  <header className="bg-indigo-900 text-white text-center py-4">
    <h1 className="text-3xl font-bold">Interactive Science Experiments</h1>
    <p className="text-xl">Journey Through Time and Discovery</p>
  </header>
);

const Navigation = () => (
  <nav className="flex justify-around bg-indigo-700 py-4 sticky top-0 z-50">
    {['Ancient World', 'Renaissance', 'Industrial Revolution', 'Modern Era', 'Future Tech'].map((era) => (
      <a key={era} href={`#${era.toLowerCase().replace(' ', '-')}`} className="text-white no-underline px-4 py-2 rounded hover:bg-indigo-900 transition-colors">
        {era}
      </a>
    ))}
  </nav>
);

const ExperimentCard = ({ image, title, description, link }) => (
  <div className="border border-gray-200 rounded-lg overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-semibold text-indigo-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a href={link} className="inline-block bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600 transition-colors">
        Start Experiment
      </a>
    </div>
  </div>
);

const ExperimentSection = ({ id, title, experiments }) => (
  <section id={id} className="mb-12 bg-white rounded-lg p-8 shadow-md">
    <h2 className="text-2xl font-bold mb-6">{title}</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {experiments.map((exp, index) => (
        <ExperimentCard key={index} {...exp} />
      ))}
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-indigo-900 text-white text-center py-4 mt-8">
    <p>&copy; 2023 Interactive Science Travel. Bringing the past and future to life for scientific discovery.</p>
    <nav className="mt-2">
      {['About Us', 'Contact', 'Privacy Policy', 'Terms of Service'].map((item, index) => (
        <React.Fragment key={item}>
          <a href={`https://interactive-science-travel.edu/${item.toLowerCase().replace(' ', '-')}`} className="text-white hover:underline">
            {item}
          </a>
          {index < 3 && <span className="mx-2">|</span>}
        </React.Fragment>
      ))}
    </nav>
  </footer>
);

const App = () => {
  const experiments = {
    ancient: [
      {
        image: "https://interactive-science-travel.edu/images/archimedes-principle.jpg",
        title: "Archimedes' Principle",
        description: "Explore buoyancy and fluid displacement with the famous Greek mathematician.",
        link: "https://interactive-science-travel.edu/experiments/archimedes-principle"
      },
      {
        image: "https://interactive-science-travel.edu/images/eratosthenes-earth.jpg",
        title: "Measuring Earth's Circumference",
        description: "Recreate Eratosthenes' ingenious method for calculating the size of our planet.",
        link: "https://interactive-science-travel.edu/experiments/eratosthenes-earth"
      }
    ],
    renaissance: [
      {
        image: "https://interactive-science-travel.edu/images/galileo-motion.jpg",
        title: "Galileo's Motion Studies",
        description: "Investigate the laws of motion using inclined planes and pendulums.",
        link: "https://interactive-science-travel.edu/experiments/galileo-motion"
      },
      {
        image: "https://interactive-science-travel.edu/images/newton-prism.jpg",
        title: "Newton's Prism Experiment",
        description: "Discover the nature of light and color through prismatic dispersion.",
        link: "https://interactive-science-travel.edu/experiments/newton-prism"
      }
    ],
    industrial: [
      {
        image: "https://interactive-science-travel.edu/images/faraday-electricity.jpg",
        title: "Faraday's Electromagnetic Discoveries",
        description: "Explore the relationship between electricity and magnetism.",
        link: "https://interactive-science-travel.edu/experiments/faraday-electromagnetism"
      },
      {
        image: "https://interactive-science-travel.edu/images/mendeleev-periodic.jpg",
        title: "Building the Periodic Table",
        description: "Arrange elements and discover periodic trends with Mendeleev.",
        link: "https://interactive-science-travel.edu/experiments/mendeleev-periodic-table"
      }
    ],
    modern: [
      {
        image: "https://interactive-science-travel.edu/images/einstein-relativity.jpg",
        title: "Einstein's Relativity",
        description: "Visualize time dilation and space contraction in special relativity.",
        link: "https://interactive-science-travel.edu/experiments/einstein-relativity"
      },
      {
        image: "https://interactive-science-travel.edu/images/dna-structure.jpg",
        title: "Unraveling DNA's Structure",
        description: "Work alongside Watson, Crick, and Franklin to decode the blueprint of life.",
        link: "https://interactive-science-travel.edu/experiments/dna-structure"
      }
    ],
    future: [
      {
        image: "https://interactive-science-travel.edu/images/quantum-computing.jpg",
        title: "Quantum Computing Basics",
        description: "Explore the principles of superposition and entanglement in quantum systems.",
        link: "https://interactive-science-travel.edu/experiments/quantum-computing"
      },
      {
        image: "https://interactive-science-travel.edu/images/nanotech-assembly.jpg",
        title: "Nanotech Assembly Simulation",
        description: "Manipulate atoms to create microscopic machines and structures.",
        link: "https://interactive-science-travel.edu/experiments/nanotech-assembly"
      },
      {
        image: "https://interactive-science-travel.edu/images/spaceship-engineering.jpg",
        title: "Futuristic Spaceship Engineering",
        description: "Design and test advanced propulsion systems and life support for interstellar travel.",
        link: "https://interactive-science-travel.edu/experiments/spaceship-engineering"
      }
    ]
  };

  return (
    <div className="font-sans leading-normal text-gray-800 bg-blue-50">
      <Header />
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <ExperimentSection id="ancient-world" title="Ancient World Experiments" experiments={experiments.ancient} />
        <ExperimentSection id="renaissance" title="Renaissance Experiments" experiments={experiments.renaissance} />
        <ExperimentSection id="industrial-revolution" title="Industrial Revolution Experiments" experiments={experiments.industrial} />
        <ExperimentSection id="modern-era" title="Modern Era Experiments" experiments={experiments.modern} />
        <ExperimentSection id="future-tech" title="Future Tech Experiments" experiments={experiments.future} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
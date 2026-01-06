
export default function Hero() {
  return (
    <div className="relative bg-cover bg-center h-[500px]" >
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
        <h1 className="text-5xl font-bold mb-4">Your Main Headline</h1>
        <p className="text-xl mb-6">A concise elevator pitch or subheading goes here.</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition duration-300">
          Call to Action
        </button>
      </div>
    </div>
  );
};


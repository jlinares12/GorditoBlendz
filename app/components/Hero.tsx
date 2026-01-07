
import Image from 'next/image'
export default function Hero() {
  return (
    <div className="relative bg-cover bg-center h-[500px]" >
        <div className="absolute inset-0 flex flex-row items-center justify-between text-white">
            <div>
                <h1 className="text-5xl font-bold">Precision Cuts.</h1>
                <div className='flex flex-row'>
                    <h1 className="text-red-600 text-5xl font-bold">Masterful&nbsp;</h1>
                    <h1 className="text-5xl font-bold mb-4">Style.</h1>
                </div>
                <p className="text-xl mb-6">A concise elevator pitch or subheading goes here.</p>
                <div className='flex flex-row gap-4'>
                    <button className="bg-red-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition duration-300">
                    Call to Action
                    </button>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition duration-300">
                    Call to Action
                    </button>
                </div>
            </div>
            <div className='h-fill w-fill rounded-xl shadow-white shadow-lg'>
                <Image
                    src='/hero.png'
                    width={500}
                    height={500}
                    alt='Logo'
                    className='rounded-xl'
                />
            </div>
        </div>
    </div>
  );
};


export default function Gallery() {
  return (
    
      <div className='flex flex-col justify-center items-center p-6 w-full space-y-6 m-auto bg-white border-b-2 border-purple-400'>
          <h1 className='text-2xl font-custom underline text-center transition-transform duration-300 hover:scale-150 '>
              Gallery
          </h1>
          <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 w-full  gap-4 pb-10'>
              {data.map((item, index) => (
                  <div key={index} className='p-2 relative z-1'>
                      <img 
                          src={item.image} 
                          alt={`Gallery ${index + 1}`} 
                          className='w-full object-cover' 
                      />
                  </div>
              ))}
          </div>
      </div>
  );
};

const data = [
  { image: '/g7.jpg' },
  { image: '/g3.jpg' },
  { image: '/g4.jpg' },
  { image: '/g6.jpg' },
  { image: '/g9.jpg' },
  { image: '/g2.jpg' },
  { image: '/g5.jpg' },
  { image: '/g8.jpg' },
  { image: '/g1.jpg' },
 
];

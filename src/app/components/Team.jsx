export default function Team() {
    return (
      <div className='flex flex-col justify-center items-center  p-10 bg-white border-b-2 border-purple-400 space-y-6 m-auto'>
        <div className='flex flex-col justify-center items-center space-y-6 md:w-1/2'>
          <h1 className="text-2xl font-bold underline transition-transform duration-300 hover:scale-150 font-custom text-center mb-4">Meet The Owner</h1>
          <div className='flex justify-center items-center'>
          <img src={"/owner.png"} alt='owner pic' className='pb-6 w-96'/>
          </div>
          
          <h1 className='text-2xl font-custom text-center '>Sangita Timilsina </h1>
          <div className='flex justify-center items-center'>
          <p className='text-justify md:w-full p-6 mt-[-8px] '>Sangita, the heart and soul behind this business, embodies passion and artistry in every service she offers. With a keen eye for detail and a warm, welcoming spirit, she ensures that each client feels cherished and beautiful. Her dedication to enhancing natural beauty shines through, making every visit a delightful experience.
          </p>
          </div>
          </div>
      </div>
    )
  }
  
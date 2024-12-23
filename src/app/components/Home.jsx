export default function Home() {
  return (
    <div>
      <div className='p-8 w-full flex flex-col md:flex-row items-center justify-center'>
        <div className='sm:ml-20 md:ml-40 ml-4 justify-center item-center'>
          <h1 className="text-[8vw] sm:text-5xl md:text-6xl text-black font-custom mt-4 text-center">
            Eye Enhance Threading
          </h1>
          <h3 className='text-[5vw] sm:text-xl font-custom text-center'>
            Where Perfect Brows Begin
          </h3>
        </div>
        <div className="hidden md:flex md:w-1/3 flex p-10">
          <img src={"/logo.jpg"} alt="React Logo" className="w-48 rounded-full" />
        </div>
      </div>
    </div>
  );
}

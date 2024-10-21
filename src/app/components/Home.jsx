export default function Home() {
  return (
    <div>
      <div className="p-4 w-full flex flex-col md:flex-row items-center justify-between">
        {/* Text Section for the Salon Name and Slogan */}
        <div className="text-center md:text-left sm:ml-6 md:ml-40 mt-4">
          <h1 className="text-3xl md:text-4xl text-black font-custom font-bold">
            Eye Enhance Threading
          </h1>
          <h3 className="text-md md:text-lg text-gray-700 mt-2">
            Where Perfect Brows Begin
          </h3>
        </div>

        {/* Logo Section */}
        <div className="md:flex md:w-1/3 p-4 mt-4 md:mt-0">
          <img src={"/logo.jpg"} alt="Salon Logo" className="w-24 md:w-48 rounded-full mx-auto" />
        </div>
      </div>

      {/* Additional content or sections here */}
    </div>
  );
}

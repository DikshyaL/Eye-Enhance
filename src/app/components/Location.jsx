export default function Location(){
  return (
    <div className='flex flex-col justify-center items-center p-10 space-y-6 m-auto bg-white'>
        <h1 className='text-2xl font-cutom underline transition-transform duration-300 hover:scale-150 font-custom text-center mb-6'>Location and Working Hours</h1>
        <div className='flex flex-col md:flex-row justify-between md:space-x-10 space-y-8 md:w-3/4 items-center justify-center '>
            <div className='md:p-10 bg-fuchsia-200 rounded-2xl p-4 mt-4'>
              <div className='p-6 rounded-2xl bg-fuchsia-100'>
                <h2 className='text-xl font-custom mt-4'>Location</h2>
                <p className='text-md font-custom mt-2'>1581 Commonwealth</p>
                <p className='text-md font-custom'>Ave, Brighton, MA 02478</p>
                <p className='text-md font-custom'>United States</p>
              </div>
                
            </div>
            <div className='md:p-10 bg-fuchsia-200 rounded-2xl p-4 '>
              <div className='p-6 rounded-2xl bg-fuchsia-100'>
                  <h2 className='text-xl font-custom mt-4'> Working Hours</h2>
                  <p className='text-md font-custom mt-2'>Weekdays: 10:00 AM - 7:00 PM</p> 
                  <p className='text-md font-custom'>Weekends: 10:00 AM - 6:00 PM</p>  
              </div>
            </div>
        </div>
    </div>
  )
}

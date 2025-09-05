export const Home = () => {
  return (
    <section
      id="home"
      className=" relative flex items-center min-h-screen bg-[#0D1B2A]"
    >
      <div className="mb-6 mt-4 px-6 py-2">
        <h1 className="text-white font-bold text-5xl leading-tight max-w-2xl">
          Your one-stop shop for everything you need
        </h1>
        <span className="text-white font-medium  text-2xl">
          Discover exclusive deals today
        </span>
      </div>
      <div className="max-w-3xl w-full text-center">
        <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden flex">
          <img
            src="/background.jpg"
            alt="Promo"
            className="h-[500px] w-1/2 object-cover"
          />
           <div className="w-1/2 relative flex flex-col justify-center items-center p-6">
            {/* Make background2.jpg cover this half */}
            <img
              src="/background2.jpg"
              alt="Promo"
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Content goes on top */}
            <div className="relative z-10 text-center">
              <h2 className="text-6xl font-bold text-white drop-shadow-lg">
                50% OFF
              </h2>
              <p className="text-white mt-2 drop-shadow-lg">
                Limited time only on selected items!
              </p>
              <button className="mt-4 px-6 py-2 bg-blue-700 text-white font-medium rounded-full hover:bg-blue-800 cursor-pointer">
                BUY NOW
              </button>
            </div>
            </div>
        </div>
      </div>
    </section>
  );
};
export default Home;

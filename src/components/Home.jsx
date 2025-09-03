export const Home = () => {
  return (
    <section
      id="home"
      className=" relative flex items-center min-h-screen bg-[#0D1B2A]"
    >
      <div>
        <h1 className="text-white font-bold text-5xl leading-tight max-w-2xl">
          Your one-stop shop for everything you need
        </h1>
        <span className="text-white font-medium text-2xl">
          Discover exclusive deals today
        </span>
      </div>
      < div className="max-w-3xl w-full text-center">
      <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
        <img src="/background.jpg"
            alt="Promo"
            className="w-full object-cover" />

      </div>
      </div>
    </section>
  );
};
export default Home;

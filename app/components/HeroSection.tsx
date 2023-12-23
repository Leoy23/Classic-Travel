const HeroSection = () => {
  return (
    <section className="flex flex-col p-8 lg:p-16 justify-evenly lg:justify-center border-b-4 border-black">
      <div className="text-center mb-12">
        <p className="text-sm lg:text-base pb-12">
          Welcome to the best travel agency <i>Classic Travel</i>
        </p>
        <h2 className="text-3xl lg:text-7xl">
          Explore The Best Destinations Around The World
        </h2>
      </div>
      <section className="flex justify-evenly items-center">
        <div className="flex gap-2 md:gap-4 flex-col justify-start items-center">
          <h2 className="text-2xl lg:text-4xl">1500</h2>
          <p className="text-sm lg:text-base text-center">
            satisfied travelers
          </p>
        </div>
        <div className="flex gap-2 flex-col justify-center md:gap-4 items-center">
          <h2 className="text-2xl lg:text-4xl">120</h2>
          <p className="text-sm lg:text-base text-center">beautiful spots</p>
        </div>
        <div className="flex gap-2 flex-col justify-end md:gap-4 items-center">
          <h2 className="text-2xl lg:text-4xl">1130</h2>
          <p className="text-sm lg:text-base text-center">
            tourist attractions
          </p>
        </div>
      </section>
    </section>
  );
};

export default HeroSection;

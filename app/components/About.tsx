const About = () => {
  return (
    <div className="p-8 lg:p-16 bg-black text-white" id="about">
      <div className="pb-5">
        <h2 className="text-3xl lg:text-7xl">Discover Our Journey</h2>
      </div>
      <div className="mt-4">
        <p>
          Embark on a journey of sophisticated exploration with Classic Travel,
          where elegance and minimalism unite to redefine luxury vacations.
          Specializing in crafting high-class travel experiences, Classic Travel
          is synonymous with grace and refinement. Our approach is deeply rooted
          in a timeless aesthetic, reflecting the understated luxury and true
          sophistication that our discerning clients seek.{" "}
        </p>
        <br />
        <p>
          Our expertise lies in crafting bespoke journeys that go beyond the
          conventional. The Classic Travel team, with their deep understanding
          of luxury, hand-selects destinations that offer both exclusivity and
          tranquility, ensuring each trip resonates with the individuality of
          our discerning clients. From the enchanting alleyways of ancient
          European cities to the secluded shores of tropical paradises, our
          selection includes a wide array of destinations, each promising a
          unique and luxurious escape.{" "}
        </p>
        <br />
        <p>
          Classic Travel stands as more than just a travel agency; we are your
          portal to experiences that leave enduring impressions. Whether it’s
          staying in a grand chateau nestled in scenic landscapes, enjoying
          private tours of landmark cultural sites, or dining in
          Michelin-starred restaurants, every aspect of your journey is tailored
          to perfection.
        </p>
        <br />
        <p>
          Embrace the luxury of travel with Classic Travel, where each voyage is
          not just a holiday, but a meticulously woven tapestry of discovery,
          elegance, and timeless experiences. Click below to schedule an
          appointment with one of our talented travel agents.
        </p>
      </div>
      <div className="pt-12 flex justify-center md:justify-start">
        <button className="w-44 h-12 rounded-lg border-white border-2 hover:border-yellow-400 hover:bg-yellow-400 hover:text-black">
          BOOK NOW
        </button>
      </div>
    </div>
  );
};

export default About;

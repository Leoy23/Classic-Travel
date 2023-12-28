import p1 from "@/public/person-1.jpg";
import p2 from "@/public/person-2.jpg";
import p3 from "@/public/person-3.jpg";
import Image from "next/image";

const Testimonials = () => {
  return (
    <div className="p-8 lg:p-16">
      <div className="mb-12">
        <h2 className="text-3xl lg:text-7xl text-center">Testimonials</h2>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 md:flex-row ">
        <div className="flex flex-col items-center">
          <Image
            src={p1}
            alt="person stock image"
            className="w-44 h-auto aspect-square rounded-full mb-2"
          />
          <p>
            Renee Fletcher, <span className="italic">Teacher</span>
          </p>
          <span className="mb-2">Kansas City, MO</span>
          <div className="border-2 border-black p-4 rounded-lg">
            <p>
              I recently used this travel app for my family vacation, and it was
              a game-changer! The ease of navigating through various travel
              options made planning stress-free. The deals were not only
              fantastic but visually stunning, making it exciting to choose our
              next adventure. It truly transformed our travel experience!
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src={p2}
            alt="person stock image"
            className="w-44 h-auto aspect-square rounded-full mb-2"
          />
          <p>
            Kai Stanford, <span className="italic">Digital Nomad</span>
          </p>
          <span className="mb-2">San Francisco, CA</span>
          <div className="border-2 border-black p-4 rounded-lg">
            <p>
              As a frequent traveler, I&apos;ve tried numerous apps, but this
              one stands out! The simplicity of scheduling trips is phenomenal.
              I was impressed by how quickly I could book my dream vacation, and
              the deals presented were both enticing and affordable. It&apos;s
              my new go-to for all my travel needs!
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src={p3}
            alt="person stock image"
            className="w-44 h-auto aspect-square rounded-full mb-2"
          />
          <p>
            Joel Smith, <span className="italic">Entrepreneur</span>
          </p>
          <span className="italic mb-2">Austin, TX</span>
          <div className="border-2 border-black p-4 rounded-lg">
            <p>
              This travel app exceeded all my expectations! From the beautiful
              display of travel deals to the user-friendly interface, every
              aspect of the app made my journey planning a delight. I
              particularly loved the hassle-free booking process. It&apos;s been
              an absolute lifesaver for my busy schedule!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

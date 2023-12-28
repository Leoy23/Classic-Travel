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
      <div className="flex flex-col items-center justify-center gap-8 md:flex-row ">
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
              This travel app made planning our family vacation effortless and
              exciting. The easy navigation and stunning deals were impressive!
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
              As a frequent traveler, I&apos;m amazed by the simplicity and
              efficiency of this app. Booking is quick, and the deals are
              fantastic!
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
              Exceeded expectations! The user-friendly interface and hassle-free
              booking have made this my go-to app for travel.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
export const OurPartners = () => {
  const ourPartners = [
    { id: 1, name: "Adidas", logo: "/our-partners/adidas.png" },
    { id: 2, name: "Amazon", logo: "/our-partners/amazon.png" },
    { id: 3, name: "Burger King", logo: "/our-partners/burgerking.png" },
    { id: 4, name: "Disney", logo: "/our-partners/disney.png" },
    { id: 5, name: "Dominos", logo: "/our-partners/Dominos.png" },
    { id: 6, name: "FedEx", logo: "/our-partners/fedx.png" },
    { id: 7, name: "Google", logo: "/our-partners/google.png" },
    { id: 8, name: "KFC", logo: "/our-partners/KFC.png" },
    { id: 9, name: "LinkedIn", logo: "/our-partners/Linkedin.png" },
    { id: 10, name: "Netflix", logo: "/our-partners/netflix.png" },
    { id: 11, name: "Nike", logo: "/our-partners/Nike.png" },
    { id: 12, name: "PayPal", logo: "/our-partners/paypal.png" },
    { id: 13, name: "Pngegg", logo: "/our-partners/pngegg.png" },
    { id: 14, name: "Product Hunt", logo: "/our-partners/productHunt.png" },
    { id: 15, name: "Samsung", logo: "/our-partners/samsung.png" },
    { id: 16, name: "Puma", logo: "/our-partners/puma.png" },
    { id: 17, name: "Unilever", logo: "/our-partners/unilever.png" },
  ];

  const scrollingPartners = [...ourPartners, ...ourPartners];

  return (
    <div className="py-10 overflow-hidden rounded-lg">
      <h2 className="mb-12 font-bold text-center text-gray-800 text-3xl/normal ">
        Get Insight of Worlds Top Brands <br /> And Their Services
      </h2>
      <div className="rounded-lg bg-green-50">
        {/* <motion.div
          className="flex gap-6"
          // initial={{ x: "100%" }}
          // animate={{ x: "-100%" }}
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            duration: 15,
            repeat: Infinity,
            // repeatType: "mirror",
            ease: "linear",
          }}
        > */}
        <Marquee gradient={true} speed={100} pauseOnHover={true}>
          {scrollingPartners.map((partner) => (
            <div
              key={partner.id}
              className=" p-4 rounded-lg flex items-center justify-center min-w-[180px]"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-full max-w-[120px] h-auto object-contain"
              />
            </div>
          ))}
        </Marquee>
        {/* </motion.div> */}
      </div>
    </div>
  );
};

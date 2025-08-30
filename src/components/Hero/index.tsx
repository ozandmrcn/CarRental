import type { FC } from "react";
import Button from "../Button";
import { motion } from "motion/react";

const Hero: FC = () => {
  return (
    <div className="hero">
      <div className="pt-14 padding-x flex-1 max-h-[920px]">
        <h1 className="hero-title">Feel the Freedom, Begin the Journey</h1>
        <p className="hero-subtitle">
          Are you ready for an unforgettable journey with gold-standard service?
          Elevate your car rental experience with Golden Options and make every
          moment truly special.
        </p>
        <Button text="Explore Cars" designs="mt-10" type="button" />
      </div>

      <div className="flex justify-center">
        <motion.img
          initial={{
            translateX: 200,
            scale: 0.7,
          }}
          animate={{
            translateX: 0,
            scale: 1,
          }}
          transition={{ duration: 0.5 }}
          src="/hero.png"
          className="object-contain"
          alt="graybmw"
        />
      </div>
    </div>
  );
};

export default Hero;

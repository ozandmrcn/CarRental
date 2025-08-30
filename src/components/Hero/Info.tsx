import type { FC } from "react";
import type { ICar } from "../../types";
import { motion } from "framer-motion";

interface Props {
  car: ICar;
}

const Info: FC<Props> = ({ car }) => {
  const arr = [
    {
      icon: "/steering-wheel.svg",
      text: car.trany,
    },
    {
      icon: "/tire.svg",
      text: car.drive,
    },
    {
      icon: "/calendar.svg",
      text: car.year,
    },
  ];

  const navVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-full flex-between">
      {arr.map(({ icon, text }, key) => (
        <motion.div
          variants={navVariants}
          initial="hidden"
          whileInView="visible"
          key={key}
          className="flex-center flex-col lg:gap-2"
          transition={{
            delay: key * 0.2,
            duration: 0.4,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          <img src={icon} alt="info-icon" className="size-[25px]" />
          <p className="text-center text-sm">{text}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default Info;

import { useState, type FC } from "react";
import type { ICar } from "../../types";
import { calculatePrice } from "../../utils/calcPrice";
import { truncateTitle } from "../../utils/truncateTitle";
import Info from "./Info";
import Button from "../Button";
import { motion } from "motion/react";
import generateImage from "../../utils/generateImage";
import Modal from "../Modal";

interface Props {
  car: ICar;
}

const Card: FC<Props> = ({ car }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="car-card group">
      {/* Car Name */}
      <h2 className="car-card-content-title">{truncateTitle(car.model)}</h2>

      {/* Car Price */}
      <div className="flex mt-6 text-[19px]">
        <span className="font-semibold">$</span>
        <span className="text-[32px]">{calculatePrice(car)}</span>
        <span className="font-semibold self-end">/day</span>
      </div>

      {/* Car Image */}
      <div>
        <img
          src={generateImage(car, "28")}
          alt={car.make + " " + car.model}
          className="w-full h-full object-contain min-h-[200px]"
        />
      </div>

      {/* Car Features */}
      <div className="w-full h-[80px]">
        <div className="group-hover:hidden h-full flex items-center">
          <Info car={car} />
        </div>

        <motion.div
          initial={{ scale: 0.5 }}
          whileInView={{ scale: 1 }}
          className="hidden group-hover:block h-full items-center"
        >
          <Button
            name="more"
            text="More"
            type="button"
            designs="w-full text-white mt-3"
            fn={() => setIsOpen(true)}
          />
        </motion.div>
      </div>

      <Modal isOpen={isOpen} car={car} close={() => setIsOpen(false)} />
    </div>
  );
};

export default Card;

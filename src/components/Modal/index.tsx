import type { FC } from "react";
import type { ICar } from "../../types";
import Images from "./Images";
import formatData from "../../utils/formatData";
import { AnimatePresence, motion } from "motion/react";

interface IProps {
  car: ICar;
  isOpen: boolean;
  close: () => void;
}
const Modal: FC<IProps> = ({ car, close, isOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-[4px] grid place-items-center z-20">
          <motion.div
            initial={{ scale: 0 }}
            animate={{
              scale: 1,
            }}
            exit={{ scale: 0 }}
            className="bg-white p-6 relative max-w-xl max-h-[90vh] rounded-2xl flex flex-col gap-5 shadow-xl overflow-auto w-[95%] sm:min-w-[576px] min-h-[70vh]"
          >
            <button>
              <img
                src="/close.svg"
                alt="close-btn"
                className="cursor-pointer p-1 absolute end-1 top-1 z-10 bg-white rounded-full"
                onClick={close}
              />
            </button>

            {/* Car Images */}
            <Images car={car} />

            {/* Car Infos */}
            <div className="flex flex-col gap-5">
              {Object.entries(formatData(car)).map(([key, value]) => (
                <p className="flex justify-between gap-20">
                  <span className="capitalize">{key}</span>
                  <span className="font-semibold capitalize">
                    {value === "Y" || value === "T"
                      ? "Yes"
                      : value === "N"
                      ? "No"
                      : value === null || value === undefined
                      ? "-"
                      : value}
                  </span>
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;

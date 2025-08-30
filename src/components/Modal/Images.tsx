import type { FC } from "react";
import type { ICar } from "../../types";
import generateImage from "../../utils/generateImage";

interface IProps {
  car: ICar;
}

const Images: FC<IProps> = ({ car }) => {
  return (
    <div className="flex-1 flex-col gap-3">
      <div className="w-full h-50">
        <img
          src={generateImage(car, undefined, true)}
          alt="modal-images"
          className="w-full h-full mx-auto object-cover rounded-md"
        />
      </div>

      <div className="flex gap-2 sm:gap-3 my-3">
        <div className="rounded flex-1 flex relative h-30 bg-primary-blue-100 min-w-0">
          <img
            src={generateImage(car, "29")}
            alt="angle-29"
            className="mx-auto object-contain w-full h-full"
          />
        </div>

        <div className="rounded flex-1 flex relative h-30 bg-primary-blue-100 min-w-0">
          <img
            src={generateImage(car, "33")}
            alt="angle-33"
            className="mx-auto object-contain w-full h-full"
          />
        </div>

        <div className="rounded flex-1 flex relative h-30 bg-primary-blue-100 min-w-0">
          <img
            src={generateImage(car, "13")}
            alt="angle-13"
            className="mx-auto object-contain w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Images;

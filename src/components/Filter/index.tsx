import type { FC } from "react";
import Searchbar from "./Searchbar";
import Year from "./Year";

const Filter: FC = () => {
  return (
    <div className="mt-12 padding-x padding-y max-width">
      <div className="home-text-container">
        <h1 className="text-4xl font-extrabold">Car Catalog</h1>
        <p>Discover the cars you'll love</p>
      </div>

      <div className="home-filters">
        <Searchbar />

        <div className="home-filte-container">
          <Year />
        </div>
      </div>
    </div>
  );
};

export default Filter;

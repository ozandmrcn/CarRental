import { useState, type FC, type FormEvent } from "react";
import { useSearchParams } from "react-router-dom";
import ReactSelect from "react-select";
import { makes } from "../../utils/constants";
import type { SelectOption } from "../../types";

const Searchbar: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [make, setMake] = useState<string | null>(
    searchParams.get("make") || null
  );
  const [model, setModel] = useState<string | null>(
    searchParams.get("model") || null
  );

  const options: SelectOption[] = makes.map((make) => ({
    label: make,
    value: make,
  }));

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (make) {
      searchParams.set("make", make);
    } else {
      searchParams.delete("make");
    }

    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }

    searchParams.set("page", "1");

    setSearchParams(searchParams);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="searchbar flex gap-3 items-center justify-center"
    >
      <div className="searchbar-item items-end">
        <div className="w-full flex flex-col">
          <label htmlFor="make">Brand</label>
          <ReactSelect
            isClearable
            inputId="make"
            value={{ label: make, value: make }}
            onChange={(option) => setMake(option?.value as string | null)}
            options={options}
            placeholder="Search for a brand"
            className="w-full text-black"
          />
        </div>

        <button
          name="search"
          type="submit"
          className="ml-3 sm:hidden cursor-pointer"
        >
          <img src="/search.svg" alt="search-icon" className="size-[40px]" />
        </button>
      </div>

      <div className="searchbar-item flex flex-col items-start">
        <label htmlFor="model">Model</label>

        <div className="w-full flex">
          <div className="absolute ml-3 mt-1">
            <img
              src="/model-icon.png"
              alt="model-icon"
              className="size-[25px]"
            />
          </div>

          <input
            name="model"
            id="model"
            value={(model as string) || ""}
            onChange={(e) => setModel(e.target.value)}
            type="text"
            className="searchbar-input rounded text-black bg-white"
            placeholder="Search for a model"
          />

          <button name="search" type="submit" className="ml-3 cursor-pointer">
            <img src="/search.svg" alt="search-icon" className="size-[40px]" />
          </button>
        </div>
      </div>
    </form>
  );
};

export default Searchbar;

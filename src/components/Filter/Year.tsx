import { useState, type FC, type FormEvent } from "react";
import { useSearchParams } from "react-router-dom";

const Year: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [year, setYear] = useState<string>(searchParams.get("year") || "");

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (year) {
      searchParams.set("year", year);
    } else {
      searchParams.delete("year");
    }

    setSearchParams(searchParams);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <label htmlFor="year">Year</label>

      <div className="flex">
        <input
          name="year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          type="number"
          placeholder="YYYY"
          className="w-28 py-[6px] px-2 rounded-l-[4px] shadow text-black bg-white border-r border-zinc-200"
        />

        <button
          name="search"
          className="bg-white rounded-r text-blue-500 hover:bg-zinc-200 transition cursor-pointer px-3"
        >
          🔎
        </button>
      </div>
    </form>
  );
};

export default Year;

import { useEffect, useRef, useState, type FC } from "react";
import { fetchCars, LIMIT } from "../../utils/service";
import { type ICar } from "../../types";
import Warning from "../Warning";
import Card from "../Hero/Card";
import { useSearchParams } from "react-router-dom";
import CustomPagination from "./CustomPagination";
import Loader from "../Loader";

const List: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [cars, setCars] = useState<ICar[] | null>(null);
  const [total, setTotal] = useState<number | null>(null);
  const firstCard = useRef<HTMLDivElement | null>(null);

  const make: string = searchParams.get("make") || "";
  const model: string = searchParams.get("model") || "";
  const year: string = searchParams.get("year") || "";
  const page = parseInt(searchParams.get("page") || "1");

  const handlePageChange = (selectedPage: number) => {
    searchParams.set("page", String(selectedPage));
    setSearchParams(searchParams);
    firstCard.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    setIsLoading(true);

    fetchCars(make, model, year, String(page))
      .then((data) => {
        setCars(data.results);
        setTotal(data.total_count);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [make, model, year, page]);

  // when isLoading is true, show loading
  if (isLoading)
    return (
      <Warning>
        <Loader />
      </Warning>
    );

  // when error is not null, show error message
  if (error) return <Warning>{error}</Warning>;

  // when cars is empty or null, show cars list
  if (!cars || cars.length < 1) return <Warning>No data found</Warning>;

  // when isLoading is false, show cars list
  if (!isLoading)
    return (
      <div className="padding-x max-width">
        <section className="home-cars-wrapper">
          <div ref={firstCard} className="absolute" />
          {cars.map((car) => (
            <Card key={car.id} car={car} />
          ))}
        </section>

        {total && (
          <CustomPagination
            currentPage={page}
            totalPages={Math.ceil(total / LIMIT)}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    );
};

export default List;

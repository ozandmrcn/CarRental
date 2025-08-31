import type { FC } from "react";
import { Link } from "react-router-dom";

const NotFound: FC = () => {
  return (
    <div className="flex-1 h-full flex flex-col items-center text-center gap-10 mt-40">
      <h1 className="text-2xl font-bold">Page Not Found</h1>

      <h4 className="text-lg">
        The page has been removed or you entered an incorrect URL.
      </h4>

      <Link
        className="text-lg border py-2 px-4 rounded-md hover:bg-zinc-200 hover:text-black transition"
        to="/"
      >
        Home
      </Link>
    </div>
  );
};

export default NotFound;

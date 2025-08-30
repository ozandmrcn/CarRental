import type { FC } from "react";
import Filter from "../../components/Filter";
import Hero from "../../components/Hero";
import List from "../../components/List";

const Home: FC = () => {
  return (
    <div>
      <Hero />

      <Filter />

      <List />
    </div>
  );
};

export default Home;

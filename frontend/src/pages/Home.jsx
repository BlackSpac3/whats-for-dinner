import { useState } from "react";
import ExploreMenu from "../components/ExploreMenu";
import Header from "../components/Header";
import FoodDisplay from "../components/FoodDisplay";
import AppDownload from "../components/AppDownload";

const Home = () => {
  const [category, setCategory] = useState("all");
  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownload />
    </div>
  );
};
export default Home;

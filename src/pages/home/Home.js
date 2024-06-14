import RecipeList from "../../components/RecipeList";
import { useFetch } from "../../hooks/useFetch";
import "./Home.css";

const Home = () => {
  const { data, isPending, error } = useFetch("http://localhost:3030/recipes");
  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">로딩중...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
};

export default Home;

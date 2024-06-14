import "./Recipe.css";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

export default function Recipe() {
  const { id } = useParams();
  const url = "http://localhost:3030/recipes/" + id;
  const { error, isPending, data: recipe } = useFetch(url);

  return (
    <div className="recipe">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">loading..</p>}
      {recipe && <h1>{recipe.title}</h1>}

      {recipe && (
        <>
          <h2 className="page-title">{recipe.title}</h2>
          <p className="time">요리시간 {recipe.cookingTime} 완성!</p>
          <ul>
            {recipe.ingredients.map((ing) => (
              <li key={ing}>{ing}</li>
            ))}
          </ul>
          <p className="method">{recipe.method}</p>
        </>
      )}
    </div>
  );
}

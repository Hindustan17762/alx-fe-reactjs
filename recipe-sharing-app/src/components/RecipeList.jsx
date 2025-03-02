import { useRecipeStore } from '../store/recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const { filteredRecipes, recipes } = useRecipeStore((state) => ({
    filteredRecipes: state.filteredRecipes,
    recipes: state.recipes,
  }));

  const displayRecipes = filteredRecipes.length > 0 ? filteredRecipes : recipes;

  return (
    <div>
      <h2>Recipe List</h2>
      {displayRecipes.length === 0 ? (
        <p>No recipes yet. Add one!</p>
      ) : (
        displayRecipes.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <Link to={`/recipe/${recipe.id}`}>View Details</Link>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;

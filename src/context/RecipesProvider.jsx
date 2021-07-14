import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { RecipesContext } from '.';
import { shuffle } from '../helpers';
import {
  fetchByFirstLetter,
  fetchByIngredient,
  fetchByName,
  fetchLists,
} from '../services';

function RecipesProvider({ children }) {
  const [areas, setAreas] = useState([]);
  const [categories, setCategories] = useState({ drinks: [], meals: [] });
  const [ingredients, setIngredients] = useState({ drinks: [], meals: [] });
  const [recipes, setRecipes] = useState({ drinks: [], meals: [] });

  const getByFilter = async (filter, searchTerm, type) => {
    let result;
    if (filter === 'ingredient') {
      result = await fetchByIngredient(type, searchTerm);
    } else if (filter === 'name') {
      result = await fetchByName(type, searchTerm);
    } else if (searchTerm.length === 1) {
      result = await fetchByFirstLetter(type, searchTerm);
    } else {
      alert('Sua busca deve conter somente 1 (um) caracter');
      return [];
    }

    if (!result) {
      alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
      return [];
    }

    if (result.length > 1) setRecipes({ ...recipes, [type]: result});
    return result;
  };

  const shared = {
    areas,
    setAreas,
    categories,
    setCategories,
    ingredients,
    setIngredients,
    recipes,
    setRecipes,
    getByFilter,
  };

  async function getData() {
    const data = [
      fetchLists('a', 'meals'),
      fetchLists('c', 'drinks'),
      fetchLists('c', 'meals'),
      fetchLists('i', 'drinks'),
      fetchLists('i', 'meals'),
      fetchByName('drinks'),
      fetchByName('meals'),
    ];
    const result = await Promise.all(data);

    const mealsAreas = result[0].map((item) => item.strArea);
    setAreas(mealsAreas);

    const drinksCategories = shuffle(result[1])
      .filter((_item, index) => index < 5)
      .map((item) => item.strCategory);
    const mealsCategories = shuffle(result[2])
      .filter((_item, index) => index < 5)
      .map((item) => item.strCategory);
    setCategories({ drinks: drinksCategories, meals: mealsCategories });

    const drinksIngredients = result[3].map((item) => item.strIngredient1);
    const mealsIngredients = result[4].map((item) => item.strIngredient);
    setIngredients({ drinks: drinksIngredients, meals: mealsIngredients });

    const drinks = shuffle(result[5]);
    const meals = shuffle(result[6]);
    setRecipes({ drinks, meals });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <RecipesContext.Provider value={{ ...shared }}>
      {children}
    </RecipesContext.Provider>
  );
}

RecipesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RecipesProvider;

import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { MainContext, RecipesContext } from '.';
import { shuffle } from '../helpers';
import {
  fetchByFirstLetter,
  fetchByIngredient,
  fetchByName,
  fetchList,
} from '../services';

function RecipesProvider({ children }) {
  const { setIsLoading } = useContext(MainContext);
  const [areasList, setAreasList] = useState([]);
  const [categoriesList, setCategoriesList] = useState({ drinks: [], meals: [] });
  const [ingredientsList, setIngredientsList] = useState({ drinks: [], meals: [] });
  const [recipes, setRecipes] = useState({ drinks: [], meals: [] });

  const getByFilter = async (filter, searchTerm, type) => {
    setIsLoading(true);

    let result;
    if (filter === 'ingredient') {
      result = await fetchByIngredient(type, searchTerm);
    } else if (filter === 'name') {
      result = await fetchByName(type, searchTerm);
    } else if (searchTerm.length === 1) {
      result = await fetchByFirstLetter(type, searchTerm);
    } else {
      alert('Sua busca deve conter somente 1 (um) caracter');

      setIsLoading(false);
      return [];
    }

    if (!result) {
      alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');

      setIsLoading(false);
      return [];
    }

    if (result.length > 1) setRecipes({ ...recipes, [type]: result});

    setIsLoading(false);
    return result;
  };

  const getData = async () => {
    setIsLoading(true);

    const data = [
      fetchList('a', 'meals'),
      fetchList('c', 'drinks'),
      fetchList('c', 'meals'),
      fetchList('i', 'drinks'),
      fetchList('i', 'meals'),
      fetchByName('drinks'),
      fetchByName('meals'),
    ];
    const result = await Promise.all(data);

    const mealsAreas = result[0].map((item) => item.strArea);
    setAreasList(mealsAreas);

    const drinksCategories = shuffle(result[1])
      .filter((_item, index) => index < 5)
      .map((item) => item.strCategory);
    const mealsCategories = shuffle(result[2])
      .filter((_item, index) => index < 5)
      .map((item) => item.strCategory);
    setCategoriesList({ drinks: drinksCategories, meals: mealsCategories });

    const drinksIngredients = result[3].map((item) => item.strIngredient1);
    const mealsIngredients = result[4].map((item) => item.strIngredient);
    setIngredientsList({ drinks: drinksIngredients, meals: mealsIngredients });

    const drinks = shuffle(result[5]);
    const meals = shuffle(result[6]);
    setRecipes({ drinks, meals });

    setIsLoading(false);
  };

  const shared = {
    areasList,
    setAreasList,
    categoriesList,
    setCategoriesList,
    ingredientsList,
    setIngredientsList,
    recipes,
    setRecipes,
    getByFilter,
  };

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

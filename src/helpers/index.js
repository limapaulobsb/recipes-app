export function setConstants(isDrinks) {
  return ({
    idKey: isDrinks ? 'idDrink' : 'idMeal',
    imgKey: isDrinks ? 'strDrinkThumb' : 'strMealThumb',
    nameKey: isDrinks ? 'strDrink' : 'strMeal',
    title: isDrinks ? 'Drinks' : 'Meals',
    type: isDrinks ? 'drinks' : 'meals',
  });
}

export function urlToEmbed(url) {
  if (!url) return null;
  return url.replace('watch?v=', 'embed/');
}

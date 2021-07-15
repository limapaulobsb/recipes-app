export function setConstants(isDrinks) {
  return ({
    idKey: isDrinks ? 'idDrink' : 'idMeal',
    imgKey: isDrinks ? 'strDrinkThumb' : 'strMealThumb',
    nameKey: isDrinks ? 'strDrink' : 'strMeal',
    title: isDrinks ? 'Drinks' : 'Meals',
    type: isDrinks ? 'drinks' : 'meals',
  });
}

// Fisher-Yates algorithm as seen on https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
export function shuffle(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

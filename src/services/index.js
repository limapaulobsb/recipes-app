export async function fetchDetails(type, query) {
  try {
    const url = type === 'meals'
      ? 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='
      : 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
    const response = await fetch(`${url}${query}`);
    const data = await response.json();
    // console.log(data);
    return data[type][0];
  } catch (error) {
    console.log(error);
  }
}

export async function fetchRandom(type) {
  try {
    const url = type === 'meals'
      ? 'https://www.themealdb.com/api/json/v1/1/random.php'
      : 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    return data[type][0];
  } catch (error) {
    console.log(error);
  }
}

export async function fetchLists(list, type) {
  try {
    const url = type === 'meals'
      ? `https://www.themealdb.com/api/json/v1/1/list.php?${list}=list`
      : `https://www.thecocktaildb.com/api/json/v1/1/list.php?${list}=list`;
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    return data[type];
  } catch (error) {
    console.log(error);
  }
}

export async function fetchByCategory(type, query) {
  try {
    const url = type === 'meals'
      ? 'https://www.themealdb.com/api/json/v1/1/filter.php?c='
      : 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=';
    const response = await fetch(`${url}${query}`);
    const data = await response.json();
    // console.log(data);
    return data[type];
  } catch (error) {
    console.log(error);
  }
}

export async function fetchByFirstLetter(type, query) {
  try {
    const url = type === 'meals'
      ? 'https://www.themealdb.com/api/json/v1/1/search.php?f='
      : 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=';
    const response = await fetch(`${url}${query}`);
    const data = await response.json();
    // console.log(data);
    return data[type];
  } catch (error) {
    console.log(error);
  }
}

export async function fetchByIngredient(type, query) {
  try {
    let url = type === 'meals'
      ? 'https://www.themealdb.com/api/json/v1/1/filter.php?i='
      : 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=';
    const response = await fetch(`${url}${query}`);
    const data = await response.json();
    // console.log(data);
    return data[type];
  } catch (error) {
    console.log(error);
  }
}

export async function fetchByName(type, query = '') {
  try {
    const url = type === 'meals'
      ? 'https://www.themealdb.com/api/json/v1/1/search.php?s='
      : 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
    const response = await fetch(`${url}${query}`);
    const data = await response.json();
    // console.log(data);
    return data[type];
  } catch (error) {
    console.log(error);
  }
}

export async function fetchByAlcoholic(query) {
  try {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=';
    const response = await fetch(`${url}${query}`);
    const data = await response.json();
    // console.log(data);
    return data.drinks;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchByArea(query) {
  try {
    const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=';
    const response = await fetch(`${url}${query}`);
    const data = await response.json();
    // console.log(data);
    return data.meals;
  } catch (error) {
    console.log(error);
  }
}

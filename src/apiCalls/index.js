import apiKey from '../private/apiKey.js';
import * as helper from '../helpers';

export const getMovies = async () => {
  const root = 'https://api.themoviedb.org/3/';
  const response =
    await fetch(`${root}movie/upcoming?api_key=${apiKey}&language=en-US`);
  const movies = await response.json();
  return helper.moviesWrangler(movies.results);
};

export const addUser = async (user) => {
  try {
    const response = await fetch('api/users/new/', 
      {
        method: 'POST',
        body: JSON.stringify({email: user.email, password: user.password, name: user.name}),
        headers: {
          'Content-Type': 'application/json'
        }
      });
    const parsed = await response.json();
    console.log(parsed);
  } catch (error) {
    console.log({error})
  }
  // const validation = await response.json()
  // console.log(validation)
  // return validation

};
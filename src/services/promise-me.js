/**
 * TODO: Write a fetch request an API using .then AND async/await
 * An API of APIs
 */
export function fetchResp() {
  fetch('https://api.publicapis.org/random')
    .then((response) => response.json())
    .then((data) => console.log('API of APIs .then', data));
}

export async function asyncResp() {
  const resp = await fetch('https://api.publicapis.org/entries');
  const data = await resp.json();
  console.log('API of APIs async/await-', data);
  return resp;
}

/**
 * TODO: Ponball DB calls
 */
export function thenPonball() {
  fetch('https://ponball.herokuapp.com/api/v1/machines')
    .then((resp) => resp.json())
    .then((data) => console.log('.then ponball', data));
}

export async function asyncPonball() {
  const resp = await fetch('https://ponball.herokuapp.com/api/v1/machines');
  const data = await resp.json();
  console.log('async ponball', data);
}
/**
 * TODO: Art institute of Chicago
 */
export function thenAIC() {
  fetch('https://api.artic.edu/api/v1/artworks')
    .then((resp) => resp.json())
    .then((data) => console.log('AIC .then', data));
}

export async function asyncAIC() {
  const resp = await fetch('https://api.artic.edu/api/v1/artworks');
  const data = await resp.json();
  console.log('async AIC', data);
}

/**
 * TODO:
 */

/**
 * TODO: cat api
 */
export function thenCat() {
  fetch('https://thatcopy.pw/catapi/rest/')
    .then((resp) => resp.json())
    .then((data) => console.log('Cat .then', data));
}

export async function asyncCat() {
  const resp = await fetch('https://thatcopy.pw/catapi/rest/');
  const data = await resp.json();
  console.log('Cat async', data);
}
/**
 * TODO:
 */

/**
 * TODO:
 */

/**
 * TODO:
 */

/**
 * TODO:
 */

import 'whatwg-fetch';
import getBaseUrl from './baseUrl';

const BASE_URL = getBaseUrl();

//CRUD Methods Here
export function getUsers() {
  return get('users');
}

export function deleteUser(id) {
  return del(`users/${id}`);
}

function get(url){
  return fetch(BASE_URL + url).then(onSucess, onError);
}

function del(url){

  const request = new Request((BASE_URL + url), {method: 'DELETE'});
  return fetch(request).then(onSucess, onError);
}

function onSucess(response){
  return response.json();
}

function onError(error){
  console.log(error);
}

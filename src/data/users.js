import { clearUserData, setUserData, updateNav } from "../util.js";
import { get, post } from "./request.js";
import {page} from '../lib.js';

const endpoints = {
  login: "/users/login",
  register: "/users/register",
  logout: "/users/logout",
};

export async function login(email, password) {
  const result = await post(endpoints.login, { email, password });
  setUserData(result);
  updateNav();
  page.redirect('/');
}

export async function register(email, password) {
  const result = await post(endpoints.register, { email, password });
  setUserData(result);
  updateNav();
  page.redirect('/');
}

export async function logout() {
  const promise = await get(endpoints.logout);
  clearUserData();

  await promise;
  page.redirect('/')
}

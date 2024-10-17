export const validEmail = new RegExp(
  "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
);
export const key = "token";
export const token = "user";
export const validPassword = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$");
export const names = new RegExp("[ A-Za-z] ");
export const email = new RegExp(
  "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
);
export const mobileNumber = new RegExp("^[0-9]");

// // ^[A-Za-z0-9_-]^$
// // ^[a-zA-Z0-9]+$
// "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$";

// const validEmail = new RegExp("^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$");
// const validPassword = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$");
// const names = new RegExp("^[a-zA-Z]+$");
// const username = new RegExp("^[a-zA-Z0-9]+$");

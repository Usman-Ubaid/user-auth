export const saveAuthToken = (token: string) => {
  localStorage.setItem("auth-token", token);
};

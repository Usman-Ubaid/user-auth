export const saveAuthToken = (token: string) => {
  localStorage.setItem("auth-token", token);
};

export const removeAuthToken = () => {
  localStorage.removeItem("auth-token");
};

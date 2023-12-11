// type ResponseType = {
//   message: string;
//   user: {
//     userId: string;
//     email: string;
//     token: string;
//     usernmae: string;
//   };
// };

export const signupRequest = async <T>(formData: T) => {
  try {
    const postData = await fetch(`${import.meta.env.VITE_API_KEY}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!postData.ok) {
      console.log("Failed to Register");
    }

    const response = await postData.json();
    return response;
  } catch (error) {
    console.log(error);
  }
};

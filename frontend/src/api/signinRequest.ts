type ResponseType = {
  message: string;
  user: {
    userId: string;
    email: string;
    token: string;
    usernmae: string;
  };
};

export const signinRequest = async <T>(
  formData: T
): Promise<ResponseType | undefined> => {
  try {
    const postData = await fetch(`${import.meta.env.VITE_API_KEY}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!postData.ok) {
      console.log("Error signing in.");
    }

    const response: ResponseType = await postData.json();
    return response;
  } catch (error) {
    console.log(error);
  }
};

type SigninResponseType = {
  message: string;
  user: {
    userId: string;
    email: string;
    token: string;
    usernmae: string;
  };
};

type SignupResponseType = {
  message: string;
  userId: string;
  token: string;
};

type ResponseType = SigninResponseType & SignupResponseType;

export const signinRequest = async <T>(
  formData: T,
  resource: string
): Promise<ResponseType | undefined> => {
  try {
    const postData = await fetch(
      `${import.meta.env.VITE_API_KEY}/${resource}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    if (resource === "signin" && !postData.ok) {
      console.log("Error signing in");
      return;
    }

    if (resource === "signup" && !postData.ok) {
      console.log("Failed to register");
      return;
    }

    const response: ResponseType = await postData.json();
    return response;
  } catch (error) {
    console.log(error);
  }
};

import { ResponseType } from "../types/apiResponseType";

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

    if (!postData.ok) {
      if (resource === "signin") {
        throw new Error("Error signing in");
      } else if (resource === "signup") {
        throw new Error("Failed to register");
      }
    }

    const response: ResponseType = await postData.json();
    return response;
  } catch (error) {
    console.log(error);
  }
};

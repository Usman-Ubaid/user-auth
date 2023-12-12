import { ResponseType } from "../types/apiResponseType";

export const signinRequest = async <T>(
  formData: T,
  resource: string
): Promise<ResponseType | undefined> => {
  try {
    const postData = await fetch(`${import.meta.env.VITE_API_KEY}${resource}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const response: ResponseType = await postData.json();
    return response;
  } catch (error) {
    console.log(error);
  }
};

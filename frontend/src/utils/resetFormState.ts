import { SignupFormState } from "../types/formStateTypes";

export const timeout = (
  setIsSubmitting: React.Dispatch<React.SetStateAction<boolean>>,
  setMessage?: React.Dispatch<React.SetStateAction<string | null>>,
  setFormData?: React.Dispatch<React.SetStateAction<SignupFormState>>
) => {
  setTimeout(() => {
    if (setFormData) {
      setFormData({
        username: "",
        email: "",
        password: "",
      });
    }
    if (setMessage) {
      setMessage(null);
    }

    setIsSubmitting(false);
  }, 3000);
};

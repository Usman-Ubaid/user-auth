import { SignupFormState } from "../types/formStateTypes";

export const timeout = (
  setIsSubmitting: React.Dispatch<React.SetStateAction<boolean>>,
  setError?: React.Dispatch<React.SetStateAction<string | null>>,
  setFormData?: React.Dispatch<React.SetStateAction<SignupFormState>>,
  setSuccess?: React.Dispatch<React.SetStateAction<string | null>>
) => {
  setTimeout(() => {
    if (setFormData) {
      setFormData({
        username: "",
        email: "",
        password: "",
      });
    }
    if (setError) {
      setError(null);
    }
    if (setSuccess) {
      setSuccess(null);
    }
    setIsSubmitting(false);
  }, 3000);
};

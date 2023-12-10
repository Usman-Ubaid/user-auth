import { useState } from "react";

export const useForm = <T>(initialState: T) => {
  const [formData, setFormData] = useState<T>(initialState);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  return { formData, handleInputChange };
};

import { useState } from "react";
import { authRequest } from "../api/authRequest";
import Layout from "../components/Layout";
import LabelInput from "../components/formComponents/LabelInput";
import { useForm } from "../hooks/useForm";
import { SignupFormState } from "../types/formStateTypes";
import { timeout } from "../utils/resetFormState";

const Signup = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const { formData, handleInputChange, setFormData } = useForm<SignupFormState>(
    {
      username: "",
      email: "",
      password: "",
    }
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const response = await authRequest(formData, "/signup");
    if (response?.message === "User already exists") {
      setError("User already exists");
      timeout(setIsSubmitting, setError);
      return;
    }
    if (!response) {
      setError("Failed to Register");
      timeout(setIsSubmitting, setError);
    } else {
      setSuccess("Registered Successfully");
      timeout(setIsSubmitting, setSuccess, setFormData);
      return;
    }
  };
  return (
    <div>
      <Layout>
        <div className="form-wrapper">
          <form className="form" onSubmit={handleSubmit}>
            <div>
              {error && <p className="error-message">{error}</p>}
              {success && <p className="success-message">{success}</p>}
              <h2>Sign Up</h2>
            </div>
            <LabelInput
              label="Username"
              name="username"
              id="username"
              onChange={handleInputChange}
              value={formData.username}
            />
            <LabelInput
              label="Email"
              name="email"
              id="email"
              onChange={handleInputChange}
              value={formData.email}
            />
            <LabelInput
              label="Password"
              name="password"
              id="password"
              onChange={handleInputChange}
              value={formData.password}
            />
            <button className="btn" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Registering" : "Register"}
            </button>
          </form>
        </div>
      </Layout>
    </div>
  );
};

export default Signup;

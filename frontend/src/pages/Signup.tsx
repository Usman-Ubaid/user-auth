import { useState } from "react";
import { signinRequest } from "../api/authRequest";
import Layout from "../components/Layout";
import LabelInput from "../components/formComponents/LabelInput";
import { useForm } from "../hooks/useForm";
import { SignupFormState } from "../types/formStateTypes";

const Signup = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
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
    const response = await signinRequest(formData, "/signup");
    if (response) {
      console.log("Successfully Registered");
    } else {
      console.log("Failed to Register");
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        username: "",
        email: "",
        password: "",
      });
    }, 3000);
  };
  return (
    <div>
      <Layout>
        <div className="form-wrapper">
          <form className="form" onSubmit={handleSubmit}>
            <div>
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

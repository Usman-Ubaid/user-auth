import { useNavigate } from "react-router-dom";
import { authRequest } from "../api/authRequest";
import Layout from "../components/Layout";
import LabelInput from "../components/formComponents/LabelInput";
import { useForm } from "../hooks/useForm";
import { saveAuthToken } from "../utils/localStorageUtils";
import { SigninFormState } from "../types/formStateTypes";
import { useState } from "react";
import { validateEmail } from "../utils/emailValidation";

const Signin = () => {
  const [error, setError] = useState<string | null>(null);
  const { formData, handleInputChange } = useForm<SigninFormState>({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateEmail(formData.email)) {
      const response = await authRequest(formData, "/signin");
      if (response?.user) {
        saveAuthToken(response?.user.token);
        navigate("/");
        return;
      }
      setError("Invalid Credentials");
      setTimeout(() => {
        setError(null);
      }, 3000);
    } else {
      setError("Invalid Email Address");
      setTimeout(() => {
        setError(null);
      }, 3000);
    }
  };

  return (
    <Layout>
      <div className="form-wrapper">
        <form className="form" onSubmit={handleSubmit}>
          <div>
            {error && <p className="error-message">{error}</p>}
            <h2>Sign In</h2>
          </div>
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
          <button className="btn" type="submit">
            Login
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Signin;

import { signinRequest } from "../api/authRequest";
import Layout from "../components/Layout";
import LabelInput from "../components/formComponents/LabelInput";
import { useForm } from "../hooks/useForm";
import { SignupFormState } from "../types/formStateTypes";

const Signup = () => {
  const { formData, handleInputChange, setFormData } = useForm<SignupFormState>(
    {
      username: "",
      email: "",
      password: "",
    }
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await signinRequest(formData, "api/signup");
    if (response) {
      console.log("Successfully Registered");
    } else {
      console.log("Failed to Register");
    }
    setFormData({
      username: "",
      email: "",
      password: "",
    });
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
            <button className="btn" type="submit">
              Register
            </button>
          </form>
        </div>
      </Layout>
    </div>
  );
};

export default Signup;

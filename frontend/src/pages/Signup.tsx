import { signinRequest } from "../api/authRequest";
import Layout from "../components/Layout";
import LabelInput from "../components/formComponents/LabelInput";
import { useForm } from "../hooks/useForm";
import { SignupFormState } from "../types/formStateTypes";

const Signup = () => {
  const { formData, handleInputChange } = useForm<SignupFormState>({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await signinRequest(formData, "signup");
    if (!response) {
      console.log("Error registering");
      return;
    }
    console.log("Successfully Registered");
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
            />
            <LabelInput
              label="Email"
              name="email"
              id="email"
              onChange={handleInputChange}
            />
            <LabelInput
              label="Password"
              name="password"
              id="password"
              onChange={handleInputChange}
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

import { signinRequest } from "../api/signinRequest";
import Layout from "../components/Layout";
import LabelInput from "../components/formComponents/LabelInput";
import { useForm } from "../hooks/useForm";

export type SigninFormState = {
  email: string;
  password: string;
};

const Signin = () => {
  const { formData, handleInputChange } = useForm<SigninFormState>({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await signinRequest(formData);
    if (!response) {
      console.log("Invalid Credentials");
      return;
    }
    console.log(response);
  };

  return (
    <Layout>
      <div className="form-wrapper">
        <form className="form" onSubmit={handleSubmit}>
          <div>
            <h2>Sign In</h2>
          </div>
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
            Login
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Signin;

import Layout from "../components/Layout";
import LabelInput from "../components/formComponents/LabelInput";

const Signup = () => {
  return (
    <div>
      <Layout>
        <div className="form-wrapper">
          <form className="form">
            <div>
              <h2>Sign Up</h2>
            </div>
            <LabelInput label="Username" name="username" id="username" />
            <LabelInput label="Email" name="email" id="email" />
            <LabelInput label="Password" name="password" id="password" />
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

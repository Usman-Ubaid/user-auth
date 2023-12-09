import Layout from "../components/Layout";
import LabelInput from "../components/formComponents/LabelInput";

const Signin = () => {
  return (
    <Layout>
      <div className="form-wrapper">
        <form className="form">
          <div>
            <h2>Sign In</h2>
          </div>
          <LabelInput label="Email" name="email" id="email" />
          <LabelInput label="Password" name="password" id="password" />
          <button className="btn" type="submit">
            Login
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Signin;

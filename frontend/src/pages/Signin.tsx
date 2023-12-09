import Layout from "../components/Layout";
import Fieldset from "../components/formComponents/Fieldset";

const Signin = () => {
  return (
    <Layout>
      <div className="form-wrapper">
        <form className="form">
          <Fieldset legend="Signin" />
          <input type="submit" value="Signin" />
        </form>
      </div>
    </Layout>
  );
};

export default Signin;

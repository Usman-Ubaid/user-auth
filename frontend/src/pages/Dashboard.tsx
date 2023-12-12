import { useNavigate } from "react-router-dom";
import { removeAuthToken } from "../utils/localStorageUtils";
import { useEffect } from "react";
import { fetchDashboardData } from "../api/getDashboardData";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      await fetchDashboardData(navigate);
    };

    fetchData();
  }, [navigate]);

  const handleLogout = () => {
    removeAuthToken();
    navigate("/signin");
  };
  return (
    <div className="dashboard">
      <nav>
        <button className="btn" onClick={handleLogout}>
          Logout
        </button>
      </nav>
      <section className="body">
        <h1>Thank You for Signing in</h1>
      </section>
    </div>
  );
};

export default Dashboard;

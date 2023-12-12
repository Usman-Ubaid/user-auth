import { useNavigate } from "react-router-dom";
import { removeAuthToken } from "../utils/localStorageUtils";
import { useEffect, useState } from "react";
import { fetchDashboardData } from "../api/getDashboardData";

type DataType = {
  message: string;
  user: {
    userId: string;
    username: string;
    email: string;
  };
};

const Dashboard = () => {
  const [data, setData] = useState<DataType | undefined>();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchDashboardData(navigate);
      if (response) {
        setData(response);
      }
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
        <h1>
          Thank You for Signing in, {data && data?.user?.username.toUpperCase()}
        </h1>
      </section>
    </div>
  );
};

export default Dashboard;

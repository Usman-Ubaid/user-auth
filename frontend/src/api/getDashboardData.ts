import { NavigateFunction } from "react-router-dom";

export const fetchDashboardData = async (navigate: NavigateFunction) => {
  const token = localStorage.getItem("auth-token");
  if (token) {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_KEY}/api/dashboard`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        console.error("Failed to fetch dashboard data");
      }
    } catch (error) {
      console.log(error);
    }
  } else {
    console.log("no token available");
    navigate("/signin");
  }
};

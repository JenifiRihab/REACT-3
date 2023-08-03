import Cookies from "js-cookie";
import HeaderAdmin from "../../component/admin/HeaderAdmin";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const DashboardPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!Cookies.get("jwt")) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <HeaderAdmin />

      <h1> <strong>Bonjour, Vous êtes sur le dashboard </strong></h1>
    </>
  );
};

export default DashboardPage;
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { showErrorToast } from "../../../helper/ToastHelper";

function TokenProtected({ children }) {
  const data = useSelector((state) => state.authLogin);
  const navigate = useNavigate();

  console.log("data TokenProtected:", data);

  useEffect(() => {
    if (data.token === null) {
      showErrorToast("Silahkan login terlebih dahulu");
      navigate("/login");
    }
  }, []);

  return children;
}

export default TokenProtected;

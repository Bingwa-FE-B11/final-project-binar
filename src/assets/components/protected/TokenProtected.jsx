import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { showErrorToast } from "../../../helper/ToastHelper";
import { CookieStorage, CookiesKeys } from "../../../utils/cookie";

function TokenProtected({ children }) {
  const navigate = useNavigate();

  const token = CookieStorage.get(CookiesKeys.AuthToken);

  useEffect(() => {
    if (token === undefined) {
      showErrorToast("Silahkan login terlebih dahulu");
      navigate("/login");
    }
  }, []);

  return children;
}

export default TokenProtected;

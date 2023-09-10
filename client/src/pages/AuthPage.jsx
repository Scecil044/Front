import { Office } from "../assets";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { SignUp } from "../components";
const AuthPage = () => {
  const { user } = useSelector((state) => state.user);
  const [open, setOpen] = useState(true);
  const location = useLocation();

  let from = location?.state?.from?.pathname || "/";

  if (user.token) {
    window.location.replace(from);
  }

  return (
    <div className="w-full">
      <img
        src={Office}
        alt="auth background image"
        className="object-contain"
      />

      <SignUp open={open} setOpen={setOpen} />
    </div>
  );
};

export default AuthPage;

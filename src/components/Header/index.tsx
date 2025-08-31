import type { FC } from "react";
import { Link } from "react-router-dom";
import Button from "../Button";

const Header: FC = () => {
  return (
    <header className="w-full z-10">
      <div className="max-width flex-between padding-x padding-y">
        <Link to="/">
          <img
            src="/favicon.png"
            alt="logo"
            width={50}
            height={50}
            className="mylogo"
          />
        </Link>

        <Button name="signup" text="Sign Up" type="button" />
      </div>
    </header>
  );
};

export default Header;

import type { FC } from "react";

interface IProps {
  text: string;
  designs?: string;
  disabled?: boolean;
  type: "button" | "submit" | "reset";
  fn?: () => void;
}

const Button: FC<IProps> = ({ text, designs, type, disabled, fn }) => {
  return (
    <button
      type={type}
      className={`custom-btn ${designs}`}
      disabled={disabled}
      onClick={fn}
    >
      {text}
    </button>
  );
};

export default Button;

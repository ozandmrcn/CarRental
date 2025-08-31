import type { FC } from "react";

interface IProps {
  name?: string;
  text: string;
  designs?: string;
  disabled?: boolean;
  type: "button" | "submit" | "reset";
  fn?: () => void;
}

const Button: FC<IProps> = ({ name, text, designs, type, disabled, fn }) => {
  return (
    <button
      type={type}
      name={name}
      className={`custom-btn ${designs}`}
      disabled={disabled}
      onClick={fn}
    >
      {text}
    </button>
  );
};

export default Button;

type Props = {
  className?: string;
  type?: "reset" | "submit" | "button" | undefined;
  children: React.ReactNode;
};

import "./Button.css";

export default function Button({ className, type, children }: Props) {
  return (
    <button
      type={type}
      className={`btn ${className ? className : ""}`}
      role="button"
    >
      {children}
    </button>
  );
}

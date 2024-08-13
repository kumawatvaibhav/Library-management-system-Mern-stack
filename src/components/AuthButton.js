import React from "react";
import { useFormStatus } from "react-dom";

const AuthButton = ({ variant }) => {
  const { pending } = useFormStatus();

  let buttonText = "Sign In";
  if (variant === "sign-up") {
    buttonText = "Sign Up";
  }

  return (
    <button
      disabled={pending}
      type="submit"
      className={`${
        pending ? "bg-gray-600" : "bg-[#77E4C8]"
      } rounded-md w-full px-12 py-3 text-base font-medium text-slate-800`}
    >
      {pending ? "Loading..." : buttonText}
    </button>
  );
};

export default AuthButton;
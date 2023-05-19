"use client";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

import type { FC, PropsWithChildren, ReactNode } from "react";

interface Props extends PropsWithChildren {
  className?: string;
  loadingSpinner?: ReactNode;
}

const SubmitButton: FC<Props> = ({ children, className, loadingSpinner }) => {
  const { pending } = useFormStatus();

  return (
    <button type="submit" className={`flex justify-center gap-2 ${className}`} disabled={pending}>
      {children}
      {pending && loadingSpinner}
    </button>
  );
};

export default SubmitButton;

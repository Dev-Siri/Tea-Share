"use client";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

import type { PropsWithChildren, ReactNode } from "react";

interface Props extends PropsWithChildren {
  className?: string;
  loadingSpinner?: ReactNode;
}

export default function SubmitButton({ children, className, loadingSpinner }: Props) {
  const { pending } = useFormStatus();

  return (
    <button type="submit" className={`flex justify-center gap-2 ${className}`} disabled={pending}>
      {children}
      {pending && loadingSpinner}
    </button>
  );
}

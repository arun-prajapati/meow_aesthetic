import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const TypographyP = ({ text, className, children }: { text?: string; className?: string, children: ReactNode }) => {
  return <p className={cn("leading-7 text-lg lg:text-xl", className)} title={text}>{children}</p>;
};

export default TypographyP;

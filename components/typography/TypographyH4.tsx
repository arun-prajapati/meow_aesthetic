import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const TypographyH4 = ({ text, className,children }: { text?: string; className?: string,children:ReactNode }) => {
  return (
    <h4
      title={text}
      className={cn(
        "scroll-m-20  font-medium tracking-tight text-lg lg:text-2xl",
        className
      )}
    >
      {children}
    </h4>
  );
};

export default TypographyH4;

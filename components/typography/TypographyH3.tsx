import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const TypographyH3 = ({ text, className, children }: { text?: string; className?: string, children: ReactNode }) => {
  return (
    <h3
      className={cn(
        "scroll-m-20 font-semibold text-xl lg:text-3xl",
        className
      )}
      title={text}
    >
      {children}
    </h3>
  );
};

export default TypographyH3;

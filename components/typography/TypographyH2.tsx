import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const TypographyH2 = ({ text, className, children }: { text?: string; className?: string, children?: ReactNode }) => {
  return (
    <h2
      className={cn(
        "scroll-m-20 text-2xl lg:text-4xl",
        className
      )}
      title={text}
    >
      {children}
    </h2>
  );
};

export default TypographyH2;

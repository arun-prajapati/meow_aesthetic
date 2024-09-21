import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const TypographyH1 = ({ children, className, text }: { children: ReactNode; className?: string, text?: string }) => {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-3xl lg:text-5xl",
        className
      )}
      title={text}
    >
      {children}
    </h1>
  );
};

export default TypographyH1;

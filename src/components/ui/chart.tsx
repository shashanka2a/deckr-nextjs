"use client";

import * as React from "react";

// Simple chart component stubs for compatibility
// These are not fully functional but prevent build errors

export const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, children, ...props }, ref) => {
  return (
    <div ref={ref} className={className} {...props}>
      {children}
    </div>
  );
});
ChartContainer.displayName = "Chart";

export const ChartTooltip = ({ children, ...props }: React.ComponentProps<"div">) => {
  return <div {...props}>{children}</div>;
};

export const ChartTooltipContent = (props: React.ComponentProps<"div">) => {
  return <div {...props} />;
};

export const ChartLegend = ({ children, ...props }: React.ComponentProps<"div">) => {
  return <div {...props}>{children}</div>;
};

export const ChartLegendContent = (props: React.ComponentProps<"div">) => {
  return <div {...props} />;
};

export const useChart = () => {
  return { config: {} };
};
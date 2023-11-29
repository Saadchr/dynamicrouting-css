"use client";
import React from "react";
import { ThemeProvider } from "next-themes";

function ThemeProviding({ children, ...props }) {
  return (
    <ThemeProvider attribute="class" {...props}>
      {children}
    </ThemeProvider>
  );
}

export default ThemeProviding;

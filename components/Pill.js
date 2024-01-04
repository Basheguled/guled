import React from "react";

export const Pill = ({ children, bg }) => (
  <div className={`${bg ? bg : "bg-[var(--pill-background)]"} rounded px-2`}>
    {children}
  </div>
);

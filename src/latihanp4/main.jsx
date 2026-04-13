import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./tailwind.css"; // 

import ResponsiveDesign from "./ResponsiveDesign";
import FrameworkListSearchFilter from "./FrameworkListSearchFilter";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ResponsiveDesign />
    {/* <FrameworkListSearchFilter/> */}
  </StrictMode>
);
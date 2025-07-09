import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import '@radix-ui/themes/styles.css';
import { Theme } from "@radix-ui/themes";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Theme>
      <App />
    </Theme>
  </StrictMode>
);


// import { StrictMode, useState } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import "@radix-ui/themes/styles.css";
// import { Theme } from "@radix-ui/themes";
// import App from "./App.jsx";

// function Root() {
//   const [mode, setMode] = useState("light");

//   return (
//     <Theme appearance={mode}>
//       <button
//         onClick={() => setMode((prev) => (prev === "light" ? "dark" : "light"))}
//         style={{
//           position: "absolute",
//           top: "10px",
//           right: "10px",
//           zIndex: 1000,
//           padding: "8px 12px",
//           cursor: "pointer",
//         }}
//       >
//         Toggle Theme
//       </button>
//       <App />
//     </Theme>
//   );
// }

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <Root />
//   </StrictMode>
// );

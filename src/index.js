import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";
// import "@aws-amplify/ui-react/styles.css";  
import './index.css'; // ← これがないと Tailwind が効かない

Amplify.configure(awsExports);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
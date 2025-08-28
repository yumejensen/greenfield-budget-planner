import React from "react";

import "../../style.css"

import { createRoot } from "react-dom/client";

import Landing from "./components/Landing.jsx"

const app = createRoot(document.getElementById('app'))

app.render(<Landing />)
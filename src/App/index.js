import { AppUI } from "./AppUI";
import React from "react";

import "./App.css";
import { TodoProvider } from "../TodoContex";

// [
//   { text: "Viajar mucho", completed: true },
//   { text: "Ir de compras", completed: true },
//   { text: "Salir a bailar", completed: false },
//   { text: "Jugar consola", completed: false },
// ]

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;

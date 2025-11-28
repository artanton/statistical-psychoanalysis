import { useState } from "react";
import "./App.css";
import Box from "@mui/material/Box";
import Input from "./components/input/Input.tsx";
import type { Imatrix } from "./interface.ts";
import Chart from "./components/charts/Chart.tsx";

function App() {
  const [matrix, setMatrix] = useState<Imatrix | null>(null);
  return (
    <Box
      sx={{
        padding: "16px",
        borderRadius: 4,
        backgroundColor: "white",
        
      }}
    >
      <h1 className="app-title">РОЗРАХУНОК МАТРИЦІ</h1>
      <Input onResult={setMatrix} />
      <Chart matrix={matrix} />
      <p>
        <a
          href="https://www.instagram.com/psiho_kod/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Замовити розбір
        </a>
      </p>
    </Box>
  );
}

export default App;

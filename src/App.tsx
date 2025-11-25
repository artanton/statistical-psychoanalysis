import { useEffect, useState } from "react";
import "./App.css";
import Box from "@mui/material/Box";
import Input from "./components/input/Input.tsx";
import type { Imatrix } from "./interface.ts";
import Chart from "./components/charts/Chart.tsx";
import { calculate } from "./helper/calculate.ts";

function App() {
  const [matrix, setMatrix] = useState<Imatrix | null>(null);
  const [date, setDate] = useState<string | null>(null);
  
  useEffect(() => {
    if (!date) return;
    const result = calculate(date);
    
        if (! result) {
          alert("Помилка при розрахунку матриці");
          return;
        }
        setMatrix(result)
  }, [date]);
  return (
    <Box
      sx={{
        padding: "16px",
        borderRadius: 4,
        backgroundColor: "white",
        
      }}
    >
      <h1 className="app-title">РОЗРАХУНОК МАТРИЦІ</h1>
      <Input onResult={setDate} />
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

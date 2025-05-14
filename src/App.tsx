import { useState } from 'react';
import './App.css';
import Input from './components/input/Input.tsx';
import type { Imatrix } from './interface.ts';
import Chart from './components/charts/chart.tsx';

function App() {
  const [matrix, setMatrix] = useState<Imatrix | null>(null);
  return (
    <>
    <h1 className = "app-title">Розрахунок матриці</h1>
   <Input onResult = {setMatrix}/>
   <Chart matrix = {matrix}/>
    </>
  )
}

export default App

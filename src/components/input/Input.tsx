import * as React from "react";
import "./Input.css";
import { Dayjs } from "dayjs";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import type { InputProps } from "../../interface";
import { calculate } from "../../helper/calculate";
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';

export default function Input({ onResult }: InputProps) {
  const [value, setValue] = React.useState<Dayjs | null>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value) {
      alert("Введіть дату народження!");
      return;
    }
    const date = value.format("DD-MM-YYYY");
    const matrix = calculate(date);

    if (!matrix) {
      alert("Помилка при розрахунку матриці");
      return;
    }
    onResult(matrix);
  };

  return (
    <div className="input-container">
      <form className="form-container" onSubmit={onSubmit}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            className="date-input"
            label="Введіть дату народження"
            format="DD/MM/YYYY"
            value={value}
            onChange={(newValue) => setValue(newValue)}
          />
        </LocalizationProvider>
        <button type="submit" className="submit-button">
          РОЗРАХУВАТИ
        </button>
      </form>
    </div>
  );
}

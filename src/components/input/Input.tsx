import * as React from "react";
import "./Input.css";
import { Dayjs } from "dayjs";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import type { Imatrix, InputProps } from "../../interface";
import { calculate } from "../../helper/calculate";
import dayjs from "dayjs";

export default function Input({ onResult, onInput }: InputProps) {
  const [value, setValue] = React.useState<Dayjs | null>(null);
  const [matrix, setMatrix] = React.useState<Imatrix | null>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value) {
      alert("Введіть дату народження!");
      return;
    }
    const date = value.format("DD.MM.YYYY");
    
    if (!dayjs(date, "DD.MM.YYYY", true).isValid()) {
      alert("Невірний формат дати! Використовуйте DD-MM-YYYY.");
      return;
    }
    
    const matrix = calculate(date);
    setMatrix(matrix);

    if (!matrix) {
      alert("Помилка при розрахунку матриці");
      return;
    }
    onInput(date);
    onResult(matrix);
  };
  const reload = () => {
    window.location.reload();
    setMatrix(null);
  }


  return (
    <div className="input-container">
      {!matrix?(<form className="form-container" onSubmit={onSubmit}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            slotProps={{
             
               textField: {
                  fullWidth: true,

                  sx: {
                    "& label": {
                      color: "#0a6569",
                    },
                    " & .MuiOutlinedInput-root": {
                      borderColor: "red", // input border color
                    },

                    // "& label.Mui-focused": {
                    //   color: "#0a6569", // label focused
                    // },
                    "& .MuiOutlinedInput-root": {
                      color: "#0a6569",
                      borderColor: "#0a6569",
                    },
                  },
                },
              day: {
                sx: {
                  "&.MuiPickersDay-root.Mui-selected": {
                    backgroundColor: "#0a6569",
                    color: "#ffea82",
                  },
                },
              },
              yearButton: {
                sx: {
                  color: "#0a6569",
                },
              },
              actionBar: {
                sx: {
                  // Target the buttons within the action bar
                  "& .MuiButton-root": {
                    backgroundColor: "#0a6569", // Set your desired background color
                    color: "#ffea82", // Set text color for contrast
                    "&:hover": {
                      color: "#0a6569",
                      backgroundColor: "#ffea82", // Optional: hover effect
                    },
                  },
                },
              },
            }}
            minDate={dayjs("0100-01-01")}
            maxDate={dayjs("2500-12-31")}
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
      </form>):(<button type="button" className="submit-button" onClick={reload}>
        НОВИЙ РОЗРАХУНОК
</button>)}
    </div>
  );
}

import * as React from 'react';
import "./Input.css";
import { Dayjs } from 'dayjs';
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { calculate } from '../../helper/calculate';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';



export default function Input() {
  const [value, setValue] = React.useState<Dayjs | null>(null);

  const onSubmit = (e:  React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!value) {
      alert("Введіть дату народження!");
      return
    }
    const date = value.format('DD-MM-YYYY');
  calculate(date);
  };

  return (
    <div className="input-container">
      <form className="form-container" onSubmit={onSubmit}>
      
        {/* <input
          className="date-input"
          type="date"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder="Введіть дату народження"
        /> */}
            <LocalizationProvider dateAdapter={AdapterDayjs} >
      {/* <DemoContainer components={['DatePicker']}> */}
        <DatePicker 
        label="Введіть дату народження" 
        // defaultValue={dayjs('01-01-0011')}
        format="DD/MM/YYYY"
        value={value}
        onChange={(newValue) => setValue(newValue)}
        />
      {/* </DemoContainer> */}
    </LocalizationProvider>
        <button type="submit" className="submit-button">
          Розрахувати
        </button>
      </form>
    </div>
  );
}

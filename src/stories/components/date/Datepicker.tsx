import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './styles.css';

export interface DatepickerProps {
  date?: string | Date;
  setDate?: () => void;
  minDate?: undefined | Date;
  maxDate?: undefined | Date;
}

const Datepicker = ({ date, setDate, minDate, maxDate }: DatepickerProps) => {
  return <Calendar className="lib-datepicker" value={date} onChange={setDate} minDate={minDate} maxDate={maxDate} />;
};

export default Datepicker;

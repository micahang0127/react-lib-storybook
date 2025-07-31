import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export interface DatepickerBetweenProps {
  date?: string | Date;
  setDate?: () => void;
  minDate?: undefined | Date;
  maxDate?: undefined | Date;
}

const DatepickerBetween = ({ date, setDate, minDate, maxDate }: DatepickerBetweenProps) => {
  return (
    <div className="epk-datepicker-between">
      <Calendar value={date} onChange={setDate} minDate={minDate} maxDate={maxDate} />
      ~
      <Calendar value={date} onChange={setDate} minDate={minDate} maxDate={maxDate} />
    </div>
  );
};

export default DatepickerBetween;

import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';

const Calendar = () => {
   const [selected, setSelected] = useState(new Date());

   return (
      <div>
         <DayPicker
            mode="single"
            selected={selected}
            onSelect={setSelected}
         />
         <p>You picked {format(selected, 'PP')}.</p>
      </div>
   );
};

export default Calendar;
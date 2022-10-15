import React, { useEffect, useState } from 'react';

const Hooks = () => {
   const [appointmentdata, setAppointmentdata] = useState([]);
   useEffect(() => {
      fetch('http://localhost:5000/appointment')
         .then(res => res.json())
         .then(data => setAppointmentdata(data))
   }, [])


   return [appointmentdata, setAppointmentdata];

};

export default Hooks;
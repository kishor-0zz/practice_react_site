import React from 'react';
import Hooks from '../Hooks/AppointmentData';
import Calendar from './Calendar';
import chare from '../../../images/chair.png'

const Appointment = () => {
   const [appointmentdata] = Hooks();

   return (
      <div className='container'>
         <div className='row text-center'>
            <div className='daypiker col-lg-6 col-md-6 col-12 pt-5'>
               <Calendar></Calendar>
            </div>
            <div className='daypiker col-lg-6 col-md-6 col-12 pt-5'>
               <img src={chare} alt="chare" />
            </div>
         </div>
         <div className='appointment'></div>
      </div>
   );
};

export default Appointment;
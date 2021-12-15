import React from 'react';
import { useState } from 'react';
import ServiceDetails from './ServiceDetails';

const ServiceDetails = (props) => {
    const saveFormDataHandler = (enteredFormData) => {
        const formData = {
          ...enteredFormData,
          id: Math.random().toString()
        };
        props.onAddExpense(formData);
      };

      return(
        <ServiceDetails onSaveFormData={saveFormDataHandler} />
      );
};

export default ServiceDetails;


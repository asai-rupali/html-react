import React, { useState } from 'react';
import './ServiceDetails.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
import { Formik } from 'formik';
import * as Yup from "yup";

const ServiceDetails = (props) => {
    const [enteredPostName, setEnteredPostName] = useState('');
    const [enteredServeDeptName, setEnteredServeDeptName] = useState('');
    const [enteredDeptName, setEnteredDeptName] = useState('');
    const [enteredStatusName, setEnteredStatusName] = useState('');
    const [enteredStartDate, setEnteredStartDate] = useState('');
    const [enteredTillDate, setEnteredTillDate] = useState('');
    const postChangeHandler = (event) => {
        setEnteredPostName(event.target.value);
      };
    const servedeptChangeHandler = (event) => {
        setEnteredServeDeptName(event.target.value);
      };
    const dropdownDeptChangeHandler = (event) => {
        setEnteredDeptName(event.target.value);
    };
    const dropdownStatusChangeHandler = (event) => {
        setEnteredStatusName(event.target.value);
    };
    const date1ChangeHandler = (event) => {
        setEnteredStartDate(event.target.value);
    };
    const date2ChangeHandler = (event) => {
        setEnteredTillDate(event.target.value);
    };
      
    
    const submitHandler = (event) => {
        event.preventDefault();
    
        const formData = {
          postName: enteredPostName,
          servedeptName: enteredServeDeptName,
          deptName: enteredDeptName,
          statusName: enteredStatusName,
          startDate: new Date(enteredStartDate),
          tillDate: new Date(enteredTillDate),
        };
    
        // props.onSaveFormData(formData);
        setEnteredPostName('');
        setEnteredServeDeptName('');
        setEnteredDeptName('');
        setEnteredStatusName('');
        setEnteredStartDate('');
        setEnteredTillDate('');
        console.log(formData);
    };
    
   
    return(
        <Card className="input">
            <h3>Service Details</h3>
            <br />
            <Formik
                initialValues={{ postname: '', servedpt: '' }}
                validate={values => {
                  const errors = {};
                  if (!values.postname) {
                    errors.postname = 'Please Enter Post/Designation Name';
                  } 
                  if (!values.servedpt) {
                    errors.servedpt = 'Please Enter Last Serving Department';
                  } 
                  if (!values.dptname) {
                    errors.dptname = 'Please Enter Department Name';
                  }
                  return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                  }, 400);
                }}
            >
             {({
                 values,
                 touched,
                 errors,
                 isSubmitting,
                 handleBlur,
                
            }) =>
            <form onSubmit={submitHandler}>
                <label htmlFor="post_name" >Post/Designation Name</label>
                <input id="post_name" type="text" name="postname" value={enteredPostName} onChange={postChangeHandler} 
                onBlur={handleBlur}
                />
                {errors.postname && touched.postname && (
                <div className="input-feedback">{errors.postname}
                </div>
                )}

                <label>Department Name</label>
                <select className="" name="dptname" value={props.selected} onChange={dropdownDeptChangeHandler}>
                    <option>Select</option>
                    <option value="administration">Administration</option>
                    <option value="info_system">Information Systems</option>
                    <option value="digital_service">Digital Services</option>
                    <option value="business">Business Technology & Information Services</option>
                </select>

                <label htmlFor="serving_dept">Last Serving Department</label>
                <input id="serving_dept" type="text" name="servedpt" value={enteredServeDeptName} onChange={servedeptChangeHandler} 
                onBlur={handleBlur}
                />
                {errors.servedpt && touched.servedpt &&  (
                <div className="input-feedback">{errors.servedpt}
                </div>
                )}
                
                <label>Status</label>
                <select value={props.selected} onChange={dropdownStatusChangeHandler}>
                    <option>Select</option>
                    <option value="serving">Serving</option>
                    <option value="deveoping">Developing</option>
                    <option value="testing">Testing</option>
                    <option value="delivering">Delivering</option>
                </select>
                <br />
                
                <label>Start Date</label>
                <input
                    type='date'
                    min='2019-12-01'
                    max='2022-12-01'
                    value={enteredStartDate}
                    onChange={date1ChangeHandler}
                />
                <label>Till Date</label>
                <input
                    type='date'
                    min='2019-12-01'
                    max='2022-12-01'
                    value={enteredTillDate}
                    onChange={date2ChangeHandler}
                />
                
                <Button type="submit">Save</Button>
            </form>  
            }
            </Formik>
    </Card>
    );

};

export default ServiceDetails;
import React, { useEffect, useState } from 'react'
import { createEmployee, getEmployee, updateEmployee } from '../services/EmployeeService'
import { useNavigate,useParams } from 'react-router-dom'

export const EmployeeComponent = () => {

 const [firstName, setFirstName] = useState('')
 const [lastName, setLastName] =useState('')
 const [address,setAddress] = useState('')
 const[salary, setSalary] = useState('')
 const [age, setAge] = useState('')
 const [email, setEmail] = useState('')


const {id} = useParams();

 const [errors,setErrors] = useState({

  firstName:'',
  lastName:'',
  address:'',
  salary:'',
  age:'',
  email:''

 })

const navigator = useNavigate();

useEffect(()=>{

  // getting data
  if(id){
    getEmployee(id).then((response)=> {
      setFirstName(response.data.firstName);
      setLastName(response.data.lastName);
      setAddress(response.data.address);
      setSalary(response.data.salary);
      setAge(response.data.age);
      setEmail(response.data.email);
    

    }).catch(error => {console.error(error);

    })
  }

},[id])



// creating an event
 
 function saveOrUpdateEmployee(e){
  e.preventDefault();

if (validateForm()) {

  const employee = {firstName, lastName, address, salary, age, email};
  console.log(employee)

    if(id){
      updateEmployee(id, employee).then((response) => {
        console.log(response.data);
        navigator('/employee');
    }).catch(error => {
        console.error(error);
    })
    } else {
      createEmployee(employee).then((response) => {
      console.log(response.data)
      navigator('/employee');
  
    }).catch(error => {
      console.error(error);

  })
 }
    }

      }

  function validateForm(){

  let valid = true;
  const errorsCopy = {... errors}

  if(firstName.trim()){
    errorsCopy.firstName = '';

  }
  else{
    errorsCopy.firstName = 'first name is required';
    valid = false;
  }

  if(lastName.trim()){
    errorsCopy.lastName = '';

  }
  else{
    errorsCopy.lastName = 'last name is required';
    valid = false;

  }

  if(address.trim()){
    errorsCopy.address = '';

  }
  else{
    errorsCopy.address= 'address is required';
    valid = false;
    
  }

  if(String(salary).trim()){
    errorsCopy.salary = '';

  }
  else{
    errorsCopy.salary = 'salary is required';
    valid = false;
    
  }

 if(String(age).trim()){
    errorsCopy.age = '';

  }
  else{
    errorsCopy.age = 'age is required';
    valid = false;
    
  }
  

  if(email.trim()){
    errorsCopy.email = '';

  }
  else{
    errorsCopy.email = 'email is required';
   
     }

     setErrors(errorsCopy);

     return valid;


}


function pageTitle(){
  if(id){
    return  <h2 className='text-center'>Update Employee</h2>

  }else{
   return <h2 className='text-center'>Add Employee</h2>
 
  }

}


  return (
    <div className='container'>
      <br></br> <br></br>
      <div className='row'>
      <div className='card col-md-6 offset-md-3 offset-md-3'>
       {
        pageTitle()
       }
        <div className='card-body'>

          {/* creating a form inside a card body */}

          <form>
            <div className='form-group mb-2'>
            <label className='form-label'>First Name:</label>
            <input
            type='text'
            placeholder='enter employee first name'
            name='firstName'
            value={firstName}
            className={`form-control ${errors.firstName ? 'is-invalid': ''}`}
            onChange={(e) => setFirstName(e.target.value)}
            >
            </input>
            {errors.firstName && <div className='invalid-feedback'> {errors.firstName} </div>}
            </div>

            <div className='form-group mb-2'>
            <label className='form-label'>Last Name:</label>
            <input
            type='text'
            placeholder='enter employee last name'
            name='lastName'
            value={lastName}
            className={`form-control ${errors.lastName ? 'is-invalid': ''}`}
            onChange={(e) => setLastName(e.target.value)}
            >
            </input>
            {errors.lastName && <div className='invalid-feedback'> {errors.lastName} </div>}
            </div>

            <div className='form-group mb-2'>
            <label className='form-label'>Address:</label>
            <input
            type='text'
            placeholder='enter employee Address'
            name='address'
            value={address}
            className={`form-control ${errors.address ? 'is-invalid': ''}`}
            onChange={(e) => setAddress(e.target.value)}
            >
            </input>
            {errors.address&& <div className='invalid-feedback'> {errors.address} </div>}
            </div>

            <div className='form-group mb-2'>
            <label className='form-label'>Salary:</label>
            <input
            type='text'
            placeholder='enter employee salary'
            name='salary'
            value={salary}
            className={`form-control ${errors.salary? 'is-invalid': ''}`}
            onChange={(e) => setSalary(e.target.value)}
            >
            </input>
            {errors.salary && <div className='invalid-feedback'> {errors.salary} </div>}
            </div>

            <div className='form-group mb-2'>
            <label className='form-label'>Age:</label>
            <input
            type='text'
            placeholder='enter employee age'
            name='age'
            value={age}
            className={`form-control ${errors.age? 'is-invalid': ''}`}
            onChange={(e) => setAge(e.target.value)}
            >
            </input>
            {errors.age && <div className='invalid-feedback'> {errors.age} </div>}
            </div>

            <div className='form-group mb-2'>
            <label className='form-label'>Email:</label>
            <input
            type='text'
            placeholder='enter employee email'
            name='email'
            value={email}
            className={`form-control ${errors.email? 'is-invalid': ''}`}
            onChange={(e) => setEmail(e.target.value)}
            >
            </input>
            {errors.email && <div className='invalid-feedback'> {errors.email} </div>}
            </div>
  
  <button className='btn btn-primary' onClick={saveOrUpdateEmployee} >Submit</button>
         
          </form>


</div>
        </div>
      </div>



    </div>
    
  )
}

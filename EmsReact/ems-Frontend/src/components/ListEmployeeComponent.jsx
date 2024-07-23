import { useEffect, useState } from "react"
import {deleteEmployee, listEmployee} from "../services/EmployeeService"
import {useNavigate} from "react-router-dom"

const ListEmployeeComponent = () => {

 const [employees,setEmployees] =  useState([])

 const navigator = useNavigate();

 useEffect(() => {
  getAllEmployee();

 },[])

 function getAllEmployee(){

    listEmployee().then((response) =>{ setEmployees(response.data);
    }).catch(error => {console.error(error);
   
    })
 }

 function addNewEmployee(){
    navigator('/add-employee')

 }

 function updateEmployee(id){
    navigator(`/edit-employee/${id}`)
 }

  function removeEmployee(id){
    console.log(id);

    deleteEmployee(id).then((response) => {
        getAllEmployee();

    }).catch(error => {
        console.error(error);
    })

  }

  return (
    <div className='container text-center'>

        <h2 className='text-center'>List of Employees</h2>

<button className="btn btn-secondary mb-2" onClick={addNewEmployee}>Add Employee</button>

        <table className='table table-striped table-hover table-bordered border-primary'>
            <thead>
                <tr className="table-active">
                    <th>Employee id</th>
                    <th>Employee First Name</th>
                    <th>Employee Last Name</th>
                    <th>Employee Address</th>
                    <th>Employee salary</th>
                    <th>Employee age</th>
                    <th>Employee email id</th>
                    <th>Actions</th>
                </tr>
            </thead>

            <tbody>
                {
                    employees.map(employee =>
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.address}</td>
                            <td>{employee.salary}</td>
                            <td>{employee.age}</td>
                            <td>{employee.email}</td>
                            <td>
                                <div className="col-lg-2 d-flex align-items-end">
                                <button className="btn btn-info btn-block m-2 " onClick={()=>updateEmployee(employee.id)}
                                    style={{width:'100px'}}
                                    >Update</button>
                                <button className="btn btn-danger form-control btn-block m-2" onClick={()=>removeEmployee(employee.id)} 
                                    style={{width:'100px'}}
                                    >Delete</button>
</div>
                                </td>
                                 </tr>
                    )

                }
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponent
import { useState } from 'react'
import './Employees.css'



function Employees() {
const [employees, setEmployees] = useState([
  {
    id: 1,
    name: 'Arun Kumar',
    email: 'arun@gmail.com',
    department: 'Development',
    designation: 'React Developer',
    status: 'Active'
  },
  {
    id: 2,
    name: 'Rahul Sharma',
    email: 'rahul@gmail.com',
    department: 'Design',
    designation: 'UI Designer',
    status: 'Active'
  },
  {
    id: 3,
    name: 'Priya Nair',
    email: 'priya@gmail.com',
    department: 'HR',
    designation: 'HR Executive',
    status: 'On Leave'
  },
  {
    id: 4,
    name: 'Vishnu Raj',
    email: 'vishnu@gmail.com',
    department: 'Development',
    designation: 'Frontend Developer',
    status: 'Active'
  }
])
  const [search, setSearch] = useState('')

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(search.toLowerCase())
  )
 const deleteEmployee = (id)=>{
    setEmployees((prevEmployee)=>(
     prevEmployee.filter((employee)=> employee.id !== id)
    ))
 }
 const [showForm, setShowForm] = useState(false)
  return (
    <div className="employees-section">
      <h1>Employees List</h1>
     <button
  className="add-employee-btn"
  onClick={() => setShowForm(!showForm)}
>
  + Add Employee
</button>
{showForm && (
  <div className="modal-overlay">
    <div className="employee-form">

      <div className="form-header">
        <h2 className='form_head'>Add Employee</h2>

        <button
          className="close-btn"
          onClick={() => setShowForm(false)}
        >
          ×
        </button>
      </div>

      <input type="text" placeholder="Employee Name" />
      <input type="email" placeholder="Email" />
      <input type="text" placeholder="Department" />
      <input type="text" placeholder="Designation" />

      <button className="submit-btn">
        Add
      </button>

    </div>
  </div>
)}
      <input
        type="text"
        className='searchbox'
        placeholder="Search employees..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table className="employee-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Designation</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {filteredEmployees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.department}</td>
              <td>{employee.designation}</td>
              <td>{employee.status}</td>
              <td><button className='delete_btn' onClick={()=> deleteEmployee(employee.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
    
export default Employees

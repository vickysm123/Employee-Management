
import { useState } from 'react'
import './Employees.css'

const employees = [
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
]

function Employees() {

  const [search, setSearch] = useState('')

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="employees-section">
      <h1>Employees</h1>

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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
    
export default Employees

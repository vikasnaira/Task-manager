import React from 'react'

const EmployeesLIst = () => {
  return (
    <div>
       <div>
              <h2 className="text-xl font-bold mb-4">Employees</h2>
              <ul className="space-y-2">
                <li className="bg-white p-4 rounded shadow">Rahul - Designer</li>
                <li className="bg-white p-4 rounded shadow">Sneha - Developer</li>
                <li className="bg-white p-4 rounded shadow">Amit - Tester</li>
              </ul>
            </div>
    </div>
  )
}

export default EmployeesLIst

import React from 'react'

const Record = ({employee}) => {
  return (
    <div>
      <header className='p-2 bg-secondary text-white'>
        
            <h1>Employee Details</h1>
       
      </header>
    <div className="detail">
    <table class="table table-secondary ">
  <thead>
    <tr>
      <th scope="col">Empid </th>
      <th scope="col">Empname</th>
      <th scope="col">Empemail</th>
      <th scope="col">Empphone </th>
      <th scope="col"> Empaddres</th>
      <th scope="col">Empdeg</th>
      <th scope="col">Empsalary</th>
      <th scope="col">Empdepartment </th>
    </tr>
  </thead>
  <tbody>
{
    employee.map((val)=> {
        return(
            <tr>
            <th scope="row">{val.empid }</th>
            <td>{val.empname}</td>
            <td>{val.empemail}</td>
            <td>{val.empphone}</td>
            <td>{val.empaddress.area}, {val.empaddress.city }, {val.empaddress.state }, {val.empaddress.country }</td>
            <td>{val.empdeg}</td>
            <td>{val.empsalary}</td>
            <td>{val.empdepartment}</td>
          </tr>
        )
    })
}

   
  </tbody>
</table>
    </div>
    </div>
  )
}

export default Record

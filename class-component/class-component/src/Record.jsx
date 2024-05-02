import { Component } from "react";
import './style.css'

class Record extends Component{
    constructor( props){
        super();
        
        this.state ={
            AllUser : props. AllData
          
        }
       
    }
    render(){
        return(
           <div>
      <div className="alldata p-5">
      <h1 >User-Deta</h1>
      <table class="table table-info table-striped table-borderless">
  <thead>
    <tr>
      <th scope="col">GRID </th>
      <th scope="col">NAME</th>
      <th scope="col">EMAIL</th>
      <th scope="col">PASSWORD</th>
      <th scope="col">COURSE</th>
      <th scope="col">CITY</th>
    </tr>
  </thead>
  <tbody>   
   {
    this.state.AllUser.map((val) => {
        return(
             <tr>
      <th scope="row">{val.grid}</th>
      <td>{val.name}</td>
      <td>{val.email}</td>
      <td>{val.password}</td>
      <td>
        {val.course.map((item,i) => {
        return(
         <div>{item}</div>
        )
      })}</td>
      <td>{val.city}</td>
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
}
export default Record
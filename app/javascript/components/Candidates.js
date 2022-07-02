import { Component } from "react"
import h from "components/htm_create_element"

export default class Candidates extends Component {

    render(){
    
        return h`
            <div className="row justify-content-center">
                <div className="col-auto">
                    <div className="container-lg">
                        <div className="table-responsive">
                            <div className="table-wrapper">
                                <div className="table-title">
                                    <div className="row">
                                        <div className="col-sm-8"><h4>Job seeking candidates</h4></div>
                       </div>
                   </div>
                   <table className="table table-bordered w-100">
                       <thead>
                           <tr>
                               <th>Name</th>
                               <th>Email</th>
                               <th>Description</th>
                               <th>Strengths</th>
                               <th>Actions</th>
                           </tr>
                       </thead>
                       <tbody>
                           <tr>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td>                                   
                                   <button className="btn btn-info">Contact</button>
                                   <button className="btn btn-warning">Hire</button>                                                                               
                               </td>
                           </tr>
                       </tbody>   
                   </table>    
               </div>
           </div>     
       </div>  
   </div>     
   </div> `}
}
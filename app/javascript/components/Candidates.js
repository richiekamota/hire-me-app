import { Component } from "react"
//import { css } from '@emotion/react'
import h from "components/htm_create_element"

export default function Candidates (props)  { 
    //console.log(props.props);
    const data  = props.props;
    const cdata = data.replace(/[{}]/,'');
    const  ccdata = JSON.parse(cdata.replace(/]}/,']'));
    // console.log(ccdata);
    //     console.log(h`          
    //         ${ccdata.map((candidate, i) => h`
    //             ${candidate.name}
    //        `)}`); 

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
                            <table className="table table-bordered"> 
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
                                    ${ccdata.map((candidate, index) => {
                                        return h`                                        
                                            <tr key=${index}>
                                                <td>${candidate.name}</td>
                                                <td>${candidate.email}</td>
                                                <td>${candidate.description}</td>
                                                <td>${candidate.strengths}</td>
                                                <td>                                   
                                                    <button class="btn btn-info">Contact</button>
                                                    <button class="btn btn-warning">Hire</button>                                                                               
                                                </td>
                                            </tr>                                                                            
                                        `})
                                    }
                                </tbody> 
                            </table> 
                        </div>
                    </div>
                </div> 
            </div> 
        </div>                                       
    `           
}


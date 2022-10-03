import axios from "axios";
import React, {Component} from "react";
import ReactDOM from "react-dom";
import { toast } from "react-toastify";

class CreateModal extends Component{
    
    constructor(props){
        super(props);

        this.state={
            employeeName:null,
            employeeSalary:null
        }
    }

    // Updating employee name state
    inputEmployeeName =(event)=>{
        this.setState({
            employeeName:event.target.value,
        });
    }
    // Updating employee saalary state
    inputEmployeeSalary =(event)=>{
        this.setState({
            employeeSalary:event.target.value,
        });
    }
    // Storing Employee Data
    storeEmployeeData=()=>{
        axios.post('store/employee/data',{
            employeeName: this.state.employeeName,
            employeeSalary: this.state.employeeSalary,
        }).then(()=>{
            toast.success("Employee Saved Succesfully");
            setTimeout(() => {
                location.reload();
            }, 2500);
        })
    }

    render(){
        return(
            <>
            <div className="row text-right mb-3 pb-3">
                <button className="btn btn-info text-right col-3 offset-md-9"
                    data-toggle="modal"
                    data-target="#modalCreate"
                >
                    Add New Employee
                </button>
            </div>
            <div className="modal fade" id="modalCreate" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">  
                    <h5 className="modal-title" id="exampleModalLabel">Employee Detail</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form className="form">
                        <div className="form-group">
                            Name: <input type="text"
                                        id="employeeName"
                                        className="form-control"
                                        placeholder="Name Here"
                                        onChange={this.inputEmployeeName}
                                    /><br/>

                            Salary: <input type="text"
                                        id="employeeSalary"
                                        className="form-control"
                                        placeholder="Salary Here"
                                        onChange={this.inputEmployeeSalary}

                                    />
                        </div>
                    </form>

                </div>
                <div className="modal-footer">
                    <button type="button"
                            className="btn btn-primary" 
                            value="Save"
                            onClick={this.storeEmployeeData}
                    >
                        Save changes
                    </button>

                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
            </div>
            </>
        );
    }
}

export default CreateModal;
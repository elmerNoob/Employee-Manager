import React, {Component} from "react";
import ReactDOM from "react-dom";

class UpdateModal extends Component{
    
    constructor(props){
        super(props);

        this.state={
            employeeName:null,
            employeeSalary:null
        }
    }

    render(){
        return(
            <div className="modal fade" id={"updateModal"+this.props.modalId} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">  
                    <h5 className="modal-title" id="exampleModalLabel">Employee Detail</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    Name: <strong>{this.props.employeeData.currentEmployeeName}</strong>
                    <hr />
                    Salary: <strong>{this.props.employeeData.currentEmployeeSalary}</strong>

                    <form className="form">
                        <div className="form-group">
                            Name: <input type="text" id="employeeName" values={this.state.employeeName?? ""}/><br/>
                            Salary: <input type="text" id="employeeSalary" values={this.state.employeeSalary?? ""}/>
                        </div>
                    </form>

                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <input type="submit"
                            className="btn btn-info"
                            values="Update"
                            onClick={this.updateEmployeeData}/>

                </div>
                </div>
            </div>
            </div>
        );
    }
}

export default UpdateModal;
import React, { Component } from "react";
import ReactDOM from "react-dom";
import TableRow from './TableRow';
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import CreateModal from "./Modal/CreateModal";

class Table extends Component{

    constructor(props){
        super(props);

        this.state = {
            employees:[],
        }
    }
    // Life cycle method
    componentDidMount(){
        this.getEmployeeList();
    }

    //Get employee list
    getEmployeeList =()=>{
        let self = this;
        axios.get('/get/employee/list').then(function (response){
            self.setState({
                employees:response.data
            })
            // console.log(response.data);
        })
    }


    render(){
        return (
            <div>
                <ToastContainer/>
                <CreateModal/>
                <table className="table text-center table-hover">
                    <thead className="thead-light">
                        <tr>
                        <th scope="col" width="100px">#</th>
                        <th scope="col" width="100px">Name</th>
                        <th scope="col" width="100px">Salary</th>
                        <th scope="col" width="100px">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.employees.map(function(x,i){
                            return <TableRow key={i} data={x}/>
                        })}
                    </tbody>
                    </table>
            </div>
        )
    }
}
export default Table;
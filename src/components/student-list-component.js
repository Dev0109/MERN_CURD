import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import StudentTableRow from './StudentTableRow'

const StudentList = () =>{
    // DataTable() {
    //     return 
    // }
    return (
        <div className="table-wrapper">
            <Table className="justify" striped bordered hover responsive>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Roll on</th>
                        <th>Action</th>
                    </tr>
                </tbody>
                <tbody>
                    {/* {Datatable()} */}
                </tbody>
            </Table>
        </div>
    );
}

export default StudentList;
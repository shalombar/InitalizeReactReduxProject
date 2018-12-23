import React, { Component } from 'react';
import '../../css/employeesList/employeesList.css';
import { connect } from 'react-redux';
import * as actions from '../../actions/general.act';
import ReactTable from "react-table";

class EmployeesList extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentWillMount() {
        this.props.getEmployeesList();
    }

    _update(){

    }

    render() {
        const columns = [
            {
                Header: 'Id',
                accessor: 'id',
                Cell:(row)=><input type='text' value={row.value}></input>,
                width:100,
                maxWidth:100,
                minWidth:100
            },
            {
                Header: 'Name',
                accessor: 'name',
                width:100,
                maxWidth:100,
                minWidth:100
            },
            {
                Header: 'Age',
                accessor: 'age',
                width:50,
                maxWidth:50,
                minWidth:50
            },
            {
                Header: 'EmployeeType',
                accessor: 'employeeType',
                width:120,
                maxWidth:120,
                minWidth:120
            },
            {
                Header: 'Seniority',
                accessor: 'seniority',
                width:85,
                maxWidth:85,
                minWidth:85
            },
            {
                Header: 'Wage',
                accessor: 'wage',
                width:80,
                maxWidth:80,
                minWidth:80
            },
            {
                Header: 'Actions',
                Cell: () => {
                    return (
                        <div className='actions'>
                            <button className='edit' onClick={()=>this._update()}>Edit</button>
                            <button className='delete'>Delete</button>
                        </div>
                    )
                },
                sortable:false,
                filterable:false,
                width:130,
                maxWidth:130,
                minWidth:130

            }
        ]

        return (
            <div className='employeesTable'>
                <ReactTable
                    data={this.props.employees}
                    columns={columns}
                    defaultPageSize={5}
                    filterable
                />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    employees: state.general.employeesList
})

export default connect(mapStateToProps, actions)(EmployeesList);
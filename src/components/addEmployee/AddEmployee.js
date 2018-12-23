import React, { Component } from 'react';
import '../../css/addEmployee/addEmployee.css';
import { connect } from 'react-redux';
import * as actions from '../../actions/general.act';
import Popup from "reactjs-popup";

class AddEmployee extends Component {
    state = {
        id: '',
        name: '',
        age: '',
        employeeType: '',
        seniority: '',
        wage: '',
        showPopUp: false
    }

    _onChange(inputType, e) {
        this.setState({ [inputType]: e.target.value })
    }

    _submit() {
        let data = {
            id: this.state.id,
            name: this.state.name,
            age: this.state.age,
            employeeType: this.state.employeeType,
            seniority: this.state.seniority,
            wage: this.state.wage,
        }

        this.props.formSubmit(data);
        this.setState({ showPopUp: false })
    }

    _addButton() {
        return (
            <div className="addEmployeeButton">
                <button type="button" className="btn btn-primary" onClick={() => this.setState({ showPopUp: true })}><span>Add New Employee</span></button>
            </div >
        )
    }

    _addPopUp() {
        return (
            <Popup open={this.state.showPopUp} position="right center">
                {this._popUpContent()}
            </Popup>
        )
    }

    _popUpContent() {
        return (
            <div className='popUpForm'>
                <div className="closeBtn" onClick={() => this.setState({ showPopUp: false })}>
                    &times;
                </div>
                <div className='content'>
                    <div className="inputContainer">
                        <span>Id:</span><input type="text" value={this.state.id} onChange={(e) => this._onChange('id', e)}></input>
                    </div>
                    <div className="inputContainer">
                        <span>Name:</span><input type="text" value={this.state.name} onChange={(e) => this._onChange('name', e)}></input>
                    </div>

                    <div className="inputContainer">
                        <span>Age:</span><input type="text" value={this.state.age} onChange={(e) => this._onChange('age', e)}></input>
                    </div>
                    <div className="inputContainer">
                        <span>EmployeeType:</span> <input type="text" value={this.state.employeeType} onChange={(e) => this._onChange('employeeType', e)}></input>
                    </div>
                    <div className="inputContainer">
                        <span>Seniority:</span> <input type="text" value={this.state.seniority} onChange={(e) => this._onChange('seniority', e)}></input>
                    </div>
                    <div className="inputContainer">
                        <span>Wage:</span> <input type="text" value={this.state.wage} onChange={(e) => this._onChange('wage', e)}></input>
                    </div>
                </div>

                <button onClick={() => { this._submit(); }}>submit</button>
            </div>
        )
    }

    render() {
        return (
            <div className='addEmployee'>
                {this._addButton()}
                {this.state.showPopUp && this._addPopUp()}
            </div>
        );
    }
}

const mapStateToProps = () => ({
    // ...state
})

export default connect(mapStateToProps, actions)(AddEmployee);

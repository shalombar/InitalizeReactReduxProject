import React, { Component } from 'react';
import './css/style.css';
import Header from './components/Header/Header';
import AddEmployee from './components/addEmployee/AddEmployee';
import EmployeesList from './components/employeesList/EmployeesList';

class App extends Component {

  render() {
    return (
      <div className='App'>
        <Header />
        <AddEmployee />
        <EmployeesList/>
      </div>
    );
  }
}


export default (App);


import React, { Component } from 'react';
import {Table} from 'react-bootstrap';


export class Schedule extends Component {
    constructor(props){
        super(props);
        this.state={stations:[],
                    programs:[],
                    schedules:[]}
    }

    componentDidMount(){
        this.refreshList();
    }
    refreshList(){
        this.getSchedule();
    }
    getSchedule(){
         fetch('http://'+process.env.REACT_APP_API_HOST+':60601/schedule/', {
        //fetch('http://192.168.1.34:8080/schedule/', {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
                 'Accept': 'application/json'
            }
        })
        .then(response=> response.json())
        .then(data=>{
            this.setState({schedules:data});
        })
        .catch(function(error) {
            console.log("Error Found : "+error);
          }); 
    }
  render() {
    const {schedules}=this.state;
    return (
        <div className="container">
          <div className="row mt-5">
              <h2>Schedule Page</h2>
          </div>
          <Table className="mt-4" striped bordered hover size="sm">
          <thead>
              <tr> 
                  <th>Schedule Id</th>
                  <th>Day </th>
                  <th>Start Time</th>
                  <th>End Time</th>
              </tr>
          </thead>
          <tbody>
              {schedules.map(schedule=>
                  <tr key ={schedule._id}>
                  <td>{schedule.scheduleId}</td>
                  <td>{schedule.dayOfTheWeek}</td>
                  <td>{schedule.from}</td>
                  <td>{schedule.to}</td>
                  </tr>)}
          </tbody>
          </Table>
        </div>
      );
    }
  }
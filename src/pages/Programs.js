import React, { Component } from 'react';
import {Table} from 'react-bootstrap';


export class Programs extends Component {
    constructor(props){
        super(props);
        this.state={stations:[],
                    programs:[],
                    schedule:[]}
    }

    componentDidMount(){
        this.refreshList();
    }
    refreshList(){
        this.getPrograms();
    }

    getPrograms(){
         fetch('http://'+process.env.REACT_APP_API_HOST+':60601/program/', {
        //    fetch('http://192.168.1.34:8080/program/', {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
                 'Accept': 'application/json'
            }
        })
        .then(response=> response.json())
        .then(data=>{
            this.setState({programs:data});
        })
        .catch(function(error) {
            console.log("Error Found : "+error);
          }); 
    }

  render() {
    const {programs}=this.state;
    return (
        <div className="container">
          <div className="row mt-5">
              <h2>Programs Page</h2>
          </div>
          <Table className="mt-4" striped bordered hover size="sm">
          <thead>
              <tr>
                  <th>Program Title</th>
                  <th>Program Id</th>
                  <th>Hosting Station </th>
                  <th>Schedule Id</th>
              </tr>
          </thead>
          <tbody>
              {programs.map(program=>
                  <tr key ={program._id}>
                  <td>{program.programTitle}</td>
                  <td>{program.programId}</td>
                  <td>{program.hostingStationName}</td>
                  <td>{program.scheduleId}</td>
                  </tr>)}
          </tbody>
          </Table>
        </div>
      );
    }
  }

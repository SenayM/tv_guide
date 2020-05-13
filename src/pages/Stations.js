import React, { Component } from 'react';
import {Table, Button, ButtonToolbar} from 'react-bootstrap';
import { AddStationModal } from '../components/AddStationModal';
import { EditStationModal} from '../components/EditStationModal';
import { DeleteStationModal} from '../components/DeleteStationModal'

export class Stations extends Component {

    constructor(props){
        super(props);
        this.state={stations:[],
                    addModalShow:false,
                    editModalShow:false,
                    deleteModalShow: false
                }
    }

    componentDidMount(){
        this.refreshList();
    }
    // componentDidUpdate(){
    //     this.refreshList();
    // }
    refreshList(){
        this.getStation();
       // this.setState({stations:stations});
    }

   
     getStation(){
         fetch('http://'+process.env.REACT_APP_API_HOST+':60601/station/', {
         //   fetch('http://192.168.1.34:8080/station/', {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
                 'Accept': 'application/json'
            }
        })
        .then(response=> response.json())
        .then(data=>{
            this.setState({stations:data});
        })
        .catch(function(error) {
            console.log("Error Found : "+error);
          }); 
    }
    // delete_station(st_id){
    //     fetch('http://localhost:8080/station/'+st_id, {
    //         method: 'DELETE',
    //         headers:{
    //             'Content-Type': 'application/json',
    //              'Accept': 'application/json'
    //         },
    //     })
    //     .then(() => {
    //         console.log('removed');
    //         alert("Station Removed")
    //      })
    //     .catch(function(error) {
    //         console.log("Error Found : "+error);
    //       }); 
    // }

  render() {
      const {stid, stname,stlogo, st_id}=this.state;
      let addModalClose =() => this.setState({addModalShow: false})
      let editModalClose =() => this.setState({editModalShow:false})
      let deleteModalClose =() => this.setState({deleteModalShow:false})
    return (
      <div className="container">
        <div className="row mt-5">
            <h2>Stations Page</h2>
        </div>
        <Table className="mt-4" striped bordered hover size="sm">
        <thead>
            <tr>
                <th>Station Name</th>
                <th>Station Id</th>
                <th>Station Logo</th>
                <th>Options</th>
            </tr>
        </thead>
        <tbody>
            {this.state.stations.map(station=>
                <tr key ={station._id}>
                <td>{station.stationId}</td>
                <td>{station.stationName}</td>
                <td>{station.stationLogo}</td>
                <td>
                    <ButtonToolbar>
                        <Button className="mr-2" variant="info"
                        onClick= {()=> this.setState({editModalShow:true, stid : station.stationId, stname: station.stationName,stlogo: station.stationLogo, st_id:station._id})}
                        >
                            Edit
                        </Button>
                        <Button className="mr-2" variant="danger" 
                        onClick= {()=> this.setState({deleteModalShow:true, stid : station.stationId, stname: station.stationName,stlogo: station.stationLogo, st_id:station._id})}
                        >
                            Delete
                        </Button>
                    </ButtonToolbar>
                </td>
                </tr>)}
        </tbody>
        </Table>

<ButtonToolbar>
    <Button
        variant='primary'
        onClick={()=> {this.setState({addModalShow: true});
        console.log("Clicked Add Station "+this.state.addModalShow)
        }}>
        Add Station
    </Button>
</ButtonToolbar>
<AddStationModal
    show={this.state.addModalShow}
    onHide={addModalClose}
/>
<EditStationModal
    show={this.state.editModalShow}
    onHide={editModalClose}
    st_id={st_id}
    stid={stid}
    stname={stname}
    stlogo={stlogo}
/>
<DeleteStationModal
    show={this.state.deleteModalShow}
    onHide={deleteModalClose}
    st_id={st_id}
    stid={stid}
    stname={stname}
    stlogo={stlogo}
/>
      </div>
    );
  }
}
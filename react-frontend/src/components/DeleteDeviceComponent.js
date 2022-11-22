import {Form,Button} from "react-bootstrap";
import DeviceService from '../services/DeviceService';
import { useEffect, useState } from "react";

const DeleteDeviceComponent = () =>{



const [devices,setDevices]=useState([]);
const [consumerDevice,setConsumerDevice]=useState(null);

useEffect(() => {
    DeviceService.getDevices().then((res)=>{
       setDevices(
        res.data);
       console.log(res.data)

    }).catch((error)=>{
        console.log(error);
    });
  },[]);

  

  

const deleteDevice = (consumerDevice) => {

        DeviceService.deleteDevice(consumerDevice).then((res)=>{
         
  console.log(res.data);
    }).catch((error)=>{
        console.log(error);
    })

}



const handleSubmit = (e)=>{
    e.preventDefault();
    deleteDevice(consumerDevice);      
}


const handleSelect = (e) =>{
    setConsumerDevice(e.target.value==="none"? null: e.target.value);
    console.log(e.target.value);
    
}



return(


    <div>
<div>

<nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div>
                <a href=" users" className="navbar-brand">Users</a>
                <a href=" devices" className="navbar-brand">Devices</a>
                <a href=" create-user" className="navbar-brand">Create User</a>
                <a href=" delete-user" className="navbar-brand">Delete User</a>
                <a href=" create-device" className="navbar-brand">Create Device</a>
                <a href=" delete-device" className="navbar-brand">Delete Device</a>
                <a href=" update-user" className="navbar-brand">Update User</a>
                <a href=" update-device" className="navbar-brand">Update Device</a>

            </div>
        </nav>

</div>

    <div>
    <h2 className="text-center">Devices list</h2>
          

          <div className="row">
              <table className="table table-striped table-bordered">

                  <thead>
                      <tr>
                          <th>Id</th>
                          <th>Description</th>
                          <th>Address</th>
                          <th>Max Hourly Energy Consumption</th>
                          <th>Client</th>

                      </tr>
                  </thead>

                  <tbody>
                      {
                          devices.map(
                              device =>
                              <tr key={device.id_device}>
                                  <td> {device.id_device}</td>
                                  <td> {device.description}</td>
                                  <td> {device.address}</td>
                                  <td> {device.max_hourly_energy_consumption}</td>
                                  <td> {device.client_id}</td>
                                  

                              </tr>
                          )
                      }
                  </tbody>


              </table>
          </div>
    </div>

<Form onSubmit={handleSubmit}>

    <Form.Control 
    as ="select" 
    onChange={(e) =>handleSelect(e)}
    >
    <option value="none">none</option>
      {devices.map((device) => {
      return ( <option value={device.id_device}>{device.description}</option>);
      }
      )}

    </Form.Control>
        
        <Button variant="success" type="submit" block>
            Delete Device
        </Button>
    </Form>

</div>


)


}
export default DeleteDeviceComponent;
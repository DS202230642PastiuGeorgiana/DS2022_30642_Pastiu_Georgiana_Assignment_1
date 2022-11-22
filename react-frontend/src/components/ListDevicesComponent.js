import React, { useEffect, useState } from 'react';
import DeviceService from '../services/DeviceService';
const ListDevicesComponent =()=>{
    const [devices,setDevices]=useState([]);
    useEffect(() => {
        DeviceService.getDevices().then((res)=>{
           setDevices(
            res.data);
           console.log(res.data)

        }).catch((error)=>{
            console.log(error);
        });
      },[]);
      return (
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
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            devices.map(
                                device =>
                                <tr key={device.id}>
                                    <td> {device.id}</td>
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
    );
}
export default ListDevicesComponent;
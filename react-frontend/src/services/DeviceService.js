import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8080/api/device";

class DeviceService{
    getDevices(){
        return axios.get(USER_API_BASE_URL);

    }
    addDevice(device){
        

        console.log("added",device);
        return axios.post(USER_API_BASE_URL,device);
        
    }

    deleteDevice(id){
        console.log("del device",id);
        return axios.delete(USER_API_BASE_URL+"/"+id);
    }


    updateDevice(id,user){
        console.log("update",user);
        return axios.put(USER_API_BASE_URL+"/"+id,user);
    }
    getDevice(id){
        return axios.get(USER_API_BASE_URL+"/"+id);
    }

}

export default new DeviceService()
package ro.tuc.ds2020.mappers;

import ro.tuc.ds2020.dtos.DeviceDTO;
import ro.tuc.ds2020.entities.Device;

public class DeviceMapper {

    public static DeviceDTO entityToDTO(Device source){
        if (source==null) return null;

        DeviceDTO result= new DeviceDTO();

        result.setId_device(source.getDevice_id());
        result.setAddress(source.getAddress());
        result.setDescription(source.getDescription());
        result.setMax_hourly_energy_consumption(source.getMax_hourly_energy_consumption());

        result.setClient_id(source.getClient().getUser_id());
        return result;
    }
/*

    public static Device toEntity(DeviceDTO source){
        if (source==null) return null;
        Device result= new Device();

        result.setDevice_id(source.getId_device());
        result.setAddress(source.getAddress());
        result.setDescription(source.getDescription());
        result.setMax_hourly_energy_consumption(source.getMax_hourly_energy_consumption());
        return result;

    }

    public static DeviceDetailsDTO toDeviceDetailsDTO(Device source){
        if (source==null) return null;
        DeviceDetailsDTO result = new DeviceDetailsDTO();

        result.setAddress(source.getAddress());
        result.setId_device(source.getDevice_id());
        result.setDescription(source.getDescription());
        result.setMax_hourly_energy_consumption(source.getMax_hourly_energy_consumption());
        result.setClient(UserMapper.entityToDTO(source.getClient()));
        return result;
    }
    */
    
}

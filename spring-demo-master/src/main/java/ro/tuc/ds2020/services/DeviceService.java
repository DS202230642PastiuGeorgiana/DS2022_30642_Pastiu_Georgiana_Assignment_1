package ro.tuc.ds2020.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ro.tuc.ds2020.controllers.handlers.exceptions.model.ResourceNotFoundException;
import ro.tuc.ds2020.dtos.DeviceDTO;
import ro.tuc.ds2020.entities.Device;
import ro.tuc.ds2020.entities.Measurement;
import ro.tuc.ds2020.entities.User;
import ro.tuc.ds2020.mappers.DeviceMapper;
import ro.tuc.ds2020.repositories.DeviceRepository;
import ro.tuc.ds2020.repositories.UserRepository;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class DeviceService {

    private final DeviceRepository deviceRepository;
    private final UserRepository userRepository;

    @Autowired
    public DeviceService(DeviceRepository deviceRepository, UserRepository userRepository) {
        this.deviceRepository = deviceRepository;
        this.userRepository = userRepository;
    }

    public List<DeviceDTO> findDevices() {
        List<Device> deviceList = deviceRepository.findAll();
        return deviceList.stream().map(DeviceMapper::entityToDTO).collect(Collectors.toList());
    }

    public DeviceDTO findDeviceById(UUID id) {//aici era DetailsDTO inainte
        Optional<Device> prosumerOptional = deviceRepository.findById(id);
        if (!prosumerOptional.isPresent()) {

            throw new ResourceNotFoundException(Device.class.getSimpleName() + " with id " + id);
        }



        return DeviceMapper.entityToDTO(prosumerOptional.get());
    }

    public UUID insert(DeviceDTO deviceDTO) {
        User user=userRepository.findById(deviceDTO.getClient_id()) .orElseThrow(()->{return new ResourceNotFoundException("User");});

        //Set<Measurement> measurements=new HashSet<>();
        Device device=Device.builder()
                .address(deviceDTO.getAddress())
                .description(deviceDTO.getDescription())
                .max_hourly_energy_consumption(deviceDTO.getMax_hourly_energy_consumption())
                .client(user)
                //.measurements(measurements)
                .build()
                ;
        deviceRepository.save(device);
        return device.getDevice_id();
    }

    public UUID deleteById(UUID id) {
        deviceRepository.deleteById(id);
        return id;
    }

    public UUID updateById(UUID id, DeviceDTO deviceDTO) {
        Device device = deviceRepository.findById(id).get();
        device.setDescription(deviceDTO.getDescription());
        device.setAddress(deviceDTO.getAddress());
        device.setMax_hourly_energy_consumption(deviceDTO.getMax_hourly_energy_consumption());
        User client = userRepository.findById(device.getClient().getUser_id()).get();
        device.setClient(client);
        deviceRepository.save(device);
        return device.getDevice_id();
    }
}

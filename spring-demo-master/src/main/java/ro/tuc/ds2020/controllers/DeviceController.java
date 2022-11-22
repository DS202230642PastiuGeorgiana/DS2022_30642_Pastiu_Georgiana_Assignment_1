package ro.tuc.ds2020.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ro.tuc.ds2020.dtos.DeviceDTO;
import ro.tuc.ds2020.dtos.UserDTO;
import ro.tuc.ds2020.services.DeviceService;
import ro.tuc.ds2020.services.UserService;

import javax.validation.Valid;
import java.util.List;
import java.util.UUID;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;

@RestController
@CrossOrigin
@RequestMapping(value = "/api/device")
public class DeviceController {

    private final DeviceService deviceService;
    private final UserService userService;

    @Autowired
    public DeviceController(DeviceService deviceService, UserService userService) {
        this.deviceService = deviceService;
        this.userService = userService;
    }

    //rest api get all devices
    @GetMapping
    public ResponseEntity<List<DeviceDTO>> getDevice(){
        List<DeviceDTO> dtos = deviceService.findDevices();
        return new ResponseEntity<>(dtos, HttpStatus.OK);
    }

    //rest api insert device
    @PostMapping
    public ResponseEntity<UUID> insertDevice(@Valid @RequestBody DeviceDTO deviceDTO){

        UUID deviceID = deviceService.insert(deviceDTO);
        return new ResponseEntity<>(deviceID, HttpStatus.CREATED);
    }




    //rest api find device by id
    @GetMapping(value = "/{id}")
    public ResponseEntity<DeviceDTO> getDevice(@PathVariable("id") UUID deviceId){
        DeviceDTO dto = deviceService.findDeviceById(deviceId);//DetailsDTO inainte
        return new ResponseEntity<>(dto, HttpStatus.OK);
    }

    //rest api delete device by id
    @DeleteMapping("/{id}")
    public ResponseEntity<UUID> deleteDevice(@PathVariable("id") UUID deviceID) {
        return ResponseEntity.status(HttpStatus.OK).body(deviceService.deleteById(deviceID));
    }

    //rest api update device by id
    @PutMapping("/{id}")
    public ResponseEntity<UUID> updateDevice(@PathVariable("id") UUID id, @Valid @RequestBody DeviceDTO deviceDTO) {
        return ResponseEntity.status(HttpStatus.OK).body(deviceService.updateById(id, deviceDTO));
    }

   /* @GetMapping(path="/consumer")
    public ResponseEntity<List<UserDTO>> getAvailableConsumers(){
        List<UserDTO> consumers = userService.getConsumers();
        return ResponseEntity.ok(consumers);
    }*/
}

package ro.tuc.ds2020.services;

import org.springframework.stereotype.Service;

@Service
public class MeasurementService {
 /*   private final MeasurementRepository measurementRepository;
    private final DeviceRepository deviceRepository;
    private final UserRepository userRepository;

    @Autowired
    public MeasurementService(MeasurementRepository measurementRepository, DeviceRepository deviceRepository,  UserRepository userRepository) {
        this.measurementRepository = measurementRepository;
        this.deviceRepository = deviceRepository;
        this.userRepository = userRepository;
    }

    public List<MeasurementDTO> findMeasurements(){
        List<Measurement> measurementList = measurementRepository.findAll();
        return Collections.emptyList();// measurementList.stream().map(); //
    }

    public MeasurementDetailsDTO findMeasurementById(UUID id){
        Optional<Measurement> prosumerOptional = measurementRepository.findById(id);
        if(!prosumerOptional.isPresent()){
            throw new ResourceNotFoundException(Measurement.class.getSimpleName() + " with id: " + id);
        }
        return new MeasurementDetailsDTO(); //MeasurementBuilder.measurementDetailsDTO(prosumerOptional.get());
    }

    public UUID insert(MeasurementDTO measurementDTO){
        Device device = deviceRepository.findById(measurementDTO.getDeviceDTO().getId_device()).get();
        User client = userRepository.findById(device.getClient().getUser_id()).get();
        measurementDTO.setDeviceDTO(DeviceMapper.entityToDTO(device));
        Measurement measurement = new Measurement(); //MeasurementBuilder.toEntity(measurementDTO);
        device.setClient(client);
        measurement.setDevice(device);
        measurement = measurementRepository.save(measurement);
        return measurement.getMeasurement_id();
    }

    public UUID deleteById(UUID id) {
        measurementRepository.deleteById(id);
        return id;
    }

    public UUID updateById(UUID id, MeasurementDTO measurementDTO) {
        Measurement measurement = measurementRepository.findById(id).get();
        measurement.setEnergyConsumption(measurementDTO.getEnergyConsumption());
        measurement.setTime(measurementDTO.getTime());
        Device device = deviceRepository.findById(measurement.getDevice().getDevice_id()).get();
        measurement.setDevice(device);
        measurementRepository.save(measurement);
        return measurement.getMeasurement_id();

    }*/
}

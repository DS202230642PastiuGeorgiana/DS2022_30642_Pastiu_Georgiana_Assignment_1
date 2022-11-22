package ro.tuc.ds2020.controllers;

import org.springframework.web.bind.annotation.*;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;

@RestController
@CrossOrigin
@RequestMapping(value = "/api/measurement")
public class MeasurementController {
/*
    private final MeasurementService measurementService;

    @Autowired
    public MeasurementController(MeasurementService measurementService) {
        this.measurementService = measurementService;
    }

    @GetMapping
    public ResponseEntity<List<MeasurementDTO>> getMeasurement(){
        List<MeasurementDTO> dtos = measurementService.findMeasurements();
        for(MeasurementDTO dto : dtos){
            Link sensorLink = linkTo(methodOn(MeasurementController.class).getMeasurement(dto.getMeasurement_id())).withRel("sensorDetails");
            dto.add(sensorLink);
        }
        return new ResponseEntity<>(dtos, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<UUID> insertMeasurement(@Valid @RequestBody MeasurementDTO measurementDTO){
        UUID sensorID = measurementService.insert(measurementDTO);
        return new ResponseEntity<>(sensorID, HttpStatus.CREATED);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<MeasurementDetailsDTO> getMeasurement(@PathVariable("id") UUID sensorID){
        MeasurementDetailsDTO dto = measurementService.findMeasurementById(sensorID);
        return new ResponseEntity<>(dto, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<UUID> deleteMeasurement(@PathVariable("id") UUID sensorID) {
        return ResponseEntity.status(HttpStatus.OK).body(measurementService.deleteById(sensorID));
    }

    @PutMapping("/{id}")
    public ResponseEntity<UUID> updateMeasurement(@PathVariable("id") UUID id, @Valid @RequestBody MeasurementDTO measurementDTO) {
        return ResponseEntity.status(HttpStatus.OK).body(measurementService.updateById(id, measurementDTO));
    }*/
}

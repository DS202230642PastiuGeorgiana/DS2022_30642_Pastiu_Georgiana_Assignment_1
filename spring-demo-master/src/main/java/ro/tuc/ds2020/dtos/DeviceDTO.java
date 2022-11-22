package ro.tuc.ds2020.dtos;

import lombok.*;
import org.springframework.hateoas.RepresentationModel;

import javax.annotation.security.DenyAll;
import javax.validation.constraints.NotNull;
import java.util.Objects;
import java.util.UUID;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class DeviceDTO  {

    private UUID id_device;
    @NotNull
    private String description;
    @NotNull
    private String address;
    @NotNull
    private Double max_hourly_energy_consumption;
    @NotNull
    private UUID client_id; //

}

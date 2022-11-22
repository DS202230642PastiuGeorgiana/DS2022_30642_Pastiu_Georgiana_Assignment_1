package ro.tuc.ds2020.entities;

import lombok.*;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.io.Serializable;

import java.time.LocalDate;
import java.util.UUID;

@Getter
@Setter
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Measurement implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @Type(type = "uuid-char")
    private UUID measurement_id;

    @Column(name ="time",nullable = false)
    private LocalDate time;

    @Column(nullable = false,name ="energyConsumption")
    private Double energyConsumption;

    @JoinColumn(name="device_id")
    @ManyToOne(fetch=FetchType.LAZY,optional = false)
    private Device device;

}

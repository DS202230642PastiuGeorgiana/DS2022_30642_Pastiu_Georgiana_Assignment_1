package ro.tuc.ds2020.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ro.tuc.ds2020.entities.User;

import java.util.UUID;

@Repository

public interface UserRepository extends JpaRepository<User, UUID> {
}

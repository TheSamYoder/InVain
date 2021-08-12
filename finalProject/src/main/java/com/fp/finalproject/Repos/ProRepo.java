package com.fp.finalproject.Repos;

import java.util.Optional;

import com.fp.finalproject.POJO.Professional;
import org.springframework.data.repository.CrudRepository;

public interface ProRepo extends CrudRepository<Professional, Long> {
}

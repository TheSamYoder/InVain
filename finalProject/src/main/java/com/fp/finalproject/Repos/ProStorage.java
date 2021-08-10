package com.fp.finalproject.Repos;

import com.fp.finalproject.POJO.Professional;
import org.springframework.stereotype.Service;

@Service
public class ProStorage {

    private ProRepo proRepo;

    public ProStorage(ProRepo proRepo) {
        this.proRepo = proRepo;
    }

    public Iterable<Professional> retrieveAllPros(){
        return proRepo.findAll();
    }

    public Professional retrieveProById(Long id){
        return proRepo.findById(id).get();
    }

    public void savePro(Professional proToAdd){
        proRepo.save(proToAdd);
    }

    public void  deleteProById(Long id){
        proRepo.deleteById(id);
    }
}

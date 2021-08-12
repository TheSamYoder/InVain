package com.fp.finalproject.Repos;

import java.util.ArrayList;
import java.util.Collection;

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

    public void deleteProById(Long id){
        proRepo.deleteById(id);
    }

    public Collection<Professional> findProsBySpecialty(String specialty){
        ArrayList<Professional> prosBySpecialty = new ArrayList<>();
        for(Professional pro : retrieveAllPros()){
            if(pro.getSpecialty().equalsIgnoreCase(specialty)){
                prosBySpecialty.add(pro);
            } 
        }
        return prosBySpecialty;
    }

}

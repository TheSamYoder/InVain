package com.fp.finalproject.Repos;

import com.fp.finalproject.POJO.Serve;
import org.springframework.stereotype.Service;

@Service
public class ServeStorage {

    private ServeRepo serveRepo;

    public ServeStorage(ServeRepo serveRepo){
        this.serveRepo = serveRepo;
    }

    public void saveServe(Serve serveToSave){
        serveRepo.save(serveToSave);
    }

    public Serve retrieveServeById(Long id){
        return serveRepo.findById(id).get();
    }

    public Iterable<Serve> retrieveAllServe(){
        return serveRepo.findAll();
    }

}

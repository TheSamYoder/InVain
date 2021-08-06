package com.fp.finalproject.Controller;

import com.fp.finalproject.POJO.Professional;
import com.fp.finalproject.Repos.ProStorage;
import com.fp.finalproject.Repos.ServeStorage;
import org.springframework.web.bind.annotation.*;

@RestController
public class ProController {
    private ProStorage proStorage;
    private ServeStorage serveStorage;

    public ProController(ProStorage proStorage, ServeStorage serveStorage){
        this.proStorage = proStorage;
        this.serveStorage= serveStorage;
    }
    @GetMapping("/api/professional")
    public Iterable<Professional> retrieveAllPros(){
        return proStorage.retrieveAllPros();
    }

    @GetMapping("/api/professional/{id}")
    public Professional retrieveProById(@PathVariable Long id){
        return proStorage.retrieveProById(id);
    }

    @DeleteMapping("/api/professional/{id}")
    public Iterable<Professional> deleteProById(@PathVariable Long id){
        proStorage.deleteProById(id);
        return proStorage.retrieveAllPros();
    }

    @PostMapping("/api/professional")
    public Iterable<Professional> addNewPro(@RequestBody Professional proToAdd){
        proStorage.savePro(proToAdd);
        return proStorage.retrieveAllPros();
    }

    @PutMapping("/api/professional/{id}")
    public Professional modifyPro(@PathVariable Long id, @RequestBody Professional proToModify) {
        Professional proToChange = proStorage.retrieveProById(id);
        proToChange.updateProName(proToModify.getName());
        proToChange.updateProDescription(proToModify.getDescription());
        proToChange.updateProLocation(proToModify.getLocation());
        proToChange.updateProOnline(proToModify.getOnline());
        proToChange.updateProPhoneNumber(proToModify.getPhoneNumber());
        proToChange.updateProDaysOfOperation(proToModify.getDaysOfOperation());
        proToChange.updateProPayment(proToModify.getPayment());
        return proToChange;
    }

    @PatchMapping("/api/professional/{id}/reviews")
    public Professional addReviewToPro(@PathVariable Long id, @RequestBody String reviewToAdd){
        Professional proToChange = proStorage.retrieveProById(id);
        proToChange.addReview(reviewToAdd);
        proStorage.savePro(proToChange);
        return proToChange;
    }





}

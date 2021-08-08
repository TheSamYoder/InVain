package com.fp.finalproject.Controller;

import com.fp.finalproject.POJO.Professional;
import com.fp.finalproject.POJO.Serve;
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

    @GetMapping("/api/professionals")
    public Iterable<Professional> retrieveAllPros(){
        return proStorage.retrieveAllPros();
    }

    @GetMapping("/api/professionals/{id}")
    public Professional retrieveProById(@PathVariable Long id){
        return proStorage.retrieveProById(id);
    }

    @DeleteMapping("/api/professionals/{id}")
    public Iterable<Professional> deleteProById(@PathVariable Long id){
        proStorage.deleteProById(id);
        return proStorage.retrieveAllPros();
    }

    @PostMapping("/api/professionals")
    public Iterable<Professional> addNewPro(@RequestBody Professional proToAdd){
        proStorage.savePro(proToAdd);
        return proStorage.retrieveAllPros();
    }

    @PutMapping("/api/professionals/{id}")
    public Professional modifyPro(@PathVariable Long id, @RequestBody Professional proToModify) {
        Professional proToChange = proStorage.retrieveProById(id);
        proToChange.updateProName(proToModify.getName());
        proToChange.updateProDescription(proToModify.getDescription());
        proToChange.updateProLocation(proToModify.getLocation());
        proToChange.updateProOnline(proToModify.isOnline());
        proToChange.updateProPhoneNumber(proToModify.getPhoneNumber());
        proToChange.updateProDaysOfOperation(proToModify.getDaysOfOperation());
        proToChange.updateProPayment(proToModify.getPayment());
        return proToChange;
    }

    //Needs fixed
    @PutMapping("/api/professionals/{id}/rating")
    public Professional changeRating(@PathVariable Long id, @RequestBody Double ratingToChange){
        Professional proToChange = proStorage.retrieveProById(id);
        proToChange.updateRatingProperties(ratingToChange);
        proStorage.savePro(proToChange);
        return proToChange;
    }

    @PatchMapping("/api/professionals/{id}/reviews")
    public Professional addReviewToPro(@PathVariable Long id, @RequestBody String reviewToAdd){
        Professional proToChange = proStorage.retrieveProById(id);
        proToChange.addReview(reviewToAdd);
        proStorage.savePro(proToChange);
        return proToChange;
    }

    @PatchMapping("/api/professionals/{id}/photos")
    public Professional addPhotoToPro(@PathVariable Long id, @RequestBody String photoToAdd){
        Professional proToChange = proStorage.retrieveProById(id);
        proToChange.addPhoto(photoToAdd);
        proStorage.savePro(proToChange);
        return proToChange;
    }

    @PatchMapping("/api/professionals/{id}/serves")
    public Professional addServeToPro (@PathVariable Long id, @RequestBody Serve serveToAdd){
        Professional proToChange = proStorage.retrieveProById(id);
        proToChange.addServe(serveToAdd);
        serveStorage.saveServe(serveToAdd);
        proStorage.savePro(proToChange);
        return proToChange;
    }

}

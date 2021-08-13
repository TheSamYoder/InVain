package com.fp.finalproject.Controller;

import java.util.ArrayList;
import java.util.Optional;

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

    @GetMapping("/api/professionals/specialties/{specialty}")
    public Iterable<Professional> retrieveProBySpecialty(@PathVariable String specialty) {
        return proStorage.findProsBySpecialty(specialty);
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
        proToChange.updateProTakesCash(proToModify.isTakesCash());
        proToChange.updateProTakesCashApp(proToModify.isTakesCashApp());
        proToChange.updateProTakesCredit(proToModify.isTakesCredit());
        return proToChange;
    }
    
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


    @GetMapping("/api/professionals/{id}/serves")
    public Iterable<Serve> retrieveServesByPro(@PathVariable Long id){
        Professional proToChange = proStorage.retrieveProById(id);
        return proToChange.getServes();
    }

    @GetMapping("/api/professionals/{proId}/serves/{serveId}")
        public Serve retrieveServeById(@PathVariable Long proId, @PathVariable Long serveId){
        Serve serveToChange = serveStorage.retrieveServeById(serveId);
        return serveToChange;
    }


    @PostMapping("/api/professionals/{id}/serves")
    public Professional addServeToPro (@PathVariable Long id, @RequestBody Serve serveToAdd){
        Professional proToChange = proStorage.retrieveProById(id);
        serveToAdd.assignPro(proToChange);
        serveStorage.saveServe(serveToAdd);
        proToChange.addServe(serveToAdd);
        proStorage.savePro(proToChange);
        return proToChange;
    }

    @DeleteMapping("/api/professionals/{proId}/serves/{serveId}")
    public Professional deleteServeFromPro(@PathVariable Long proId, @PathVariable Long serveId){
        Professional proToChange = proStorage.retrieveProById(proId);
        Serve serveToRemove = serveStorage.retrieveServeById(serveId);
        proToChange.removeServe(serveToRemove);
        serveStorage.deleteServeById(serveId);
        proStorage.savePro(proToChange);
        return proToChange;
    }
}

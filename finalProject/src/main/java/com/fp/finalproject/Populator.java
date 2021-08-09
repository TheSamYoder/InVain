package com.fp.finalproject;

import com.fp.finalproject.POJO.Professional;
import com.fp.finalproject.POJO.Serve;
import com.fp.finalproject.Repos.ProStorage;
import com.fp.finalproject.Repos.ServeStorage;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class Populator implements CommandLineRunner {

    private ProStorage proStorage;
    private ServeStorage serveStorage;

    public Populator(ProStorage proStorage, ServeStorage serveStorage){
        this.proStorage = proStorage;
        this.serveStorage = serveStorage;
    }

    @Override public void run(String...args) throws Exception{


        Professional christian = new Professional("Christian","Cool dude!", 5.2, "Filler", true, "Barber", "123456789", "cash", "Weekdays");
        christian.addReview("He's Great at hair cut!");
        christian.addReview("My beard looks great!");
        christian.addPhoto("https://bit.ly/3lJqS99");
        christian.addPhoto("https://bit.ly/3Cx4dm8");

        Professional bri = new Professional("Bri", "Good stylist", 5.3, "Filler", true, "Stylist", "1234566643", "cash", "Weekdays");
        bri.addReview("Great style!");

        Professional heather = new Professional("Heather", "Really great tattoos", 5.6, "Filler", true, "Tattoo Artist", "1234836262", "cash", "Weekdays");
        heather.addReview("She is a great artist!");
        heather.addReview("My tattoo is looking great!");
        heather.addPhoto("https://www.savedtattoo.com/wp-content/uploads/2021/04/BEST-TATTOO-ARTISTS-IN-BAY-AREA.jpg");


        proStorage.savePro(christian);
        proStorage.savePro(bri);
        proStorage.savePro(heather);

        Serve cutHair = new Serve(christian,"Hair-cut", "Standard Hair-Cut", "$");
        Serve beardTrim = new Serve(christian,"Beard-Trim","Standard Beard-trim","$");
        Serve twoToneTattoo = new Serve(bri,"Black and White Tattoo", "Black and white tattoo", "$$$$");
        Serve colorTattoo = new Serve(bri,"Colored Tattoo", "Colored Tattoo", "$$$$");
        Serve hairStyle = new Serve(heather,"Hair-Style", "Hair-styling", "$");

        serveStorage.saveServe(cutHair);
        serveStorage.saveServe(beardTrim);
        serveStorage.saveServe(twoToneTattoo);
        serveStorage.saveServe(colorTattoo);
        serveStorage.saveServe(hairStyle);
    }

}

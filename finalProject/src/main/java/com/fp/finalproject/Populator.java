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

        Serve razorShave = new Serve("Razor-Shave", "Clean razor shave.", 9.99);
        serveStorage.saveService(razorShave);
        christian.addReview("Baby smooth.");
        christian.addPhoto("https://st2.depositphotos.com/3261171/7015/i/950/depositphotos_70152053-stock-photo-client-shaving-at-barber-shop.jpg");
        proStorage.savePro(christian);

        Serve twoToneTattoo = new Serve("Black and White Tattoo", "Black and white tattoo", 75.00);
        serveStorage.saveService(twoToneTattoo);
        Professional heather = new Professional("Heather", "Really great tattoos", 5, "Filler", true, "1234836262", "cash", "Weekdays");
        heather.addReview("She is a great artist!");
        heather.addReview("My tattoo is looking great!");
        heather.addPhoto("https://www.savedtattoo.com/wp-content/uploads/2021/04/BEST-TATTOO-ARTISTS-IN-BAY-AREA.jpg");

        Serve colorTattoo = new Serve("Colored Tattoo", "Colored Tattoo", 80.00);
        serveStorage.saveService(colorTattoo);
        heather.addReview("My tattoo is looking great!");
        heather.addPhoto("https://www.tattoosfolder.com/wp-content/uploads/2020/07/1-elephant-and-lotus-tattoo-on-dark-skin.jpg?x50638");
        proStorage.savePro(heather);

        Serve hairStyle = new Serve("Hair-Style", "Hair-styling", 20.00);
        serveStorage.saveService(hairStyle);
        Professional bri = new Professional("Bri", "Good stylist", 5, "Filler", true, "1234566643", "cash", "Weekdays");
        bri.addReview("Great style!");
        bri.addPhoto("https://www.toptrendsguide.com/wp-content/uploads/2020/03/Long-Hairstyles-For-Women.jpg");
        proStorage.savePro(bri);
        proStorage.savePro(heather);

        Serve hairColor = new Serve("Color Hair", "We offer a variety of color options.", 50.00);
        serveStorage.saveService(hairColor);
        bri.addReview("My no more roots!");
        bri.addPhoto("https://phiasalon.com/wp-content/themes/phia-salon-custom-theme/assets/img/home-page--color-v2.jpg");
        proStorage.savePro(bri);

        Serve hairHighlight = new Serve("Hair-Highlight", "Trendy and stylish, highlights are a great option for spicing up you look!.", 50.00);
        serveStorage.saveService(hairHighlight);
        bri.addReview("My hair is really light!");
        bri.addPhoto("https://phiasalon.com/wp-content/themes/phia-salon-custom-theme/assets/img/services-page--highlights-v2.jpg");
        proStorage.savePro(bri);

        Serve gelNails = new Serve("Gel nails", "I have gel nails now!", 30.00);
        serveStorage.saveService(gelNails);
        Professional mandy = new Professional("Mandy", "Good nails", 5, "Filler", true, "32487641314", "cash", "Weekdays");
        mandy.addReview("She did my nails!");
        mandy.addPhoto("https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/download-3-1585685825.jpeg?crop=1.00xw:0.502xh;0,0.329xh&resize=1200:*");
        proStorage.savePro(mandy);

        Serve acrylicNails = new Serve("Acrylic Nails", "My nails are acrylic!", 30.00);
        serveStorage.saveService(acrylicNails);
        mandy.addReview("My nails look amazing!");
        mandy.addPhoto("https://www.womansworld.com/wp-content/uploads/2018/12/acrylic-nails-1.jpg");
        proStorage.savePro(mandy);


    }

}

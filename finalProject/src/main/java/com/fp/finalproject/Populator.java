package com.fp.finalproject;

import com.fp.finalproject.POJO.Professional;
import com.fp.finalproject.POJO.Serve;
import com.fp.finalproject.Repos.ProStorage;
import com.fp.finalproject.Repos.ServeRepo;
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
        Serve cutHair = new Serve("Hair-cut", "Standard Hair-Cut", 9.99);
        serveStorage.saveService(cutHair);
        Professional christian = new Professional("Christian","Cool dude!", 5, "Filler", true, "123456789", "cash", "Weekdays");
        christian.addReview("He's Great at hair cut!");
        christian.addPhoto("https://scontent.fcmh1-1.fna.fbcdn.net/v/t1.6435-9/212534922_5825309820843809_1839992674517398186_n.jpg?_nc_cat=103&ccb=1-4&_nc_sid=730e14&_nc_ohc=5TqC-cGmO0QAX-u0gHz&_nc_oc=AQlIpuBU94XKc6xJKMtTF579tXmObGuISM82ZMVwvE4RM_4itCZNdOpfVRsATCeknIo&tn=WIGr1hVuDmCaGKYv&_nc_ht=scontent.fcmh1-1.fna&oh=50770e8d60fe8f7a28ef2597b5635575&oe=6133C7B1");
        proStorage.savePro(christian);

        Serve beardTrim = new Serve("Beard-Trim","Standard Beard-trim",5.00);
        serveStorage.saveService(beardTrim);
        christian.addReview("My beard looks great!");
        christian.addPhoto("https://scontent.fcmh1-1.fna.fbcdn.net/v/t39.30808-6/214859654_5847284395313018_6272224978439311304_n.jpg?_nc_cat=101&ccb=1-4&_nc_sid=730e14&_nc_ohc=fVPxdJ59IAMAX9c_5T9&_nc_ht=scontent.fcmh1-1.fna&oh=825d1f8c18291caaf4aea59e9ae05dd2&oe=6115954D");
        proStorage.savePro(christian);

        Serve razorShave = new Serve("Razor-Shave", "Clean razor shave.", 9.99);
        serveStorage.saveService(razorShave);
        christian.addReview("Baby smooth.");
        christian.addPhoto("https://st2.depositphotos.com/3261171/7015/i/950/depositphotos_70152053-stock-photo-client-shaving-at-barber-shop.jpg");
        proStorage.savePro(christian);

        Serve twoToneTattoo = new Serve("Black and White Tattoo", "Black and white tattoo", 75.00);
        serveStorage.saveService(twoToneTattoo);
        Professional heather = new Professional("Heather", "Really great tattoos", 5, "Filler", true, "1234836262", "cash", "Weekdays");
        heather.addReview("She is a great artist!");
        heather.addPhoto("https://www.savedtattoo.com/wp-content/uploads/2021/04/BEST-TATTOO-ARTISTS-IN-BAY-AREA.jpg");
        proStorage.savePro(heather);

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

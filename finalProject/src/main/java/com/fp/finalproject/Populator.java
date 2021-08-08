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
        Serve cutHair = new Serve("Hair-cut", "Standard Hair-Cut", 9.99);
        Serve beardTrim = new Serve("Beard-Trim","Standard Beard-trim",5.00);
        Serve twoToneTattoo = new Serve("Black and White Tattoo", "Black and white tattoo", 75.00);
        Serve colorTattoo = new Serve("Colored Tattoo", "Colored Tattoo", 80.00);
        Serve hairStyle = new Serve("Hair-Style", "Hair-styling", 20.00);

        serveStorage.saveServe(cutHair);
        serveStorage.saveServe(beardTrim);
        serveStorage.saveServe(twoToneTattoo);
        serveStorage.saveServe(colorTattoo);
        serveStorage.saveServe(hairStyle);

        Professional christian = new Professional("Christian","Cool dude!", 5, "Filler", true, "Barber", "123456789", "cash", "Weekdays");
        christian.addReview("He's Great at hair cut!");
        christian.addReview("My beard looks great!");
        christian.addPhoto("https://scontent.fcmh1-1.fna.fbcdn.net/v/t39.30808-6/214859654_5847284395313018_6272224978439311304_n.jpg?_nc_cat=101&ccb=1-4&_nc_sid=730e14&_nc_ohc=fVPxdJ59IAMAX9c_5T9&_nc_ht=scontent.fcmh1-1.fna&oh=825d1f8c18291caaf4aea59e9ae05dd2&oe=6115954D");
        christian.addPhoto("https://scontent.fcmh1-1.fna.fbcdn.net/v/t1.6435-9/212534922_5825309820843809_1839992674517398186_n.jpg?_nc_cat=103&ccb=1-4&_nc_sid=730e14&_nc_ohc=5TqC-cGmO0QAX-u0gHz&_nc_oc=AQlIpuBU94XKc6xJKMtTF579tXmObGuISM82ZMVwvE4RM_4itCZNdOpfVRsATCeknIo&tn=WIGr1hVuDmCaGKYv&_nc_ht=scontent.fcmh1-1.fna&oh=50770e8d60fe8f7a28ef2597b5635575&oe=6133C7B1");

        Professional bri = new Professional("Bri", "Good stylist", 5, "Filler", true, "Stylist", "1234566643", "cash", "Weekdays");
        bri.addReview("Great style!");

        Professional heather = new Professional("Heather", "Really great tattoos", 5, "Filler", true, "Tattoo Artist", "1234836262", "cash", "Weekdays");
        heather.addReview("She is a great artist!");
        heather.addReview("My tattoo is looking great!");
        heather.addPhoto("https://www.savedtattoo.com/wp-content/uploads/2021/04/BEST-TATTOO-ARTISTS-IN-BAY-AREA.jpg");


        proStorage.savePro(christian);
        proStorage.savePro(bri);
        proStorage.savePro(heather);
    }

}

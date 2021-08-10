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
        Serve cutHair = new Serve("Hair-cut", "Standard Hair-Cut", "$");
        serveStorage.saveService(cutHair);
        Serve beardTrim = new Serve("Beard-Trim","Standard Beard-trim","$");
        serveStorage.saveService(beardTrim);
        Serve razorShave = new Serve("Razor-Shave", "Clean razor shave.", "$");
        serveStorage.saveService(razorShave);
        Serve twoToneTattoo = new Serve("Black and White Tattoo", "Black and white tattoo", "$$$");
        serveStorage.saveService(twoToneTattoo);
        Serve colorTattoo = new Serve("Colored Tattoo", "Colored Tattoo", "$$$");
        serveStorage.saveService(colorTattoo);
        Serve acrylicNails = new Serve("Acrylic Nails", "My nails are acrylic!", "$$");
        serveStorage.saveService(acrylicNails);
        Serve gelNails = new Serve("Gel nails", "I have gel nails now!", "$$");
        serveStorage.saveService(gelNails);
        Serve hairHighlight = new Serve("Hair-Highlight", "Trendy and stylish, highlights are a great option for spicing up you look!.", "$$");
        serveStorage.saveService(hairHighlight);
        Serve hairColor = new Serve("Color Hair", "We offer a variety of color options.", "$$");
        serveStorage.saveService(hairColor);
        Serve hairStyle = new Serve("Hair-Style", "Hair-styling", "$$");
        serveStorage.saveService(hairStyle);


//      Christian
        Professional christian = new Professional("Christian","Cool dude!", 5, "Filler", true, "123456789", "cash", "Weekdays", cutHair, beardTrim, razorShave);
        christian.addReview("He's Great at hair cut!");
        christian.addPhoto("https://scontent.fcmh1-1.fna.fbcdn.net/v/t1.6435-9/212534922_5825309820843809_1839992674517398186_n.jpg?_nc_cat=103&ccb=1-4&_nc_sid=730e14&_nc_ohc=5TqC-cGmO0QAX-u0gHz&_nc_oc=AQlIpuBU94XKc6xJKMtTF579tXmObGuISM82ZMVwvE4RM_4itCZNdOpfVRsATCeknIo&tn=WIGr1hVuDmCaGKYv&_nc_ht=scontent.fcmh1-1.fna&oh=50770e8d60fe8f7a28ef2597b5635575&oe=6133C7B1");
        christian.addReview("My beard looks great!");
        christian.addPhoto("https://scontent.fcmh1-1.fna.fbcdn.net/v/t39.30808-6/214859654_5847284395313018_6272224978439311304_n.jpg?_nc_cat=101&ccb=1-4&_nc_sid=730e14&_nc_ohc=fVPxdJ59IAMAX9c_5T9&_nc_ht=scontent.fcmh1-1.fna&oh=825d1f8c18291caaf4aea59e9ae05dd2&oe=6115954D");
        christian.addReview("Baby smooth.");
        christian.addPhoto("https://st2.depositphotos.com/3261171/7015/i/950/depositphotos_70152053-stock-photo-client-shaving-at-barber-shop.jpg");
        proStorage.savePro(christian);

//      Heather
        Professional heather = new Professional("Heather", "Really great tattoos", 5, "Filler", true, "1234836262", "cash", "Weekdays", twoToneTattoo, colorTattoo);
        heather.addReview("She is a great artist!");
        heather.addPhoto("https://scontent.fcmh1-1.fna.fbcdn.net/v/t1.6435-9/55498138_10157122952957603_7267199598156840960_n.jpg?_nc_cat=108&ccb=1-4&_nc_sid=730e14&_nc_ohc=aDe2oYYUqqAAX9AtTFE&_nc_ht=scontent.fcmh1-1.fna&oh=ca468e7d028dc55d214924ec925ef3d1&oe=6137E6B0");
        heather.addReview("My tattoo is looking great!");
        heather.addPhoto("https://scontent.fcmh1-1.fna.fbcdn.net/v/t1.6435-9/172997863_10159362318502603_6220972233347603671_n.jpg?_nc_cat=103&ccb=1-4&_nc_sid=730e14&_nc_ohc=u3rwL_wxBD4AX9arOUL&tn=WIGr1hVuDmCaGKYv&_nc_ht=scontent.fcmh1-1.fna&oh=ce7d068a38f58b7228adf8726ac198dc&oe=6136D97F");
        proStorage.savePro(heather);

//      Bri
        Professional bri = new Professional("Bri", "Good stylist", 5, "Filler", true, "1234566643", "cash", "Weekdays", hairStyle, hairHighlight, hairColor);
        bri.addReview("Great style!");
        bri.addPhoto("https://www.toptrendsguide.com/wp-content/uploads/2020/03/Long-Hairstyles-For-Women.jpg");
        bri.addReview("My no more roots!");
        bri.addPhoto("https://phiasalon.com/wp-content/themes/phia-salon-custom-theme/assets/img/home-page--color-v2.jpg");
        bri.addReview("My hair is really light!");
        bri.addPhoto("https://phiasalon.com/wp-content/themes/phia-salon-custom-theme/assets/img/services-page--highlights-v2.jpg");
        proStorage.savePro(bri);

//      Mandy
        Professional mandy = new Professional("Mandy", "Good nails", 5, "Filler", true, "32487641314", "cash", "Weekdays", gelNails, acrylicNails);
        mandy.addReview("She did my nails!");
        mandy.addPhoto("https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/download-3-1585685825.jpeg?crop=1.00xw:0.502xh;0,0.329xh&resize=1200:*");
        mandy.addReview("My nails look amazing!");
        mandy.addPhoto("https://www.womansworld.com/wp-content/uploads/2018/12/acrylic-nails-1.jpg");
        proStorage.savePro(mandy);

//      Eli
        Professional eli = new Professional("Eli", "Great hair cuts!", 5, "Filler", true, "1112223333", "cash", "Weekdays", cutHair, beardTrim, razorShave);
        eli.addReview("He is a great dude and I love his hair cuts!");
        eli.addPhoto("https://images.unsplash.com/photo-1593702275687-f8b402bf1fb5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80");
        eli.addReview("My beard looks great everytime Eli cuts me up!");
        eli.addPhoto("https://www.humanhairexim.com/wp-content/uploads/2021/04/male-hair-cuts-001.jpg");
        proStorage.savePro(eli);



    }

}

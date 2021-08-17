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

        Professional christian = new Professional("Christian Rivea","Cool dude!", 5.3, 10,
                "Good Life Barber Shop", true, "Barber","https://bit.ly/3iLxgLb","123456789",
                true,true,true, true, false);
        christian.addReview("He's Great at hair cut!");
        christian.addReview("Baby smooth.");
        christian.addReview("My beard looks great!");
        christian.addPhoto("https://bit.ly/3siGu4N");
        christian.addPhoto("https://bit.ly/3CzDdCy");
        christian.addPhoto("https://bit.ly/3Az6lZ5");
        Professional heather = new Professional("Heather McKinley", "Really great tattoos", 5.4, 5,
                "Filler", true, "ColorTattoo","https://bit.ly/2VNFSru","1234836262"
                ,true,true,true, true, true);
        heather.addReview("She is a great artist!");
        heather.addReview("My tattoo is looking great!");
        heather.addPhoto("https://bit.ly/3iBOvhM");
        heather.addPhoto("https://bit.ly/3CCls5C");
        Professional bri = new Professional("Bri Phillips", "Good stylist", 5.6, 7,
                "Filler", true, "Stylist","https://bit.ly/3yKPCkZ","1234566643"
                ,true,true,true,true,false);
        bri.addReview("Great style!");
        bri.addReview("My no more roots!");
        bri.addReview("My hair is really light!");
        bri.addPhoto("https://bit.ly/3lPFnIl");
        bri.addPhoto("https://bit.ly/2VzcTYR");
        bri.addPhoto("https://bit.ly/2VAzGUc");
        Professional mandy = new Professional("Mandy Moore", "Good nails", 5.1, 2,
                "Filler", true, "Manicurist","https://bit.ly/3yLJF7o","32487641314"
                ,true,true,true,true, false);
        mandy.addReview("She did my nails!");
        mandy.addReview("My nails look amazing!");
        mandy.addPhoto("https://bit.ly/3iAi3wn");
        mandy.addPhoto("https://bit.ly/3yATwwA");
        Professional eli = new Professional("Eli Wagner", "Great hair cuts!", 5.0, 6,
                "Filler", false, "Barber","https://bit.ly/3CIAbvX","1112223333"
                ,true,true,true,true,false);
        eli.addReview("He is a great dude and I love his hair cuts!");
        eli.addReview("My beard looks great everytime Eli cuts me up!");
        eli.addPhoto("https://bit.ly/2UatSQu");
        eli.addPhoto("https://bit.ly/3AphVpi");
        Professional julie = new Professional("Julie Davis", "Amazing tattoos!", 8.2, 6, "Filler", false, "BlackInk",
                        "https://bit.ly/2UpXJ7v", "1112223333", true, true, true, true, false);
        julie.addReview("Her tattoos are dope");
        julie.addReview("Her blank ink work is amazing!");
        julie.addPhoto("https://bit.ly/2UatSQu");
        julie.addPhoto("https://bit.ly/3AphVpi");
        Professional ruby = new Professional("Ruby Smith", "Good nails", 9.1, 12, "Filler", true, "Pedicurist",
                        "https://bit.ly/3mbNVcW", "32487641314", true, true, true, true, false);
        ruby.addReview("She did my nails!");
        ruby.addReview("My nails look amazing!");
        ruby.addPhoto("https://bit.ly/3iAi3wn");
        ruby.addPhoto("https://bit.ly/3yATwwA");

        proStorage.savePro(christian);
        proStorage.savePro(heather);
        proStorage.savePro(bri);
        proStorage.savePro(mandy);
        proStorage.savePro(eli);
        proStorage.savePro(julie);
        proStorage.savePro(ruby);

        Serve cCutHair = new Serve(christian,"Hair-cut", "Standard Hair-Cut", "$");
        Serve cBeardTrim = new Serve(christian,"Beard-Trim","Standard Beard-trim","$");
        Serve cRazorShave = new Serve(christian,"Razor-Shave", "Clean razor shave.", "$");
        Serve eCutHair = new Serve(eli,"Hair-cut", "Hair-Cut", "$");
        Serve eBeardTrim = new Serve(eli,"Beard-Trim","Beard-trim","$");
        Serve eRazorShave = new Serve(eli,"Razor-Shave", "Close shave with a razor", "$$");
        Serve hTwoToneTattoo = new Serve(heather,"Black and White Tattoo", "Black and white tattoo", "$$$");
        Serve hColorTattoo = new Serve(heather,"Colored Tattoo", "Colored Tattoo", "$$$");
        Serve mAcrylicNails = new Serve(mandy,"Acrylic Nails", "My nails are acrylic!", "$$");
        Serve mGelNails = new Serve(mandy,"Gel nails", "I have gel nails now!", "$$");
        Serve bHairHighlight = new Serve(bri,"Hair-Highlight", "Trendy and stylish, highlights are a great option for spicing up you look!.", "$$");
        Serve bHairColor = new Serve(bri,"Color Hair", "We offer a variety of color options.", "$$");
        Serve bHairStyle = new Serve(bri,"Hair-Style", "Hair-styling", "$$");
        Serve jTTT = new Serve(julie, "Black Ink Tattoo", "High quality black ink tattoo", "$$$");
        Serve rPedi = new Serve(ruby, "Pedicure", "High quality pedicure", "$$");

        serveStorage.saveServe(cCutHair);
        serveStorage.saveServe(cBeardTrim);
        serveStorage.saveServe(cRazorShave);
        serveStorage.saveServe(eCutHair);
        serveStorage.saveServe(eBeardTrim);
        serveStorage.saveServe(eRazorShave);
        serveStorage.saveServe(hTwoToneTattoo);
        serveStorage.saveServe(hColorTattoo);
        serveStorage.saveServe(mAcrylicNails);
        serveStorage.saveServe(mGelNails);
        serveStorage.saveServe(bHairHighlight);
        serveStorage.saveServe(bHairColor);
        serveStorage.saveServe(bHairStyle);
        serveStorage.saveServe(jTTT);
        serveStorage.saveServe(rPedi);
    }

}

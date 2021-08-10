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
//      Christian
        Professional christian = new Professional("Christian","Cool dude!", 5.3, "Filler", true, "Barber","123456789", "cash", "Weekdays");
        christian.addReview("He's Great at hair cut!");
        christian.addPhoto("https://bit.ly/3siGu4N");
        christian.addReview("My beard looks great!");
        christian.addPhoto("https://bit.ly/3CzDdCy");
        christian.addReview("Baby smooth.");
        christian.addPhoto("https://bit.ly/3Az6lZ5");
        proStorage.savePro(christian);

//      Heather
        Professional heather = new Professional("Heather", "Really great tattoos", 5.4, "Filler", true, "Tattoo Artist","1234836262", "cash", "Weekdays");
        heather.addReview("She is a great artist!");
        heather.addPhoto("https://bit.ly/3iBOvhM");
        heather.addReview("My tattoo is looking great!");
        heather.addPhoto("https://bit.ly/3CCls5C");
        proStorage.savePro(heather);

//      Bri
        Professional bri = new Professional("Bri", "Good stylist", 5.6, "Filler", true, "Hair Stylist","1234566643", "cash", "Weekdays");
        bri.addReview("Great style!");
        bri.addPhoto("https://bit.ly/3lPFnIl");
        bri.addReview("My no more roots!");
        bri.addPhoto("https://bit.ly/2VzcTYR");
        bri.addReview("My hair is really light!");
        bri.addPhoto("https://bit.ly/2VAzGUc");
        proStorage.savePro(bri);

//      Mandy
        Professional mandy = new Professional("Mandy", "Good nails", 5.1, "Filler", true, "Manicurist","32487641314", "cash", "Weekdays");
        mandy.addReview("She did my nails!");
        mandy.addPhoto("https://bit.ly/3iAi3wn");
        mandy.addReview("My nails look amazing!");
        mandy.addPhoto("https://bit.ly/3yATwwA");
        proStorage.savePro(mandy);

//      Eli
        Professional eli = new Professional("Eli", "Great hair cuts!", 5.0, "Filler", true, "Barber","1112223333", "cash", "Weekdays");
        eli.addReview("He is a great dude and I love his hair cuts!");
        eli.addPhoto("https://bit.ly/2UatSQu");
        eli.addReview("My beard looks great everytime Eli cuts me up!");
        eli.addPhoto("https://bit.ly/3AphVpi");
        proStorage.savePro(eli);

        Serve cCutHair = new Serve(christian,"Hair-cut", "Standard Hair-Cut", "$");
        serveStorage.saveServe(cCutHair);
        Serve cBeardTrim = new Serve(christian,"Beard-Trim","Standard Beard-trim","$");
        serveStorage.saveServe(cBeardTrim);
        Serve cRazorShave = new Serve(christian,"Razor-Shave", "Clean razor shave.", "$");
        serveStorage.saveServe(cRazorShave);
        Serve eCutHair = new Serve(eli,"Hair-cut", "Hair-Cut", "$");
        serveStorage.saveServe(eCutHair);
        Serve eBeardTrim = new Serve(eli,"Beard-Trim","Beard-trim","$");
        serveStorage.saveServe(eBeardTrim);
        Serve eRazorShave = new Serve(eli,"Razor-Shave", "Close shave with a razor", "$$");
        serveStorage.saveServe(eRazorShave);
        Serve hTwoToneTattoo = new Serve(heather,"Black and White Tattoo", "Black and white tattoo", "$$$");
        serveStorage.saveServe(hTwoToneTattoo);
        Serve hColorTattoo = new Serve(heather,"Colored Tattoo", "Colored Tattoo", "$$$");
        serveStorage.saveServe(hColorTattoo);
        Serve mAcrylicNails = new Serve(mandy,"Acrylic Nails", "My nails are acrylic!", "$$");
        serveStorage.saveServe(mAcrylicNails);
        Serve mGelNails = new Serve(mandy,"Gel nails", "I have gel nails now!", "$$");
        serveStorage.saveServe(mGelNails);
        Serve bHairHighlight = new Serve(bri,"Hair-Highlight", "Trendy and stylish, highlights are a great option for spicing up you look!.", "$$");
        serveStorage.saveServe(bHairHighlight);
        Serve bHairColor = new Serve(bri,"Color Hair", "We offer a variety of color options.", "$$");
        serveStorage.saveServe(bHairColor);
        Serve bHairStyle = new Serve(bri,"Hair-Style", "Hair-styling", "$$");
        serveStorage.saveServe(bHairStyle);


    }

}

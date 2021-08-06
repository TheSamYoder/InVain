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
        serveStorage.saveService(cutHair);
        Professional christian = new Professional("Christian","Cool dude!", 5, "Filler", true, "123456789", "cash", "Weekdays", cutHair);
        christian.addReview("He's Great at hair cut!");
        christian.addPhoto("https://health.clevelandclinic.org/wp-content/uploads/sites/3/2018/03/GettyImages-464406020.jpg");
    }
}

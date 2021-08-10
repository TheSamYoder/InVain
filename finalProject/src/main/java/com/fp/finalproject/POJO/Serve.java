package com.fp.finalproject.POJO;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import java.util.Collection;

public class Serve {
    

    @Id
    @GeneratedValue
    private Long id;

    private String serveName;
    private String serveDescription;
    private String price;

    @ManyToMany
    private Collection<Professional> professionals;


    public Serve(String serveName, String serveDescription, String price){
        this.serveName = serveName;
        this.serveDescription = serveDescription;
        this.price = price;
    }


    protected Serve(){}



    public String getServeName(){
        return serveName;
    }

    public String getServeDescription(){
        return serveDescription;
    }

    public String getPrice(){
        return price;
    }

    public Long getId(){
        return id;
    }

    public Collection<Professional> getProfessionals(){
        return professionals;
    }

}

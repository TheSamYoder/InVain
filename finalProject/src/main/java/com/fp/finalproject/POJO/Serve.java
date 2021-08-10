package com.fp.finalproject.POJO;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

public class Serve {
    

    @Id
    @GeneratedValue
    private Long id;

    private String serveName;
    private String serveDescription;
    private Double price;

    @ManyToOne
    private Professional professional;


    public Serve(String serveName, String serveDescription, Double price){
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

    public Double getPrice(){
        return price;
    }

    public Long getId(){
        return id;
    }

    public Professional getProfessional(){
        return professional;
    }

}

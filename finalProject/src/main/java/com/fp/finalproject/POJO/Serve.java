package com.fp.finalproject.POJO;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
public class Serve {
    

    @Id
    @GeneratedValue
    private Long id;

    private String serveName;
    private String serveDescription;
    private String price;

    @ManyToOne
    @JsonIgnore
    private Professional professional;


    public Serve(Professional professional, String serveName, String serveDescription, String price){
        this.professional = professional;
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

    public Professional getProfessional() {
        return professional;
    }

    public void assignPro(Professional proToChange){
        this.professional = proToChange;
    }
}

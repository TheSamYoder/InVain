package com.fp.finalproject.POJO;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Collection;

@Entity
public class Serve {
    

    @Id
    @GeneratedValue
    private Long id;

    private String serveName;
    private String serveDescription;
    private Double price;

    @ManyToOne
    @JsonIgnore
    private Collection<Professional> professionals;


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

    public Collection<Professional> getProfessionals() {
        return professionals;
    }


}

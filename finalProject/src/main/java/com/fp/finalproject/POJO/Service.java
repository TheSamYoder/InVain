package com.fp.finalproject.POJO;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

public class Service {
    

    @Id
    @GeneratedValue
    private Long id;

    private String serviceName;
    private String serviceDescription;
    private Double price;

    @ManyToOne
    private Professional professional;


    public Service(String serviceName, String serviceDescription, Double price){
        this.serviceName = serviceName;
        this.serviceDescription = serviceDescription;
        this.price = price;
    }


    protected Service(){}



    public String getServiceName(){
        return serviceName;
    }

    public String getServiceDescription(){
        return serviceDescription;
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

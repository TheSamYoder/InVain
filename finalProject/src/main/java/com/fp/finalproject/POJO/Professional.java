package com.fp.finalproject.POJO;

import java.util.Set;

import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.OneToMany;
import java.util.Collection;
import java.util.ArrayList;

@Entity
public class Professional {
    

    @Id
    @GeneratedValue
    private long id;

    private String name;
    private String description;
    private int rating;
    private String location;
    private boolean online;

    @OneToMany(mappedBy = "professional")
    private Collection<Service> services;   //object?
    private String phoneNumber;
    private String payment;
    private String daysOfOperation;
    
    @Lob
    @ElementCollection
    private Collection<String> reviews = new ArrayList<String>();
    
    @Lob
    @ElementCollection
    private Collection<String> photos = new ArrayList<String>();

    public Professional(String name, String description, int rating, String location, boolean online, String phoneNumber, String payment, String daysOfOperation, Service... services){
        this.name = name;
        this.description = description;
        this.rating = rating;
        this.location = location;
        this.online = online;
        this.services = Set.of(services);
        this.phoneNumber = phoneNumber;
        this.payment = payment;
        this.daysOfOperation = daysOfOperation;
    }

    protected Professional(){}
    
    
    public long getId(){
        return id;
    }

    public Collection<Service> getServices(){
        return services;
    }

    public String getName(){
        return name;
    }

    public String getDescription(){
        return description;
    }

    public int getRating(){
        return rating;
    }

    public String getlocation(){
        return location;
    }

    public Boolean getOnline(){
        return online;
    }

    public String getPayment(){
        return payment;
    }

    public String getPhoneNumber(){
        return phoneNumber;
    }

    public String getDaysOfOperation(){
        return daysOfOperation;
    }

    public Collection<String> getReviews(){
        return reviews;
    }

    public Collection<String> getPhotos(){
        return photos;
    }

    public void addReview(String review){
        reviews.add(review);
    }

    public void addPhoto(String photo){
        photos.add(photo);
    }
}

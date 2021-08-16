package com.fp.finalproject.POJO;

import javax.persistence.*;
import java.util.Collection;
import java.util.ArrayList;

@Entity
public class Professional {
    

    @Id
    @GeneratedValue
    private long id;

    private String name;
    private String description;
    private Double rating;
    private int experienceYears;
    private String location;
    private boolean online;
    private String specialty;

    @OneToMany(mappedBy = "professional")
    private Collection<Serve> serves;

    private String phoneNumber;
    private String profilePhoto;
    private boolean takesCash;
    private boolean takesCredit;
    private boolean takesCashApp;
    private boolean weekday;
    private boolean weekend;
    private int ratingCounter = 1;
    private Double ratingTotal;

    @ElementCollection
    private Collection<String> reviews = new ArrayList<String>();

    @ElementCollection
    private Collection<String> photos = new ArrayList<String>();

    public Professional(String name, String description, Double rating, int experienceYears, String location, boolean online, String specialty, String profilePhoto, String phoneNumber, boolean takesCash, boolean takesCashApp, boolean takesCredit, boolean weekday, boolean weekend){
        this.name = name;
        this.description = description;
        this.rating = rating;
        this.experienceYears = experienceYears;
        this.location = location;
        this.online = online;
        this.specialty = specialty;
        this.profilePhoto = profilePhoto;
        this.phoneNumber = phoneNumber;
        this.takesCash = takesCash;
        this.takesCashApp = takesCashApp;
        this.takesCredit = takesCredit;
        this.weekday = weekday;
        this.weekend = weekend;
    }

    protected Professional(){}
    
    
    public long getId(){
        return id;
    }

    public Collection<Serve> getServes(){
        return serves;
    }

    public String getName(){
        return name;
    }

    public String getDescription(){
        return description;
    }

    public Double getRating(){
        return rating;
    }

    public int getExperienceYears(){
        return experienceYears;
    }

    public String getLocation(){
        return location;
    }

    public String getProfilePhoto() {
        return profilePhoto;
    }

    public boolean isTakesCash() {
        return takesCash;
    }

    public boolean isTakesCredit() {
        return takesCredit;
    }

    public boolean isTakesCashApp() {
        return takesCashApp;
    }

    public String getPhoneNumber(){
        return phoneNumber;
    }

    public boolean isWeekend(){
        return weekend;
    }

    public boolean isWeekday(){
        return weekday;
    }

    public Collection<String> getReviews(){
        return reviews;
    }

    public Collection<String> getPhotos(){
        return photos;
    }

    public boolean isOnline() {
        return online;
    }

    public String getSpecialty() {
        return specialty;
    }

    public int getRatingCounter(){
        return ratingCounter;
    }

    public Double getRatingTotal() {
        return ratingTotal;
    }

    public void addReview(String review){
        reviews.add(review);
    }

    public void addPhoto(String photo){
        photos.add(photo);
    }

    public void updateProName(String name) {
        this.name = name;
    }

    public void updateProDescription(String description) {
        this.description= description;
    }

    public void updateProLocation(String location) {
        this.location = location;
    }

    public void updateProOnline(Boolean online) {
        this.online = online;
    }

    public void updateProPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public void updateProDaysOfOperation(String daysOfOperation) {
        this.daysOfOperation = daysOfOperation;
    }

    public void updateProTakesCash(boolean takesCash) {
        this.takesCash = takesCash;
    }

    public void updateProTakesCashApp(boolean takesCashApp) {
        this.takesCashApp = takesCashApp;
    }

    public void updateProTakesCredit(boolean takesCredit) {
        this.takesCredit = takesCredit;
    }

    public void addServe (Serve serveToAdd){
        serves.add(serveToAdd);
    }

    public void removeServe (Serve serveToRemove){
        serves.remove(serveToRemove);
    }

    public void updateRatingProperties(Double ratingToChange){
        if(ratingTotal == null) {
            ratingTotal = rating;
        }
        ratingCounter = ratingCounter+1;
        ratingTotal = (ratingToChange + ratingTotal);
        ratingToChange = ratingTotal / ratingCounter;
        rating = ratingToChange;
    }
}

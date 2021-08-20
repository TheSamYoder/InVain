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

        public Populator(ProStorage proStorage, ServeStorage serveStorage) {
                this.proStorage = proStorage;
                this.serveStorage = serveStorage;
        }

        @Override
        public void run(String... args) throws Exception {

                Professional christian = new Professional("Christian Slatery",
                                "A person’s hair is a key part of his or her identity. People’s self-confidence and self-worth are sometimes rooted in the way that their hair looks. I experience this every time I get a great fresh cut, and I try to give everyone that same cool, confident feeling when I cut and style their hair. My regulars come to me because I listen to what they want. Communicating with your customers is important, so they get exactly what they envisioned. I also enjoy letting clients consult with me when they don’t know what style would look best. ",
                                9.8, 10, "Good Life Barbershop", true, "Barber",
                                "https://d2zdpiztbgorvt.cloudfront.net/region1/us/483413/resource_photos/3958041c30b34faf8bc4c2c9866a4204.jpeg?size=250x250&size=250x250",
                                "614-201-9345", true, true, true, true, false);
                christian.addReview("He's Great at hair cut!");
                christian.addReview("Baby smooth.");
                christian.addReview("My beard looks great!");
                christian.addPhoto(
                                "https://d2zdpiztbgorvt.cloudfront.net/region1/us/483413/biz_photo/5e3c5381175a4f04be166cb3e17151-psychobilly-barbershop-biz-photo-ce7105224717450c8ff517d82ac390-booksy.jpeg?size=640x427");
                christian.addPhoto(
                                "https://d2zdpiztbgorvt.cloudfront.net/region1/us/483413/biz_photo/8505ebf86a11465fb368371d16a0df-psychobilly-barbershop-biz-photo-2e28a3dbe5c14562812a5c49da0d1a-booksy.jpeg?size=640x427");
                christian.addPhoto("https://bit.ly/3Az6lZ5");
                Professional heather = new Professional("Heather Kathrine",
                                "I am a creative and detail-oriented individual offering exceptional communication skills and the crucial ability to function well in fast-paced environments. I am a native Spanish speaker with a proficiency in English and a basic knowledge of German. Possessing great hand-eye coordination and determination to meet all your expectations, I would appreciate the opportunity to meet with you in person to discuss my qualifications in more detail. Thank you for your time and consideration and I look forward to speaking with you in the near future.",
                                9.4, 5, "J. Carney's Tattoo's", true, "ColorTattoo", "https://bit.ly/2VNFSru",
                                "740-972-6310", true, true, true, true, true);
                heather.addReview("She is a great artist!");
                heather.addReview("My tattoo is looking great!");
                heather.addPhoto(
                                "https://lh3.googleusercontent.com/p/AF1QipOhV2KXNZJPH3SlHQSfGtWCV1KmCBUTVOT51GKk=w573-h573-p-no");
                heather.addPhoto(
                                "https://lh3.googleusercontent.com/p/AF1QipO0Emqr9J7qMte2ImG4Z5uGh-nxlaKokGK3C0YP=w573-h573-p-no");
                Professional bri = new Professional("Bri Phillips",
                                "I have over five years of experience working as a hair stylist for a variety of people and hair types. I graduated from the Paul Mitchell School, where I gained over 1,000 hours of experience styling, coloring, and treating hair. I subsequently worked for four years at La Flor Hair Salon, where I honed my skills and also learned new treatments, including balayage and keratin treatments. My clients recommend me to others for my skill and versatility.",
                                8.7, 7, "Cuts for Less", true, "Stylist", "https://bit.ly/3yKPCkZ", "614-917-4893",
                                true, true, true, true, false);
                bri.addReview("Great style!");
                bri.addReview("My no more roots!");
                bri.addReview("My hair is really light!");
                bri.addPhoto("https://bit.ly/3lPFnIl");
                bri.addPhoto("https://bit.ly/2VzcTYR");
                bri.addPhoto("https://bit.ly/2VAzGUc");
                Professional mandy = new Professional("Mandy Moore",
                                "I am a beauty professional with more than 15 years as a nail specialist. I am trained in the latest nail artistry techniques and trends. In addition I am familiar with all modes of artificial nail from acrylic to gel and I am skilled in nail art. I possess strong customer service and interpersonal skills. I’m often complimented by clients on my easygoing demeanor and approachable nature. ",
                                8.9, 2, "Penzone", true, "Manicurist", "https://bit.ly/37YfG0d", "614-817-4810", true,
                                true, true, true, false);
                mandy.addReview("She did my nails!");
                mandy.addReview("My nails look amazing!");
                mandy.addPhoto("https://bit.ly/3iAi3wn");
                mandy.addPhoto("https://bit.ly/3yATwwA");
                Professional eli = new Professional("Eli Wagner",
                                "I have graduated from MILLI Barbering & Beauty School and have also completed an apprenticeship as well as passed the State Board examination for beauticians and barbers. I am fully licensed and have had a great deal of practical experience in working with a wide range of clients.",
                                9.6, 6, "Supercuts", false, "Barber", "https://bit.ly/3CIAbvX", "614-774-9419", true,
                                true, true, true, false);
                eli.addReview("He is a great dude and I love his hair cuts!");
                eli.addReview("My beard looks great everytime Eli cuts me up!");
                eli.addPhoto("https://bit.ly/2UatSQu");
                eli.addPhoto("https://bit.ly/3AphVpi");
                Professional julie = new Professional("Sarah Moran",
                                "I have several years of experience in the design and application of tattoos. Adept at working with clients to design thoughtful and original tattoo plans. Bringing forth superior artistic ability, manual dexterity, and great attention to details. Committed to creating a comfortable, sanitary, and calming atmosphere for clients.",
                                8.2, 6, "33 Lions Tattoo's", false, "BlackInk", "https://bit.ly/3AST0ei",
                                "614-741-5354", true, true, true, true, false);
                julie.addReview("Her tattoos are dope");
                julie.addReview("Her blank ink work is amazing!");
                julie.addPhoto("https://bit.ly/2UatSQu");
                julie.addPhoto("https://bit.ly/3AphVpi");
                Professional ruby = new Professional("Ruby Smith",
                                "Doing nails is something that I really enjoy. I love being able to come up with a design that pleases my clients and seeing them leave happier and more confident than when they came in. It’s a way of providing great customer service while allowing me to use my creativity.",
                                9.1, 12, "Toe's R' Us", true, "Pedicurist", "https://bit.ly/2UsOKlZ", "614-644-7932",
                                true, true, true, true, false);
                ruby.addReview("She did my nails!");
                ruby.addReview("My nails look amazing!");
                ruby.addPhoto("https://lilynailsspacolumbus.com/uploads/lilynatpxpyv6/gallery/1552921396_30-gelacrylic.jpg");
                ruby.addPhoto("https://lilynailsspacolumbus.com/uploads/lilynatpxpyv6/gallery/1552921325_w574_1537613048_8.jpg");

                Professional angelo = new Professional("Angelo Moore",
                                "I am an independent thinker who can also be a valuable member of a team. Not only do I possess artistic ability but I also have a great deal of experience using the computer as well as sketch books to generate art and design. I am creative and imaginative and possess the artistic skills which I feel would be a great asset to your creative team.",
                                8.2, 5, "Moore Tattoos", false, "ColorTattoo", "https://bit.ly/3CVtsim", "614-597-9070",
                                false, false, true, false, true);
                Professional json = new Professional("Json Williams",
                                "I left the IT world after too much headache. I decided to work on hands instead. I love the feeling of helping somebody feel good.",
                                8.1, 7, "Ruby on Rails & Nails Parlour", true, "Manicurist", "https://bit.ly/2W4Q9jz",
                                "614-2311-9070", false, true, true, true, false);
                Professional mia = new Professional("Nia Connors",
                                "I have been a professional Nail Technician for the past eight years, and in that time, have perfected my beauty service for all of my clients. For this reason, I have many repeat and return customers who want only my service in getting their nails painted, given tips, accentuated, and stylized.",
                                7.6, 8, "Hanz Foot Spa", false, "Pedicurist", "https://bit.ly/3z13d7V", "614-2311-1641",
                                true, true, false, true, false);
                Professional rose = new Professional("Rose Garcia",
                                "Primarily in black ink, my tattoos rival the artwork of Baroque artists. I've won mutiple tattoo awards. Some call me a visionary, other call me prodigy... I just call it a day's work. A rose by any other name wouldn't be as good as I am.",
                                3.1, 1, "Dirty Ink Tattoos", true, "BlackInk", "https://bit.ly/2Xy3q4p",
                                "614-5205-2170", true, false, false, false, true);
                Professional sydney = new Professional("Sydney Ikes",
                                "I have years of experience creating detailed, portraits, realistic landscapes, innovative depictions of animals, and creative imagery inspired by popular fictional characters.",
                                6.0, 12, "Color Me Bad Tattoos", false, "ColorTattoo", "https://bit.ly/2W5PqyC",
                                "614-1111-2270", false, true, false, true, true);
                Professional lina = new Professional("Lina Krastoff",
                                "If you're thinking about a beautiful, moving design or an aestetically pleasing pattern, book an appointment today!",
                                9.6, 4, "Show & Tell Tattoo & Piercings", true, "BlackInk", "https://bit.ly/37RnrVL",
                                "614-8910-2170", true, false, true, true, false);
                Professional jan = new Professional("Jan Namdar",
                                "Not only do I possess artistic ability but I also have a great deal of experience using the computer as well as sketch books to generate art and design. I am creative and imaginative and possess the artistic skills to make any idea you have come to life.",
                                2.4, 1, "Short North Tattoos", false, "ColorTattoo", "https://bit.ly/3gedjeg",
                                "614-3672-8312", false, false, false, false, true);
                Professional korie = new Professional("Korgie Moha",
                                "Doing nails is something that I really enjoy. I love being able to come up with a design that pleases my clients and seeing them leave happier and more confident than when they came in. It’s a way of providing great customer service while allowing me to use my creativity.",
                                7.6, 1, "Nature Day Spa", true, "Manicurist", "https://bit.ly/3z2T3Dy", "614-3672-8312",
                                true, true, true, true, true);
                Professional brooke = new Professional("Brooke Cagel",
                                "I am trained in the latest nail artistry techniques and trends. In addition I am familiar with all modes of artificial nail from acrylic to gel and I am skilled in nail art.",
                                8.0, 8, "Manny's Pedicures & More", false, "Pedicurist", "https://bit.ly/3D1wD87",
                                "614-1572-5321", false, false, true, false, true);
                Professional ian = new Professional("Ian Dooley",
                                "Making my clients feel great about the way they look is my #1 goal. Since my clients are walking advertisements for my services, I provide instruction and recommendations on styling tips, tools and products to keep them looking their best in between salon visits, and these efforts have led to a high number of word-of-mouth referrals.",
                                5.0, 12, "Bed Head Salon", true, "Stylist", "https://bit.ly/2XsB6jV", "614-6821-9201",
                                true, false, true, false, false);
                Professional bruce = new Professional("Bruce Bruce", "I'll probably be the funniest barber you know!",
                                1.2, 15, "Gym Class", false, "Barber", "https://bit.ly/3AUB7eU", "614-1234-6202", false,
                                true, false, false, true);
                Professional aiony = new Professional("Aiony Haust",
                                "I am a Certified Nail Technician offering an extemely high level of service. As a native Italian speaker, I can always speak the language of love.",
                                2.9, 11, "Nails Nails Nails", true, "Manicurist", "https://bit.ly/3z16lkb",
                                "614-5127-1257", true, false, true, false, true);
                Professional ayo = new Professional("Ayo Ogunseinde",
                                "I'm here to give you a brush of perfection with delicacy in every stroke, in return you'll recieve a new perspective of fashion and be the center of every occasion. Let's paint the town if you have an idea of a design we can make it real!",
                                9.4, 4, "Good Juju Day Spa", true, "Pedicurist", "https://bit.ly/3xYd3pQ",
                                "614-1111-1111", false, true, true, true, true);
                Professional helen = new Professional("Helen Augustine",
                                "As a stylist at Blu's Salon, I honed my craft and became an expert in a wide spectrum of techniques, including, coloring, balayage, thermal styling, and coloring.",
                                6.2, 4, "Blu's Salon", false, "Stylist", "https://bit.ly/3xYypTV", "614-2222-2222",
                                false, true, true, true, true);
                Professional ryoji = new Professional("Ryoji Sakawa",
                                "During my diverse experiences as a barber, I have developed strong skills in inspecting hair, face, and scalp of clients, and recommend the best solutions and treatment.",
                                7.1, 2, "Scisscor Hands", true, "Barber", "https://bit.ly/37TpmZE", "614-3333-3333",
                                true, false, true, false, true);
                Professional micah = new Professional("Micah Diaz",
                                "Busting onto the Columbus tattooing scene, I bring lots of character and hope. I specialize in small woodland animals and sea creatures, but I don't mind inking anything on your body. Tattooing is what I do and I do it well.",
                                8.5, 11, "Incognito Ink & Piercings", false, "BlackInk", "https://bit.ly/3k4UCe0",
                                "614-4444-4444", false, true, false, true, false);
                Professional josh = new Professional("Joshua St. James",
                                "Every day I walk into work, I will socialize. Salons are a place for folx to go hangout and socialize while getting their hair done. You have the opportunity to create a fun environment with your clients and create a social network with them.",
                                2.7, 1, "North of NOLA Barber & Salon", true, "Stylist", "https://bit.ly/2W7LlK0",
                                "614-5555-5555", true, false, true, true, true);

                proStorage.savePro(christian);
                proStorage.savePro(heather);
                proStorage.savePro(bri);
                proStorage.savePro(mandy);
                proStorage.savePro(eli);
                proStorage.savePro(julie);
                proStorage.savePro(ruby);
                proStorage.savePro(angelo);
                proStorage.savePro(json);
                proStorage.savePro(mia);
                proStorage.savePro(rose);
                proStorage.savePro(sydney);
                proStorage.savePro(lina);
                proStorage.savePro(jan);
                proStorage.savePro(korie);
                proStorage.savePro(brooke);
                proStorage.savePro(ian);
                proStorage.savePro(bruce);
                proStorage.savePro(aiony);
                proStorage.savePro(ayo);
                proStorage.savePro(helen);
                proStorage.savePro(ryoji);
                proStorage.savePro(micah);
                proStorage.savePro(josh);

                Serve cCutHair = new Serve(christian, "Hair-cut", "Standard Hair-Cut", "$");
                Serve cBeardTrim = new Serve(christian, "Beard-Trim", "Standard Beard-trim", "$");
                Serve cRazorShave = new Serve(christian, "Razor-Shave", "Clean razor shave.", "$");
                Serve cEyeBrows = new Serve(christian, "Eye Brows Trim", "Eye Brow Shaping.", "$");
                Serve cHotTowel = new Serve(christian, "Hot Towel", "Hot Towel Treatment.", "$");
                Serve cFaceMask = new Serve(christian, "Face Mask", "Face Mask feel good.", "$");
                Serve cKidsCuts = new Serve(christian, "Kids Hair Cut",
                                "Show up with good grades and it will be half off.", "$");
                Serve cKidsBeards = new Serve(christian, "Kids Beard Trims", "This is fun.", "$");
                Serve eCutHair = new Serve(eli, "Hair-cut", "Hair-Cut", "$");
                Serve eBeardTrim = new Serve(eli, "Beard-Trim", "Beard-trim", "$");
                Serve eRazorShave = new Serve(eli, "Razor-Shave", "Close shave with a razor", "$$");
                Serve eEyeBrows = new Serve(eli, "Eye Brows Trim", "Eye Brow Shaping.", "$");
                Serve eHotTowel = new Serve(eli, "Hot Towel", "Hot Towel Treatment.", "$");
                Serve eFaceMask = new Serve(eli, "Face Mask", "Face Mask feel good.", "$");
                Serve eKidsCuts = new Serve(eli, "Kids Hair Cut", "Show up with good grades and it will be half off.",
                                "$");
                Serve eKidsBeards = new Serve(eli, "Kids Beard Trims", "This is fun.", "$");
                Serve hTwoToneTattoo = new Serve(heather, "Black and White Tattoo", "Black and white tattoo", "$$$");
                Serve hColorTattoo = new Serve(heather, "Colored Tattoo", "Colored Tattoo", "$$$");
                Serve hNeoTrad = new Serve(heather, "Neo Traditional Tattoo", "Neo!", "$$$");
                Serve mAcrylicNails = new Serve(mandy, "Acrylic Nails", "My nails are acrylic!", "$$");
                Serve mGelNails = new Serve(mandy, "Gel nails", "I have gel nails now!", "$$");
                Serve mPedi = new Serve(mandy, "Pedicure", "Pedicure nails!", "$$");
                Serve mFootSoak = new Serve(mandy, "Foot Soak", "My feet have been soaked!", "$$");
                Serve mBalance = new Serve(mandy, "Balance", "You'll feel so balanced", "$$");
                Serve mFishFoot = new Serve(mandy, "Fish Foot", "Your feet + my fish = good feet!", "$$$");
                Serve bHairHighlight = new Serve(bri, "Hair-Highlight",
                                "Trendy and stylish, highlights are a great option for spicing up you look!.", "$$");
                Serve bHairColor = new Serve(bri, "Color Hair", "We offer a variety of color options.", "$$");
                Serve bHairStyle = new Serve(bri, "Hair-Style", "Hair-styling", "$$");
                Serve jTTT = new Serve(julie, "Black Ink Tattoo", "High quality black ink tattoo", "$$$");
                Serve jColored = new Serve(julie, "Colored Tatto", "High quality colored tattoo", "$$$");
                Serve rPedi = new Serve(ruby, "Pedicure", "High quality pedicure", "$$");
                Serve rFootSoak = new Serve(ruby, "Foot Soak", "My feet have been soaked!", "$$");
                Serve rBalance = new Serve(ruby, "Balance", "You'll feel so balanced", "$$");
                Serve rFishFoot = new Serve(ruby, "Fish Foot", "Your feet + my fish = good feet!", "$$$");
                Serve rMani = new Serve(ruby, "Manicure", "Let me make your nails glow!", "$$");
                Serve aColor = new Serve(angelo, "Colored Tattoo", "Colored Tattoo", "$$$");
                Serve jMani = new Serve(json, "Manicure", "Manicure", "$");
                Serve mIPedi = new Serve(mia, "Pedicure", "Pedicure", "$");
                Serve rTTT = new Serve(rose, "Black Ink Tattoos", "Black Ink", "$$$");
                Serve sColor = new Serve(sydney, "Colored Tattoo", "Colored Tattoo", "$$$");
                Serve lTTT = new Serve(lina, "Black Ink Tattoo", "Black ink tattoo", "$$$");
                Serve jAColor = new Serve(jan, "Colored Tattoos", "Color Tattoos", "$$$");
                Serve kMani = new Serve(korie, "Manicure", "Good nail.", "$");
                Serve bPedi = new Serve(brooke, "Pedicure", "Pedicure", "$");
                Serve iANStyle = new Serve(ian, "Stylized Hair", "Your hair will have style.", "$$$");
                Serve bBarber = new Serve(bruce, "Hair Cut", "Standard Hair Cut", "$");
                Serve aIOMani = new Serve(aiony, "Manicure", "Manicure", "$");
                Serve aYPedi = new Serve(ayo, "Pedicure", "Pedicure", "$");
                Serve hStyle = new Serve(helen, "Stylized Hair", "Your hair will be stylized", "$$");
                Serve rYBarber = new Serve(ryoji, "Beard trim", "Standard Bread Trim", "$$");
                Serve mTTT = new Serve(micah, "Black Ink", "Black ink Tattoo", "$$$");
                Serve jJStyle = new Serve(josh, "Stylized Hair", "Your hair will be stylized.", "$$$");

                serveStorage.saveServe(cCutHair);
                serveStorage.saveServe(cBeardTrim);
                serveStorage.saveServe(cRazorShave);
                serveStorage.saveServe(cEyeBrows);
                serveStorage.saveServe(cHotTowel);
                serveStorage.saveServe(cFaceMask);
                serveStorage.saveServe(cKidsCuts);
                serveStorage.saveServe(cKidsBeards);
                serveStorage.saveServe(eCutHair);
                serveStorage.saveServe(eBeardTrim);
                serveStorage.saveServe(eRazorShave);
                serveStorage.saveServe(eEyeBrows);
                serveStorage.saveServe(eHotTowel);
                serveStorage.saveServe(eFaceMask);
                serveStorage.saveServe(eKidsCuts);
                serveStorage.saveServe(eKidsBeards);
                serveStorage.saveServe(hTwoToneTattoo);
                serveStorage.saveServe(hColorTattoo);
                serveStorage.saveServe(hNeoTrad);
                serveStorage.saveServe(mAcrylicNails);
                serveStorage.saveServe(mGelNails);
                serveStorage.saveServe(mPedi);
                serveStorage.saveServe(mFootSoak);
                serveStorage.saveServe(mBalance);
                serveStorage.saveServe(mFishFoot);
                serveStorage.saveServe(bHairHighlight);
                serveStorage.saveServe(bHairColor);
                serveStorage.saveServe(bHairStyle);
                serveStorage.saveServe(jTTT);
                serveStorage.saveServe(jColored);
                serveStorage.saveServe(rPedi);
                serveStorage.saveServe(rFootSoak);
                serveStorage.saveServe(rBalance);
                serveStorage.saveServe(rFishFoot);
                serveStorage.saveServe(rMani);
                serveStorage.saveServe(aColor);
                serveStorage.saveServe(jMani);
                serveStorage.saveServe(mIPedi);
                serveStorage.saveServe(rTTT);
                serveStorage.saveServe(sColor);
                serveStorage.saveServe(lTTT);
                serveStorage.saveServe(jAColor);
                serveStorage.saveServe(kMani);
                serveStorage.saveServe(bPedi);
                serveStorage.saveServe(iANStyle);
                serveStorage.saveServe(bBarber);
                serveStorage.saveServe(aIOMani);
                serveStorage.saveServe(aYPedi);
                serveStorage.saveServe(hStyle);
                serveStorage.saveServe(rYBarber);
                serveStorage.saveServe(mTTT);
                serveStorage.saveServe(jJStyle);
        }

}

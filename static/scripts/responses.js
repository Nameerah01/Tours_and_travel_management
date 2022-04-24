function getBotResponse(input){ 
    if (input == "Hi") {
        return "Hello";
    } else if (input == "Bye") {
        return "I hope you have got your answers ,Have a good day!";
    } else if (input == "Thank you") {
        return "Thanks for visiting our site,come back soon!";
    }

    const WeddingDestination = "Best Wedding destinations in India";
    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } 
    else if(input=="best wedding destination in india" ){
        return "Rajasthan Udaipur Jaipur Kerela Goa Andaman & Nicobar";
    }
    else if(input=="best historic places in india" ){
        return  "Taj Mahal Fatehpur Sikri Agra Fort Red Fort Qutub Minar Hawa Mahal   Amer Fort Khajuraho Temples";
    }
    else if(input=="best devotional places in india" ){
        return  "Dwaraka temple Tirupati temple Jagannath temple Badrinath temple Amarnath temple  Prem Mandir Guruvayoor Temple";
    }
    else if(input=="toll details"){
        return "Jodhpur,Udaipur,Goa,Jim Corbett?";{

         if(input=="Jodhpur"){
            return "https://goo.gl/maps/xBZZjLsoxr6pSZVg8";
        }
        else if(input=="Udaipur"){
            return "https://goo.gl/maps/PHA7ZuRa4hyZmyJd7";
        }
        else if(input=="Goa"){
            return "https://goo.gl/maps/yPXEnzpKFZFf54RY7";
        }
        else if(input=="Jim Corbett"){
            return "https://www.google.com/maps/d/embed?mid=12LJNoNor9MysNJHuuePKq3RYDbI&ehbc=2E312F";
        }
        else  {
            return "Try asking something else!";
        }}




    }
    else if(input=="Jodhpur"){
        return "https://goo.gl/maps/xBZZjLsoxr6pSZVg8";
    }
    else if(input=="Udaipur"){
        return "https://goo.gl/maps/PHA7ZuRa4hyZmyJd7";
    }
    else if(input=="Goa"){
        return "https://goo.gl/maps/yPXEnzpKFZFf54RY7";
    }
    else if(input=="Jim Corbett"){
        return "https://www.google.com/maps/d/embed?mid=12LJNoNor9MysNJHuuePKq3RYDbI&ehbc=2E312F";
    }
    else  {
        return "Try asking something else!";
    }
}
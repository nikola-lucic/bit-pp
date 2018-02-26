/*
2.Applications:

Create constructor functions with properties representing the following:
WebApp: name, url, technologies, licence, stars
MobileApp: name, platforms, licence, stars
 
All web applications should inherit methods: 
getData which prints out all the information
reactBased which checks if one of the used technologies is React
 
All mobile applications should inherit methods:
getData which prints out all the informations
forAndroid which checks if one of the platforms the application is developed for is Android

Both web and mobile applications should inherit methods:
isCCLicence  which checks if the licence of the application is CC (Creative Commons) 
like which increases the number of stars by one
showStars which prints out the number of stars 
*/


function WebApp(name, url, technologies, licence, stars) {
    this.name = name;
    this.url = url;
    this.technologies = technologies;
    this.licence = licence;
    this.stars = stars;
};

WebApp.prototype.getData = function () {
    console.log(
        this.name,
        this.url,
        this.technologies,
        this.licence,
        this.stars)

};

WebApp.prototype.reactBased = function () {

    for (var i = 0; i < this.technologies.length; i++) {
        if (this.technologies[i].toUpperCase() == 'REACT') {
            console.log('it has React');
            return;
        }
    }

    console.log('it doesnt have React');

};


function MobileApp(name, platforms, licence, stars) {
    this.name = name;
    this.platforms = platforms;
    this.licence = licence;
    this.stars = stars;
};


MobileApp.prototype.getData = function () {
    console.log(
        this.name,
        this.platforms,
        this.licence,
        this.stars)
};

MobileApp.prototype.information = function () {
    for (var i = 0; i < this.platforms.length; i++) {
        if (this.platforms[i].toLowerCase() == 'android') {
            console.log('it have Android');
            return;
        }
    }

    console.log('it doesnt have Android');
};

var sharedMethods = {
    isCCLicence: function () {
        if (this.licence == 'CCLicence') {
            console.log('yes it have CC licence');
        } else console.log('yes has not have CC licence');
    },
    like: function () {
        this.stars += +1;
    },
    showStars: function () {
        console.log(this.stars);
    }
};


var newWebApp = new WebApp('Super Cow', 'http://super-cow.srb', ['Angular', 'Vue'], 'CCLicence', 5);
var newMobileApp = new MobileApp('Mobile Super Cow', ['android', 'IOS', 'Linux'], 'CCLicence', 5);

newWebApp.getData();
newWebApp.reactBased();

newMobileApp.getData();
newMobileApp.information();

WebApp.prototype.__proto__ = sharedMethods;
MobileApp.prototype.__proto__ = sharedMethods;

newWebApp.isCCLicence();
newWebApp.like();
newWebApp.showStars();

newMobileApp.isCCLicence();
newMobileApp.like();
newMobileApp.showStars();

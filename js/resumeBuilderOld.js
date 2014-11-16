var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
var skills = ["awesomeness", "programming", "teaching", "CSS"];
//$("#main").append(skills.length);
var bio = {
	"name" : "Renee Judd",
	"role" : "Instructional Designer",
	 "contacts" : {
	 	"mobile": "773.354.4167",
	 	"email" : "rjudd@nl.edu",
	 	"github" : "srjudd",
	 	"twitter" : "@srjudd",
	 	"location" : "Chicago",
	 },
	 	 "welcomeMessage" : "Welcome to my world!",
	 	 "skills" : ["awesomeness", "honesty", "training", "instructional design"],
	 	  "bioPic" : "images/srjedge250.fw.png",	
};
var name = bio.name;
var formattedName = HTMLheaderName.replace("%data%", name);
var role = bio.role;
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


var mobile = bio.contacts.mobile;
var formattedMobile = HTMLmobile.replace("%data%", mobile);
$("#topContacts").append(formattedMobile);

var email = bio.contacts.email;
var formattedEmail = HTMLemail.replace("%data%", email);
$("#topContacts").append(formattedEmail);

var github = bio.contacts.github;
var formattedGithub = HTMLgithub.replace("%data%", github);
$("#topContacts").append(formattedGithub);

var twitter = bio.contacts.twitter;
var formattedTwitter = HTMLtwitter.replace("%data%", twitter);
$("#topContacts").append(formattedTwitter);

var _location = bio.contacts.location;
var formattedLocation = HTMLlocation.replace("%data%", _location);
$("#topContacts").append(formattedLocation);

var bioPic = bio.bioPic;
var formattedBioPic = HTMLbioPic.replace("%data%", bioPic);
$("#header").append(formattedBioPic);

var welcomeMessage = bio.welcomeMessage;
var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", welcomeMessage);
$("#header").append(formattedWelcomeMessage);

var skills = bio.skills;
var formattedSkills = HTMLskills.replace("%data%", skills);
$("#header").append(HTMLskillsStart);
$("#skills").append(formattedSkills);

var work = {};
work.position = "Instructional Designer";
work.employer = "National Louis University";
work.dates = "2 years";
work.city = "Chicago";

//var education = {};
//education["name"] = "University of Chicago";
//education["years"] = "too many";
//education["city"] = "Chicago";


//$("#main").append(work["position"], work["employer"], work["dates"], work["city"]);
//$("#main").append(education.name); */

var education = {
	"schools" : [
		{
			"name": "University of Oklahoma",
			"city": "Norman, OK, US",
			"degree": "BS",
			"major": "Microbiology",
			"minor": "Computational Mathematics",
			"graduation": 1981
		},
		{
			"name": "University of Chicago",
			"city": "Chicago",
			"degree": "PhD",
			"major": "Molecular Genetics and Cell Biology",
			"graduation": 1989
		},
		{
			"name": "University of Wisconsin Distance Education",
			"city": "Online",
			"degree": "Certificate (19 CEU)",
			"major": "Distance Education Certificate Program",
			"onlineCourses": [
				"0101 Learning at a Distance",
				"0102 Distance Education Technology",
				"0103C Instructional Systems Design",
				"0201R e-Learner Support Services",
				"0365B Virtual Environments"
				]
		}
	]

}
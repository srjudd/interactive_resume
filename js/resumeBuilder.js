//End of Lesson 1 in Javascript Basics

var bio = {
	"name" : "Renee Judd",
	"role" : "Instructional Designer",
	 "contacts" : {
	 	"mobile": "773.354.4167",
	 	"email" : "rjudd@nl.edu",
	 	"twitter" : "@rjudd1",
	 	"github" : "srjudd",
	 	"location" : "Chicago"
	 	},
	 	 "welcomeMessage" : "Welcome to my world!",
	 	 "skills" : ["Instructional Design", "LMS Administration", "Faculty Development", "Web Design"],
	 	  "bioPic" : "images/srjedge250.fw.png"
};
var name = bio.name;
var formattedName = HTMLheaderName.replace("%data%", name);
var role = bio.role;
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var work = {
	"jobs" : [
			{
				"employer" : "National Louis University",
				"title": "Instructional Designer",
				"location" : "Chicago, Illinois, USA",
				"dates" : "July 2012 - Present",
				"description" :"D2L administration, online course development, and training and support of university faculty"			
			},
			
			{
				"employer": "National Louis University",
				"title": "Assistant Professor",
				"location" : "Chicago, Illinois, USA",
				"dates" : "September 2000 - July 2012",
				"description" : "Tenured faculty. Taught and designed face-to-face, online, and blended online science courses, including labs; as technology coordinator for the College of Arts and Sciences, mentored faculty in the use of instructional technology and in online course design and served as a liaison between the College and OIT."
			},
			{
				"employer": "Northwestern University",
				"title": "Postdoctoral Researcher",
				"location": "Evanston, Illinois, USA",
				"dates": "September 1996 - August 1997",
				"description": "Postdoctoral Research Sponsor: Dr. Brian Resier. Department of Education and Social Policy, Northwestern University. Participated in the design and implementation of software used for research on how high school students construct explanations of scientific data."
			}
		]
	};

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
			"graduation" : 2013
		}
		],

	"onlineCourses": [
		{
			"title": "Astrobiology and the Search for Extraterrestrial Life",
			"school": "Coursera",
			"dates": 2013,	
			"url": "https://www.coursera.org/course/astrobio"
		},
		{
			"title": "Intro to HTML and CSS",
			"school": "Udacity",
			"dates": 2014,
			"url": "https://www.udacity.com/course/ud304"
		},
		{
			"title:": "Web Accessibility MOOC for Online Educators",
			"school": "WAMOE/BrightStart",
			"dates": 2014,
			"url": "https://opencourses.desire2learn.com/d2l/home/7195"
		}
		]
	};

	var projects = {
		"projects" : [
		{
		"title": "Panopto",
		"dates": "2014",
		"description": "Designed just-in-time training for faculty use of Panopto in the context of D2L 10.3.",
		"images": [
			"images/panopto.fw.png",
			"images/panoptocap.png"
			]
		}
		]
	};

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
};

function displayWork() {
for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedEmployerTitle); 
	$(".work-entry:last").append(formattedLocation);
	$(".work-entry:last").append(formattedDates);
	$(".work-entry:last").append(formattedDescription);

}
}
displayWork(work);

/*$(document).click(function(loc) {
  	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y)
});*/

function locationizer(work_obj) {
	var locationArray = [];
	for (var job in work_obj.jobs) {
		locationArray.push(work_obj.jobs[job].location);
	}
	return locationArray;
}

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);
		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
}
	}
};
projects.display();

/*function inName(name) {
	name = (bio.name).trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	console.log(name[1]);
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	console.log(name[0]);
	return name[0] + " " + name[1];
}
$("#main").append(internationalizeButton);*/

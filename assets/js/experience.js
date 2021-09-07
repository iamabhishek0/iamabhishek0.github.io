//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
	{
		title: "Technical Intern",
		cardImage: "assets/images/experience-page/rakuten.png",
		place: "Rakuten India",
		time: "(Mar, 2021 - Jun, 2021)",
		desp:
			"<li>Developed a Code Coverage Desktop App that can calculate the code coverage of manual testing for Java Spring Boot Web Apps.</li> " +
			"<li>Code Coverage tool was made using Electron and React.</li>" +
			"<li>• The App is being used internally for monitoring Code Coverage for manual and automated tests by various teams at Rakuten India.</li>",
	},
	{
		title: "MLH Open Source Fellow",
		cardImage: "assets/images/experience-page/mlh_fellowship.png",
		place: "Major League Hacking",
		time: "(Oct, 2020 - Dec, 2020)",
		desp:
			"<li>The MLH Open Source Fellowship is a 12-week internship alternative for students interested in becoming software engineers. This Program is made possible Github and Facebook</li> " +
			"<li>During this program I made a significant contribution to <a href='https://github.com/kiwitcms/Kiwi'>KiwiTCMS</a>.</li>" +
			"<li>Worked on increasing the code coverage by writing Automated tests for Django Web App, and have <a href='https://github.com/kiwitcms/Kiwi/pulls?q=is%3Apr+author%3Aiamabhishek0'>8 merged Pull Requests</a> so far.</li>",
	},
	{
		title: "Full Stack Web Developer",
		cardImage: "assets/images/experience-page/divine_care.jpg",
		place: "Divine Care",
		time: "(May - July, 2019)",
		desp:
			"<li>Developed an E-Commerce and video streaming Website</li>" +
			"<li>Technologies used Django, Firebase, HTML, CSS, JavaScript, Bootstrap.</li>" +
			"<li>Managed the deployment of the Web App on Google App Engine</li>" +
			"<li><a href='https://www.divinecareofficial.com'>https://www.divinecareofficial.com</a></li>",
	},
];

const showCards2 = () => {
	let output = "";
	exp.forEach(
		({ title, cardImage, place, time, desp }) =>
			(output += `        
      <ul>
      <li class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </li>
    </ul>
      `)
	);
	experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

const mentorshipcards = document.querySelector(".mentorship-cards");
const mentor = [
	{
		title: "President of Rotaract Club IIIT Gwalior",
		image: "assets/images/experience-page/rotaract.png",
		time: "07/2020 - Present",
		desp:
			"<li>It is non-profit organisation which is a part of Rotary International</li>" +
			"<li>Rotaract Club make its best effort to help the needy as best we can.</li>" +
			"<li><a href='https://www.instagram.com/rotaractiiitm/?hl=en'>Some Glimpses of our Events</a></li>",
	},
	{
		title: "Volunteer at TEDxABVIIITMG",
		image: "assets/images/experience-page/tedx.png",
		time: "Aug 2018",
		desp:
			"<li>A TEDx event is a local gathering where live TED-like talks and performances are shared with the community. </li><hr />" +
			"<li>I was a part of the Team that hosted 7 Speakers.</li>",
	},
];

const showCards3 = () => {
	let output = "";
	mentor.forEach(
		({ title, image, time, desp }) =>
			(output += `        
      <div class="column mentorshipCard"> 
      <div class="card card2">
        <img src="${image}" class="card-img-top" alt="..."  width="64" height="300">
        <div class="information">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class=""sub-title">${time}</p>
        </div>
        <div class="more-information">
        <ul class="list-group list-group-flush p-0 right-aligned">
          <div class="list-group-item card2 disclaimer">${desp}</div>
        </ul>
        </div>
        </div>
      </div>
      </div>
      `)
	);
	mentorshipcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);

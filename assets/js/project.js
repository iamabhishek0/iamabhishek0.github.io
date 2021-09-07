//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
	{
		title: "<a href='https://github.com/kiwitcms/Kiwi'>Kiwi TCMS</a> ",
		cardImage: "assets/images/project-page/kiwitcms.png",
		desp:
			"<li><a href='https://github.com/kiwitcms/Kiwi'>Kiwi TCMS</a> is the leading open source test case management system.</li> " +
			"<li>During the MLH Fellowship Open Source program I made some significant contribution to <a href='https://github.com/kiwitcms/Kiwi'>KiwiTCMS</a>.</li>" +
			"<li>Worked on increasing the code coverage by writing Automated tests for Django Web App, and have <a href='https://github.com/kiwitcms/Kiwi/pulls?q=is%3Apr+author%3Aiamabhishek0'>8 merged Pull Requests</a> so far.</li>",
	},
	{
		title: "<a href='https://github.com/poliastro/poliastro'>poliastro</a> ",
		cardImage: "assets/images/project-page/poliastro.png",
		desp:
			"<li><a href='https://github.com/poliastro/poliastro'>poliastro</a> is an open source pure Python package dedicated to problems arising in Astrodynamics and Orbital Mechanics</li>" +
			"<li>I contributed to it during the Google Summer of Code Community Bonding Phase and was the top contributor during that period.</li>" +
			"<li>I worked on extending the Atmospheric Properties Module of the library.</li>" +
			"<li>I have <a href='https://github.com/poliastro/poliastro/pulls?q=is%3Apr+author%3Aiamabhishek0+is%3Aclosed'>9 merged Pull Requests</a></li>",
	},
	{
		title: "<a href='https://github.com/sympy/sympy'>Sympy</a>",
		cardImage: "assets/images/project-page/sympy.png",
		desp:
			"<li><a href='https://github.com/sympy/sympy'>Sympy</a> is a Python library for symbolic mathematics.</li>" +
			"<li>I mostly worked on fixing the existing bugs and finding any issue in the previous implementation</li>" +
			"<li>I also worked on removing the Python 2 deprecated code base.</li>" +
			"<li>These are some of the <a href='https://github.com/sympy/sympy/pulls?q=is%3Apr+author%3Aiamabhishek0+is%3Aclosed'>Pull Requests.</a></li>",
	},
];

const showCards2 = () => {
	let output = "";
	exp.forEach(
		({ title, cardImage, desp }) =>
			(output += `        
      <ul>
      <li class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>

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

const mentorshipcards = document.querySelector(".projects-cards");
const mentor = [
	{
		title: "Custom Sudoku Solver",
		cardImage: "assets/images/project-page/sudoku-solver.png",
		desp:
			"<li>Sudoku Solver is a 9x9 Standard Sudoku Game which is made using Django</li> " +
			"<li>In the Sudoku Solver, user can fill their own unsolved puzzle and get the solved puzzle.</li>" +
			"<li>In between game, user can check if it is a valid move or not. In case, user gets stuck and is unable to solve. User can see the answer by clicking on solve.</li>" +
			"<li>Demo: <a href='https://custom-sudoku-solver.herokuapp.com/'>https://custom-sudoku-solver.herokuapp.com/</a></li>" +
			"<li>Github: <a href='https://github.com/iamabhishek0/sudoku-solver'>https://github.com/iamabhishek0/sudoku-solver</a></li>",
	},
	{
		title: "Chatter - Real-Time Chat Application",
		cardImage: "assets/images/project-page/chatter.png",
		desp:
			"<li>Using this Web App, Users can join a Room and chat with their Friends.</li>" +
			"<li>Messages are sent using bi-directional WebSocket Connection.</li>" +
			"<li>It is made using React, Express, Socket.io.</li>" +
			"<li>Demo: <a href='https://chatter-nodejs.netlify.app/'>https://chatter-nodejs.netlify.app/</a></li>" +
			"<li>Github: <a href='https://github.com/iamabhishek0/chatter'>https://github.com/iamabhishek0/chatter</a></li>",
	},
	{
		title: "Poliastro REST API",
		cardImage: "assets/images/project-page/poliastro_orbit.png",
		desp:
			"<li>Poliastro-API is a Flask wrapper around poliastro that lets you call poliastro function using REST API calls.</li>" +
			"<li>In the backend, poliastro runs the required function with the input parameters and return the JSON output.</li>" +
			"<li>It can also plot interactive plots using Plotly.js.</li>" +
			"<li>Demo: <a href='https://poliastro-prototype-alcnpgpvvq-uc.a.run.app/'>https://poliastro-prototype-alcnpgpvvq-uc.a.run.app/</a></li>" +
			"<li>Github: <a href='https://github.com/iamabhishek0/poliastro-web-prototype'>https://github.com/iamabhishek0/poliastro-web-prototype</a></li>",
	},

	{
		title: "Sign Language Translator",
		cardImage: "assets/images/project-page/asl_translator.png",
		desp:
			"<li>This project is a sign language alphabet recognizer using Python, openCV and Tensorflow.</li> " +
			"<li>This project uses WebSockets for sending video frames from Client Side to the Server, where the trained ML model is deployed.</li>" +
			"<li>It is made using Flask, WebSockets, HTML, Javascript.</li>" +
			"<li>Demo: <a href='https://www.youtube.com/watch?v=H2Z5G4AeC5A&feature=emb_imp_woyt'>www.youtube.com/watch?v=H2Z5G4AeC5A</a></li>" +
			"<li>Github: <a href='https://github.com/MLH-Fellowship/TeamKerberos_Pod1.0.2'>github.com/MLH-Fellowship/TeamKerberos_Pod1.0.2</a></li>",
	},
	{
		title: "Real Time Mask Detection Web API",
		cardImage: "assets/images/project-page/covid_api.png",
		desp:
			"<li>Mask Detection Web API detects masks in video streams in real time.</li> " +
			"<li>It uses Django-channels for WebSocket implementation, for data transfer between Client and Server</li>" +
			"<li>It is made using Flask, WebSockets, HTML, Javascript.</li>" +
			"<li>Demo: <a href='https://youtu.be/AikuvwoLyN0'>https://youtu.be/AikuvwoLyN0</a></li>" +
			"<li>Github: <a href='https://github.com/iamabhishek0/covid-api'>github.com/iamabhishek0/covid-api</a></li>",
	},
	{
		title: "Poliastro Live",
		cardImage: "assets/images/project-page/poliastro_live.png",
		desp:
			"<li>poliastro-live is an online Python Shell that uses poliastro in the backend.</li>" +
			"<li>This online shell allows user to execute poliastro functionalities and other Python code.</li>" +
			"<li>It is a Django web application deployed on Google App Engine.</li>" +
			"<li>Demo: <a href='https://poliastro-service.appspot.com/'>https://poliastro-service.appspot.com/</a></li>" +
			"<li>Github: <a href='https://github.com/iamabhishek0/poliastro-live'>https://github.com/iamabhishek0/poliastro-live</a></li>",
	},
];

const showCards3 = () => {
	let output = "";
	mentor.forEach(
		({ title, cardImage, desp }) =>
			(output += `        
      <ul>
      <li class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>

            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </li>
    </ul>
      `)
	);
	mentorshipcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);

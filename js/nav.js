var body = document.getElementById('body');
//create nav Tag under Body
var nav = document.createElement('nav');

body.appendChild(nav);

var nav =  function mynav(){
	//create Jason Data For nav 
	var jason = [{
	     nav01:'Home',
		 nav02:'About',
		 nav03:'Facilities',
		 nav04:'Services',
		 nav05:'Gallery',
		 nav06:'Contact Us',
		 side_nav07:'Get Appintment'
	}];
     
	document.querySelector('nav').innerHTML +=`
	   <div class="container">
	       <div class="row">
		       <div class="col-md-6">
			    <i class="fa fa-bars menu_bar" style="font-size:36px;color:white" onclick="myMenu()"></i>
			       <div class="Meghani_nursing_home_nav">
					   <ul class="navbar-nav nav">
						  <li><a href="#index">${jason[0].nav01}</a></li>
						  <li><a href="#about">${jason[0].nav02}</a></li>
						  <li><a href="#about">${jason[0].nav03}</a></li>
						  <li><a href="#service">${jason[0].nav04}</a></li>
						  <li><a href="#gallery">${jason[0].nav05}</a></li>
						  <li><a href="#contact">${jason[0].nav06}</a></li>
					   </ul>
			       </div>
			   </div>
			    <div class="col-md-6">
			       <div class="Meghani_nursing_home_nav">
					   <ul class="navbar-nav nav pull-right">
						  <li class="my_btn"><a href="#contact"><i class="fa fa-calendar" style="font-size:24px"></i> ${jason[0].side_nav07}</a></li>
					   </ul>
			       </div>
				  
			   </div>
		   </div>
	   </div>
	`;	
}
nav();
// function nav End


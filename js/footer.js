var body = document.getElementById('body');
//create nav Tag under Body
var footer = document.createElement('footer');
footer.setAttribute('class','pad-10');
body.appendChild(footer);

var footer =  function myfooter(){
	//create Jason Data For nav 
	var jason = [{
	     nav01:'Home',
		 nav02:'About',
		 nav03:'Facilities',
		 nav04:'Services',
		 nav05:'Gallery',
		 nav06:'Contact Us',
		 side_nav07:'Sadar Bazaar Bilaspur in fornt of CIMS Chowk',
		 side_nav08:'7752400498',
		 side_nav09:'meghaninursinghome@gmail.com'
		 
	},{
	     fasi:"24 Hour Emergency Service",
		 fasi01:"X-ray & Pathology Facilty",
	}];
     
	document.querySelector('footer').innerHTML +=`
	   <div class="container">
	       <div class="row">
		       <div class="col-md-4">
			       <div class="footer_widget">
				       <h1>My Navigation</h1>
					   <ul class="">
						  <li><a href="#index">${jason[0].nav01}</a></li>
						  <li><a href="#about">${jason[0].nav02}</a></li>
						  <li><a href="#about">${jason[0].nav03}</a></li>
						  <li><a href="#service">${jason[0].nav04}</a></li>
						  <li><a href="#gallery">${jason[0].nav05}</a></li>
						  <li><a href="#contact">${jason[0].nav06}</a></li>
					   </ul>
			       </div>
			   </div>
			   <div class="col-md-4">
			       <div class="footer_widget">
				       <h1>My Navigation</h1>
					   <ul class="">
						  <li><a href="">${jason[1].fasi}</a></li>
						  <li><a href="">${jason[1].fasi01}</a></li>
					   </ul>
			       </div>
			   </div>
			    <div class="col-md-4">
			       <div class="Meghani_nursing_home_footer_nav">
				       <h2>Our Address</h2>
					   <ul class="navbar-nav nav pull-right">
						 <li class="my_btn"><a href=""><i class="fa fa-map-marker" style="font-size:24px"></i> ${jason[0].side_nav07}</a></li>
						  <li class="my_btn"><a href="tel:${jason[0].side_nav08}"><i class="fa fa-phone" style="font-size:24px"></i>  ${jason[0].side_nav08}</a></li>
						  <li class="my_btn"><a href="mailto:${jason[0].side_nav09}"><i class="fa fa-envelope" style="font-size:24px"></i> ${jason[0].side_nav09}</a></li>
					   </ul>
			       </div>
			   </div>
		   </div>
	   </div>
	`;	
}
footer();
// function nav End


var body = document.getElementById('body');
//create nav Tag under Body
var article = document.createElement('article');

body.appendChild(article);
article.setAttribute('class','article06');
article.setAttribute('id','contact');
article.innerHTML +='<div class="container"><div class="row"><div class="text-center"><h6>Contact Us</h6></div></div></div>';

var jason = [{
	ad:"Sadar Bazaar Bilaspur in fornt of CIMS Chowk",
	ph:'7752400498',
	em:'meghaninursinghome@gmail.com',
	
},{
	map:'<iframe src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d3694.845213975412!2d82.12149738730209!3d22.169963266363187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d22.0839975!2d82.1169542!4m5!1s0x3a280ba1079fa785%3A0x9a67004b7f2effb!2smeghani%20nursing%20home!3m2!1d22.0864545!2d82.1522202!5e0!3m2!1sen!2sin!4v1609652128045!5m2!1sen!2sin" width="100%" height="250px" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>',
}]
 document.querySelector('.article06>.container>.row').innerHTML +=`
   <div class="col-md-6">
       <div class="myContect">
	        <ul>
			     <li><i class="fa fa-map-marker" style="font-size:24px"></i> ${jason[0].ad}</li>
				<li><a href="tel:${jason[0].ph}"><i class="fa fa-phone" style="font-size:24px"></i> ${jason[0].ph}</a></li>
				<li><a href="mailto:${jason[0].em}"><i class="fa fa-envelope" style="font-size:24px"></i> ${jason[0].em}</a></li>
			</ul>
	   </div>
   </div>
   <div class="col-md-6">
       <div class="myContect">
	        ${jason[1].map}
	   </div>
   </div>
`; 

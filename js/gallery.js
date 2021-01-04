var body = document.getElementById('body');
//create article05 Tag under Body
var article = document.createElement('article');

body.appendChild(article);

//setAttribute in article 
article.setAttribute('class','article05');
article.setAttribute('id','gallery');
article.innerHTML +='<div class="container"><div class="row text-center"></div></div>';

document.querySelector('.article05>.container').innerHTML +=`
	     <div class="row text-center pad-10">
		     <h1>Our <span class="light_green ">Gallery</span></h1>
			  <div class="column">
				<img src="images/meghani_nursing_home_about_images.png" style="width:100%" onclick="openModal();currentSlide(1)" class="hover-shadow cursor">
			  </div>
			  <div class="column">
				<img src="images/treatment_for_appendix_gallbleader_harnia_in_meghani_nursing_home_bilaspur_dr.deepak_meghani.png" style="width:100%" onclick="openModal();currentSlide(2)" class="hover-shadow cursor">
			  </div>
			  <div class="column">
				<img src="images/meghani_nursing_home_bilaspur_dr.deepak.png" style="width:100%" onclick="openModal();currentSlide(3)" class="hover-shadow cursor">
			  </div>
			  <div class="column">
				<img src="images/meghani_nursing_home_dr.deepak_meghnai_sadar_bbazar_bilaspur_chhatisgarh.png" style="width:100%" onclick="openModal();currentSlide(4)" class="hover-shadow cursor">
			  </div>
		 </div>
		 

			<div id="myModal" class="modal">
			   <span class="close cursor" onclick="closeModal()">&times;</span>
			    <div class="modal-content">

			<div class="mySlides">
				<div class="numbertext">1 / 2</div>
				   <img src="images/meghani_nursing_home_about_images.png" style="width:100%">
				</div>

				<div class="mySlides">
				  <div class="numbertext">2 / 3</div>
				  <img src="images/treatment_for_appendix_gallbleader_harnia_in_meghani_nursing_home_bilaspur_dr.deepak_meghani.png" style="width:100%">
				</div>

				<div class="mySlides">
				  <div class="numbertext">3 / 4</div>
				  <img src="images/meghani_nursing_home_dr.deepak_meghnai_sadar_bbazar_bilaspur_chhatisgarh.png" style="width:100%">
				</div>
				
				<div class="mySlides">
				  <div class="numbertext">4 </div>
				  <img src="images/meghani_nursing_home_bilaspur_dr.deepak.png" style="width:100%">
				</div>
				
				
				<a class="prev" onclick="plusSlides(-1)">&#10094;</a>
				<a class="next" onclick="plusSlides(1)">&#10095;</a>
            </div>
			
			
	`;
		
                   
					
                    
                
	//my gallery validation		
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}				
//my gallery validation end


	



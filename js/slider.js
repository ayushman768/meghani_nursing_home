var body = document.getElementById('body');
//create nav Tag under Body
var section = document.createElement('section');

body.appendChild(section);

var slider = function slid(){
	var jason = [{
		img :"images/meghani_nursing_home_dr.deepak_meghnai_sadar_bbazar_bilaspur_chhatisgarh.png",
		img01:'images/treatment_for_appendix_gallbleader_harnia_in_meghani_nursing_home_bilaspur_dr.deepak_meghani.png"',
	}]
	
	document.querySelector('section').innerHTML +=`
	    <div id="myCarousel" class="carousel slide" data-ride="carousel">
			<!-- Indicators -->
			<ol class="carousel-indicators">
			  <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
			  <li data-target="#myCarousel" data-slide-to="1"></li>
			 
			</ol>

			<!-- Wrapper for slides -->
			<div class="carousel-inner">
			  <div class="item active">
				<img src="${jason[0].img}" alt="${jason[0].img}" style="width:100%;">
			  </div>

			  <div class="item">
				<img src="${jason[0].img01}" alt="${jason[0].img01}" style="width:100%;">
			  </div>
			
			  
			</div>

			<!-- Left and right controls -->
			<a class="left carousel-control" href="#myCarousel" data-slide="prev">
			  <span class="glyphicon glyphicon-chevron-left"></span>
			  <span class="sr-only">Previous</span>
			</a>
			<a class="right carousel-control" href="#myCarousel" data-slide="next">
			  <span class="glyphicon glyphicon-chevron-right"></span>
			  <span class="sr-only">Next</span>
			</a>
		  </div>
		</div>
	`;
}
slider();



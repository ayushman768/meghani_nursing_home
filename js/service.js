var body = document.getElementById('body');
//create article02 Tag under Body
var article = document.createElement('article');
article.setAttribute('id','service');
//create article03 tag under Body  
var service01 = document.createElement('article');

//create article04 tag under Body  
var service02 = document.createElement('article');

body.appendChild(article);
body.appendChild(service01);
body.appendChild(service02);
//set Class Attribute in article

article.setAttribute('class','article02');
//set Class Attribute in article02

service01.setAttribute('class','article03');
//set Class Attribute in article03

service02.setAttribute('class','article04');
//set Class Attribute in article03

article.innerHTML +='<div class="container"><div class="row text-center"><h4>Service (Laproscopic Surgery)</h4></div></div>';

service01.innerHTML +='<div class="container"><div class="row text-center"><h5>Service (URO Surgery)</h5></div></div>';

var serv =  function service(img,details){
	  this.img = img;
	  this.details = details;
	 
	
}
serv();

var arr = new serv('images/appendix_treatment_meghani_nursing_home_in_bilaspur.jpg','Appendix');
var arr01 = new serv('images/gallbladder-stone-treatment_meghani_nursing_home_in_bilaspur.jpg','Gall Bladder Stone');

var arr02 = new serv('images/bache_dani_operation_meghani_nursing_home_bilaspur.jpg','Bache Dani Operation (LAVH)');

var arr03 = new serv('images/gs11_open-inguinal-hernia-bilaspur_meghani_nursing_home.png','Harnia');



var my_arr = [arr,arr01,arr02,arr03];

for(var i in my_arr){
	document.querySelector('.article02>.container>.row').innerHTML +=`
	   <div class="col-md-3">
	       <div class="myService">
		       <img src="${my_arr[i].img}" alt="${my_arr[i].img}" class="img-thumbnail">
			   <p>${my_arr[i].details}</p>
		   </div>
	   </div>
	`;
}

 var serv01 = function servi(img01,details01){
		  this.img01 = img01;
		  this.details01 = details01;
	 }
	 serv01();
	 
	var s_arr = new serv01('images/prostate_operation_meghani_nursing_home_treatment.jpg','Prostate Operation');

	var s_arr01 = new serv01('images/viu_treatment_in_megani_nursing_home_bilaspur_chattisgarh.png','VIU (Visual Internal Urethrotomy)');

	var s_arr02 = new serv01('images/uretroscopy_treatment_in_bilaspur_chhatisgarh.jpg','Ureteroscopy (URS)');

	var s_arr03 = new serv01('images/male_cystoscopy_treatment_in_bilaspur_chattishgarh.png','Cystoscopy');
		
	var my_arr01 = [s_arr,s_arr01,s_arr02,s_arr03];
	
	for(var i in my_arr01){
		document.querySelector('.article03>.container>.row').innerHTML +=`
		   <div class="col-md-3">
			   <div class="myService">
				   <img src="${my_arr01[i].img01}" alt="${my_arr01[i].img01}" class="img-thumbnail">
				   <p>${my_arr01[i].details01}</p>
			   </div>
		   </div>`;
	}//end for loop
	
	var serv02 = function ser(img02,details02){
		this.img02 = img02;
		this.details02 = details02;
	}
	serv02();//Calling function
	
	var t_arr0 = new serv02('images/hydrocele_treatment_in_bilaspur_meghani_nursing_home_and_surgical_centre.jpg','Hydrocele Treatment');
	
	var t_arr01 = new serv02('images/stomach _related_problems_treatment_in_bilaspur_meghani_nursing_home_bilaspur.jpg','Stomach Related Problems');
	
	var t_arr02 = new serv02('images/24_hour_emegency_service_in_meghani_nursing_home.png','24 Hours Emergency Care');
	
	var t_arr03 = new serv02('images/ndvh_treatment_in_meghnai_nursing_home_by_dr.deepak_meghani_bilaspur_chhattisgarh.jpg','NDVH Treatment');
	
	var my_arr02 = [t_arr0,t_arr01,t_arr02,t_arr03];
	
	for(var i in my_arr02){
		document.querySelector('.article03>.container>.row').innerHTML +=`
		   <div class="col-md-3">
			   <div class="myService">
				   <img src="${my_arr02[i].img02}" alt="${my_arr02[i].img02}" class="img-thumbnail">
				   <p>${my_arr02[i].details02}</p>
			   </div>
		   </div>`;
		
	}//for loop end 
	
	
	






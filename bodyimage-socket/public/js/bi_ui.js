var model;
var home;
var backhome;
var instruct;
var model;
var menu;
var bar0, bar1;
var progressthumbs=[];

/*-------------------For Models In The Home DIV-------------------*/
function backtoslectmodel(){
	menu.style.top="-3000px";
	$("#home").animate({ top: "0px" }, {
	     	duration: 1000,
	     	complete: function(){
	     		maincanvas.style.top="-3000px";
	     		flowcursor.style.left = -1000+"px";
	     	}
	});   //animate
	initpixandwipe();
	index=1;
}


function hometocanvas(e){
	var temp = parseInt(e.target.id)*3;
	var firstins = imgs.length<1 ? true : false ; 
	initimage(temp);
	//inittumbnails(temp);

	home.style.top= maincanvas.height*2+2000+"px";

	$("#maincanvas").animate({ top: "0px" }, {
	 	duration: 1000,
	 	complete: function(){
	 		document.body.style.overflow="hidden";

			flowcursor.style.left = 500+"px";
			flowcursor.style.top = 200+"px";
			flowcursor.style.opacity = "0.9";
			menu.style.top="0";
			/*-------------------instructions-------------------*/
			if(firstins == true){
				instruct.style.left = '50%';
	  		}//if instructions

	 	}//complete funtion
	});   //animate
}//hometocanvas

function initmodels(){
	home=document.getElementById('home');
	model = document.getElementsByClassName('model');
	maincanvas.style.top=-3000+"px";
	instruct = document.getElementById('instruction');

	menu = document.getElementById('menu');
	backhome = document.getElementById('backhome');
	bar0 = document.getElementById('bar0');
	bar1 = document.getElementById('bar1');
	for(var i=0;i<3;i++){
		progressthumbs[1]=document.getElementById('progressthumb'+i);
	}

	for (var i = 0; i < model.length; i++) {
		model[i].addEventListener('click', function(e){
			hometocanvas(e);
		});//addEventListener click

		model[i].addEventListener('touchend', function(e){
	  		hometocanvas(e);
		});//addEventListener click
	}//for

	backhome.addEventListener('click', backtoslectmodel);//backhomebtn click
	backhome.addEventListener('touchend', backtoslectmodel);//backhomebtn touchend

	instruct.addEventListener('click', function(e){
		instruct.style.left = '-500%';
	});//backhomebtn click
	instruct.addEventListener('touchend', function(e){
		instruct.style.left = '-500%';
	});

}//initmodels

function inittumbnails(temp){

}

function progressbars(){
	var percent = totalwiped / pixmatrix.length * pixmatrix[0].length;
	//index 123
	/*
	<div class="progress bars">
	    <div id="bar0" class="progress-bar progress-bar-warning" role="progressbar" 
	    aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0">
	    </div>
	</div>*/

}


function finishcompare () {
		        setTimeout(function(){ 
	                ctx.drawImage(imgs[0],0, 0, imgs[0].naturalWidth, imgs[0].naturalHeight,
	                    0,0,maincanvas.width, maincanvas.height);
	            }, 1000);
	            setTimeout(function(){ 
	                ctx.drawImage(imgs[2],0, 0, imgs[0].naturalWidth, imgs[0].naturalHeight,
	                    0,0,maincanvas.width, maincanvas.height);
	            }, 2000);
	            setTimeout(function(){ 
	                ctx.drawImage(imgs[0],0, 0, imgs[0].naturalWidth, imgs[0].naturalHeight,
	                    0,0,maincanvas.width, maincanvas.height);
	            }, 3000);
	            setTimeout(function(){ 
	                ctx.drawImage(imgs[2],0, 0, imgs[0].naturalWidth, imgs[0].naturalHeight,
	                    0,0,maincanvas.width, maincanvas.height);
	            }, 4000);
	            setTimeout(function(){ 
	                ctx.drawImage(imgs[0],0, 0, imgs[0].naturalWidth, imgs[0].naturalHeight,
	                    0,0,maincanvas.width, maincanvas.height);
	            }, 5000);
	            setTimeout(function(){ 
	                ctx.drawImage(imgs[2],0, 0, imgs[0].naturalWidth, imgs[0].naturalHeight,
	                    0,0,maincanvas.width, maincanvas.height);
	            }, 6000);
	            setTimeout(function(){ 
	                //window.location.href ='../';
	                backtoslectmodel();
	            }, 7000);
	        
			
}


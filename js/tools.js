var tools = {
	w : window.innerWidth,
	h : window.innerHeight,
	init : function(){
		var self = this;
		
		self.singlePageApplicationInit();
	},
	//spa init function
	singlePageApplicationInit : function(){
		//reference to the object
		var self = this;
		//class used for each of the single page app section
		var targetclass = "spa-section";
		//the images on the home to make it full height
		var targetID = "section-images__home";
		//home image
		var homeimage = document.getElementById(targetID);
		//array with all sections in the spa
		var spa_sections = [];
		//space to substract from the total of the screen size in order to allocate the google fab cta
		var vmargin = 150;
		//adding sections to the array
		spa_sections = document.getElementsByClassName(targetclass);
		//setting the homeimage height
		homeimage.style.height = (self.h - vmargin) + "px";
		//setting the sections height according to screen size minus margin
		self.setSpaSectionsHeight(spa_sections,self.h - vmargin);
		console.log(spa_sections);
	},
	//function to set the spa sections
	setSpaSectionsHeight : function(tar,val){
		for(x=0;x<tar.length;x++){
			tar[x].style.height = val + "px";
		}
	}


};

tools.init();
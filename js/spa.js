var spa = {
	w : window.innerWidth,
	h : window.innerHeight,
	gutter : 16,
	init : function(){
		var self = this;
		
		self.singlePageApplicationInit();
	},
	//spa init function
	singlePageApplicationInit : function(){
		//reference to the object
		var self = this;
		//class used for each of the single page app section
		var spa_target_class = "spa-section";
		//id of the home section
		var home_section_id = "spa-section-home";
		//home section storage variable
		var spa_home_section = document.getElementById(home_section_id);
		//array with all sections in the spa
		var spa_sections = [];
		//space to substract from the total of the screen size in order to allocate the google fab cta
		var vmargin = 100;
		//adding sections to the array
		spa_sections = document.getElementsByClassName(spa_target_class);
		//setting the homeimage height
		spa_home_section.style.height = (self.h - vmargin) + "px";
		//setting the sections height according to screen size minus margin
		self.setSpaSectionsHeight(spa_sections,self.h-(self.gutter*2));
		console.log(spa_sections);
	},
	//function to set the spa sections
	setSpaSectionsHeight : function(tar,val){
		for(x=0;x<tar.length;x++){
			tar[x].style.height = val + "px";
		}
	}


};

spa.init();
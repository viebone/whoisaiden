var tools = {
	w : window.innerWidth,
	h : window.innerHeight,
	init : function(){
		var self = this;
		
		self.home();
	},
	home : function(){
		var self = this;
		var homeimage = document.getElementById("section-images__home");
		console.log("width: " + homeimage.style);
		homeimage.style.height = (self.h-200) + "px";
		console.log("height: " + self.h);
	}

};

tools.init();
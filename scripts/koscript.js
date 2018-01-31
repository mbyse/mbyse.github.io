	 /*//collapse skills and work style sections when experience button clicked
	 function collapse1() {
		$('#skills').collapse('hide');
		$('#about').collapse('hide');
		console.log(1);
		};
		 
	 //collapse experience and work style sections when skills button clicked
	  function collapse2() {
		$('#experience').collapse('hide');
		$('#about').collapse('hide');
		console.log(2);
		};
	 
	 //collapse skills and experience sections when work style button clicked
	  function collapse3() {
		$('#experience').collapse('hide');
		$('#skills').collapse('hide');
		console.log(3);
		};
	  
	  //popover on hover
		 $('[data-toggle="popover"]').popover(); 
	  
	  $('.popover-dismiss').popover({
	  trigger: 'focus'
	});
	*/
	
	//Knockout.js
	
	
		var viewModel = function() {
			
			var self = this;
			
			self.experienceList = ko.observable(false);
			self.skillSetList = ko.observable(false);
			self.workStyleList = ko.observable(false);
			
			
			self.experienceVisible = function() {
				self.experienceList(true);
				self.skillSetList(false);
				self.workStyleList(false);
			};
			
			self.skillSetVisible = function() {
				self.experienceList(false);
				self.skillSetList(true);
				self.workStyleList(false);
			};
			
			self.workStyleVisible = function() {		
				self.experienceList(false);
				self.skillSetList(false);
				self.workStyleList(true);
			};
			
		};

		
		ko.applyBindings(new viewModel());
	
(function() {
	'use strict';

	// OMTGDiagrams Collection
	// ----------
	
	app.omtg.Diagrams = Backbone.Collection.extend({
		model : app.omtg.Diagram,
		
		getType : function(id) {
			return this.findWhere({
				id : id
			}).get('type');
		},
	});

})();
	
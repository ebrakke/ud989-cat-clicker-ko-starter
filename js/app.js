var ViewModel = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Fluffy');
	this.src = ko.observable('img/22252709_010df3379e_z.jpg');
	this.level = ko.computed(function() {
		if(this.clickCount() > 10) return 'Infant';
		return 'New Born';
	}, this);

	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
	}
}

ko.applyBindings(new ViewModel());
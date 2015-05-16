var initialCats = [ 
	{ name: 'Fluffy', 
	  src: 'http://www.businessinsider.com/image/4f3433986bb3f7b67a00003c/cute-cat.jpg', 
	  clickCount: 0,
	  nicknames: ['F-dawg', 'Young Fluffy', 'Fluff Muff']
	},
    { name: 'Cloudy', 
      src: 'http://petattack.com/wp-content/uploads/2014/07/little_cute_cat_1920x1080.jpg', 
      clickCount: 0,
      nicknames: ['C-breezy', 'C-Dawn', 'C-ute']
  	},
    { name: 'Misty', 
      src: 'http://www.hintsandthings.co.uk/garden/cats.h1.jpg', 
      clickCount: 0,
  	  nicknames: ['Miester', 'Mist']
  	}]

var Cat = function(data) {
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.src = ko.observable(data.src);
	this.level = ko.computed(function() {
		if(this.clickCount() > 10) return 'Infant';
		return 'New Born';
	}, this);
	this.nicknames = ko.observableArray(data.nicknames);
}

var ViewModel = function() {
	var self = this;
	this.catList = ko.observableArray([]);

	initialCats.forEach(function(catData) {
		self.catList.push(new Cat(catData) );
	});

	this.currentCat = ko.observable(this.catList()[0]);

	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
	}

	this.changeCat = function(cat) {
		self.currentCat(cat);
	}
}

ko.applyBindings(new ViewModel());
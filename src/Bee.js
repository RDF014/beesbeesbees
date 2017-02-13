var Bee = function() {
	Grub.call(this);
	this.age = 5;
	this.color = 'yellow';
};

Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;

// Bee.age = 5;
// Bee.Color = yellow;

Bee.prototype.job = 'keep on growing';


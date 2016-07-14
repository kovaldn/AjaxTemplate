(function () {
  var my = {};
  var form = document.getElementById('registration');

  publicInterface();
  attachEvent();

  function attachEvent() {
    form.addEventListener('submit', validation);
  }

  function validation(e) {
    e.preventDefault();
    var element = document.querySelectorAll('input[type=text]');
    for (var i = 0; i < element.length; i += 1) {
      if (!element[i].value) {
        element[i].classList.add('error');
      } else {
        element[i].classList.remove('error');
      }
    }
  }

  function publicInterface() {
    my = {}
  }

  window.myApp = my;
}())

function Animal(name) {
  this.name = name;
}

Animal.prototype.getName = function () {

  return this.name;
};

function Dog(name, age) {
  Animal.call(this, name);
  this.age = age;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

var dog1 = new Dog('Bobik', 12),
  dog2 = new Dog('Bobik2', 1);

console.log(dog1, dog2);

function Block(obj, classArrName, name) {
  this.obj = obj;
  this.classArrName = classArrName;
  this.name = name;
  this._createElement();
}

Block.prototype._createElement = function () {

  this.elm = document.createElement('button');
  this.elm.classList.add(this.classArrName[0]);
  this.obj.appendChild(this.elm);

  this.attachEvent();
}

Block.prototype.attachEvent = function () {
  this.elm.addEventListener('click', function () {
    console.log('Ups' + this.name);
  }.bind(this));
}


var per1 = new Block(result, ['def', 'active'], 'first');
var per2 = new Block(result, ['def', 'active'], 'second');


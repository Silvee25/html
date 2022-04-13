class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    static displayName = "Point";
    static distance(a, b) {
      const dx = a.x - b.x;
      const dy = a.y - b.y;
  
      return Math.hypot(dx, dy);
    }
  }
  
  const p1 = new Point(5, 5);
  const p2 = new Point(10, 10);
  p1.displayName; // undefined
  p1.distance;    // undefined
  p2.displayName; // undefined
  p2.distance;    // undefined
  
  console.log(Point.displayName);      // "Point"
  console.log(Point.distance(p1, p2));
  
  
  
  class Animal {
    speak() {
        console.log("I am inside speak");
      return this;
    }
    static eat() {
       console.log("I am inside eat method");
      return this;
    }
  }
  
  let obj = new Animal();
  obj.speak(); // the Animal object
  let speak = obj.speak;
  speak(); // undefined
  
  Animal.eat() // class Animal
  let eat = Animal.eat;
  eat();
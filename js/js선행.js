// function user(first, last) {
//   this.firstName = first
//   this.lastName = last
// }

// const miso = new user ('miso', 'Kim')

// console.log(miso)

// const heropy = {
//   name: 'Heropy'
//   normal: function () {
//     console.log(this.name)
//     //normal이라는 매소드는 heropy라는 객체데이터 내부에서 실행되고 있기때문에
//     // 일반함수 호출 위치 특성에 따라 Heropy 라고 잘 호출된다.
//   },
//   arrow: () => {
//     console.log(this.name)
//     // 화살표 함수의 경우 선언된 그 위치에서 this 가 정의되기때문에 호출 위치와는 전혀 상관없다.
//   }
// }
// heropy.normal()
// heropy.arrow() 


// function User(first, last) {
//   this.firstName = first
//   this.lastName - last 
// }
// User.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`
// }

// class User {
//   constructor(first, last) {
//     this.firstName = first
//     this.lastName = last
//   }
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`
//   }
// }

class Vehicle {
  constructor(name, wheel) {
    this.name = name
    this.wheel = wheel
  }
}
const myVehicle = new Vehicle('운송수단', 2)
console.log(myVehicle)

class Bicycle extends Vehicle {
  constructor(name, wheel) {
    super(name, wheel)
  }
}
const myBicycle = new Bicycle('삼천리', 2)
const daughterBicycle = new Bicycle('세발', 3)
console.log(myBicycle)
console.log(daughterBicycle)

class Car extends Vehicle {
  constructor(name, wheel, license) {
    super(name, wheel)
    this.license = license
  }
}
const myCar = new Car('벤츠', 4, true)
const daughtersCar = new Car('포르쉐', 4, false)

console.log(myCar)
console.log(daughtersCar) 
const obj = {
  age: 20,

  printName: function () {
    console.log(this);
    console.log(this.age);
  },


//   printName: () => {
//     console.log(this);
//     console.log(this.age);
//   },
  
  
};

obj.printName();

// DATA
// below data will hold all of the friend number answers
// initially we just set it equal to a "dummy" friend.
// but you could have it be an empty array as well.

var friendArray = [
    {
      name: "Joe",
      photo: "ex linkedIn",
      scores: [""]
    },
    {
        name: "Tom",
        photo: "ex linkedIn",
        scores: [""]
      },
      {
        name: "Nancy",
        photo: "ex linkedIn",
        scores: [""]
      },
      {
        name: "Bob",
        photo: "ex linkedIn",
        scores: [""]
      },
      {
        name: "Allie",
        photo: "ex linkedIn",
        scores: [""]
      },
  ];
  
  // note how we export the array. this makes it accessible to other files using require.
  module.exports = friendArray;
  
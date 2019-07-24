// DATA
// below data will hold all of the friend number answers
// initially we just set it equal to a "dummy" friend.
// but you could have it be an empty array as well.

var friendArray = [
    {
      name: "Joe",
      photo: "ex linkedIn",
      scores: [
          "4",
          "3",
          "5",
          "1",
          "4",
          "3",
          "2",
          "5",
          "1",
          "2"
      ]
    },
    {
        name: "Tom",
        photo: "ex linkedIn",
        scores: [
          "3",
          "4",
          "4",
          "5",
          "4",
          "3",
          "4",
          "5",
          "3",
          "4"
        ]
      },
      {
        name: "Nancy",
        photo: "ex linkedIn",
        scores: [
          "1",
          "5",
          "4",
          "5",
          "1",
          "3",
          "2",
          "4",
          "2",
          "1"
        ]
      },
      {
        name: "Bob",
        photo: "ex linkedIn",
        scores: [
          "5",
          "2",
          "3",
          "4",
          "5",
          "1",
          "3",
          "2",
          "2",
          "1"
        ]
      },
      {
        name: "Allie",
        photo: "ex linkedIn",
        scores: [
          "3",
          "4",
          "4",
          "5",
          "3",
          "4",
          "4",
          "5",
          "3",
          "3"
        ]
      },
  ];
  
  // note how we export the array. this makes it accessible to other files using require.
  module.exports = friendArray;
  


fetch("./BRAND_DRUG.json")
    .then(response => {
        return response.json();
    })
    .then(function (data) {
        console.log(data);

        const usersDataDictionary = _.keyBy(data, 'NAME');
        console.log(usersDataDictionary);

        const uniqueUsersArray = _.values(usersDataDictionary);
        console.log(uniqueUsersArray);

        document.getElementById("jsondata").innerHTML = JSON.stringify(uniqueUsersArray,undefined,4)

        // firebase.database().ref('/').push(uniqueUsersArray);
        // alert("Data is sent to database");
    });

// var mydata = JSON.parse(sample1);
// alert(mydata[0].NAME);
// const users= [
//     {
//       "id": 1,
//       "name": "jhon",
//       "location": "USA",
//       "email": "jhon@xyz.com"
//     },
//     {
//       "id": 2,
//       "name": "doe",
//       "location": "UAE",
//       "email": "doe@xyz.com"
//     },
//     {
//       "id": 3,
//       "name": "alex",
//       "location": "Canada",
//       "email": "alex@xyz.com"
//     },
//     {
//       "id": 4,
//       "name": "bob",
//       "location": "North America",
//       "email": "bob@xyz.com"
//     },
//     {
//       "id": 5,
//       "name": "ali",
//       "location": "Pakistan",
//       "email": "ali@xyz.com"
//     },
//     {
//       "id": 5,
//       "name": "ali",
//       "location": "Pakistan",
//       "email": "ali@xyz.com"
//     },
//      {
//       "id": 2,
//       "name": "doe",
//       "location": "UAE",
//       "email": "doe@xyz.com"
//     },
//     {
//       "id": 3,
//       "name": "alex",
//       "location": "Canada",
//       "email": "alex@xyz.com"
//     },
//   ];

  //Convert object array into data dictionary using 
  //lodash 4.17.15 or above function keyBy. 
  //it takes two @params array and key
  //e.g: 'users' is an object array and 'id' is key.

//   const usersDataDictionary =_.keyBy(data, 'NAME');
//   console.log(usersDataDictionary);

  //Convert data dictionary into object array using
  //lodash function values. 
  //it takes a data dictionary and returns an array
  //e.g: 'usersDataDictionary' is a data dictionary

//   const uniqueUsersArray =_.values(usersDataDictionary);
//   console.log(uniqueUsersArray);
// Import axios (to process api requests)
const axios = require("axios");

// const AjaxWrapper = require("ajax-wrapper");

const fs = require("fs");
const https = require("https");

// Get our list of MTG sets
axios
  .get("https://api.scryfall.com/sets")
  .then((res) => {
    const setObjs = res.data.data;
    const setKeys = Object.keys(setObjs);

    // Get the needed props from each of the returned MTG sets
    const setCodes = [];
    const setCounts = [];

    setKeys.forEach((setKey) => {
      setCodes.push(setObjs[setKey].code);
      setCounts.push(setObjs[setKey].card_count);
      // setObjs[setKey].card_count
      for (let i = 2; i <= 2; i++) {
        axios
          .get(`https://api.scryfall.com/cards/${setObjs[setKey].code}/${i}`)
          .then((res) => {
            if (res.data.data && res.data.data.highres_image) {
              const imgUrl = res.data.data.image_uris.png;

              const file = fs.createWriteStream(
                `./images/${res.data.data.set}_${res.data.data.collector_number}.png`
              );

              const request = http.get(`${imgUrl}`, (response) => {
                response.pipe(file);

                // after download completed close file-stream
                file.on("finish", () => {
                  file.close();
                  console.log(
                    `Download Completed (${res.data.data.set}_${res.data.data.collector_number})`
                  );
                });
              });
            } else return;
          })
          .catch((err) => {
            // console.error(err);
          });
      }
    });
  })
  .catch((err) => {
    console.error(err);
  });

// const setCards = [];
// for (let i = 1; i <= 5; i++) {
//   const apiDefs = {
//     getAllFilms: {
//       url: `https://api.scryfall.com/cards/lea/${i}`,
//       method: "GET",
//       responseType: "json",
//     },
//   };

//   const api = new AjaxWrapper(apiDefs);
//   setCards.push(api.data.data);
//   // setCards
//   //   .push
//   //   await axios
//   //     .get(`https://api.scryfall.com/cards/${setObjs[8].code}/${i}`)
//   //     .then((res) => res.data.data)
//   //     .catch((err) => {
//   //       console.error(err);
//   //     })
//   //   await axiosGet(`https://api.scryfall.com/cards/lea/${i}`)
//   //   ();
// }
// console.log(setCards);

// import ky from "ky";

// async function getData() {
//   try {
//     const data = await ky.get("https://api.scryfall.com/cards/lea/1").json();
//     // console.log(data.count);
//     // console.log(data.products);
//     console.log("test", data);
//   } catch (error) {
//     if (error.response) {
//       console.log("error", error.response.status);
//     } else {
//       console.log("error", error.message);
//     }
//   }
// }

// getData();

// const xhr = new XMLHttpRequest();
// //open a get request with the remote server URL
// xhr.open("GET", "https://api.scryfall.com/cards/lea/1");
// //send the Http request
// xhr.send();

// //triggered when the response is completed
// xhr.onload = () => {
//   if (xhr.status === 200) {
//     //parse JSON data
//     data = JSON.parse(xhr.responseText);
//     console.log(data);
//   } else if (xhr.status === 404) {
//     console.log("No records found");
//   }
// };

// Get list of sets
// const setXhr = new XMLHttpRequest();
// //open a get request with the remote server URL
// setXhr.open("GET", "https://api.scryfall.com/sets");
// //send the Http request
// setXhr.send();

// //triggered when the response is completed
// setXhr.onload = () => {
//   if (setXhr.status === 200) {
//     //parse JSON data
//     const allSets = JSON.parse(setXhr.responseText);
//     //
//     const setObjs = allSets.data;
//     const setKeys = Object.keys(setObjs);

//     // Get the needed props from each of the returned MTG sets
//     const setCodes = [];
//     const setCounts = [];

//     const allCards = [];
//     setKeys.forEach((setKey) => {
//       setCodes.push(setObjs[setKey].code);
//       setCounts.push(setObjs[setKey].card_count);
//       const setCards = [];
//       for (let i = 1; i <= setObjs[setKey].card_count; i++) {
//         setTimeout(() => {});

//         const cardXhr = new XMLHttpRequest();
//         //open a get request with the remote server URL
//         cardXhr.open(
//           "GET",
//           `https://api.scryfall.com/cards/${setObjs[setKey].code}/${i}`
//         );
//         //send the Http request
//         cardXhr.send();

//         //triggered when the response is completed
//         cardXhr.onload = () => {
//           if (cardXhr.status === 200) {
//             //parse JSON data
//             data = JSON.parse(cardXhr.responseText);
//             setCards.push(data);
//           } else if (cardXhr.status === 404) {
//             console.log("No records found");
//           }
//         };
//         // console.log(setCards);
//       }
//       allCards.push(setCards);
//       // console.log(setCards[0]);
//     });
//     console.log(allCards);

//     //     // const setCards = [];
//     //     // for (let i = 1; i <= setObjs[80].card_count; i++) {
//     //     //   setCards.push(
//     //     //     // await axios
//     //     //     //   .get(`https://api.scryfall.com/cards/${setObjs[8].code}/${i}`)
//     //     //     //   .then((res) => res.data.data)
//     //     //     //   .catch((err) => {
//     //     //     //     console.error(err);
//     //     //     //   })
//     //     //     axiosGet(`https://api.scryfall.com/cards/${setObjs[8].code}/${i}`)
//     //     //   );
//     //     // }
//     //     // console.log(setCards);
//     //
//   } else if (setXhr.status === 404) {
//     console.log("No records found");
//   }
// };

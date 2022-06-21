// Import axios (to process api requests)
const axios = require("axios");

// const fs = require("fs");

// Get our list of MTG sets
axios
  .get("https://api.scryfall.com/sets")
  .then((res) => {
    const setObjs = res.data.data;
    const setKeys = Object.keys(setObjs);

    // Get the needed props from each of the returned MTG sets
    const setCodes = [];
    const setCounts = [];

    const allCards = [];
    setKeys.forEach((setKey) => {
      // setCodes.push(setObjs[setKey].code);
      // setCounts.push(setObjs[setKey].card_count);

      const setCards = [];
      for (let i = 1; i <= setObjs[setKey].card_count; i++) {
        setCards.push(
          axios
            .get(
              `https://api.scryfall.com/cards/${setObjs[setKey].code}/${setObjs[setKey].card_count}`
            )
            .then((res) => Promise.resolve(res.data.data))
        );
      }
      console.log(setCards);
    });
    // console.log(setCodes[2]);
    // console.log(setCounts[2]);

    // Get the info for every MTG card in each set that we sorted through earlier
    // setCodes.forEach(element => {

    // });
  })
  .catch((err) => {
    console.error(err);
  });

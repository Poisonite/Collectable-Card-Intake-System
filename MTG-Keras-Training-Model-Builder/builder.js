// Import axios (to process api requests)
const axios = require("axios");

// Used to handle all file system interactions
const fs = require("fs");

// Import our bulk data
const bulkData = require("./bulk_data/scryfall-bulk-data.json");

// Download unique card artwork images (as full card graphic) from bulk Scryfall API card data (manually downloaded)
const uniqueCardArtPics = async () => {
  // Convert our card data into a form we can use
  const cardArr = JSON.parse(JSON.stringify(bulkData));

  // cardArr.length
  for (let i = 3574; i < cardArr.length; i++) {
    if (cardArr[i] && cardArr[i].image_uris) {
      // Get the download url of the image of the card that we want
      const imgUrl = cardArr[i].image_uris.png;

      try {
        // Download our card image
        const cardImg = await axios.get(`${imgUrl}`, {
          responseType: "arraybuffer",
        });
        // Write the data from the image download to a new file
        fs.writeFileSync(`./images/${cardArr[i].id}.png`, cardImg.data);
        console.info(`Wrote: '${cardArr[i].name}' (${cardArr[i].id}) to disk.`);
      } catch (err) {
        console.log(err);
      }
    }
  }
};

// Run our function
uniqueCardArtPics();

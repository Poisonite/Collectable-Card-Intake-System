// Import axios (to process api requests)
const axios = require("axios");

// Used to handle all file system interactions
const fs = require("fs");

// Used to chunk our json since it's greater than 512mb and then emit it as an event stream
const JSONStream = require("JSONStream");
const es = require("event-stream");

// Download unique card artwork images (as full card graphic) from bulk Scryfall API card data (manually downloaded)
const uniqueCardArtPics = async () => {
  // Track the number of good and bad cards in the dataset
  //    i.e. cards that have or don't have a png img
  let goodCount = 0;
  let badCount = 0;

  // Get event stream from the provided file path
  getCardStream("./bulk_data/all-cards.json").pipe(
    es.map(async (card) => {
      // Make sure our card format is valid
      if (card && card.image_uris) {
        // Get the download url of the image of the card that we want
        const imgUrl = card.image_uris.png;

        try {
          // Download our card image
          const cardImg = await axios.get(`${imgUrl}`, {
            responseType: "arraybuffer",
          });
          // Write the data from the image download to a new file
          fs.writeFileSync(`./images/${card.id}.png`, cardImg.data);
          console.info(
            `Wrote: '${card.name}' (${card.id}) to disk. - Good: ${goodCount}, Bad: ${badCount}`
          );
          goodCount = goodCount + 1;
        } catch (err) {
          // console.log(`Invalid Card`);
          badCount = badCount + 1;
        }
      }
    })
  );
};

// Pure function to chunk and stream JSON files that are too large to parse in a single buffer
const getCardStream = (filePath) => {
  const bulkData = `${filePath}`;
  const stream = fs.createReadStream(bulkData, { encoding: "utf8" });
  const parser = JSONStream.parse("*");
  return stream.pipe(parser);
};

// Run our function
uniqueCardArtPics();

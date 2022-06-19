// Retrieve the card data from scryfall API using axios
axios
  .get("https://api.scryfall.com/cards/lea/1")
  .then((res) => {
    console.log(res.data);

    const releaseDateRaw = res.data.released_at;

    const [year, month, day] = releaseDateRaw.split("-");

    const releaseDateResult = [month, day, year].join("/");

    // Build res html payload from returned data
    document.getElementById("resData").innerHTML = `
    <h2>
        Name: <strong>${res.data.name}</strong>
    </h2>
    <h3>
        Set: <strong>${res.data.set_name}</strong>
        <br>
        Release Date: <strong>${releaseDateResult}</strong>
        <br>
        Collector Number: <strong>${res.data.collector_number}</strong>
    </h3>
    <img src="${res.data.image_uris.png}" alt="${res.data.name}" height="700px">
    `;
  })
  .catch((err) => {
    console.error(err);
  });

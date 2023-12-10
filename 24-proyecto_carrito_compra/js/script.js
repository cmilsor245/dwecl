const JSON_DATA_FILE_PATH = "data/data.json";

async function getJSONData() {
  try {
    const response = await fetch(JSON_DATA_FILE_PATH);
    const data = await response.json();
    displayData(data);
  } catch (error) {
    console.error('Error fetching JSON data:', error);
  }
}

function displayData(data) {
  console.log(data);
}

getJSONData();
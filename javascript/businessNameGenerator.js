// create a business name generator by combining list of adjectives and shop name and another word

const adjectives = "Crazy Amazing Fire";
const shopName = "Engine Foods Garments";
const anotherWord = "Bros Limited Hub";

const adjList = adjectives.split(" ");
const shopList = shopName.split(" ");
const anoList = anotherWord.split(" ");

// console.log(adjList.length); //3

// generate business name
for (let i = 0; i < adjList.length; i++) {
  for (let j = 0; j < shopList.length; j++) {
    for (let k = 0; k < anoList.length; k++) {
      console.log(`${adjList[i]} ${shopList[j]} ${anoList[k]}`);
    }
  }
}

// Crazy Engine Bros
// Crazy Engine Limited
// Crazy Engine Hub
// Crazy Foods Bros
// Crazy Foods Limited
// Crazy Foods Hub
// Crazy Garments Bros
// Crazy Garments Limited
// Crazy Garments Hub
// Amazing Engine Bros
// Amazing Engine Limited
// Amazing Engine Hub
// Amazing Foods Bros
// Amazing Foods Limited
// Amazing Foods Hub
// Amazing Garments Bros
// Amazing Garments Limited
// Amazing Garments Hub
// Fire Engine Bros
// Fire Engine Limited
// Fire Engine Hub
// Fire Foods Bros
// Fire Foods Limited
// Fire Foods Hub
// Fire Garments Bros
// Fire Garments Limited
// Fire Garments Hub

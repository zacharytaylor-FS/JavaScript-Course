const SUPERHERO_TOKEN = "814072426696849";
const BASE_URL = `https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`;
const newHero = document.getElementById("newHeroButton");
const heroImageDiv = document.getElementById("heroName");
const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");

const getSuperHero = (id) => {
	//* name 👉🏾 base_url/search/batman
	//* json.result[0].image.url

	//* id: 👉🏾 base_url/id
	//* json.image.url

	fetch(`${BASE_URL}/${id}`)
		.then((response) => response.json())
		.then((json) => {
			console.log(json.biography);
			const superHero = json;
			showHeroInfo(superHero);
		});
};

const statToEmoji = {
	intelligence: "🧠 ",
	strength: "💪 ",
	speed: "⚡️ ",
	durability: "🫁 ",
	power: "🏋️‍♀️ ",
	combat: "🤺 ",
};

const showHeroInfo = (character) => {
	const name = `${character.name}`;

	const img = `<img src=${character.image.url} height=300 width=300>`;

	const stats = Object.keys(character.powerstats)
		.map((stat) => {
			return `<p class="card-text">${statToEmoji[stat]}${stat.toUpperCase()}: ${
				character.powerstats[stat]
			}</p>`;
		})
		.join("");

	document.getElementById("heroName").innerText = `${name}`;
	document.getElementById("heroImg").src = `${character.image.url}`;
	document.getElementById("heroStat").innerHTML = `${stats}`;
};

const getSearchSuperHero = (name) => {
	document.getElementById("heroCard").style.display = "block";
	console.log(searchInput.value);
	fetch(`${BASE_URL}/search/${name}`)
		.then((response) => response.json())
		.then((json) => {
			const hero = json.results[0];
			showHeroInfo(hero);
		});
};

const randomHero = () => {
	document.getElementById("heroCard").style.display = "block";
	const numberOfHeroes = 731;
	return Math.floor(Math.random() * numberOfHeroes + 1);
};

newHero.onclick = () => getSuperHero(randomHero());

searchButton.onclick = () => getSearchSuperHero(searchInput.value);

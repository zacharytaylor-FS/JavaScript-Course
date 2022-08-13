// https://superheroapi.com/api/814072426696849/character-id
const getSuperHero = () => {
	fetch("https://superheroapi.com/api.php/814072426696849/245");
	then((response) => response.json()).then((json) => console.log(json));
};

getSuperHero();

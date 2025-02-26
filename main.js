const movieForm = document.querySelector("#form");
const movieInput = document.querySelector("#input");
const movieSelect = document.querySelector("#select");
const movieOta = document.querySelector("#moviesWrapper");



// pokiSelect.addEventListener("change", (e) => {
//     e.preventDefault()
//   let sortedPokemons = [...pokemons];

//   if (pokiSelect.value === "sort") {
//     sortedPokemons.sort((a, b) => a.name.localeCompare(b.name));
//   } else if (pokiSelect.value === "sort") {
//     sortedPokemons.sort((a, b) => b.name.localeCompare(a.name));
//   }

//   renderMovies(sortedPokemons);
// });




function renderMovies(kino) {
    movieOta.innerHTML = ""; 

    kino.slice(0, 40).forEach(objectlar => {
        const newItem = document.createElement("li");
        newItem.className = "w-[400px] bg-[#000] rounded flex flex-col items-center p-4 shadow-lg";

        newItem.innerHTML = `
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr389pbFkuYiYU77dKzX1ZLG3e4DWjVHnxnQ&s" alt="${objectlar.title}" class="w-full h-[300px] object-cover rounded">
            <h2 >${objectlar.Title}</h2>
            <div stylle="width:200px; ">
                <span>⭐ ${objectlar.imdb_rating}</span>
                <span>📅 ${objectlar.movie_year}</span>
                <span>⏳ ${objectlar.runtime} min</span>
            </div>
            <p class="text-sm text-gray-500 mt-2">${objectlar.Categories}</p>
        `;

        movieOta.appendChild(newItem);
    });
}
renderMovies(movies);
movieForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputQiymati = movieInput.value.toLowerCase().trim();

    const filterlanganKinolar = movies.filter(movie =>
        movie.Title && typeof movie.Title === "string" && movie.Title.toLowerCase().includes(inputQiymati)
    );

    renderMovies(filterlanganKinolar);
});

if (weightFilter === "Sort") {
    filteredPokemons.sort((a, b) => parseFloat(a.weight) - parseFloat(b.weight));
} else if (weightFilter === "FromWeight") {
    filteredPokemons.sort((a, b) => parseFloat(b.weight) - parseFloat(a.weight));
}

if (heightFilter === "TomHeight") {
    filteredPokemons.sort((a, b) => parseFloat(a.height) - parseFloat(b.height));
} else if (heightFilter === "FromHeight") {
    filteredPokemons.sort((a, b) => parseFloat(b.height) - parseFloat(a.height));
}

renderPokemon(filteredPokemons);
;

renderPokemon(pokemons);


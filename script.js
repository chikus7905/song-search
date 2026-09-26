const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

const results = document.getElementById("results");
const loading = document.getElementById("loading");
const message = document.getElementById("message");


searchBtn.addEventListener("click", searchMusic);
searchInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        searchMusic();
    }

});


async function searchMusic() {
    const searchTerm = searchInput.value.trim();
    // Check empty input
    if (searchTerm === "") {
        message.textContent = "Please enter a song or artist name.";
        results.innerHTML = "";
        return;
    }

    // Clear old results
    results.innerHTML = "";
    message.textContent = "";
    // Show loading
    loading.style.display = "block";
    try {
        // Create API URL
        const url =`https://itunes.apple.com/search?term=${encodeURIComponent(searchTerm)}&entity=song&limit=20`;
        // Send GET request
        const response = await fetch(url);
        // Check if request was successful
        if (!response.ok) {
            throw new Error("API request failed");
        }
        // Convert response into JSON
        const data = await response.json();
        // Hide loading
        loading.style.display = "none";
        // Check if results exist
        if (data.results.length === 0) {
            message.textContent = "No songs found.";
            return;
        }
        // Display results
        data.results.forEach(song => {
            // Create card
            const card = document.createElement("div");
            card.classList.add("card");
            // Get larger artwork
            const imageUrl = song.artworkUrl100
                ? song.artworkUrl100.replace("100x100", "600x600")
                : "";
            card.innerHTML = `
                <img src="${imageUrl}" alt="${song.trackName}">
                <h2>${song.trackName}</h2>
                <p>
                    <strong>Artist:</strong>
                    ${song.artistName}
                </p>

                <p>
                    <strong>Album:</strong>
                    ${song.collectionName || "Unknown"}
                </p>

                <p>
                    <strong>Genre:</strong>
                    ${song.primaryGenreName || "Unknown"}
                </p>

                <p>
                    <strong>Release:</strong>
                    ${song.releaseDate
                        ? new Date(song.releaseDate).getFullYear()
                        : "Unknown"}
                </p>

                ${
                    song.previewUrl
                    ?
                    `
                    <audio controls>
                        <source src="${song.previewUrl}" type="audio/mp4">
                    </audio>
                    `
                    :
                    "<p>No preview available</p>"
                } `;

            // Add card to webpage
            results.appendChild(card);
        });


    } catch (error) {
        loading.style.display = "none";
        message.textContent =
            "Something went wrong. Please try again.";
        console.error(error);

    }

}
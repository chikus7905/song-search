🎵 iTunes Music Search

A simple and responsive music search website built with HTML, CSS, and JavaScript using the iTunes Search API.

This project was created to practice working with REST APIs, Fetch API, asynchronous JavaScript, JSON data, and dynamic DOM manipulation.

📸 Preview

"iTunes Music Search"

✨ Features

- 🔎 Search songs and artists
- 🎵 Display song information dynamically
- 🖼️ Display album artwork
- 👤 Show artist name
- 💿 Show album name
- 🎼 Show music genre
- 📅 Show release year
- ▶️ Play available song previews
- ⏳ Loading state
- ❌ No-results and error handling
- 📱 Responsive design
- ⌨️ Search using the Enter key

🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Fetch API
- iTunes Search API
- DOM Manipulation

🔌 API

This project uses the iTunes Search API to retrieve music information.

Example API request:

https://itunes.apple.com/search?term=arijit+singh&entity=song&limit=20

The API provides information such as:

- Song name
- Artist name
- Album name
- Genre
- Release date
- Album artwork
- Preview URL

🔄 How It Works

User enters a song or artist
          ↓
JavaScript gets the search term
          ↓
Fetch API sends a GET request
          ↓
iTunes Search API
          ↓
JSON response
          ↓
JavaScript processes the data
          ↓
Music cards are created dynamically
          ↓
Results are displayed

📂 Project Structure

itunes-music-search/
│
├── index.html
├── style.css
├── script.js
├── screenshot.png
└── README.md

🧠 What I Learned

- How APIs work
- How to make API requests using "fetch()"
- Using "async/await"
- Converting API responses into JSON
- Working with JSON objects and arrays
- Handling API errors with "try/catch"
- Dynamically creating HTML elements
- Displaying API-provided images
- Handling loading and empty states
- Using "encodeURIComponent()"
- Working with click and keyboard events
- Creating responsive layouts

🚀 How to Run

1. Clone the repository:

git clone https://github.com/chiku7905/itunes-music-search.git

2. Open the project folder.

3. Open "index.html" in your browser.

No backend or API key is required.

🎯 Project Purpose

The main purpose of this project was to learn how to consume a public API and display its data dynamically using vanilla JavaScript.

The project focuses on understanding the complete API workflow:

Request → Response → JSON → JavaScript → DOM

🔮 Future Improvements

- Add pagination
- Add favorite songs using Local Storage
- Add dark mode
- Add search filters
- Improve the music player
- Add album details
- Convert the project to React


GitHub: https://github.com/chiku7905

Portfolio: https://chiku7905.github.io/CH/

LinkedIn: https://www.linkedin.com/in/kartavyas21/

---

⭐ If you like this project, consider giving the repository a star!

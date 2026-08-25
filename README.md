# Rock Paper Scissors

A simple one-page Rock, Paper, Scissors game built with **Python (Flask)** on the
backend and **HTML/CSS/JavaScript** on the frontend.

## Project Structure

```
rps_game/
├── app.py                # Flask backend (game logic + score tracking)
├── requirements.txt      # Python dependencies
├── templates/
│   └── index.html        # Main page
└── static/
    ├── style.css          # Styling
    └── script.js          # Frontend logic (calls the backend API)
```

## Features

- Click Rock, Paper, or Scissors to play against the computer
- Computer picks randomly using Python's `random` module
- Live scoreboard (Wins / Losses / Ties) tracked server-side via session
- Animated reveal of both choices with a result message
- Reset Score button to start fresh

## Setup & Run

1. **Create a virtual environment (optional but recommended):**
   ```bash
   python -m venv venv
   source venv/bin/activate      # Windows: venv\Scripts\activate
   ```

2. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

3. **Run the app:**
   ```bash
   python app.py
   ```

4. **Open your browser** and go to:
   ```
   http://127.0.0.1:5000
   ```

## How It Works

- The frontend (`index.html` + `script.js`) sends your choice (rock/paper/scissors)
  to the `/play` endpoint via a `POST` request.
- The Flask backend (`app.py`) randomly picks a computer choice, determines the
  winner, updates the score in the session, and returns everything as JSON.
- The page animates the reveal, shows the result, and updates the scoreboard.
- The `/reset` endpoint clears the score back to zero.

## Note

`app.secret_key` in `app.py` is set to a placeholder value for session support.
If you deploy this anywhere public, change it to a proper secret value.

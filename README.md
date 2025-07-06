# Secure Editor

Secure Editor is a browser-based code editor with real-time vulnerability detection, multi-language support, and user authentication. It helps developers write secure code by providing instant feedback on potential vulnerabilities as they type.

---

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **Real-time Vulnerability Detection:** Instantly scan code for security issues using a machine learning backend.
- **Multi-language Support:** Write and execute code in JavaScript, Python, and TypeScript.
- **Integrated Code Execution:** Run code directly in the browser via the Piston API.
- **User Authentication:** Sign up and sign in to manage your files securely.
- **File Management:** Organize your code files in a tree view.
- **Modern UI:** Built with React, Material UI, and Monaco Editor.

---

## Project Structure

```
secure-editor/
├── public/
├── server/
│   ├── api/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── app.js
├── src/
│   ├── components/
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

---

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn
- Python 3 (for ML backend)
- MongoDB (for user data)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/secure-editor.git
   cd secure-editor
   ```

2. **Install client dependencies:**
   ```sh
   npm install
   ```

3. **Install server dependencies:**
   ```sh
   cd server
   npm install
   ```

4. **Set up environment variables:**
   - Edit `server/.env` with your MongoDB URI and secret.

5. **(Optional) Set up ML backend:**
   ```sh
   pip install flask flask-cors torch transformers
   python src/components/app.py
   ```

### Running the Application

1. **Start the backend server:**
   ```sh
   cd server
   node app.js
   ```

2. **Start the React frontend:**
   ```sh
   cd ..
   npm start
   ```

3. **(Optional) Start the ML backend:**
   ```sh
   python src/components/app.py
   ```

4. **Open your browser and visit:**
   ```
   http://localhost:3000
   ```

---

## Usage

- **Sign Up / Sign In:** Create an account or log in to access the editor.
- **Editor:** Write code, switch languages, and run your code.
- **Vulnerability Detection:** Click "Check Code Vulnerability" to scan your code for security issues.
- **File Management:** Use the file tree to organize your code files.

---

## Technologies Used

- **Frontend:** React, Material UI, Monaco Editor
- **Backend:** Node.js, Express, MongoDB, Mongoose
- **ML Backend:** Python, Flask, HuggingFace Transformers
- **Code Execution:** Piston API

---

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements and bug fixes.


# 🌡️ Celsius to Fahrenheit Converter

A simple React application that converts temperature from **Celsius to Fahrenheit**. It includes input validation and provides real-time feedback to the user.

---



## 🧾 Features

- ✅ Convert Celsius to Fahrenheit
- ✅ Input validation with user-friendly error messages
- ✅ Clean UI with functional React components
- ✅ Result displayed with precision up to 2 decimal places

---

## 📁 Folder Structure
celciustofahreinheit-practicereepo/
│
├── public/
│   └── index.html
│
├── src/
│   ├── components/
│   │   └── InputField.jsx       # Reusable input component
│   ├── TemperatureConvo.jsx     # Main temperature converter logic
│   ├── App.js                   # Root component
│   └── index.js                 # Entry point for React
│
├── .gitignore
├── package.json
├── README.md
└── vite.config.js / webpack.config.js (depends on your setup)

## ⚙️ Installation and Setup

Follow these steps to run the app on your local machine:

1. **Clone the repository**:

```bash
git clone https://github.com/anamolshrestha-41/celciustofahreinheit-practicereepo.git
cd celciustofahreinheit-practicereepo
````

2. **Install dependencies**:

```bash
npm install
```

3. **Start the development server**:

```bash
npm start
```

> App will run at: `http://localhost:3000`

---

## 🧠 How It Works

* User types a temperature value in Celsius.
* On clicking **Submit**, the app:

  * Trims and checks if the input is a valid number.
  * If invalid: shows an error message.
  * If valid: converts the Celsius to Fahrenheit.
  * Displays the result with 2 decimal places.

---

## 🧰 Tech Stack

* **React** (with `useState`)
* **JavaScript (ES6+)**
* **HTML5 + CSS3**
* Vite / CRA (whichever you're using)

---

## 🔮 Possible Improvements

* [ ] Add conversion from Fahrenheit to Celsius
* [ ] Live conversion while typing
* [ ] Add temperature unit switch (toggle C ↔ F)
* [ ] Add tests with Jest and React Testing Library
* [ ] Better mobile styling or responsive design

---

## 📘 Example Usage

* Input: `25`

* Output: `77.00°F`

* Input: `abc`

* Output: `Please enter a valid number`

---

## 📝 License

This project is licensed under the **MIT License** — you are free to use, modify, and distribute it.

---

## 👤 Author

**Anamol Shrestha**
🔗 [GitHub Profile](https://github.com/anamolshrestha-41)
💬 Learning MERN Stack with AI/ML (Python)

---

## 🙌 Contributions

Feel free to fork the repo and submit a pull request. Contributions are welcome!

---

```

Let me know if you want me to include an actual screenshot, or help you deploy the app on GitHub Pages, Netlify, or Vercel.
```

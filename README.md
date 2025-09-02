Fahmiac5
fahmiac5
Invisible

AhmedGuedri
[AMG]
 — 8/25/2025 10:34 AM
Classes (héritage) = ancien style, orienté objet.

Hooks (fonctions) = nouveau style, orienté composition (réutilisation facile, code plus clair).
Différence fondamentale

Héritage (classes) → tu crées un composant en héritant de React.Component.

Hooks (fonctions) → tu prends une fonction normale et tu "branche" des fonctionnalités (état, effets, contexte, etc.) grâce aux Hooks (useState, useEffect, etc.).
AhmedGuedri
[AMG]
 — 8/25/2025 11:35 AM
 Day 1 : 
Introduction à React JS
Démarrage avec React
Composants React et Props
DOM, Virtual DOM et Clés
Hooks et États dans React
Hook use Effect
AhmedGuedri
[AMG]
 — 8/26/2025 9:26 AM
Fahmiac5 — 8/26/2025 9:30 AM
5 mn w nebdew
AhmedGuedri
[AMG]
 — 8/26/2025 9:30 AM
K
Fahmiac5
 started a call that lasted 2 hours. — 8/26/2025 9:36 AM
AhmedGuedri
[AMG]
 — 8/26/2025 11:24 AM
Kifeh taayet lil Navbar.js
kifeh tzid route fil div class app
kifeh nzid l bootstrap 
 <nav>
        <Link to="/">Accueil</Link> |{" "}
        <Link to="/About">À propos</Link> |{" "}
     
      </nav>
AhmedGuedri
[AMG]
 — 8/27/2025 9:30 AM
5min w nabdou ?
Fahmiac5
 started a call that lasted 2 hours. — 8/27/2025 9:35 AM
AhmedGuedri
[AMG]
 — 8/27/2025 9:35 AM
Omw
Nraka7 l wo mic
AhmedGuedri
[AMG]
 — 8/27/2025 10:33 AM
import React, { useState } from "react";

const Home = () => {
 const [nom, setNom] = useState("");
 const [email, setEmail] = useState("");
 const handleSubmit = (e) => {
 e.preventDefault();
 console.log("Nom :", nom);
 console.log("Email :", email);
 };

 const [erreur, setErreur] = useState("");
if (!email.includes("@")) {
 setErreur("Veuillez entrer une adresse email valide.");
 } else {
 setErreur("");
 console.log("Email valide :", email);
 }
 {erreur && <p style={{ color: "red" }}>{erreur}</p>}
 
 return (
 <form onSubmit={handleSubmit}>
 <label>Nom :</label>
 <input type="text" value={nom}
 onChange={(e) => setNom(e.target.value)} />
 <label>Email :</label>
 <input type="email" value={email}
 onChange={(e) => setEmail(e.target.value)} />
 <button type="submit">Soumettre</button>
 </form>
);
};

export default Home;
Fahmiac5 — 8/27/2025 10:35 AM
import React, { useState, useEffect } from "react";

const Home = () => {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [erreur, setErreur] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Nom :", nom);
    console.log("Email :", email);
  };

  useEffect(() => {
    if (email && !email.includes("@")) {
      setErreur("Veuillez entrer une adresse email valide.");
    } else {
      setErreur("");
    }
  }, [email]); // ✅ Only runs when email changes

  return (
    <form onSubmit={handleSubmit}>
      <label>Nom :</label>
      <input
        type="text"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
      />
      <label>Email :</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {erreur && <p style={{ color: "red" }}>{erreur}</p>}
      <button type="submit">Soumettre</button>
    </form>
  );
};

export default Home;
AhmedGuedri
[AMG]
 — 8/27/2025 10:59 AM
//Créez un programme qui affiche la date actuelle dans ce format : Lundi, 13 Janvier 2025.
const jours = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
const mois = ["Janvier", "Février", "Mars", "Avril",
    "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
const date = new Date();
const jourSemaine = jours[date.getDay()];
const jourMois = date.getDate();
const moisAnnee = mois[date.getMonth()];
const annee = date.getFullYear();
console.log(`Aujourd'hui, nous sommes le ${jourSemaine}, ${jourMois} ${moisAnnee} ${annee}.`);
//Importez le module util.js dans un fichier principal et testez-le
const util = require('./util');
console.log("Conversion 25°C en Fahrenheit :", util.celsiusToFahrenheit(25));
AhmedGuedri
[AMG]
 — 8/27/2025 11:34 AM
https://github.com/GuedriAhmed
GitHub
GuedriAhmed - Overview
GuedriAhmed has 2 repositories available. Follow their code on GitHub.
Image
AhmedGuedri
[AMG]
 — 8/28/2025 9:28 AM
2 min w nabdou ?
Fahmiac5 — 8/28/2025 9:28 AM
ok
AhmedGuedri
 started a call that lasted 2 hours. — 8/28/2025 9:32 AM
AhmedGuedri
[AMG]
 — 8/28/2025 10:11 AM
https://www.w3schools.com/tags/tag_hn.asp
W3Schools offers free online tutorials, references and exercises in all the major languages of the web. Covering popular subjects like HTML, CSS, JavaScript, Python, SQL, Java, and many, many more.
Image
// Middleware global : affiche l'heure de la requête
app.use((req, res, next) => {
  const now = new Date();
  console.log(`[${now.toLocaleString()}] ${req.method} ${req.url}`);
  next(); // Passe au middleware suivant ou à la route
});
AhmedGuedri
[AMG]
 — 8/28/2025 10:33 AM
ServeurNode structureAvecExpress.js
AhmedGuedri
[AMG]
 — 8/28/2025 10:57 AM
npm run dev
const getUserById = (req, res) => {
 const userId = req.params.id;
 // Logique pour obtenir un utilisateur par ID (exemple fictif)
 const user = { id: userId, name: 'Utilisateur ' + userId };
 res.json(user);
}
module.exports = { getUserById };
AhmedGuedri
[AMG]
 — 8/28/2025 11:33 AM
const userService = require("../services/userService");

// Controller qui appelle le service
const getUserById = (req, res) => {
  const { id } = req.params;
  const user = userService.findUserById(id);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "Utilisateur non trouvé" });
  }
};

module.exports = { getUserById };
AhmedGuedri
[AMG]
 — 8/29/2025 9:30 AM
Fahmiac5 — 8/29/2025 9:35 AM
mawjoud ?
AhmedGuedri
[AMG]
 — 8/29/2025 9:35 AM
ofc
call when u ready
Fahmiac5
 started a call that lasted 2 hours. — 8/29/2025 9:37 AM
AhmedGuedri
[AMG]
 — 8/29/2025 10:47 AM
www.mongodb.com/try/download/community-kubernetes-operator
AhmedGuedri
[AMG]
 — 8/31/2025 7:29 PM
ghodwa nafs lwa9t
don't forget
9:30
Fahmiac5 — 8/31/2025 10:58 PM
ay
AhmedGuedri
[AMG]
 — Yesterday at 9:30 AM
call when u ready 
Fahmiac5
 started a call that lasted 2 hours. — Yesterday at 9:31 AM
AhmedGuedri
[AMG]
 — Yesterday at 10:05 AM
node --inspect src/server.js
AhmedGuedri
[AMG]
 — Yesterday at 10:15 AM
npm install --save-dev jest
AhmedGuedri
[AMG]
 — Yesterday at 10:24 AM
--detectOpenHandles
AhmedGuedri
[AMG]
 — Yesterday at 11:15 AM
async function getUsers(req, res) {
  try {
    const users = await User.find();
    res.status(200).json(users); // ← très important
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
}
--------
test('GET /api/users retourne la liste des utilisateurs', async () => {
  const response = await request(app).get('/api/users');
  expect(response.status).toBe(200);
  expect(response.body).toEqual([
   { "_id": "68b17e5c3a38603f08bec872", "username": "Alice", "email": "alice@example.com", "password": "securepassword", "v": 0 },
  { "_id": "68b17e6bb54c61d96a9ff7fe", "username": "Alice", "email": "alice@example.com", "password": "securepassword", "v": 0 },
  { "_id": "68b17e7b0937eef77dc1cf42", "username": "Alice", "email": "alice@example.com", "password": "securepassword", "__v": 0 }
  ]);
}, 10000); // 10 secondes
Fahmiac5 — Yesterday at 11:29 AM
https://www.linkedin.com/jobs/view/4293535551
Vinod Patel Group hiring Full Stack Developer in Suva, Central, Fij...
Posted 3:43:06 AM. About the RoleWe are seeking a Full Stack Developer (front-end focus) to support and enhance our…See this and similar jobs on LinkedIn.
AhmedGuedri
[AMG]
 — Yesterday at 11:31 AM
Image
https://open.spotify.com/intl-fr/track/3iB8eciGU9vZkaDYkz7Ir9?si=ff687f6c145145b8

AhmedGuedri
[AMG]
 — 9:29 AM
Wc w nji
Fahmiac5 — 9:35 AM
ki tarja3 otlob
AhmedGuedri
 started a call. — 9:38 AM
AhmedGuedri
[AMG]
 — 9:44 AM
https://www.youtube.com/watch?v=P_L-06VRcBI&list=PLnZgHKyxHOEBDDNhEhcx6SJBMa_uqfWcM
YouTube
Code With Yousaf
MERN Stack Employee Management System – Project Overview & File S...
Image
Fahmiac5 — 10:42 AM
https://tailwindcss.com/docs/installation/using-vite
Installing with Vite - Installation
Integrate Tailwind CSS with frameworks like Laravel, SvelteKit, React Router, and SolidJS.
Installing with Vite - Installation
AhmedGuedri
[AMG]
 — 11:47 AM
# Welcome to Employee Management System

We'll walk you through the project overview and explain the file structure for building a complete employee management system using MongoDB, Express, React, and Node.js.

## Project Setup
Expand
README.md
2 KB
﻿
# Welcome to Employee Management System

We'll walk you through the project overview and explain the file structure for building a complete employee management system using MongoDB, Express, React, and Node.js.

## Project Setup

### Frontend

1. Create a `frontend` folder:
    ```bash
    mkdir frontend
    cd frontend
    ```
2. Initialize the project with Vite:
    ```bash
    npm create vite@latest
    ```
3. Install dependencies:
    ```bash
    npm install
    npm install react-data-table-component styled-components axios react-icons react-router-dom tailwindcss postcss autoprefixer
    npm install tailwindcss @tailwindcss/vite
    ```

### Backend

1. Create a `server` folder:
    ```bash
    mkdir server
    cd server
    ```
2. Initialize Node.js project:
    ```bash
    npm init -y
    ```
3. Install backend dependencies:
    ```bash
    npm install bcrypt cors express jsonwebtoken mongoose multer nodemon path
    ```
4. Create an `index.js` file for your server code.

5. Update `package.json` to add a start script:
    ```json
    "scripts": {
      "start": "nodemon --env-file=.env index.js"
    }
    ```
6. Create a `.env` file for environment variables.
README.md
2 KB

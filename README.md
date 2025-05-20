# Docker Compose MERN Stack

This project sets up a **MongoDB database**, a **Node.js API** server, a  **Vite Powered React** - Backend Admin Panel & Frontend in a Dockerized environment.

🐞 Warning: This quick setup is only intended for test/development environments.

## 🚀 Getting Started

### 1️⃣ Prerequisites

**Ensure you have the following installed:**

* [Docker](https://www.docker.com/)
* [Docker Compose](https://docs.docker.com/compose/)

### 2️⃣ Installation

**Clone the repository:**

   ```bash
   git clone https://github.com/basantmandal/Docker-Compose-MERN.git
   cd Docker-Compose-MERN
   ```

### 3️⃣ Configure Environment Variable

**Create environment variable files:**

   Create a `.env` file in the root directory and define the necessary environment variables. For example:

   ```env
   MONGO_INITDB_ROOT_USERNAME=admin
   MONGO_INITDB_ROOT_PASSWORD=secret
   MONGO_DB_NAME=mydatabase
   NODE_PORT=5000
   ```

Adjust the variables as needed for your setup.

### 4️⃣ Start the Containers

**Build and start the containers:**

   ```bash
   docker-compose up --build
   ```

This command will build the Docker images and start all services.

### 5️⃣ Stopping the Containers

**To stop all services, run:**

```sh
docker-compose down
```

---

## 🧪 Development Workflow

* **MongoDB**: Accessible at `mongodb://admin:secret@localhost:27017/mydatabase`

* **MongoDB Compass**: Accessible at `mongodb://admin:secret@localhost:27017/mydatabase`

* **API Server**: Accessible at `http://localhost:3001`

* **Frontend**: Accessible at `http://localhost:3002`

* **Backend Admin Panel**: Accessible at `http://localhost:3003`

> You can use tools like [MongoDB Compass](https://www.mongodb.com/products/compass) to connect to the MongoDB instance for database management.

## 🛠 Services

### 1. **MongoDB**

* Runs a MongoDB instance with authentication.
* Stores data persistently using mounted volumes.
* Configurable via environment variables.

### 2. **API (Node.js 18)**

* Acts as the main API service.
* Connects to MongoDB.
* Uses TypeScript with hot-reloading enabled.
* Runs on a configurable port via `${NODE_PORT}`.
* Uses `nodemon --legacy-watch` for hot-reloading (For Non-TypeScript version, its commented, uncomment for non typescript project).
* Mounts `./var/www/api` for live reloading.
* Runs on port `3001`

### 3. **Frontend (React 18 with TypeScript & Tailwind with Vite)**

* Uses Node.js 18 for development.
* Mounts `./var/www/frontend` for live reloading.
* Runs on port `3002`

### 4. **Backend (React 18 with TypeScript & Tailwind with Vite)**

* Uses Node.js 18 for development.
* Mounts `./var/www/backend` for live reloading.
* Runs on port `3003`

## 🔧 Development Notes

### Auto-Reload for Backend (Disabled/Commented)

The backend uses **nodemon** with `--legacy-watch` to handle file changes properly in a Docker environment for non typescript version. You can uncomment, If you prefer using node.js without TypeScript

### Auto-Reload for Backend and API

* The API and Backend services use `nodemon` or `npm run dev` for live reloading.
* Changes in `./var/www/api`, `./var/www/backend`, and `./var/www/frontend` will reflect instantly.

### Mounting Volumes for Live Changes

* The application files are mounted from local directories.
* `/usr/src/app/node_modules` is excluded to avoid permission issues.

## 📂 Project Structure

```bash
Docker-Compose-MERN/
├── api/
│   ├── Dockerfile
│   └── src/
├── backend/
│   ├── Dockerfile
│   └── src/
├── frontend/
│   ├── Dockerfile
│   └── src/
├── docker-compose.yaml
├── .env
├── .gitignore
└── README.md
```

## 📫 Support

For support or any bug report or changes mail me at - <support@hashtagkitto.co.in>

## 🐞 Bug Report

Please open an [issue](https://github.com/basantmandal/Docker-Compose-MERN/issues) on GitHub.

When filing a bug remember that the better written the bug is, the more likely it is to be fixed.

You can also reach us at <support@hashtagkitto.co.in>

## 🍰 Contribution Guidelines 💖

Contributions are welcome! If you’d like to contribute to this project:

* Fork the repository.
* Create a new branch (git checkout -b feature/your-feature-name).
* Make your changes and commit them (git commit -am 'Add new feature').
* Push to the branch (git push origin feature/your-feature-name).
* Open a pull request.

**Please Note** :- I may be a bit delayed in responding or slow in responding due to low amount of free time. I apologize for the inconvenience and I appreciate your patience

## 🤝 Consent

By using any Product/Module/Application/Docker Image/Container/Compose, etc from Basant Mandal A.K.A (HK2 - Hash Tag Kitto), you hereby consent to our disclaimer and agree to its terms.

## 📢 Disclaimer

> **Basant Mandal (HK2 - Hash Tag Kitto)** does not make any warranties about the completeness, reliability and accuracy of this image or its related products. Any action you take upon the information you find here is strictly at your own risk.

> **Basant Mandal (HK2 - Hash Tag Kitto)** will not be liable for any losses and/or damages in connection with the use of our website.

## 💖Like my work? Help Us

Please rate my project or give some stars at [https://github.com/basantmandal/Docker-Compose-MERN/stargazers](https://github.com/basantmandal/Docker-Compose-MERN/stargazers). You can also contribute to make my Open Source Contribution more frequent and help others - [https://www.buymeacoffee.com/basantmandal](https://www.buymeacoffee.com/basantmandal) or [https://www.basantmandal.in/buymecoffee](https://www.basantmandal.in/buymecoffee)

## 📫 Feedback

If you have any feedback, please reach out to us at <support@hashtagkitto.co.in>

## 🔗 Links

Feel free to reach me through the below handles if you'd like to contact me.

[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://www.basantmandal.in/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/basantmandal/)

## 📜 License

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)

# Help Centre Project

Welcome to the **Help Centre Project**! This project is a comprehensive help center system built using modern web technologies. The system consists of a React frontend and a Node.js/Express backend with PostgreSQL for data storage.

## Project Structure

The project is organized into two main directories:

- **`frontend`**: Contains the React application for the user interface.
- **`backend`**: Contains the Node.js and Express server along with PostgreSQL for the database.

## Technologies Used

- **Frontend**: React
- **Backend**: Node.js, Express
- **Database**: PostgreSQL

## Features

- Search functionality with real-time results
- Add Request functionality ( take Head and Paragraph )
- User-friendly interface
- Efficient backend handling of requests and data management

## Installation & Setup

### Prerequisites

Make sure you have the following installed:

- Node.js (v14 or later)
- PostgreSQL

### Backend Setup

1. Navigate to the `backend` directory:

    ```bash
    cd Help-Centre-project/backend
    ```

2. Install the necessary dependencies:

    ```bash
    npm install
    ```

3. Set up your PostgreSQL database :

    ```
    const db = new pg.Client({
    user: "your_USERNAME", 
    host: "localhost",
    database: "helpcenter",
    password: "your_PASSWORD",
    port: 5432,
    }) 
    db.connect();
   ```
 

4. Start the backend server:
    ```bash
    npm start
   ```

### Frontend Setup

1. Navigate to the `frontend` directory:

    ```bash
    cd Help-Centre-project/frontend
    ```

2. Install the necessary dependencies:

    ```bash
    npm install
    ```

3. Start the frontend application:

    ```bash
    npm start
    ```

## Usage

1. Start both the backend and frontend servers.
2. Open your browser and navigate to `http://localhost:3000` to view the React frontend.
3. Use the `Search` functionality to interact with the backend.
4. use `Submit a Request` from header to add new cards to the DB. After Submit you will be redirected to home page and will see the new cards added to the frontend.

## Visuals

### Frontend

![Frontend Screenshot](https://github.com/sahil1476/Help-Center-project/blob/main/photos/webpage.gif?raw=true)

### Backend

![Backend Screenshot](https://github.com/sahil1476/Help-Center-project/blob/main/photos/backendcode.gif?raw=true)


##### Go see sample picture in `photos` 📁 
![Photos 📷](https://github.com/sahil1476/Help-Center-project/tree/main/photos)


## Contact

For any inquiries, please contact [Email](mailto:krsahilsharma07@gmail.com).

---

Thank you for checking out the Help Centre Project!

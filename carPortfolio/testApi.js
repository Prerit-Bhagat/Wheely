// Import the fetch API for Node.js
import fetch from "node-fetch";

// Define the API endpoints
const API_BASE_URL = "http://localhost:8000";
const REGISTER_URL = `${API_BASE_URL}/register/`;
const LOGIN_URL = `${API_BASE_URL}/login/`;
const SERVICE_URL = `${API_BASE_URL}/service/`;

// Sample user data for testing
const testUser = {
    username: "testuser4",
    email: "testuser@example.com",
    password: "testpassword",
    first_name: "Test",
    last_name: "User",
};

// Function to register a user
const registerUser = async () => {
    console.log("Registering user...");
    try {
        const response = await fetch(REGISTER_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(testUser),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Registration failed: ${JSON.stringify(errorData)}`);
        }

        const data = await response.json();
        console.log("User registered successfully:", data);
        return true;
    } catch (error) {
        console.error("Error during registration:", error.message);
        return false;
    }
};

// Function to log in a user
const loginUser = async () => {
    console.log("Logging in user...");
    try {
        const response = await fetch(LOGIN_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: testUser.username,
                password: testUser.password,
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Login failed: ${JSON.stringify(errorData)}`);
        }

        const data = await response.json();
        console.log("User logged in successfully:", data);

        // Return the access token for further requests
        return data.access_token;
    } catch (error) {
        console.error("Error during login:", error.message);
        return null;
    }
};

// Function to make an authenticated request
const submitCarDetails = async (accessToken) => {
    console.log("Submitting car details...");
    try {
        const carDetails = {
            manufacturer: "Toyota",
            model: "Camry",
            condition: "New",
            cylinders: 4,
            fuel: "Petrol",
            odometer: 0,
            title_status: "Clean",
            transmission: "Automatic",
            drive: "FWD",
            type: "Sedan",
            paint_color: "Black",
            car_age: 0,
        };

        const response = await fetch(SERVICE_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`,
            },
            body: JSON.stringify(carDetails),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Failed to submit car details: ${JSON.stringify(errorData)}`);
        }

        const data = await response.json();
        console.log("Car details submitted successfully:", data);
    } catch (error) {
        console.error("Error submitting car details:", error.message);
    }
};

// Main function to test the API
const testApi = async () => {
    const isRegistered = await registerUser();
    if (!isRegistered) return;

    const accessToken = await loginUser();
    if (!accessToken) return;

    await submitCarDetails(accessToken);
};

// Run the API tests
testApi();

<?php

// Database connection
$conn = new mysqli("localhost", "root", "", "final assesment");

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if form submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Get form data
    $username   = $_POST['username'];
    $password   = $_POST['password'];
    $email      = $_POST['email'];
    $firstName  = $_POST['firstName'];
    $lastName   = $_POST['lastName'];

    // Hash password for security
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    // Prepare SQL statement
    $stmt = $conn->prepare("INSERT INTO users (username, password, email, first_name, last_name) VALUES (?, ?, ?, ?, ?)");

    $stmt->bind_param("sssss", $username, $hashedPassword, $email, $firstName, $lastName);

    if ($stmt->execute()) {
        echo "<h2 style='color:green;'>Data Inserted Successfully!</h2>";
    } else {
        echo "<h2 style='color:red;'>Error: " . $stmt->error . "</h2>";
    }

    $stmt->close();
}

$conn->close();

?>


<!-- CREATE TABLE users (
id INT AUTO_INCREMENT PRIMARY KEY,
username VARCHAR (150),
password VARCHAR (100),
email VARCHAR (255),
firstName VARCHAR (100),
lastName VARCHAR (100),
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
); -->
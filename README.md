# User Management System

This project implements a user management system with a focus on roles such as `Student`, `Tutor`, and `Administrator`. Each role extends a base `User` class and includes specific properties and methods to manage their respective responsibilities. The project demonstrates how to manage and retrieve information about users programmatically.

## Classes and Features

### 1. `User` Class
The base class for all users in the system.

- **Static Properties:**
  - `users`: Stores user data in an array of objects.
  
- **Methods:**
  - `getTotal()`: Displays the total number of users in the system.
  
- **Constructor:**
  - Accepts parameters like `id`, `username`, `email`, and `isStaff`.

### 2. `Student` Class
Represents student users and extends the `User` class.

- **Static Properties:**
  - `students`: Stores student data, including scores and additional details.

- **Methods:**
  - `getStudentDetails()`: Displays a student's details, including scores.
  - `getAverageScore()`: Calculates and displays the average score of a student.
  - `getTotal()`: Displays the total number of enrolled students.
  
- **Constructor:**
  - Accepts parameters like `firstName`, `lastName`, `level`, `department`, and `enrollmentDate`.
  - Automatically generates random scores for subjects upon initialization.

### 3. `Tutor` Class
Represents tutors and extends the `User` class.

- **Static Properties:**
  - `teachers`: Stores tutor data, including department and assigned subjects.
  
- **Methods:**
  - `getTutorDetails()`: Displays a tutor's details.
  - `getTotal()`: Displays the total number of tutors.
  
- **Constructor:**
  - Accepts parameters like `firstName`, `lastName`, `department`, and `assignedSubject`.

### 4. `Administrator` Class
Represents administrators and extends the `User` class.

- **Static Properties:**
  - `administrators`: Stores administrator data.
  
- **Methods:**
  - `getTotal()`: Displays the total number of administrators.
  - `addStudent()`: Adds a new student to the system with randomly generated scores.

- **Constructor:**
  - Accepts parameters like `firstName` and `lastName`.
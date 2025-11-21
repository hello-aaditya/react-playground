# 01. Props

### Q1. Multiple Greetings with Props (Single Component, Multiple Names)

Create a React app with name **"greeting-app"**.

1. Create a component named **`Greet`** inside a `Components` folder.

2. The `Greet` component should:
   - Receive **three props**: `n1`, `n2`, and `n3`.
   - Render three lines on the screen:
     - `Hello, {n1}! How are You ?`
     - `Hello, {n2}! How are You ?`
     - `Hello, {n3}! How are You ?`

3. In **`App.jsx`**:
   - Declare three variables: `name1`, `name2`, `name3` with any string values (for example: `"Jeeva"`, `"Jyoti"`, `"Prakash"`).
   - Render a heading: `Welcome in React`
   - Render the `Greet` component and pass the three variables as props:
     - `n1={name1}`
     - `n2={name2}`
     - `n3={name3}`

Goal of this question:  
Practice **passing multiple props** from parent to child and using them inside a component to display dynamic text.

---

### Q2. User Card Component (Two Users, Props-Based)

Create a React app with name **"user-card-app"**.

1. Inside a `Components` folder, create a component file **`UserCard.jsx`**.

2. The `UserCard` component should:
   - Receive the following props:
     - `name` (string)
     - `age` (number)
     - `city` (string)
   - Display the details like this:
     - `Name: {name}`
     - `Age: {age}`
     - `City: {city}`
   - Add a horizontal line `<hr />` after each card to separate multiple users.

3. In **`App.jsx`**:
   - Create two sets of variables:

     Example:
     - `name1`, `age1`, `city1` → for first user  
     - `name2`, `age2`, `city2` → for second user  

   - Render a heading:  
     `User Details:`
   - Render the `UserCard` component **two times**, and pass different props each time:
     - First `UserCard` uses `name1`, `age1`, `city1`
     - Second `UserCard` uses `name2`, `age2`, `city2`

Goal of this question:  
Practice passing **multiple props** into a component and reusing the same component for **different data**.

---

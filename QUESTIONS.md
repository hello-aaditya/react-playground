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

### Q3. Product List with Props and Array Mapping

Create a React app with name **"product-list-app"**.

1. In `App.jsx`, create an array named `products` that contains multiple product objects.  
   Each product object should have:
   - `id` (for example: `"A01"`)
   - `name` (for example: `"Laptop"`)
   - `price` (for example: `60000`)

   Example structure:
   ```js
   const products = [
     { id: "A01", name: "Laptop", price: 60000 },
     { id: "A02", name: "Smartphone", price: 20000 },
     { id: "A03", name: "Headphones", price: 3000 }
   ];
2. Create a component ProductItem inside a Components folder.
3. The ProductItem component should:

    - Receive id, name, and price as props.

    - Display them like:
        - Name:
        - ID:
        - Price: (you can prefix with ₹)

    - Add a <hr /> after each product to visually separate the items.

4. In App.jsx:
    - Show a heading: Product Information

    - Use the map() method on the products array to render one ProductItem for each product.

    - Pass id, name, and price as props to ProductItem.

    - Use the product’s id as the key prop in the map.

---

### Q4. Custom Button with Label and Color Props

Create a React app with name **"custom-button-app"**.

1. Inside a `Components` folder, create a component file **`CustomButton.jsx`**.

2. The `CustomButton` component should:
   - Receive two props:
     - `myLabel` → text to show inside the button
     - `myColor` → background color of the button
   - Render a `<button>` element.
   - Apply the background color using **inline styles**:
     - `style={{ backgroundColor: props.myColor }}`
   - Use `{props.myLabel}` as the button text.

3. In **`App.jsx`**:
   - Create three pairs of variables for labels and colors, for example:
     - `label1 = "Button"`, `color1 = "#ffde59"`
     - `label2 = "Submit"`, `color2 = "Green"`
     - `label3 = "Reset"`, `color3 = "Red"`
   - Render a heading:  
     `Custom Button Application`
   - Render the `CustomButton` component **three times**:
     - First button uses `label1` and `color1`
     - Second button uses `label2` and `color2`
     - Third button uses `label3` and `color3`
   - Pass data using props:  
     `myLabel={label1}` and `myColor={color1}`, etc.

Goal of this question:  
Practice **passing props to control both content and styling** of a component, and understand how to use **inline styles** with props in React.

---

# 02. State

### Q1. Basic Counter with State (Increment, Decrement, Reset)

Create a React app with name **"basic-counter-app"**.

1. Inside a `Components` folder, create a component file **`Counter.jsx`**.

2. In the `Counter` component:
   - Use the `useState` hook to create a state variable:
     - `count`, with initial value `0`
   - Display the current count in a paragraph:
     - `Count: {count}`
   - Add three buttons:
     1. **Increment** button  
        - On click, it should increase `count` by `1` using `setCount(count + 1)`
     2. **Decrement** button  
        - On click, it should decrease `count` by `1` using `setCount(count - 1)`
     3. **Reset** button  
        - On click, it should reset `count` back to `0` using `setCount(0)`

3. In **`App.jsx`**:
   - Render a heading:  
     `Welcome to State`
   - Render the `Counter` component below the heading.

Goal of this question:  
Practice creating a **state variable with `useState`**, updating it on button clicks, and seeing how **React re-renders the UI** when the state changes.

---

### Q2. Temperature Controller with Minimum Limit

Create a React app with name **"temperature-controller"**.

1. Inside a `Components` folder, create a component file **`Temperature.jsx`**.

2. In the `Temperature` component:
   - Use the `useState` hook to create a state variable:
     - `temp`, with initial value `25`
   - Display the current temperature in a paragraph:
     - `Current Temperature: {temp}°C`

3. Add three buttons:
   1. **Increase** button  
      - On click, it should increase the temperature by `1` using:  
        `setTemp(temp + 1)`
   2. **Decrease** button  
      - On click, it should **decrease** the temperature by `1`, but with a condition:
        - Only decrease if `temp > 15`
        - If `temp` is already `15`, do not decrease further  
      - Use an `if` condition inside the click handler:
        ```js
        if (temp > 15) {
          setTemp(temp - 1);
        }
        ```
   3. **Reset** button  
      - On click, it should reset the temperature back to `25` using:  
        `setTemp(25)`

4. In **`App.jsx`**:
   - Show a heading:  
     `Welcome to Temperature Controller Application`
   - Render the `Temperature` component below the heading.

Goal of this question:  
Practice using **state with `useState`**, updating it through buttons, and applying a **condition on state updates** so that the value never goes below a certain limit.

# 01. Props

## Q1. Multiple Greetings with Props (Single Component, Multiple Names)

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

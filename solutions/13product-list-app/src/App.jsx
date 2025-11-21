import ProductItem from "./Components/ProductItem"

export default function App() {
  
  const products = [
    {
      id: "A01",
      name: "Laptop",
      price: 60000
    },
    {
      id: "A02",
      name: "Smartphone",
      price: 20000
    },
    {
      id: "A03",
      name: "Headphones",
      price: 3000
    }
  ];

  return (
    <>
      <h2>Product Information</h2>

      {products.map((product) => (
        <ProductItem
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
        />
      ))}
    </>
  )
}
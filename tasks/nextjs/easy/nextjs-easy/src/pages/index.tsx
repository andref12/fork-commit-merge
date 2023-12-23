// NextJS - Easy

export default function Home() {
  const sampleProducts = [
    // TODO: Create a sample product list with names and prices
    {name:"Jaguar",price:'52,44,000'},
    {name:"MG Hector",price:'65,99,000'},
    {name:"Nissan",price:'22,30,000'},
    {name:"Ferrari",price:'80,55,900'},
    {name:"Ford",price:'34,55,900'},
    {name:"Audi",price:'52,99,100'},
    {name:"Swift",price:'31,55,500'},
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-4">Welcome to XYZ Store!</h1>
      <p className="text-lg mb-8">
        Your one-stop shop for the best products in town.
      </p>

      <div className="w-1/2 flex flex-col space-y-4">
        {sampleProducts.map((product, index) => (
          <div
            key={index}
            className="flex justify-between p-4 border rounded shadow"
          >
            <span>{product.name}</span>
            <span>{product.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

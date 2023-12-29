

import Footer from "@/components/footer";
import Navbar from "@/components/nav-bar";

const products = [
  {
    id: 1,
    name: "Product 1",
    description: "Description of Product 1.",
    image:
      "https://images.hindustantimes.com/tech/img/2022/09/15/960x540/iPhone_14_Pro_Max_1662623755338_1663251850656_1663251850656.jpg",
  },
  {
    id: 2,
    name: "Product 2",
    description: "Description of Product 2.",
    image:
      "https://www.zdnet.com/a/img/2023/10/03/32355104-4543-4c66-ba04-8aaa13d7ffe6/google-pixel-8-pro-blue-in-hand.jpg",
  },
  // Add more products with images as needed
];

export default function Sign() {
  return (
    <div>
      <Navbar />
      <div>
        <div className="bg-gray-100 min-h-screen">
          <header className="bg-gray-800 text-white text-center py-16">
            <div className="container mx-auto">
              <h1 className="text-4xl font-bold mb-4">
                Welcome to Our E-commerce Store
              </h1>
              <p className="text-lg">
                Discover amazing products at great prices.
              </p>
            </div>
          </header>

          <section className="container mx-auto mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div
                  key={product.id}
                  className="bg-white p-4 shadow-md rounded-md"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-100 object-cover mb-4 rounded-md"
                  />
                  <h2 className="text-xl font-bold mb-2">{product.name}</h2>
                  <p className="text-gray-600">{product.description}</p>
                  <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md">
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

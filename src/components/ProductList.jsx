import React from "react";

const plants = [
  {
    id: 1,
    name: "Snake Plant",
    price: 20,
    category: "Indoor",
    image: "https://images.unsplash.com/photo-1463936575829-25148e1db1b8"
  },

  {
    id: 2,
    name: "Aloe Vera",
    price: 18,
    category: "Medicinal",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
  },

  {
    id: 3,
    name: "Money Plant",
    price: 15,
    category: "Indoor",
    image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78"
  },

  {
    id: 4,
    name: "Cactus",
    price: 12,
    category: "Succulent",
    image: "https://images.unsplash.com/photo-1459156212016-c812468e2115"
  },

  {
    id: 5,
    name: "Peace Lily",
    price: 22,
    category: "Indoor",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411"
  },

  {
    id: 6,
    name: "Jade Plant",
    price: 25,
    category: "Succulent",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b"
  }
];

function ProductList() {
  return (
    <div>
      <h1>Our Plants</h1>

      {plants.map((plant) => (
        <div key={plant.id}>
          <img
            src={plant.image}
            width="150"
            alt={plant.name}
          />

          <h3>{plant.name}</h3>

          <p>${plant.price}</p>

          <button>
            Add To Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";

function ProductList() {

  const dispatch = useDispatch();

  const [addedItems, setAddedItems] = useState({});

  const plants = [
    {
      id: 1,
      name: "Snake Plant",
      price: 20,
      category: "Indoor Plants",
      image: "https://images.unsplash.com/photo-1545241047-6083a3684587"
    },
    {
      id: 2,
      name: "Money Plant",
      price: 25,
      category: "Indoor Plants",
      image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735"
    },

    {
      id: 3,
      name: "Rose Plant",
      price: 15,
      category: "Flower Plants",
      image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946"
    },
    {
      id: 4,
      name: "Lily Plant",
      price: 18,
      category: "Flower Plants",
      image: "https://images.unsplash.com/photo-1468327768560-75b778cbb551"
    },

    {
      id: 5,
      name: "Aloe Vera",
      price: 30,
      category: "Medicinal Plants",
      image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
    },
    {
      id: 6,
      name: "Tulsi Plant",
      price: 22,
      category: "Medicinal Plants",
      image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78"
    }
  ];

  const handleAddToCart = (plant) => {

    dispatch(
      addItem({
        ...plant,
        quantity: 1
      })
    );

    setAddedItems({
      ...addedItems,
      [plant.id]: true
    });

  };

  const categories = [...new Set(
    plants.map(plant => plant.category)
  )];

  return (
    <div>

      {/* Navbar */}
      <nav>
        <h2>Paradise Nursery</h2>

        <div>
          Home | Plants | Cart
        </div>
      </nav>

      {
        categories.map(category => (

          <div key={category}>

            <h2>{category}</h2>

            <div>

              {
                plants
                  .filter(
                    plant => plant.category === category
                  )
                  .map(plant => (

                    <div key={plant.id}>

                      <img
                        src={plant.image}
                        width="150"
                        alt={plant.name}
                      />

                      <h3>{plant.name}</h3>

                      <p>${plant.price}</p>

                      <button
                        onClick={() =>
                          handleAddToCart(plant)
                        }

                        disabled={
                          addedItems[plant.id]
                        }
                      >
                        {
                          addedItems[plant.id]
                            ? "Added"
                            : "Add to Cart"
                        }
                      </button>

                    </div>

                  ))
              }

            </div>

          </div>

        ))
      }

    </div>
  );
}

export default ProductList;
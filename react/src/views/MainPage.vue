<template>
  <div>
    <h1>The Recipe Book</h1>
    <div class="container">
        <RecipeCard v-for="shoppingCart in shoppingCarts" :key="shoppingCart.name" :cart="cart">{{ shoppingCart.name }}</RecipeCard>
    </div>
  </div>
</template>

<script setup>

const shoppingCarts = [
  { id: 1, name: "Wireless Mouse", price: 25.99, category: "Electronics", quantity: 1 },
  { id: 2, name: "Mechanical Keyboard", price: 89.00, category: "Electronics", quantity: 1 },
  { id: 3, name: "HDMI Cable (6ft)", price: 12.50, category: "Electronics", quantity: 2 },
  { id: 4, name: "USB-C Hub", price: 45.00, category: "Electronics", quantity: 1 },
  { id: 5, name: "Noise Cancelling Headphones", price: 299.99, category: "Electronics", quantity: 1 },
  { id: 6, name: "Cotton T-Shirt (Blue)", price: 19.99, category: "Apparel", quantity: 3 },
  { id: 7, name: "Denim Jeans", price: 55.00, category: "Apparel", quantity: 1 },
  { id: 8, name: "Wool Socks (3-pack)", price: 15.00, category: "Apparel", quantity: 2 },
  { id: 9, name: "Running Shoes", price: 120.00, category: "Apparel", quantity: 1 },
  { id: 10, name: "Leather Belt", price: 35.00, category: "Apparel", quantity: 1 },
  { id: 11, name: "Stainless Steel Water Bottle", price: 22.00, category: "Home & Kitchen", quantity: 1 },
  { id: 12, name: "Ceramic Coffee Mug", price: 8.50, category: "Home & Kitchen", quantity: 4 },
  { id: 13, name: "Chef's Knife", price: 65.00, category: "Home & Kitchen", quantity: 1 },
  { id: 14, name: "Non-stick Frying Pan", price: 40.00, category: "Home & Kitchen", quantity: 1 },
  { id: 15, name: "Silicone Spatula Set", price: 18.00, category: "Home & Kitchen", quantity: 1 },
  { id: 16, name: "Yoga Mat", price: 30.00, category: "Fitness", quantity: 1 },
  { id: 17, name: "Dumbbell Set (5lbs)", price: 25.00, category: "Fitness", quantity: 2 },
  { id: 18, name: "Resistance Bands", price: 14.99, category: "Fitness", quantity: 1 },
  { id: 19, name: "Foam Roller", price: 20.00, category: "Fitness", quantity: 1 },
  { id: 20, name: "Jump Rope", price: 10.00, category: "Fitness", quantity: 1 },
  { id: 21, name: "Hardcover Journal", price: 18.50, category: "Stationery", quantity: 2 },
  { id: 22, name: "Gel Pens (12-pack)", price: 12.00, category: "Stationery", quantity: 1 },
  { id: 23, name: "Desk Lamp", price: 35.00, category: "Office", quantity: 1 },
  { id: 24, name: "Ergonomic Mouse Pad", price: 15.00, category: "Office", quantity: 1 },
  { id: 25, name: "Planner 2024", price: 24.00, category: "Stationery", quantity: 1 },
  { id: 26, name: "Organic Green Tea", price: 14.00, category: "Grocery", quantity: 3 },
  { id: 27, name: "Whole Bean Coffee (1lb)", price: 18.00, category: "Grocery", quantity: 2 },
  { id: 28, name: "Dark Chocolate Bar", price: 4.50, category: "Grocery", quantity: 5 },
  { id: 29, name: "Almond Butter", price: 12.00, category: "Grocery", quantity: 1 },
  { id: 30, name: "Sea Salt Crackers", price: 5.99, category: "Grocery", quantity: 2 }
];

</script>

<style scoped>
h1,
h2 {
  text-align: center;
  font-size: 50px;
}
</style>

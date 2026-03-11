<template>
  <RouterLink to="/cart"
    ><img src="../../public/imgs/cart.png" alt="" class="w-20 h-20"
  /></RouterLink>
  <h1 class="text-3xl text-center mb-6 p-12 font-serif">Random Shop</h1>
  <div class="flex justify-center items-center">
    <div
      class="flex justify-center align-center grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-400 h-2000"
    >
      <RecipeCard
        class="flex flex-col justify-center place-items-center"
        v-for="shoppingCart in shoppingCarts"
        :key="shoppingCart.id"
        :shoppingCart="shoppingCart"
        ><button class="justify-center mt-10" @click="addToCart(shoppingCart)">
          click me
        </button></RecipeCard
      >
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import RecipeCard from '../components/RecipeCard.vue'
import { cart } from '../views/cart.js'

const shoppingCarts = ref([
  {
    id: 1,
    name: 'Wireless Mouse',
    price: 25.99,
    category: 'Electronics',
    quantity: 1,
    img: '../imgs/mouse.jpg',
  },
  {
    id: 2,
    name: 'Mechanical Keyboard',
    price: 89.0,
    category: 'Electronics',
    quantity: 1,
    img: '../../public/imgs/keyboard.jpg',
  },
  {
    id: 3,
    name: 'HDMI Cable (6ft)',
    price: 12.5,
    category: 'Electronics',
    quantity: 2,
    img: '../../public/imgs/hdmi cable.jpg',
  },
  {
    id: 4,
    name: 'USB-C Hub',
    price: 45.0,
    category: 'Electronics',
    quantity: 1,
    img: '../../public/imgs/usbc.webp',
  },
  {
    id: 5,
    name: 'Noise Cancelling Headphones',
    price: 299.99,
    category: 'Electronics',
    quantity: 1,
    img: '../../public/imgs/headphones.jpg',
  },
  {
    id: 6,
    name: 'Cotton T-Shirt (Blue)',
    price: 19.99,
    category: 'Apparel',
    quantity: 3,
    img: '../../public/imgs/shirt.jpg',
  },
  {
    id: 7,
    name: 'Denim Jeans',
    price: 55.0,
    category: 'Apparel',
    quantity: 1,
    img: '../../public/imgs/jeans.webp',
  },
  {
    id: 8,
    name: 'Wool Socks (3-pack)',
    price: 15.0,
    category: 'Apparel',
    quantity: 2,
    img: '../../public/imgs/ocks.jpg',
  },
  {
    id: 9,
    name: 'Running Shoes',
    price: 120.0,
    category: 'Apparel',
    quantity: 1,
    img: '../../public/imgs/shoes.jpg',
  },
  {
    id: 10,
    name: 'Leather Belt',
    price: 35.0,
    category: 'Apparel',
    quantity: 1,
    img: '../../public/imgs/bta.jpg',
  },
  {
    id: 11,
    name: 'Stainless Steel Water Bottle',
    price: 22.0,
    category: 'Home & Kitchen',
    quantity: 1,
    img: '../../public/imgs/waterbottle.jpg',
  },
  {
    id: 12,
    name: 'Ceramic Coffee Mug',
    price: 8.5,
    category: 'Home & Kitchen',
    quantity: 4,
    img: '../../public/imgs/coffeemug.jpg',
  },
  {
    id: 13,
    name: "Chef's Knife",
    price: 65.0,
    category: 'Home & Kitchen',
    quantity: 1,
    img: '../../public/imgs/knife.jpg',
  },
  {
    id: 14,
    name: 'Non-stick Frying Pan',
    price: 40.0,
    category: 'Home & Kitchen',
    quantity: 1,
    img: '../../public/imgs/pan.jpg',
  },
  {
    id: 15,
    name: 'Silicone Spatula Set',
    price: 18.0,
    category: 'Home & Kitchen',
    quantity: 1,
    img: '../../public/imgs/sps.jpg',
  },
  {
    id: 16,
    name: 'Yoga Mat',
    price: 30.0,
    category: 'Fitness',
    quantity: 1,
    img: '../../public/imgs/yoga mat.jpg',
  },
  {
    id: 17,
    name: 'Dumbbell Set (5lbs)',
    price: 25.0,
    category: 'Fitness',
    quantity: 2,
    img: '../../public/imgs/dumbbells.jpg',
  },
  {
    id: 18,
    name: 'Resistance Bands',
    price: 14.99,
    category: 'Fitness',
    quantity: 1,
    img: '../../public/imgs/band.jpg',
  },
  {
    id: 19,
    name: 'Foam Roller',
    price: 20.0,
    category: 'Fitness',
    quantity: 1,
    img: '../../public/imgs/foam roller.jpg',
  },
  {
    id: 20,
    name: 'Jump Rope',
    price: 10.0,
    category: 'Fitness',
    quantity: 1,
    img: '../../public/imgs/jumprope.jpg',
  },
  {
    id: 21,
    name: 'Hardcover Journal',
    price: 18.5,
    category: 'Stationery',
    quantity: 2,
    img: '../../public/imgs/journal.jpg',
  },
  {
    id: 22,
    name: 'Gel Pens (12-pack)',
    price: 12.0,
    category: 'Stationery',
    quantity: 1,
    img: '../../public/imgs/pen.avif',
  },
  {
    id: 23,
    name: 'Desk Lamp',
    price: 35.0,
    category: 'Office',
    quantity: 1,
    img: '../../public/imgs/lamp.avif',
  },
  {
    id: 24,
    name: 'Ergonomic Mouse Pad',
    price: 15.0,
    category: 'Off  ice',
    quantity: 1,
    img: '../../public/imgs/mousepad.jpg',
  },
  {
    id: 25,
    name: 'Planner 2024',
    price: 24.0,
    category: 'Stationery',
    quantity: 1,
    img: '../../public/imgs/planner.jpg',
  },
  {
    id: 26,
    name: 'Organic Green Tea',
    price: 14.0,
    category: 'Grocery',
    quantity: 3,
    img: '../../public/imgs/green_tea.avif',
  },
  {
    id: 27,
    name: 'Whole Bean Coffee (1lb)',
    price: 18.0,
    category: 'Grocery',
    quantity: 2,
    img: '../../public/imgs/coffee.avif',
  },
  {
    id: 28,
    name: 'Dark Chocolate Bar',
    price: 4.5,
    category: 'Grocery',
    quantity: 5,
    img: '../../public/imgs/chocolate.webp',
  },
  {
    id: 29,
    name: 'Almond Butter',
    price: 12.0,
    category: 'Grocery',
    quantity: 1,
    img: '../../public/imgs/almond.avif',
  },
  {
    id: 30,
    name: 'Sea Salt Crackers',
    price: 5.99,
    category: 'Grocery',
    quantity: 2,
    img: '../../public/imgs/cracker.jpg',
  },
])

function addToCart(item) {
  const check = cart.value.find((i) => i.id === item.id)
  if (check) {
    check.quantity += 1
  } else {
    cart.value.push({ ...item })
  }
}
</script>

<style scoped>
h1,
h2 {
  text-align: center;
  font-size: 50px;
}

button {
  display: inline-block;
  outline: none;
  cursor: pointer;
  font-size: 14px;
  line-height: 1;
  border-radius: 500px;
  transition-property: background-color, border-color, color, box-shadow, filter;
  transition-duration: 0.3s;
  border: 1px solid transparent;
  letter-spacing: 2px;
  min-width: 160px;
  text-transform: uppercase;
  white-space: normal;
  font-weight: 700;
  text-align: center;
  padding: 16px 14px 18px;
  color: #444444;
  box-shadow: inset 0 0 0 2px #444444;
  background: linear-gradient(
    to left,
    #fffffd 0%,
    #a0cccd 10%,
    #6c98b4 20%,
    #5585a5 30%,
    #23548a 40%,
    #23548a 50%,
    #5585a5 60%,
    #6c98b4 70%,
    #a0cccd 80%,
    #fffffd 90%
  );
  height: 48px;
}

button:hover {
  background: linear-gradient(
    to right,
    #fff2d0 0%,
    #e6d29f 10%,
    #a68f61 20%,
    #8c6125 30%,
    #5d4127 40%,
    #5d4127 50%,
    #8c6125 60%,
    #a68f61 70%,
    #e6d29f 80%,
    #fff2d0 90%
  );
}
</style>

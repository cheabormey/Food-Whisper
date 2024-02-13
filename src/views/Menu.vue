<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <!-- Order -->
  <div class="flex">
    <div class="msx-w-[1640px] m-auto px-4 pb-10 pt-5 mt-0">
      <h1 class="font-semi-bold text-4xl mb-4 text-center">
        Menu with delicious taste and good price
      </h1>
      <div class="grid grid-cols-2 lg:grid-cols-2 gap-12 pt-4">
        <div
          v-for="(card, index) in cards"
          :key="index"
          class="border shadow-lg rounded-lg relative hover:scale-105 duration-300"
        >
          <img
            class="w-full h-[200px] object-cover rounded-lg"
            :src="card.img"
            :alt="card.img"
          />
          <div class="flex justify-between p-5 text-center">
            <h2 class="font-bold sm:text-xl">{{ card.title }}</h2>
            <h1 class="sm:text-xl text-amber-400 font-semibold">$ {{ card.price }}</h1>
          </div>
          <div class="mx-28 my-5">
            <button
              @click="handleAddToCart(index)"
              class="bg-amber-500 py-3 px-7 rounded-lg text-white hover:opacity-75"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>

      <!-- bay char -->

      <h1 class="text-orange-600 font-bold text-4xl text-center"></h1>
      <div class="grid grid-cols-2 lg:grid-cols-2 gap-12 pt-4">
        <div
          v-for="baychar in baychars"
          :key="baychar.index"
          class="border shadow-lg rounded-lg hover:scale-105 duration-300 hover:opacity-75"
          @click="closecheckbox"
        >
          <img
            class="w-full h-[200px] object-cover rounded-lg"
            :src="baychar.img"
            :alt="baychar.img"
          />
          <div class="felx justify-between px-2 py-4 text-center">
            <h2 class="font-bold sm:text-xl">{{ baychar.title }}</h2>
            <h1 class="sm:text-xl text-red-500 font-semibold">$ {{ baychar.price }}</h1>

            <button class="bg-orange-500 p-2 rounded-lg text-white">Add To Cart</button>
          </div>
        </div>
      </div>
      <!-- Bree -->
      <h1 class="text-orange-600 font-bold text-4xl text-center"></h1>
      <div class="grid grid-cols-2 lg:grid-cols-2 gap-12 pt-4">
        <div
          v-for="beer in beers"
          :key="beer.index"
          class="border shadow-lg rounded-lg hover:scale-105 duration-300 hover:opacity-75"
          @click="closecheckbox"
        >
          <img
            class="w-full h-[200px] object-cover rounded-lg"
            :src="beer.img"
            :alt="beer.img"
          />
          <div class="felx justify-between px-2 py-4 text-center">
            <h2 class="font-bold sm:text-xl">{{ beer.title }}</h2>
            <h1 class="sm:text-xl text-red-500 font-semibold">$ {{ beer.price }}</h1>
          </div>
        </div>
      </div>

      <!-- selected items -->
      <!-- Overlay -->
    </div>

    <!-- right Card -->
    <div class="w-[320px] h-full bg-white border-solid border-2 border-grey-200">
      <div class="flex space-x-44 m-3">
        <p class="text-xl font-medium text-gray-500 pl-3">Card</p>
        <p class="text-sm font-semibold text-gray-500 pt-2 flex gap-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
          <button
            class="text-[9px] text-white font-bold absolute text-center ml-4 px-2 py-2 rounded-full w-[5px] h-[5px] bg-red-400 flex justify-center items-center"
          >
            {{ cart.length }}
          </button>
        </p>
      </div>

      <!--  -->
      <div v-if="cart.length > 0" class="w-[310px] bg-white h-[500px] m-1">
        <div class="overflow-auto max-h-[390px] scrollbar-hider scroll-hidden">
          <!-- card -->
          <div
            v-for="(cartitem, index) in cart"
            :key="index"
            class="w-[280px] relative h-[130px] bg-white ml-2 my-3 rounded-xl shadow-sm"
          >
            <div class="h-full flex gap-6 w-full p-2 rounded-xl shadow">
              <div class="w-1/2">
                <img
                  class="object-cover w-full h-full rounded-xl"
                  :src="cartitem.img"
                  alt=""
                />
              </div>
              <div>
                <h1 class="text-black text-xl font-semibold">
                  {{ cartitem.title }}
                </h1>
                <h1 class="text-xl w-14 bg-orange-300 rounded-md text-center text-black">
                  ${{ cartitem.price }}
                </h1>
              </div>
              <button
                @click="handleCancelCart(index)"
                class="absolute bg-red-500 text-white w-6 h-6 rounded-md ml-[245px] px-2 py-2 flex justify-center items-center"
              >
                x
              </button>
            </div>
            <p class="font-medium"></p>
          </div>
        </div>
        <!--  -->
        <div class="my-3 mx-3">
          <!-- <div class="flex space-x-[175px]">
            <p class="font-medium">$ {{ totalPrice }}</p>
          </div> -->

          <div
            class="flex space-x-[177px] pt-[30px] border-solid border-t-2 border-gray-300"
          >
            <p class="text-gray-400">Total</p>
            <p class="font-medium text-orange-700">$ {{ totalPrice }}</p>
          </div>
          <div class="mt-3">
            <div
              class="px-17 py-2 text-center hover:bg-red-300 font-medium font-xs rounded-full"
            >
              <span>Place on order</span>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="text-center">cart is empty</div>
    </div>
  </div>
</template>

<style>
h1 {
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  color: #4a5568;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
<script>
import { ref, computed } from "vue";
export default {
  //   data() {
  //     return {
  //       smallChecked: false,
  //       bigChecked: false,
  //       //   close checkbox
  //       open: false,
  //     };
  //   },
  //   // checkbox
  //   methods: {
  //     closecheckbox() {
  //       this.open = !this.open;
  //     },
  //   },
  setup() {
    const text = ref("this is text");
    const Number = ref(1);
    const count = () => {
      Number.value++;
    };
    const decr = () => {
      if (Number.value <= 0) {
        alert("ដកមិនបានទេ​​ !");
      } else {
        Number.value--;
      }
    };

    const cards = ref([
      {
        title: "សាច់អាំងមូកថ:",
        img:
          "https://th.bing.com/th/id/R.b9d44a27b2df40a924277b2ec68c4922?rik=q8JrOZHtGBcnIg&pid=ImgRaw&r=0",
        price: "12",
      },
      {
        id: 2,
        title: "សាច់អាំងទឹកកាពីក",
        img: "https://kohsantepheap.tv/wp-content/uploads/2021/02/1K6A4098-1.jpg",
        price: "15",
      },
      {
        id: 3,
        title: "សាច់អាំងកូនកាត់",
        img: "https://i.ytimg.com/vi/S9I6cAAOC0U/maxresdefault.jpg",
        price: "10",
      },
      {
        id: 4,
        title: "សាច់អាំងបបែចិន",
        img: "https://images.deliveryhero.io/image/fd-kh/LH/n2xb-hero.jpg",
        price: "7.5",
      },
      {
        id: 5,
        title: "សាច់គោអាំងចង្កាក់",
        img: "https://i.ytimg.com/vi/G1GCG-BASxI/maxresdefault.jpg",
        price: "2",
      },
      {
        id: 6,
        title: "មាន់អាំង",
        img:
          "https://th.bing.com/th/id/R.46bf86cbc69bced95128da5845c294d7?rik=ZeNgi%2bhBD1yqQQ&pid=ImgRaw&r=0",
        price: "3.5",
      },
      {
        id: 7,
        title: "នែមអាំង",
        img:
          "https://reviewvilla.vn/wp-content/uploads/2022/04/Nem-nuong-Nha-Trang-3.jpg",
        price: "2.5",
      },
      {
        id: 7,
        title: "ប្រហិតអាំង",
        img:
          "https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2023/04/09/1065745827.jpg",
        price: "2.5",
      },
    ]);
    const cart = ref([]);

    const handleAddToCart = (index) => {
      const selectedItem = cards.value[index];
      cart.value.push({
        title: selectedItem.title,
        price: selectedItem.price,
        id: selectedItem.id,
        img: selectedItem.img,
      });
      console.log(cart);
    };

    const handleCancelCart = (index) => {
      cart.value.splice(index, 1);
    };
    const totalPrice = computed(() => {
      return cart.value
        .reduce((total, item) => total + parseFloat(item.price), 0)
        .toFixed(2);
    });
    // const baychars = ref([
    //   {
    //     title: "បាយឆាពងទារ",
    //     img:
    //       "https://th.bing.com/th/id/OIP.mil-aU8Wuk9_l_-siUDP6gHaFa?rs=1&pid=ImgDetMain",
    //     price: "1.5",
    //   },
    //   {
    //     id: 2,
    //     title: "បាយឆាគ្រឿងសមុទ្រ",
    //     img:
    //       "https://th.bing.com/th/id/OIP.M9EVd2SRgK40z8-BuR574QHaFJ?rs=1&pid=ImgDetMain",
    //     price: "3",
    //   },
    //   {
    //     id: 3,
    //     title: "បាយឆាម្រះព្រៅសាចើមាន់",
    //     img:
    //       "https://th.bing.com/th/id/R.34fb98f73f69e43816014d6651f377ca?rik=Md5duNAgpx5HXQ&pid=ImgRaw&r=0",
    //     price: "2",
    //   },
    //   {
    //     id: 4,
    //     title: "បាយឆាក្តៅ",
    //     img:
    //       "https://www.aheadofthyme.com/wp-content/uploads/2021/08/thai-basil-ch    icken-300x300-1.jpg",
    //     price: "2.5",
    //   },
    // ]);

    // const beers = ref([
    //   {
    //     title: "Hanuman",
    //     img:
    //       "https://cms.hanumanbeverages.com/storage/posts/June2022/CVLda5IrV4BAs93GXf5t.jpg",
    //     price: "1.5",
    //   },
    //   {
    //     id: 2,
    //     title: "heineken",
    //     img:
    //       "https://www.vietnamonline.com/media/uploads/froala_editor/images/VNO_Beer.jpg",
    //     price: "3",
    //   },
    //   {
    //     id: 3,
    //     title: "Vattanac",
    //     img:
    //       "https://th.bing.com/th/id/OIP.TZsezZ_5te2cOUNk8zxEOwHaHa?rs=1&pid=ImgDetMain",
    //     price: "2",
    //   },
    //   {
    //     id: 4,
    //     title: "Krud",
    //     img:
    //       "https://th.bing.com/th/id/OIP.95GW2Eww3KUz9y2VIuP_WQHaEK?rs=1&pid=ImgDetMain",
    //     price: "2.5",
    //   },
    // ]);

    return {
      cards,
      //   baychars,
      //   beers,
      text,
      Number,
      count,
      decr,
      handleAddToCart,
      cart,
      handleCancelCart,
      totalPrice,
    };
  },
};
</script>

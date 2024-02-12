<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="msx-w-[1640px] m-auto px-4 py-12 mt-0">
        <h1 class="text-orange-600 font-bold text-4xl text-center">សាច់អាំង</h1>
            <div class="grid grid-cols-2 lg:grid-cols-2 gap-12 pt-4" >
                <div v-for="card in cards" :key="card.index" class="border shadow-lg rounded-lg hover:scale-105 duration-300 hover:opacity-75" @click="closecheckbox">
                    <img class="w-full h-[200px] object-cover rounded-lg" :src="card.img" :alt="card.img" />
                    <div class="felx justify-between px-2 py-4 text-center">
                        <h2 class="font-bold sm:text-xl">{{ card.title }}</h2>
                        <h1 class=" sm:text-xl text-red-500 font-semibold">$ {{ card.price }}</h1>   
                    </div>     
                </div>
            </div>

            <!-- bay char -->


            <h1 class="text-orange-600 font-bold text-4xl text-center">បាយឆា</h1>
            <div class="grid grid-cols-2 lg:grid-cols-2 gap-12 pt-4" >
                <div v-for="baychar in baychars" :key="baychar.index" class="border shadow-lg rounded-lg hover:scale-105 duration-300 hover:opacity-75 " @click="closecheckbox">
                    <img class="w-full h-[200px] object-cover rounded-lg" :src="baychar.img" :alt="baychar.img" />
                    <div class="felx justify-between px-2 py-4 text-center">
                        <h2 class="font-bold sm:text-xl">{{ baychar.title }}</h2>
                        <h1 class=" sm:text-xl text-red-500 font-semibold">$ {{ baychar.price }}</h1>   
                    </div>     
                </div>
            </div>
            <!-- Bree -->
            <h1 class="text-orange-600 font-bold text-4xl text-center">ស្រាបៀរ</h1>
            <div class="grid grid-cols-2 lg:grid-cols-2 gap-12 pt-4" >
                <div v-for="beer in beers" :key="beer.index" class="border shadow-lg rounded-lg hover:scale-105 duration-300 hover:opacity-75" @click="closecheckbox">
                    <img class="w-full h-[200px] object-cover rounded-lg" :src="beer.img" :alt="beer.img" />
                    <div class="felx justify-between px-2 py-4 text-center">
                        <h2 class="font-bold sm:text-xl">{{ beer.title }}</h2>
                        <h1 class=" sm:text-xl text-red-500 font-semibold">$ {{ beer.price }}</h1>   
                    </div>     
                </div>
            </div>

            <!-- selected items -->
            <!-- Overlay -->
            <div v-if="open" class="bg-black/80 fixed w-full h-screen z-10 top-0 left-0">
         
                 <div className='max-w-[1640px] mx-auto p-4'>
                    <div className='max-h-[500px] relative'>
                    <!-- Overlay  -->
                         <div className=' absolute w-full h-full  max-h-[500px bg-black/40 justify-center]' >
                         <div class="w-[40%] h-[70vh] bg-white m-auto my-[5%]  rounded-3xl ">
                            <button @click="closecheckbox" class=" my-3 mx-3">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                                </svg>

                            </button>
                            <img class=" w-[35%] max-h-[500px] object-cover m-auto" src="https://th.bing.com/th/id/R.b9d44a27b2df40a924277b2ec68c4922?rik=q8JrOZHtGBcnIg&pid=ImgRaw&r=0" alt="">
                            <div class="py-5 px-10 ">
                                <h1>សាច់អាំងមូកថ:</h1>
                                <h1>10$</h1>

                            </div>
                            
                            
                            <div class="w-[90%] h-[10vh] bg-[#FFFDE7] rounded-lg border-2 border-slate-300 m-auto px-5 py-5">

                                <span class="flex gap-3">
                                    <input type="checkbox" v-model="smallChecked" name="smallCheckbox" id="smallCheckbox">
                                    <label for="smallCheckbox">Small</label>
                                </span>

                                <span class="flex gap-3">
                                    <input type="checkbox" v-model="bigChecked" name="bigCheckbox" id="bigCheckbox">
                                    <label for="bigCheckbox">Big</label>
                                </span>
                            </div>
                            <!-- Show selected checkboxes -->
                            <div class="px-10">
                                <h1>Selected Options:</h1>
                                <ul>
                                <li v-if="smallChecked">Small</li>
                                <li v-if="bigChecked">Big</li>
                                </ul>                         
                            </div>
                            <div class=" px-10 py-5 flex justify-around ">
                                <span class=" flex gap-2">
                                    <button class="w-5 h-5 bg-amber-300 rounded-full " @click="decr">-</button>
                                    <h1>{{ Number }}</h1>
                                    <button class="w-5 h-5 bg-amber-300 rounded-full " @click="count">+</button>
                                </span>
                                <button class="w-[200px] h-10 bg-amber-400 rounded-lg" >Add to Cart</button>
                            </div>

                         </div>
                          
                        </div>
            
                    </div>
                </div>
            </div>
            
            


            

    </div>
</template>

<script>
import { ref } from 'vue';
    export default {
          data() {
    return {
      smallChecked: false,
      bigChecked: false,
    //   close checkbox
    open: false
    };
  },
      // checkbox
  methods: {
        closecheckbox(){
            this.open = !this.open;
        }
    },
        setup(){
            const text = ref("this is text");
    const Number = ref(1);
    const count =() => {
      Number.value ++;
    };
    const decr =() => {
      if (Number.value<=0){
        alert("ដកមិនបានទេ​​ !");
      }else{
      Number.value --;
    }
    };

    
            
            const cards = ref([
                            {
                title: "សាច់អាំងមូកថ:",
                img:"https://th.bing.com/th/id/R.b9d44a27b2df40a924277b2ec68c4922?rik=q8JrOZHtGBcnIg&pid=ImgRaw&r=0",
                price: "12",
            },
            {
                id: 2,
                title: "សាច់អាំងទឹកកាពីក",
                img:"https://kohsantepheap.tv/wp-content/uploads/2021/02/1K6A4098-1.jpg",
                price: "15",
            },
            {
                id: 3,
                title: "សាច់អាំងកូនកាត់",
                img:"https://i.ytimg.com/vi/S9I6cAAOC0U/maxresdefault.jpg",
                price: "10",
            },
            {
                id: 4,
                title: "សាច់អាំងបបែចិន",
                img:"https://images.deliveryhero.io/image/fd-kh/LH/n2xb-hero.jpg",
                price: "7.5",
            },
            {
                id: 5,
                title: "សាច់គោអាំងចង្កាក់",
                img:"https://i.ytimg.com/vi/G1GCG-BASxI/maxresdefault.jpg",
                price: "2",
            },
            {
                id: 6,
                title: "មាន់អាំង",
                img:"https://th.bing.com/th/id/R.46bf86cbc69bced95128da5845c294d7?rik=ZeNgi%2bhBD1yqQQ&pid=ImgRaw&r=0",
                price: "3.5",
            },
            {
                id: 7,
                title: "នែមអាំង",
                img:"https://reviewvilla.vn/wp-content/uploads/2022/04/Nem-nuong-Nha-Trang-3.jpg",
                price: "2.5",
            },
            {
                id: 7,
                title: "ប្រហិតអាំង",
                img:"https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2023/04/09/1065745827.jpg",
                price: "2.5",
            },
            

            ]);

            // bay char

            const baychars = ref([

            {
                title: "បាយឆាពងទារ",
                img:"https://th.bing.com/th/id/OIP.mil-aU8Wuk9_l_-siUDP6gHaFa?rs=1&pid=ImgDetMain",
                price: "1.5",
            },
            {
                id: 2,
                title: "បាយឆាគ្រឿងសមុទ្រ",
                img:"https://th.bing.com/th/id/OIP.M9EVd2SRgK40z8-BuR574QHaFJ?rs=1&pid=ImgDetMain",
                price: "3",
            },
            {
                id: 3,
                title: "បាយឆាម្រះព្រៅសាចើមាន់",
                img:"https://th.bing.com/th/id/R.34fb98f73f69e43816014d6651f377ca?rik=Md5duNAgpx5HXQ&pid=ImgRaw&r=0",
                price: "2",
            },
            {
                id: 4,
                title: "បាយឆាក្តៅ",
                img:"https://www.aheadofthyme.com/wp-content/uploads/2021/08/thai-basil-chicken-300x300-1.jpg",
                price: "2.5",
            },
            

            ]);
            // bree
             const beers = ref([

            {
                title: "Hanuman",
                img:"https://cms.hanumanbeverages.com/storage/posts/June2022/CVLda5IrV4BAs93GXf5t.jpg",
                price: "1.5",
            },
            {
                id: 2,
                title: "heineken",
                img:"https://www.vietnamonline.com/media/uploads/froala_editor/images/VNO_Beer.jpg",
                price: "3",
            },
            {
                id: 3,
                title: "Vattanac",
                img:"https://th.bing.com/th/id/OIP.TZsezZ_5te2cOUNk8zxEOwHaHa?rs=1&pid=ImgDetMain",
                price: "2",
            },
            {
                id: 4,
                title: "Krud",
                img:"https://th.bing.com/th/id/OIP.95GW2Eww3KUz9y2VIuP_WQHaEK?rs=1&pid=ImgDetMain",
                price: "2.5",
            },
            

            ]);


            


            return{
                cards,
                baychars,
                beers,
                text,Number,count,decr,

            }

        }
        
    }
</script>



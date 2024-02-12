<template>
    <div>
            <div class="" >
                <div class="border shadow-lg rounded-lg hover:scale-105 duration-300 hover:opacity-75" @click="closecheckbox">
                    <img class="w-full h-[200px] object-cover rounded-lg" :src="card.img" :alt="card.img" />
                    <div class="felx justify-between px-2 py-4 text-center">
                        <h2 class="font-bold sm:text-xl">{{ card.title }}</h2>
                        <h1 class=" sm:text-xl text-red-500 font-semibold">$ {{ card.price }}</h1>   
                    </div>     
                </div>
            </div>
            <div v-if="open" class="bg-black/80 fixed w-full h-screen z-10 top-0 left-0">
        
                 <div className='max-w-[1640px] mx-auto p-4'>
                    <div className='max-h-[500px] relative'>
                    <!-- Overlay  -->
                         <div className=' absolute w-full h-full  max-h-[500px bg-black/40 justify-center]' >
                         <div class="w-[40%] h-[70vh] bg-white m-auto my-[5%]  rounded-3xl " v-for="card in cards" :key="card.index">
                            <button @click="closecheckbox" class=" my-3 mx-3">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                                </svg>

                            </button>
                                <img class="w-full h-[200px] object-cover rounded-lg" :src="card.img" :alt="card.img" />                            <div class="py-5 px-10 ">
                                <h1>{{ card.title }}</h1>
                                <h1>$ {{ card.price }}</h1>

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
                            <div class=" py-5 px-10">
                                <h1>Selected Options:</h1>
                                <ul>
                                <li v-if="smallChecked">Small</li>
                                <li v-if="bigChecked">Big</li>
                                </ul>                         
                            </div>
                            <div class=" px-10 py-5 flex justify-around ">
                                <span class=" flex gap-2">
                                    <button class="w-5 h-5 bg-red-400 rounded-full " @click="decr">-</button>
                                    <h1>{{ Number }}</h1>
                                    <button class="w-5 h-5 bg-red-400 rounded-full " @click="count">+</button>
                                </span>
                                <button class="w-[200px] h-10 bg-red-300" >Add to Cart</button>
                            </div>

                         </div>
                          
                        </div>
            
                    </div>
                </div>
            </div>
    </div>
    
</template>

<script>
    export default {
        props:{
            card:{
                type :Object,
                required: true,
            },
        },
        data() {
    return {
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
    }
</script>



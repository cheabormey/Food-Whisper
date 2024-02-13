<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container mx-auto p-6">
    <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between">
      <div class="lg:w-1/2">
        <h1 class="text-4xl font-bold mb-4">
          Food Whisper - Where Every Meal Tells a Story.
        </h1>
        <p class="text-gray-600 text-lg leading-relaxed w-full lg:w-3/4 mx-auto mb-12">
          Welcome to Food Whisper, where culinary passion meets a world of flavors! Established with a commitment to tantalize your taste buds and elevate your dining experience, we take pride in being your go-to destination for all things delicious.
          <br><br>
          At Food Whisper, we believe that great meals are not just about sustenance; they are a celebration of diverse cultures, traditions, and the joy of sharing good food with loved ones. Our team of dedicated food enthusiasts curates a mouthwatering array of recipes, culinary tips, and food-related content that caters to both novice cooks and seasoned chefs alike.
          <br><br>
          What sets us apart is our unwavering dedication to quality, authenticity, and innovation. We scour the culinary landscape to bring you a rich tapestry of recipes, ranging from timeless classics to cutting-edge gastronomic trends. Whether you're looking for quick and easy weekday dinners, indulgent weekend treats, or health-conscious options, we've got you covered.
          <br><br>
          Explore our website to discover a treasure trove of cooking inspiration, featuring step-by-step recipes, cooking hacks, and ingredient spotlights. We're not just a food website; we're your culinary companion, providing the tools and knowledge to transform your kitchen into a creative haven.
          <br><br>
          Beyond the recipes, Food Whisper is a community where food lovers gather to share their culinary adventures, exchange tips, and connect over a shared love for great food. Join us on this gastronomic journey, and let's savor the joys of cooking together.
          <br><br>
          Thank you for making us a part of your culinary experience. Cheers to good food, good company, and the joy of discovering new flavors!
        </p>
        <router-link to="/menu" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Explore Our Menu
        </router-link>
      </div>
      <div class="">
        <img class="w-full h-auto rounded-lg" src="./img/Fodd_whisper-01.jpg" alt="Food Whisper">
      </div>
    </div>
  </div>
</template>

<style scoped>

.container {
  max-width: 1200px;
}

h1 {
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  color: #4a5568;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

p {
  font-family: 'Roboto', sans-serif;
  font-size: 1.125rem;
  line-height: 1.75;
  color: #4a5568;
}

@media (min-width: 1024px) {
  .container {
    padding: 0 2rem;
  }
}

</style>

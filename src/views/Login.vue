<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="login" style="width: 500px; height:fit-content; ">
    <h1>Login </h1>
    <form @submit.prevent="handleSubmit" >
      <label for="email">Email</label>
      <input type="email" id="email" v-model="email" required placeholder="Enter your email" :style="{ 'color': '#003049', 'placeholder-color': '#C8C8C8', 'background-color': '#F5F5F5' }">

      <label for="password">Password</label>
      <input type="password" id="password" v-model="password" required placeholder="Enter your password" :style="{ 'color': '#003049', 'placeholder-color': '#C8C8C8', 'background-color': '#F5F5F5' }">
      <router-link to="/Home">
      <button type="submit" :style="{ 'background-color': '#FCBF49', 'color': '#046DA8' }">Login</button>
      </router-link>
 <button type="button" class="close-btn" @click="$emit('close-modal')" :style="{ 'background-color': '#FF0000', 'color': '#fff', 'font-size': '1.2rem', 'border': 'none', 'cursor': 'pointer' }">x</button>
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      handleSubmit() {
        // Handle form submission
        console.log(`Email: ${this.email}, Password: ${this.password}`);
        // Clear form fields
        this.email = '';
        this.password = '';
      },
      closeLogin() {
        // Handle close button click
        console.log('Closing login modal...');
        this.$emit('close-modal');
      },
    },
  }
</script>

<style scoped>
.login {
  width: 400px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0px 0px 10px #ccc;
  position: relative;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 3rem;
  font-weight: bold;
  font-family: 'Times New Roman', Times, serif;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 10px;
  font-size: 1.2rem;
  font-weight: bold;
}

input[type="email"],
input[type="password"] {
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ddd;
  margin-bottom: 10px;
  font-size: 1.2rem;
}

button[type="submit"] {
  padding: 10px;
  border-radius: 4px;
  border: none;
  background-color: #FCBF49;
  color: #046DA8;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold;
}

button[type="submit"]:hover {
  background-color: #FFD580;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #FF0000;
  color: #fff;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  padding: 5px;
  border-radius: 100%;
}
</style>
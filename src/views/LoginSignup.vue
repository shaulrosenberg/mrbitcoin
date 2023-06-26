<template>
    <div class="signup-page">
      <h2>Welcome to Mr Bitcoin!</h2>
      <form @submit.prevent="signup">
        <input v-model="username" type="text" placeholder="Enter your username" required />
        <button type="submit">Sign Up / Login</button>
      </form>
      <p>For a more advanced login experience, please visit the desktop version.</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
      };
    },
    methods: {
      async signup() {
        await this.$store.dispatch('signup', { username: this.username });
        this.$router.push('/');
      },
    },
  };
  </script>
  
  <style scoped>
  .signup-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    font-family: Arial, sans-serif;
    text-align: center;
    background-color: #f5f5f5;
  }
  
  h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  input {
    margin-bottom: 1rem;
    padding: 0.5rem;
    font-size: 1.2rem;
    width: 100%;
    max-width: 300px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  button {
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    color: #fff;
    background-color: #333;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  p {
    margin-top: 2rem;
    color: #666;
    font-size: 1rem;
  }
  </style>
  
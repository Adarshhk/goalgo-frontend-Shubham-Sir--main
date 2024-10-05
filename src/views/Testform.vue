<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 class="text-2xl font-bold text-center text-gray-700">Sign Up</h2>
        <form @submit.prevent="handleSubmit" class="mt-6">
          <div class="mb-4">
            <label for="email" class="block mb-2 text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              v-model="formData.email"
              required
              class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>
  
          <div class="mb-4">
            <label for="password" class="block mb-2 text-sm font-medium text-gray-600">Password</label>
            <input
              type="password"
              id="password"
              v-model="formData.new_password"
              required
              class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
            />
          </div>
  
          <div class="mb-6">
            <label for="confirmPassword" class="block mb-2 text-sm font-medium text-gray-600">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              v-model="formData.confirm_password"
              required
              class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
            />
          </div>
  
          <button
            type="submit"
            class="w-full px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
import { reactive } from 'vue';


  const handleSubmit = async() => {
    const res = await fetch('http://194.163.161.83:5001/forget-password',{
        method : "POST",
        headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
    })

    const result = await res.json();
    console.log(result);


  }

  const formData = reactive({
    email : "",
    new_password : "",
    confirm_password : ""
  })
  </script>

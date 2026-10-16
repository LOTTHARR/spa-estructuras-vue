<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="app-container">
    <header class="navbar">
      <div class="brand">
        <h1>Proyecto Unidad 3: Estructuras de Control en Vue 3</h1>
      </div>
      <nav class="nav-links">
        <router-link to="/v-if" class="nav-item">v-if / v-else</router-link>
        <router-link to="/v-show" class="nav-item">v-show</router-link>
        <router-link to="/v-for" class="nav-item">v-for</router-link>
        <router-link to="/v-key" class="nav-item">v-bind:key</router-link>
      </nav>
    </header>

    <main class="main-content">
      <router-view />
    </main>

    <footer class="footer">
      <p>Single Page Application (SPA) con Vue 3 + Vue Router | Publicado en GitHub Pages</p>
    </footer>
  </div>
</template>
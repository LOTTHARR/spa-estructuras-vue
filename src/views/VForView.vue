<template>
  <div class="card">
    <h2>Directiva: <code>v-for</code></h2>
    <p class="explanation">
      La directiva <strong>v-for</strong> permite renderizar una lista de elementos basándose en un arreglo de datos. 
      Utiliza una sintaxis especial en la forma de <code>item in items</code>, donde <code>items</code> es el arreglo de origen 
      e <code>item</code> es un alias para el elemento que se está iterando en cada ciclo.
    </p>

    <div class="example-box">
      <h3>Ejemplo Práctico: Tecnologías del Proyecto</h3>
      <ul class="custom-list">
        <li v-for="(tecnologia, index) in tecnologias" :key="index">
          <span class="index-num">{{ index + 1 }}</span> {{ tecnologia }}
        </li>
      </ul>
    </div>

    <div class="code-preview">
      <h4>Código implementado:</h4>
      <pre><code>&lt;ul&gt;
  &lt;li v-for="(tecnologia, index) in tecnologias" :key="index"&gt;
    {{ index + 1 }} - {{ tecnologia }}
  &lt;/li&gt;
&lt;/ul&gt;</code></pre>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const tecnologias = ref([
  'HTML5 y CSS3 Moderno',
  'JavaScript (ES6+)',
  'Vue.js 3 (SPA)',
  'Vue Router 4',
  'Vite (Empaquetador y Compilador)'
])
</script>
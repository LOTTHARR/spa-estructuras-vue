<template>
  <div class="card">
    <h2>Directiva: <code>v-if / v-else-if / v-else</code></h2>
    <p class="explanation">
      La directiva <strong>v-if</strong> se utiliza para renderizar condicionalmente un bloque. 
      El bloque solo se dibuja en el DOM si la expresión directiva devuelve un valor verdadero. 
      Se complementa con <strong>v-else-if</strong> y <strong>v-else</strong> para evaluar múltiples condiciones.
    </p>

    <div class="example-box">
      <h3>Ejemplo Práctico: Evaluador de Calificaciones</h3>
      <label for="calificacion">Ingresa una calificación (0 - 100): </label>
      <input id="calificacion" type="number" v-model.number="calificacion" min="0" max="100" />

      <div class="result">
        <p v-if="calificacion >= 90" class="badge excel">🌟 Estado: Excelente (Aprobado con honores)</p>
        <p v-else-if="calificacion >= 70" class="badge good">✅ Estado: Aprobado (Desempeño satisfactorio)</p>
        <p v-else class="badge fail">❌ Estado: Reprobado (Requiere nivelación)</p>
      </div>
    </div>

    <div class="code-preview">
      <h4>Código implementado:</h4>
      <pre><code>&lt;p v-if="calificacion &gt;= 90"&gt;🌟 Estado: Excelente&lt;/p&gt;
&lt;p v-else-if="calificacion &gt;= 70"&gt;✅ Estado: Aprobado&lt;/p&gt;
&lt;p v-else&gt;❌ Estado: Reprobado&lt;/p&gt;</code></pre>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const calificacion = ref(85)
</script>
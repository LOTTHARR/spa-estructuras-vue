<template>
  <div class="card">
    <h2>Directiva: <code>v-show</code></h2>
    <p class="explanation">
      La directiva <strong>v-show</strong> muestra u oculta un elemento alternando la propiedad CSS 
      <code>display: none</code>. A diferencia de <code>v-if</code>, el elemento siempre se renderiza y permanece en el DOM HTML, 
      lo que la hace más eficiente cuando el elemento cambia de visibilidad con mucha frecuencia.
    </p>

    <div class="example-box">
      <h3>Ejemplo Práctico: Panel de Detalles Técnicos</h3>
      <button @click="mostrarDetalles = !mostrarDetalles" class="btn">
        {{ mostrarDetalles ? 'Ocultar Detalles' : 'Mostrar Detalles' }}
      </button>

      <div v-show="mostrarDetalles" class="details-panel">
        <h4>📊 Información del Sistema</h4>
        <p><strong>Framework:</strong> Vue 3 (Composition API)</p>
        <p><strong>Enrutador:</strong> Vue Router 4</p>
        <p><strong>Nota:</strong> Si inspeccionas este bloque en el navegador cuando está oculto, verás que tiene aplicado el estilo <code>style="display: none;"</code>.</p>
      </div>
    </div>

    <div class="code-preview">
      <h4>Código implementado:</h4>
      <pre><code>&lt;button @click="mostrarDetalles = !mostrarDetalles"&gt;Alternar&lt;/button&gt;
&lt;div v-show="mostrarDetalles"&gt;
  &lt;p&gt;Información del Sistema...&lt;/p&gt;
&lt;/div&gt;</code></pre>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const mostrarDetalles = ref(true)
</script>
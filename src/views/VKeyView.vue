<template>
  <div class="card">
    <h2>Directiva: <code>v-bind:key</code> (o <code>:key</code>)</h2>
    <p class="explanation">
      Cuando Vue actualiza una lista de elementos renderizados con <code>v-for</code>, utiliza el atributo especial 
      <strong>v-bind:key</strong> para dar una identidad única a cada nodo. Esto permite a Vue rastrear qué elementos 
      han cambiado, se han agregado o se han eliminado, reutilizando y reordenando los elementos existentes en el DOM sin perder su estado interno.
    </p>

    <div class="example-box">
      <h3>Ejemplo Práctico: Gestor Dinámico con ID Único</h3>
      <div class="input-group">
        <input v-model="nuevaTarea" placeholder="Escribe una nueva tarea..." @keyup.enter="agregarTarea" />
        <button @click="agregarTarea" class="btn">Agregar</button>
      </div>

      <ul class="task-list">
        <li v-for="tarea in tareas" v-bind:key="tarea.id" class="task-item">
          <div>
            <input type="checkbox" v-model="tarea.completada" />
            <span :class="{ completed: tarea.completada }">
              <strong>[ID: {{ tarea.id }}]</strong> {{ tarea.texto }}
            </span>
          </div>
          <button @click="eliminarTarea(tarea.id)" class="btn-delete">Eliminar</button>
        </li>
      </ul>
    </div>

    <div class="code-preview">
      <h4>Código implementado:</h4>
      <pre><code>&lt;li v-for="tarea in tareas" v-bind:key="tarea.id"&gt;
  &lt;strong&gt;[ID: {{ tarea.id }}]&lt;/strong&gt; {{ tarea.texto }}
&lt;/li&gt;</code></pre>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const nuevaTarea = ref('')
const tareas = ref([
  { id: 101, texto: 'Crear repositorio en GitHub', completada: true },
  { id: 102, texto: 'Configurar rutas con Vue Router', completada: true },
  { id: 103, texto: 'Compilar proyecto con npm run build', completada: false }
])

let siguienteId = 104

const agregarTarea = () => {
  if (nuevaTarea.value.trim() !== '') {
    tareas.value.push({
      id: siguienteId++,
      texto: nuevaTarea.value,
      completada: false
    })
    nuevaTarea.value = ''
  }
}

const eliminarTarea = (id) => {
  tareas.value = tareas.value.filter(t => t.id !== id)
}
</script>
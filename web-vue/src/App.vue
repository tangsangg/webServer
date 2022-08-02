<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
   <ul>
    <li
      v-for="item of hits"
      :key="item.objectID"
    >
      <a :href="item.url">{{item.title}}</a>
    </li>
  </ul>
  {{text}}
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>
<script>

export default {
 setup() {
    const state = reactive({
      hits: []
    })
    onMounted(async () => {
      const data = await fetch(
        'https://hn.algolia.com/api/v1/search?query=vue'
      ).then(rsp => rsp.json())
      state.hits = data.hits
    })
    return state
  }
}
</script>
<style lang="postcss">
@import url("./index.css");
</style>

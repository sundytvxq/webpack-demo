<template>
  <div>
    <h3>about组件</h3>
    <h4>vuex的使用</h4>

    单价是：{{ this.$store.state.price }}
    <br />
    <button @click="$store.commit('add', 5)">count++</button>
    数量是：{{ this.$store.state.count }}

    <br />
    总价是：{{ this.$store.getters.sum }}
  </div>
</template>

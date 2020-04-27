<template>
  <div>
    home组件
    <ul>
      <li v-for="item in list" :key="item.id">{{ item.title }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [],
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      this.axios.get("/todos").then((res) => {
        console.log(res);
        this.list = res.data;
      });
    },
  },
};
</script>

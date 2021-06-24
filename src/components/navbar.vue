<template>
  <nav id="navbar">
    <div v-for="(router, index) in routers" :key="index" class="navbar-item">
      <router-link :to="router.to" @click="$emit('input', index)">
        {{ router.label }}
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  props: ["value"],
  data() {
    return {
      routers: [
        { label: "首頁", to: { name: "Home" } },
        { label: "關於", to: { name: "About" } },
        { label: "其他", to: { name: "Other" } },
      ],
    };
  },
};
</script>

<style lang="sass" scoped>
#navbar
  background-color: #FFFFFF
  display: flex
  flex-flow: row nowrap
  justify-content: flex-start
  align-items: center
  padding: 1rem 1rem
.navbar-item
  padding: 0 1.5rem
  &:not(:last-child)
    border-right: #C8C8C8 solid 1px
</style>

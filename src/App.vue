<template>
  <div ref="app" id="app">
    <navbar />
    <main>
      <transition :name="transitionName">
        <router-view />
      </transition>
    </main>
  </div>
</template>

<script>
import screenfull from "screenfull";

export default {
  data() {
    return {
      transitionName: "",
    };
  },
  components: {
    navbar: () => import("@/components/navbar.vue"),
  },
  watch: {
    $route(to, from) {
      if (to.meta.index > from.meta.index) {
        this.transitionName = "slide-left";
      } else {
        this.transitionName = "slide-right";
      }
    },
  },
  methods: {
    click() {
      if (screenfull.isEnabled) {
        screenfull.request(document.getElementById("app"));
      }
    },
  },
};
</script>

<style lang="sass" scoped>
#app
  background-color: #EEEEEE
main
  padding: 1.5rem 0
  text-align: center

// vue transition life circle

// v-leave          離開 前
// v-leave-active   離開 ing
// v-leave-to       離開 後

// v-enter          進去 前    
// v-enter-active   進去 ing
// v-enter-to       進去 後

.transition
  overflow: hidden

.slide-left,
.slide-right
  &-enter-active,
  &-leave-active
    transition: all .5s ease-in-out
    position: fixed
    min-width: 100vw

.slide-left-enter,
.slide-right-leave-to
  transform: translateX(100%)

.slide-left-leave-to,
.slide-right-enter
  transform: translateX(-100%)
</style>

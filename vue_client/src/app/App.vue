<style scoped>
.container {
  flex: 1 0 auto;
}
.app {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
<template>
<div class="app">
  <div class="container">
    <my-navbar></my-navbar>
    <div v-if="alert.message" :class="`alert ${alert.type}`">{{alert.message}}</div>
    <router-view></router-view>
    <my-footer></my-footer>
  </div>
</div>


</template>

<script>
export default {
    name: 'app',
    computed: {
        alert () {
            return this.$store.state.alert
        }
    },
    watch:{
        $route (to, from){
            this.$store.dispatch('alert/clear');
        }
    } 
};
</script>
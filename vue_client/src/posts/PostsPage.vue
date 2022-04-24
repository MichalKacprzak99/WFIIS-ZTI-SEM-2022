<style scoped>
.usersContainer {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
}
</style>
<template>
  <div class="usersContainer">

    <template v-for="post in posts.items">
      <UserCard :post="post"/>

    </template>
  </div>
</template>

<script>
import UserCard from './components/Post'

export default {
  components: {UserCard},
  computed: {
    posts() {
      return this.$store.state.posts.all;
    }
  },
  created() {
    this.$store.dispatch('posts/getAll');
  }
};
</script>
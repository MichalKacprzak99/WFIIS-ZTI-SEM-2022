<style scoped>
.usersContainer {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
}
</style>
<template>
  <div class="usersContainer">

    <template v-for="user in users.items">
      <UserCard :email="user.email" :first-name="user.firstName" :last-name="user.lastName"/>

    </template>
  </div>
</template>

<script>
import UserCard from './components/UserCard'

export default {
  components: {UserCard},
  computed: {
    users() {
      return this.$store.state.users.all;
    }
  },
  created() {
    this.$store.dispatch('users/getAll');
  }
};
</script>
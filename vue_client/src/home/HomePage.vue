<template>
  <div>
    <h1>Hi {{ user.firstName }}!</h1>
    <p>You're logged in with Vue + Vuex & JWT!!</p>
    <p>
      <router-link to="/login">Logout</router-link>
    </p>
    <p>
      <router-link to="/users">Users</router-link>
    </p>
    <p>
      <router-link to="/new-user">Add new user</router-link>
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.state.authentication.user;
    },
    users() {
      return this.$store.state.users.all;
    }
  },
  created() {
    this.$store.dispatch('users/getAll');
  }
};
</script>
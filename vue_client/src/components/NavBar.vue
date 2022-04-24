<style scoped>

nav {
  padding: 10px;
  font-size: 30px;

}

a {
  position: relative;
  text-decoration: none;
  color: black;
}

a::before {
  content: "";
  position: absolute;
  height: 3px;
  right: 0;
  bottom: -3px;
  left: 0;
}

nav.flexbox {
  display: flex;
  justify-content: space-between;
  align-items: center;

}

ul {
  display: flex;
  align-items: center;
  list-style-type: none;
}

ul li {
  margin-right: 20px;
}
</style>
<template>
  <nav class="flexbox">
    <a href="/">Home</a>
    <ul>
      <li v-if="loggedIn">
        <router-link to="/login">Logout</router-link>
      </li>
      <li v-else>
        <router-link to="/login">Login</router-link>
      </li>
      <li>
        <router-link to="/posts">Posts</router-link>
      </li>
      <li>
        <router-link to="/add-post">Add new post</router-link>
      </li>
    </ul>
  </nav>

</template>

<script>

export default {
  computed: {
    loggedIn() {
      return this.$store.state.authentication.status.loggedIn;
    }
  },
  name: "NavBar"
}
</script>

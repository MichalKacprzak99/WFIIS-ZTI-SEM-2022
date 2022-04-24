<style scoped>
.form {
  display: flex;
  flex-direction: column;
  max-width: 60%;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
}
</style>
<template>
  <div class="form">
    <h2>Add New Post</h2>
    <form @submit.prevent="handleAddSubmit">
      <div class="form-group">
        <label for="content">Content</label>
        <input type="text" v-model="content" name="content" class="form-control"
               :class="{ 'is-invalid': submitted && !content }"/>
        <div v-show="submitted && !content" class="invalid-feedback">First Name is required</div>
      </div>
      <div class="form-group">
        <button class="btn btn-primary">Add</button>
        <img v-show="adding"
             src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="/>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: '',
      submitted: false
    }
  },
  computed: {
    adding () {
      return this.$store.state.posts.all.loading;
    }
  },
  methods: {
    handleAddSubmit(e) {
      this.submitted = true;
      const {content} = this;
      const {dispatch} = this.$store;
      if (content) {
        dispatch('posts/add', {content});
      }
    }
  }
};
</script>
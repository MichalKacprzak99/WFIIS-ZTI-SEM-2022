<template>
  <div>
    <h2>Add New User</h2>
    <form @submit.prevent="handleAddSubmit">
      <div class="form-group">
        <label for="firstName">First Name</label>
        <input type="text" v-model="firstName" name="firstName" class="form-control"
               :class="{ 'is-invalid': submitted && !firstName }"/>
        <div v-show="submitted && !firstName" class="invalid-feedback">First Name is required</div>
      </div>
      <div class="form-group">
        <label for="lastName">Last Name</label>
        <input type="text" v-model="lastName" name="lastName" class="form-control"
               :class="{ 'is-invalid': submitted && !lastName }"/>
        <div v-show="submitted && !lastName" class="invalid-feedback">Last Name is required</div>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" v-model="email" name="email" class="form-control"
               :class="{ 'is-invalid': submitted && !email }"/>
        <div v-show="submitted && !email" class="invalid-feedback">Email is required</div>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" v-model="password" name="password" class="form-control"
               :class="{ 'is-invalid': submitted && !password }"/>
        <div v-show="submitted && !password" class="invalid-feedback">Password is required</div>
      </div>

      <div class="form-group">
        <button class="btn btn-primary">Add</button>
<!--        <img v-show="loggingIn"-->
<!--             src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="/>-->
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      password: '',
      email: '',
      submitted: false
    }
  },
  methods: {
    handleAddSubmit(e) {
      this.submitted = true;
      const {firstName, lastName, password, email} = this;
      const {dispatch} = this.$store;
      if (firstName && lastName && password && email) {
        dispatch('users/add', {firstName, lastName, password, email});
      }
    }
  }
};
</script>
<style scoped>

.footer {
  flex-shrink: 0;
  text-align: center;
  padding: 20px;
  position: fixed;
  left: 0;
  bottom: 0;
  height: 60px;
  width: 100%;
}

</style>
<template>
  <footer class="footer">Copyright &copy; Vue Example {{ new Date().getFullYear() }}</footer>
</template>
<script>
export default {
name: "Footer"
}
</script>


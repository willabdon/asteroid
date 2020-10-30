<template>
  <div class="user-icon" v-if="show">
    <span>W</span>
  </div>
</template>

<script>
export default {
  props: ["active"],
  computed: {
    show() {
      const exclude = ['Sign Up', 'Login']
      return !(this.$router.currentRoute in exclude)
    }
  }
};
</script>

<style scoped>
.user-icon {
  color: #19c027;
  font-weight: 700;
  position: fixed;
  right: 12%;
  top: 1.5%;
  background-color: rgb(219, 219, 219);
  padding: 10px 15px;
  border-radius: 50%;
}

</style>

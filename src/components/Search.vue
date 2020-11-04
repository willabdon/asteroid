<template>
  <b-form @submit.prevent="submit">
    <input
      class="form-control"
      type="text"
      placeholder="Search by ID"
      aria-label="Search"
      v-model="search"
    />
  </b-form>
</template>

<script>
export default {
  data() {
    return {
      search: "",
    };
  },
  methods: {
    submit() {
      this.$emit("search", this.search);
    },
  },
};
</script>



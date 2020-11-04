<template>
  <div>
    <b-form
      @submit.prevent="submit"
      class="d-flex justify-content-center mt-3 date-filter pb-3"
    >
      <div class="mx-3">
        <label for="start-datepicker">Start Date</label>
        <b-form-datepicker
          size="sm"
          locale="en"
          id="start-datepicker"
          v-model="date.start"
          class="mb-2"
          :date-format-options="{
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
          }"
        ></b-form-datepicker>
      </div>
      <div class="mx-3">
        <label for="end-datepicker">End date</label>
        <b-form-datepicker
          size="sm"
          locale="en"
          id="end-datepicker"
          v-model="date.end"
          class="mb-2"
          :date-format-options="{
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
          }"
        ></b-form-datepicker>
      </div>
      <b-button type="submit" variant="outline-secondary" lg="4"
        ><b-icon-search
      /></b-button>
    </b-form>
    <small class="text-danger" v-if="error">{{ error }}</small>
  </div>
</template>

<script>
export default {
  props: ["error"],
  data() {
    return {
      date: {
        start: null,
        end: null,
      },
    };
  },
  methods: {
    submit() {
      this.$emit("filter", this.date);
    },
  },
};
</script>

<style scoped>
.date-filter {
  border-bottom: 1px solid #ffffff2e;
}
</style>



<template>
  <div class="container">
    <form @submit.prevent="onCreatePost">
      <div class="form-group">
        <label>Name</label>
        <input type="text" class="form-control" placeholder="Enter name" v-model="name"/>
      </div>
      <div class="form group">
        <label>Address</label>
        <input type="text" class="form-control" placeholder="Enter address" v-model="address"/>
      </div>
      <div class="mt-3">
        <button type="submit" class="btn btn-primary">Post data</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      name: "",
      address: "",
    };
  },
  methods: {
    onCreatePost() {
      axios
        .post(`http://10.0.32.6:9090/adduser`, {
          name: this.name,
          address: this.address,
        })
        .then((response) => {
          console.log(response);
        });
    },
  },
};
</script>

<style>
</style>
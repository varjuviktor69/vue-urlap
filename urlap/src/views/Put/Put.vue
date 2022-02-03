<template>
  <div class="container">
    <form>
      <div class="form-group">
        <input
          class="form-control"
          type="number"
          placeholder="Enter user ID to update"
          v-model="id"
        />
        <input
          class="form-control"
          type="text"
          placeholder="Enter name"
          v-model="name"
        />
        <input
          class="form-control"
          type="text"
          placeholder="Enter address"
          v-model="address"
        />
      </div>
    </form>
    <button class="btn btn-primary" type="button" v-on:click="updateUser()">
      Update
    </button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      id: "",
      name: "",
      address: "",
      user: []
    };
  },
  methods: {
    updateUser() {
      axios
        .put(`http://10.0.32.6:9090/updateuser`, {name: this.name, address: this.address})
        .then((response) => {
          console.log(response.data);
         
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style>
</style>
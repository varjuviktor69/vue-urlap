<template>
  <div class="container">
    <form>
      <div class="form-group">
        <input
          class="form-control"
          type="number"
          placeholder="Enter user ID to delete"
          v-model="id"
        />
      </div>
    </form>
    <button class="btn btn-primary" type="button" v-on:click="delUser()">
      Delete
    </button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      id: ""
    };
  },
  methods: {
    delUser() {
      axios
        .delete(`http://10.0.32.6:9090/deleteuser/` + this.id)
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
<template>
  <div class="container">
    <form>
      <div class="form-group">
        <input
          class="form-control"
          type="number"
          placeholder="Enter user ID to show"
          v-model="id"
        />
      </div>
    </form>
    <button class="btn btn-primary" type="button" v-on:click="getUser()">
      Submit
    </button>
    <p class="mt-2">Name: {{user.name}} <br> Address: {{user.address}}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      id:"",
      user:[]
    };
  },
  methods: {
    getUser() {
      axios
        .get(`http://10.0.32.6:9090/user/` + this.id)
        .then((response) => {
          console.log(response.data);
          this.user = response.data;
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style>
</style>
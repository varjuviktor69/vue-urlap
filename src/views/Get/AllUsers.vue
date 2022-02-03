<template>
  <div class="container">
    <form>
      <div class="card" v-for="d in datastream" :key="d.id">
        {{d.name}}
        {{d.address}}
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios"

export default {
  data() {
    return {
      datastream: []
    };
  },
    created(){
        axios
        .get("http://10.0.32.6:9090/users")
        .then(response => {
            console.log(response.data)
            this.datastream = response.data
        })
        .catch((error) => console.log(error))
    },
};
</script>

<style>
</style>
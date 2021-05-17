<template>
  <div id="app">
    <v-app>
      <v-row class="d-flex justify-center mt-5">
        <v-card class="mt-10" width="500" height="500" elevation="10">
          <div>
            <img :src="imgsrc" width="200" height="150" />
          </div>
          <h2 class="text-center" style="font-family: initial">
            Zeeshan Satellite
          </h2>

          <v-text-field
            class="mx-auto px-2 mt-10"
            v-model="username"
            outlined
            autocomplete="off"
            label="User Name"
            required
          ></v-text-field>
          <v-text-field
            v-model="password"
            class="mx-auto px-2 mt-2"
            autocomplete="off"
            outlined
            type="password"
            label="Password"
            required
          ></v-text-field>
          <v-btn @click="login()" color="primary"> Login </v-btn>
        </v-card>
      </v-row>
    </v-app>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  data() {
    return {
      imgsrc: require("@/assets/logo.jpg"),
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      if(this.username == 'zeeshan' && this.password == 'zeesat98')
      {
        localStorage.setItem("token", true);
        this.$router.push({ name: 'dashboard' })
      }
      else {
        alert("Invalid Email And Password");
      }
    }
  }
};
</script>

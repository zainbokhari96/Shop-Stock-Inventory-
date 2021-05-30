<template>
  <div id="app">
    <v-app style="background: whitesmoke;">
      <v-row class="d-flex justify-center mt-12">
        <v-card class="mt-10" width="380" height="450" elevation="16">
          <div>
            <img :src="imgsrc" width="200" height="150" />
          </div>
          <h2 class="text-center" style="font-family: initial">
            Zeeshan Satellite
          </h2>

          <v-text-field
            class="mx-auto px-2 mt-10"
            v-model="username"
            dense
            outlined
            autocomplete="off"
            label="User Name"
            required
          ></v-text-field>
          <v-text-field
            v-model="password"
            dense
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
        this.$router.push({ path: '/Dashboard' })
      }
      else {
        alert("Invalid Email And Password");
      }
    }
  }
};
</script>

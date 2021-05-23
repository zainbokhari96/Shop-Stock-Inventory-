<template>
  <v-navigation-drawer
    absolute
    permanent
    left
    color="cyan lighten-5"
    class="text-white"
  >
    <template v-slot:prepend>
      <v-list-item two-line>
        <v-list-item-avatar>
          <img :src="image" />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Zeeshan Bokhari</v-list-item-title>
          <v-list-item-subtitle>@zeeshan satellite</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </template>

    <v-divider></v-divider>

    <v-list dense >
      <v-list-item class="mt-5 d-flex justify-center">
        <v-btn
         color="#1A237E"
          class="white--text"
          width="200"
          to="dashboard"
          >Dashboard</v-btn
        >
      </v-list-item>
      <v-list-item class="mt-5 d-flex justify-center">
        <v-btn
          color="#1A237E"
          class="white--text"
          width="200"
          to="/dish"
          >Dish</v-btn
        >
      </v-list-item>
      <v-list-item class="mt-5 d-flex justify-center">
        <v-btn
          color="#1A237E"
          class="white--text"
          width="200"
          to="/receivers"
          >Reciver</v-btn
        >
      </v-list-item>
      <v-list-item class="mt-5 d-flex justify-center">
        <v-btn
          color="#1A237E"
          class="white--text"
          width="200"
          to="/lnb"
          >LNB</v-btn
        >
      </v-list-item>
      <v-list-item class="mt-5 d-flex justify-center">
        <v-btn color="#1A237E" class="white--text" width="200" to="/acessories"
          >Accessories</v-btn
        >
      </v-list-item>
      <v-list-item class="mt-5 d-flex justify-center">
        <v-btn color="#1A237E" class="white--text" width="200" to="/reports"
          >Reports</v-btn
        >
      </v-list-item>
      <v-list-item class="mt-5 d-flex justify-center">
        <v-btn
          color="#1A237E"
          class="white--text"
          width="200"
          to="/"
          >Logout</v-btn
        >
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      image: require("@/assets/logo.jpg"),
    };
  },
};
</script>

<style scoped></style>

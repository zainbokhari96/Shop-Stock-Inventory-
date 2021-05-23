<template>
  <v-app style="background: #fafafa">
    <v-row>
      <v-col cols="2">
        <Navbar />
      </v-col>

      <v-col
        class="pl-12"
        cols="10"
        style="overflow: scroll; max-height: 650px"
      >
        <v-row class="pt-3" style="background: #1a237e">
          <v-col class="white--text THIN"> Zeeshan Satellite Lahore </v-col>
        </v-row>
        <!-- LNB -->
        <v-row>
          <v-col class="d-flex justify-end">
           
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import Navbar from "@/views/Navbar";
export default {
  name: "LNB",
  components: {
    Navbar,
  },
  data() {
    return {
      saleModal: false,
      addModal: false,
      addNewModal: false,
      deleteModal: false,
      brand: "",
      category: "",
      quantity: "",
      deletedCategory: "",
    };
  },
  computed: {
    lnb() {
      return this.$store.state.lnb;
    },
  },
  methods: {
    addNewLnb() {
      let lnb = {
        brand: this.brand,
        category: this.category,
        quantity: parseFloat(this.quantity),
      };
      this.$store.commit("addNewLnb", lnb);
    },
    deletedLnb() {
      this.$store.commit("deleteLnb", this.deletedCategory);
    },
    sale() {
      let lnb = {
        category: this.category,
        quantity: this.quantity,
      };
      this.$store.commit("saleLnb", lnb);
    },
    add() {
      let lnb = {
        category: this.category,
        quantity: this.quantity,
      };
      this.$store.commit("restockLnb", lnb);
    },
  },
};
</script>

<template>
  <v-app>
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
          <v-col class="d-flex justify-center">
            <v-card>
              <div class="mt-5">All Reports</div>
              <v-card-title>
                <v-text-field
                  v-model="search"
                  append-icon="mdi-magnify"
                  label="Search"
                  single-line
                  hide-details
                ></v-text-field>
              </v-card-title>
              <v-data-table
                :headers="headers"
                :items="reports"
                :search="search"
              ></v-data-table>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import Navbar from "@/views/Navbar";
export default {
  name: "Reports",
  components: {
    Navbar,
  },
  data() {
    return {
      search: "",
      headers: [
        {
          text: "Date",
          align: "start",
          filterable: false,
          value: "date",
        },
        { text: "Item", value: "category" },
        { text: "Quantity", value: "quantity" },
      ],
    };
  },
  computed: {
    reports() {
      return this.$store.state.reports;
    },
  },
  methods: {
  },
};
</script>

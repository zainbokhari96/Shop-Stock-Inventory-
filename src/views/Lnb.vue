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
          <v-col class="d-flex justify-end">
            <v-btn
              @click="addNewModal = true"
              color="#1A237E"
              class="white--text"
              elevation="2"
            >
              + Add New LNB</v-btn
            >
          </v-col>
        </v-row>
     
        <v-row>
          <v-col
            class="d-flex justify-center text--primary"
            style="background: #cddc39"
          >
            LNB Stock:
            <span class="ml-auto"
              ><v-btn
                small
                color="error"
                @click="
                  (deleteModal = true)
                "
                >Delete Category</v-btn
              ></span
            ></v-col
          >
        </v-row>
        <v-row>
          <v-col
            class="d-flex justify-center"
            cols="2"
            v-for="x in lnb"
            :key="x.category"
          >
            <v-card class="mx-1" width="180" height="max-content" elevation="10">
              <v-card-text>
                <div class="grey--text">{{ x.brand }}</div>
                <span class="Heading 6"
                  ><b>{{ x.category }}</b></span
                >
                <br />
                <span class="grey--text">Remaining Qty:</span>
                <br />
                <span class="display-3 mt-n2">{{ x.quantity }}</span>
                <br />
                <span class="grey--text">Pcs</span>
              </v-card-text>
              <v-card-actions class="d-flex justify-center mt-n6">
                <v-btn
                  text
                  color="red darken-4"
                  @click="
                    (addModal = true),
                      (category = x.category),
                      (quantity = ''),
                      (selectedMaterial = x.material)
                  "
                >
                  Add
                </v-btn>
                <v-btn
                  text
                  color="green darken-4"
                  @click="
                    (saleModal = true),
                      (category = x.category),
                      (quantity = ''),
                      (selectedMaterial = x.material)
                  "
                >
                  Sale
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <!-- Sale Modal -->
    <v-dialog v-model="saleModal" width="400">
      <v-card>
        <v-card-title class="headline lighten-2"> Sale Entry</v-card-title>
        <v-divider></v-divider>
        <v-row class="mt-5 mx-5">
          <v-col>
            <v-text-field
              label="Item"
              autocomplete="off"
              outlined
              dense
              v-model="category"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row class="mt-n5 mx-5">
          <v-col>
            <v-text-field
              label="Quantity"
              autocomplete="off"
              outlined
              dense
              v-model="quantity"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green" text @click="(saleModal = false), sale()">
            Checkout
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Restock Modal -->
    <v-dialog v-model="addModal" width="400">
      <v-card>
        <v-card-title class="headline lighten-2"> RESTOCK</v-card-title>
        <v-divider></v-divider>
        <v-row class="mt-5 mx-5">
          <v-col>
            <v-text-field
              label="Item"
              autocomplete="off"
              outlined
              dense
              v-model="category"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row class="mt-n5 mx-5">
          <v-col>
            <v-text-field
              label="Quantity"
              autocomplete="off"
              outlined
              dense
              v-model="quantity"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green" text @click="(addModal = false), add()">
            Add New
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Add New LNB Modal -->
    <v-dialog v-model="addNewModal" width="400">
      <v-card>
        <v-card-title class="headline lighten-2">
          Add New Category</v-card-title
        >
        <v-divider></v-divider>
        <v-row class="mt-5 mx-5">
          <v-col>
            <v-text-field
              label="Brand"
              autocomplete="off"
              outlined
              dense
              v-model="brand"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row class="mt-n5 mx-5">
          <v-col>
            <v-text-field
              label="Category"
              autocomplete="off"
              outlined
              dense
              v-model="category"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row class="mt-n5 mx-5">
          <v-col>
            <v-text-field
              label="Quantity"
              autocomplete="off"
              outlined
              dense
              v-model="quantity"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="(addNewModal = false), addNewLnb()"
          >
            Add New</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Delete Category Modal -->
    <v-dialog v-model="deleteModal" width="400">
      <v-card>
        <v-card-title class="headline lighten-2">
          Delete Category
        </v-card-title>
        <v-divider></v-divider>
        <v-row class="mt-5 mx-5">
          <v-col>
            <v-select
              :items="lnb"
              item-text="category"
              outlined
              label="Category"
              v-model="deletedCategory"
            ></v-select>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="error"
            text
            @click="(deleteModal = false), deletedLnb()"
          >
            Delete
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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

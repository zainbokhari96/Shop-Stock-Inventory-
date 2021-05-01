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
        <!-- Dishes -->
        <v-row>
          <v-col class="d-flex justify-end">
            <v-btn
              @click="addNewModal = true"
              color="#1A237E"
              class="white--text"
              elevation="2"
            >
              + Add New Dish</v-btn
            >
          </v-col>
        </v-row>
        <!-- Dishes -->
        <v-row>
          <v-col
            class="d-flex justify-center text--primary"
            style="background: #cddc39"
          >
            Dish Stock:
            <span class="ml-auto"
              ><v-btn
                small
                color="error"
                @click="
                  (deleteModal = true),
                    (selectedDeleteCategory = dish),
                    (deletedMaterial = 'Metal')
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
            v-for="x in dish"
            :key="x.category"
          >
            <v-card class="mx-1" width="180" height="200" elevation="10">
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

        <!-- Fiber -->
        <v-row>
          <v-col
            class="d-flex justify-center text--primary"
            style="background: #cddc39"
          >
            Fiber Stock:
            <span class="ml-auto"
              ><v-btn
                small
                color="error"
                @click="
                  (deleteModal = true),
                    (selectedDeleteCategory = Fiber),
                    (deletedMaterial = 'Fiber')
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
            v-for="x in Fiber"
            :key="x.category"
          >
            <v-card class="mx-1" width="180" height="200" elevation="10">
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

    <!-- Add New Dish Modal -->
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
              outlined
              dense
              v-model="category"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row class="mt-n9 mx-5">
          <v-col>
            <v-select
              v-model="dishMaterial"
              :items="dishMaterialOption"
              label="Material"
            ></v-select>
          </v-col>
        </v-row>

        <v-row class="mt-n5 mx-5">
          <v-col>
            <v-text-field
              label="Quantity"
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
            @click="(addNewModal = false), addNewDish()"
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
              :items="selectedDeleteCategory"
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
            @click="(deleteModal = false), deletedDish()"
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
  name: "Home",
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
      dishMaterialOption: ["Metal", "Fiber"],
      dishMaterial: "",
      selectedMaterial: "",
      selectedDeleteCategory: "",
      deletedMaterial: "",
      deletedCategory: "",
    };
  },
  computed: {
    dish() {
      return this.$store.state.dish;
    },
    Fiber() {
      return this.$store.state.dishFiber;
    },
  },
  methods: {
    addNewDish() {
      let dish = {
        brand: this.brand,
        category: this.category,
        material: this.dishMaterial,
        quantity: parseFloat(this.quantity),
      };
      if (this.dishMaterial == "Metal") {
        this.$store.commit("addNewDish", dish);
      } else {
        this.$store.commit("addNewFiber", dish);
      }
    },
    deletedDish() {
      if (this.deletedMaterial == "Metal") {
        this.$store.commit("deleteDish", this.deletedCategory);
      } else {
        this.$store.commit("deleteFiber", this.deletedCategory);
      }
    },
    sale() {
      let dish = {
        category: this.category,
        quantity: this.quantity,
      };
      if (this.selectedMaterial == "Metal") {
        console.log("Test");
        this.$store.commit("saleDish", dish);
      } else {
        this.$store.commit("saleFiber", dish);
      }
    },
    add() {
      let dish = {
        category: this.category,
        quantity: this.quantity,
      };
      if (this.selectedMaterial == "Metal") {
        this.$store.commit("restockDish", dish);
      } else {
        this.$store.commit("restockDishFiber", dish);
      }
    },
  },
};
</script>

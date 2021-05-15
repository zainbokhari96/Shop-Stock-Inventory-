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
          <v-col
            class="d-flex justify-center text--primary mt-2"
            style="background: #cddc39"
          >
            Dish Stock:</v-col
          >
        </v-row>
        <v-row>
          <v-col
            class="d-flex justify-center"
            cols="2"
            v-for="(x, i) in dish"
            :key="i + 'dish'"
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
                  color="blue darken-4"
                  @click="
                    (saleModal = true),
                      (category = x.category),
                      (selectedCatergory = 'MetalDish')
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
            Fiber Stock:</v-col
          >
        </v-row>
        <v-row>
          <v-col
            class="d-flex justify-center"
            cols="2"
            v-for="(x, i) in Fiber"
            :key="i + 'fiber'"
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
                  color="blue darken-4"
                  @click="
                    (saleModal = true),
                      (category = x.category),
                      (selectedCatergory = 'FiberDish')
                  "
                >
                  Sale
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>

        <!-- Receiver -->
        <v-row>
          <v-col class="d-flex justify-center" style="background: #cddc39">
            HD Receiver Stock:</v-col
          >
        </v-row>
        <v-row>
          <v-col
            class="d-flex justify-center"
            cols="2"
            v-for="(x, i) in receivers"
            :key="i + 'receiver'"
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
                  color="blue darken-4"
                  @click="
                    (saleModal = true),
                      (category = x.category),
                      (selectedCatergory = 'Receiver')
                  "
                >
                  Sale
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        <!-- LNB's -->
        <v-row>
          <v-col
            class="d-flex justify-center text--primary"
            style="background: #cddc39"
          >
            LNB:</v-col
          >
        </v-row>
        <v-row>
          <v-col
            class="d-flex justify-center"
            cols="2"
            v-for="(x, i) in lnb"
            :key="i + 'lnb'"
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
                  color="blue darken-4"
                  @click="
                    (saleModal = true),
                      (category = x.category),
                      (selectedCatergory = 'LNB')
                  "
                >
                  Sale
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        <!-- Accessories's -->
        <v-row>
          <v-col
            class="d-flex justify-center text--primary"
            style="background: #cddc39"
          >
            Accessories:</v-col
          >
        </v-row>
        <v-row>
          <v-col
            class="d-flex justify-center"
            cols="2"
            v-for="(x, i) in Accessories"
            :key="i + 'accessories'"
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
                  color="blue darken-4"
                  @click="
                    (saleModal = true),
                      (category = x.category),
                      (selectedCatergory = 'Accessories')
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
    <v-dialog v-model="saleModal" width="400">
      <v-card>
        <v-card-title class="headline lighten-2"> Sale Entry</v-card-title>
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
              auto-complete="off"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="(saleModal = false), Sale()">
            Checkout
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
      category: "",
      quantity: "",
      selectedCatergory: "",
    };
  },
  computed: {
    dish() {
      return this.$store.state.dish;
    },
    Fiber() {
      return this.$store.state.dishFiber;
    },
    receivers() {
      return this.$store.state.receivers;
    },
    lnb() {
      return this.$store.state.lnb;
    },
    Accessories() {
      return this.$store.state.accessories;
    },
  },
  methods: {
    Sale() {
      if (this.selectedCatergory == "MetalDish") {
        let dish = {
          category: this.category,
          quantity: this.quantity,
        };
        this.$store.commit("saleDish", dish);
      }
      if (this.selectedCatergory == "FiberDish") {
        {
          let dish = {
            category: this.category,
            quantity: this.quantity,
          };
          this.$store.commit("saleDish", dish);
        }
      }
      if (this.selectedCatergory == "Receiver") {
        let receiver = {
          category: this.category,
          quantity: this.quantity,
        };
        this.$store.commit("saleReceivers", receiver);
      }
      if (this.selectedCatergory == "LNB") {
        let lnb = {
          category: this.category,
          quantity: this.quantity,
        };
        this.$store.commit("saleLnb", lnb);
      }
      if (this.selectedCatergory == "Accessories") {
        let receiver = {
          category: this.category,
          quantity: this.quantity,
        };
        this.$store.commit("saleAccessories", receiver);
      }
    },
  },
};
</script>

<template>
  <div>
    <v-row class="cardsContainer">
      <v-col
        xs="8"
        sm="8"
        md="10"
      >
        <h6>Available balance</h6>
        <div class="amtDiv"><span class="span1">$$</span><span class="span2">3000</span></div>
      </v-col>
      <v-col
        xs="4"
        sm="4"
        md="2"
        style="text-align: center;"
      >
        <v-btn
          color="#0c365a"
          style="color:#fff"
          small
          @click="openPopup"
        >
          <v-icon
            small
            style="margin-right: 5px;"
          >
            {{ icons.mdiPlusCircle }}
          </v-icon>New Card
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        md="12"
        cols="12"
      >
        <v-card class="cardContainer">
          <v-tabs
            v-model="tab"
            class="tab-index"
            style="box-shadow: none !important;"
          >
            <v-tab
              v-for="item in items"
              :key="item"
              class="tabHeader"
            >
              {{ item }}
            </v-tab>
          </v-tabs>

          <v-tabs-items v-model="tab">
            <v-tab-item
              v-for="item in items"
              :key="item"
            >
              <h6
                class="tabHeader"
                style="color: #01d167 !important;"
              >
                <v-icon
                  small
                  style="color: #01d167 !important;margin-right: 5px;"
                >
                  {{ icons.mdiEye }}
                </v-icon>show card number
              </h6>
              <v-row
                class="cardParts"
              >
                <v-col
                  cols="12"
                  md="6"
                  class="caroContainer"
                >
                  <v-carousel
                    v-model="sliders"
                    :show-arrows="false"
                    hide-delimiter-background
                    :cycle="false"
                    height="auto"
                    style="border-radius: 10px;box-shadow: none;overflow: initial;"
                  >
                    <v-carousel-item
                      v-for="(data, i) in dummyData"
                      :key="i"
                    >
                      <v-card
                        class="mx-auto"
                        :class="checkFreaze(i)"
                        color="#01d167"
                        dark
                      >
                        <v-card-title style="text-align: right;display: block;">
                          <v-icon
                            dense
                            left
                            color="#fff"
                          >
                            {{ icons.mdiArrowUpDropCircle }}
                          </v-icon>
                          <span
                            class="text-h6 font-weight-light"
                            style="color:#fff"
                          >Aspire</span>
                        </v-card-title>
                        <v-card-text
                          class="text-h5 font-weight-bold"
                          style="color:#fff;letter-spacing: 1px !important;font-weight: 300 !important;"
                        >
                          {{ data.name }}
                        </v-card-text>
                        <v-card-text
                          class="text-h6 font-weight-bold"
                          style="color:#fff"
                        >
                          {{ data.card_no }}
                        </v-card-text>

                        <v-card-actions>
                          <span class="sliderCount">{{ sliders+ 1 }}</span>
                          <v-list-item
                            class="grow"
                            style="padding: 0;"
                          >
                            <v-list-item-content>
                              <v-list-item-title style="color:#fff;font-size: 12px;letter-spacing: 1px;font-weight: 600;">
                                Thru: {{ data.e_date }}
                              </v-list-item-title>
                            </v-list-item-content>

                            <v-list-item-content>
                              <v-list-item-title style="color:#fff;font-size: 12px;letter-spacing: 1px;font-weight: 600;">
                                CVV: {{ data.cvv }}
                              </v-list-item-title>
                            </v-list-item-content>

                            <v-row
                              align="center"
                              justify="end"
                            >
                              <img
                                :src="require('@/assets/images/logos/visa.png')"
                                max-height="35px"
                                max-width="65px"
                                alt="visa-logo"
                                class="visaIco"
                              >
                            </v-row>
                          </v-list-item>
                        </v-card-actions>
                      </v-card>
                    </v-carousel-item>
                  </v-carousel>
                  <v-card
                    color="#edf3ff"
                    dark
                    style="margin-top: 50px;border-radius: 10px;box-shadow: none;"
                  >
                    <v-card-actions class="justify-center">
                      <div class="roundBtn">
                        <v-btn
                          class="mx-2"
                          :class="frozeClrchange()"
                          fab
                          small
                          color="#325baf"
                          @click="frozenCrd"
                        >
                          <v-icon dark>
                            {{ icons.mdiSnowflakeAlert }}
                          </v-icon>
                        </v-btn>
                        <p>Freez <br>card</p>
                      </div>
                      <div class="roundBtn">
                        <v-btn
                          class="mx-2"
                          fab
                          small
                          dark
                          color="#325baf"
                        >
                          <v-icon dark>
                            {{ icons.mdiSpeedometer }}
                          </v-icon>
                        </v-btn>
                        <p>Set speed <br>limit</p>
                      </div>
                      <div class="roundBtn">
                        <img
                          :src="require('@/assets/images/logos/google.png')"
                          alt="logo"
                          style="width: 50px;"
                        >
                        <p>Add to <br>Gpay</p>
                      </div>
                      <div class="roundBtn">
                        <v-btn
                          class="mx-2"
                          fab
                          small
                          dark
                          color="#325baf"
                        >
                          <v-icon dark>
                            {{ icons.mdiRefreshCircle }}
                          </v-icon>
                        </v-btn>
                        <p>Replace <br>card</p>
                      </div>
                      <div class="roundBtn">
                        <v-btn
                          class="mx-2"
                          fab
                          dark
                          small
                          color="#325baf"
                          @click="deleteCard"
                        >
                          <v-icon dark>
                            {{ icons.mdiDelete }}
                          </v-icon>
                        </v-btn>
                        <p>cancle <br>card</p>
                      </div>
                    </v-card-actions>
                  </v-card>
                </v-col>
                <v-col
                  cols="12"
                  md="6"
                  class="rightContainer"
                >
                  <v-expansion-panels :value="panelDetail">
                    <v-expansion-panel>
                      <v-expansion-panel-header color="#f5f9ff">
                        <img
                          :src="require('@/assets/images/logos/credit-card.png')"
                          alt="logo"
                          style="width: 20px; position: absolute;"
                        > <span style="margin-left: 40px;">Card Details</span>
                      </v-expansion-panel-header>
                      <v-expansion-panel-content color="#fff">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel expand>
                      <v-expansion-panel-header color="#f5f9ff">
                        <img
                          :src="require('@/assets/images/logos/transaction-his.png')"
                          alt="logo"
                          style="width: 20px; position: absolute;"
                        > <span style="margin-left: 40px;">Recent Transactions</span>
                      </v-expansion-panel-header>
                      <v-expansion-panel-content color="#fff">
                        <ul class="timeline mb-0">
                          <li
                            v-for="i in paymentHistory"
                            :key="i"
                          >
                            <div
                              class="roundIcon"
                            >
                              <v-icon
                                small
                                color="#03a9f4"
                              >
                                {{ icons.mdiGift }}
                              </v-icon>
                            </div>
                            <div class="d-flex">
                              <span class="time-data">{{ i.name }}</span><span class="text-muted1">+ S${{ i.amt }}</span>
                            </div>
                            <p class="text-muted">
                              <span class="text-info">{{ i.e_date }}</span>
                            </p>
                            <p class="text-muted2">
                              <span class="text-info">{{ i.text_c }}</span>
                            </p>
                            <v-divider></v-divider>
                          </li>
                        </ul>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                  </v-expansion-panels>
                </v-col>
              </v-row>
            </v-tab-item>
          </v-tabs-items>
        </v-card>
      </v-col>
    </v-row>
    <!------------- Popup ---------------->
    <v-dialog
      v-model="dialogForm"
      width="500"
    >
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Add new card
        </v-card-title>

        <v-card-text>
          <v-form
            ref="addNewCards"
            v-model="validForms"
            lazy-validation
          >
            <v-row>
              <v-col
                cols="12"
                md="12"
              >
                <v-text-field
                  v-model="firstname"
                  :rules="nameRules"
                  :counter="20"
                  label="First name"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                md="12"
              >
                <v-text-field
                  v-model="lastname"
                  :rules="nameRules"
                  :counter="20"
                  label="First name"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                md="12"
              >
                <v-text-field
                  v-model="cardNo"
                  :rules="numberRules"
                  :counter="16"
                  label="Card number"
                  type="number"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                md="12"
              >
                <v-text-field
                  v-model="cvvcardNo"
                  :rules="cvvRules"
                  :counter="3"
                  label="CVV"
                  type="number"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                md="12"
              >
                <v-menu
                  ref="menu"
                  v-model="menu"
                  :close-on-content-click="false"
                  :return-value.sync="date"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="date"
                      :rules="dateRules"
                      label="Picker in menu"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="date"
                    no-title
                    scrollable
                  >
                    <v-spacer></v-spacer>
                    <v-btn
                      text
                      color="primary"
                      @click="menu = false"
                    >
                      Cancel
                    </v-btn>
                    <v-btn
                      text
                      color="primary"
                      @click="$refs.menu.save(date)"
                    >
                      OK
                    </v-btn>
                  </v-date-picker>
                </v-menu>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="clearForm"
          >
            clear
          </v-btn>
          <v-btn
            color="primary"
            text
            @click="addMycard"
          >
            add
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!------------- Popup confirm 1 ---------------->
    <v-dialog
      v-model="confirmOne"
      width="500"
    >
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Confirm here
        </v-card-title>
        <v-card-text>Are you sure to Freez this card??</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="confirmOne == false"
          >
            cancel
          </v-btn>
          <v-btn
            color="primary"
            text
            @click="freezCard"
          >
            proceed
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!------------- Popup confirm 2 ---------------->
    <v-dialog
      v-model="confirmOne1"
      width="500"
    >
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Confirm here
        </v-card-title>
        <v-card-text>Are you sure to delete this card??</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="confirmOne1 == false"
          >
            cancel
          </v-btn>
          <v-btn
            color="primary"
            text
            @click="deleteProceed"
          >
            proceed
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>

import {
  mdiArrowUpDropCircle,
  mdiEye,
  mdiSnowflakeAlert,
  mdiSpeedometer,
  mdiRefreshCircle,
  mdiDelete,
  mdiAirplane,
  mdiCartMinus,
  mdiGift,
  mdiPlusCircle,
} from '@mdi/js'

export default {
  data() {
    return {
      icons: {
        mdiArrowUpDropCircle,
        mdiEye,
        mdiSnowflakeAlert,
        mdiSpeedometer,
        mdiRefreshCircle,
        mdiDelete,
        mdiAirplane,
        mdiCartMinus,
        mdiGift,
        mdiPlusCircle,
      },
      confirmOne1: false,
      dialogForm: false,
      panelDetail: 1,
      dummyData: [
        {
          name: 'Mark Henry',
          card_no: 7654289145627854,
          e_date: '12/06/2025',
          cvv: 452,
          frozen: false,
        },
        {
          name: 'Rock',
          card_no: 7652547145626541,
          e_date: '12/06/2025',
          cvv: 852,
          frozen: false,
        },
        {
          name: 'Triple H',
          card_no: 7514289145620214,
          e_date: '12/06/2025',
          cvv: 492,
          frozen: false,
        },
        {
          name: 'Undertaker',
          card_no: 7654289165473521,
          e_date: '12/06/2025',
          cvv: 752,
          frozen: false,
        },
      ],
      tab: null,
      tab2: null,
      items: ['My debit card', 'All company cards'],
      text: 'Although cards can support multiple actions, UI controls, and an overflow menu, use restraint and remember that cards…',
      sliders: 0,
      firstname: '',
      lastname: '',
      cardNo: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 20 || 'Name must be less than 20 characters',
      ],
      numberRules: [
        v => !!v || 'Card No is required',
        v => v.length === 16 || 'Number must be less than 16 characters',
      ],
      cvvRules: [
        v => !!v || 'Cvv is required',
        v => v.length <= 3 || 'Enter valid Cvv',
      ],
      dateRules: [
        v => !!v || 'Date is required',
      ],
      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      menu: false,
      paymentHistory: [
        {
          name: 'Chandru',
          e_date: '01/06/2022',
          amt: 8552,
          icon: 'mdiAirplane',
          text_c: 'Refund on debit card',
        },
        {
          name: 'Mani',
          e_date: '12/06/2022',
          amt: 452,
          icon: 'mdiCartMinus',
          text_c: 'Refund on debit card',
        },
        {
          name: 'Jhon',
          e_date: '24/06/2022',
          amt: 103,
          icon: 'mdiAirplane',
          text_c: 'Charged on debit card',
        },
        {
          name: 'Thomas',
          e_date: '29/06/2022',
          amt: 98,
          icon: 'mdiGift',
          text_c: 'Refund on debit card',
        },
        {
          name: 'Jeff',
          e_date: '01/07/2022',
          amt: 67,
          icon: 'mdiCartMinus',
          text_c: 'Charged on debit card',
        },
        {
          name: 'Stave',
          e_date: '11/07/2022',
          amt: 32,
          icon: 'mdiGift',
          text_c: 'Refund on debit card',
        },
      ],
      confirmOne: false,
    }
  },
  mounted() {
  },
  created() {},
  methods: {
    openPopup() {
      this.dialogForm = true
    },
    clearForm() {
      this.$refs.addNewCards.reset()
    },
    addMycard() {
      if (this.$refs.addNewCards.validate()) {
        const mydata = {
          name: this.firstname + this.lastname,
          card_no: this.cardNo,
          e_date: this.date,
          cvv: this.cvvcardNo,
        }
        this.dummyData.push(mydata)
        this.dialogForm = false
      }
    },
    frozenCrd() {
      this.confirmOne = true
    },
    freezCard() {
      // this.dummyData = []
      const frozen = this.sliders
      this.dummyData[frozen].frozen = true
      this.confirmOne = false
    },
    checkFreaze(a) {
      if (this.dummyData[a].frozen === true) {
        return {
          'frozen-active-color': this.dummyData[a],
        }
      }
    },
    deleteCard() {
      this.confirmOne1 = true
    },
    deleteProceed() {
      const frozen = this.sliders
      this.dummyData.splice(frozen, 1)
      this.confirmOne1 = false
    },
    frozeClrchange() {
    //     if (this.dummyData[a].frozen === true) {
    //     return 'frozen-active-btn'
    //   }
    },
  },
}
</script>
<style lang="scss" scoped>
.cardsContainer .span1 {
  padding: 4px 10px;
  background: #1fd679;
  color: #fff;
  border-radius: 6px;
  margin-right: 10px;
  font-size: 10px;
}
.cardsContainer .span2 {
  font-size: 16px;
  font-weight: 900;
  color: #000;
  letter-spacing: 1px;
}
.cardsContainer h6 {
    margin-bottom: 6px;
    letter-spacing: 1px;
    color: #000;
    font-size: 13px;
    font-weight: 300;
}
.cardParts {
    padding: 24px;
}
.tabHeader {
    text-align: center;
    color: #000;
    letter-spacing: 1px;
    font-weight: 600;
}
.cardParts .visaIco {
    width: 70px;
    margin-right: 10px;
}
.roundBtn {
    text-align: center;
    width: 20%;
}
.roundBtn p {
    margin: 0;
    font-size: 11px;
    margin-top: 6px;
    color: #325baf;
}
.cardParts ::v-deep .v-btn--icon.v-size--small {
    height: 5px !important;
    width: 5px !important;
}
.timeline {
    list-style-type: none;
    position: relative;
    padding-left: 50px;
    .d-flex {
    display: -ms-flexbox !important;
    display: flex !important;
}
}
.rightContainer {}
.rightContainer ::v-deep .v-expansion-panel-content__wrap {
        padding: 20px !important;
    }
    .rightContainer ::v-deep .time-data {
        font-size: 13px;
    color: #000;
    letter-spacing: 1px;
}
.rightContainer ::v-deep .text-muted {
    color: #ccc !important;
    margin-left: auto !important;
    margin: 0;
    font-size: 10px;
    letter-spacing: 1px;
}
.rightContainer ::v-deep .text-muted1 {
    color: #01d167 !important;
    margin-left: auto !important;
    margin: 0;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: 900;
    margin-right: 10px;
    margin-top: 3px;
}
.rightContainer ::v-deep .text-muted2 {
    font-size: 10px;
    letter-spacing: 1px;
    color: #325baf;
    font-weight: 600;
}
.v-carousel__controls {
    position: absolute;
    bottom: -42px !important;
}
.frozen-active-color {
    background-color: #ccc !important;
    border-color: #ccc !important;
}
.sliderCount {
    padding: 8px 16px;
    position: absolute;
    bottom: 100px;
    right: 27px;
    background: #e7b000;
    color: #fff;
    border-radius: 50%;
}
.sliderCount:hover {
    background: #2196F3;
}
.roundIcon {
    position: absolute;
    width:40px;
    height: 40px;
    left: 0;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 50%;
    padding: 5px;
    background: #edf3ff;
}
.cardContainer {
    box-shadow: none !important;
}
.caroContainer .v-carousel ::v-deep .v-carousel__controls {
        position: absolute;
        bottom: -41px;
    }
@media screen and (max-width: 600px) {
    .cardsContainer {
        padding: 5px;
    }
    .cardParts {
        padding: 10px;
    }
    .roundBtn p {
        font-size: 10px;
    }
    .cardsContainer h6 {
        margin-left: 10px;
        color: #fff;
    }
    .amtDiv {
        margin-left: 10px;
    }
    .amtDiv .span2 {
        color: #fff;
    }
    .caroContainer {
        background: #0c365a;
        padding-top: 30px;
    }
    .caroContainer .v-carousel ::v-deep .v-carousel__controls {
        position: absolute;
    bottom: -41px;
    }
    h6.tabHeader {
        color: rgb(1, 209, 103);
        width: 50%;
    position: absolute;
    right: 12px;
    top: 12px;
    z-index: 3;
    background: #fff;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    }
    .tabHeader {
        color: rgb(1, 209, 103);
    }
}
</style>

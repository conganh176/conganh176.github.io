new Vue({
  el: "#app",
  data: {
    products: [
      {
        image: "https://via.placeholder.com/200x150",
        name: "PRODUCT ITEM NUMBER 1",
        description: "Description for product item number 1",
        price: 5.99,
        quantity: 2
      },
      {
        image: "https://via.placeholder.com/200x150",
        name: "PRODUCT ITEM NUMBER 2",
        description: "Description for product item number 1",
        price: 9.99,
        quantity: 1
      }
    ],
    tax: 10,
    promotions: [
      {
        code: '29xgbuHa4O',
        discount: '50%'
      },
      {
        code: 'mUxSnhywT1',
        discount: '40%'
      },
      {
        code: 'nDdViZL4l3',
        discount: '30%'
      }
    ],
    thePromotion: '',
    isPromotion: false
  },
  methods: {
    sumProducts: function() {
      var totalProducts = 0;
      for (var i = 0; i < this.products.length; i++) {
        var number = parseInt(this.products[i].quantity);
        if (this.products[i].quantity == "") {
          continue;
          totalProducts += number;
        }
        totalProducts += number;

      }
      return totalProducts;
    },
    sumPrices: function() {
      var totalPrices = 0;
      for (var i = 0; i < this.products.length; i++) {
        var totalPrice = parseInt(this.products[i].quantity)*parseFloat(this.products[i].price);
        if (this.products[i].quantity == "") {
          continue;
          totalPrices += totalPrice;
        }
        totalPrices += totalPrice;
      }
      return totalPrices.toFixed(2);
    },
    sumPromotions: function() {
      var sumPromotion = 0;
      for (var i = 0; i < this.promotions.length; i++) {
        if (this.thePromotion == this.promotions[i].code) {
          this.isPromotion = true;
          sumPromotion = parseFloat(this.promotions[i].discount)/100*parseFloat(this.sumPrices())         
        }
        if (this.thePromotion == "") {
          this.isPromotion = false;
          sumPromotion = 0;
        }
      }
      return sumPromotion.toFixed(2);
    },
    sumRemainPrices: function() {
      var remainPrices = 0;
      remainPrices = parseFloat(this.sumPrices()) - parseFloat(this.sumPromotions());
      return remainPrices.toFixed(2);
    },
    sumTax: function() {
      var sumTax = 0;
      sumTax = parseFloat(this.sumPrices())*this.tax/100
      return sumTax.toFixed(2);
    },
    sumLastPrices: function() {
      var lastPrices = 0;
      lastPrices = parseFloat(this.sumRemainPrices()) + parseFloat(this.sumTax());
      return lastPrices.toFixed(2);
    },
    removeItem: function(theProduct) {
      this.products.splice(this.products.indexOf(theProduct),1);
    },
    checkPromotion: function() {
      console.log(this.$refs.promocode.value);
    }
  }
});


new Vue({
	el: '#exercise',
  data: {
  	name: 'Cong Anh Nguyen',
    age: new Date().getFullYear()-1996,
    image: 'https://pbs.twimg.com/profile_images/972154872261853184/RnOg6UyU_400x400.jpg'
  },
  methods: {
  	random: function() {
      return Math.random();
    }
  }
})
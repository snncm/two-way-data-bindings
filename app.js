const app = Vue.createApp({
    data() {
      return {
        message: ''              
      };
    },
    computed: {
        messageLength: function(){
            return this.message.length;
        }
    }
  }).mount("#app");
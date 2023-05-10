const {createApp} =  Vue

createApp({
    data() {
      return {
       tasks: [
        {
            text: "Fai la spesa",
            status: false,
        },
        {
            text: "Lava la macchina",
            status: false,
        },
        {
            text: "Invia la mail",
            status: false,
        },
        {
            text: "Vai in palestra",
            status: false,
        },
       ]
      }
    },
    methods: {

        addTask(){
            console.log(this.tasks)
        }

    },
  }).mount('#app')
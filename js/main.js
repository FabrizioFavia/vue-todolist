const {createApp} =  Vue

createApp({
    data() {
      return {
        newTask: {
            text: "",
            status: false,
        },

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
        }
       ]
      }
    },
    methods: {

        addTask(){
            
            console.log(this.newTask)
            this.tasks.push(this.newTask)
        }

    },
  }).mount('#app')
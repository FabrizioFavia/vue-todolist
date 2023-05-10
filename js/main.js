const {createApp} =  Vue

createApp({
    data() {
      return {
         newTaskModel: {
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
            
            let newTask = {...this.newTaskModel}

            console.log(newTask)
            this.tasks.push(newTask)
        }

    },
  }).mount('#app')
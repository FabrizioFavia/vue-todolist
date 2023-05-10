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
            let newTask = {...this.newTaskModel};
            console.log(newTask);
            if (newTask.text.length > 3) {
                this.tasks.unshift(newTask);
                this.newTaskModel.text = "";
            } 
        },

        removeTask(i){
            this.tasks.splice(i,1)

        }

    },
  }).mount('#app')
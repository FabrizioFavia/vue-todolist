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
            this.tasks.splice(i,1);
        },

        taskCheck(i){
           console.log(this.tasks[i].status)

           let check = this.tasks[i].status;

            if (this.tasks[i].status==false) {
                this.tasks[i].status= true;
            } else {
                this.tasks[i].status= false;
            }
            console.log(this.tasks[i].status);
            return check;
        },

    },
  }).mount('#app')
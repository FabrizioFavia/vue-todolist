const { createApp } = Vue

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

        addTask() {
            let newTask = { ...this.newTaskModel };
            console.log(newTask);
            if (newTask.text.length > 3) {
                this.tasks.unshift(newTask);
                this.newTaskModel.text = "";
            }
        },

        removeTask(i) {
            this.tasks.splice(i, 1);
        },

        taskCheck(i) {
            console.log(this.tasks[i].status)
            this.tasks[i].status = !this.tasks[i].status;
            console.log(this.tasks[i].status)
        },
    },
}).mount('#app')
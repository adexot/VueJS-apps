<template>
    <div class="task">
        <div class="box box-input">
            <h2>Taskify</h2>
            <form method="">
                <div>
                    <label>Task</label>
                    <textarea></textarea>
                </div>
                <div>
                    <label>Time</label>
                    <input type="time" />
                </div>
                <input type="submit" />
            </form>
        </div>
        <div class="box box-output">
            <div v-show="terms" class="list">
            <h4 class="grey">Search Items</h4>
            <ul>
                <li v-for="task in reArray">
                    <a class="bold red" v-on:click="">x</a>
                    {{task.text}}
                    <small class="text-right">{{task.time}}</small>
                </li>
            </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    name: 'task',
    data () {
        return{
            task: {},
            tasks: []
        }
    },
    methods: {
        addTask: function(){
            this.tasks.push({
                text: this.term.text,
                time: this.term.time
            });
        }
    },
    computed: {
        reArray: function(){
           return this.tasks.reverse();
       }
    }
}
</script>
<style scoped>
.task{
    width: 100%;
    background-color:#fff;
    color: #41B883;
    display: inline-block;
    color: #aaa;
}
.box{
    display: inline-block;
    width: 50%;
    height: 100vh;
    float:left;
}
.box-input{
    background-color: #3f51b5;
}
.box-output{
    background-color: #fff;
}
form{
    max-width: 400px;
    display: form;
    margin: 20px auto;
}
label{
    display: block;
    text-align: left;
}
input[type="time"],textarea{
    width: 90%;
    box-sizing: border-box;
}
input[type="time"]{
    width: 90%;
}
</style>
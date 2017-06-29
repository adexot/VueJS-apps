<template>
    <div class="task">
        <div class="box box-input">
            <h2><span class="brand">Taskify</span></h2>
            <form>
                <div class="task-input">
                    <label>Task</label>
                    <textarea v-model="task.text" required></textarea>
                </div>
                <div class="task-input">
                    <label>Time</label>
                    <input type="time" v-model="task.time" required>
                </div>
                <input type="submit" value="Add Task" v-on:click="addTask">
            </form>
        </div>
        <div class="box box-output">
            <div class="list">
            <h4 class="blue">Task list</h4>
            <ul>
                <li v-for="task in reArray">
                    <input type="checkbox" v-model="task.checked">
                    <span :class="{checked: task.checked}">{{task.text}}</span>
                    <small class="text-right">{{task.time}}</small>
                </li>
            </ul>
            </div>
        </div>
        <div style="clear:both"></div>
    </div>
</template>
<script>
export default{
    name: 'task',
    props: {
        task: {
            type: Object,
            default: function(){
                return{
                    
                };
            }
        }
    },
    data () {
        return{
            task: {},
            tasks: [],
            error: {
                text: false,
                time: false
            }
        }
    },
    methods: {
        addTask: function(){

            let res = this.validateInput();
            if(typeof res === 'object' ){
                return false;
            }
            else{
                this.tasks.push({
                    text: this.task.text,
                    time: this.task.time,
                    checked: false
                });
            }
        },
        validateInput: function(){
            if(typeof this.task.text === 'undefined' || typeof this.task.time === 'undefined'){
                if(this.task.text === ''){
                    this.error.text = true;
                }
                else if(this.task.time === ''){
                    this.error.time = true;
                }
                return this.error;
            }
            else{
                return true;
            }
            
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
    color: #aaa;
}
.box{
    position: relative;
    width: 50%;
    height: 100vh;
}
.box-input{
    position: fixed;
    background-color: #3f51b5;
    color: #fff;
    padding-top: 150px;
    box-sizing: border-box;
}
.box-output{
    background-color: #fff;
    float: right;
}
.brand{
    background-color: #fff;
    color: rgba(233,30,99,1);
    padding: 10px 20px;
    border-radius: 4px; 
    box-shadow: 2px 1px 3px #ccc;
}
form{
    max-width: 400px;
    display: form;
    margin: 50px auto;
}
label{
    display: block;
    text-align: left;
}
textarea{
    width: 100%;
    box-sizing: border-box;
    padding: 20px;
    border-radius: 3px;
    border: 0;
    oveflow: 0;
}
input[type="time"]{
    width: 100%;
    box-sizing: border-box;
    padding: 10px 20px;
    border-radius: 3px;
    border: 0;
}
input[type="submit"]{
    margin-top: 20px;
    padding: 15px 20px;
    border: 0;
    border-radius: 3px;
    background-color: #e91e63;
    color: #fff;
    font-weight: bold;
}
.task-input{
    margin-top: 20px;
}
ul{
    margin: 0;
    padding: 0 10px;
}
ul li{
    position: relative;
    width: 100%;
    text-align: left;
    list-style: none;
    box-shadow: 2px 2px 2px #ccc;
    padding: 20px 0;
    margin: 5px;
    color: #000;
}
ul li:last-child{
    border-bottom: 0;
}
.bold{
    font-weight: bold;
}
.text-left{}
.text-right{
   position: absolute;
   right: 10px;
}
.grey{
    color: #ccc;
}
.red{
    color: #EF9A9A;
    cursor: pointer;
}
.blue{
    color: #3f51b5;
}
small{
    background-color: #c5cac9;
    color: #fff;
    padding: 2px 5px;
    border-radius: 3px;
}
.checked{
    text-decoration: line-through;
    color: #ccc;
}
</style>
<template>
    <div class="task">
        <div class="box box-input">
            <h2><span class="brand">Taskify</span></h2>
            <form method="">
                <div class="task-input">
                    <label>Task</label>
                    <textarea v-model="task.text"></textarea>
                </div>
                <div class="task-input">
                    <label>Time</label>
                    <input type="time" v-model="task.time"/>
                </div>
                <input type="submit" value="Add Task" v-on:click="addTask"/>
            </form>
        </div>
        <div class="box box-output">
            <div class="list">
            <h4 class="blue">Task list</h4>
            <ul>
                <li v-for="task in reArray">
                    <input type="checkbox" v-model="task.checked"/>
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
            console.log(res.text);
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
    display: inline-block;
    background-color: #3f51b5;
    color: #fff;
    padding-top: 150px;
    box-sizing: border-box;
}
.box-output{
    background-color: #fff;
}
.brand{
    background: linear-gradient(360deg, rgba(233,30,99,0.8) 20%, rgba(63,81,181,0.5) 100%);
    color: #c5cae9;
    padding: 10px 20px;
    border-radius: 4px; 
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
    border-bottom: 1px solid #ccc;
    padding: 10px 0;
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
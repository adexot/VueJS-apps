<template>
    <div class="comment">
        <div class="comment-box">
            <div v-for="com in coms" class="msg-box">
                <span class="msg-by" v-bind:style="{color: com.color}">{{com.name}}</span>
                <span class="msg-text">{{com.message}}</span>
                <small class="msg-time">{{com.time}}</small>
            </div>
        </div>
        <div class="input-box">
            <h6 v-if="com.message">{{com.name}} is typing</h6>
            <div class="">
                <form id="input-form">
                <input type="text" v-model="com.name" class="round-input" placeholder="Enter your Name" required/>
                <input type="color" v-model="com.color" value="#000" class="round-input"/>
                <textarea v-model="com.message" class="round-input" placeholder="Enter your Comment...." required="required"></textarea>
                <button type="submit" v-on:click="addMsg" class="round-input">Send</button>
                </form>
            </div>
            <div class=""></div>
        </div>
    </div>
</template>
<script>
export default{
    name: "comment",
    data () {
        return {
            com: {
                name: null,
                message: null,
                time: null,
                color: null
            },
            coms: [],
        }
    },
    methods: {
        addMsg: function () {
            if(!this.validation()){
                console.log('undefined fields available');
            }else{
                this.coms.push({
                    name: this.com.name,
                    message: this.com.message,
                    time: this.showTime(),
                    color: this.com.color
                });
                this.com.name = null;
                this.com.message = null;
                this.com.color = '#000000';
                this.com.time = null;
            }
        },
        validation: function () {
            if(this.com.name === null || this.com.message === null){
                return false;
            }
            return true;
        },
        showTime: function () {
            let d = new Date();
            let time = d.getHours() + ':' + d.getMinutes();
            return time;
        }

    },
    computed: {

    }
}
</script>
<style scoped>
.comment{
    position: relative;
    width: 100%;
    height: 100vh;
    background-color: #eee;
}
/*style for the comment section*/
.comment-box{
    display: block;
    position: absolute;
    height: 90vh;
    width: 100%;
    overflow-y: scroll;
}
.msg-box{
    position: relative;
    background-color: #fff;
    padding: 10px;
    text-align: left;
    min-width: 200px;
    max-width: 70%;
    margin: 10px;
    border-radius: 4px;
}
.msg-by{
    display: block;
    font-size: 14px;
    color: #81C784;
}
.msg-text{
    font-family: Geneva;
}
.msg-time{
    position: absolute;
    right: 10px;
    color: #ccc;
    font-size: 11px;
    padding-left: 20px;
}
/*style for the input section*/
.input-box{
    position: absolute;
    display: inline-block;
    width: 100%;
    left: 0;
    bottom:0;
}
.round-input{
    border-radius: 20px;
    border: 0;
    height: 40px;
    font-family: monospace;
    outline: 0;
}
input[type="text"]{
    width: 30%;
    float: left;
    padding: 8px 15px;
    box-sizing: border-box;
}
input[type="color"]{
    width: 3%;
    float: left;
    padding: 5px 10px;
    box-sizing: border-box;
}
textarea{
    width: 60%;
    float: left;
    padding: 12px 20px;
    box-sizing: border-box;
}
button{
    background-color: #81C784;
    color: #fff;
}
</style>
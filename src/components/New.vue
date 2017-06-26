<template>
<div class="new">
    <h1 >I love coding always</h1>
    <input type="text" v-model="user.fname" />
    <input type="text" v-model="user.lname" />
    <br>
    <h2>{{fullName}}</h2>
</div>
</template>
<script>
export default{
    name: 'new',
    data (){
        return {
            show: true,
            title:  "",
            names: [
                "kunle",
                "jerry",
                "gbemi"
            ],
            user: {
                fname: "kunle",
                lname: "oseni"
            }

            }
        },
    computed: {
        fullName: function(){
            return this.user.fname + " " + this.user.lname ;
        }
    }
}
</script>
<style scoped>
.new {
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
    background-color:#000;
    color: #41B883;
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>
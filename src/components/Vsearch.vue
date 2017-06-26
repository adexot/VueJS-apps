<template>
<div class="vsearch">
    <h1 >Vsearch</h1>
    <div>
        <h4  v-if="query">Query: <q>{{term}}</q></h4>
        <input type="text" v-on:keypress="type" v-model="term" placeholder="Enter search querry here">
        <input type="submit" v-on:click="searchTerm" value="Search"/>
        

        <div v-show="terms" class="list">
            <h4 class="grey">Search Items</h4>
            <ul>
                <li v-for="term in reArray">
                    <a class="bold red" v-on:click="del(term)">x</a>
                    {{term.text}}
                    <small class="text-right">{{term.time}}</small>
                </li>
            </ul>
        </div>
    </div>
</div>
</template>
<script>
export default{
    name: 'vsearch',
    data (){
        return {
            term: "Enter search term here",
            query: false,
            terms: []
            }
        },
    methods: {
        searchTerm: function () {
            this.terms.push({
                text: this.term,
                time: new Date().getTime()
            });
        },
        type: function(e){
            this.query = true;
            return e.target.value;
        },
        del: function(term){
            this.terms.splice(this.term.indexOf(term), 1);
        }
    },
    computed: {
       reArray: function(){
           return this.terms.reverse();
       }
    }
}
</script>
<style scoped>
.vsearch {
    width: 100%;
    background-color:#fff;
    color: #41B883;
    display: inline-block;
    vertical-align: middle;
}
input{
    padding: 15px;
    border: 1px solid #41B883;
}
input[type="text"]{
   width: 500px;
   border-radius: 4px 0px 0px 4px;
}
input[type="submit"]{
    margin-left: -5px;
    border-radius: 0 4px 4px 0;
    background-color: #41B883;
    color: #fff;
    box-sizing: border-box;
    font-weight: bolder;
}
.list{
    max-width: 500px;
    margin: 0 auto;
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
    color: #0aa;
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
small{
    background-color: #ccc;
    color: #fff;
    padding: 2px 5px;
    border-radius: 3px;
}
</style>
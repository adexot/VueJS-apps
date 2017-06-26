<template>
  <div class="hello">
    <h1>Members List</h1>
    <div>
    <label>Name: </label>
    <input type="text" v-model="newUser.name" />
    </div>
    <div>
    <label>Name: </label>
    <input type="text" v-model="newUser.mail" />
    </div>
    <button v-on:click="addMem">Add Member</button>

    <div>
    <ul >
    <li v-for="user in users">{{user.name}} {{user.mail}} <input type="checkbox" v-on:check></li>
    </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
   return {
    newUser: {},
    users: [
      {name: "john", mail: "john@yahoo.com"},
    ]
   }
  },
  methods: {
    addMem: function(e){
      e.preventDefault();
      this.users.push(
        {
        name: this.newUser.name,
        mail: this.newUser.mail
        }
      );
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
    background-color:  #41B883;
    color: #000;
    justify-content: center;
    align-items: center;
}
li{
  list-style: none;
}
</style>

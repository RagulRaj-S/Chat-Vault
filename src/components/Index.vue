<template>
      <div class="home" style="background-color:rgb(10, 25, 47)!important;">
        <nav>
          <div class="nav-wrapper">
            <img class="responsive-img img2" src="../assets/img.png">
            <a class="brand-logo n1">Chat Vault</a>
            <ul id="nav-mobile" class="right">
              <li><a href="" @click="signout" style="color: rgb(100, 255, 218); font-size: 1.3rem;">Signout</a></li>
            </ul>
          </div>
        </nav>
        <div class="row main">
          <div class="column" style="background-color:rgb(10, 25, 47); text-align:center;">
            <h2>A Better way to talk with <br/>website visitors.</h2>
          <img class="responsive-img" src="../assets/img1.jpg">
          </div>
          <div class="column" style="background-color:rgb(10, 25, 47); padding-top:0;">
            <h4>Hi,{{ name }}!</h4>
            <!-- <h6>Get started by messaging a friend below.</h6> -->
            <h5>Get started by messaging a friend below.</h5>
            <div class="row" style="margin-top:8%;">
              <div class="input-field col s6" style="padding-left: 0;">
                <a class="waves-effect waves-light btn btn-join" @click="createChatId" style="height:56.5px">Start Chat</a>
              </div>
              <div class="input-field col s6 btn-join">
                <i class="material-icons">keyboard_hide</i>
                <input id="joinid" placeholder="Join Chat" style="color:rgb(100, 255, 218);">
                <button class="join-btn" @click="joinChat">Join</button>
              </div>
                <div class="col s12 m5" style="width:fit-content; text-align:center;">
                  <div class="card-panel" style="background-color: transparent; height:auto; width:auto;">
                    <span class="white-text">
                      <h6>With Chat-Vault, Create groups, Meet your friends, you'll get fast, simple messaging!</h6>
                    </span>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
import firebase from 'firebase'
import db from '@/firebase/init.js'
export default {
  name:"Index",
  // props: ['name'],
  data() {
    return {
      name:null,
    }
  },
  methods: {
	rndStr(len) {
    	let text = ""
    	let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ098765432"
    
      for( let i=0; i < len; i++ ) {
	      text += chars.charAt(Math.floor(Math.random() * chars.length))
      }

	return text
	},
  createChatId() {
	let message = this.rndStr(6)  
      this.message = message
      this.$router.push({name: 'Chat', params: { id: this.message}})
    },
    joinChat() {
      const chat_id = document.getElementById("joinid").value
      if(chat_id == ''){
          M.toast({html: 'Enter a code!', classes: 'teal'});
      } else {
        db.collection('chat_id').doc('kjghtdjyfytdyt') 
        .get().then(
          this.$router.push({ path: `/chat/${chat_id}` })
        );
      }
    },
    signout() {
      firebase.auth().signOut().then(()=> {
        // Sign-out successful.
        this.$router.push({name: 'Signup'})
      }).catch(function(error) {
        // An error happened.
      });
    },
    getName() {
      var user = firebase.auth().currentUser;
      if (user != null) {
        this.name = user.displayName;
      }
      console.log(name);
    }
  },
  beforeMount() {
    this.getName()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.home {
    height: 100vh;
    width: 100vw;
    display: grid;
    /* background-color:rgb(10, 25, 47)!important; */
}
.n1{
    padding-left: 20px!important;
    font-family: 'Google Sans Display',Roboto,Arial,sans-serif!important;
    font-size: 2 rem!important;
    font-weight: 500!important;
    color: rgb(100, 255, 218)!important;
}
.nav-wrapper{
  background-color: rgb(10, 25, 47);
}

/* Create two equal columns that floats next to each other */
.column {
  float:left;
  width: 50%;
  padding: 10px;
  height: 450px; 
  padding: 40px;
  /* Should be removed. Only for demonstration */
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}
.main {
    margin: 0;
    margin-top: 40px;
}
h2 {
  font-family: 'Google Sans Display',Roboto,Arial,sans-serif;
    font-size: 2.75rem;
    font-weight: 550;
    letter-spacing: 0;
    line-height: 3.25rem;
    color: rgba(255, 255, 255, 0.945);
    margin-top: 0;
}
h4 {
  /* color: rgba(218, 218, 218, 0.945); */
  color: rgb(100, 255, 218);
  text-align: center;
}
h5 {
  font-size: 1.6rem;
  font-weight: 300;
  color:rgba(255, 255, 255, 0.404)!important;
  text-align: center;
}
h6 {
    font-family: 'Google Sans',Roboto,Arial,sans-serif;
    font-size: 1.14rem;
    font-weight: 400;
    color:rgba(255, 255, 255, 0.404);
    text-align: center;
}
p {
  font-family: 'Google Sans',Roboto,Arial,sans-serif;
    font-size: 1.07rem;
    font-weight: 430;
    color:rgba(255, 255, 255, 0.404);
    padding-left: .3rem;
}
.img2 {
  height:45px;
  width:45px;
  padding-top: 9px;
}
.n1{
    padding-left: 10px!important;
    font-family: 'Google Sans Display',Roboto,Arial,sans-serif!important;
    font-size: 2 rem!important;
    font-weight: 550!important;
    color: rgb(100, 255, 218)!important;
}
.btn-join {
    font-size: 14px;
    font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", "Lucida Console", Monaco, monospace;
    background-color: transparent;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: .8rem 1rem;
    border: 1.9px solid grey;
    border-radius: 3px;
    color: rgb(100, 255, 218);
    border-color: rgb(100, 255, 218);
}
.join-btn{
  background-color: transparent;
  border:none;
  cursor: pointer;
  color: rgb(100, 255, 218);
}
#joinid{
  text-align: center;
}
/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
  }
}
</style>

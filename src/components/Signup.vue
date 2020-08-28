<template>
    <div class="page">
        <nav>
          <div class="nav-wrapper">
            <img class="responsive-img img2" src="../assets/img.png">
            <a href="#" class="brand-logo n1">Chat Vault</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
            </ul>
          </div>
        </nav>
        <div class="row main">
          <div class="column">
            <h3>Hello Friends!</h3>
            <p>To stay connected with us please do sign-up with Google..</p>
            <div class="col s12 m6 offset-m3 center-align" style="text-align:center">
              <button v-on:click="func()" class="oauth-container btn darken-4 white black-text signup" style="text-transform:none">
                  <div class="left">
                      <img width="20px" style="margin-top:7px; margin-right:8px" alt="Google sign-in" 
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" />
                  </div>
                  Login with Google
              </button>
              <img class="responsive-img" src="../assets/img2.jpg">
          </div>
          </div>
          <div class="column" style="padding-top:29.5px;">
            <img class="responsive-img" src="../assets/pic.png">
          </div>
        </div>
      </div>
</template>

<script>
import db from '@/firebase/init'
import firebase from 'firebase'
export default {
  name:"Signup",
  data() {
    return {

    }
  },
  methods: {
    func() {
      var provider = new firebase.auth.GoogleAuthProvider();

      firebase.auth().signInWithPopup(provider).then((result)=> {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      var user = firebase.auth().currentUser;
      var name;
      if (user != null) {
        name = user.displayName;
      }
      this.$router.push({ name: 'Index', params: { name: name} })
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lobster&family=Nosifer&display=swap');
  .page {
    height: 100vh;
    width: 100vw;
    display: grid;
    background-color:white!important;
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
h3 {
  font-family: 'Google Sans Display',Roboto,Arial,sans-serif;
  font-size: 3.15rem;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 3.25rem;
  text-align: center;
  color: rgba(0, 0, 0, 0.822);
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
    /* color:lightcyan!important; */
}
.signup {
  height: 60px;
  width: 270px;
  text-align: center;
  font-size: 1.15rem;
  color: rgb(100, 255, 218)!important;
  background-color: rgb(10, 25, 47)!important;
}
p {
  font-family: 'Google Sans',Roboto,Arial,sans-serif;
  font-size: 1.15rem;
  font-weight: 550;
  color:rgba(58, 56, 56, 0.877);
  text-align: center;
}
/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
  }
}
</style>
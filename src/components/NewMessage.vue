<template>
    <div class="new-message">
        <form @submit.prevent="addMessage">
            <label for="new-message">New Message (Press "Enter" to Add Message):</label>
            <input type="text" name="new-message" v-model="newMessage"> 
            <a class="btn-floating btn-medium waves-effect waves-light cyan right" @click="addMessage" style="margin-top:-50px;"><i class="material-icons">send</i></a> 
            <p class="red-text" v-if="feedback">{{ feedback }}</p>
        </form> 
    </div>
</template>

<script>
import db from '@/firebase/init.js'
import firebase from 'firebase'
export default {
    data() {
        return {
            chatId: this.$route.params.id,
            name:null,
            newMessage:null,
            feedback:null
        }
    }, 
    methods:{
        addMessage() {
            if(this.newMessage) {
                db.collection(this.chatId).add({
                    name: this.name,
                    content : this.newMessage,
                    timestamp: Date.now()    
                }).catch(err =>{
                    console.log(err)
                })
                this.newMessage=null
                this.feedback=null
            }
            else {
                this.feedback = "You must Enter a message in order to send"
            }
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

<style>

</style>
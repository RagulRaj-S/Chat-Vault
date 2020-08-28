 <template>
   <div class="page1">
     <nav>
        <div class="nav-wrapper">
          <img class="responsive-img img2" src="../assets/img.png">
            <a class="brand-logo n1">Chat Vault</a>
        </div>
      </nav>
     <div class="chat container">
    <div class="card" style="background-color:ivory;border-radius:4px">
      <div class="card-content">
        <ul class="messages" v-chat-scroll>
          <li v-for="message in messages" :key="message.id">
            <span class="teal-text">{{message.name}}</span>
            <span class="black-text">{{message.content}}</span>
             <span class="grey-text time">{{message.timestamp}}</span>
          </li>
        </ul>
      </div>
      <div class="card-action">
        <NewMessage />
      </div>
  </div>
  </div>
   </div>
</template>

<script>
 import NewMessage from '@/components/NewMessage'
 import db from '@/firebase/init'
 import moment from 'moment'
 import firebase from 'firebase'
export default {
  name: 'Chat',
   components: {
     NewMessage
   },
  data () {
    return {
      chatId: this.$route.params.id,
      messages: [],
      name:''
    }
  },
  created(){
    let reference = db.collection(this.chatId).orderBy('timestamp')
    reference.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change =>{
        if(change.type == 'added'){
          let doc = change.doc
          this.messages.push({
            id: doc.id,
            name: doc.data().name,
            content: doc.data().content,
            timestamp: moment(doc.data().timestamp).format('lll')
          })
        }
      })
    })
  }
}  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.page1 {
  height: 100vh;
  width: 100vw;
  display: grid;
  background-color:rgb(10, 25, 47)!important ;
}
.chat h2{
font-size: 2.6em;
margin-bottom: 40px;
}
.chat span{
  font-size: 1.4em;
}
.chat .time{
  display: block;
  font-size: 0.9em;
}
.messages{
  max-height: 300px;
  overflow: auto;
}
.messages::-webkit-scrollbar{
  width: 3px;
}
.messages::-webkit-scrollbar-track{
  background: #ddd;
}
.messages::-webkit-scrollbar-thumb{
  background: #aaa;
}
</style>

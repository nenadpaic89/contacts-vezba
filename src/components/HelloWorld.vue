<template>
  <div>
    <div v-for="c in contacts" :key="c.id">
      <h3>{{ c.first_name }}</h3>
      <h3>{{ c.last_name }}</h3>
      <h3>{{ c.email }}</h3>
      <router-link :to="{path: '/contact/' + c.id}">Details</router-link>
      <button @click="deleteContact(c.id)">Delete contact</button>
    </div>
    <hr>
    <form v-on:submit.prevent>
      <input type="text" v-model="newContact.first_name"/>
      <input type="text" v-model="newContact.last_name" />
      <input type="email" v-model="newContact.email"/>
      <button @click="submitContact">Submit</button>

    </form>
  </div>
</template>

<script>
import { contact } from '../services/contact';
export default {
  name: 'HelloWorld',
  data() {
    return {
      contacts: [],
      newContact: {
        first_name: '',
        last_name: '',
        email: ''
      }
    }
  },

  mounted() {
    contact.getAll().then(r => {
      console.log('GET Action', r)
    }).catch(e => console.log(e))
  },

  methods: {
    submitContact () {
      contact.add(this.newContact).then(r => {
        console.log('Contact added', r);
        this.contacts.push(r.data);
      });
    },
    deleteContact(id) {
      contact.delete(id).then(()=> this.contacts = this.contacts.filter(c => c.id !== id))
    }
  }
}
</script>

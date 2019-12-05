<template>
  <div>
    <h1>Test Detail</h1>
    <form v-on:submit.prevent>
      <input type="text" v-model="contact.first_name"/>
      <input type="text" v-model="contact.last_name" />
      <input type="email" v-model="contact.email"/>
      <button @click="updateSubmited">Submit</button>

    </form>

  </div>
</template>
<script>
import { contact } from '../services/contact';

export default {
  data() {
    return {
      contact: {}
    }
  },
  mounted() {
    console.log(this.$route.params)
    contact.get(this.$route.params.id).then(r => {
      this.contact = r.data
    })
  },

  methods: {
    updateSubmited () {
      contact.update(this.contact).then(r => {
        console.log(r);
      })
    }
  }
}
</script>

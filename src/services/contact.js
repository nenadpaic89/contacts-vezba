import axios from 'axios';
class Contact {
  getAll() {
    return axios.get('http://localhost:8000/api/contacts')
  }

  get(id) {
    return axios.get(`http://localhost:8000/api/contacts/${id}`) 
  }

  add(contact) {
    return axios.post('http://localhost:8000/api/contacts', contact)
  }

  update(contact) {
    return axios.put(`http://localhost:8000/api/contacts/${contact.id}`, contact)
  }

  delete(id) {
    return axios.delete(`http://localhost:8000/api/contacts/${id}`)
  }
}

export const contact = new Contact()

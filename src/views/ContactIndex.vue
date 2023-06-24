<template>
    <section class="contact-index">
        <h3>Contacts</h3>
        <ContactFilter @filter="onSetFilterBy" />
        <ContactList @remove="removeContact" v-if="contacts" :contacts="filteredContacts" />
    </section>
</template>

<script>
import { contactService } from '../services/contact.service'
import ContactList from '../components/ContactList.vue'
import ContactFilter from '../components/ContactFilter.vue'
import { computed } from 'vue'
export default {
    name: "ContactIndex",
    data() {
        return {
            contacts: null,
            filterBy: {}
        }
    },
    async created() {
        this.contacts = await contactService.getContacts()
    },
    components: {
        ContactList,
        ContactFilter
    },
    methods: {
        async addContact(contact) {
            const newContact = await contactService.saveContact(contact)
            this.contacts.push(newContact)
        },
        async removeContact(contactId) {
            await contactService.deleteContact(contactId)
            this.contacts = this.contacts.filter(contact => contact._id !== contactId)
        },
        onSetFilterBy(filterBy) {
            this.filterBy = filterBy
        }
    },
    computed: {
        filteredContacts() {
            const regex = new RegExp(this.filterBy.txt, 'i')
            return this.contacts.filter(contact => regex.test(contact.name) || regex.test(contact.email))
        }
    }
}
</script>

<style lang="scss" scoped></style>

<template>
    <section class="contact-index">
        <h3>Contacts</h3>
        <ContactFilter @filter="onSetFilterBy" />
        <ContactList @remove="removeContact" v-if="contacts" :contacts="filteredContacts" />
    </section>
</template>

<script>
import { contactService } from '../services/contact.service'
import { eventBus } from '../services/eventBus.service'
import ContactList from '../components/ContactList.vue'
import ContactFilter from '../components/ContactFilter.vue'

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
            const msg = {
                txt: `Contact ${contactId} removed...`,
                type: 'success',
                // timeout: 2500,
            }
            await contactService.deleteContact(contactId)
            this.contacts = this.contacts.filter(contact => contact._id !== contactId)

            eventBus.emit('user-msg', msg)
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

<style lang="scss" scoped>
.contact-index {
    padding: 10px;
    h3 {
        font-size: 2em;
        color: #333;
    }
}
</style>

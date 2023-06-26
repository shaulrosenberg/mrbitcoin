<template>
    <section class="contact-index">
        <div class="header-section">
            <ContactFilter @filter="onSetFilterBy" />
            <RouterLink to="/contact/edit" class="add-contact-btn">Add Contact</RouterLink>
        </div>
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
            filterBy: {}
        }
    },
    async created() {
        this.$store.dispatch({ type: 'loadContacts' })
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
            
            this.$store.dispatch({type: 'removeContact', contactId})
            eventBus.emit('user-msg', msg)
        },
        onSetFilterBy(filterBy) {
            this.filterBy = filterBy
        }
    },
    computed: {
        filteredContacts() {
            const regex = new RegExp(this.filterBy.txt, 'i')
            let filteredContacts = this.contacts.filter(contact => regex.test(contact.name) || regex.test(contact.email))
            return filteredContacts
        },
        contacts() {
            return this.$store.getters.contacts
        }
    }
}
</script>

<style lang="scss" scoped>
.contact-index {
    padding: 20px;
    margin-bottom: 30px;
    background: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);

    .header-section {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }

    .add-contact-btn {
        padding: 10px 20px;
        background-color: #3366ff;
        color: white;
        border-radius: 4px;
        text-decoration: none;

        &:hover {
            background-color: #0056b3;
        }
    }
}
</style>

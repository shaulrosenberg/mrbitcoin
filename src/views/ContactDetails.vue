<template>
    <article v-if="contact" class="contact-details">
        <!-- <img :src="`https://robohash.org/${contact._id}?set=set4`" alt="avatar" class="contact-avatar"> -->
        <img :src="`https://avatars.dicebear.com/api/human/${this.contact.email}.svg`" alt="avatar" class="contact-avatar">
        <div class="contact-info">
            <h2>{{ contact.name }}</h2>
            <h3>{{ contact.email }}</h3>
            <h3>{{ contact.phone }}</h3>
        </div>
        <TransferFunds :contactId="contact._id" />
        <TransactionList :contactId="contact._id" :transactions="transactions"/>
        <div class="contact-actions">
            <RouterLink to="/contact">
                <button>Back</button>
            </RouterLink>
            <button @click="onRemoveContact(contact._id)">delete</button>
        </div>
    </article>
</template>

<script>
import { contactService } from '@/services/contact.service.js'
import { eventBus } from '../services/eventBus.service'
import TransferFunds from '@/components/TransferFunds.vue'
import TransactionList from '@/components/TransactionList.vue'

export default {
    components: {
        TransferFunds,
        TransactionList
    },
    data() {
        return {
            contact: null,
        }
    },
    async created() {
        if(!this.$store.getters.user) {
            eventBus.emit('user-msg', {txt: 'Login First!', type: 'fail'})
            this.$router.push('/signup')
            return
        }
        const contactId = this.$route.params.id
        this.contact = await contactService.getContactById(contactId)
    },
    methods: {
        async onRemoveContact(contactId) {
            await contactService.deleteContact(contactId)
            this.$router.push('/contact')
        }
    },
    computed: {
        transactions() {
            return this.$store.getters.user.transactions.filter(
                transaction => transaction.toId === this.contact._id
            )
        }
    }
}
</script>

<style lang="scss" scoped>
.contact-details {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #f6f8fa;
    border-radius: 10px;
    max-width: 450px;
    margin: 0 auto;

    .contact-avatar {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        object-fit: cover;
        margin-bottom: 20px;
    }

    .contact-info {
        text-align: center;
        margin-bottom: 20px;

        h2 {
            font-size: 1.5rem;
            margin-bottom: 10px;
        }

        h3 {
            font-size: 1.2rem;
            margin-bottom: 5px;
        }
    }

    .contact-actions {
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin-top: 20px;

        button {
            padding: 10px;
            border: none;
            border-radius: 5px;
            background-color: #3c8dbc;
            color: white;
            cursor: pointer;
            transition: background-color 0.3s ease;

            &:hover {
                background-color: #337ab7;
            }
        }
    }
}
</style>


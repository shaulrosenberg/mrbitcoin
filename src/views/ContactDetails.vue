<template>
    <article v-if="contact" class="contact-details">
        <img :src="`https://robohash.org/${contact._id}?set=set4`" alt="avatar" class="contact-avatar">
        <div class="contact-info">
            <h2>{{ contact.name }}</h2>
            <h3>{{ contact.email }}</h3>
            <h3>{{ contact.phone }}</h3>
        </div>
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

export default {
    data() {
        return {
            contact: null,
        }
    },
    async created() {
        const contactId = this.$route.params.id
        this.contact = await contactService.getContactById(contactId)
    },
    methods: {
        async onRemoveContact(contactId) {
            await contactService.deleteContact(contactId)
            this.$router.push('/contact')
        }
    }
}
</script>

<style lang="scss" scoped>
.contact-details {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;

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
        justify-content: space-around;
        width: 100%;

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

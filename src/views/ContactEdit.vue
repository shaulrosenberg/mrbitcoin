<template>
    <form @submit.prevent="save" v-if="contact" class="contact-edit">
        <img :src="`https://robohash.org/${contact._id}?set=set4`" alt="avatar" class="contact-avatar">
        <div class="input-group">
            <label for="name">Name</label>
            <input id="name" v-model="contact.name" type="text">
        </div>
        <div class="input-group">
            <label for="email">Email</label>
            <input id="email" v-model="contact.email" type="email">
        </div>
        <div class="input-group">
            <label for="phone">Phone</label>
            <input id="phone" v-model.number="contact.phone" type="tel">
        </div>
        <button class="save-btn">Save</button>
    </form>
</template>

<script>
import { contactService } from '@/services/contact.service.js'

export default {
    data() {
        return {
            contact: null,
        }
    },
    methods: {
        async save() {
            await contactService.saveContact(this.contact)
            this.$router.push('/contact')
        }
    },
    async created() {
        const contactId = this.$route.params.id
        if (contactId) {
            this.contact = await contactService.getContactById(contactId)
        } else {
            this.contact = contactService.getEmptyContact()
        }
    }
}
</script>

<style lang="scss" scoped>
.contact-edit {
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

    .input-group {
        display: flex;
        flex-direction: column;
        margin-bottom: 15px;
        width: 100%;

        label {
            font-size: 1rem;
            margin-bottom: 5px;
        }

        input {
            padding: 10px;
            border-radius: 5px;
            border: 1px solid #ddd;
            font-size: 1rem;
        }
    }

    .save-btn {
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
</style>

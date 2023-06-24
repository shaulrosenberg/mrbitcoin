<template>
    <section>
        <ul>
            <li v-for="contact in contacts" :key="contact._id">
                <ContactPreview :contact="contact" />
                <section class="actions">
                    <RouterLink :to="`/contact/${contact._id}`">
                        <button>Details</button>
                    </RouterLink>
                    <RouterLink :to="`/contact/edit/${contact._id}`">
                        <button>Edit</button>
                    </RouterLink>
                    <button @click="onRemoveContact(contact._id)">x</button>
                </section>
            </li>
        </ul>
    </section>
</template>

<script>
import ContactPreview from './ContactPreview.vue'
export default {
    props: {
        contacts: { type: Object, required: true }
    },
    components: {
        ContactPreview,
    },
    methods: {
        onRemoveContact(contactId) {
            this.$emit('remove', contactId)
        }
    }
}
</script>

<style lang="scss"></style>
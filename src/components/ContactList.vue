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


<style lang="scss" scoped>
section {
    ul {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
            border-bottom: 1px solid #ddd;
            padding: 1em 0;

            .actions {
                display: flex;
                gap: 1em;

                button {
                    padding: 0.5em 1em;
                    font-size: 1em;
                    border: none;
                    border-radius: 4px;
                    background: #3366ff;
                    color: white;
                    cursor: pointer;

                    &:hover {
                        background: #0056b3;
                    }
                }
            }
        }
    }
}
</style>
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
            padding: 20px;
            margin: 10px 0;
            background: #fff;
            border-radius: 8px;
            box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);

            .actions {
                display: flex;
                gap: 1em;
                align-items: center;
                margin-top: 10px;

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

                    &:last-child {
                        background: #7d7274;

                        &:hover {
                            background: #d4c8ca;
                        }
                    }
                }
            }
        }
    }
}
</style>

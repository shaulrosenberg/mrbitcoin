<template>
    <article class="contact-preview">
        <img :src="avatarUrl" alt="Avatar" class="avatar">
        <h2>{{ contact.name }}</h2>
        <h3>{{ contact.email }}</h3>
    </article>
</template>

<script>
export default {
    props: {
        contact: { type: Object, required: true },
    },
    computed: {
        avatarUrl() {
            return `https://avatars.dicebear.com/api/human/${this.contact.email}.svg`;
        }
    }
}
</script>

<style lang="scss" scoped>
.contact-preview {
    display: flex;
    align-items: center;
    gap: 10px;

    h2 {
        font-size: 1.5em;
        color: #333;
        margin-bottom: 0.2em;
    }

    h3 {
        font-size: 1.2em;
        color: #777;
    }

    .avatar {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        object-fit: cover;
    }
}
</style>

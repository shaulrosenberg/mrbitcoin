<template>
    <article class="contact-preview">
        <h2>{{ contact.name }}</h2>
        <h3>{{ contact.email }}</h3>
    </article>
</template>

<script>
export default {
    props: {
        contact: { type: Object, required: true },
    }
}
</script>

<style lang="scss" scoped>
.contact-preview {
    h2 {
        font-size: 1.5em;
        color: #333;
    }

    h3 {
        font-size: 1.2em;
        color: #777;
    }
}
</style>
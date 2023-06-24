<template>
    <section class="contact-filter">
        <input @input="onSetFilterBy" v-model="filterBy.txt" type="text" placeholder="Search contacts...">
    </section>
</template>

<script>
export default {
    data() {
        return {
            filterBy: {
                txt: '',
            }
        }
    },
    methods: {
        onSetFilterBy() {
            this.$emit('filter', this.filterBy)
        }
    }
}
</script>

<style lang="scss" scoped>
.contact-filter {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0;

    input {
        width: 100%;
        padding: 5px;
        font-size: 1rem;
        border-radius: 4px;
        border: 1px solid #ccc;
        box-shadow: 2px 2px 5px rgba(0,0,0,0.1);

        &:focus {
            outline: none;
            border-color: #3c8dbc;
            box-shadow: 2px 2px 5px rgba(60, 141, 188, 0.5);
        }

        &::placeholder {
            color: #999;
        }
    }
}
</style>

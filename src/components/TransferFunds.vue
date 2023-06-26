<template>
    <div class="transfer-bitcoins">
        <h3>Transfer Bitcoins</h3>
        <form @submit.prevent="transfer" class="transfer-form">
            <label for="amount">Amount:</label>
            <input id="amount" v-model.number="amount" type="number" min="1" :max="user.balance">
            <button type="submit" :disabled="!validTransfer" class="transfer-button">Transfer</button>
        </form>
        <p>Your balance: {{ balance }}</p>
    </div>
</template>
  
<script>
export default {
    props: ['contactId'],
    data() {
        return {
            amount: 0,
        }
    },
    computed: {
        user() {
            return this.$store.getters.user
        },
        balance() {
            return this.user.balance
        },
        validTransfer() {
            return this.amount <= this.user.balance && this.amount > 0
        }
    },
    methods: {
        async transfer() {
            if (this.validTransfer) {
                await this.$store.dispatch('transferFunds', { contactId: this.contactId, amount: this.amount })
            }
        }
    }
}
</script>
  

<style lang="scss">
.transfer-bitcoins {
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.15);
    margin-top: 20px;
    width: 100%;

    h3 {
        color: #333;
        margin-bottom: 20px;
    }

    .transfer-form {
        display: flex;
        flex-direction: column;

        label {
            font-weight: bold;
            margin-bottom: 10px;
        }

        input {
            margin-bottom: 20px;
            padding: 10px;
            border-radius: 5px;
            border: 1px solid #ddd;
            font-size: 1rem;
        }

        .transfer-button {
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            background-color: #3c8dbc;
            color: white;
            cursor: pointer;
            transition: background-color 0.3s ease;

            &:hover {
                background-color: #337ab7;
            }

            &:disabled {
                background-color: #ddd;
                cursor: not-allowed;
            }
        }
    }

    p {
        color: #333;
        font-size: 1.2rem;
        text-align: center;
        margin-top: 20px;
    }
}
</style>

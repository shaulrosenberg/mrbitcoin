<template>
    <div class="transactions-list">
        <h3>Transactions</h3>
        <ul>
            <li v-for="transaction in transactions" :key="transaction.at">
                Transferred {{ transaction.amount }} Bitcoins to {{ transaction.to }} at
                {{ new Date(transaction.at).toLocaleDateString() }}
            </li>
        </ul>
    </div>
</template>
  
<script>
export default {
    props: {
        transactions: { type: Object, required: true }
    }
}
</script>


<style lang="scss" scoped>
.transactions-list {
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
    margin-top: 20px;
    width: 100%;

    h3 {
        color: #333;
        margin-bottom: 20px;
    }

    ul {
        list-style: none;
        padding: 0;

        li {
            font-size: 1rem;
            color: #666;
            border-bottom: 1px solid #f0f0f0;
            padding: 10px 0;

            &:last-child {
                border-bottom: none;
            }
        }
    }
}
</style>

<template>
<div>
    <h2>Silahkan isi data Customer</h2>
    <form action="/customers" method="post">
        <label for="name">Customer Name:</label>
        <input type="text" v-model="name" placeholder="Insert name"><br>
        <label for="add_country">Country:</label>
        <input type="text" v-model="add_country" placeholder="Insert country">
        </form>
</div>
</template>

<script>
</script>

<style scoped>

</style>

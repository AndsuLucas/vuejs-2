<template>
    <div class="citacao">
        <slot name="text"></slot>
        <slot name="source"></slot>
        <slot name="author"></slot>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
    .citacao {
        border: 1px solid #DDD;
        background-color: rgba(0, 0, 0, .1);
        padding: 25px;
        max-width: 450px;
    }
</style>

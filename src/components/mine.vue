<template>
    <div>{{mymine}}</div>
</template>
<script>
export default {
    name: 'mine',
    props: {
        mymine:{
            type: String,
            default: ''
        }
    }
}
</script>
<template>
    <div>
        something
        <button class="btn btn-primary" @click="build">创建项目</button>
        <button class="btn btn-primary" @click="list">列出iamges</button>
    </div>
</template>

<style scoped>

</style>

<script>

    export default {
        sockets: {
            connect: function() {
                console.log('login docker images socket connected!', this.$socket.id)
            }
        },
        methods: {
            build() {
                console.log('build');
                this.$socket.emit('build-image', {name: 'wawa'})
            },
            list() {
                console.log('list');
                this.$socket.emit('list-image', {name: 'wawa'})
            },
            'build-image-info'(dt) {
                console.log(dt);
            }
        }
    }
</script>

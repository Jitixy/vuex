<template>
    <div class="notification-bar" :class="notificationTypeClass">
        <p>{{Notification.message}}</p>

    </div>
</template>

<script>
import {mapActions} from 'vuex';
    export default {
        props:{
            Notification:{
                type:Object,
                requiered :true
            }
        },
        data(){
            return{
                timeout:null
            }

        },
        mounted(){
            this.timeout=setTimeout(()=>this.remove(this.notification),5000)
        },
        beforeDestroy(){
            clearTimeout(this.timeout)
        }
        ,
        computed:{
            notificationTypeClass(){
                return`-text-${this.Notification.type}`
            }
        },
        methods: mapActions('notification',['remove'])
    }
</script>

<style scoped>
.notification-bar{
    margin: 1em 0 1em;
}
</style>
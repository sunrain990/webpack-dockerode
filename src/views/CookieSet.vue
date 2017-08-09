<template>
    <div>
        <p>
            {{dt}}
            Please Wait...
        </p>
        <!--<img src="http://localhost:8080/setCookie.php" style="display:none;" />-->
        <!--<img src="http://localhost:5584/setcookie" style="display:none;" />-->
    </div>
</template>

<style>

</style>

<script>
    export default{
        data(){
            return {
                dt: 'dt'
            }
        },
        created() {
            var pondJwtToken = sessionStorage.getItem('pond-jwt-token');
            console.log('cookieSet inited!!! - --- - - - -- - --', pondJwtToken)
        }
    }
</script>
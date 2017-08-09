<template>
    <div>
        home
    </div>
</template>

<style lang="less">
    .col {
        margin-bottom: 30px;
    }
    @media all and (max-width: 680px) {
        .col {
            width: 100%;
            text-align: center;
            float: left;
        }
    }

    @media all and (min-width: 680px) and (max-width: 800px) {
        .col {
            width: 33.3333%;
            text-align: center;
            float: left;
        }
    }

    @media all and (min-width: 800px)and (max-width: 1000px) {
        .col {
            width: 25%;
            text-align: center;
            float: left;
        }
    }

    @media all and (min-width: 1000px) {
        .col {
            width: 20%;
            text-align: center;
            float: left;
        }
    }



    @keyframes sys-ani {
        0% {
            transform: scale(1.1) rotate(0deg);
            -ms-transform: scale(1.1) rotate(0deg); /* IE 9 */
            -moz-transform: scale(1.1) rotate(0deg); /* Firefox */
            -webkit-transform: scale(1.1) rotate(0deg); /* Safari 和 Chrome */
            -o-transform: scale(1.1) rotate(0deg);
        }

        100% {
            transform: scale(1) rotate(360deg);
            -ms-transform: scale(1) rotate(360deg); /* IE 9 */
            -moz-transform: scale(1) rotate(360deg); /* Firefox */
            -webkit-transform: scale(1) rotate(360deg); /* Safari 和 Chrome */
            -o-transform: scale(1) rotate(360deg);
        }
    }

    @keyframes sys-word-ani {
        0% {
            transform: scale(1) rotate(0deg);
            -ms-transform: scale(1) rotate(0deg); /* IE 9 */
            -moz-transform: scale(1) rotate(0deg); /* Firefox */
            -webkit-transform: scale(1) rotate(0deg); /* Safari 和 Chrome */
            -o-transform: scale(1) rotate(0deg);
        }

        100% {
            transform: scale(1) rotate(0deg);
            -ms-transform: scale(1) rotate(0deg); /* IE 9 */
            -moz-transform: scale(1) rotate(0deg); /* Firefox */
            -webkit-transform: scale(1) rotate(0deg); /* Safari 和 Chrome */
            -o-transform: scale(1) rotate(0deg);
        }
    }

    .unclockwise {
        -webkit-animation: sys-word-ani 3s infinite linear;
        -moz-animation: sys-word-ani 3s infinite linear;
        -o-animation: sys-word-ani 3s infinite linear;
        animation: sys-word-ani 3s infinite linear;
        cursor: pointer;
        /*-webkit-box-shadow: 0 0 20px #0CC;*/
        /*-moz-box-shadow: 0 0 20px #0CC;*/
        /*box-shadow: 0 0 20px #0CC;*/
    }

    .clockwise {
        -webkit-animation: sys-ani 3s infinite linear;
        -moz-animation: sys-ani 3s infinite linear;
        -o-animation: sys-ani 3s infinite linear;
        animation: sys-ani 3s infinite linear;
        cursor: pointer;
        /*-webkit-box-shadow: 0 0 20px #0CC;*/
        /*-moz-box-shadow: 0 0 20px #0CC;*/
        /*box-shadow: 0 0 20px #0CC;*/
    }

    .content {
    }

    .sys-choose {
        position: relative;
        width: 160px;
        height: 160px;
        display: inline-block;
    }

    .sys {
        position: relative;
        height: 160px;
        width: 160px;
        border: none;
        border-radius: 10px;
        background: #0B9EFF;

        zoom: 1;
        filter: alpha(opacity=50);
        -moz-opacity: 0.5;
        opacity: 0.5;

        -webkit-box-shadow: inset 0 0 20px #0CC;
        -moz-box-shadow: inset 0 0 20px #0CC;
        box-shadow: inset 0 0 20px #0CC;

    }

    .sys-info {
        height: 160px;
        line-height: 160px;
        width: 160px;
        color: #314058;
        font-size: 24px;
        position: absolute;
        text-align: center;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        word-break: break-all;
    }
</style>

<script>

</script>
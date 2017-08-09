<template>
    <div>
        <header id="fh5co-header-section" class="sticky-banner">
            <div class="container">
                <div class="nav-header">
                    <a href="index.html#" class="js-fh5co-nav-toggle fh5co-nav-toggle dark"><i></i></a>
                    <h1 id="fh5co-logo"><a href="index.html"><i class="fa fa-print" aria-hidden="true"></i>Print</a></h1>
                    <!-- START #fh5co-menu-wrap -->
                    <nav id="fh5co-menu-wrap" role="navigation">
                        <ul class="sf-menu" id="fh5co-primary-menu">
                            <li class="active"><a href="index.html">Home</a></li>
                            <li>
                                <a href="vacation.html" class="fh5co-sub-ddown">Vacations</a>
                                <ul class="fh5co-sub-menu">
                                    <li><a href="index.html#">Family</a></li>
                                    <li><a href="index.html#">CSS3 &amp; HTML5</a></li>
                                    <li><a href="index.html#">Angular JS</a></li>
                                    <li><a href="index.html#">Node JS</a></li>
                                    <li><a href="index.html#">Django &amp; Python</a></li>
                                </ul>
                            </li>
                            <li><a href="flight.html">Flights</a></li>
                            <li><a href="hotel.html">Hotel</a></li>
                            <li><a href="car.html">Car</a></li>
                            <li><a href="blog.html">Blog</a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    </div>
</template>

<style>
    @import "../../assets/css/superfish.css";
    @import "../../assets/css/style.css";
</style>

<script>

    import '../../assets/js/superfish.js'
    export default {
        mounted() {
            $('#fh5co-primary-menu').superfish({
                delay: 0,
                animation: {
                    opacity: 'show'
                },
                speed: 'fast',
                cssArrows: true,
                disableHI: true
            });
        }
    }
</script>
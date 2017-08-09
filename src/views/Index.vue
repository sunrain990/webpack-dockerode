<template>
    <div id="fh5co-wrapper">
        <div id="fh5co-page">

            <header id="fh5co-header-section" class="sticky-banner">
                <div class="container">
                    <div class="nav-header">
                        <a href="index.html#" class="js-fh5co-nav-toggle fh5co-nav-toggle dark"><i></i></a>
                        <h1 id="fh5co-logo">
                            <router-link to="/index">
                            <i class="fa fa-print" aria-hidden="true"></i>
                                Print
                            </router-link>
                        </h1>
                        <!-- START #fh5co-menu-wrap -->
                        <nav id="fh5co-menu-wrap" role="navigation">
                            <ul class="sf-menu" id="fh5co-primary-menu">
                                <li class="active">
                                    <router-link to="/index">Home</router-link>
                                </li>
                                <li>
                                    <!--<a href="vacation.html" class="fh5co-sub-ddown">-->
                                        <!--Vacations</a>-->
                                    <a class="fh5co-sub-ddown">Products</a>
                                    <ul class="fh5co-sub-menu">
                                        <li>
                                            <a data-navi="business_cards">Business Cards</a>
                                            <ul>
                                                <li><a data-navi="premier_business_card">Premier Business Card</a></li>
                                                <li><a data-navi="platinum_business_card">Platinum Business Card</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a data-navi="booklets">Booklets</a>
                                            <ul>
                                                <li><a data-navi="booklets">Booklets</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a data-navi="flyers_brochures">Flyers & Brochures</a>
                                            <ul>
                                                <li><a data-navi="flyers">Flyers</a></li>
                                                <li><a data-navi="folded_brochures">Folded Brochures</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a data-navi="graphic_design">Graphic Design</a>
                                            <ul style="width: 130%;">
                                                <li><a data-navi="corporate_identity_packages">Corporate Identity Packages</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a data-navi="stationery">Stationery</a>
                                            <ul>
                                                <li><a data-navi="compliment_slip">Compliment Slip</a></li>
                                                <li><a data-navi="letterhead">Letterhead</a></li>
                                                <li><a data-navi="presentation_folder">Presentation Folder</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a data-navi="cards_invitations">Cards & Invitations</a>
                                            <ul>
                                                <li><a data-navi="postcards">Postcards</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a data-navi="large_format_print">Large Format Print</a>
                                            <ul>
                                                <li><a data-navi="flat_signs">Flat signs</a></li>
                                                <li><a data-navi="posters">Posters</a></li>
                                                <li><a data-navi="pullup_banners">Pull-up Banners</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a data-navi="promotional_items">Promotional Items</a>
                                            <ul>
                                                <li><a data-navi="bookmark_two_side">Bookmark Two side</a></li>
                                                <li><a data-navi="table_tent_card_two_side">Table Tent Card Two Side</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a data-navi="apparel_accessories">Apparel & Accessories</a>
                                            <ul>
                                                <li><a data-navi="t_shirt">T-shirt</a></li>
                                                <li><a data-navi="t_shirt_test">T-shirt-test</a></li>
                                                <li><a data-navi="pillow_cases">Pillow cases</a></li>
                                                <li><a data-navi="cap">Cap</a></li>
                                                <li><a data-navi="tea_towels">Tea towels</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li><a>Discount</a></li>
                                <li><a>Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
            <!-- end:header-top -->


            <div class="breadcrumb_container">
                <ul class="breadcrumbs_box_style2 hidden-xs">
                    <li class="active"><span class="a">Step 1: Fill in Order Detail</span></li>
                    <li><span class="a">Step 2: Design Product</span></li>
                    <li><span class="a">Step 3: Confirm Order Details</span></li>
                    <li><span class="a">Step 4: Place Order &amp; Checkout</span></li>
                </ul>
                <ul class="visible-xs list-inline">
                    <li class="active">
                        <span title="" data-placement="top" data-toggle="tooltip"
                                             data-original-title="Step 1: Fill in Order Detail">
                            <span class="fa-stack fa-1x">
                                <i class="fa fa-circle fa-stack-2x"></i>
                                <i class="fa fa-exclamation-circle fa-stack-1x fa-inverse"></i>
                            </span>
                        </span>
                        <i class="fa fa-chevron-right fa-1x"></i>
                    </li>
                    <li>
                        <span title="" data-placement="top" data-toggle="tooltip"
                              data-original-title="Step 2: Design Product">
                            <span class="fa-stack fa-1x">
                                <i class="fa fa-circle fa-stack-2x"></i>
                                <i class="fa fa-pencil-square fa-stack-1x fa-inverse"></i>
                            </span>
                        </span>
                        <i class="fa fa-chevron-right fa-1x"></i>
                    </li>
                    <li><span title="" data-placement="top" data-toggle="tooltip"
                              data-original-title="Step 3: Confirm Order Details">
                        <span class="fa-stack fa-1x">
                            <i class="fa fa-circle fa-stack-2x"></i>
                            <i class="fa fa-cogs fa-stack-1x fa-inverse"></i>
                        </span>
                    </span><i class="fa fa-chevron-right fa-1x"></i>
                    </li>
                    <li>
                        <span title="" data-placement="top" data-toggle="tooltip"
                              data-original-title="Step 4: Place Order &amp; Checkout">
                            <span class="fa-stack fa-1x">
                                <i class="fa fa-circle fa-stack-2x"></i>
                                <i class="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
                            </span>
                        </span>
                        <i class="fa fa-chevron-right fa-1x"></i>
                    </li>
                </ul>
            </div>


            <div class="fh5co-hero">
                <div class="fh5co-overlay"></div>
                <div class="fh5co-cover fh5co-bg-1">
                    <div class="desc">
                        <div class="container">
                            <div class="row">
                                <div class="col-sm-5 col-md-5">
                                    <div class="tabulation animate-box">

                                        <!-- Tab panes tab-content-->
                                        <div class="">

                                            <div id="myCarousel" class="carousel slide">
                                                <!-- 轮播（Carousel）指标 -->
                                                <ol class="carousel-indicators">
                                                <li data-target="#myCarousel" data-slide-to="0"></li>
                                                <li data-target="#myCarousel" data-slide-to="1"></li>
                                                <li data-target="#myCarousel" data-slide-to="2"></li>
                                                <li data-target="#myCarousel" data-slide-to="3"></li>
                                                <li data-target="#myCarousel" data-slide-to="4"></li>
                                                <li data-target="#myCarousel" data-slide-to="5"></li>
                                                <li data-target="#myCarousel" data-slide-to="6"></li>
                                                <li data-target="#myCarousel" data-slide-to="7"></li>
                                                <li data-target="#myCarousel" data-slide-to="8"></li>
                                                <!--<li data-target="#myCarousel" data-slide-to="2"></li>-->
                                                <!--<li data-target="#myCarousel" data-slide-to="3"></li>-->
                                                <!--<li data-target="#myCarousel" data-slide-to="4"></li>-->
                                                </ol>
                                                <!-- 轮播（Carousel）项目 -->
                                                <div class="carousel-inner">

                                                    <!--business_cards-->
                                                    <div class="item active tab-content">
                                                        <!-- Nav tabs -->
                                                        <ul class="nav nav-tabs" role="tablist">
                                                            <li role="presentation" class="active">
                                                                <a href="#premier_business_card" aria-controls="premier_business_card" role="tab" data-toggle="tab">Premier Business Card</a>
                                                            </li>
                                                            <li role="presentation">
                                                                <a href="#platinum_business_card" aria-controls="platinum_business_card" role="tab" data-toggle="tab">Platinum Business Card</a>
                                                            </li>
                                                        </ul>

                                                        <div role="tabpanel" class="tab-pane active" id="premier_business_card">
                                                            <div class="row">

                                                                <div class="col-sm-12 mt">
                                                                    <section>
                                                                        <label for="class">Size:</label>
                                                                        <select class="cs-select cs-skin-border">
                                                                            <option value="" disabled selected>90 x 54 mm</option>
                                                                            <option value="economy">90 x 54 mm</option>
                                                                        </select>
                                                                    </section>
                                                                </div>

                                                                <div class="col-sm-12 mt">
                                                                    <section>
                                                                        <label for="class">Quantity:</label>
                                                                        <select class="cs-select cs-skin-border">
                                                                            <!--<option value="" disabled selected>200</option>-->
                                                                            <option value="200">200</option>
                                                                            <option value="400">400</option>
                                                                            <option value="800">800</option>
                                                                        </select>
                                                                    </section>
                                                                </div>

                                                                <div class="col-sm-12 mt">
                                                                    <section>
                                                                        <label for="class">Stock:</label>
                                                                        <select class="cs-select cs-skin-border">
                                                                            <option value="" disabled selected>350 gsm</option>
                                                                            <option value="200">350 gsm</option>
                                                                        </select>
                                                                    </section>
                                                                </div>

                                                                <div class="col-sm-12 mt">
                                                                    <section>
                                                                        <label for="class">Side:</label>
                                                                        <select class="cs-select cs-skin-border">
                                                                            <option value="" disabled selected>Double Sides</option>
                                                                            <option value="2">Double Sides</option>
                                                                            <option value="1">Single Side</option>
                                                                        </select>
                                                                    </section>
                                                                </div>
                                                                <div class="col-xs-12">
                                                                    <input type="submit" class="btn btn-primary btn-block" value="Submit">
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div role="tabpanel" class="tab-pane" id="platinum_business_card">
                                                            <div class="row">

                                                                <div class="col-sm-12 mt">
                                                                    <section>
                                                                        <label for="class">Size:</label>
                                                                        <select class="cs-select cs-skin-border">
                                                                            <option value="" disabled selected>90 x 54 mm</option>
                                                                            <option value="economy">90 x 54 mm</option>
                                                                        </select>
                                                                    </section>
                                                                </div>

                                                                <div class="col-sm-12 mt">
                                                                    <section>
                                                                        <label for="class">Quantity:</label>
                                                                        <select class="cs-select cs-skin-border">
                                                                            <!--<option value="" disabled selected>200</option>-->
                                                                            <option value="250">250</option>
                                                                            <option value="500">500</option>
                                                                            <option value="1000">1000</option>
                                                                            <option value="1500">1500</option>
                                                                        </select>
                                                                    </section>
                                                                </div>

                                                                <div class="col-sm-12 mt">
                                                                    <section>
                                                                        <label for="class">Paper:</label>
                                                                        <select class="cs-select cs-skin-border">
                                                                            <option value="" disabled selected>350 gsm</option>
                                                                            <option value="350">350 gsm</option>
                                                                        </select>
                                                                    </section>
                                                                </div>

                                                                <div class="col-sm-12 mt">
                                                                    <section>
                                                                        <label for="class">Side(s):</label>
                                                                        <select class="cs-select cs-skin-border">
                                                                            <option value="1" disabled selected>Single Side</option>
                                                                            <option value="2">Double Sides</option>
                                                                            <option value="1">Single Side</option>
                                                                        </select>
                                                                    </section>
                                                                </div>

                                                                <div class="col-sm-12 mt">
                                                                    <section>
                                                                        <label for="class">Lamination:</label>
                                                                        <select class="cs-select cs-skin-border">
                                                                            <option value="1" disabled selected>No Lamimate</option>
                                                                            <option value="2">Gloss (front side)</option>
                                                                            <option value="3">Gloss (both side)</option>
                                                                            <option value="4">Matte (front side)</option>
                                                                            <option value="5">Matte (both side)</option>
                                                                        </select>
                                                                    </section>
                                                                </div>

                                                                <div class="col-xs-12">
                                                                    <input type="submit" class="btn btn-primary btn-block" value="Submit">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <!--booklets-->
                                                    <div class="item tab-content">
                                                        <!-- Nav tabs -->
                                                        <ul class="nav nav-tabs" role="tablist">
                                                            <li role="presentation" class="active">
                                                                <a href="#booklets"
                                                                   aria-controls="booklets" role="tab"
                                                                   data-toggle="tab">Booklets</a>
                                                            </li>
                                                        </ul>

                                                        <div role="tabpanel" class="tab-pane active"
                                                             id="booklets">
                                                            <div class="row">

                                                                <div class="col-sm-12 mt">
                                                                    <section>
                                                                        <label for="class">Size:</label>
                                                                        <select class="cs-select cs-skin-border">
                                                                            <option value="" disabled selected>
                                                                                A4 - 210 x 297mm
                                                                            </option>
                                                                            <option value="a4">A4 - 210 x 297mm</option>
                                                                            <option value="a5">A5 - 210 X 148mm</option>
                                                                        </select>
                                                                    </section>
                                                                </div>

                                                                <div class="col-sm-12 mt">
                                                                    <section>
                                                                        <label for="class">Quantity:</label>
                                                                        <select class="cs-select cs-skin-border">
                                                                            <!--<option value="" disabled selected>200</option>-->
                                                                            <option value="50">50</option>
                                                                            <option value="100">100</option>
                                                                            <option value="200">200</option>
                                                                            <option value="250">250</option>
                                                                            <option value="500">500</option>
                                                                        </select>
                                                                    </section>
                                                                </div>

                                                                <div class="col-sm-12 mt">
                                                                    <section>
                                                                        <label for="class">Printed pages:</label>
                                                                        <select class="cs-select cs-skin-border">
                                                                            <option value="" disabled selected>
                                                                                Select Option
                                                                            </option>
                                                                            <option value="8pp">8pp</option>
                                                                            <option value="12pp">12pp</option>
                                                                            <option value="16pp">16pp</option>
                                                                            <option value="20pp">20pp</option>
                                                                            <option value="24pp">24pp</option>
                                                                        </select>
                                                                    </section>
                                                                </div>

                                                                <div class="col-sm-12 mt">
                                                                    <section>
                                                                        <label for="class">Printed stock:</label>
                                                                        <select class="cs-select cs-skin-border">
                                                                            <option value="" disabled selected>Double
                                                                                Select Option
                                                                            </option>
                                                                            <option value="140 gsm Gloss">140 gsm Gloss</option>
                                                                            <option value="100 gsm matt art">100 gsm matt art</option>
                                                                        </select>
                                                                    </section>
                                                                </div>
                                                                <div class="col-xs-12">
                                                                    <input type="submit"
                                                                           class="btn btn-primary btn-block"
                                                                           value="Submit">
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>

                                                    <!--flyers_brochures-->
                                                    <div class="item tab-content">
                                                        <!-- Nav tabs -->
                                                        <ul class="nav nav-tabs" role="tablist">
                                                            <li role="presentation" class="active">
                                                                <a href="#flyers"
                                                                   aria-controls="flyers" role="tab"
                                                                   data-toggle="tab">Flyers</a>
                                                            </li>

                                                            <li role="presentation">
                                                                <a href="#folded_brochures"
                                                                   aria-controls="folded_brochures" role="tab"
                                                                   data-toggle="tab">Folded Brochures</a>
                                                            </li>
                                                        </ul>

                                                        <div role="tabpanel" class="tab-pane active" id="flyers">
                                                            <div class="row">

                                                                <div class="col-sm-12 mt">
                                                                    <section>
                                                                        <label for="class">Size:</label>
                                                                        <select class="cs-select cs-skin-border">
                                                                            <option value="" disabled selected>
                                                                                DL - 97 x 210 mm
                                                                            </option>
                                                                            <option value="dl">DL - 97 x 210 mm</option>
                                                                            <option value="a5">A5 - 148 x 210mm</option>
                                                                            <option value="a4">A4 - 210 x 297mm</option>
                                                                        </select>
                                                                    </section>
                                                                </div>

                                                                <div class="col-sm-12 mt">
                                                                    <section>
                                                                        <label for="class">Quantity:</label>
                                                                        <select class="cs-select cs-skin-border">
                                                                            <!--<option value="" disabled selected>200</option>-->
                                                                            <option value="50">50</option>
                                                                            <option value="100">100</option>
                                                                            <option value="200">200</option>
                                                                            <option value="250">250</option>
                                                                            <option value="500">500</option>
                                                                        </select>
                                                                    </section>
                                                                </div>

                                                                <div class="col-sm-12 mt">
                                                                    <section>
                                                                        <label for="class">Printed stock:</label>
                                                                        <select class="cs-select cs-skin-border">
                                                                            <option value="130 gsm gloss" disabled selected>
                                                                                130 gsm gloss
                                                                            </option>
                                                                            <option value="130 gsm gloss">130 gsm
                                                                                gloss
                                                                            </option>
                                                                        </select>
                                                                    </section>
                                                                </div>

                                                                <div class="col-sm-12 mt">
                                                                    <section>
                                                                        <label for="class">Side:</label>
                                                                        <select class="cs-select cs-skin-border">
                                                                            <option value="1" disabled selected>
                                                                                Single sided
                                                                            </option>
                                                                            <option value="1">
                                                                                Single sided
                                                                            </option>
                                                                            <option value="2">
                                                                                Double sided
                                                                            </option>
                                                                        </select>
                                                                    </section>
                                                                </div>


                                                                <div class="col-xs-12">
                                                                    <input type="submit"
                                                                           class="btn btn-primary btn-block"
                                                                           value="Submit">
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div role="tabpanel" class="tab-pane" id="folded_brochures">
                                                            <div class="row">

                                                                <div class="col-sm-12 mt">
                                                                    <section>
                                                                        <label for="class">Size:</label>
                                                                        <select class="cs-select cs-skin-border">
                                                                            <option value="a34" disabled selected>
                                                                                A3 folded to A4
                                                                            </option>
                                                                            <option value="a4">A4 folded to DL</option>
                                                                            <option value="a45">A4 folded to A5</option>
                                                                            <option value="a34">A3 folded to A4</option>
                                                                            <option value="a3">A3 tri-fold</option>
                                                                        </select>
                                                                    </section>
                                                                </div>

                                                                <div class="col-sm-12 mt">
                                                                    <section>
                                                                        <label for="class">Quantity:</label>
                                                                        <select class="cs-select cs-skin-border">
                                                                            <option value="100" disabled selected>100</option>
                                                                            <option value="100">100</option>
                                                                            <option value="150">150</option>
                                                                            <option value="200">200</option>
                                                                            <option value="250">250</option>
                                                                            <option value="1000">1000</option>
                                                                            <option value="2000">2000</option>
                                                                        </select>
                                                                    </section>
                                                                </div>

                                                                <div class="col-sm-12 mt">
                                                                    <section>
                                                                        <label for="class">Stock:</label>
                                                                        <select class="cs-select cs-skin-border">
                                                                            <option value="130" disabled selected>
                                                                                130 gsm Gloss
                                                                            </option>
                                                                            <option value="130">130 gsm Gloss</option>
                                                                            <option value="300">300 gsm Satin</option>
                                                                        </select>
                                                                    </section>
                                                                </div>

                                                                <div class="col-xs-12">
                                                                    <input type="submit"
                                                                           class="btn btn-primary btn-block"
                                                                           value="Submit">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <!--graphic_design-->
                                                    <div class="item tab-content">
                                                        <!-- Nav tabs -->
                                                        <ul class="nav nav-tabs" role="tablist">
                                                            <li role="presentation" class="active">
                                                                <a href="#corporate_identity_packages" aria-controls="corporate_identity_packages" role="tab" data-toggle="tab">Corporate Identity</a>
                                                            </li>
                                                        </ul>
                                                        <div role="tabpanel" class="tab-pane active" id="corporate_identity_packages">
                                                            <div class="row">
                                                                <div class="col-sm-6 mt">
                                                                    <section>
                                                                        <label for="class">Quantity:</label>
                                                                        <select class="cs-select cs-skin-border">
                                                                            <option value="1" disabled selected>
                                                                                1
                                                                            </option>
                                                                            <option value="1">1</option>
                                                                        </select>
                                                                    </section>
                                                                </div>

                                                                <div class="col-sm-6 mt">
                                                                    <section>
                                                                        <label for="class">Logo Design Packages:</label>
                                                                        <select class="cs-select cs-skin-border">
                                                                            <option value="starter package" disabled selected>
                                                                                Starter Package
                                                                            </option>
                                                                            <option value="starter package">Starter Package</option>
                                                                            <option value="deluxe package">Deluxe Package</option>
                                                                            <option value="grand package">Grand Package</option>
                                                                        </select>
                                                                    </section>
                                                                </div>

                                                                <div class="col-sm-6 mt">
                                                                    <section>
                                                                        <label for="class">Initial concepts:</label>
                                                                        <select class="cs-select cs-skin-border">
                                                                            <option value="2" disabled selected>
                                                                                2
                                                                            </option>
                                                                            <option value="2">2</option>
                                                                        </select>
                                                                    </section>
                                                                </div>

                                                                <div class="col-sm-6 mt">
                                                                    <section>
                                                                        <label for="class">Additional concepts</label>
                                                                        <select class="cs-select cs-skin-border">
                                                                            <option value="-----" disabled selected>
                                                                                 -----
                                                                            </option>
                                                                            <option value="1">+1</option>
                                                                            <option value="2">+2</option>
                                                                        </select>
                                                                    </section>
                                                                </div>

                                                                <div class="col-sm-6 mt">
                                                                    <section>
                                                                        <label for="class">Revisions</label>
                                                                        <select class="cs-select cs-skin-border">
                                                                            <option value="2" disabled selected>
                                                                                2 Revisions
                                                                            </option>
                                                                            <option value="2">2 Revisions</option>
                                                                        </select>
                                                                    </section>
                                                                </div>


                                                                <div class="col-sm-6 mt">
                                                                    <div class="input-field">
                                                                        <label for="from">Business Industry:</label>
                                                                        <input type="text" class="form-control" id="to-place" placeholder="business industry"/>
                                                                    </div>
                                                                </div>

                                                                <div class="col-sm-12 mt">
                                                                    <div class="input-field">
                                                                        <label for="from">Tell us about your Business and Type of Customers:</label>
                                                                        <textarea class="form-control txtarea" id="to-place"></textarea>
                                                                    </div>
                                                                </div>

                                                                <div class="col-sm-12 mt">
                                                                    <div class="input-field">
                                                                        <label for="from">Tell us about your dream logo</label>
                                                                        <textarea class="form-control txtarea" id="to-place"></textarea>
                                                                    </div>
                                                                </div>


                                                                <div class="col-xs-12">
                                                                    <input type="submit" class="btn btn-primary btn-block" value="Search Packages">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <!--stationery-->
                                                    <div class="item tab-content">
                                                        <!-- Nav tabs -->
                                                        <ul class="nav nav-tabs" role="tablist">
                                                            <li role="presentation" class="active">
                                                                <a href="#compliment_slip" aria-controls="compliment_slip" role="tab" data-toggle="tab">Compliment Slip</a>
                                                            </li>
                                                            <li role="presentation">
                                                                <a href="#letterhead" aria-controls="letterhead" role="tab" data-toggle="tab">Letterhead</a>
                                                            </li>
                                                            <li role="presentation">
                                                                <a href="#presentation_folder" aria-controls="presentation_folder" role="tab" data-toggle="tab">Presentation Folder</a>
                                                            </li>
                                                        </ul>
                                                        <div role="tabpanel" class="tab-pane active" id="compliment_slip">
                                                            <div class="row">

                                                                <div class="col-sm-12 mt">
                                                                    <section>
                                                                        <label for="class">Size:</label>
                                                                        <select class="cs-select cs-skin-border">
                                                                            <option value="1" disabled selected>
                                                                                210 x 99 mm
                                                                            </option>
                                                                            <option value="1">210 x 99 mm</option>
                                                                        </select>
                                                                    </section>
                                                                </div>

                                                                <div class="col-sm-12 mt">
                                                                    <section>
                                                                        <label for="class">Quantity:</label>
                                                                        <select class="cs-select cs-skin-border">
                                                                            <option value="1" disabled selected>
                                                                                1
                                                                            </option>
                                                                            <option value="250">250</option>
                                                                            <option value="500">500</option>
                                                                            <option value="1000">1000</option>
                                                                            <option value="1500">1500</option>
                                                                            <option value="2000">2000</option>
                                                                            <option value="2500">2500</option>
                                                                            <option value="5000">5000</option>
                                                                        </select>
                                                                    </section>
                                                                </div>

                                                                <div class="col-sm-12 mt">
                                                                    <section>
                                                                        <label for="class">Stock:</label>
                                                                        <select class="cs-select cs-skin-border">
                                                                            <option value="100" disabled selected>
                                                                                100 gsm laser
                                                                            </option>
                                                                            <option value="100">100 gsm laser</option>
                                                                        </select>
                                                                    </section>
                                                                </div>

                                                                <div class="col-xs-12">
                                                                    <input type="submit" class="btn btn-primary btn-block" value="Search Packages">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div role="tabpanel" class="tab-pane" id="letterhead">
                                                            <div class="row">

                                                                <div class="col-sm-12 mt">
                                                                    <section>
                                                                        <label for="class">Size:</label>
                                                                        <select class="cs-select cs-skin-border">
                                                                            <option value="1" disabled selected>
                                                                                A4 - 210 x 297 mm
                                                                            </option>
                                                                            <option value="1">A4 - 210 x 297 mm</option>
                                                                        </select>
                                                                    </section>
                                                                </div>

                                                                <div class="col-sm-12 mt">
                                                                    <section>
                                                                        <label for="class">Quantity:</label>
                                                                        <select class="cs-select cs-skin-border">
                                                                            <option value="1" disabled selected>
                                                                                1
                                                                            </option>
                                                                            <option value="250">250</option>
                                                                            <option value="500">500</option>
                                                                            <option value="1000">1000</option>
                                                                            <option value="2000">2000</option>
                                                                        </select>
                                                                    </section>
                                                                </div>

                                                                <div class="col-sm-12 mt">
                                                                    <section>
                                                                        <label for="class">Stock:</label>
                                                                        <select class="cs-select cs-skin-border">
                                                                            <option value="100" disabled selected>
                                                                                100 gsm laser
                                                                            </option>
                                                                            <option value="100">100 gsm laser</option>
                                                                        </select>
                                                                    </section>
                                                                </div>

                                                                <div class="col-sm-12 mt">
                                                                    <section>
                                                                        <label for="class">Sides:</label>
                                                                        <select class="cs-select cs-skin-border">
                                                                            <option value="100" disabled selected>
                                                                                Single Sided
                                                                            </option>
                                                                            <option value="1">Single Sided</option>
                                                                        </select>
                                                                    </section>
                                                                </div>

                                                                <div class="col-xs-12">
                                                                    <input type="submit" class="btn btn-primary btn-block" value="Search Packages">
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div role="tabpanel" class="tab-pane" id="presentation_folder">
                                                            <div class="row">

                                                                <div class="col-sm-12 mt">
                                                                    <section>
                                                                        <label for="class">Size:</label>
                                                                        <select class="cs-select cs-skin-border">
                                                                            <option value="1" disabled selected>
                                                                                A4 Folder
                                                                            </option>
                                                                            <option value="1">A4 - 210 x 297 mm</option>
                                                                        </select>
                                                                    </section>
                                                                </div>

                                                                <div class="col-sm-12 mt">
                                                                    <section>
                                                                        <label for="class">Quantity:</label>
                                                                        <select class="cs-select cs-skin-border">
                                                                            <option value="250" disabled selected>
                                                                                250
                                                                            </option>
                                                                            <option value="250">250</option>
                                                                            <option value="500">500</option>
                                                                            <option value="1000">1000</option>
                                                                        </select>
                                                                    </section>
                                                                </div>

                                                                <div class="col-sm-12 mt">
                                                                    <section>
                                                                        <label for="class">Paper:</label>
                                                                        <select class="cs-select cs-skin-border">
                                                                            <option value="350" disabled selected>
                                                                                350 gsm gloss
                                                                            </option>
                                                                            <option value="350">350 gsm gloss</option>
                                                                        </select>
                                                                    </section>
                                                                </div>

                                                                <div class="col-sm-12 mt">
                                                                    <section>
                                                                        <label for="class">Print Side:</label>
                                                                        <select class="cs-select cs-skin-border">
                                                                            <option value="100" disabled selected>
                                                                                Single Sided
                                                                            </option>
                                                                            <option value="1">Single Sided</option>
                                                                            <option value="2">Double Sided</option>
                                                                        </select>
                                                                    </section>
                                                                </div>

                                                                <div class="col-sm-12 mt">
                                                                    <section>
                                                                        <label for="class">Lamination:</label>
                                                                        <select class="cs-select cs-skin-border">
                                                                            <option value="1" disabled selected>
                                                                                Front Side - Single Side Printed
                                                                            </option>
                                                                            <option value="1">Front Side - Single Side Printed</option>
                                                                            <option value="2">Both Sides - Single Side Printed</option>
                                                                        </select>
                                                                    </section>
                                                                </div>

                                                                <div class="col-xs-12">
                                                                    <input type="submit" class="btn btn-primary btn-block" value="Search Packages">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <!--cards_invitations-->
                                                    <div class="item tab-content">
                                                        <!-- Nav tabs -->
                                                        <ul class="nav nav-tabs" role="tablist">
                                                            <li role="presentation" class="active">
                                                                <a href="#postcards" aria-controls="postcards" role="tab" data-toggle="tab">Postcards</a>
                                                            </li>
                                                        </ul>
                                                        <div role="tabpanel" class="tab-pane active" id="postcards">
                                                            <div class="row">

                                                                <div class="col-sm-12 mt">
                                                                    <section>
                                                                        <label for="class">Size:</label>
                                                                        <select class="cs-select cs-skin-border">
                                                                            <option value="A4" disabled selected>
                                                                                A4 Folder
                                                                            </option>
                                                                            <option value="A4">A4 Folder</option>
                                                                        </select>
                                                                    </section>
                                                                </div>

                                                                <div class="col-sm-12 mt">
                                                                    <section>
                                                                        <label for="class">Quantity:</label>
                                                                        <select class="cs-select cs-skin-border">
                                                                            <option value="250" disabled selected>
                                                                                250
                                                                            </option>
                                                                            <option value="250">250</option>
                                                                            <option value="500">500</option>
                                                                            <option value="1000">1000</option>
                                                                        </select>
                                                                    </section>
                                                                </div>

                                                                <div class="col-sm-12 mt">
                                                                    <section>
                                                                        <label for="class">Paper:</label>
                                                                        <select class="cs-select cs-skin-border">
                                                                            <option value="350" disabled selected>
                                                                                350 gsm gloss
                                                                            </option>
                                                                            <option value="350">350 gsm gloss</option>
                                                                        </select>
                                                                    </section>
                                                                </div>

                                                                <div class="col-sm-12 mt">
                                                                    <section>
                                                                        <label for="class">Print Side:</label>
                                                                        <select class="cs-select cs-skin-border">
                                                                            <option value="350" disabled selected>
                                                                                Single Side
                                                                            </option>
                                                                            <option value="1"> Single Side</option>
                                                                            <option value="2">Double Sided</option>
                                                                        </select>
                                                                    </section>
                                                                </div>

                                                                <div class="col-sm-12 mt">
                                                                    <section>
                                                                        <label for="class">Lamination:</label>
                                                                        <select class="cs-select cs-skin-border">
                                                                            <option value="350" disabled selected>
                                                                                Front Side - Single Side Printed
                                                                            </option>
                                                                            <option value="1">Front Side - Single Side Printed</option>
                                                                            <option value="2">Both Side - Single Side Printed</option>
                                                                        </select>
                                                                    </section>
                                                                </div>

                                                                <div class="col-xs-12">
                                                                    <input type="submit" class="btn btn-primary btn-block" value="Search Packages">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <!--large_format_print-->
                                                    <div class="item tab-content">
                                                        <!-- Nav tabs -->
                                                        <ul class="nav nav-tabs" role="tablist">
                                                            <li role="presentation" class="active">
                                                                <a href="#flat_signs" aria-controls="flat_signs" role="tab" data-toggle="tab">Flat signs</a>
                                                            </li>
                                                            <li role="presentation">
                                                                <a href="#posters" aria-controls="posters" role="tab" data-toggle="tab">Posters</a>
                                                            </li>
                                                            <li role="presentation">
                                                                <a href="#pullup_banners" aria-controls="pullup_banners" role="tab" data-toggle="tab">Pull-up Banners</a>
                                                            </li>
                                                        </ul>
                                                        <div role="tabpanel" class="tab-pane active" id="flat_signs">
                                                            <div class="row">

                                                                <div class="col-sm-12 mt">
                                                                    <section>
                                                                        <label for="class">Size:</label>
                                                                        <select class="cs-select cs-skin-border">
                                                                            <option value="A0" disabled selected>
                                                                                A0
                                                                            </option>
                                                                            <option value="A0">A0</option>
                                                                            <option value="A1">A1</option>
                                                                            <option value="A2">A2</option>
                                                                        </select>
                                                                    </section>
                                                                </div>

                                                                <div class="col-sm-12 mt">
                                                                    <div class="input-field">
                                                                        <label for="from">Quantity:</label>
                                                                        <input type="text" class="form-control" id="to-place" placeholder="1"/>
                                                                    </div>
                                                                </div>

                                                                <div class="col-sm-12 mt">
                                                                    <section>
                                                                        <label for="class">Material:</label>
                                                                        <select class="cs-select cs-skin-border">
                                                                            <option value="corflute" disabled selected>
                                                                                Corflute
                                                                            </option>
                                                                            <option value="corflute">Corflute</option>
                                                                            <option value="foamcor">Foam-cor</option>
                                                                        </select>
                                                                    </section>
                                                                </div>

                                                                <div class="col-xs-12">
                                                                    <input type="submit" class="btn btn-primary btn-block" value="Search Packages">
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div role="tabpanel" class="tab-pane" id="posters">
                                                            <div class="row">

                                                                <div class="col-sm-12 mt">
                                                                    <section>
                                                                        <label for="class">Size:</label>
                                                                        <select class="cs-select cs-skin-border">
                                                                            <option value="A3" disabled selected>
                                                                                A3 - 297mm x 420 mm
                                                                            </option>
                                                                            <option value="A3">A3 - 297mm x 420mm</option>
                                                                            <option value="A4">A4 - 210mm x 297mm</option>
                                                                        </select>
                                                                    </section>
                                                                </div>

                                                                <div class="col-sm-12 mt">
                                                                    <section>
                                                                        <label for="class">Quantity:</label>
                                                                        <select class="cs-select cs-skin-border">
                                                                            <option value="25" disabled selected>
                                                                                25
                                                                            </option>
                                                                            <option value="25">25</option>
                                                                            <option value="50">50</option>
                                                                            <option value="100">100</option>
                                                                            <option value="200">200</option>
                                                                        </select>
                                                                    </section>
                                                                </div>

                                                                <div class="col-sm-12 mt">
                                                                    <section>
                                                                        <label for="class">Stock:</label>
                                                                        <select class="cs-select cs-skin-border">
                                                                            <option value="130 gsm gloss" disabled selected>
                                                                                130 gsm gloss
                                                                            </option>
                                                                            <option value="130 gsm gloss">130 gsm gloss</option>
                                                                        </select>
                                                                    </section>
                                                                </div>

                                                                <div class="col-xs-12">
                                                                    <input type="submit" class="btn btn-primary btn-block" value="Search Packages">
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div role="tabpanel" class="tab-pane" id="pullup_banners">
                                                            <div class="row">

                                                                <div class="col-sm-12 mt">
                                                                    <section>
                                                                        <label for="class">Size:</label>
                                                                        <select class="cs-select cs-skin-border">
                                                                            <option value="850 x 2000mm" disabled selected>
                                                                                850 x 2000mm
                                                                            </option>
                                                                            <option value="850 x 2000mm">850 x 2000mm</option>
                                                                        </select>
                                                                    </section>
                                                                </div>

                                                                <div class="col-sm-12 mt">
                                                                    <section>
                                                                        <label for="class">Quantity:</label>
                                                                        <select class="cs-select cs-skin-border">
                                                                            <option value="1" disabled selected>
                                                                                1
                                                                            </option>
                                                                            <option value="1">1</option>
                                                                            <option value="2">2</option>
                                                                            <option value="3">3</option>
                                                                            <option value="5">5</option>
                                                                            <option value="10">10</option>
                                                                        </select>
                                                                    </section>
                                                                </div>

                                                                <div class="col-xs-12">
                                                                    <input type="submit" class="btn btn-primary btn-block" value="Search Packages">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <!--promotional_items-->
                                                    <div class="item tab-content">
                                                        <!-- Nav tabs -->
                                                        <ul class="nav nav-tabs" role="tablist">
                                                            <li role="presentation" class="active">
                                                                <a href="#bookmark_two_side" aria-controls="bookmark_two_side" role="tab" data-toggle="tab">Bookmark Two side</a>
                                                            </li>
                                                            <li role="presentation">
                                                                <a href="#table_tent_card_two_side" aria-controls="table_tent_card_two_side" role="tab" data-toggle="tab">Table Tent Card Two Side</a>
                                                            </li>
                                                        </ul>
                                                        <div role="tabpanel" class="tab-pane active" id="bookmark_two_side">
                                                            <div class="row">

                                                                <div class="col-sm-12 mt">
                                                                    <section>
                                                                        <label for="class">Size:</label>
                                                                        <select class="cs-select cs-skin-border">
                                                                            <option value="200 x 50 mm" disabled selected>
                                                                                200 x 50 mm
                                                                            </option>
                                                                            <option value="200 x 50 mm">200 x 50 mm</option>
                                                                        </select>
                                                                    </section>
                                                                </div>

                                                                <div class="col-sm-12 mt">
                                                                    <section>
                                                                        <label for="class">Quantity:</label>
                                                                        <select class="cs-select cs-skin-border">
                                                                            <option value="250" disabled selected>
                                                                                250
                                                                            </option>
                                                                            <option value="250">250</option>
                                                                            <option value="500">500</option>
                                                                            <option value="1000">1000</option>
                                                                            <option value="2000">2000</option>
                                                                        </select>
                                                                    </section>
                                                                </div>

                                                                <div class="col-xs-12">
                                                                    <input type="submit" class="btn btn-primary btn-block" value="Search Packages">
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div role="tabpanel" class="tab-pane" id="table_tent_card_two_side">
                                                            <div class="row">

                                                                <div class="col-sm-12 mt">
                                                                    <section>
                                                                        <label for="class">Size:</label>
                                                                        <select class="cs-select cs-skin-border">
                                                                            <option value="200 x 50 mm" disabled selected>
                                                                                146 x 210 mm (landscape)
                                                                            </option>
                                                                            <option value="200 x 50 mm">146 x 210 mm (landscape)</option>
                                                                        </select>
                                                                    </section>
                                                                </div>

                                                                <div class="col-sm-12 mt">
                                                                    <section>
                                                                        <label for="class">Quantity:</label>
                                                                        <select class="cs-select cs-skin-border">
                                                                            <option value="250" disabled selected>
                                                                                250
                                                                            </option>
                                                                            <option value="50">50</option>
                                                                            <option value="100">100</option>
                                                                            <option value="150">150</option>
                                                                            <option value="250">250</option>
                                                                            <option value="350">350</option>
                                                                            <option value="500">500</option>
                                                                            <option value="750">750</option>
                                                                        </select>
                                                                    </section>
                                                                </div>

                                                                <div class="col-xs-12">
                                                                    <input type="submit" class="btn btn-primary btn-block" value="Search Packages">
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>

                                                    <!--apparel_accessories-->
                                                    <div class="item tab-content">
                                                        <!-- Nav tabs -->
                                                        <ul class="nav nav-tabs" role="tablist">
                                                            <li role="presentation" class="active">
                                                                <a href="#t_shirt" aria-controls="t_shirt" role="tab" data-toggle="tab">T-shirt</a>
                                                            </li>
                                                            <li role="presentation">
                                                                <a href="#t_shirt_test" aria-controls="t_shirt_test" role="tab" data-toggle="tab">T-shirt-test</a>
                                                            </li>
                                                            <li role="presentation">
                                                                <a href="#pillow_cases" aria-controls="pillow_cases" role="tab" data-toggle="tab">Pillow cases</a>
                                                            </li>
                                                            <li role="presentation">
                                                                <a href="#cap" aria-controls="cap" role="tab" data-toggle="tab">Cap</a>
                                                            </li>
                                                            <li role="presentation">
                                                                <a href="#tea_towels" aria-controls="tea_towels" role="tab" data-toggle="tab">Tea towels</a>
                                                            </li>
                                                        </ul>
                                                        <div role="tabpanel" class="tab-pane active" id="t_shirt">
                                                            <div class="row">

                                                                <div class="col-sm-12 mt">
                                                                    <section>
                                                                        <label for="class">Size:</label>
                                                                        <select class="cs-select cs-skin-border">
                                                                            <option value="S - Small" disabled selected>
                                                                                S - Small
                                                                            </option>
                                                                            <option value="S - Small">S - Small</option>
                                                                            <option value="M - Medium">M - Medium</option>
                                                                            <option value="L - Large">L - Large</option>
                                                                            <option value="XL - Extra Large">XL - Extra Large</option>
                                                                        </select>
                                                                    </section>
                                                                </div>

                                                                <div class="col-sm-12 mt">
                                                                    <div class="input-field">
                                                                        <label for="from">Quantity:</label>
                                                                        <input type="text" class="form-control" id="to-place" value="1"/>
                                                                    </div>
                                                                </div>

                                                                <div class="col-sm-12 mt">
                                                                    <section>
                                                                        <label for="class">Side:</label>
                                                                        <select class="cs-select cs-skin-border">
                                                                            <option value="S - Small" disabled selected>
                                                                                Front
                                                                            </option>
                                                                            <option value="Front">Front</option>
                                                                            <option value="Back">Back</option>
                                                                            <option value="Front & Back">Front & Back</option>
                                                                        </select>
                                                                    </section>
                                                                </div>

                                                                <div class="col-xs-12">
                                                                    <input type="submit" class="btn btn-primary btn-block" value="Search Packages">
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div role="tabpanel" class="tab-pane" id="t_shirt_test">
                                                            <div class="row">

                                                                <div class="col-sm-12 mt">
                                                                    <section>
                                                                        <label for="class">Size:</label>
                                                                        <select class="cs-select cs-skin-border">
                                                                            <option value="XS - Extra small" disabled selected>
                                                                                XS - Extra small
                                                                            </option>
                                                                            <option value="XS - Extra small">XS - Extra small</option>
                                                                        </select>
                                                                    </section>
                                                                </div>

                                                                <div class="col-sm-12 mt">
                                                                    <div class="input-field">
                                                                        <label for="from">Quantity:</label>
                                                                        <input type="text" class="form-control" id="to-place" value="1"/>
                                                                    </div>
                                                                </div>

                                                                <div class="col-sm-12 mt">
                                                                    <section>
                                                                        <label for="class">Side:</label>
                                                                        <select class="cs-select cs-skin-border">
                                                                            <option value="S - Small" disabled selected>
                                                                                Front
                                                                            </option>
                                                                            <option value="Front">Front</option>
                                                                            <option value="Back">Back</option>
                                                                            <option value="Front & Back">Front & Back</option>
                                                                        </select>
                                                                    </section>
                                                                </div>

                                                                <div class="col-xs-12">
                                                                    <input type="submit" class="btn btn-primary btn-block" value="Search Packages">
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div role="tabpanel" class="tab-pane" id="pillow_cases">
                                                            <div class="row">

                                                                <div class="col-sm-12 mt">
                                                                    <section>
                                                                        <label for="class">Size:</label>
                                                                        <select class="cs-select cs-skin-border">
                                                                            <option value="350 x 200" disabled selected>
                                                                                350 x 200
                                                                            </option>
                                                                            <option value="350 x 200">350 x 200</option>
                                                                        </select>
                                                                    </section>
                                                                </div>

                                                                <div class="col-sm-12 mt">
                                                                    <div class="input-field">
                                                                        <label for="from">Quantity:</label>
                                                                        <input type="text" class="form-control" id="to-place" value="1"/>
                                                                    </div>
                                                                </div>

                                                                <div class="col-xs-12">
                                                                    <input type="submit" class="btn btn-primary btn-block" value="Search Packages">
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div role="tabpanel" class="tab-pane" id="cap">
                                                            <div class="row">

                                                                <div class="col-sm-12 mt">
                                                                    <section>
                                                                        <label for="class">1 Size:</label>
                                                                        <select class="cs-select cs-skin-border">
                                                                            <option value="1 Size" disabled selected>
                                                                                1 Size
                                                                            </option>
                                                                            <option value="1 Size">1 Size</option>
                                                                        </select>
                                                                    </section>
                                                                </div>

                                                                <div class="col-sm-12 mt">
                                                                    <div class="input-field">
                                                                        <label for="from">Quantity:</label>
                                                                        <input type="text" class="form-control" id="to-place" value="1"/>
                                                                    </div>
                                                                </div>

                                                                <div class="col-xs-12">
                                                                    <input type="submit" class="btn btn-primary btn-block" value="Search Packages">
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div role="tabpanel" class="tab-pane" id="tea_towels">
                                                            <div class="row">

                                                                <div class="col-sm-12 mt">
                                                                    <section>
                                                                        <label for="class">Size:</label>
                                                                        <select class="cs-select cs-skin-border">
                                                                            <option value="500 x 700" disabled selected>
                                                                                500 x 700
                                                                            </option>
                                                                            <option value="500 x 700">500 x 700</option>
                                                                        </select>
                                                                    </section>
                                                                </div>

                                                                <div class="col-sm-12 mt">
                                                                    <div class="input-field">
                                                                        <label for="from">Quantity:</label>
                                                                        <input type="text" class="form-control" id="to-place" value="1"/>
                                                                    </div>
                                                                </div>

                                                                <div class="col-xs-12">
                                                                    <input type="submit" class="btn btn-primary btn-block" value="Search Packages">
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>
                                                <!-- 轮播（Carousel）导航 -->
                                                <!--<a class="carousel-control left" href="#myCarousel"-->
                                                   <!--data-slide="prev">&lsaquo;</a>-->
                                                <!--<a class="carousel-control right" href="#myCarousel"-->
                                                   <!--data-slide="next">&rsaquo;</a>-->
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="desc2 animate-box">
                                    <div class="col-sm-7 col-sm-push-1 col-md-7 col-md-push-1">
                                        <p>Your private print services <a href="#" class="fh5co-site-name">Print.au</a></p>
                                        <h2>Discounted Offer</h2>
                                        <h2> Get UPTO 20% Off</h2>
                                        <h3>Custom your own art works, now!</h3>
                                        <span class="price">$998</span>
                                        <!-- <p><a class="btn btn-primary btn-lg" href="#">Get Started</a></p> -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="copyrights">Collect from <a href="http://www.cssmoban.com/"  title="网站模板">网站模板</a></div>

            <div id="fh5co-tours" class="fh5co-section-gray">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 col-md-offset-2 text-center heading-section animate-box">
                            <h3>Hot Templates</h3>
                            <p>Whether it's a box of business cards or flyers for a letterbox drop, posters and promotional giveaways, invitation or even t-shirts...</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4 col-sm-6 fh5co-tours animate-box" data-animate-effect="fadeIn">
                            <div href="#"><img src="../assets/img/apparel-accessories.jpg" alt="Custom your own T-Shirt," class="img-responsive">
                                <div class="desc">
                                    <span></span>
                                    <h3>T-Shirt</h3>
                                    <span>Draw a picture</span>
                                    <span class="price">$1,000</span>
                                    <router-link class="btn btn-primary btn-outline" to="index.html#">Book Now <i class="icon-arrow-right22"></i></router-link>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6 fh5co-tours animate-box" data-animate-effect="fadeIn">
                            <div href="#"><img src="../assets/img/Business_Cards4112.png" alt="Custom your own Business Cards" class="img-responsive">
                                <div class="desc">
                                    <span></span>
                                    <h3>Business Cards</h3>
                                    <span>Indicate your identity</span>
                                    <span class="price">$1,000</span>
                                    <a class="btn btn-primary btn-outline" href="index.html#">Book Now <i class="icon-arrow-right22"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6 fh5co-tours animate-box" data-animate-effect="fadeIn">
                            <div href="#"><img src="../assets/img/booklet_mock_up99.jpg" alt="Custom your own Book-lets" class="img-responsive">
                                <div class="desc">
                                    <span></span>
                                    <h3>Booklets</h3>
                                    <span>design booklets for ads</span>
                                    <span class="price">$1,000</span>
                                    <a class="btn btn-primary btn-outline" href="index.html#">Book Now <i class="icon-arrow-right22"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12 text-center animate-box">
                            <p><a class="btn btn-primary btn-outline btn-lg" href="index.html#">See All Offers <i class="icon-arrow-right22"></i></a></p>
                        </div>
                    </div>
                </div>
            </div>

            <div id="fh5co-features">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 animate-box">

                            <div class="feature-left">
							<span class="icon">
								<i class="icon-hotairballoon"></i>
							</span>
                                <div class="feature-copy">
                                    <h3>Family Travel</h3>
                                    <p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.</p>
                                    <p><a href="index.html#">Learn More</a></p>
                                </div>
                            </div>

                        </div>

                        <div class="col-md-4 animate-box">
                            <div class="feature-left">
							<span class="icon">
								<i class="icon-search"></i>
							</span>
                                <div class="feature-copy">
                                    <h3>Travel Plans</h3>
                                    <p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.</p>
                                    <p><a href="index.html#">Learn More</a></p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 animate-box">
                            <div class="feature-left">
							<span class="icon">
								<i class="icon-wallet"></i>
							</span>
                                <div class="feature-copy">
                                    <h3>Honeymoon</h3>
                                    <p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.</p>
                                    <p><a href="index.html#">Learn More</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4 animate-box">

                            <div class="feature-left">
							<span class="icon">
								<i class="icon-wine"></i>
							</span>
                                <div class="feature-copy">
                                    <h3>Business Travel</h3>
                                    <p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.</p>
                                    <p><a href="index.html#">Learn More</a></p>
                                </div>
                            </div>

                        </div>

                        <div class="col-md-4 animate-box">
                            <div class="feature-left">
							<span class="icon">
								<i class="icon-genius"></i>
							</span>
                                <div class="feature-copy">
                                    <h3>Solo Travel</h3>
                                    <p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.</p>
                                    <p><a href="index.html#">Learn More</a></p>
                                </div>
                            </div>

                        </div>
                        <div class="col-md-4 animate-box">
                            <div class="feature-left">
							<span class="icon">
								<i class="icon-chat"></i>
							</span>
                                <div class="feature-copy">
                                    <h3>Explorer</h3>
                                    <p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.</p>
                                    <p><a href="index.html#">Learn More</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div id="fh5co-destination">
                <div class="tour-fluid">
                    <div class="row">
                        <div class="col-md-12">
                            <ul id="fh5co-destination-list" class="animate-box">
                                <li class="one-forth text-center lic1" >
                                    <a href="index.html#">
                                        <div class="case-studies-summary">
                                            <h2>Los Angeles</h2>
                                        </div>
                                    </a>
                                </li>
                                <li class="one-forth text-center lic2">
                                    <a href="index.html#">
                                        <div class="case-studies-summary">
                                            <h2>Hongkong</h2>
                                        </div>
                                    </a>
                                </li>
                                <li class="one-forth text-center lic3">
                                    <a href="index.html#">
                                        <div class="case-studies-summary">
                                            <h2>Italy</h2>
                                        </div>
                                    </a>
                                </li>
                                <li class="one-forth text-center lic4" >
                                    <a href="index.html#">
                                        <div class="case-studies-summary">
                                            <h2>Philippines</h2>
                                        </div>
                                    </a>
                                </li>

                                <li class="one-forth text-center lic5">
                                    <a href="index.html#">
                                        <div class="case-studies-summary">
                                            <h2>Japan</h2>
                                        </div>
                                    </a>
                                </li>
                                <li class="one-half text-center">
                                    <div class="title-bg">
                                        <div class="case-studies-summary">
                                            <h2>Most Popular Destinations</h2>
                                            <span><a href="index.html#">View All Destinations</a></span>
                                        </div>
                                    </div>
                                </li>
                                <li class="one-forth text-center lic6">
                                    <a href="index.html#">
                                        <div class="case-studies-summary">
                                            <h2>Paris</h2>
                                        </div>
                                    </a>
                                </li>
                                <li class="one-forth text-center lic7">
                                    <a href="index.html#">
                                        <div class="case-studies-summary">
                                            <h2>Singapore</h2>
                                        </div>
                                    </a>
                                </li>
                                <li class="one-forth text-center lic8">
                                    <a href="index.html#">
                                        <div class="case-studies-summary">
                                            <h2>Madagascar</h2>
                                        </div>
                                    </a>
                                </li>
                                <li class="one-forth text-center lic9">
                                    <a href="index.html#">
                                        <div class="case-studies-summary">
                                            <h2>Egypt</h2>
                                        </div>
                                    </a>
                                </li>
                                <li class="one-forth text-center lic10">
                                    <a href="index.html#">
                                        <div class="case-studies-summary">
                                            <h2>Indonesia</h2>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div id="fh5co-blog-section" class="fh5co-section-gray">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 col-md-offset-2 text-center heading-section animate-box">
                            <h3>Recent From Blog</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit est facilis maiores, perspiciatis accusamus asperiores sint consequuntur debitis.</p>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row row-bottom-padded-md">
                        <div class="col-lg-4 col-md-4 col-sm-6">
                            <div class="fh5co-blog animate-box">
                                <a href="index.html#"><img class="img-responsive" src="../assets/img/place-1.jpg" alt=""></a>
                                <div class="blog-text">
                                    <div class="prod-title">
                                        <h3><a href="index.html#">30% Discount to Travel All Around the World</a></h3>
                                        <span class="posted_by">Sep. 15th</span>
                                        <span class="comment"><a href="index.html">21<i class="icon-bubble2"></i></a></span>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                        <p><a href="index.html#">Learn More...</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-6">
                            <div class="fh5co-blog animate-box">
                                <a href="index.html#"><img class="img-responsive" src="../assets/img/place-2.jpg" alt=""></a>
                                <div class="blog-text">
                                    <div class="prod-title">
                                        <h3><a href="index.html#">Planning for Vacation</a></h3>
                                        <span class="posted_by">Sep. 15th</span>
                                        <span class="comment"><a href="index.html">21<i class="icon-bubble2"></i></a></span>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                        <p><a href="index.html#">Learn More...</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="clearfix visible-sm-block"></div>
                        <div class="col-lg-4 col-md-4 col-sm-6">
                            <div class="fh5co-blog animate-box">
                                <a href="index.html#"><img class="img-responsive" src="../assets/img/place-3.jpg" alt=""></a>
                                <div class="blog-text">
                                    <div class="prod-title">
                                        <h3><a href="index.html#">Visit Tokyo Japan</a></h3>
                                        <span class="posted_by">Sep. 15th</span>
                                        <span class="comment"><a href="index.html">21<i class="icon-bubble2"></i></a></span>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                        <p><a href="index.html#">Learn More...</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="clearfix visible-md-block"></div>
                    </div>

                    <div class="col-md-12 text-center animate-box">
                        <p><a class="btn btn-primary btn-outline btn-lg" href="index.html#">See All Post <i class="icon-arrow-right22"></i></a></p>
                    </div>

                </div>
            </div>
            <!-- fh5co-blog-section -->
            <div id="fh5co-testimonial" class="lic11">
                <div class="container">
                    <div class="row animate-box">
                        <div class="col-md-8 col-md-offset-2 text-center fh5co-heading">
                            <h2>Happy Clients</h2>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="box-testimony animate-box">
                                <blockquote>
                                    <span class="quote"><span><i class="icon-quotes-right"></i></span></span>
                                    <p>&ldquo;Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.&rdquo;</p>
                                </blockquote>
                                <p class="author">John Doe, CEO <a href="index.html#" target="_blank">FREEHTML5.co</a> <span class="subtext">Creative Director</span></p>
                            </div>

                        </div>
                        <div class="col-md-4">
                            <div class="box-testimony animate-box">
                                <blockquote>
                                    <span class="quote"><span><i class="icon-quotes-right"></i></span></span>
                                    <p>&ldquo;Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.&rdquo;</p>
                                </blockquote>
                                <p class="author">John Doe, CEO <a href="index.html#" target="_blank">FREEHTML5.co</a> <span class="subtext">Creative Director</span></p>
                            </div>


                        </div>
                        <div class="col-md-4">
                            <div class="box-testimony animate-box">
                                <blockquote>
                                    <span class="quote"><span><i class="icon-quotes-right"></i></span></span>
                                    <p>&ldquo;Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.&rdquo;</p>
                                </blockquote>
                                <p class="author">John Doe, Founder <a href="index.html#">FREEHTML5.co</a> <span class="subtext">Creative Director</span></p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <div id="footer">
                    <div class="container">
                        <div class="row row-bottom-padded-md">
                            <div class="col-md-2 col-sm-2 col-xs-12 fh5co-footer-link">
                                <h3>About Travel</h3>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            </div>
                            <div class="col-md-2 col-sm-2 col-xs-12 fh5co-footer-link">
                                <h3>Top Flights Routes</h3>
                                <ul>
                                    <li><a href="index.html#">Manila flights</a></li>
                                    <li><a href="index.html#">Dubai flights</a></li>
                                    <li><a href="index.html#">Bangkok flights</a></li>
                                    <li><a href="index.html#">Tokyo Flight</a></li>
                                    <li><a href="index.html#">New York Flights</a></li>
                                </ul>
                            </div>
                            <div class="col-md-2 col-sm-2 col-xs-12 fh5co-footer-link">
                                <h3>Top Hotels</h3>
                                <ul>
                                    <li><a href="index.html#">Boracay Hotel</a></li>
                                    <li><a href="index.html#">Dubai Hotel</a></li>
                                    <li><a href="index.html#">Singapore Hotel</a></li>
                                    <li><a href="index.html#">Manila Hotel</a></li>
                                </ul>
                            </div>
                            <div class="col-md-2 col-sm-2 col-xs-12 fh5co-footer-link">
                                <h3>Interest</h3>
                                <ul>
                                    <li><a href="index.html#">Beaches</a></li>
                                    <li><a href="index.html#">Family Travel</a></li>
                                    <li><a href="index.html#">Budget Travel</a></li>
                                    <li><a href="index.html#">Food &amp; Drink</a></li>
                                    <li><a href="index.html#">Honeymoon and Romance</a></li>
                                </ul>
                            </div>
                            <div class="col-md-2 col-sm-2 col-xs-12 fh5co-footer-link">
                                <h3>Best Places</h3>
                                <ul>
                                    <li><a href="index.html#">Boracay Beach</a></li>
                                    <li><a href="index.html#">Dubai</a></li>
                                    <li><a href="index.html#">Singapore</a></li>
                                    <li><a href="index.html#">Hongkong</a></li>
                                </ul>
                            </div>
                            <div class="col-md-2 col-sm-2 col-xs-12 fh5co-footer-link">
                                <h3>Affordable</h3>
                                <ul>
                                    <li><a href="index.html#">Food &amp; Drink</a></li>
                                    <li><a href="index.html#">Fare Flights</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 col-md-offset-3 text-center">
                                <p class="fh5co-social-icons">
                                    <a href="index.html#"><i class="icon-twitter2"></i></a>
                                    <a href="index.html#"><i class="icon-facebook2"></i></a>
                                    <a href="index.html#"><i class="icon-instagram"></i></a>
                                    <a href="index.html#"><i class="icon-dribbble2"></i></a>
                                    <a href="index.html#"><i class="icon-youtube"></i></a>
                                </p>
                                <p>Copyright 2016 Free Html5 <a href="index.html#">Module</a>. All Rights Reserved. <br>More Templates <a href="http://www.cssmoban.com/" target="_blank" title="模板之家">模板之家</a> - Collect from <a href="http://www.cssmoban.com/" title="网页模板" target="_blank">网页模板</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>



        </div>
        <!-- END fh5co-page -->

    </div>
</template>

<style scoped>
    @import "../assets/css/animate.css";
    @import "../assets/css/icomoon.css";
    @import "../assets/css/superfish.css";
    @import "../assets/css/magnific-popup.css";
    @import "../assets/css/bootstrap-datepicker.min.css";
    @import "../assets/css/cs-select.css";
    @import "../assets/css/cs-skin-border.css";
    @import "../assets/css/style.css";
    @import "../assets/css/breadcrumb.css";

    .fh5co-tours img {
        width: 100%;
        height: 90%;
    }

    .fh5co-bg-1 {
        background-image: url('/static/img/banner_bg/premier_business_card.png');
    }

    .tab-pane {
        padding: 30px;
        overflow: auto;
        max-height: 550px;
    }

    .tab-pane .txtarea {
        height: 10em;
        background: #F0ECEC;
        color: #F98527;
        border: none;
        border-radius: 0;
    }

    .carousel-indicators {
        bottom: 0;
    }

    .lic1 {
        background-image: url('../assets/img/place-1.jpg');
    }
    .lic2 {
        background-image: url('../assets/img/place-2.jpg');
    }
    .lic3 {
        background-image: url('../assets/img/place-3.jpg');
    }
    .lic4 {
        background-image: url('../assets/img/place-4.jpg');
    }
    .lic5 {
        background-image: url('../assets/img/place-5.jpg');
    }
    .lic6 {
        background-image: url('../assets/img/place-6.jpg');
    }
    .lic7 {
        background-image: url('../assets/img/place-7.jpg');
    }
    .lic8 {
        background-image: url('../assets/img/place-8.jpg');
    }
    .lic9 {
        background-image: url('../assets/img/place-9.jpg');
    }
    .lic10 {
        background-image: url('../assets/img/place-10.jpg');
    }
    .lic11 {
        background-image:url('http://demo.cssmoban.com/cssthemes4/ft5_98_travel/images/img_bg_1.jpg');
    }
</style>

<script>
//    import iHead from '../components/index/Header.vue'
//    import '../assets/js/classie'

    export default {
        name: 'app',
        components: {
//            iHead
        },
        mounted() {

            console.log('index mounted!')
//            this.$nextTick(function() {
                require('../assets/js/jquery.min')
                require('../assets/js/jquery.easing.1.3')
                require('../assets/js/jquery.waypoints.min')
                require('../assets/js/jquery.stellar.min')
                require('../assets/js/hoverIntent')
                require('../assets/js/jquery.magnific-popup.min')
            require('../assets/js/classie')
            require('../assets/js/selectFx')
            require('../assets/js/sticky')
            require('../assets/js/superfish')
//
                require('../assets/js/main')

                var lists  = [
                    {
                        name: "business_cards",
                        items: [
                            {
                                name: 'premier_business_card',
                                bg_img: 'premier_business_card.png',
                                details: {
                                    size: '',
                                    quantity: '',
                                    stock: '',
                                    side: ['Double Sides', 'Single Side']
                                }
                            },
                            {
                                name: 'platinum_business_card',
                                bg_img: 'platinum_business_card.png',
                                details: {
                                    size: '',
                                    quantity: '',
                                    stock: '',
                                    side: ['Double Sides', 'Single Side'],
                                    lamination: [
                                        'Gloss (front side)',
                                        'Gloss (both sides)',
                                        'Gloss (both sides)',
                                        'Matte (front side)',
                                        'Matte (both side)'
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        name: "booklets",
                        items: [
                            {
                                name: 'booklets',
                                bg_img: 'booklets.jpg',
                                details: {
                                    size: '',
                                    quantity: '',
                                    printed_pages: ['8pp','12pp','14pp','16pp','24pp'],
                                    printed_stock: ['140 gsm gloss', '100 gsm matt art'],
                                    paper_stock: '130 gsm gloss',
                                    side: ['Single sided', 'Double sided']
                                }
                            }
                        ]
                    },
                    {
                        name: "flyers_brochures",
                        items: [
                            {
                                name: 'flyers',
                                bg_img: 'flyers.jpg',
                                details: {
                                    size: '',
                                    quantity: '',
                                    paper_stock: '130 gsm gloss',
                                    side: ['Single sided', 'Double sided']
                                }
                            },
                            {
                                name: 'folded_brochures',
                                bg_img: 'folded_brochures.jpg',
                                details: {
                                    size: '',
                                    quantity: '',
                                    paper_stock: '130 gsm gloss',
                                    side: ['Single sided', 'Double sided']
                                }
                            }
                        ]
                    },
                    {
                        name: "graphic_design",
                        items: [
                            {
                                name: 'corporate_identity_packages',
                                bg_img: 'compliment_slip_2.jpg',
                                details: {
                                    quantity: '',
                                    logo_design_packages: '',
                                    initial_concepts: '',
                                    additional_concepts: '',
                                    revisions: '',
                                    additional_revision: '',
                                    corporate_membership: '',
                                    business_industry: '',
                                    type_of_customer: '',
                                    dream_logo: '',
                                    fee: ''
                                }
                            }
                        ]
                    },
                    {
                        name: "stationery",
                        items: [
                            {
                                name: 'compliment_slip',
                                bg_img: 'compliment_slip.jpg',
                                details: {
                                    size: ['A0','A1','A2'],
                                    quantity: '',
                                    stock: '250gsm artboard',
                                    fee: ''
                                }
                            },
                            {
                                name: 'letterhead',
                                bg_img: 'letterhead.jpg',
                                details: {
                                    size: ['A0','A1','A2'],
                                    quantity: '',
                                    stock: '250gsm artboard',
                                    sides:'',
                                    fee: ''
                                }
                            },
                            {
                                name: 'presentation_folder',
                                bg_img: 'presentation_folder.jpg',
                                details: {
                                    size: ['A0','A1','A2'],
                                    quantity: '',
                                    paper: '250gsm artboard',
                                    print_side:'',
                                    lamination: '',
                                    fee: ''
                                }
                            }
                        ]
                    },
                    {
                        name: "cards_invitations",
                        items: [
                            {
                                name: 'postcards',
                                bg_img: 'postcards.jpg',
                                details: {
                                    size: ['A0','A1','A2'],
                                    quantity: '',
                                    stock: '250gsm artboard',
                                    sided: ['Single-sided', 'Double-sided'],
                                    fee: ''
                                }
                            }
                        ]
                    },
                    {
                        name: "large_format_print",
                        items: [
                            {
                                name: 'flat_signs',
                                bg_img: 'flat_signs.jpg',
                                details: {
                                    size: ['A0','A1','A2'],
                                    quantity: '',
                                    material: ['Corflute','Foam-cor'],
                                    fee: ''
                                }
                            },
                            {
                                name: 'posters',
                                bg_img: 'posters.jpg',
                                details: {
                                    size: ['A0','A1','A2'],
                                    quantity: [25, 50, 100, 200],
                                    stock: '130 gsm gloss',
                                    fee: ''
                                }
                            },
                            {
                                name: 'pullup_banners',
                                bg_img: 'pullup_banners.jpg',
                                details: {
                                    size: '',
                                    quantity: [25, 50, 100, 200],
                                    fee: ''
                                }
                            }
                        ]
                    },
                    {
                        name: 'promotional_items',
                        items: [
                            {
                                name: 'bookmark_two_side',
                                bg_img: 'bookmark_two_side.jpg',
                                details: {
                                    size: '',
                                    quantity: '',
                                    fee: ''
                                }
                            },
                            {
                                name: 'table_tent_card_two_side',
                                bg_img: 'table_tent_card_two_side.jpg',
                                details: {
                                    size: '',
                                    quantity: '',
                                    fee: ''
                                }
                            }
                        ]
                    },
                    {
                        name: "apparel_accessories",
                        items: [
                            {
                                name: 't_shirt',
                                bg_img: 't_shirt.jpg',
                                details: {
                                    size: '',
                                    quantity: '',
                                    side: '',
                                    fee: ''
                                }
                            },
                            {
                                name: 't_shirt_test',
                                bg_img: 't_shirt_test.jpg',
                                details: {
                                    size: '',
                                    quantity: '',
                                    side: ''
                                }
                            },
                            {
                                name: 'pillow_cases',
                                bg_img: 'pillow_cases.jpg',
                                details: {
                                    size: '',
                                    quantity:''
                                }
                            },
                            {
                                name: 'cap',
                                bg_img: 'cap.jpg',
                                details: {
                                    size: '',
                                    quantity: ''
                                }
                            },
                            {
                                name: 'tea_towels',
                                bg_img: 'tea_towels.jpg',
                                details: {
                                    size: '',
                                    quantity: ''
                                }
                            }
                        ]

                    }
                ];

                var index = $('#myCarousel .active').index();
                var indexj = 0;
                var carousel = $("#myCarousel");

                function change_bg_img(bg_img_name) {
                    $('.fh5co-bg-1').attr('style', 'background-image:url(/static/img/banner_bg/'+bg_img_name+')')
                }

                function carousel_nav(carousel_name) {
                    for(var i=0;i< lists.length; i++) {
                        if(lists[i].name == carousel_name) {
                            console.log(i, 'this is i');
                            index = i-1;
                            indexj = 0;
                            carousel.carousel(i)
                            return;
                        }
                        else {
                            for(var j=0;j<lists[i].items.length; j++) {
                                if(lists[i].items[j].name == carousel_name) {
                                    index = i-1;
                                    indexj = j;
                                    $("#myCarousel").carousel(i)
                                    $('.nav-tabs a[href="#'+carousel_name+'"]').tab('show')

                                    change_bg_img(lists[i].items[j].bg_img)
                                    return;
                                }
                            }
                        }
                    }
                }

                carousel.on('slide.bs.carousel',function(e){
//                    console.log($('#myCarousel .active').index(),lists[$('#myCarousel .active').index()],lists[$('#myCarousel .active').index()].items[0].bg_img);
                    index++;
                    console.log('cccc1', index, indexj)
                    index >8? index = 0: index;
                    change_bg_img(lists[index].items[indexj].bg_img)
                });

                carousel.carousel({
                    interval: 7000
                })


//                setTimeout(function() {
//                    $("#myCarousel").carousel(1)
//                },2000)


//                var lia_menu = $('.fh5co-sub-menu').children('li');
//                lia_menu.children('a').click(function(e) {
//                    console.log($(this).data('navi'))
//
//                    $("#myCarousel").carousel(6)
//
////                    carousel_nav($(this).data('navi'))
//                })
//                lia_menu.children('ul').children('li').children('a').click(function(e) {
//                    console.log($(this).data('navi'))
//
//                    var carousel_name = $(this).data('navi');
//
//
////                    carousel_nav($(this).data('navi'))
//                    $('.fh5co-sub-menu').css('display', 'none')
//                })

                $('.fh5co-sub-menu').click(function(e) {
                    console.log($(e.target).data('navi'))

                    carousel_nav($(e.target).data('navi'))
                })
//            })
        },
        methods: {
        }
    }
</script>

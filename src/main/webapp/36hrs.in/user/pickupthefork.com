<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta content="IE=edge" http-equiv="X-UA-Compatible">
        <title>Amazing spots in cities around the world</title>

        <link rel="shortcut icon" href="https://d2syybhyc5a0lq.cloudfront.net/img/36hrs.ico">
        <link rel="apple-touch-icon-precomposed" sizes="144x144" href="https://d2syybhyc5a0lq.cloudfront.net/img/apple-touch-icon-144.png">
        <link rel="apple-touch-icon-precomposed" sizes="114x114" href="https://d2syybhyc5a0lq.cloudfront.net/img/apple-touch-icon-114.png">
        <link rel="apple-touch-icon-precomposed" sizes="72x72" href="https://d2syybhyc5a0lq.cloudfront.net/img/apple-touch-icon-72.png">
        <link rel="apple-touch-icon-precomposed" sizes ="57x57" href="https://d2syybhyc5a0lq.cloudfront.net/img/apple-touch-icon-57.png">


        <meta property="fb:app_id" content="501657263237997"/>
        <meta property="og:type" content="product" />
        <meta property="og:title" content="Amazing spots in cities around the world" />
        <meta property="og:url" content="http://36hrs.in/" />
        <meta property="og:site_name" content="36hrs.in"/>
        <meta property="og:description" content="Collect your favorite spots, discover spots shared by other travelers and recommend things to do in cities around the world" />
        <meta property="og:image" content="https://d2syybhyc5a0lq.cloudfront.net/img/36hrs-icon.png"/>

        <meta name="twitter:card" content="summary">
        <meta name="twitter:site" content="@36hrs_in">
        <meta name="twitter:title" content="Amazing spots in cities around the world">
        <meta name="twitter:description" content="Collect your favorite spots, discover spots shared by other travelers and recommend things to do in cities around the world">
        <meta name="twitter:image:src" content="https://d2syybhyc5a0lq.cloudfront.net/img/36hrs-icon.png">
        <meta name="twitter:url" content="http://36hrs.in/" />

        <meta name="title" content="Amazing spots in cities around the world">
        <meta name="description" content="Collect your favorite spots, discover spots shared by other travelers and recommend things to do in cities around the world">

        <meta content="width=device-width, initial-scale=1" name="viewport">

                    <link href="https://dw89izhsx3lzy.cloudfront.net/css/bootstrap-theme.css" rel="stylesheet" media="screen" />
            <link href="https://dw89izhsx3lzy.cloudfront.net/fonts/ss-standard.css?5" rel="stylesheet" media="screen" />
            <link href="https://dw89izhsx3lzy.cloudfront.net/fonts/ss-social-regular.css?5" rel="stylesheet" media="screen" />
            <link href="http://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" media="screen"/>
            <link href="https://dw89izhsx3lzy.cloudfront.net/css/main.css?263" rel="stylesheet" media="screen" />
                <!--            <script src="--><!--"></script>-->
        
        <script>
            (function(_, e, rr, s) {
                _errs = [s];
                var c = _.onerror;
                _.onerror = function() {
                    var a = arguments;
                    _errs.push(a);
                    c && c.apply(this, a)
                };
                var b = function() {
                    var c = e.createElement(rr), b = e.getElementsByTagName(rr)[0];
                    c.src = "//beacon.errorception.com/" + s + ".js";
                    c.async = !0;
                    b.parentNode.insertBefore(c, b)
                };
                _.addEventListener ? _.addEventListener("load", b, !1) : _.attachEvent("onload", b)
            })
                    (window, document, "script", "52e9903d31ab7cc110000654");
        </script>

        <script>
            var filters = {};
            var filter_sel = ".board-unit";
            filters.unit = ".board-unit";
        </script>
                            <script async type="text/javascript" src="//platform.twitter.com/widgets.js"></script>
                <script type="text/javascript" pagespeed_no_defer="" src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
        <script src="http://code.jquery.com/ui/1.10.0/jquery-ui.min.js" type="text/javascript"></script>
        <script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?libraries=places&sensor=false"></script>


        <script type="text/javascript">
            var base_url = 'http://36hrs.in/';
            var fb_id = '501657263237997';
        </script>
        <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
        <!--[if lt IE 9]>
    <script src="../../assets/js/html5shiv.js"></script>
    <script src="../../assets/js/respond.min.js"></script>
    <![endif]-->

        <script type="text/javascript">
//MixPanel
            (function(e, b) {
                if (!b.__SV) {
                    var a, f, k, g;
                    window.mixpanel = b;
                    a = e.createElement("script");
                    a.type = "text/javascript";
                    a.async = !0;
                    a.src = ("https:" === e.location.protocol ? "https:" : "http:") + "//cdn.mxpnl.com/libs/mixpanel-2.2.min.js";
                    f = e.getElementsByTagName("script")[0];
                    f.parentNode.insertBefore(a, f);
                    b._i = [];
                    b.init = function(a, e, d) {
                        function f(b, h) {
                            var a = h.split(".");
                            2 == a.length && (b = b[a[0]], h = a[1]);
                            b[h] = function() {
                                b.push([h].concat(Array.prototype.slice.call(arguments, 0)))
                            }
                        }
                        var c = b;
                        "undefined" !== typeof d ? c = b[d] =
                                [] : d = "mixpanel";
                        c.people = c.people || [];
                        c.toString = function(b) {
                            var a = "mixpanel";
                            "mixpanel" !== d && (a += "." + d);
                            b || (a += " (stub)");
                            return a
                        };
                        c.people.toString = function() {
                            return c.toString(1) + ".people (stub)"
                        };
                        k = "disable track track_pageview track_links track_forms register register_once alias unregister identify name_tag set_config people.set people.set_once people.increment people.append people.track_charge people.clear_charges people.delete_user".split(" ");
                        for (g = 0; g < k.length; g++)
                            f(c, k[g]);
                        b._i.push([a,
                            e, d])
                    };
                    b.__SV = 1.2
                }
            })(document, window.mixpanel || []);
            mixpanel.init('d568bd7675ca4fa1ccbf1eec5dfcbd44');
        </script>


                    <script type="text/javascript">
                //GA
                (function(i, s, o, g, r, a, m) {
                    i['GoogleAnalyticsObject'] = r;
                    i[r] = i[r] || function() {
                        (i[r].q = i[r].q || []).push(arguments)
                    }, i[r].l = 1 * new Date();
                    a = s.createElement(o),
                            m = s.getElementsByTagName(o)[0];
                    a.async = 1;
                    a.src = g;
                    m.parentNode.insertBefore(a, m)
                })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
                ga('create', 'UA-48840413-1', '36hrs.in');
                ga('send', 'pageview');
            </script>

        
        </head>
<body>
    <div id="dvloader" class="loader" style="display:none;"></div>
    <div id='fb-root'></div>
    <script type="text/javascript">
        window.fbAsyncInit = function() {
            FB.init({
                appId: '501657263237997', // App ID
                channelUrl: '//36hrs.in/channel.php', // Channel File
                status: true, // check login status
                cookie: true, // enable cookies to allow the server to access the session
                xfbml: true  // parse XFBML

            });
//            FB.getLoginStatus(function(response) {
//                console.log(response);
//                if (response.status != 'connected') {
//                    FB.logout(function(resp) {
//                        console.log(resp);
//
//                    });
//                }
//
//            });

            FB.Event.subscribe('auth.authResponseChange', function(response)
            {
                console.log(response);
            });
        };
        // Load the SDK asynchronously
        (function(d) {
            var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement('script');
            js.id = id;
            js.async = true;
            js.src = "//connect.facebook.net/en_US/all.js";
            ref.parentNode.insertBefore(js, ref);
        }(document));
    </script>
    <!--[if lt IE 7]>
        <p class="darwinism">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
    <![endif]-->
    <input type="hidden" id="full_url">
        <div id="navbar" class="navbar  " data-loginType="" >
        <div class="navbar-header">
            <button data-target=".navbar-collapse" data-toggle="collapse" class="navbar-toggle" type="button">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <h1>
                                        <a href=/landing class="logo_header">
                                                <img src="/images/nav-logo.png" class="logo">
                    </a>
            </h1>
        </div>
                    <div class="search"><input id="cityname" type="search" placeholder="Search for people and cities" class="form-control" autocomplete="off"><span class="ss-icon">search</span></div>
                <div class="collapse navbar-collapse">
            <ul class="nav navbar-nav">
                <li class="active"><a href="/discover">Discover</a></li>
                                    <li><a href="#signin" data-toggle="modal" data-target="#signin">Log In</a></li>
                    <li><a href="#signup" data-toggle="modal" data-target="#signup">Sign Up</a></li>
                                <li class='CTA_btn hide-on-phone' ><a id="nav_create" data-toggle="dropdown" href="#create">Create</a>
                    <ul id="create_menu" class="dropdown-menu navbar-nav pull-right" role="menu">
                        <li><a data-create="board" class="create"><span class='ss-icon'>thumbnails</span>Board</a></li>
                        <li><a data-create="itinerary" class="create"><span class='ss-icon'>calendar</span>Itinerary</a></li>
                    </ul>
                </li>
                <li class='only-on-phone hide-on-full hide-on-tablet'><a data-create="board" class="create" ><span class='ss-icon'>thumbnails</span>Create Board</a></li>
                <li class='only-on-phone hide-on-full hide-on-tablet'><a a data-create="itinerary" class="create"><span class='ss-icon'>calendar</span>Create Itinerary</a></li>
            </ul>
        </div><!--/.nav-collapse -->

    </div>
    <!--  =====================  CREATE===================== -->
<div class="modal fade" id='newBoard'>
    <div class="modal-dialog">
        <div class="modal-content">
            <form id="cbForm" data-type="board">
            <div class="modal-header">
                <button class="close ss-icon" data-dismiss="modal" type=
                        "button">close</button>

                <h4 class="modal-title">Create A Board</h4>
            </div>
            
            <div class="modal-body clearfix">
                <div class='inputs-top clearfix'>
                    <div class="control-group half left">
                        <input autocomplete="off" name="title" placeholder="Name ex. My Favorite Restaurants" id ="board_title" type="text">
                    </div>
                    <div class="control-group half right">
                        <input autocomplete="off" class="city_box" name="location" placeholder="City ex. Paris" type="text" id="board_location">
                        <input type="hidden" name="gplace" id="gplace_board" value="">
                    </div>
                </div>

                <div class="notifications make-public">
                    <ul>
                        <li class="clearfix">
                            <span class="option">Make Board Public</span>
                            <div class="js-buttons-toggle toggle-notification clearfix" data-toggle="buttons" style="/* float:right; */">
                                <label class="btn btn-notification make-public-btn active">
                                    <input type="radio" name="type" value="1" checked="checked"> Yes
                                </label>
                                <label class="btn btn-notification make-public-btn no">
                                    <input type="radio" name="type" value="0"> NO
                                </label>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>

            <div class="modal-footer">
                <button class="btn btn-default" data-dismiss="modal" type=
                        "button">Close</button>
                <button class="btn btn-primary" type="submit" value="submit">Create Board</button>
            </div>
            </form>
        </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
</div><!-- /.modal -->

<!--  =====================  CREATE===================== -->
<div class="modal fade" id='newItinerary'>
    <div class="modal-dialog">
        <div class="modal-content">
            <form id="ciForm" data-type="itinerary">
            <div class="modal-header">
                <button class="close ss-icon" data-dismiss="modal" type=
                        "button">close</button>

                <h4 class="modal-title">Create An Itinerary</h4>
            </div>
            
            <div class="modal-body clearfix">
                <div class='inputs-top clearfix'>
                    <div class="control-group half left">
                        <input autocomplete="off" name="title" placeholder="Name ex. Weekend in Paris" id ="itinerary_title" type="text">
                    </div>
                    <div class="control-group half right">
                        <input autocomplete="off" class="city_box" name="location" placeholder="City ex. Paris" type="text" id="itinerary_location">
                        <input type="hidden" name="gplace" id="gplace_itinerary" value="">
                    </div>
                </div>

                <div class="notifications make-public">
                    <ul>
                        <li class="clearfix">
                            <span class="option">Make Itinerary Public</span>
                            <div class="js-buttons-toggle toggle-notification clearfix" data-toggle="buttons" style="/* float:right; */">
                                <label class="btn btn-notification make-public-btn active">
                                    <input type="radio" name="type" value="1" checked="checked"> Yes
                                </label>
                                <label class="btn btn-notification make-public-btn no">
                                    <input type="radio" name="type" value="0"> NO
                                </label>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>

            <div class="modal-footer">
                <button class="btn btn-default" data-dismiss="modal" type=
                        "button">Close</button>
                <button class="btn btn-primary" type="submit" value="submit">Create Itinerary</button>
            </div>
            </form>
        </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
</div><!-- /.modal -->

<!--  =====================  END MODAL OVERLAY ===================== -->
    <!-- Sign In Form -->
<div id="signin" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class ="modal-content">
            <div class="modal-header">
                <button class="close ss-icon" data-dismiss="modal" type="button">close</button>
                <h3 id="myModalLabel" class="middle">Sign in to 36hrs</h3>
            </div>
            <div class="modal-body">
                <div class="middle">
                    <button class="btn btn-facebook float-none" type="button" href="#"><span class='ss-social'>facebook</span>Connect With Facebook</button>
                    <div class="with-email">— Or sign in with your e-mail —</div>
                </div>
                <form style="margin-bottom:12px;" id="signinForm" method="POST">
                    <div class = "message left-half"></div>
                    <div class="control-group left-half">
                        <input class="input-block-level" type="email" name="email" id="email" autofocus required placeholder="Email">
                    </div>
                    <div class="control-group left-half">
                        <input class="input-block-level" type="password" name='password' id="password" required placeholder="Password">
                    </div>
                    <label class="checkbox no-padding-left middle"><input type="checkbox" name="remember">Remember me</label>
                    <div class="control-group middle">
                        <button type="submit" class="btn btn-sign-in btn-primary"><i class="icon-user icon-white"></i> Sign in</button>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
<!--                <span>Forgot your Password? <a href="#forgot" data-dismiss="modal" data-toggle="modal" aria-hidden="true">Click Here</a></span><br>-->
                <span>Don't have an account? <a href="#signup" data-dismiss="modal" aria-hidden="true" data-toggle="modal">Sign Up &rarr;</a></span>
            </div>
        </div>
    </div>
</div>    <!-- Sign Up Form -->
<div id="signup" class="modal fade auth-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button class="close ss-icon" data-dismiss="modal" type="button">close</button>
                <h4 class="modal-title dark">Sign up For 36hrs</h4>
                <h5>Sign up with Facebook for a more personalized experience.</h5>
<!--                <a class="fb-button btn btn-block" href="#"><img src="--><!--blank.gif" class="fb-inline"/><span style="margin-left:-10px;">Connect <span style="font-weight:lighter">with</span> Facebook</span></a>-->
            </div>
            <div class="modal-body">
                <button class="btn btn-facebook" type="button" href='#';"><span class='ss-social'>facebook</span>Connect With Facebook</button>
                <div class="accordian" id="sign-up-accordian">
                    <h5 class='signUpBTN' data-toggle="collapse" data-parent="#sign-up-accordian" href="http://localhost/36hrs_new/cities#collapseOne"><a class="accordion-toggle"  >Or sign up with your e-mail</a></h5>
                    <div id="collapseOne" class="accordion-body collapse">
                        <div class="accordion-inner">
                            <form style="margin-bottom:12px;" id="signupForm" method="POST">
                                <input type="hidden" name="signupToken" id="signupToken" value="44724170753ca0e25202b81.33248865"/>
                                <div class = "message" style="clear:both"></div>
                                <div class="control-group">
                                    <input type="hidden" class="noshow" type="text" name="username" id="username">
                                </div>
                                <div class="control-group">
                                    <input class="input-block-level" type="email" name="email" id="email" required autofocus  placeholder="Email">
                                </div>
                                <div class="control-group">
                                    <input class="input-block-level" type="text" name="first_name" id="first_name" required placeholder="First Name">
                                </div>
                                <div class="control-group">
                                    <input class="input-block-level" type="text" name="last_name" id="last_name" placeholder="Last Name">
                                </div>
                                <div class="control-group">
                                    <input class="input-block-level" type="password" name="password" id="password" required placeholder="Password">
                                </div>
                                <div class="control-group">
                                    <input class="input-block-level" type="password" name="passwordConf" id="passwordConf" placeholder="Re-enter Password">
                                </div>
                                <br>
                                <div class="control-group" style='float: right;'>
                                    <button class="btn btn-small" data-dismiss="modal" aria-hidden="true">Go Back</button>
                                    <button type="submit" name="action" value="signup" class="btn  btn-primary btn-small">Create Account</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <span>Already have an account? <a href="#signin" data-dismiss="modal" aria-hidden="true" data-toggle="modal">Sign In →</a></span>
            </div>
        </div>
    </div>
</div>        <h2>User not found</h2>
<p class="error">
	<strong>Error: </strong>
	The requested address <strong>'/user/pickupthefork.com'</strong> was not found on this server.</p>

    <div id="lazyLoader" class="relative footer-loader loader-wrap">
        <div class="loader absolute-loader loader-transparent"></div>
    </div>
    <footer>
        <div class="container clearfix">
            <div class="row">
                <div class="col-md-3 pull-right" id="social">
                    <p>Connect with Us!
                        <span id="footer-social">
                            <a class="twitter" href="http://www.twitter.com/36hrs_in" target="_blank"><img alt="36hrs on Twitter" height="24" src="https://d2syybhyc5a0lq.cloudfront.net/img/blank.gif" width="24"></a>
                            <a class="facebook" href="http://www.facebook.com/36hrs.in" target="_blank"><img alt="36hrs on Facebook" height="24" src="https://d2syybhyc5a0lq.cloudfront.net/img/blank.gif" width="24"></a>
                            <a class="google_plus" href="https://plus.google.com/+36hrsIn/"><img alt="36hrs on Google+" height="24" src="https://d2syybhyc5a0lq.cloudfront.net/img/blank.gif" width="24"></a>
                        </span>
                    </p>
                </div>

                <div class="footer-holder" id="footer-holder">
                    <div id="foot-logo-wrap"><img alt='36hrs.in' height="38" src="https://d2syybhyc5a0lq.cloudfront.net/img/blank.gif" width="50"></div>

                    <ul class="footer-nav">
                        <li><a href="/">HOME</a> </li>
                        <li><a href="http://blog.36hrs.in" target="_blank">BLOG</a></li>
                        <li><a href="/about_us">ABOUT</a></li>
                        <li><a href="mailto:hello@36hrs.in">CONTACT</a></li>
                    </ul>
                </div>
                <!--                    <div class='extra'>-->
                <!--                        <span><a href='#'>Privacy Policy</a></span>-->
                <!--                        <span><a href='#'>Terms and Conditions</a></span>-->
                <!--                    </div>-->
            </div>
        </div>
    </footer>
            <script>
            var user_agent = 'desktop';
        </script>
                    <script type="text/javascript" src="https://dw89izhsx3lzy.cloudfront.net/js/bif/jquery.validate.min.js?263"></script>
        <script type="text/javascript" src="https://dw89izhsx3lzy.cloudfront.net/js/vendor/modernizr-2.6.2.min.js"></script>
        <script type="text/javascript" src="https://dw89izhsx3lzy.cloudfront.net/js/bif/bootstrap.min.js"></script>
                <script type="text/javascript" src="https://dw89izhsx3lzy.cloudfront.net/js/bif/main.js?263"></script>

    
</body>
</html>
<!DOCTYPE html>
<html lang="en" style="background-color:#E5E5E5">

<head>
    <meta charset="utf-8" />
    <link rel="icon" href="https://d3g01po1nkka75.cloudfront.net/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta name="description" content="Wishlink - All Things Good" />
    <link rel="apple-touch-icon" href="https://d3g01po1nkka75.cloudfront.net/logo192.png" />

    <title>Join Wishlink</title>

    <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-SKM89NGT3K"
    ></script>
    <script id="ga-script">
        // This will produce the same ga id as long as we are running it on the same domain
        window.dataLayer = window.dataLayer || [];
        function gtag() {
            dataLayer.push(arguments);
        }
        gtag("js", new Date());

        gtag("config", "G-SKM89NGT3K");
    </script>

</head>
<body style="background-color: #E5E5E5">
<noscript>You need to enable JavaScript to run this app.</noscript>

<script>
    function getWhereIsWishi() {
        fetch(`https://api.wishlink.dev/whereiswishi?`)
            .then(res => res.json())
            .then(data => {
                if(data.success) {
                    console.log(data.data)
                } else {
                }
            })
            .catch(err => {
            })
    }

    getWhereIsWishi();
</script>

<div id="root">
    <span>Where is Wishi? Look around and find him!</span>
</div>
<style>
    .loader {
        border: 4px solid #f3f3f3;
        border-radius: 50%;
        border-top: 4px solid #e91e63;
        width: 30px;
        height: 30px;
        margin: 40vh auto auto auto;
        -webkit-animation: spin 2s linear infinite; /* Safari */
        animation: spin 2s linear infinite;
    }
    /* Safari */
    @-webkit-keyframes spin {
        0% {
            -webkit-transform: rotate(0deg);
        }
        100% {
            -webkit-transform: rotate(360deg);
        }
    }
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>
</body>
</html>


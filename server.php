<?php

/**
 * Laravel - A PHP Framework For Web Artisans
 *
 * @package  Laravel
 * @author   Taylor Otwell <taylor@laravel.com>
 */

$uri = urldecode(
    parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH)
);

// This file allows us to emulate Apache's "mod_rewrite" functionality from the
// built-in PHP web server. This provides a convenient way to test a Laravel
// application without having installed a "real" web server software here.
// $B%m!<%+%k$G<B9T$9$k>l9g(B
$public_path = __DIR__.'/public';
// $B%j%b!<%H$G<B9T$9$k>l9g(B
$public_path = '/home/albarista/tukubou.com/TypeLaraVue/public';
$file = $public_path.$uri;
if ($uri !== '/' && file_exists($file)) {
    return false;
}

require_once $public_path.'/index.php';

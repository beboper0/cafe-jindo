<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
if (strstr($_SERVER['SERVER_NAME'], 'cafe-jindo.local')) {
    /** The name of the database for WordPress local */
    define( 'DB_NAME', 'local' );

    /** MySQL database username */
    define( 'DB_USER', 'root' );

    /** MySQL database password */
    define( 'DB_PASSWORD', 'root' );

    /** MySQL hostname */
    define( 'DB_HOST', 'localhost' );
} else {
    /** The name of the database for WordPress host */
    define('DB_NAME', 'cafejind_WP1GC');

    /** MySQL database username */
    define('DB_USER', 'cafejind_WP1GC');

    /** MySQL database password */
    define('DB_PASSWORD', 'M1d5QdTGXv91x^BDG');

    /** MySQL hostname */
    define('DB_HOST', 'localhost');
}

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'rd7uVHqr6P9InH7jznHTS20Jx165px7JrI4QN9AhnAP0ikFTaZOxkuK6W5vPyhW5ep2BX4eqC5scDn8R6Bxu1Q==');
define('SECURE_AUTH_KEY',  'C3gZRt+scw09orZnUoKme+nm3anjmgX5hYtnTqocSgBFsrxi7Ho1A/1oi8wtQw70DqycCTbNF/6GkZ/YxDuThw==');
define('LOGGED_IN_KEY',    'fJ2X6DBDVdDFYC8ALsxcaJBEXGHfDZwItispAPfnZ26XjBoqDNbaaSdrg8VmNRFzTyTKidUbahH24cyNzTqp0g==');
define('NONCE_KEY',        'Xh+7odA36mVXhRnFcypImBQfrTZkipnOErI0rbRvuenA2j+QtZtgK90qqsMsd4moeun/SoAt61j49O7LFmujMw==');
define('AUTH_SALT',        'mSfIPmWafIgFCKPjC/WXRKwubgp2QDXtkUI/eYcBLRBqRV2TcK++F9fmGBgZkQxjAWiKwRSjEEo8u8zogcCtcQ==');
define('SECURE_AUTH_SALT', '4bJZX1f0hhP9dNDu6Ay5sV2Mo/J4ynl3pqJ+7RdDC45JrPUbkdzw6+g9pJbFoD0b+C59wVybP7Omc0BotqfM5Q==');
define('LOGGED_IN_SALT',   'jq6cWLiZIOccCoGLZIHgAUA0ctoxwmnBM/MjbDGVhZPwB0Wz0EqinIhFpDO5oNB/nAOwW4UZcIaGkLiW+7El7g==');
define('NONCE_SALT',       'xUP0thBInjiSdMull7rDXo4QOEmuCvyAyz6IkMUfJ32cDYCIe8JQZc0uaU1NPcHkADJPozNx7Jo4gpyFwFYq+A==');

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';




/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';

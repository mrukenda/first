<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit8c9883ba3e16e41d8bc77d1b72806185
{
    public static $prefixLengthsPsr4 = array (
        'S' => 
        array (
            'Stripe\\' => 7,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Stripe\\' => 
        array (
            0 => __DIR__ . '/..' . '/stripe/stripe-php/lib',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit8c9883ba3e16e41d8bc77d1b72806185::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit8c9883ba3e16e41d8bc77d1b72806185::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}

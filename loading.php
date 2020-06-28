<?php
require_once 'vendor/autoload.php';
$loader = new \Twig\Loader\FilesystemLoader('template');
$twig = new \Twig\Environment($loader);
use Twig\Extra\Intl\IntlExtension;
$twig->addExtension(new IntlExtension());
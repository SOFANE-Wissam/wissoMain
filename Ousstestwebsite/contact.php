<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name    = htmlspecialchars($_POST['name']);
    $email   = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $number  = htmlspecialchars($_POST['number']);
    $product = htmlspecialchars($_POST['product']);
    $role    = htmlspecialchars($_POST['role']);
    $message = htmlspecialchars($_POST['message']);

    
    switch ($role) {
        case "Client":
            $to = "safia@rdz-aerosol.com";
            break;
        case "Supplier":
            $to = "said@rdz-aerosol.com";
            break;
        case "Employee":
            $to = "mohamed@rdz-aerosol.com";
            break;
        default:
            $to = "info@rdz-aerosol.com";
            break;
    }

    $subject = "New Contact Form Submission from $name";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    $body = "Name: $name\nEmail: $email\nPhone: $number\nProduct: $product\nRole: $role\n\nMessage:\n$message";

    if (mail($to, $subject, $body, $headers)) {
        echo "Thank you! Your message has been sent.";
    } else {
        echo "Sorry, something went wrong. Please try again.";
    }
}
?>

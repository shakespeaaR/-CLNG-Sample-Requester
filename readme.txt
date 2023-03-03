Wartości, które trzeba uzupelnić przed uruchomieniem formularza.
Otwórz sendEmail.php
```        
        $mail->Host = "HOST SKRZYNKI POCZTOWEJ"; //enter your email account host
        $mail->SMTPAuth = true;
        $mail->Username = "EMAIL SKRZYNKI POCZTOWEJ"; //enter your email address
        $mail->Password = 'HASLO SKRZYNKI POCZTOWEJ'; //enter your email password
        $mail->Port = JAKIS PORT; //enter PORT email account host
```
wartości te powinienieś móc znaleźć na stronie hostingu Twojego konta pocztowego.

<?php
    use PHPMailer\PHPMailer\PHPMailer;

    if (isset($_POST['name']) && isset($_POST['email'])) {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $dw = $_POST['dw'];
        $category = $_POST['category'];
        $priority = $_POST['priority'];
        $quality = $_POST['quality'];
        $body = $_POST['body'];
        $contactcom =  $_POST['contact1'];
        $contactsurname =  $_POST['contact2'];
        $contactmail =  $_POST['contact3'];
        $contacttel =  $_POST['contact4'];
        $contactaddress =  $_POST['contact5'];
        $contacttown =  $_POST['contact6'];
        $contactpostcode =  $_POST['contact7'];
        $contactcountry = $_POST['contact8'];
        $revinfo = $_POST['reviewer'];
        $date = date('d.m.Y');        

        require_once "PHPMailer/PHPMailer.php";
        require_once "PHPMailer/SMTP.php";
        require_once "PHPMailer/Exception.php";

        $mail = new PHPMailer();
        $mail->CharSet = 'UTF-8';
        //SMTP Settings 
        $mail->isSMTP();
        $mail->Host = "mail.shakespear.xaa.pl";
        $mail->SMTPAuth = true;
        $mail->Username = "mailer@shakespear.xaa.pl"; //enter you email address
        $mail->Password = 'JiFPZ6hpkics'; //enter you email password
        $mail->Port = 465;
        $mail->SMTPSecure = "ssl";

        //Email Settings
        $mail->setFrom($email, "Sample Request");
        $mail->addAddress("bartosz_szymanski@outlook.com"); //enter you email address
        $mail->addReplyTo($email, $name);
        $mail->addCC($email);
        $mail->addCC($dw);

        //Conternt
        $mail->isHTML(true);
        $mail->Subject = ("Sample Request: $category -> $priority -> QC: $quality -> $name -> $date");
        $mail->Body = ("<center><h2>Sample Request: $category -> $priority -> QC: $quality -> $name -> $date</h2><br><h3>PRODUCT LIST:</h3><br>$body<br><br><h3>SHIPPING DETAILS:</h3><br><table style='border-collapse: collapse;border-color:#ccc;border-spacing:0;'><thead>
        <tr><td style='border: 1px solid #000;padding: 10px 15px;text-align: center;'><strong>COMPANY NAME:</strong></b></td><td style='border: 1px solid #000;padding: 10px 15px;text-align: center;'>&nbsp;$contactcom</td></tr></thead>
        <tbody><tr><td style='border: 1px solid #000;padding: 10px 15px;text-align: center;'><strong>NAME, SURNAME:</strong></td><td style='border: 1px solid #000;padding: 10px 15px;text-align: center;'>&nbsp;$contactsurname</td></tr>
        <tr><td style='border: 1px solid #000;padding: 10px 15px;text-align: center;'><strong>EMAIL ADDRESS:</strong></td><td style='border: 1px solid #000;padding: 10px 15px;text-align: center;'>&nbsp;$contactmail</td></tr>
        <tr><td style='border: 1px solid #000;padding: 10px 15px;text-align: center;'><strong>PHONE NUMBER:</strong></td><td style='border: 1px solid #000;padding: 10px 15px;text-align: center;'>&nbsp;$contacttel</td></tr>
        <tr><td style='border: 1px solid #000;padding: 10px 15px;text-align: center;'><strong>COUNTRY:</strong></td><td style='border: 1px solid #000;padding: 10px 15px;text-align: center;'>&nbsp;$contactcountry</td></tr>
        <tr><td style='border: 1px solid #000;padding: 10px 15px;text-align: center;'><strong>TOWN:</strong></td><td style='border: 1px solid #000;padding: 10px 15px;text-align: center;'>&nbsp;$contacttown</td></tr>
        <tr><td style='border: 1px solid #000;padding: 10px 15px;text-align: center;'><strong>POST / ZIP CODE</strong></td><td style='border: 1px solid #000;padding: 10px 15px;text-align: center;'>&nbsp;$contactpostcode</td></tr>
        <tr><td style='border: 1px solid #000;padding: 10px 15px;text-align: center;'><strong>STREET AND NO. OF HOUSE/LOCAL:</strong></td><td style='border: 1px solid #000;padding: 10px 15px;text-align: center;'>&nbsp;$contactaddress</td></tr></tbody></table><br>
        <h3>About reviewer</h3><td style='border: 1px solid #000;padding: 10px 15px;text-align: center;'><center>$revinfo</center></td>
        </center>");
        
        if ($mail->send()) {
            $status = "success";
            $response = "Email is sent!";
        } else {
            $status = "failed";
            $response = "Something is wrong: <br><br>" . $mail->ErrorInfo;
        }

        exit(json_encode(array("status" => $status, "response" => $response)));
    }
?>

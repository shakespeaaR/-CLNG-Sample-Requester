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
        $contactcomdata =  $_POST['contactdata1'];
        $contactsurnamedata =  $_POST['contactdata2'];
        $contactmaildata =  $_POST['contactdata3'];
        $contactteldata =  $_POST['contactdata4'];
        $contactcom =  $_POST['contact1'];
        $contactsurname =  $_POST['contact2'];
        $contactmail =  $_POST['contact3'];
        $contacttel =  $_POST['contact4'];
        $contactaddress =  $_POST['contact5'];
        $contacttown =  $_POST['contact6'];
        $contactpostcode =  $_POST['contact7'];
        $contactcountry = $_POST['contact8'];
        $revinfo = $_POST['reviewer'];
        $comment = $_POST['comment'];
        $recip = $_POST['recip'];
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
        $mail->Password = ';qt(w!$V?45l'; //enter you email password
        $mail->Port = 465;
        $mail->SMTPSecure = "ssl";

        //Email Settings
        $mail->setFrom($email, "Sample Request");
        $mail->addAddress($email); //enter you email address
        $mail->addReplyTo($email, $name);
        $mail->addCC($dw);

        //Conternt
        $mail->isHTML(true);
        $mail->Subject = ("Sample Request: $category -> $priority -> QC: $quality -> $contactsurname -> $date from: $name");
        $mail->Body = ("<center style='font-family:Verdana, Geneva, Tahoma, sans-serif; text-transform:uppercase'>
        <h1 style='text-transform:uppercase'>SAMPLE REQUEST</h1>
        <h2 style='text-transform:uppercase'>Sample Request: $category -> $priority -> QC: $quality -> $contactsurname
            -> $date from: $name</h2>
        <h3 style='text-transform:uppercase'>PRODUCT LIST:</h3>$body<br><br>

        <table style='border-collapse: collapse;border-color:#ccc;border-spacing:0;'>
            <thead>
                <tr>
                    <td style='border: 1px solid #000;padding: 10px 15px;text-align: center;'><strong>RECIPIENT
                            IDENTIFIER:</strong></b></td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style='border: 1px solid #000;padding: 10px 15px;text-align: center;'>$recip
                    </td>
                </tr>
            </tbody>
        </table>
        <br>
        <table style='border-collapse: collapse;border-color:#ccc;border-spacing:0;'>
            <thead>
                <tr>
                    <td style='border: 1px solid #000;padding: 10px 15px;text-align: center;'><strong>ABOUT
                            REVIWER:</strong></b></td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style='border: 1px solid #000;padding: 10px 15px;text-align: center;'>$revinfo
                    </td>
                </tr>
            </tbody>
        </table>
        <br>
        <table style='border-collapse: collapse;border-color:#ccc;border-spacing:0;'>
            <thead>
                <tr>
                    <td style='border: 1px solid #000;padding: 10px 15px;text-align: center;'>
                        <strong>COMMENT:</strong></b>
                    </td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style='border: 1px solid #000;padding: 10px 15px;text-align: center;'>$comment
                    </td>
                </tr>
            </tbody>
        </table><br>

        <h3>RECIPIENT CONTACT DATA:</h3><br>
        <table style='border-collapse: collapse;border-color:#ccc;border-spacing:0; text-transform:uppercase;'>
            <thead>
                <tr>
                    <td style='border: 1px solid #000;padding: 10px 15px;text-align: center;'><strong>COMPANY
                            NAME:</strong></b></td>
                    <td style='border: 1px solid #000;padding: 10px 15px;text-align: center;'>&nbsp;$contactcom</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style='border: 1px solid #000;padding: 10px 15px;text-align: center;'><strong>NAME:</strong>
                    </td>
                    <td style='border: 1px solid #000;padding: 10px 15px;text-align: center;'>&nbsp;$contactsurname</td>
                </tr>
                <tr>
                    <td style='border: 1px solid #000;padding: 10px 15px;text-align: center;'><strong>EMAIL:</strong>
                    </td>
                    <td style='border: 1px solid #000;padding: 10px 15px;text-align: center;'>&nbsp;$contactmail</td>
                </tr>
                <tr>
                    <td style='border: 1px solid #000;padding: 10px 15px;text-align: center;'><strong>PHONE
                            NUMBER:</strong>
                    </td>
                    <td style='border: 1px solid #000;padding: 10px 15px;text-align: center;'>&nbsp;$contacttel</td>
                </tr>
            </tbody>
        </table>
        <br>
        <h3>SHIPPING DETAILS:</h3><br>
        <table style='border-collapse: collapse;border-color:#ccc;border-spacing:0; text-transform:uppercase;'>
            <thead>
                <tr>
                    <td style='border: 1px solid #000;padding: 10px 15px;text-align: center;'><strong>COMPANY
                            NAME:</strong></b></td>
                    <td style='border: 1px solid #000;padding: 10px 15px;text-align: center;'>&nbsp;$contactcom</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style='border: 1px solid #000;padding: 10px 15px;text-align: center;'><strong>NAME,
                            SURNAME:</strong></td>
                    <td style='border: 1px solid #000;padding: 10px 15px;text-align: center;'>&nbsp;$contactsurname</td>
                </tr>
                <tr>
                    <td style='border: 1px solid #000;padding: 10px 15px;text-align: center;'><strong>EMAIL
                            ADDRESS:</strong></td>
                    <td style='border: 1px solid #000;padding: 10px 15px;text-align: center;'>&nbsp;$contactmail</td>
                </tr>
                <tr>
                    <td style='border: 1px solid #000;padding: 10px 15px;text-align: center;'><strong>PHONE
                            NUMBER:</strong>
                    </td>
                    <td style='border: 1px solid #000;padding: 10px 15px;text-align: center;'>&nbsp;$contacttel</td>
                </tr>
                <tr>
                    <td style='border: 1px solid #000;padding: 10px 15px;text-align: center;'><strong>COUNTRY:</strong>
                    </td>
                    <td style='border: 1px solid #000;padding: 10px 15px;text-align: center;'>&nbsp;$contactcountry</td>
                </tr>
                <tr>
                    <td style='border: 1px solid #000;padding: 10px 15px;text-align: center;'><strong>TOWN:</strong>
                    </td>
                    <td style='border: 1px solid #000;padding: 10px 15px;text-align: center;'>&nbsp;$contacttown</td>
                </tr>
                <tr>
                    <td style='border: 1px solid #000;padding: 10px 15px;text-align: center;'><strong>POST / ZIP
                            CODE</strong></td>
                    <td style='border: 1px solid #000;padding: 10px 15px;text-align: center;'>&nbsp;$contactpostcode
                    </td>
                </tr>
                <tr>
                    <td style='border: 1px solid #000;padding: 10px 15px;text-align: center;'><strong>Street, building
                            and apartment number:</strong></td>
                    <td style='border: 1px solid #000;padding: 10px 15px;text-align: center;'>&nbsp;$contactaddress</td>
                </tr>
            </tbody>
        </table>

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

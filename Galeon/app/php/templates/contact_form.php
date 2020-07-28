<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Аренда яхты</title>
    <style type="text/css">
        *{
            margin: 0;
            padding: 0;
            border: none;
            outline: none;
            box-sizing: border-box;
        }
        img {
            border: 0 none;
            height: auto;
            line-height: 100%;
            outline: none;
            text-decoration: none;
            -ms-interpolation-mode: bicubic;
        }

        a img {
            border: 0 none;
        }
    </style>
</head>
<body cellpadding="0" cellspacing="0">

<table>
    <tr>
        <td>Имя: </td>
        <td><?php echo $name; ?></td>
    </tr>
    <tr>
        <td>Телефон: </td>
        <td><?php echo $phone; ?></td>
    </tr>
    <tr>
        <td>Сообщение:</td>
        <td><?php echo $message;?></td>
    </tr>
</table>

</body>
</html>

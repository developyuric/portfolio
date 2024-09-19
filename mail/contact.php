<?php
mb_internal_encoding("UTF-8");

if(empty($_POST['name']) || empty($_POST['subject']) || empty($_POST['message']) || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
  http_response_code(500);
  exit();
}

// POST 데이터가 UTF-8로 인코딩된 것으로 처리합니다.
$name = htmlspecialchars($_POST['name'], ENT_QUOTES, 'UTF-8');
$email = htmlspecialchars($_POST['email'], ENT_QUOTES, 'UTF-8');
$m_subject = htmlspecialchars($_POST['subject'], ENT_QUOTES, 'UTF-8');
$message = htmlspecialchars($_POST['message'], ENT_QUOTES, 'UTF-8');

$to = "yrcdevcode@gmail.com"; // 받는 사람의 이메일 주소

// 메일 제목과 발신자 이름을 UTF-8로 인코딩
$encoded_subject = mb_encode_mimeheader($m_subject, 'UTF-8');
$encoded_name = mb_encode_mimeheader($name, 'UTF-8');

$subject = "$encoded_subject: $encoded_name";

// 이메일 본문에 UTF-8 인코딩을 설정
$body = "You have received a new message from your website contact form.\n\n".
        "Here are the details:\n\n".
        "Name: $name\n\n".
        "Email: $email\n\n".
        "Subject: $m_subject\n\n".
        "Message: $message";

// 이메일 헤더에 UTF-8 인코딩을 설정
$header = "From: $email\r\n";
$header .= "Reply-To: $email\r\n";
$header .= "Content-Type: text/plain; charset=UTF-8\r\n";  // UTF-8 인코딩 설정
$header .= "MIME-Version: 1.0\r\n";

if(!mail($to, $subject, $body, $header)) {
  http_response_code(500);
}
?>
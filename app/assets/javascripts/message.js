$(function(){ 
  function buildHTML(message){
   if ( message.image ) {
     var html =
      `<div class="message-box">
         <div class="message-box__upper">
           <div class="usernname">
             ${message.user_name}
           </div>
           <div class="time">
             ${message.created_at}
           </div>
         </div>
         <div class="chatmessage">
           <p class="lower-message__content">
             ${message.content}
           </p>
         </div>
         <img src=${message.image} >
       </div>`
     return html;
   } else {
     var html =
      `<div class="message-box">
         <div class="message-box__upper">
           <div class="username">
             ${message.user_name}
           </div>
           <div class="time">
             ${message.created_at}
           </div>
         </div>
         <div class="chatmessage">
           <p class="lower-message__content">
             ${message.content}
           </p>
         </div>
       </div>`
     return html;
   };
 }
$('#new_message').on('submit', function(e){
 e.preventDefault();
 var formData = new FormData(this);
 var url = $(this).attr('action')
 $.ajax({
   url: url,
   type: "POST",
   data: formData,
   dataType: 'json',
   processData: false,
   contentType: false
 })
  .done(function(data){
    var html = buildHTML(data);
    $('.main-chat__middle').append(html);
    $('form')[0].reset();
    $('.main-chat__middle').animate({ scrollTop: $('.main-chat__middle')[0].scrollHeight});
    $('.type-box__send-box').prop('disabled', false);

  
  })

  .fail(function() {
    alert("メッセージ送信に失敗しました");
  });
})


});
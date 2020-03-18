$(function(){
    var $username = $("#username"),
        $user1 = $("#user1"),
        $user2 = $("#user2"),
        $user3 = $("#user3"),
        $phone = $("#phone"),
        $phone1 = $("#phone1"),
        $phone2 = $("#phone2"),
        $password = $("#password"),
        $care = $("#care"),
        $setpwd = $("#setpwd"),
        $huoqu = $("#huoqu"),
        $dely = $("#dely"),
        $btn = $("#btn");
    // 点击弹出提示框弹出提示框
    var pattern = /^[\u4e00-\u9fa5]{1,7}$|^[\dA-Za-z_]{1,14}$/;
    $username.focus(function () { 
        $user1.css('display','block');
     })
     $username.blur(function () { 
        $user1.css('display','none');
        //用户名不得超过14个英文或7个汉字
        if(!pattern.test($username.val())){
            $user2.css('display','block');
        }else{
            $user2.css('display','none');
        }
        //用户名仅支持中英文、数字和下划线,且不能为纯数字
        var pattern1 = /^(?!(\d+)$)[\u4e00-\u9fff\w]+$/;
        if(!pattern1.test($username.val())){
            $user3.css('display','block');
        }else {
            $user3.css('display','none');
        }
        //如果用户名为空
        if($username.val()==''){
            $user3.css('display','none');
            $user2.css('display','none');
        }
     })

     $phone.blur(function () {
        if(!/^1[3456789]\d{9}$/.test($phone.val())){
            $phone1.css('display','block');
            $phone2.css('display','none');
        }else{
            $phone1.css('display','none');
        }
        if($phone.val()==''){
            $phone1.css('display','none');
        }
     })

     $password.focus(function () { 
            $care.css('display','block');
      })
      $password.blur(function(){
          var str = $password.val();
          $care.css('display','none');
          if($password.val()==''||str.length<8||str.length>14||/^[0-9]+$/.test(str)||/^[a-zA-Z]+$/.test(str)||str.indexOf(' ')>-1){
              $setpwd.css('display','block');
          }
          else{
            $setpwd.css('display','none');
          }
      })

      //获取验证码
      $huoqu.click(function(){
          if($phone.val()==""){
              $phone2.css('display','block');
          }else if($phone.val()!=''&&/^1[3456789]\d{9}$/.test($phone.val())){
            var time = 5;
            var timer = setInterval(function () {
                time = time - 1;
                if (time !== 0) {
                    $huoqu.attr('value', "验证码获取中(" + time + ")");
                    $huoqu.attr("disabled",'disabled');
                    $huoqu.css('cursor','not-allowed');
                    $dely.css('display','none');
                }
                else {
                    $huoqu.attr('value', "获取验证码");
                    $huoqu.removeAttr("disabled");
                    $huoqu.css('cursor','pointer');
                    $dely.css('display','block');
                    clearInterval(timer);
                }
            }, 1000);
          }
      })

      $btn.click(function(){
          if($password.val()==''||$username.val()==''){
            $user1.css('display','block');
            $setpwd.css('display','block');
          }
      })
     
});
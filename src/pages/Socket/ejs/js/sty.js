   // 获取元素
        var $userList = $("#userList");
        // 获取send inp chatLog
        var $send = $("#send");
        var $inp = $("#inp");
        var $right_msg = $("#right_msg");
        var $show_face_list = $("#show_face_list");
        var $face_list = $("#face_list");
        var $content = $("#content");
        var $show_face_pic = $("#show_face_pic");
        var $inputs = $("#inputs");
        // 发出请求
        var socket = io();
        
        $inputs.click(function (e) {
            e.stopPropagation();
            this.style.backgroundColor = ' rgba(0, 0, 0, .2)';
        })
        $content.click(function () {
            $inputs[0].style.backgroundColor = 'rgba(0, 0, 0, 0)';

        })

        // 监听请求是否成功
        socket.on("connect", function (argument) {
            // 报道
            socket.emit("coming", {
                username: " <%=username%>",
                head_pic_path: "<%=head_pic_path%>"
            })
            // 监听someonelogin 事件 
            socket.on("someonelogin", function (arr) {
                //    清空当前
                $userList.html("");
                // 循环渲染  ----监听来的用户并且循环上树
                for (var i = 0; i < arr.length; i++) {
                    $userList.append('<li><div><img src=" ' + arr[i].head_pic_path +
                        ' " alt=""></div><span>' + arr[i].username + '</span></li>')
                }

            })

            // 绑定发送事件 - - 键盘enter 事件
            document.onkeydown = function (e) {
                e = e || window.event || arguments.callee.caller.arguments[0];
                if (e.keyCode === 13) {
                    $send.trigger("click");
                }
            };
            $send.click(function () {
                // 获取用户输入的内容/
                var val = $inp.val();

                // 通过socket连接对象触发事件， 给后端发送消息
                socket.emit("msg", val);
                $inp.val("");
                // 监听发言事件
            })
            // 监听listen事件
            socket.on("listen", function (obj) {
                if (obj.text === "") {
                    return;
                }
                var dom = '<div class="chatLog"><div class="chat_img"><img src=" ' + obj.head_pic_path +
                    '" alt=""></div><div class="chat_content"><div class="chat_time"><span class="chat_now_time">' +
                    obj.mytime + ' </span><span class="chat_username">' +
                    obj.username + '</span></div><div class="chat_text">' + obj.text +
                    '</div></div></div>'
                $right_msg.append(dom)
                $right_msg.scrollTop(10000);

            })


            // 点击表情文字切换表情面板
            $show_face_list.click(function (e) {
                // 阻止事件冒泡
                e.stopPropagation();
                $face_list.toggleClass("hide");
            })


            // 点击表情图片时发送
            $face_list.on("click", "li", function () {
                const smile = ("<img src =/" + "face/" + $(this).data("name"));
                $inp.val($inp.val() + smile + " >")
            })

        })
        // 取消图片显示
        $content.click(function () {
            $face_list.addClass("hide");
        })
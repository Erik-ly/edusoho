webpackJsonp(["app/js/settings/profile/index"],[function(e,i,l){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function a(e,i,l){return i in e?Object.defineProperty(e,i,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[i]=l,e}var o,r,n=l("b334fd7e4c5a19234db2"),d=t(n);CKEDITOR.replace("profile_about",{toolbar:"Simple",filebrowserImageUploadUrl:$("#profile_about").data("imageUploadUrl")});$(".js-date").datetimepicker({autoclose:!0,format:"yyyy-mm-dd",minView:"month",language:document.documentElement.lang}),$("#user-profile-form").validate({rules:(r={nickname:(o={required:!0,chinese_alphanumeric:!0,byte_minlength:4,byte_maxlength:18,nickname:!0},a(o,"chinese_alphanumeric",!0),a(o,"es_remote",{type:"get"}),o),"profile[truename]":{minlength:2,maxlength:18},"profile[title]":{maxlength:24},"profile[qq]":"qq","profile[weibo]":"url","profile[blog]":"url","profile[site]":"url","profile[mobile]":"mobile","profile[idcard]":"idcardNumber","profile[intField1]":{digits:!0,maxlength:9},"profile[intField2]":{digits:!0,maxlength:9},"profile[intField3]":{digits:!0,maxlength:9},"profile[intField4]":{digits:!0,maxlength:9},"profile[intField5]":{digits:!0,maxlength:9},"profile[floatField1]":"float","profile[floatField2]":"float","profile[floatField3]":"float","profile[floatField4]":"float","profile[floatField5]":"float","profile[dateField5]":"date"},a(r,"profile[dateField5]","date"),a(r,"profile[dateField5]","date"),a(r,"profile[dateField5]","date"),a(r,"profile[dateField5]","date"),r)}),$("#form-nickname-submit").on("click",function(){var e=$(this),i=e.data("url"),l=$("#nickname").val(),t={nickname:l};$.post(i,t).done(function(i){(0,d.default)("success",Translator.trans(i.message)),e.closest(".cd-form-group").find('[data-target="form-static-text"] span').text(l),e.siblings('[data-dismiss="form-editable-close"]').click()}).fail(function(e){(0,d.default)("danger",Translator.trans(e.responseJSON.message))})})}]);
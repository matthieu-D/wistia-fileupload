angular.module('app.directive', [])
.directive('wistiaFileupload', function() {
    var password = 'e40379d6aa67779c98c5cc82c9a652aaf6b982fc6b2625f85557a735d4f625f3'
    var uploader = function(scope, element, attrs) {
        var el = $(element).find('input#uploader')
        el.fileupload({
            url: 'https://upload.wistia.com?api_password='+ password,
            options: {
                maxFileSize: 500000
            },
            add: function (e, data) {
                scope.isUploading = true;
                scope.$apply();
                data.submit();
            },
            done: function (e, data) {
                scope.receivedId = data._response.result.hashed_id;
                scope.hasUploaded = true;
                scope.isUploading = false;
                scope.$apply();
            },
            progress: function(e,data){
                var progress = parseInt(data.loaded / data.total * 100, 10);
                $('#progress .progress-bar').css(
                    'width',
                    progress + '%'
                    );
            }
        })
    }
    return {
        link: uploader,
        template:`<div>
                    <div ng-show='isUploading' id="progress" class="progress">
                        <div class="progress-bar progress-bar-success"></div>
                    </div>
                    <div ng-show='!hasUploaded'>
                      <input id='uploader' type='file' name='files' multiple='multiple' />
                    </div>
                    <div ng-if='hasUploaded'>
                      <div id='player1' class="wistia_embed wistia_async_{{receivedId}}" style='width:640px;height:360px;'>&nbsp;</div>
                    </div>
                  </div>`
    };
});
(function($) {
    console.log('verify');
    var div =  $('.verification-div') ;
    function handlePreloader() {
		if($('.preloader').length){
			$('.preloader').delay(200).fadeOut(500);
		}
    }
    
    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }
    /********** set message *****/
    function _setErrorMessage() {
        div.text('');
        div.text(CONSTANT.WRONG_LINK);
        div.removeClass('alert alert-success');
        div.addClass('alert alert-danger');
        div.css('display', 'block');
    }

    function _setSuccessMessage() {
        div.text('');
        div.text(CONSTANT.SUCCESS_LINK);
        div.removeClass('alert alert-danger');
        div.addClass('alert alert-success');
        div.css('display', 'block');
        setTimeout(() => {
            location.href = '../index.html';
        }, 3000);
    }
    /******* get email and Token *****/
    function _getHashAndEmail() {
        div.text('');
        div.removeClass('alert alert-danger');
        div.removeClass('alert alert-success');
        div.css('display', 'none');
        handlePreloader();
        /****** extratcing query parameters ****/
        var email = getParameterByName('email'), hash = getParameterByName('hash'), 
        parameters = new Object() ;
        console.log(email, hash)
        if(email === undefined|| email === null || email === "" || email === 'null'){
          //  email = email.substring(1, email.length-1);
          _setErrorMessage();
          handlePreloader();
          return false ;
        }

        if(undefined ===  hash || hash === null || hash === "" || hash === 'null'){
             //hash = hash.substring(1, hash.length-1);
              _setErrorMessage();
              handlePreloader();
              return false ;
        }
      
        /**** send parameters **/
        parameters.UserName = CONSTANT.USER_NAME;
        parameters.UserPassword = CONSTANT.PASSWORD;
        parameters.token = CONSTANT.TOKEN;
        parameters.action = CONSTANT.VERIFICATION_ACTION;
        parameters.email = email;
        parameters.hash = hash ;
        $.ajax({
            url: CONSTANT.URL_PATH,
            type: 'post',
            data: 'data='+JSON.stringify(parameters),
            cash: false,
            success: function(data) {
                var json = JSON.parse(data);
                if(!json.data) {
                    _setErrorMessage();
                }else {
                    /********* successfully activated ***/
                    _setSuccessMessage();
                }
                handlePreloader();
            },
            error: function(err) {
                console.error(err);
                _setErrorMessage();
                handlePreloader();
            }
        })
        
    }

    $(window).on('load', function() {
        _getHashAndEmail();
    })
})(window.jQuery);
ccm.component({

    /*-------------------------------------------- public component members --------------------------------------------*/

    name: 'calc',

    /*-------------------------------------------- public component classes --------------------------------------------*/

    Instance: function () {

        /*------------------------------------------- public instance methods --------------------------------------------*/
        this.render = function (callback) {

            var element = ccm.helper.element(this);


            if (callback) callback();

        }

    }

    /*------------------------------------------------ type definitions ------------------------------------------------*/

});
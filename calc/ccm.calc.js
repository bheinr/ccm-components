ccm.component({

    /*-------------------------------------------- public component members --------------------------------------------*/

    name: 'calc',
    
    config: {
        html:  [ ccm.store, { local: 'templates.json' } ],
        style: [ ccm.load, 'style.css' ],


    },

    /*-------------------------------------------- public component classes --------------------------------------------*/

    Instance: function () {

        var self = this;


        /*------------------------------------------- public instance methods --------------------------------------------*/


        self.render = function (callback) {

            var element = ccm.helper.element(this);
            element.html(ccm.helper.html(self.html.get('main')));

            if (callback) callback();

        };

        function result() {
            element.html( ccm.helper.html( self.html.get( 'main' ) ) );
            var result_div = ccm.helper.find( self, '.result' );
            result_div.html("test");
            if ( callback ) callback();
        }

    }

    /*------------------------------------------------ type definitions ------------------------------------------------*/

});
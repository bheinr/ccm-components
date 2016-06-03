ccm.component({

    /*-------------------------------------------- public component members --------------------------------------------*/

    name: 'calc',

    config: {
        html: [ccm.store, {local: 'templates.json'}],
        style: [ccm.load, 'style.css']


    },

    /*-------------------------------------------- public component classes --------------------------------------------*/

    Instance: function () {
        var self = this;
        var output_store = "";
        var last_was_calc = true;

        /*------------------------------------------- public instance methods --------------------------------------------*/


        self.render = function (callback) {
            var element = ccm.helper.element(self);
            element.html(ccm.helper.html(self.html.get('main')));
            output(0);

            var eins = ccm.helper.find(self, "#eins");
            eins.click(function () {
                storeOutput(1);
                last_was_calc = false;

            });

            var zwei = ccm.helper.find(self, "#zwei");
            zwei.click(function () {
                storeOutput(2);
                last_was_calc = false;

            });

            var drei = ccm.helper.find(self, "#drei");
            drei.click(function () {
                storeOutput(3);
                last_was_calc = false;

            });

            var vier = ccm.helper.find(self, "#vier");
            vier.click(function () {
                storeOutput(4);
                last_was_calc = false;

            });

            var fuenf = ccm.helper.find(self, "#fuenf");
            fuenf.click(function () {
                storeOutput(5);
                last_was_calc = false;

            });

            var sechs = ccm.helper.find(self, "#sechs");
            sechs.click(function () {
                storeOutput(6);
                last_was_calc = false;

            });


            var sieben = ccm.helper.find(self, "#sieben");
            sieben.click(function () {
                storeOutput(7);
                last_was_calc = false;

            });

            var acht = ccm.helper.find(self, "#acht");

            acht.click(function () {
                storeOutput(8);
                last_was_calc = false;

            });
            var neun = ccm.helper.find(self, "#neun");

            neun.click(function () {
                storeOutput(9);
                last_was_calc = false;

            });
            var null2 = ccm.helper.find(self, "#null");

            null2.click(function () {
                storeOutput(0);
                last_was_calc = false;

            });
            var plus = ccm.helper.find(self, "#plus");

            plus.click(function () {
                if (!last_was_calc) {
                    storeOutput(" + ");
                    last_was_calc = true;
                }
            });
            var div = ccm.helper.find(self, "#div");

            div.click(function () {
                if (!last_was_calc) {
                    storeOutput(" / ");
                    last_was_calc = true;

                }
            });
            var minus = ccm.helper.find(self, "#minus");

            minus.click(function () {
                if (!last_was_calc) {
                    storeOutput(" - ");
                    last_was_calc = true;

                }
            });
            var mult = ccm.helper.find(self, "#mult");

            mult.click(function () {
                if (!last_was_calc) {
                    storeOutput(" * ");
                    last_was_calc = true;
                }
            });

            var kom = ccm.helper.find(self, "#kom");

            kom.click(function () {
                if (!last_was_calc) {
                    storeOutput(".");
                    last_was_calc = true;
                }
            });


            var delete2 = ccm.helper.find(self, "#delete");
            delete2.click(function () {
                output(0);
                output_store = "";
                last_was_calc = true;

            });

            var gleich = ccm.helper.find(self, "#gleich");
            gleich.click(function () {
                var result = output_store.split(" ");
                var result2 = 0;

                if (result[1] === "+") {
                    result2 = parseInt(result[0]) + parseInt(result [2]);
                } else if (result[1] === "-") {
                    result2 = result[0] - result [2];
                } else if (result[1] === "*") {
                    result2 = result[0] * result [2];
                } else if (result[1] === "/") {
                    result2 = result[0] / result [2];
                }

                output(result2);
                output_store = "";
                last_was_calc = true;
            });


            if (callback) callback();

        };

        function output(number) {
            var result_div = ccm.helper.find(self, '#result');
            result_div.html(number);


        }

        function storeOutput(number) {
            output_store += number;
            output(output_store);

        }


    }



    /*------------------------------------------------ type definitions ------------------------------------------------*/

});
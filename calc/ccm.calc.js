/**

 * @overview <i>ccm</i> component for a simple calculator

 * @author Benjamin Heinrichs 2016

 * @license Apache Licence 2.0

 */

/*Copyright [2016] [Benjamin Heinrichs]

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.*/

ccm.component({

    /*-------------------------------------------- public component members --------------------------------------------*/

    name: 'calc',

    config: {
        html: [ccm.store, {local: 'templates.json'}],
        style: [ccm.load, 'style.css']


    },

    /*-------------------------------------------- public component classes --------------------------------------------*/

    /**
     * @summary constructor for creating <i>ccm</i> instances out of this component
     * @class
     */

    Instance: function () {
        var self = this;
        var output_store = "";
        var last_was_calc = true;

        /*------------------------------------------- public instance methods --------------------------------------------*/

        /** render calculator in own website area
         * @summary initialize <i>ccm</i> instance
         * @param {function} [callback] - callback when ccm instance is rendered (first parameter is ccm instance) */

        self.render = function (callback) {
            var element = ccm.helper.element(self);
            element.html(ccm.helper.html(self.html.get('main')));
            output(0);

            var eins = ccm.helper.find(self, "#eins");
            eins.click(function () {
                keyPressNoCalc(1)
            });

            /**
             * @return {boolean}
             */
            function IsNumeric(input) {
                return (input - 0) == input && ('' + input).trim().length > 0;

            }

            document.onkeypress = function (e) {
                e = e || window.event;
                var charCode = e.charCode || e.keyCode,
                    character = String.fromCharCode(charCode);
                if (IsNumeric(character)) {
                    keyPressNoCalc(character)
                } else if (character === "-") {
                   keyPressIsCalc(" - ")
                } else if (character === "+") {
                    keyPressIsCalc(" + ")
                } else if (character === "*") {
                    keyPressIsCalc(" * ")
                } else if (character === "/") {
                    keyPressIsCalc(" / ")
                } else if (character === ",") {
                    keyPressIsCalc(",")

                }

            };


            var zwei = ccm.helper.find(self, "#zwei");
            zwei.click(function () {
                keyPressNoCalc(2)
            });

            var drei = ccm.helper.find(self, "#drei");
            drei.click(function () {
                keyPressNoCalc(3)

            });

            var vier = ccm.helper.find(self, "#vier");
            vier.click(function () {
                keyPressNoCalc(4)

            });

            var fuenf = ccm.helper.find(self, "#fuenf");
            fuenf.click(function () {
                keyPressNoCalc(5)

            });

            var sechs = ccm.helper.find(self, "#sechs");
            sechs.click(function () {
                keyPressNoCalc(6)
            });


            var sieben = ccm.helper.find(self, "#sieben");
            sieben.click(function () {
                keyPressNoCalc(7)
            });

            var acht = ccm.helper.find(self, "#acht");
            acht.click(function () {
                keyPressNoCalc(8)

            });

            var neun = ccm.helper.find(self, "#neun");
            neun.click(function () {
                keyPressNoCalc(9)

            });

            var null2 = ccm.helper.find(self, "#null");
            null2.click(function () {
                keyPressNoCalc(0)
            });
            var plus = ccm.helper.find(self, "#plus");

            plus.click(function () {
                keyPressIsCalc(" + ")

            });
            var div = ccm.helper.find(self, "#div");

            div.click(function () {
                keyPressIsCalc(" / ");
            });
            var minus = ccm.helper.find(self, "#minus");

            minus.click(function () {
                keyPressIsCalc(" - ")
            });

            var mult = ccm.helper.find(self, "#mult");
            mult.click(function () {
                keyPressIsCalc(" * ")
            });

            var kom = ccm.helper.find(self, "#kom");

            kom.click(function () {
                keyPressIsCalc(".")
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
                    result2 = parseFloat(result[0]) + parseFloat(result [2]);

                    //TODO .foFixed


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

        function keyPressNoCalc(key) {
            storeOutput(key);
            last_was_calc = false;
        }

        function keyPressIsCalc(key) {
            if (!last_was_calc) {
                storeOutput(key);
                last_was_calc = true;
            }
        }

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
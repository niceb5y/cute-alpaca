"use strict"
module.exports = function(str) {
	var hangulkit = require("hangulkit");
	var alpaca = "대신귀여운" + hangulkit.eulreul(str) + "드리겠습니다";
	var array = alpaca.split("");
	var result = "", count = 1;
	while (array.length > 0) {
		result += array[0];
		array.shift();
		if (count % 3 == 0) {
			result += "\n";
		}
		++count;
	}
	return result;
}
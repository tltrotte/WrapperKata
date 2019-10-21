module.exports = {
	Wrapper: function wrap(text, columnNumber) {
		if (text == null) return "";
		//  Extracts ONLY the column number input from text entered ()
		let wrappedLeft = text.substr(0, columnNumber).trim();
		//  Begins the extraction at the position of the column number , then proceeds to extract the remainder of the string
		let wrappedRight = text.substr(columnNumber).trim();

		if (text.length <= columnNumber) return text;
		if (text.length > columnNumber) {
			wrappedLeft = wrap(wrappedLeft, columnNumber);
			wrappedRight = wrap(wrappedRight, columnNumber);
			//joins all perimeters and values defined
			var wordWrapped = wrappedLeft.concat("\n").concat(wrappedRight);
		}
		return wordWrapped;
	}
};

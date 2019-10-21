const Wrapper = require("../app").Wrapper;
const assert = require("chai").assert;
// const app = require('../app');

describe("app", function() {
	it(" should return '' ", function() {
		assert.equal(Wrapper(null), "");
	});
	it(" should return T ", function() {
		assert.equal(Wrapper("T", 1), "T");
	});
	it(" should return TT ", function() {
		assert.equal(Wrapper("TT", 3), "TT");
	});
	it(" should return T\nT ", function() {
		assert.equal(Wrapper("TT", 1), "T\nT");
	});
	it(" should return T\nT\nT ", function() {
		assert.equal(Wrapper("TTT", 1), "T\nT\nT");
	});
	it(" should return T\nT ", function() {
		assert.equal(Wrapper("T T", 1), "T\nT");
	});
});

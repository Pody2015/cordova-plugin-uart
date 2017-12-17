var exec = require('cordova/exec');

var callbackMap = {};

exports.openUart = function (name, success, error) {
    exec(success, error, 'uart', 'openUart', [name]);
};

exports.close = function (name, success, error) {
	exec(success, error, 'uart', 'close', [name]);
};

exports.flush = function (name, direction, success, error) {
	exec(success, error, 'uart', 'flush', [name, direction]);
};

exports.read = function (name, length, success, error) {
	exec(success, error, 'uart', 'read', [name, length]);
};

exports.sendBreak = function (name, duration_msec, success, error) {
	exec(success, error, 'uart', 'sendBreak', [name, duration_msec]);
};

exports.setBaudrate = function (name, rate, success, error) {
	exec(success, error, 'uart', 'setBaudrate', [name, rate]);
};

exports.setDataSize = function (name, size, success, error) {
	exec(success, error, 'uart', 'setDataSize', [name, size]);
};

exports.setHardwareFlowControl = function (name, mode, success, error) {
	exec(success, error, 'uart', 'setHardwareFlowControl', [name, mode]);
};

exports.setModemControl = function (name, lines, success, error) {
	exec(success, error, 'uart', 'setModemControl', [name, lines]);
};

exports.setParity = function (name, mode, success, error) {
	exec(success, error, 'uart', 'setParity', [name, mode]);
};

exports.setStopBits = function (name, bits, success, error) {
	exec(success, error, 'uart', 'setStopBits', [name, bits]);
};

exports.write = function (name, buffer, success, error) {
	exec(success, error, 'uart', 'write', [name, buffer]);
};

exports.registerUartDeviceCallback = function (name, callback, success, error) {
	exec(function() {
		callbackMap[name] = callback;
		success();
	}, error, 'uart', 'registerUartDeviceCallback', [name]);
};

exports.unregisterUartDeviceCallback = function (name, success, error) {
	exec(function() {
		delete callbackMap[name];
		success();
	}, error, 'uart', 'unregisterUartDeviceCallback', [name]);
};

exports.callback = function (name) {
	if (callbackMap[name]) {
		callbackMap[name](name);
	}
};

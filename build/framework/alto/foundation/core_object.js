"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// ==========================================================================
// Project: Alto - JavaScript Foundation Framework
// Copyright: @2018 The Code Boutique, Corp
// License:   MIT License (see license for details)
// Author: Chad Eubanks
// ==========================================================================

var CoreObject = function () {
    function CoreObject() {
        _classCallCheck(this, CoreObject);
    }

    _createClass(CoreObject, [{
        key: "set",
        value: function set(key, value) {
            this[key] = value;
            return this;
        }
    }, {
        key: "get",
        value: function get(key) {
            return this[key];
        }
    }, {
        key: "init",
        value: function init() {}
    }], [{
        key: "toString",
        value: function toString() {
            return "Alto.CoreObject";
        }
    }, {
        key: "create",
        value: function create() {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            var instance = Object.assign.apply(Object, [new CoreObject(), this].concat(args));
            delete instance.create;
            instance.init();
            return instance;
        }
    }, {
        key: "extend",
        value: function extend() {
            var instance = new CoreObject();
            instance.create = this.create;
            instance.extend = this.extend;

            for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
            }

            return Object.assign.apply(Object, [instance, this].concat(args));
        }
    }]);

    return CoreObject;
}();

exports.default = CoreObject;
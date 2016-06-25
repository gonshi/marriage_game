(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var COLUMN_HORIZONTAL_NUM = 5;
var COLUMN_VERTICAL_NUM = 4;
var IMAGE_NUM = 20;
var WAIT = 500;

var Main = function () {
    function Main() {
        _classCallCheck(this, Main);

        this.$win = $(window);
        this.$wrapper = $('.wrapper');
        this.$visited = $('.visited');
        this.$visited_inner = $('.visited__inner');
        this.$modal = $('.modal');
        this.$modal_inner = $('.modal__inner');

        this.column_width = this.$win.height() / COLUMN_HORIZONTAL_NUM;
        this.column_height = this.$win.width() / COLUMN_VERTICAL_NUM;
    }

    _createClass(Main, [{
        key: 'init',
        value: function init() {
            var _this = this;

            this.$visited_inner.css({
                width: this.$win.height() / COLUMN_HORIZONTAL_NUM,
                height: this.$win.width() / COLUMN_VERTICAL_NUM
            });

            this.$wrapper.on('click', function (e) {
                var column_left = Math.floor(e.clientY / _this.column_width);
                var column_top = Math.floor((_this.$win.width() - e.clientX) / _this.column_height);

                _this.showResult(column_top * COLUMN_HORIZONTAL_NUM + column_left + 1);
            });

            this.$modal.on('click', function (e) {
                _this.closeResult();
            });
        }
    }, {
        key: 'preload',
        value: function preload() {
            var open_image = [];
            var visited_image = [];

            for (var i = 0; i < IMAGE_NUM; i++) {
                open_image[i] = new Image();
                visited_image[i] = new Image();

                open_image[i].src = 'img/open/' + (i + 1) + '.jpg';
                visited_image[i].src = 'img/visited/' + (i + 1) + '.jpg';
            }
        }
    }, {
        key: 'showResult',
        value: function showResult(image_i) {
            var _this2 = this;

            this.$modal.addClass('is-show');
            this.$modal_inner.css({
                backgroundImage: 'url(img/open/' + image_i + '.jpg)'
            });

            setTimeout(function () {
                _this2.$visited_inner.eq(image_i - 1).css({
                    backgroundImage: 'url(img/visited/' + image_i + '.jpg)'
                });
            }, WAIT);
        }
    }, {
        key: 'closeResult',
        value: function closeResult() {
            this.$modal.removeClass('is-show');
        }
    }]);

    return Main;
}();

var main = new Main();
main.preload();
main.init();

},{}]},{},[1]);

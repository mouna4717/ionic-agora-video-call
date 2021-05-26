(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+j1i":
    /*!****************************************************!*\
      !*** ./src/app/pages/welcome/welcome.component.ts ***!
      \****************************************************/

    /*! exports provided: WelcomeComponent */

    /***/
    function j1i(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function () {
        return WelcomeComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_welcome_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./welcome.component.html */
      "xBpO");
      /* harmony import */


      var _welcome_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./welcome.component.css */
      "68e4");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var WelcomeComponent = /*#__PURE__*/function () {
        function WelcomeComponent() {
          _classCallCheck(this, WelcomeComponent);
        }

        _createClass(WelcomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return WelcomeComponent;
      }();

      WelcomeComponent.ctorParameters = function () {
        return [];
      };

      WelcomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-welcome',
        template: _raw_loader_welcome_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_welcome_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], WelcomeComponent);
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! E:\mouna\agora_video_call\ionic-agora-video-call\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "1U5E":
    /*!************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/input-output-settings/input-output-settings.component.html ***!
      \************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function U5E(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"screen\">\r\n  <div class=\"container pt-4 pb-4\">\r\n    <a class=\"close-button\" (click)=\"onClose()\">\r\n      <fa-icon [icon]=\"closeIcon\"></fa-icon>\r\n    </a>\r\n    <div class=\"row\">\r\n      <div class=\"col-3 pr-0 pl-0\">\r\n        <h4 class=\"mt-3 mb-4 ml-3\">Settings</h4>\r\n        <div class=\"list-group\" id=\"list-tab\" role=\"tablist\">\r\n          <a\r\n            class=\"list-group-item list-group-item-action\"\r\n            id=\"list-audio-list\"\r\n            [ngClass]=\"{ active: selectedTab === tabKind.audio }\"\r\n            (click)=\"onTabClick(tabKind.audio)\"\r\n            ><fa-icon class=\"mr-4\" [icon]=\"audioIcon\"></fa-icon> Audio</a\r\n          >\r\n          <a\r\n            class=\"list-group-item list-group-item-action\"\r\n            id=\"list-video-list\"\r\n            [ngClass]=\"{ active: selectedTab === tabKind.video }\"\r\n            (click)=\"onTabClick(tabKind.video)\"\r\n            ><fa-icon class=\"mr-4\" [icon]=\"videoIcon\"></fa-icon> Video</a\r\n          >\r\n        </div>\r\n      </div>\r\n      <div class=\"col-9 pl-0\">\r\n        <div class=\"settings-container pl-5 pt-4 pb-4\">\r\n          <!-- audio Settings start -->\r\n          <div *ngIf=\"selectedTab === tabKind.audio\">\r\n            <div class=\"row mb-3\">\r\n              <div class=\"col-12\">\r\n                <div class=\"row\">\r\n                  <h6 class=\"setting-title\">Microphone</h6>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-8\">\r\n                    <select\r\n                      class=\"form-control form-control-sm\"\r\n                      [value]=\"selectedAudioInId\"\r\n                      (change)=\"onMicChange($event.target.value)\"\r\n                    >\r\n                      <option\r\n                        *ngFor=\"let info of micDevicesInfos\"\r\n                        [value]=\"info.deviceId\"\r\n                      >\r\n                        {{ info.label }}\r\n                      </option>\r\n                    </select>\r\n                  </div>\r\n                  <div class=\"col-4\">\r\n                    <div class=\"d-flex\">\r\n                      <fa-icon\r\n                        class=\"mr-2\"\r\n                        [icon]=\"micIcon\"\r\n                        [styles]=\"{ color: 'rgb(133, 133, 133)' }\"\r\n                      ></fa-icon>\r\n                      <app-sound-meter></app-sound-meter>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row mb-3\">\r\n              <div class=\"col-12\">\r\n                <div class=\"row\">\r\n                  <h6 class=\"setting-title\">Speaker</h6>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-8\">\r\n                    <select\r\n                      class=\"form-control form-control-sm\"\r\n                      [value]=\"selectedAudioOutId\"\r\n                      (change)=\"onSpeakerChange($event.target.value)\"\r\n                    >\r\n                      <option\r\n                        *ngFor=\"let info of speakerDevicesInfos\"\r\n                        [value]=\"info.deviceId\"\r\n                      >\r\n                        {{ info.label }}\r\n                      </option>\r\n                    </select>\r\n                  </div>\r\n                  <div class=\"col-4\">\r\n                    <a (click)=\"onTestAudio()\">\r\n                      <span>\r\n                        <fa-icon\r\n                          [icon]=\"speakerIcon\"\r\n                          [styles]=\"{ color: 'rgb(133, 133, 133)' }\"\r\n                        ></fa-icon>\r\n                        Test\r\n                      </span>\r\n                    </a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- audio Settings end -->\r\n          <!-- vido Settings start -->\r\n          <div *ngIf=\"selectedTab === tabKind.video\">\r\n            <div class=\"row mb-3\">\r\n              <div class=\"col-12\">\r\n                <div class=\"row\">\r\n                  <h6 class=\"setting-title\">Camera</h6>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-8\">\r\n                    <select\r\n                      class=\"form-control form-control-sm\"\r\n                      [value]=\"selectedVideoId\"\r\n                      (change)=\"onCameraChange($event.target.value)\"\r\n                    >\r\n                      <option\r\n                        *ngFor=\"let info of camDevicesInfos\"\r\n                        [value]=\"info.deviceId\"\r\n                      >\r\n                        {{ info.label }}\r\n                      </option>\r\n                    </select>\r\n                  </div>\r\n                  <div class=\"col-4\">\r\n                    <div class=\"d-flex\">\r\n                      <fa-icon\r\n                        class=\"mr-3\"\r\n                        [icon]=\"videoIcon\"\r\n                        [styles]=\"{ color: 'rgb(133, 133, 133)' }\"\r\n                      ></fa-icon>\r\n                      <div class=\"camera-container\">\r\n                        <video\r\n                          #videoSample\r\n                          id=\"videoSample\"\r\n                          class=\"camera\"\r\n                        ></video>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- video Settings end -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "68e4":
    /*!*****************************************************!*\
      !*** ./src/app/pages/welcome/welcome.component.css ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function e4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content{\r\n\r\n    --ion-background-color:#ffffff;\r\n}\r\n\r\nion-toolbar {\r\n    --color: #ffffff;\r\n    --background: #164598;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIscUJBQXFCO0FBQ3pCIiwiZmlsZSI6IndlbGNvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG5cclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2ZmZmZmZjtcclxufVxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gICAgLS1jb2xvcjogI2ZmZmZmZjtcclxuICAgIC0tYmFja2dyb3VuZDogIzE2NDU5ODtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "7hRC":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/meeting-page/meeting-page.component.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function hRC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <div class=\"vh-100 vw-100 d-flex flex-column position-relative\">\r\n  <div class=\"views-container w-100 row position-relative\"> -->\r\n    <ion-content>\r\n    <div *ngIf=\"!pinnedUser\">\r\n      <div class=\"col-3\" *ngFor=\"let user of userList\">\r\n        <app-meeting-participant [user]=\"user\" (pinned)=\"onPin($event)\"></app-meeting-participant>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"pinnedUser\">\r\n      <div class=\"col-9 h-100\">\r\n        <div class=\"pinned-container\">\r\n          <app-meeting-participant [user]=\"pinnedUser\" (pinned)=\"onPin($event)\"></app-meeting-participant>\r\n        </div>\r\n      </div>\r\n      <div class=\"side-container col-3 h-100\">\r\n        <div *ngFor=\"let user of getUnpinnedUsers()\">\r\n          <div class=\"mb-2\">\r\n            <app-meeting-participant [user]=\"user\" (pinned)=\"onPin($event)\"></app-meeting-participant>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ion-content>\r\n    <div class=\"meeting-description-container\">\r\n      <h4>{{userList.length === 1 ?\"You are alone here\":\"You and \" + (userList.length - 1) + \" user(s) are in meeting\"}}\r\n      </h4>\r\n    </div>\r\n  <!-- </div> -->\r\n  <div class=\"controls-container\">\r\n    <app-meeting-controls (cameraMuted)=\"onLocalCamera($event)\" (micMuted)=\"onLocalMic($event)\"\r\n      (hangedUp)=\"onLocalLeave()\" (pinned)=\"onLocalPinned($event)\"></app-meeting-controls>\r\n  </div>\r\n<!-- </div> -->";
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "CmlQ":
    /*!********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/meeting-participant/meeting-participant.component.html ***!
      \********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function CmlQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"view-container\" (mouseover)=\"showControls(true)\" (mouseleave)=\"showControls(false)\">\r\n    <div [appAgoraVideoPlayer]=\"trackoptions\" class=\"video\">\r\n    </div>\r\n    <div class=\"control-container d-flex flex-row justify-content-center align-items-center\" *ngIf=\"isRemote()\">\r\n        <app-meeting-participant-controls \r\n        [show]=\"controlsVisible\"\r\n        (camOff)=\"onCamOff()\"\r\n        (micMute)=\"onMicMute()\"\r\n        (pin)=\"onPin()\">\r\n        </app-meeting-participant-controls>\r\n    </div>\r\n    <div class=\"mic-status\" *ngIf=\"isRemote() && !micStatus\">\r\n        <fa-icon [icon]=\"micMuteIcon\" [styles]=\"{stroke: 'white', color: 'white'}\"></fa-icon>\r\n    </div>\r\n    <div class=\"sound-meter\" *ngIf=\"isRemote() && micStatus\">\r\n        <app-sound-visualizer [mediaStream]=\"audioStream\"></app-sound-visualizer>\r\n    </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "GUX3":
    /*!**************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/meeting-participant-controls/meeting-participant-controls.component.html ***!
      \**************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function GUX3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"buttons-container\" [ngClass]=\"{show: show}\">\r\n    <a class=\"btn-item\" (click)=\"onPin()\"><fa-icon [icon]=\"pinIcon\"></fa-icon></a>\r\n    <a class=\"btn-item\" (click)=\"onMicMute()\"><fa-icon [icon]=\"micMuteIcon\"></fa-icon></a>\r\n    <a class=\"btn-item\" (click)=\"onCamOff()\"><fa-icon [icon]=\"camMuteIcon\" ></fa-icon></a>\r\n    <a class=\"btn-item\" (click)=\"onCick()\"><fa-icon [icon]=\"kickIcon\"></fa-icon></a>\r\n</div>\r\n";
      /***/
    },

    /***/
    "I0zc":
    /*!**********************************************************************************************************!*\
      !*** ./src/app/shared/components/meeting-participant-controls/meeting-participant-controls.component.ts ***!
      \**********************************************************************************************************/

    /*! exports provided: MeetingParticipantControlsComponent */

    /***/
    function I0zc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MeetingParticipantControlsComponent", function () {
        return MeetingParticipantControlsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_meeting_participant_controls_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./meeting-participant-controls.component.html */
      "GUX3");
      /* harmony import */


      var _meeting_participant_controls_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./meeting-participant-controls.component.css */
      "wthP");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons */
      "wHSu");

      var MeetingParticipantControlsComponent = /*#__PURE__*/function () {
        function MeetingParticipantControlsComponent() {
          _classCallCheck(this, MeetingParticipantControlsComponent);

          this.pinIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faThumbtack"];
          this.kickIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faMinusCircle"];
          this.micMuteIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faMicrophoneSlash"];
          this.camMuteIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faVideoSlash"];
          this.show = false;
          this.pin = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.micMute = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.camOff = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.cick = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        }

        _createClass(MeetingParticipantControlsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onPin",
          value: function onPin() {
            this.pin.emit();
          }
        }, {
          key: "onMicMute",
          value: function onMicMute() {
            this.micMute.emit();
          }
        }, {
          key: "onCamOff",
          value: function onCamOff() {
            this.camOff.emit();
          }
        }, {
          key: "onCick",
          value: function onCick() {
            this.cick.emit();
          }
        }]);

        return MeetingParticipantControlsComponent;
      }();

      MeetingParticipantControlsComponent.ctorParameters = function () {
        return [];
      };

      MeetingParticipantControlsComponent.propDecorators = {
        show: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        pin: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        micMute: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        camOff: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        cick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      MeetingParticipantControlsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-meeting-participant-controls',
        template: _raw_loader_meeting_participant_controls_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_meeting_participant_controls_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], MeetingParticipantControlsComponent);
      /***/
    },

    /***/
    "J8WR":
    /*!**************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/sound-visualizer/sound-visualizer.component.html ***!
      \**************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function J8WR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"d-flex flex-row align-items-end\">\r\n  <ng-container *ngFor=\"let value of values\">\r\n    <div class=\"lines\" [ngStyle]=\"{'height.px': value}\"></div>\r\n  </ng-container>\r\n</div>\r\n";
      /***/
    },

    /***/
    "JJ5p":
    /*!*********************************************************************!*\
      !*** ./src/app/pages/meeting-preview/meeting-preview.component.css ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function JJ5p(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".page {\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 100vh;\r\n    width: 100vw;\r\n    justify-content: center;\r\n}\r\n\r\n.meeting-actions-container {\r\n    max-width: 450px;\r\n    min-width: 300px;\r\n}\r\n\r\n.meeting-info {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.button-container {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    \r\n}\r\n\r\n.btn {\r\n    border-radius: 1rem;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lZXRpbmctcHJldmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsWUFBWTtJQUNaLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1Qjs7QUFFM0I7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkIiLCJmaWxlIjoibWVldGluZy1wcmV2aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLm1lZXRpbmctYWN0aW9ucy1jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiA0NTBweDtcclxuICAgIG1pbi13aWR0aDogMzAwcHg7XHJcbn1cclxuXHJcbi5tZWV0aW5nLWluZm8ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG59XHJcblxyXG4iXX0= */";
      /***/
    },

    /***/
    "OAHU":
    /*!*******************************************************************!*\
      !*** ./src/app/shared/directives/agora-video-player.directive.ts ***!
      \*******************************************************************/

    /*! exports provided: AgoraVideoPlayerDirective */

    /***/
    function OAHU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AgoraVideoPlayerDirective", function () {
        return AgoraVideoPlayerDirective;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AgoraVideoPlayerDirective = /*#__PURE__*/function () {
        function AgoraVideoPlayerDirective(elementRef) {
          _classCallCheck(this, AgoraVideoPlayerDirective);

          this.elementRef = elementRef;
        }

        _createClass(AgoraVideoPlayerDirective, [{
          key: "trackOption",
          set: function set(options) {
            this.playTrack(options);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "playTrack",
          value: function playTrack(tracks) {
            while (this.elementRef.nativeElement.firstChild) {
              this.elementRef.nativeElement.removeChild(this.elementRef.nativeElement.firstChild);
            }

            if (tracks.mediaTrack) {
              tracks.mediaTrack.playVideo(this.elementRef.nativeElement, {
                fit: 'cover'
              });
              return;
            }

            if (tracks.audioTrack) {
              tracks.audioTrack.play();
            }

            if (tracks.videoTrack) {
              tracks.videoTrack.play(this.elementRef.nativeElement, {
                fit: 'cover'
              });
            }
          }
        }]);

        return AgoraVideoPlayerDirective;
      }();

      AgoraVideoPlayerDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }];
      };

      AgoraVideoPlayerDirective.propDecorators = {
        trackOption: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['appAgoraVideoPlayer']
        }]
      };
      AgoraVideoPlayerDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appAgoraVideoPlayer]'
      })], AgoraVideoPlayerDirective);
      /***/
    },

    /***/
    "Q7Aa":
    /*!*************************************************************************!*\
      !*** ./src/app/shared/components/sound-meter/sound-meter.component.css ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function Q7Aa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzb3VuZC1tZXRlci5jb21wb25lbnQuY3NzIn0= */";
      /***/
    },

    /***/
    "QLmE":
    /*!************************************************************************!*\
      !*** ./src/app/shared/components/sound-meter/sound-meter.component.ts ***!
      \************************************************************************/

    /*! exports provided: SoundMeterComponent */

    /***/
    function QLmE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SoundMeterComponent", function () {
        return SoundMeterComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_sound_meter_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./sound-meter.component.html */
      "n6pe");
      /* harmony import */


      var _sound_meter_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./sound-meter.component.css */
      "Q7Aa");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _core_sound_meter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../core/sound-meter */
      "zILU");
      /* harmony import */


      var _services_media_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/media.service */
      "yvDh");

      var SoundMeterComponent = /*#__PURE__*/function () {
        function SoundMeterComponent(mediaService) {
          _classCallCheck(this, SoundMeterComponent);

          this.mediaService = mediaService;
        }

        _createClass(SoundMeterComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this = this;

            this.connect();
            this.subscription = this.mediaService.selectedAudioInputId.subscribe(function (id) {
              if (id) {
                _this.connect(id);
              }
            });
          }
        }, {
          key: "connect",
          value: function connect(deviceId) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var stream;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.mediaService.getMediaStream(_services_media_service__WEBPACK_IMPORTED_MODULE_5__["MediaStreamType"].audio, undefined, undefined, undefined, deviceId);

                    case 2:
                      stream = _context.sent;

                      if (stream) {
                        _context.next = 5;
                        break;
                      }

                      return _context.abrupt("return");

                    case 5:
                      this.soundMeter = new _core_sound_meter__WEBPACK_IMPORTED_MODULE_4__["SoundMeter"](new AudioContext());
                      this.soundMeter.connect(stream, function (instant) {
                        return _this2.meterRef ? _this2.meterRef.nativeElement.value = instant : null;
                      }, function (error) {
                        return console.debug('navigator.MediaDevices.getUserMedia error: ', error.message, error.name);
                      });

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var _a;

            if (this.soundMeter) {
              this.soundMeter.context.close();
            }

            (_a = this.subscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
          }
        }]);

        return SoundMeterComponent;
      }();

      SoundMeterComponent.ctorParameters = function () {
        return [{
          type: _services_media_service__WEBPACK_IMPORTED_MODULE_5__["MediaService"]
        }];
      };

      SoundMeterComponent.propDecorators = {
        meterRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ["meter"]
        }]
      };
      SoundMeterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-sound-meter',
        template: _raw_loader_sound_meter_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_sound_meter_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SoundMeterComponent);
      /***/
    },

    /***/
    "R8Lu":
    /*!*****************************************************************************************!*\
      !*** ./src/app/shared/components/meeting-participant/meeting-participant.component.css ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function R8Lu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".view-container {\r\n    position: relative;\r\n    width: 100%;\r\n    padding-top: 75%;\r\n}\r\n\r\n.video {\r\n    background-color: black;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: .5rem;\r\n    overflow: hidden;\r\n}\r\n\r\n.control-container {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.mic-status {\r\n    position: absolute;\r\n    top: 5px;\r\n    left: 5px;\r\n    width: 32px;\r\n    height: 32px;\r\n}\r\n\r\n.sound-meter {\r\n    position: absolute;\r\n    bottom: 5px;\r\n    left: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lZXRpbmctcGFydGljaXBhbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVM7QUFDYiIsImZpbGUiOiJtZWV0aW5nLXBhcnRpY2lwYW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmlldy1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogNzUlO1xyXG59XHJcblxyXG4udmlkZW8ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5jb250cm9sLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5taWMtc3RhdHVzIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNXB4O1xyXG4gICAgbGVmdDogNXB4O1xyXG4gICAgd2lkdGg6IDMycHg7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbn1cclxuXHJcbi5zb3VuZC1tZXRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDVweDtcclxuICAgIGxlZnQ6IDVweDtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "RxHp":
    /*!***************************************************************!*\
      !*** ./src/app/pages/meeting-page/meeting-page.component.css ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function RxHp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".views-container {\r\n  margin: 0;\r\n  padding-top: 1rem;\r\n}\r\n\r\n.controls-container {\r\n  width: 100%;\r\n}\r\n\r\n.pinned-container {\r\n  width: 100%;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .pinned-container {\r\n    width: 65%;\r\n  }\r\n}\r\n\r\n.side-container {\r\n  overflow-y: scroll;\r\n}\r\n\r\n.meeting-description-container {\r\n  position: absolute;\r\n  bottom: 0;\r\n  height: 4rem;\r\n  padding: 10px;\r\n  width: 100%;\r\n  background-color: #164598;\r\n  border-top-right-radius: .5rem;\r\n  box-shadow: 5px -5px 10px rgba(0, 0, 0, .35);\r\n}\r\n\r\n.meeting-description-container h4 {\r\n  font-weight: 300;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lZXRpbmctcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBUztFQUNULGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFlBQVk7RUFDWixhQUFhO0VBQ2IsV0FBVztFQUNYLHlCQUF5QjtFQUN6Qiw4QkFBOEI7RUFDOUIsNENBQTRDO0FBQzlDOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6Im1lZXRpbmctcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZpZXdzLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xyXG59XHJcblxyXG4uY29udHJvbHMtY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnBpbm5lZC1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAucGlubmVkLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogNjUlO1xyXG4gIH1cclxufVxyXG5cclxuLnNpZGUtY29udGFpbmVyIHtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbn1cclxuXHJcbi5tZWV0aW5nLWRlc2NyaXB0aW9uLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICBoZWlnaHQ6IDRyZW07XHJcbiAgcGFkZGluZzogMTBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTY0NTk4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAuNXJlbTtcclxuICBib3gtc2hhZG93OiA1cHggLTVweCAxMHB4IHJnYmEoMCwgMCwgMCwgLjM1KTtcclxufVxyXG5cclxuLm1lZXRpbmctZGVzY3JpcHRpb24tY29udGFpbmVyIGg0IHtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcblxyXG4iXX0= */";
      /***/
    },

    /***/
    "SxAu":
    /*!**********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/camera-preview/camera-preview.component.html ***!
      \**********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function SxAu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"camera-container\">\r\n  <div class=\"top-controls-container\">\r\n    <a (click)=\"onShowSettings()\">\r\n      <fa-icon [icon]=\"settingIcon\" class=\"text-white settings\"></fa-icon>\r\n    </a>\r\n    <app-sound-meter *ngIf=\"!isMicrophoneMute\" class=\"sound-meter\"></app-sound-meter>\r\n  </div>\r\n  <h1 [ngClass]=\"{'text-white' : isCameraOff}\" *ngIf=\"isCameraOff\">Camera is off</h1>\r\n  <video *ngIf=\"!isCameraOff\" #camera id=\"camera\"></video>\r\n  <div class=\"webcam-overlay\"></div>\r\n  <div class=\"bottom-controls-container\">\r\n    <app-round-tranparent-icon-button class=\"m-3\" [isActive]=\"isMicrophoneMute\" type=\"toggle\" [activeIcon]=\"microphoneMutedIcon\"\r\n      [inactiveIcon]=\"microphoneIcon\" (onClick)=\"onMicrophoneClicked($event)\">\r\n    </app-round-tranparent-icon-button>\r\n    <app-round-tranparent-icon-button class=\"m-3\" [isActive]=\"isCameraOff\" type=\"toggle\" [activeIcon]=\"cameraOffIcon\" [inactiveIcon]=\"cameraIcon\"\r\n      (onClick)=\"onCameraClicked($event)\">\r\n    </app-round-tranparent-icon-button>\r\n  </div>\r\n</div>\r\n<app-input-output-settings (closed)=\"onCloseSettings()\" *ngIf=\"showSettings\"></app-input-output-settings>\r\n";
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.scss */
      "ynWL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/android-permissions/ngx */
      "WOgW");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var AppComponent = function AppComponent(platform, androidPermissions) {
        _classCallCheck(this, AppComponent);

        platform.ready().then(function () {
          androidPermissions.requestPermissions([androidPermissions.PERMISSION.CAMERA, androidPermissions.PERMISSION.CALL_PHONE, androidPermissions.PERMISSION.RECORD_AUDIO, androidPermissions.PERMISSION.GET_ACCOUNTS, androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE, androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE]);
        });
      };

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]
        }, {
          type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_4__["AndroidPermissions"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "TpVO":
    /*!****************************************************************************************!*\
      !*** ./src/app/shared/components/meeting-participant/meeting-participant.component.ts ***!
      \****************************************************************************************/

    /*! exports provided: MeetingParticipantComponent */

    /***/
    function TpVO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MeetingParticipantComponent", function () {
        return MeetingParticipantComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_meeting_participant_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./meeting-participant.component.html */
      "CmlQ");
      /* harmony import */


      var _meeting_participant_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./meeting-participant.component.css */
      "R8Lu");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons */
      "wHSu");

      var MeetingParticipantComponent = /*#__PURE__*/function () {
        function MeetingParticipantComponent() {
          _classCallCheck(this, MeetingParticipantComponent);

          this.pinned = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.micMuteIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faMicrophoneSlash"];
          this.controlsVisible = false;
          this.micStatus = false;
          this.camStatus = false;
        }

        _createClass(MeetingParticipantComponent, [{
          key: "user",
          set: function set(value) {
            var _a, _b, _c, _d, _e, _f;

            this.myUser = value;

            if (value.type === 'remote') {
              this.trackoptions = {
                videoTrack: (_a = value.user) === null || _a === void 0 ? void 0 : _a.videoTrack,
                audioTrack: (_b = value.user) === null || _b === void 0 ? void 0 : _b.audioTrack
              };
              this.micStatus = !!((_c = value.user) === null || _c === void 0 ? void 0 : _c.hasAudio);
              this.camStatus = !!((_d = value.user) === null || _d === void 0 ? void 0 : _d.hasVideo);

              if (value.user && value.user.audioTrack) {
                this.audioStream = (_f = (_e = value.user) === null || _e === void 0 ? void 0 : _e.audioTrack) === null || _f === void 0 ? void 0 : _f.getMediaStream();
              }
            } else {
              this.trackoptions = {
                mediaTrack: value.mediaTrack
              };
              this.micStatus = false;
              this.camStatus = false;
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "showControls",
          value: function showControls(value) {
            this.controlsVisible = value;
          }
        }, {
          key: "isRemote",
          value: function isRemote() {
            var _a;

            return ((_a = this.myUser) === null || _a === void 0 ? void 0 : _a.type) === 'remote';
          }
        }, {
          key: "onCamOff",
          value: function onCamOff() {
            var _a, _b, _c;

            if (!((_a = this.trackoptions) === null || _a === void 0 ? void 0 : _a.mediaTrack)) {
              return;
            }

            this.camStatus = !this.camStatus;
            this.camStatus ? (_b = this.trackoptions.mediaTrack) === null || _b === void 0 ? void 0 : _b.cameraOn() : (_c = this.trackoptions.mediaTrack) === null || _c === void 0 ? void 0 : _c.cameraOff();
          }
        }, {
          key: "onMicMute",
          value: function onMicMute() {
            var _a, _b, _c;

            if (!((_a = this.trackoptions) === null || _a === void 0 ? void 0 : _a.mediaTrack)) {
              return;
            }

            this.micStatus = !this.micStatus;
            this.micStatus ? (_b = this.trackoptions.mediaTrack) === null || _b === void 0 ? void 0 : _b.microphoneUnMute() : (_c = this.trackoptions.mediaTrack) === null || _c === void 0 ? void 0 : _c.microphoneMute();
          }
        }, {
          key: "onPin",
          value: function onPin() {
            this.pinned.emit(this.myUser);
          }
        }]);

        return MeetingParticipantComponent;
      }();

      MeetingParticipantComponent.ctorParameters = function () {
        return [];
      };

      MeetingParticipantComponent.propDecorators = {
        pinned: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        user: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      MeetingParticipantComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-meeting-participant',
        template: _raw_loader_meeting_participant_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_meeting_participant_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], MeetingParticipantComponent);
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\r\n  <ion-router-outlet></ion-router-outlet>\r\n</ion-app>\r\n";
      /***/
    },

    /***/
    "WRDt":
    /*!*********************************************************************************************!*\
      !*** ./src/app/shared/components/input-output-settings/input-output-settings.component.css ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function WRDt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".screen {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background-color: rgba(0, 0, 0, .65);\r\n    height: 100vh;\r\n    width: 100vw;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 100;\r\n}\r\n\r\n.container {\r\n    position: relative;\r\n    background-color: white;\r\n    border-radius: .5rem;\r\n    width: 80%;\r\n    max-width: 1000px;\r\n    z-index: 101;\r\n}\r\n\r\na {\r\n    cursor: pointer;\r\n}\r\n\r\n.close-button {\r\n    position: absolute;\r\n    top: .5rem;\r\n    right: 1rem;\r\n    color: rgb(128, 128, 128);\r\n    cursor: pointer;\r\n}\r\n\r\n.settings-container {\r\n    height: 20rem;\r\n    width: 100%;\r\n    border-left: solid  rgb(186, 186, 186) 1px;\r\n}\r\n\r\n.setting-title {\r\n    font-size: 1rem;\r\n    font-weight: 400;\r\n    color: darkcyan;\r\n}\r\n\r\n.camera-container {\r\n    height: 50px;\r\n    width: 80px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0LW91dHB1dC1zZXR0aW5ncy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsb0NBQW9DO0lBQ3BDLGFBQWE7SUFDYixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsZUFBZTtBQUNuQjs7QUFDQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZiIsImZpbGUiOiJpbnB1dC1vdXRwdXQtc2V0dGluZ3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY3JlZW4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjY1KTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgei1pbmRleDogMTAwO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XHJcbiAgICB6LWluZGV4OiAxMDE7XHJcbn1cclxuXHJcbmEge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY2xvc2UtYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLjVyZW07XHJcbiAgICByaWdodDogMXJlbTtcclxuICAgIGNvbG9yOiByZ2IoMTI4LCAxMjgsIDEyOCk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnNldHRpbmdzLWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDIwcmVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItbGVmdDogc29saWQgIHJnYigxODYsIDE4NiwgMTg2KSAxcHg7XHJcbn1cclxuXHJcbi5zZXR0aW5nLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogZGFya2N5YW47XHJcbn1cclxuXHJcbi5jYW1lcmEtY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG59Il19 */";
      /***/
    },

    /***/
    "Wr82":
    /*!**************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/round-tranparent-icon-button/round-tranparent-icon-button.component.html ***!
      \**************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Wr82(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<a (click)=\"click()\">\r\n  <div class=\"container\" [ngStyle]=\"isActive ? buttonStyle.active : {}\">\r\n    <fa-icon\r\n      [icon]=\"isActive ? activeIcon : inactiveIcon\"\r\n      [styles]=\"isActive ? activeIconStyle : inactiveIconStyle\"\r\n    ></fa-icon>\r\n  </div>\r\n</a>\r\n";
      /***/
    },

    /***/
    "Z8eA":
    /*!*******************************************************************************!*\
      !*** ./src/app/shared/components/camera-preview/camera-preview.component.css ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function Z8eA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "a {\r\n  cursor: pointer;\r\n}\r\n.sound-meter {\r\n  position: absolute;\r\n  top: 10px;\r\n  left: 20px;\r\n}\r\n.settings {\r\n  position: absolute;\r\n  top: 20px;\r\n  right: 20px;\r\n  cursor: pointer;\r\n}\r\n.camera-container {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: relative;\r\n  border-radius: 0.5rem;\r\n  overflow: hidden;\r\n  width: 100%;\r\n  height: 380px;\r\n  background-color: black;\r\n}\r\n.camera-off {\r\n  text-align: center;\r\n  height: 400px;\r\n  width: 531px;\r\n  border-radius: 10px;\r\n  background-color: black;\r\n  color: white;\r\n  -webkit-linear-gradient: (\r\n    top,\r\n    rgba(0, 0, 0, 0.7) 0,\r\n    rgba(0, 0, 0, 0.3) 50%,\r\n    rgba(0, 0, 0, 0) 100%\r\n  );\r\n}\r\n.webcam-overlay {\r\n  background: linear-gradient(\r\n    rgba(0, 0, 0, 0.65),\r\n    transparent 20%,\r\n    transparent 80%,\r\n    rgba(0, 0, 0, 0.65) 100%\r\n  );\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 2;\r\n}\r\n.bottom-controls-container {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  position: absolute;\r\n  width: 100%;\r\n  bottom: 0;\r\n  z-index: 4;\r\n  margin-bottom: 1rem;\r\n}\r\n.top-controls-container {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  position: absolute;\r\n  width: 100%;\r\n  top: 0;\r\n  z-index: 4;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbWVyYS1wcmV2aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7QUFDWjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWjs7Ozs7R0FLQztBQUNIO0FBRUE7RUFDRTs7Ozs7R0FLQztFQUNELGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsTUFBTTtFQUNOLFdBQVc7RUFDWCxZQUFZO0VBQ1osVUFBVTtBQUNaO0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQVM7RUFDVCxVQUFVO0VBQ1YsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLE1BQU07RUFDTixVQUFVO0VBQ1YsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6ImNhbWVyYS1wcmV2aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnNvdW5kLW1ldGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxMHB4O1xyXG4gIGxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbi5zZXR0aW5ncyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMjBweDtcclxuICByaWdodDogMjBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jYW1lcmEtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAzODBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmNhbWVyYS1vZmYge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG4gIHdpZHRoOiA1MzFweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICAtd2Via2l0LWxpbmVhci1ncmFkaWVudDogKFxyXG4gICAgdG9wLFxyXG4gICAgcmdiYSgwLCAwLCAwLCAwLjcpIDAsXHJcbiAgICByZ2JhKDAsIDAsIDAsIDAuMykgNTAlLFxyXG4gICAgcmdiYSgwLCAwLCAwLCAwKSAxMDAlXHJcbiAgKTtcclxufVxyXG5cclxuLndlYmNhbS1vdmVybGF5IHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICByZ2JhKDAsIDAsIDAsIDAuNjUpLFxyXG4gICAgdHJhbnNwYXJlbnQgMjAlLFxyXG4gICAgdHJhbnNwYXJlbnQgODAlLFxyXG4gICAgcmdiYSgwLCAwLCAwLCAwLjY1KSAxMDAlXHJcbiAgKTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5ib3R0b20tY29udHJvbHMtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvdHRvbTogMDtcclxuICB6LWluZGV4OiA0O1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi50b3AtY29udHJvbHMtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiA0O1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/android-permissions/ngx */
      "WOgW");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]],
        providers: [{
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
        }, _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_7__["AndroidPermissions"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "blt5":
    /*!**********************************************************************************!*\
      !*** ./src/app/shared/components/meeting-controls/meeting-controls.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: MeetingControlsComponent */

    /***/
    function blt5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MeetingControlsComponent", function () {
        return MeetingControlsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_meeting_controls_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./meeting-controls.component.html */
      "yyA1");
      /* harmony import */


      var _meeting_controls_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./meeting-controls.component.css */
      "zfsz");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons */
      "wHSu");

      var MeetingControlsComponent = /*#__PURE__*/function () {
        function MeetingControlsComponent() {
          _classCallCheck(this, MeetingControlsComponent);

          this.hangUpIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faPhoneAlt"];
          this.micIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faMicrophoneAlt"];
          this.micOffIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faMicrophoneAltSlash"];
          this.camIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faVideo"];
          this.camOffIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faVideoSlash"];
          this.pinIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faThumbtack"];
          this.micMuted = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.cameraMuted = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.hangedUp = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.pinned = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        }

        _createClass(MeetingControlsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onMicMute",
          value: function onMicMute(value) {
            this.micMuted.emit(value);
          }
        }, {
          key: "onCameraMute",
          value: function onCameraMute(value) {
            this.cameraMuted.emit(value);
          }
        }, {
          key: "onHangUp",
          value: function onHangUp() {
            this.hangedUp.emit();
          }
        }, {
          key: "onPin",
          value: function onPin(value) {
            this.pinned.emit(value);
          }
        }]);

        return MeetingControlsComponent;
      }();

      MeetingControlsComponent.ctorParameters = function () {
        return [];
      };

      MeetingControlsComponent.propDecorators = {
        micMuted: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        cameraMuted: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        hangedUp: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        pinned: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      MeetingControlsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-meeting-controls',
        template: _raw_loader_meeting_controls_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_meeting_controls_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], MeetingControlsComponent);
      /***/
    },

    /***/
    "hrsj":
    /*!**************************************************!*\
      !*** ./src/app/shared/services/token.service.ts ***!
      \**************************************************/

    /*! exports provided: tokenLifeTime, TokenService */

    /***/
    function hrsj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "tokenLifeTime", function () {
        return tokenLifeTime;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TokenService", function () {
        return TokenService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! uuid */
      "4USb");

      var tokenLifeTime = 24 * 60 * 6;
      var url = 'https://ngx-agora-sdk-ng.herokuapp.com/access_token';

      var TokenService = /*#__PURE__*/function () {
        function TokenService(httpClinet) {
          _classCallCheck(this, TokenService);

          this.httpClinet = httpClinet;
          this.token = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        }

        _createClass(TokenService, [{
          key: "getToken",
          value: function getToken(channelName) {
            var _this3 = this;

            this.httpClinet.get(url, {
              params: {
                channel: channelName
              }
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(3), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError)).subscribe(function (token) {
              _this3.token.next(token.token);
            });
          }
        }, {
          key: "getChannel",
          value: function getChannel(link) {
            var params = link.split('@');

            if (!Object(uuid__WEBPACK_IMPORTED_MODULE_5__["validate"])(params[0]) || isNaN(parseInt(params[2], 10)) || isNaN(parseInt(params[3], 10))) {
              return {
                error: 'Your Link is not Valid!'
              };
            }

            if (Date.now() > (+params[2] + +params[3]) * 1000) {
              return {
                error: 'Your Link is Expired!'
              };
            }

            return {
              channel: params[1]
            };
          }
        }, {
          key: "getLink",
          value: function getLink(channelName) {
            return "".concat(Object(uuid__WEBPACK_IMPORTED_MODULE_5__["v4"])(), "@").concat(channelName, "@").concat(tokenLifeTime, "@").concat(Math.floor(Date.now() / 1000));
          }
        }, {
          key: "handleError",
          value: function handleError(error) {
            if (error.error instanceof ErrorEvent) {
              // A client-side or network error occurred. Handle it accordingly.
              console.error('An error occurred:', error.error.message);
            } else {
              // The backend returned an unsuccessful response code.
              // The response body may contain clues as to what went wrong.
              console.error("Backend returned code ".concat(error.status, ", ") + "body was: ".concat(error.error));
            } // Return an observable with a user-facing error message.


            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Something bad happened; please try again later.');
          }
        }]);

        return TokenService;
      }();

      TokenService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      TokenService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], TokenService);
      /***/
    },

    /***/
    "j61v":
    /*!**********************************************************************************************************!*\
      !*** ./src/app/shared/components/round-tranparent-icon-button/round-tranparent-icon-button.component.ts ***!
      \**********************************************************************************************************/

    /*! exports provided: RoundTranparentIconButtonComponent */

    /***/
    function j61v(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RoundTranparentIconButtonComponent", function () {
        return RoundTranparentIconButtonComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_round_tranparent_icon_button_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./round-tranparent-icon-button.component.html */
      "Wr82");
      /* harmony import */


      var _round_tranparent_icon_button_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./round-tranparent-icon-button.component.css */
      "qFAF");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var RoundTranparentIconButtonComponent = /*#__PURE__*/function () {
        function RoundTranparentIconButtonComponent() {
          _classCallCheck(this, RoundTranparentIconButtonComponent);

          this.activeColor = 'red';
          this.type = 'normal';
          this.activeIconStyle = {
            stroke: 'white',
            color: 'white'
          };
          this.inactiveIconStyle = {
            stroke: 'white',
            color: 'white'
          };
          this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.isActive = false;
          this.buttonStyle = {
            active: {
              backgroundColor: this.activeColor
            }
          };
        }

        _createClass(RoundTranparentIconButtonComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "click",
          value: function click() {
            if (this.type === 'toggle') {
              this.isActive = !this.isActive;
            }

            this.onClick.emit(this.isActive);
          }
        }]);

        return RoundTranparentIconButtonComponent;
      }();

      RoundTranparentIconButtonComponent.ctorParameters = function () {
        return [];
      };

      RoundTranparentIconButtonComponent.propDecorators = {
        activeColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        activeIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        activeIconStyle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        inactiveIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        inactiveIconStyle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        isActive: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      RoundTranparentIconButtonComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-round-tranparent-icon-button',
        template: _raw_loader_round_tranparent_icon_button_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_round_tranparent_icon_button_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], RoundTranparentIconButtonComponent);
      /***/
    },

    /***/
    "jsH7":
    /*!************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/meeting-preview/meeting-preview.component.html ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function jsH7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"page\">\r\n  <div class=\"d-flex flex-row flex-wrap w-100 justify-content-center\">\r\n    <app-camera-preview></app-camera-preview>\r\n    <div class=\"meeting-actions-container d-flex flex-column align-items-center w-25 justify-content-md-center mt-sm-5\">\r\n      <div class=\"meeting-info\">\r\n        <h5>Meeting Ready</h5>\r\n        <form [formGroup]=\"connectionInfoForm\" (ngSubmit)=\"onJoinMeeting()\">\r\n          <div class=\"input-group input-group-sm mb-3\">\r\n            <div class=\"input-group-prepend\">\r\n              <span class=\"input-group-text\">Channel</span>\r\n            </div>\r\n            <input type=\"text\" class=\"form-control\" formControlName=\"channel\">\r\n          </div>\r\n          <div class=\"input-group input-group-sm mb-3\">\r\n            <div class=\"input-group-prepend\">\r\n              <span class=\"input-group-text\">Invite Code</span>\r\n            </div>\r\n            <input type=\"text\" class=\"form-control\" formControlName=\"link\">\r\n          </div>\r\n          <div class=\"button-container\">\r\n            <ion-button color=\"primary\" type=\"submit\">Join Now</ion-button>\r\n            <!-- <button type=\"submit\" class=\"btn btn-primary\">Join Now</button> -->\r\n          </div>\r\n        </form>\r\n      </div> \r\n    </div>\r\n  </div>\r\n</div>";
      /***/
    },

    /***/
    "kAKt":
    /*!***********************************************************************************!*\
      !*** ./src/app/shared/components/sound-visualizer/sound-visualizer.component.css ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function kAKt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".lines {\r\n  background-color: yellow;\r\n  width: 5px;\r\n  border-top-left-radius: 2px;\r\n  border-top-right-radius: 2px;\r\n  margin: 0 1px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvdW5kLXZpc3VhbGl6ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUF3QjtFQUN4QixVQUFVO0VBQ1YsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixhQUFhO0FBQ2YiLCJmaWxlIjoic291bmQtdmlzdWFsaXplci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpbmVzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XHJcbiAgd2lkdGg6IDVweDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAycHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDJweDtcclxuICBtYXJnaW46IDAgMXB4O1xyXG59Il19 */";
      /***/
    },

    /***/
    "kLfG":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function kLfG(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["dUtr", "common", 0],
        "./ion-alert.entry.js": ["Q8AI", "common", 1],
        "./ion-app_8.entry.js": ["hgI1", "common", 2],
        "./ion-avatar_3.entry.js": ["CfoV", "common", 3],
        "./ion-back-button.entry.js": ["Nt02", "common", 4],
        "./ion-backdrop.entry.js": ["Q2Bp", 5],
        "./ion-button_2.entry.js": ["0Pbj", "common", 6],
        "./ion-card_5.entry.js": ["ydQj", "common", 7],
        "./ion-checkbox.entry.js": ["4fMi", "common", 8],
        "./ion-chip.entry.js": ["czK9", "common", 9],
        "./ion-col_3.entry.js": ["/CAe", 10],
        "./ion-datetime_3.entry.js": ["WgF3", "common", 11],
        "./ion-fab_3.entry.js": ["uQcF", "common", 12],
        "./ion-img.entry.js": ["wHD8", 13],
        "./ion-infinite-scroll_2.entry.js": ["2lz6", 14],
        "./ion-input.entry.js": ["ercB", "common", 15],
        "./ion-item-option_3.entry.js": ["MGMP", "common", 16],
        "./ion-item_8.entry.js": ["9bur", "common", 17],
        "./ion-loading.entry.js": ["cABk", "common", 18],
        "./ion-menu_3.entry.js": ["kyFE", "common", 19],
        "./ion-modal.entry.js": ["TvZU", "common", 20],
        "./ion-nav_2.entry.js": ["vnES", "common", 21],
        "./ion-popover.entry.js": ["qCuA", "common", 22],
        "./ion-progress-bar.entry.js": ["0tOe", "common", 23],
        "./ion-radio_2.entry.js": ["h11V", "common", 24],
        "./ion-range.entry.js": ["XGij", "common", 25],
        "./ion-refresher_2.entry.js": ["nYbb", "common", 26],
        "./ion-reorder_2.entry.js": ["smMY", "common", 27],
        "./ion-ripple-effect.entry.js": ["STjf", 28],
        "./ion-route_4.entry.js": ["k5eQ", "common", 29],
        "./ion-searchbar.entry.js": ["OR5t", "common", 30],
        "./ion-segment_2.entry.js": ["fSgp", "common", 31],
        "./ion-select_3.entry.js": ["lfGF", "common", 32],
        "./ion-slide_2.entry.js": ["5xYT", 33],
        "./ion-spinner.entry.js": ["nI0H", "common", 34],
        "./ion-split-pane.entry.js": ["NAQR", 35],
        "./ion-tab-bar_2.entry.js": ["knkW", "common", 36],
        "./ion-tab_2.entry.js": ["TpdJ", "common", 37],
        "./ion-text.entry.js": ["ISmu", "common", 38],
        "./ion-textarea.entry.js": ["U7LX", "common", 39],
        "./ion-toast.entry.js": ["L3sA", "common", 40],
        "./ion-toggle.entry.js": ["IUOf", "common", 41],
        "./ion-virtual-scroll.entry.js": ["8Mb5", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "kLfG";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "kNOy":
    /*!**********************************************************************************!*\
      !*** ./src/app/shared/components/sound-visualizer/sound-visualizer.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: SoundVisualizerComponent */

    /***/
    function kNOy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SoundVisualizerComponent", function () {
        return SoundVisualizerComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_sound_visualizer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./sound-visualizer.component.html */
      "J8WR");
      /* harmony import */


      var _sound_visualizer_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./sound-visualizer.component.css */
      "kAKt");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _core_sound_meter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../core/sound-meter */
      "zILU");
      /* harmony import */


      var _services_media_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/media.service */
      "yvDh");

      var bars = 4;

      var SoundVisualizerComponent = /*#__PURE__*/function () {
        function SoundVisualizerComponent(mediaService) {
          _classCallCheck(this, SoundVisualizerComponent);

          this.mediaService = mediaService;
          this.values = new Array(bars);
          this.index = 0;
          this.lastValue = 0;
          this.values.fill(3);
        }

        _createClass(SoundVisualizerComponent, [{
          key: "mediaStream",
          set: function set(value) {
            if (value) {
              this.connect(value);
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "connect",
          value: function connect(stream) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this4 = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.soundMeter = new _core_sound_meter__WEBPACK_IMPORTED_MODULE_4__["SoundMeter"](new AudioContext());
                      this.soundMeter.connect(stream, function (instant) {
                        return _this4.updateVisualizer(instant);
                      }, function (error) {
                        if (error) {
                          console.error('sound meter error: ', error.message, error.name);
                        }
                      });

                    case 2:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.soundMeter) {
              this.soundMeter.context.close();
            }
          }
        }, {
          key: "updateVisualizer",
          value: function updateVisualizer(value) {
            var _this5 = this;

            if (value !== this.lastValue) {
              this.index++;

              if (this.index > bars - 1) {
                this.index = 0;
              }

              this.values[this.index] = Math.floor(value * 30) + 3;
              this.lastValue = value;
              setTimeout(function () {
                _this5.values.fill(3);
              }, 1000);
            }
          }
        }]);

        return SoundVisualizerComponent;
      }();

      SoundVisualizerComponent.ctorParameters = function () {
        return [{
          type: _services_media_service__WEBPACK_IMPORTED_MODULE_5__["MediaService"]
        }];
      };

      SoundVisualizerComponent.propDecorators = {
        mediaStream: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      SoundVisualizerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-sound-visualizer',
        template: _raw_loader_sound_visualizer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_sound_visualizer_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SoundVisualizerComponent);
      /***/
    },

    /***/
    "n6pe":
    /*!****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/sound-meter/sound-meter.component.html ***!
      \****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function n6pe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<meter #meter high=\"0.25\" max=\"1\" value=\"0\"></meter>";
      /***/
    },

    /***/
    "qFAF":
    /*!***********************************************************************************************************!*\
      !*** ./src/app/shared/components/round-tranparent-icon-button/round-tranparent-icon-button.component.css ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function qFAF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".container {\r\n    display: flex;\r\n    border: solid 2px white;\r\n    width: 3.5rem;\r\n    height: 3.5rem;\r\n    border-radius: 50%;\r\n    background-color: transparent;\r\n    overflow: hidden;\r\n    justify-content: center;\r\n    align-items: center;\r\n    transition: all .5s;\r\n    cursor: pointer;\r\n}\r\n\r\n.container:hover {\r\n    background-color: rgba(255,255,255, .65);\r\n}\r\n\r\na {\r\n    cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdW5kLXRyYW5wYXJlbnQtaWNvbi1idXR0b24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsNkJBQTZCO0lBQzdCLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJyb3VuZC10cmFucGFyZW50LWljb24tYnV0dG9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBib3JkZXI6IHNvbGlkIDJweCB3aGl0ZTtcclxuICAgIHdpZHRoOiAzLjVyZW07XHJcbiAgICBoZWlnaHQ6IDMuNXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuNXM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jb250YWluZXI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwgLjY1KTtcclxufVxyXG5cclxuYSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "sXV4":
    /*!**************************************************************!*\
      !*** ./src/app/pages/meeting-page/meeting-page.component.ts ***!
      \**************************************************************/

    /*! exports provided: MeetingPageComponent */

    /***/
    function sXV4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MeetingPageComponent", function () {
        return MeetingPageComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_meeting_page_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./meeting-page.component.html */
      "7hRC");
      /* harmony import */


      var _meeting_page_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./meeting-page.component.css */
      "RxHp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var ngx_agora_sdk_ng__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-agora-sdk-ng */
      "knEG");
      /* harmony import */


      var _shared_services_media_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../shared/services/media.service */
      "yvDh");
      /* harmony import */


      var _shared_services_token_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../shared/services/token.service */
      "hrsj");

      var MeetingPageComponent = /*#__PURE__*/function () {
        function MeetingPageComponent(activatedRoute, agoraService, mediaService, tokenService, router) {
          _classCallCheck(this, MeetingPageComponent);

          this.activatedRoute = activatedRoute;
          this.agoraService = agoraService;
          this.mediaService = mediaService;
          this.tokenService = tokenService;
          this.router = router;
          this.link = '';
          this.channel = '';
          this.subscriptions = [];
          this.userList = [];
          this.audioInId = '';
          this.videoInId = '';
          this.audioOutId = '';
          this.token = '';
        }

        _createClass(MeetingPageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this6 = this;

            Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["forkJoin"])([this.activatedRoute.queryParams.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1)), this.mediaService.selectedAudioInputId.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1)), this.mediaService.selectedAudioOutputId.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1)), this.mediaService.selectedVideoInputId.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1))]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1)).subscribe(function (_ref) {
              var _ref2 = _slicedToArray(_ref, 4),
                  params = _ref2[0],
                  aInId = _ref2[1],
                  aOutId = _ref2[2],
                  vInId = _ref2[3];

              _this6.link = params.link;
              _this6.channel = params.channel;

              if (_this6.link) {
                var result = _this6.tokenService.getChannel(_this6.link);

                if (result.error) {
                  alert(result.error);

                  _this6.router.navigate(['/..']);

                  return;
                }

                _this6.channel = result.channel;
              }

              _this6.tokenService.getToken(_this6.channel);

              _this6.audioInId = aInId;
              _this6.videoInId = vInId;
              _this6.audioOutId = aOutId;
            });
            var tokenSub = this.tokenService.token.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1)).subscribe(function (token) {
              _this6.token = token;

              _this6.joinVideo();
            });
            this.subscriptions.push(tokenSub);
            var remoteUserLeaveSubs = this.agoraService.onRemoteUserLeft().subscribe(function (leftuser) {
              var _a;

              _this6.userList = _this6.userList.filter(function (user) {
                var _a;

                return ((_a = user.user) === null || _a === void 0 ? void 0 : _a.uid) !== leftuser.user.uid;
              });

              if (_this6.pinnedUser && ((_a = _this6.pinnedUser.user) === null || _a === void 0 ? void 0 : _a.uid) && _this6.pinnedUser.user.uid === leftuser.user.uid) {
                _this6.pinnedUser = null;
              }
            });
            this.subscriptions.push(remoteUserLeaveSubs);
            var remoteUserChangeSubs = this.agoraService.onRemoteUsersStatusChange().subscribe(function (status) {
              var _a;

              switch (status.connectionState) {
                case 'CONNECTED':
                  if (!_this6.userList.find(function (user) {
                    var _a;

                    return ((_a = user.user) === null || _a === void 0 ? void 0 : _a.uid) === status.user.uid;
                  })) {
                    _this6.userList.push({
                      type: 'remote',
                      user: status.user
                    });
                  }

                  break;

                case 'DISCONNECTED':
                case 'DISCONNECTING':
                case 'RECONNECTING':
                  var currentUserIndex = _this6.userList.findIndex(function (user) {
                    var _a;

                    return ((_a = user.user) === null || _a === void 0 ? void 0 : _a.uid) === status.user.uid;
                  });

                  if (currentUserIndex >= 0) {
                    _this6.userList[currentUserIndex] = {
                      type: 'remote',
                      user: status.user
                    };

                    if (_this6.pinnedUser && ((_a = _this6.pinnedUser.user) === null || _a === void 0 ? void 0 : _a.uid) && _this6.pinnedUser.user.uid === status.user.uid) {
                      _this6.pinnedUser = {
                        type: 'remote',
                        user: status.user
                      };
                    }
                  }

                  break;
              }
            });
            this.subscriptions.push(remoteUserChangeSubs);
            var localUserJoinedSubs = this.agoraService.onLocalUserJoined().subscribe(function (track) {
              _this6.userList.push({
                type: 'local',
                mediaTrack: track.track
              });
            });
            this.subscriptions.push(localUserJoinedSubs);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var _iterator = _createForOfIteratorHelper(this.subscriptions),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var sub = _step.value;
                sub.unsubscribe();
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        }, {
          key: "joinVideo",
          value: function joinVideo() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.agoraService.join(this.channel, this.token).WithCameraAndMicrophone(this.audioInId, this.videoInId).Apply();

                    case 2:
                      this.mediaTrack = _context3.sent;

                    case 3:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "onLocalMic",
          value: function onLocalMic(value) {
            var _a, _b;

            !value ? (_a = this.mediaTrack) === null || _a === void 0 ? void 0 : _a.microphoneUnMute() : (_b = this.mediaTrack) === null || _b === void 0 ? void 0 : _b.microphoneMute();
          }
        }, {
          key: "onLocalCamera",
          value: function onLocalCamera(value) {
            var _a, _b;

            !value ? (_a = this.mediaTrack) === null || _a === void 0 ? void 0 : _a.cameraOn() : (_b = this.mediaTrack) === null || _b === void 0 ? void 0 : _b.cameraOff();
          }
        }, {
          key: "onLocalPinned",
          value: function onLocalPinned(value) {
            var localuser = this.userList.find(function (user) {
              return user.type === 'local';
            });

            if (localuser) {
              this.onPin(localuser);
            }
          }
        }, {
          key: "onLocalLeave",
          value: function onLocalLeave() {
            var _a;

            this.agoraService.leave();
            (_a = this.mediaTrack) === null || _a === void 0 ? void 0 : _a.stop();
            this.router.navigate(['/..']);
          }
        }, {
          key: "onPin",
          value: function onPin(user) {
            var _a, _b, _c, _d, _e;

            if (user.type === 'local') {
              if (this.pinnedUser && ((_a = this.pinnedUser) === null || _a === void 0 ? void 0 : _a.type) === 'local') {
                this.pinnedUser = null;
                return;
              }

              this.pinnedUser = user;
              return;
            }

            if (((_b = this.pinnedUser) === null || _b === void 0 ? void 0 : _b.type) === 'local') {
              this.pinnedUser = user;
              return;
            }

            if (((_d = (_c = this.pinnedUser) === null || _c === void 0 ? void 0 : _c.user) === null || _d === void 0 ? void 0 : _d.uid) === ((_e = user.user) === null || _e === void 0 ? void 0 : _e.uid)) {
              this.pinnedUser = null;
            } else {
              this.pinnedUser = user;
            }
          }
        }, {
          key: "getUnpinnedUsers",
          value: function getUnpinnedUsers() {
            var _this7 = this;

            var _a;

            if (((_a = this.pinnedUser) === null || _a === void 0 ? void 0 : _a.type) === 'local') {
              return this.userList.filter(function (user) {
                return user.type !== 'local';
              });
            }

            return this.userList.filter(function (user) {
              var _a, _b, _c;

              return ((_a = user.user) === null || _a === void 0 ? void 0 : _a.uid) !== ((_c = (_b = _this7.pinnedUser) === null || _b === void 0 ? void 0 : _b.user) === null || _c === void 0 ? void 0 : _c.uid);
            });
          }
        }]);

        return MeetingPageComponent;
      }();

      MeetingPageComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: ngx_agora_sdk_ng__WEBPACK_IMPORTED_MODULE_7__["NgxAgoraSdkNgService"]
        }, {
          type: _shared_services_media_service__WEBPACK_IMPORTED_MODULE_8__["MediaService"]
        }, {
          type: _shared_services_token_service__WEBPACK_IMPORTED_MODULE_9__["TokenService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      MeetingPageComponent.propDecorators = {
        localVideo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['localVideo', {
            "static": true
          }]
        }]
      };
      MeetingPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-meeting-page',
        template: _raw_loader_meeting_page_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_meeting_page_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], MeetingPageComponent);
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var ngx_agora_sdk_ng__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-agora-sdk-ng */
      "knEG");
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      "6NWb");
      /* harmony import */


      var _pages_meeting_preview_meeting_preview_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./pages/meeting-preview/meeting-preview.component */
      "zP2K");
      /* harmony import */


      var _shared_components_round_tranparent_icon_button_round_tranparent_icon_button_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./shared/components/round-tranparent-icon-button/round-tranparent-icon-button.component */
      "j61v");
      /* harmony import */


      var _shared_components_input_output_settings_input_output_settings_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./shared/components/input-output-settings/input-output-settings.component */
      "wn2D");
      /* harmony import */


      var _shared_components_sound_meter_sound_meter_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./shared/components/sound-meter/sound-meter.component */
      "QLmE");
      /* harmony import */


      var _shared_components_camera_preview_camera_preview_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./shared/components/camera-preview/camera-preview.component */
      "va/j");
      /* harmony import */


      var _pages_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./pages/welcome/welcome.component */
      "+j1i");
      /* harmony import */


      var _pages_meeting_page_meeting_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./pages/meeting-page/meeting-page.component */
      "sXV4");
      /* harmony import */


      var _shared_directives_agora_video_player_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./shared/directives/agora-video-player.directive */
      "OAHU");
      /* harmony import */


      var _shared_components_meeting_controls_meeting_controls_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./shared/components/meeting-controls/meeting-controls.component */
      "blt5");
      /* harmony import */


      var _shared_components_meeting_participant_meeting_participant_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./shared/components/meeting-participant/meeting-participant.component */
      "TpVO");
      /* harmony import */


      var _shared_components_meeting_participant_controls_meeting_participant_controls_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./shared/components/meeting-participant-controls/meeting-participant-controls.component */
      "I0zc");
      /* harmony import */


      var _shared_components_sound_visualizer_sound_visualizer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./shared/components/sound-visualizer/sound-visualizer.component */
      "kNOy");

      var routes = [{
        path: '',
        redirectTo: 'welcome',
        pathMatch: 'full'
      }, {
        path: 'welcome',
        component: _pages_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_13__["WelcomeComponent"]
      }, {
        path: 'preview',
        component: _pages_meeting_preview_meeting_preview_component__WEBPACK_IMPORTED_MODULE_8__["MeetingPreviewComponent"]
      }, {
        path: 'settings',
        component: _shared_components_input_output_settings_input_output_settings_component__WEBPACK_IMPORTED_MODULE_10__["InputOutputSettingsComponent"]
      }, {
        path: 'meeting',
        component: _pages_meeting_page_meeting_page_component__WEBPACK_IMPORTED_MODULE_14__["MeetingPageComponent"]
      } // {
      //   path: '',
      //   loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
      // }
      ];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_pages_meeting_preview_meeting_preview_component__WEBPACK_IMPORTED_MODULE_8__["MeetingPreviewComponent"], _shared_components_round_tranparent_icon_button_round_tranparent_icon_button_component__WEBPACK_IMPORTED_MODULE_9__["RoundTranparentIconButtonComponent"], _shared_components_input_output_settings_input_output_settings_component__WEBPACK_IMPORTED_MODULE_10__["InputOutputSettingsComponent"], _shared_components_sound_meter_sound_meter_component__WEBPACK_IMPORTED_MODULE_11__["SoundMeterComponent"], _shared_components_camera_preview_camera_preview_component__WEBPACK_IMPORTED_MODULE_12__["CameraPreviewComponent"], _pages_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_13__["WelcomeComponent"], _pages_meeting_page_meeting_page_component__WEBPACK_IMPORTED_MODULE_14__["MeetingPageComponent"], _shared_directives_agora_video_player_directive__WEBPACK_IMPORTED_MODULE_15__["AgoraVideoPlayerDirective"], _shared_components_meeting_controls_meeting_controls_component__WEBPACK_IMPORTED_MODULE_16__["MeetingControlsComponent"], _shared_components_meeting_participant_meeting_participant_component__WEBPACK_IMPORTED_MODULE_17__["MeetingParticipantComponent"], _shared_components_meeting_participant_controls_meeting_participant_controls_component__WEBPACK_IMPORTED_MODULE_18__["MeetingParticipantControlsComponent"], _shared_components_sound_visualizer_sound_visualizer_component__WEBPACK_IMPORTED_MODULE_19__["SoundVisualizerComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
        }), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"], ngx_agora_sdk_ng__WEBPACK_IMPORTED_MODULE_6__["NgxAgoraSdkNgModule"].forRoot({
          AppID: 'replace-agora-appId',
          Video: {
            codec: 'h264',
            mode: 'rtc',
            role: 'host'
          }
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "va/j":
    /*!******************************************************************************!*\
      !*** ./src/app/shared/components/camera-preview/camera-preview.component.ts ***!
      \******************************************************************************/

    /*! exports provided: CameraPreviewComponent */

    /***/
    function vaJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CameraPreviewComponent", function () {
        return CameraPreviewComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_camera_preview_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./camera-preview.component.html */
      "SxAu");
      /* harmony import */


      var _camera_preview_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./camera-preview.component.css */
      "Z8eA");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons */
      "wHSu");
      /* harmony import */


      var _services_media_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/media.service */
      "yvDh");

      var CameraPreviewComponent = /*#__PURE__*/function () {
        function CameraPreviewComponent(mediaService) {
          _classCallCheck(this, CameraPreviewComponent);

          this.mediaService = mediaService;
          this.subscriptions = [];
          this.microphoneIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faMicrophoneAlt"];
          this.microphoneMutedIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faMicrophoneAltSlash"];
          this.cameraIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faVideo"];
          this.cameraOffIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faVideoSlash"];
          this.settingIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faCog"];
          this.isCameraOff = false;
          this.isMicrophoneMute = true;
          this.showSettings = false;
        }

        _createClass(CameraPreviewComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this8 = this;

            var vsubscription = this.mediaService.selectedVideoInputId.subscribe(function (id) {
              _this8.selectedVideoInId = id;

              _this8.startCameraMic(_this8.selectedVideoInId);
            });
            this.subscriptions.push(vsubscription);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var _iterator2 = _createForOfIteratorHelper(this.subscriptions),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var sub = _step2.value;
                sub.unsubscribe();
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            if (this.stream) {
              this.stream.getTracks().forEach(function (track) {
                track.stop();
              });
            }
          }
        }, {
          key: "startCameraMic",
          value: function startCameraMic(camDeviceId) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this9 = this;

              var mediaStreamType;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      if (!this.isCameraOff) {
                        _context4.next = 3;
                        break;
                      }

                      if (this.stream) {
                        this.stream.getTracks().forEach(function (track) {
                          track.stop();
                        });
                      }

                      return _context4.abrupt("return");

                    case 3:
                      mediaStreamType = _services_media_service__WEBPACK_IMPORTED_MODULE_5__["MediaStreamType"].video;
                      _context4.next = 6;
                      return this.mediaService.getMediaStream(mediaStreamType, undefined, undefined, camDeviceId);

                    case 6:
                      this.stream = _context4.sent;
                      this.cameraElementRef.nativeElement.srcObject = this.stream;

                      this.cameraElementRef.nativeElement.onloadedmetadata = function () {
                        _this9.cameraElementRef.nativeElement.play();
                      };

                    case 9:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "onMicrophoneClicked",
          value: function onMicrophoneClicked(state) {
            this.isMicrophoneMute = state;
          }
        }, {
          key: "onCameraClicked",
          value: function onCameraClicked(state) {
            this.isCameraOff = state;
            this.startCameraMic(this.selectedVideoInId);
          }
        }, {
          key: "onShowSettings",
          value: function onShowSettings() {
            this.showSettings = true;
          }
        }, {
          key: "onCloseSettings",
          value: function onCloseSettings() {
            this.showSettings = false;
          }
        }]);

        return CameraPreviewComponent;
      }();

      CameraPreviewComponent.ctorParameters = function () {
        return [{
          type: _services_media_service__WEBPACK_IMPORTED_MODULE_5__["MediaService"]
        }];
      };

      CameraPreviewComponent.propDecorators = {
        cameraElementRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['camera']
        }]
      };
      CameraPreviewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-camera-preview',
        template: _raw_loader_camera_preview_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_camera_preview_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CameraPreviewComponent);
      /***/
    },

    /***/
    "wn2D":
    /*!********************************************************************************************!*\
      !*** ./src/app/shared/components/input-output-settings/input-output-settings.component.ts ***!
      \********************************************************************************************/

    /*! exports provided: TabKind, InputOutputSettingsComponent */

    /***/
    function wn2D(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabKind", function () {
        return TabKind;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InputOutputSettingsComponent", function () {
        return InputOutputSettingsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_input_output_settings_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./input-output-settings.component.html */
      "1U5E");
      /* harmony import */


      var _input_output_settings_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./input-output-settings.component.css */
      "WRDt");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons */
      "wHSu");
      /* harmony import */


      var _services_media_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/media.service */
      "yvDh");

      var TabKind;

      (function (TabKind) {
        TabKind[TabKind["audio"] = 0] = "audio";
        TabKind[TabKind["video"] = 1] = "video";
      })(TabKind || (TabKind = {}));

      var InputOutputSettingsComponent = /*#__PURE__*/function () {
        function InputOutputSettingsComponent(mediaService) {
          _classCallCheck(this, InputOutputSettingsComponent);

          this.mediaService = mediaService;
          this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.subscriptions = [];
          this.tabKind = TabKind;
          this.audioIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faPhoneVolume"];
          this.videoIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faVideo"];
          this.micIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faMicrophoneAlt"];
          this.speakerIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faVolumeUp"];
          this.closeIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTimes"];
          this.selectedTab = TabKind.audio;
          this.micDevicesInfos = [];
          this.speakerDevicesInfos = [];
          this.camDevicesInfos = [];
          this.testAudio = new Audio();
          this.testAudio.src = 'assets/audio/piano-test.mp3';
        }

        _createClass(InputOutputSettingsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this10 = this;

            this.getDeviceInfos().then(function () {
              var videoInSubs = _this10.mediaService.selectedVideoInputId.subscribe(function (id) {
                _this10.selectedVideoId = id;

                if (id && _this10.selectedTab === TabKind.video) {
                  _this10.getVideo(id);
                }

                if (!id) {
                  if (_this10.camDevicesInfos.length > 0) {
                    _this10.mediaService.videoInputId = _this10.camDevicesInfos[0].deviceId;
                  }
                }
              });

              _this10.subscriptions.push(videoInSubs);

              var audioOutSubs = _this10.mediaService.selectedAudioOutputId.subscribe(function (id) {
                _this10.selectedAudioOutId = id;

                if (id && _this10.selectedTab === TabKind.audio) {
                  _this10.mediaService.setSinkID(_this10.testAudio, id);
                }

                if (!id) {
                  if (_this10.speakerDevicesInfos.length > 0) {
                    _this10.mediaService.audioOutputId = _this10.speakerDevicesInfos[0].deviceId;
                  }
                }
              });

              _this10.subscriptions.push(audioOutSubs);

              var audioInSubs = _this10.mediaService.selectedAudioInputId.subscribe(function (id) {
                _this10.selectedAudioInId = id;

                if (!id) {
                  if (_this10.micDevicesInfos.length > 0) {
                    _this10.mediaService.audioInputId = _this10.micDevicesInfos[0].deviceId;
                  }
                }
              });

              _this10.subscriptions.push(audioInSubs);
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var _iterator3 = _createForOfIteratorHelper(this.subscriptions),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var subs = _step3.value;
                subs.unsubscribe();
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            this.stopAllStreamTracks();
          }
        }, {
          key: "getDeviceInfos",
          value: function getDeviceInfos() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.mediaService.getMediaSources('audioinput');

                    case 2:
                      this.micDevicesInfos = _context5.sent;
                      _context5.next = 5;
                      return this.mediaService.getMediaSources('audiooutput');

                    case 5:
                      this.speakerDevicesInfos = _context5.sent;
                      _context5.next = 8;
                      return this.mediaService.getMediaSources('videoinput');

                    case 8:
                      this.camDevicesInfos = _context5.sent;

                    case 9:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "onTabClick",
          value: function onTabClick(tab) {
            this.selectedTab = tab;
            this.mediaService.videoInputId = this.selectedVideoId;
          }
        }, {
          key: "onTestAudio",
          value: function onTestAudio() {
            this.testAudio.play();
          }
        }, {
          key: "onMicChange",
          value: function onMicChange(value) {
            this.mediaService.audioInputId = value;
          }
        }, {
          key: "onSpeakerChange",
          value: function onSpeakerChange(value) {
            this.mediaService.audioOutputId = value;
          }
        }, {
          key: "onCameraChange",
          value: function onCameraChange(value) {
            this.mediaService.videoInputId = value;
          }
        }, {
          key: "onClose",
          value: function onClose() {
            this.closed.emit();
          }
        }, {
          key: "stopAllStreamTracks",
          value: function stopAllStreamTracks() {
            if (this.stream) {
              this.stream.getTracks().forEach(function (track) {
                track.stop();
              });
            }
          }
        }, {
          key: "getVideo",
          value: function getVideo(deviceId) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this11 = this;

              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      this.stopAllStreamTracks();
                      _context6.next = 3;
                      return this.mediaService.getMediaStream(_services_media_service__WEBPACK_IMPORTED_MODULE_5__["MediaStreamType"].video, 80, 50, deviceId);

                    case 3:
                      this.stream = _context6.sent;
                      this.videoSample.nativeElement.srcObject = this.stream;

                      this.videoSample.nativeElement.onloadedmetadata = function () {
                        _this11.videoSample.nativeElement.play();
                      };

                    case 6:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }]);

        return InputOutputSettingsComponent;
      }();

      InputOutputSettingsComponent.ctorParameters = function () {
        return [{
          type: _services_media_service__WEBPACK_IMPORTED_MODULE_5__["MediaService"]
        }];
      };

      InputOutputSettingsComponent.propDecorators = {
        videoSample: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['videoSample']
        }],
        closed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      InputOutputSettingsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-input-output-settings',
        template: _raw_loader_input_output_settings_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_input_output_settings_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], InputOutputSettingsComponent);
      /***/
    },

    /***/
    "wthP":
    /*!***********************************************************************************************************!*\
      !*** ./src/app/shared/components/meeting-participant-controls/meeting-participant-controls.component.css ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function wthP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "a {\r\n  cursor: pointer;\r\n  color: rgb(201, 200, 200);\r\n}\r\n\r\na:hover {\r\n  color: rgb(228, 228, 228);\r\n}\r\n\r\n.buttons-container {\r\n  background-color: rgba(128, 128, 128, 0.65);\r\n  border-radius: 0.75rem;\r\n  padding: 0.5rem;\r\n  opacity: 0;\r\n  transition: all .5s;\r\n}\r\n\r\n.buttons-container.show {\r\n  opacity: 1;\r\n}\r\n\r\n.btn-item {\r\n  margin: 0.2rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lZXRpbmctcGFydGljaXBhbnQtY29udHJvbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSwyQ0FBMkM7RUFDM0Msc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixVQUFVO0VBQ1YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJtZWV0aW5nLXBhcnRpY2lwYW50LWNvbnRyb2xzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6IHJnYigyMDEsIDIwMCwgMjAwKTtcclxufVxyXG5cclxuYTpob3ZlciB7XHJcbiAgY29sb3I6IHJnYigyMjgsIDIyOCwgMjI4KTtcclxufVxyXG5cclxuLmJ1dHRvbnMtY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNjUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNzVyZW07XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC41cztcclxufVxyXG5cclxuLmJ1dHRvbnMtY29udGFpbmVyLnNob3cge1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5idG4taXRlbSB7XHJcbiAgbWFyZ2luOiAwLjJyZW07XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "xBpO":
    /*!********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/welcome/welcome.component.html ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function xBpO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar >\r\n    <ion-title>\r\n      Agora Video Call\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-card class=\"welcome-card ion-color\" style=\"background-color: #164598;\">\r\n      <img src=\"/assets/meeting-min.png\" alt=\"\" />\r\n      <ion-card-header>\r\n        <ion-card-subtitle>Get Started</ion-card-subtitle>\r\n        <ion-card-title>A demo of Agora SDK implementation</ion-card-title>\r\n      </ion-card-header>\r\n      <ion-card-content class=\"ion-text-center\">\r\n        <ion-button color=\"primary\" [routerLink]=\"['/preview']\"> New Meeting</ion-button>\r\n        <!-- <a class=\"btn btn-success mt-4\" [routerLink]=\"['/preview']\">\r\n          New Meeting\r\n        </a> -->\r\n      </ion-card-content>\r\n    </ion-card>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-no-border\">\r\n  <ion-toolbar class=\"ion-text-center\">\r\n    <ion-text >\r\n     <small> Implemented by HasoTechnology </small>\r\n    </ion-text>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n\r\n\r\n\r\n\r\n";
      /***/
    },

    /***/
    "ynWL":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function ynWL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "yvDh":
    /*!**************************************************!*\
      !*** ./src/app/shared/services/media.service.ts ***!
      \**************************************************/

    /*! exports provided: MediaStreamType, MediaService */

    /***/
    function yvDh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MediaStreamType", function () {
        return MediaStreamType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MediaService", function () {
        return MediaService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var ngx_agora_sdk_ng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-agora-sdk-ng */
      "knEG");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var MediaStreamType;

      (function (MediaStreamType) {
        MediaStreamType[MediaStreamType["audio"] = 0] = "audio";
        MediaStreamType[MediaStreamType["video"] = 1] = "video";
        MediaStreamType[MediaStreamType["all"] = 2] = "all";
      })(MediaStreamType || (MediaStreamType = {}));

      ;

      var MediaService = /*#__PURE__*/function () {
        function MediaService(agoraService) {
          _classCallCheck(this, MediaService);

          this.agoraService = agoraService;
          this.mediaDevicesInfos = [];
          this.selectedAudioOutputId = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
          this.selectedVideoInputId = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
          this.selectedAudioInputId = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        }

        _createClass(MediaService, [{
          key: "audioInputId",
          set: function set(id) {
            this.selectedAudioInputId.next(id);
          }
        }, {
          key: "audioOutputId",
          set: function set(id) {
            this.selectedAudioOutputId.next(id);
          }
        }, {
          key: "videoInputId",
          set: function set(id) {
            this.selectedVideoInputId.next(id);
          }
        }, {
          key: "getMediaSources",
          value: function getMediaSources(kind) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.prev = 0;
                      _context7.next = 3;
                      return this.agoraService.getDevices();

                    case 3:
                      this.mediaDevicesInfos = _context7.sent;
                      _context7.next = 9;
                      break;

                    case 6:
                      _context7.prev = 6;
                      _context7.t0 = _context7["catch"](0);
                      console.error(_context7.t0);

                    case 9:
                      _context7.prev = 9;
                      return _context7.abrupt("return", this.mediaDevicesInfos.filter(function (mdi) {
                        return mdi.kind === kind;
                      }));

                    case 12:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this, [[0, 6, 9, 12]]);
            }));
          }
        }, {
          key: "setSinkID",
          value: function setSinkID(element, deviceId) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.prev = 0;
                      _context8.next = 3;
                      return element.setSinkId(deviceId);

                    case 3:
                      _context8.next = 8;
                      break;

                    case 5:
                      _context8.prev = 5;
                      _context8.t0 = _context8["catch"](0);
                      console.error(_context8.t0);

                    case 8:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, null, [[0, 5]]);
            }));
          }
        }, {
          key: "getMediaStream",
          value: function getMediaStream(type, videoWidth, videoHeight, videoDeviceId, audioDeviceId) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var constraints;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      constraints = {
                        audio: false,
                        video: false
                      };

                      if (type === MediaStreamType.audio || type === MediaStreamType.all) {
                        constraints.audio = true;

                        if (audioDeviceId) {
                          constraints.audio = {
                            deviceId: audioDeviceId
                          };
                        }
                      }

                      if (type === MediaStreamType.video || type === MediaStreamType.all) {
                        constraints.video = true;

                        if (videoHeight && videoWidth || videoDeviceId) {
                          constraints.video = {
                            width: videoWidth,
                            height: videoHeight,
                            deviceId: videoDeviceId
                          };
                        }
                      }

                      _context9.prev = 3;
                      _context9.next = 6;
                      return navigator.mediaDevices.getUserMedia(constraints);

                    case 6:
                      this.lastStream = _context9.sent;
                      _context9.next = 12;
                      break;

                    case 9:
                      _context9.prev = 9;
                      _context9.t0 = _context9["catch"](3);
                      console.error(_context9.t0);

                    case 12:
                      _context9.prev = 12;
                      return _context9.abrupt("return", this.lastStream);

                    case 15:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this, [[3, 9, 12, 15]]);
            }));
          }
        }]);

        return MediaService;
      }();

      MediaService.ctorParameters = function () {
        return [{
          type: ngx_agora_sdk_ng__WEBPACK_IMPORTED_MODULE_2__["NgxAgoraSdkNgService"]
        }];
      };

      MediaService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], MediaService);
      /***/
    },

    /***/
    "yyA1":
    /*!**************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/meeting-controls/meeting-controls.component.html ***!
      \**************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function yyA1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n  <ion-fab-button>\r\n    <ion-icon name=\"arrow-up-circle\"></ion-icon>\r\n  </ion-fab-button>\r\n  <ion-fab-list side=\"top\">\r\n    <ion-fab-button>\r\n      <app-round-tranparent-icon-button\r\n        type=\"toggle\"\r\n        [activeIcon]=\"micOffIcon\"\r\n        [inactiveIcon]=\"micIcon\"\r\n        (onClick)=\"onMicMute($event)\"\r\n      ></app-round-tranparent-icon-button>\r\n    </ion-fab-button>\r\n    <ion-fab-button>\r\n      <app-round-tranparent-icon-button\r\n        class=\"mr-3 ml-3\"\r\n        type=\"normal\"\r\n        [inactiveIcon]=\"hangUpIcon\"\r\n        [inactiveIconStyle]=\"{\r\n          stroke: 'red',\r\n          color: 'red'\r\n        }\"\r\n        (onClick)=\"onHangUp()\"\r\n      ></app-round-tranparent-icon-button>\r\n    </ion-fab-button>\r\n    <ion-fab-button>\r\n      <app-round-tranparent-icon-button\r\n        class=\"mr-3\"\r\n        type=\"toggle\"\r\n        [activeIcon]=\"camOffIcon\"\r\n        [inactiveIcon]=\"camIcon\"\r\n        (onClick)=\"onCameraMute($event)\"\r\n      ></app-round-tranparent-icon-button>\r\n    </ion-fab-button>\r\n  </ion-fab-list>\r\n</ion-fab>\r\n<!-- <div class=\"controls-container w-100 d-flex flex-row justify-content-center\">\r\n  <app-round-tranparent-icon-button\r\n    type=\"toggle\"\r\n    [activeIcon]=\"micOffIcon\"\r\n    [inactiveIcon]=\"micIcon\"\r\n    (onClick)=\"onMicMute($event)\"\r\n  ></app-round-tranparent-icon-button>\r\n\r\n  <app-round-tranparent-icon-button\r\n    class=\"mr-3 ml-3\"\r\n    type=\"normal\"\r\n    [inactiveIcon]=\"hangUpIcon\"\r\n    [inactiveIconStyle]=\"{\r\n      stroke: 'red',\r\n      color: 'red'\r\n    }\"\r\n    (onClick)=\"onHangUp()\"\r\n  ></app-round-tranparent-icon-button>\r\n\r\n  <app-round-tranparent-icon-button\r\n    class=\"mr-3\"\r\n    type=\"toggle\"\r\n    [activeIcon]=\"camOffIcon\"\r\n    [inactiveIcon]=\"camIcon\"\r\n    (onClick)=\"onCameraMute($event)\"\r\n  ></app-round-tranparent-icon-button>\r\n\r\n  <app-round-tranparent-icon-button\r\n    type=\"normal\"\r\n    [activeIcon]=\"pinIcon\"\r\n    [inactiveIcon]=\"pinIcon\"\r\n    (onClick)=\"onPin($event)\"\r\n  ></app-round-tranparent-icon-button>\r\n</div> -->\r\n";
      /***/
    },

    /***/
    "zILU":
    /*!*************************************!*\
      !*** ./src/app/core/sound-meter.ts ***!
      \*************************************/

    /*! exports provided: SoundMeter */

    /***/
    function zILU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SoundMeter", function () {
        return SoundMeter;
      });

      var SoundMeter = /*#__PURE__*/function () {
        function SoundMeter(context) {
          _classCallCheck(this, SoundMeter);

          this.context = context;
          this.instant = 0.0;
        }

        _createClass(SoundMeter, [{
          key: "internalConnect",
          value: function internalConnect(stream, callback) {
            try {
              this.mic = this.context.createMediaStreamSource(stream);
              this.mic.connect(this.script);
              this.script.connect(this.context.destination);

              if (typeof callback !== 'undefined') {
                callback(null);
              }
            } catch (error) {
              if (typeof callback !== 'undefined') {
                callback(error);
              }
            }
          }
        }, {
          key: "connect",
          value: function connect(stream, updatedValueCallback, errorCallback) {
            var _this12 = this;

            this.script = this.context.createScriptProcessor(2048, 1, 1);
            this.script.addEventListener('audioprocess', function (event) {
              var input = event.inputBuffer.getChannelData(0);
              var i;
              var sum = 0.0;

              for (i = 0; i < input.length; ++i) {
                sum += input[i] * input[i];
              }

              _this12.instant = Math.sqrt(sum / input.length);
              updatedValueCallback(_this12.instant.toFixed(2));
            });
            this.internalConnect(stream, errorCallback);
          }
        }]);

        return SoundMeter;
      }();
      /***/

    },

    /***/
    "zP2K":
    /*!********************************************************************!*\
      !*** ./src/app/pages/meeting-preview/meeting-preview.component.ts ***!
      \********************************************************************/

    /*! exports provided: MeetingPreviewComponent */

    /***/
    function zP2K(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MeetingPreviewComponent", function () {
        return MeetingPreviewComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_meeting_preview_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./meeting-preview.component.html */
      "jsH7");
      /* harmony import */


      var _meeting_preview_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./meeting-preview.component.css */
      "JJ5p");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _shared_services_token_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../shared/services/token.service */
      "hrsj");

      var MeetingPreviewComponent = /*#__PURE__*/function () {
        function MeetingPreviewComponent(formBuilder, router, tokeService) {
          _classCallCheck(this, MeetingPreviewComponent);

          this.formBuilder = formBuilder;
          this.router = router;
          this.tokeService = tokeService;
          this.showSettings = false;
          this.joinLoading = false;
          this.newLoading = false;
          this.subscriptions = [];
        }

        _createClass(MeetingPreviewComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this13 = this;

            var _a, _b;

            this.connectionInfoForm = this.formBuilder.group({
              channel: '',
              link: ''
            });
            var channelChangeSubs = (_a = this.connectionInfoForm.get('channel')) === null || _a === void 0 ? void 0 : _a.valueChanges.subscribe(function (value) {
              var _a, _b, _c, _d;

              if (value === '') {
                (_b = (_a = _this13.connectionInfoForm) === null || _a === void 0 ? void 0 : _a.get('link')) === null || _b === void 0 ? void 0 : _b.enable({
                  emitEvent: false
                });
              } else {
                (_d = (_c = _this13.connectionInfoForm) === null || _c === void 0 ? void 0 : _c.get('link')) === null || _d === void 0 ? void 0 : _d.disable({
                  emitEvent: false
                });
              }
            });
            this.subscriptions.push(channelChangeSubs);
            var linkChangeSubs = (_b = this.connectionInfoForm.get('link')) === null || _b === void 0 ? void 0 : _b.valueChanges.subscribe(function (value) {
              var _a, _b, _c, _d;

              if (value === '') {
                (_b = (_a = _this13.connectionInfoForm) === null || _a === void 0 ? void 0 : _a.get('channel')) === null || _b === void 0 ? void 0 : _b.enable({
                  emitEvent: false
                });
              } else {
                (_d = (_c = _this13.connectionInfoForm) === null || _c === void 0 ? void 0 : _c.get('channel')) === null || _d === void 0 ? void 0 : _d.disable({
                  emitEvent: false
                });
              }
            });
            this.subscriptions.push(linkChangeSubs);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var _iterator4 = _createForOfIteratorHelper(this.subscriptions),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var subs = _step4.value;
                subs.unsubscribe();
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }
          }
        }, {
          key: "onShowSettings",
          value: function onShowSettings() {
            this.showSettings = true;
          }
        }, {
          key: "onCloseSettings",
          value: function onCloseSettings() {
            this.showSettings = false;
          }
        }, {
          key: "onJoinMeeting",
          value: function onJoinMeeting() {
            var _a;

            var _ref3 = (_a = this.connectionInfoForm) === null || _a === void 0 ? void 0 : _a.value,
                channel = _ref3.channel,
                link = _ref3.link;

            if (channel) {
              var joinLink = this.tokeService.getLink(channel);
              var meetinglink = location.origin + "/#/meeting?link=" + joinLink;
              setTimeout(function () {
                alert("Code copied, You can Invite other people using the code: ".concat(joinLink));
              }, 1000);
              navigator.clipboard.writeText(joinLink).then()["catch"](function (e) {
                return console.error(e);
              });
              console.log(joinLink);
            }

            this.router.navigate(['/meeting'], {
              queryParams: {
                channel: channel,
                link: link
              }
            });
          }
        }]);

        return MeetingPreviewComponent;
      }();

      MeetingPreviewComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _shared_services_token_service__WEBPACK_IMPORTED_MODULE_6__["TokenService"]
        }];
      };

      MeetingPreviewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-meeting-preview',
        template: _raw_loader_meeting_preview_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_meeting_preview_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], MeetingPreviewComponent);
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    "zfsz":
    /*!***********************************************************************************!*\
      !*** ./src/app/shared/components/meeting-controls/meeting-controls.component.css ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function zfsz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".controls-container {\r\n    padding-top: 1rem;\r\n    padding-bottom: 1rem;\r\n    background-color: rgb(170, 170, 171);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lZXRpbmctY29udHJvbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsb0NBQW9DO0FBQ3hDIiwiZmlsZSI6Im1lZXRpbmctY29udHJvbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250cm9scy1jb250YWluZXIge1xyXG4gICAgcGFkZGluZy10b3A6IDFyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzAsIDE3MCwgMTcxKTtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map
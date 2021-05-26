(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+j1i":
/*!****************************************************!*\
  !*** ./src/app/pages/welcome/welcome.component.ts ***!
  \****************************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_welcome_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./welcome.component.html */ "xBpO");
/* harmony import */ var _welcome_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./welcome.component.css */ "68e4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let WelcomeComponent = class WelcomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
WelcomeComponent.ctorParameters = () => [];
WelcomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-welcome',
        template: _raw_loader_welcome_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_welcome_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], WelcomeComponent);



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\mouna\agora_video_call\ionic-agora-video-call\src\main.ts */"zUnb");


/***/ }),

/***/ "1U5E":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/input-output-settings/input-output-settings.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"screen\">\r\n  <div class=\"container pt-4 pb-4\">\r\n    <a class=\"close-button\" (click)=\"onClose()\">\r\n      <fa-icon [icon]=\"closeIcon\"></fa-icon>\r\n    </a>\r\n    <div class=\"row\">\r\n      <div class=\"col-3 pr-0 pl-0\">\r\n        <h4 class=\"mt-3 mb-4 ml-3\">Settings</h4>\r\n        <div class=\"list-group\" id=\"list-tab\" role=\"tablist\">\r\n          <a\r\n            class=\"list-group-item list-group-item-action\"\r\n            id=\"list-audio-list\"\r\n            [ngClass]=\"{ active: selectedTab === tabKind.audio }\"\r\n            (click)=\"onTabClick(tabKind.audio)\"\r\n            ><fa-icon class=\"mr-4\" [icon]=\"audioIcon\"></fa-icon> Audio</a\r\n          >\r\n          <a\r\n            class=\"list-group-item list-group-item-action\"\r\n            id=\"list-video-list\"\r\n            [ngClass]=\"{ active: selectedTab === tabKind.video }\"\r\n            (click)=\"onTabClick(tabKind.video)\"\r\n            ><fa-icon class=\"mr-4\" [icon]=\"videoIcon\"></fa-icon> Video</a\r\n          >\r\n        </div>\r\n      </div>\r\n      <div class=\"col-9 pl-0\">\r\n        <div class=\"settings-container pl-5 pt-4 pb-4\">\r\n          <!-- audio Settings start -->\r\n          <div *ngIf=\"selectedTab === tabKind.audio\">\r\n            <div class=\"row mb-3\">\r\n              <div class=\"col-12\">\r\n                <div class=\"row\">\r\n                  <h6 class=\"setting-title\">Microphone</h6>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-8\">\r\n                    <select\r\n                      class=\"form-control form-control-sm\"\r\n                      [value]=\"selectedAudioInId\"\r\n                      (change)=\"onMicChange($event.target.value)\"\r\n                    >\r\n                      <option\r\n                        *ngFor=\"let info of micDevicesInfos\"\r\n                        [value]=\"info.deviceId\"\r\n                      >\r\n                        {{ info.label }}\r\n                      </option>\r\n                    </select>\r\n                  </div>\r\n                  <div class=\"col-4\">\r\n                    <div class=\"d-flex\">\r\n                      <fa-icon\r\n                        class=\"mr-2\"\r\n                        [icon]=\"micIcon\"\r\n                        [styles]=\"{ color: 'rgb(133, 133, 133)' }\"\r\n                      ></fa-icon>\r\n                      <app-sound-meter></app-sound-meter>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row mb-3\">\r\n              <div class=\"col-12\">\r\n                <div class=\"row\">\r\n                  <h6 class=\"setting-title\">Speaker</h6>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-8\">\r\n                    <select\r\n                      class=\"form-control form-control-sm\"\r\n                      [value]=\"selectedAudioOutId\"\r\n                      (change)=\"onSpeakerChange($event.target.value)\"\r\n                    >\r\n                      <option\r\n                        *ngFor=\"let info of speakerDevicesInfos\"\r\n                        [value]=\"info.deviceId\"\r\n                      >\r\n                        {{ info.label }}\r\n                      </option>\r\n                    </select>\r\n                  </div>\r\n                  <div class=\"col-4\">\r\n                    <a (click)=\"onTestAudio()\">\r\n                      <span>\r\n                        <fa-icon\r\n                          [icon]=\"speakerIcon\"\r\n                          [styles]=\"{ color: 'rgb(133, 133, 133)' }\"\r\n                        ></fa-icon>\r\n                        Test\r\n                      </span>\r\n                    </a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- audio Settings end -->\r\n          <!-- vido Settings start -->\r\n          <div *ngIf=\"selectedTab === tabKind.video\">\r\n            <div class=\"row mb-3\">\r\n              <div class=\"col-12\">\r\n                <div class=\"row\">\r\n                  <h6 class=\"setting-title\">Camera</h6>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-8\">\r\n                    <select\r\n                      class=\"form-control form-control-sm\"\r\n                      [value]=\"selectedVideoId\"\r\n                      (change)=\"onCameraChange($event.target.value)\"\r\n                    >\r\n                      <option\r\n                        *ngFor=\"let info of camDevicesInfos\"\r\n                        [value]=\"info.deviceId\"\r\n                      >\r\n                        {{ info.label }}\r\n                      </option>\r\n                    </select>\r\n                  </div>\r\n                  <div class=\"col-4\">\r\n                    <div class=\"d-flex\">\r\n                      <fa-icon\r\n                        class=\"mr-3\"\r\n                        [icon]=\"videoIcon\"\r\n                        [styles]=\"{ color: 'rgb(133, 133, 133)' }\"\r\n                      ></fa-icon>\r\n                      <div class=\"camera-container\">\r\n                        <video\r\n                          #videoSample\r\n                          id=\"videoSample\"\r\n                          class=\"camera\"\r\n                        ></video>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- video Settings end -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "68e4":
/*!*****************************************************!*\
  !*** ./src/app/pages/welcome/welcome.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content{\r\n\r\n    --ion-background-color:#ffffff;\r\n}\r\n\r\nion-toolbar {\r\n    --color: #ffffff;\r\n    --background: #164598;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIscUJBQXFCO0FBQ3pCIiwiZmlsZSI6IndlbGNvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG5cclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2ZmZmZmZjtcclxufVxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gICAgLS1jb2xvcjogI2ZmZmZmZjtcclxuICAgIC0tYmFja2dyb3VuZDogIzE2NDU5ODtcclxufSJdfQ== */");

/***/ }),

/***/ "7hRC":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/meeting-page/meeting-page.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"vh-100 vw-100 d-flex flex-column position-relative\">\r\n  <div class=\"views-container w-100 row position-relative\"> -->\r\n    <ion-content>\r\n    <div *ngIf=\"!pinnedUser\">\r\n      <div class=\"col-3\" *ngFor=\"let user of userList\">\r\n        <app-meeting-participant [user]=\"user\" (pinned)=\"onPin($event)\"></app-meeting-participant>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"pinnedUser\">\r\n      <div class=\"col-9 h-100\">\r\n        <div class=\"pinned-container\">\r\n          <app-meeting-participant [user]=\"pinnedUser\" (pinned)=\"onPin($event)\"></app-meeting-participant>\r\n        </div>\r\n      </div>\r\n      <div class=\"side-container col-3 h-100\">\r\n        <div *ngFor=\"let user of getUnpinnedUsers()\">\r\n          <div class=\"mb-2\">\r\n            <app-meeting-participant [user]=\"user\" (pinned)=\"onPin($event)\"></app-meeting-participant>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ion-content>\r\n    <div class=\"meeting-description-container\">\r\n      <h4>{{userList.length === 1 ?\"You are alone here\":\"You and \" + (userList.length - 1) + \" user(s) are in meeting\"}}\r\n      </h4>\r\n    </div>\r\n  <!-- </div> -->\r\n  <div class=\"controls-container\">\r\n    <app-meeting-controls (cameraMuted)=\"onLocalCamera($event)\" (micMuted)=\"onLocalMic($event)\"\r\n      (hangedUp)=\"onLocalLeave()\" (pinned)=\"onLocalPinned($event)\"></app-meeting-controls>\r\n  </div>\r\n<!-- </div> -->");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "CmlQ":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/meeting-participant/meeting-participant.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"view-container\" (mouseover)=\"showControls(true)\" (mouseleave)=\"showControls(false)\">\r\n    <div [appAgoraVideoPlayer]=\"trackoptions\" class=\"video\">\r\n    </div>\r\n    <div class=\"control-container d-flex flex-row justify-content-center align-items-center\" *ngIf=\"isRemote()\">\r\n        <app-meeting-participant-controls \r\n        [show]=\"controlsVisible\"\r\n        (camOff)=\"onCamOff()\"\r\n        (micMute)=\"onMicMute()\"\r\n        (pin)=\"onPin()\">\r\n        </app-meeting-participant-controls>\r\n    </div>\r\n    <div class=\"mic-status\" *ngIf=\"isRemote() && !micStatus\">\r\n        <fa-icon [icon]=\"micMuteIcon\" [styles]=\"{stroke: 'white', color: 'white'}\"></fa-icon>\r\n    </div>\r\n    <div class=\"sound-meter\" *ngIf=\"isRemote() && micStatus\">\r\n        <app-sound-visualizer [mediaStream]=\"audioStream\"></app-sound-visualizer>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "GUX3":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/meeting-participant-controls/meeting-participant-controls.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"buttons-container\" [ngClass]=\"{show: show}\">\r\n    <a class=\"btn-item\" (click)=\"onPin()\"><fa-icon [icon]=\"pinIcon\"></fa-icon></a>\r\n    <a class=\"btn-item\" (click)=\"onMicMute()\"><fa-icon [icon]=\"micMuteIcon\"></fa-icon></a>\r\n    <a class=\"btn-item\" (click)=\"onCamOff()\"><fa-icon [icon]=\"camMuteIcon\" ></fa-icon></a>\r\n    <a class=\"btn-item\" (click)=\"onCick()\"><fa-icon [icon]=\"kickIcon\"></fa-icon></a>\r\n</div>\r\n");

/***/ }),

/***/ "I0zc":
/*!**********************************************************************************************************!*\
  !*** ./src/app/shared/components/meeting-participant-controls/meeting-participant-controls.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: MeetingParticipantControlsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetingParticipantControlsComponent", function() { return MeetingParticipantControlsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_meeting_participant_controls_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./meeting-participant-controls.component.html */ "GUX3");
/* harmony import */ var _meeting_participant_controls_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./meeting-participant-controls.component.css */ "wthP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");





let MeetingParticipantControlsComponent = class MeetingParticipantControlsComponent {
    constructor() {
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
    ngOnInit() {
    }
    onPin() {
        this.pin.emit();
    }
    onMicMute() {
        this.micMute.emit();
    }
    onCamOff() {
        this.camOff.emit();
    }
    onCick() {
        this.cick.emit();
    }
};
MeetingParticipantControlsComponent.ctorParameters = () => [];
MeetingParticipantControlsComponent.propDecorators = {
    show: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    pin: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    micMute: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    camOff: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    cick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
MeetingParticipantControlsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-meeting-participant-controls',
        template: _raw_loader_meeting_participant_controls_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_meeting_participant_controls_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MeetingParticipantControlsComponent);



/***/ }),

/***/ "J8WR":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/sound-visualizer/sound-visualizer.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"d-flex flex-row align-items-end\">\r\n  <ng-container *ngFor=\"let value of values\">\r\n    <div class=\"lines\" [ngStyle]=\"{'height.px': value}\"></div>\r\n  </ng-container>\r\n</div>\r\n");

/***/ }),

/***/ "JJ5p":
/*!*********************************************************************!*\
  !*** ./src/app/pages/meeting-preview/meeting-preview.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".page {\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 100vh;\r\n    width: 100vw;\r\n    justify-content: center;\r\n}\r\n\r\n.meeting-actions-container {\r\n    max-width: 450px;\r\n    min-width: 300px;\r\n}\r\n\r\n.meeting-info {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.button-container {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    \r\n}\r\n\r\n.btn {\r\n    border-radius: 1rem;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lZXRpbmctcHJldmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsWUFBWTtJQUNaLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1Qjs7QUFFM0I7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkIiLCJmaWxlIjoibWVldGluZy1wcmV2aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLm1lZXRpbmctYWN0aW9ucy1jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiA0NTBweDtcclxuICAgIG1pbi13aWR0aDogMzAwcHg7XHJcbn1cclxuXHJcbi5tZWV0aW5nLWluZm8ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG59XHJcblxyXG4iXX0= */");

/***/ }),

/***/ "OAHU":
/*!*******************************************************************!*\
  !*** ./src/app/shared/directives/agora-video-player.directive.ts ***!
  \*******************************************************************/
/*! exports provided: AgoraVideoPlayerDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgoraVideoPlayerDirective", function() { return AgoraVideoPlayerDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let AgoraVideoPlayerDirective = class AgoraVideoPlayerDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
    set trackOption(options) {
        this.playTrack(options);
    }
    ngOnInit() { }
    playTrack(tracks) {
        while (this.elementRef.nativeElement.firstChild) {
            this.elementRef.nativeElement.removeChild(this.elementRef.nativeElement.firstChild);
        }
        if (tracks.mediaTrack) {
            tracks.mediaTrack.playVideo(this.elementRef.nativeElement, { fit: 'cover' });
            return;
        }
        if (tracks.audioTrack) {
            tracks.audioTrack.play();
        }
        if (tracks.videoTrack) {
            tracks.videoTrack.play(this.elementRef.nativeElement, { fit: 'cover' });
        }
    }
};
AgoraVideoPlayerDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
AgoraVideoPlayerDirective.propDecorators = {
    trackOption: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['appAgoraVideoPlayer',] }]
};
AgoraVideoPlayerDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appAgoraVideoPlayer]'
    })
], AgoraVideoPlayerDirective);



/***/ }),

/***/ "Q7Aa":
/*!*************************************************************************!*\
  !*** ./src/app/shared/components/sound-meter/sound-meter.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzb3VuZC1tZXRlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "QLmE":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/sound-meter/sound-meter.component.ts ***!
  \************************************************************************/
/*! exports provided: SoundMeterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoundMeterComponent", function() { return SoundMeterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_sound_meter_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./sound-meter.component.html */ "n6pe");
/* harmony import */ var _sound_meter_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sound-meter.component.css */ "Q7Aa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_sound_meter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/sound-meter */ "zILU");
/* harmony import */ var _services_media_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/media.service */ "yvDh");






let SoundMeterComponent = class SoundMeterComponent {
    constructor(mediaService) {
        this.mediaService = mediaService;
    }
    ngAfterViewInit() {
        this.connect();
        this.subscription = this.mediaService.selectedAudioInputId.subscribe(id => {
            if (id) {
                this.connect(id);
            }
        });
    }
    connect(deviceId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const stream = yield this.mediaService.getMediaStream(_services_media_service__WEBPACK_IMPORTED_MODULE_5__["MediaStreamType"].audio, undefined, undefined, undefined, deviceId);
            if (!stream) {
                return;
            }
            this.soundMeter = new _core_sound_meter__WEBPACK_IMPORTED_MODULE_4__["SoundMeter"](new AudioContext());
            this.soundMeter.connect(stream, (instant) => this.meterRef ? this.meterRef.nativeElement.value = instant : null, (error) => console.debug('navigator.MediaDevices.getUserMedia error: ', error.message, error.name));
        });
    }
    ngOnDestroy() {
        var _a;
        if (this.soundMeter) {
            this.soundMeter.context.close();
        }
        (_a = this.subscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
};
SoundMeterComponent.ctorParameters = () => [
    { type: _services_media_service__WEBPACK_IMPORTED_MODULE_5__["MediaService"] }
];
SoundMeterComponent.propDecorators = {
    meterRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ["meter",] }]
};
SoundMeterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-sound-meter',
        template: _raw_loader_sound_meter_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_sound_meter_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SoundMeterComponent);



/***/ }),

/***/ "R8Lu":
/*!*****************************************************************************************!*\
  !*** ./src/app/shared/components/meeting-participant/meeting-participant.component.css ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".view-container {\r\n    position: relative;\r\n    width: 100%;\r\n    padding-top: 75%;\r\n}\r\n\r\n.video {\r\n    background-color: black;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: .5rem;\r\n    overflow: hidden;\r\n}\r\n\r\n.control-container {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.mic-status {\r\n    position: absolute;\r\n    top: 5px;\r\n    left: 5px;\r\n    width: 32px;\r\n    height: 32px;\r\n}\r\n\r\n.sound-meter {\r\n    position: absolute;\r\n    bottom: 5px;\r\n    left: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lZXRpbmctcGFydGljaXBhbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVM7QUFDYiIsImZpbGUiOiJtZWV0aW5nLXBhcnRpY2lwYW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmlldy1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogNzUlO1xyXG59XHJcblxyXG4udmlkZW8ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5jb250cm9sLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5taWMtc3RhdHVzIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNXB4O1xyXG4gICAgbGVmdDogNXB4O1xyXG4gICAgd2lkdGg6IDMycHg7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbn1cclxuXHJcbi5zb3VuZC1tZXRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDVweDtcclxuICAgIGxlZnQ6IDVweDtcclxufSJdfQ== */");

/***/ }),

/***/ "RxHp":
/*!***************************************************************!*\
  !*** ./src/app/pages/meeting-page/meeting-page.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".views-container {\r\n  margin: 0;\r\n  padding-top: 1rem;\r\n}\r\n\r\n.controls-container {\r\n  width: 100%;\r\n}\r\n\r\n.pinned-container {\r\n  width: 100%;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .pinned-container {\r\n    width: 65%;\r\n  }\r\n}\r\n\r\n.side-container {\r\n  overflow-y: scroll;\r\n}\r\n\r\n.meeting-description-container {\r\n  position: absolute;\r\n  bottom: 0;\r\n  height: 4rem;\r\n  padding: 10px;\r\n  width: 100%;\r\n  background-color: #164598;\r\n  border-top-right-radius: .5rem;\r\n  box-shadow: 5px -5px 10px rgba(0, 0, 0, .35);\r\n}\r\n\r\n.meeting-description-container h4 {\r\n  font-weight: 300;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lZXRpbmctcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBUztFQUNULGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFlBQVk7RUFDWixhQUFhO0VBQ2IsV0FBVztFQUNYLHlCQUF5QjtFQUN6Qiw4QkFBOEI7RUFDOUIsNENBQTRDO0FBQzlDOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6Im1lZXRpbmctcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZpZXdzLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xyXG59XHJcblxyXG4uY29udHJvbHMtY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnBpbm5lZC1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAucGlubmVkLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogNjUlO1xyXG4gIH1cclxufVxyXG5cclxuLnNpZGUtY29udGFpbmVyIHtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbn1cclxuXHJcbi5tZWV0aW5nLWRlc2NyaXB0aW9uLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICBoZWlnaHQ6IDRyZW07XHJcbiAgcGFkZGluZzogMTBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTY0NTk4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAuNXJlbTtcclxuICBib3gtc2hhZG93OiA1cHggLTVweCAxMHB4IHJnYmEoMCwgMCwgMCwgLjM1KTtcclxufVxyXG5cclxuLm1lZXRpbmctZGVzY3JpcHRpb24tY29udGFpbmVyIGg0IHtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcblxyXG4iXX0= */");

/***/ }),

/***/ "SxAu":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/camera-preview/camera-preview.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"camera-container\">\r\n  <div class=\"top-controls-container\">\r\n    <a (click)=\"onShowSettings()\">\r\n      <fa-icon [icon]=\"settingIcon\" class=\"text-white settings\"></fa-icon>\r\n    </a>\r\n    <app-sound-meter *ngIf=\"!isMicrophoneMute\" class=\"sound-meter\"></app-sound-meter>\r\n  </div>\r\n  <h1 [ngClass]=\"{'text-white' : isCameraOff}\" *ngIf=\"isCameraOff\">Camera is off</h1>\r\n  <video *ngIf=\"!isCameraOff\" #camera id=\"camera\"></video>\r\n  <div class=\"webcam-overlay\"></div>\r\n  <div class=\"bottom-controls-container\">\r\n    <app-round-tranparent-icon-button class=\"m-3\" [isActive]=\"isMicrophoneMute\" type=\"toggle\" [activeIcon]=\"microphoneMutedIcon\"\r\n      [inactiveIcon]=\"microphoneIcon\" (onClick)=\"onMicrophoneClicked($event)\">\r\n    </app-round-tranparent-icon-button>\r\n    <app-round-tranparent-icon-button class=\"m-3\" [isActive]=\"isCameraOff\" type=\"toggle\" [activeIcon]=\"cameraOffIcon\" [inactiveIcon]=\"cameraIcon\"\r\n      (onClick)=\"onCameraClicked($event)\">\r\n    </app-round-tranparent-icon-button>\r\n  </div>\r\n</div>\r\n<app-input-output-settings (closed)=\"onCloseSettings()\" *ngIf=\"showSettings\"></app-input-output-settings>\r\n");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "WOgW");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");






let AppComponent = class AppComponent {
    constructor(platform, androidPermissions) {
        platform.ready().then(() => {
            androidPermissions.requestPermissions([
                androidPermissions.PERMISSION.CAMERA,
                androidPermissions.PERMISSION.CALL_PHONE,
                androidPermissions.PERMISSION.RECORD_AUDIO,
                androidPermissions.PERMISSION.GET_ACCOUNTS,
                androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE,
                androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE
            ]);
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_4__["AndroidPermissions"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "TpVO":
/*!****************************************************************************************!*\
  !*** ./src/app/shared/components/meeting-participant/meeting-participant.component.ts ***!
  \****************************************************************************************/
/*! exports provided: MeetingParticipantComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetingParticipantComponent", function() { return MeetingParticipantComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_meeting_participant_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./meeting-participant.component.html */ "CmlQ");
/* harmony import */ var _meeting_participant_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./meeting-participant.component.css */ "R8Lu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");





let MeetingParticipantComponent = class MeetingParticipantComponent {
    constructor() {
        this.pinned = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.micMuteIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faMicrophoneSlash"];
        this.controlsVisible = false;
        this.micStatus = false;
        this.camStatus = false;
    }
    set user(value) {
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
        }
        else {
            this.trackoptions = {
                mediaTrack: value.mediaTrack
            };
            this.micStatus = false;
            this.camStatus = false;
        }
    }
    ngOnInit() {
    }
    showControls(value) {
        this.controlsVisible = value;
    }
    isRemote() {
        var _a;
        return ((_a = this.myUser) === null || _a === void 0 ? void 0 : _a.type) === 'remote';
    }
    onCamOff() {
        var _a, _b, _c;
        if (!((_a = this.trackoptions) === null || _a === void 0 ? void 0 : _a.mediaTrack)) {
            return;
        }
        this.camStatus = !this.camStatus;
        this.camStatus ? (_b = this.trackoptions.mediaTrack) === null || _b === void 0 ? void 0 : _b.cameraOn() : (_c = this.trackoptions.mediaTrack) === null || _c === void 0 ? void 0 : _c.cameraOff();
    }
    onMicMute() {
        var _a, _b, _c;
        if (!((_a = this.trackoptions) === null || _a === void 0 ? void 0 : _a.mediaTrack)) {
            return;
        }
        this.micStatus = !this.micStatus;
        this.micStatus ? (_b = this.trackoptions.mediaTrack) === null || _b === void 0 ? void 0 : _b.microphoneUnMute() : (_c = this.trackoptions.mediaTrack) === null || _c === void 0 ? void 0 : _c.microphoneMute();
    }
    onPin() {
        this.pinned.emit(this.myUser);
    }
};
MeetingParticipantComponent.ctorParameters = () => [];
MeetingParticipantComponent.propDecorators = {
    pinned: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    user: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
MeetingParticipantComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-meeting-participant',
        template: _raw_loader_meeting_participant_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_meeting_participant_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MeetingParticipantComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\r\n  <ion-router-outlet></ion-router-outlet>\r\n</ion-app>\r\n");

/***/ }),

/***/ "WRDt":
/*!*********************************************************************************************!*\
  !*** ./src/app/shared/components/input-output-settings/input-output-settings.component.css ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".screen {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background-color: rgba(0, 0, 0, .65);\r\n    height: 100vh;\r\n    width: 100vw;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 100;\r\n}\r\n\r\n.container {\r\n    position: relative;\r\n    background-color: white;\r\n    border-radius: .5rem;\r\n    width: 80%;\r\n    max-width: 1000px;\r\n    z-index: 101;\r\n}\r\n\r\na {\r\n    cursor: pointer;\r\n}\r\n\r\n.close-button {\r\n    position: absolute;\r\n    top: .5rem;\r\n    right: 1rem;\r\n    color: rgb(128, 128, 128);\r\n    cursor: pointer;\r\n}\r\n\r\n.settings-container {\r\n    height: 20rem;\r\n    width: 100%;\r\n    border-left: solid  rgb(186, 186, 186) 1px;\r\n}\r\n\r\n.setting-title {\r\n    font-size: 1rem;\r\n    font-weight: 400;\r\n    color: darkcyan;\r\n}\r\n\r\n.camera-container {\r\n    height: 50px;\r\n    width: 80px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0LW91dHB1dC1zZXR0aW5ncy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsb0NBQW9DO0lBQ3BDLGFBQWE7SUFDYixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsZUFBZTtBQUNuQjs7QUFDQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZiIsImZpbGUiOiJpbnB1dC1vdXRwdXQtc2V0dGluZ3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY3JlZW4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjY1KTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgei1pbmRleDogMTAwO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XHJcbiAgICB6LWluZGV4OiAxMDE7XHJcbn1cclxuXHJcbmEge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY2xvc2UtYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLjVyZW07XHJcbiAgICByaWdodDogMXJlbTtcclxuICAgIGNvbG9yOiByZ2IoMTI4LCAxMjgsIDEyOCk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnNldHRpbmdzLWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDIwcmVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItbGVmdDogc29saWQgIHJnYigxODYsIDE4NiwgMTg2KSAxcHg7XHJcbn1cclxuXHJcbi5zZXR0aW5nLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogZGFya2N5YW47XHJcbn1cclxuXHJcbi5jYW1lcmEtY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG59Il19 */");

/***/ }),

/***/ "Wr82":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/round-tranparent-icon-button/round-tranparent-icon-button.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a (click)=\"click()\">\r\n  <div class=\"container\" [ngStyle]=\"isActive ? buttonStyle.active : {}\">\r\n    <fa-icon\r\n      [icon]=\"isActive ? activeIcon : inactiveIcon\"\r\n      [styles]=\"isActive ? activeIconStyle : inactiveIconStyle\"\r\n    ></fa-icon>\r\n  </div>\r\n</a>\r\n");

/***/ }),

/***/ "Z8eA":
/*!*******************************************************************************!*\
  !*** ./src/app/shared/components/camera-preview/camera-preview.component.css ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a {\r\n  cursor: pointer;\r\n}\r\n.sound-meter {\r\n  position: absolute;\r\n  top: 10px;\r\n  left: 20px;\r\n}\r\n.settings {\r\n  position: absolute;\r\n  top: 20px;\r\n  right: 20px;\r\n  cursor: pointer;\r\n}\r\n.camera-container {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: relative;\r\n  border-radius: 0.5rem;\r\n  overflow: hidden;\r\n  width: 100%;\r\n  height: 380px;\r\n  background-color: black;\r\n}\r\n.camera-off {\r\n  text-align: center;\r\n  height: 400px;\r\n  width: 531px;\r\n  border-radius: 10px;\r\n  background-color: black;\r\n  color: white;\r\n  -webkit-linear-gradient: (\r\n    top,\r\n    rgba(0, 0, 0, 0.7) 0,\r\n    rgba(0, 0, 0, 0.3) 50%,\r\n    rgba(0, 0, 0, 0) 100%\r\n  );\r\n}\r\n.webcam-overlay {\r\n  background: linear-gradient(\r\n    rgba(0, 0, 0, 0.65),\r\n    transparent 20%,\r\n    transparent 80%,\r\n    rgba(0, 0, 0, 0.65) 100%\r\n  );\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 2;\r\n}\r\n.bottom-controls-container {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  position: absolute;\r\n  width: 100%;\r\n  bottom: 0;\r\n  z-index: 4;\r\n  margin-bottom: 1rem;\r\n}\r\n.top-controls-container {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  position: absolute;\r\n  width: 100%;\r\n  top: 0;\r\n  z-index: 4;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbWVyYS1wcmV2aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7QUFDWjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWjs7Ozs7R0FLQztBQUNIO0FBRUE7RUFDRTs7Ozs7R0FLQztFQUNELGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsTUFBTTtFQUNOLFdBQVc7RUFDWCxZQUFZO0VBQ1osVUFBVTtBQUNaO0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQVM7RUFDVCxVQUFVO0VBQ1YsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLE1BQU07RUFDTixVQUFVO0VBQ1YsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6ImNhbWVyYS1wcmV2aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnNvdW5kLW1ldGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxMHB4O1xyXG4gIGxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbi5zZXR0aW5ncyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMjBweDtcclxuICByaWdodDogMjBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jYW1lcmEtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAzODBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmNhbWVyYS1vZmYge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG4gIHdpZHRoOiA1MzFweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICAtd2Via2l0LWxpbmVhci1ncmFkaWVudDogKFxyXG4gICAgdG9wLFxyXG4gICAgcmdiYSgwLCAwLCAwLCAwLjcpIDAsXHJcbiAgICByZ2JhKDAsIDAsIDAsIDAuMykgNTAlLFxyXG4gICAgcmdiYSgwLCAwLCAwLCAwKSAxMDAlXHJcbiAgKTtcclxufVxyXG5cclxuLndlYmNhbS1vdmVybGF5IHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICByZ2JhKDAsIDAsIDAsIDAuNjUpLFxyXG4gICAgdHJhbnNwYXJlbnQgMjAlLFxyXG4gICAgdHJhbnNwYXJlbnQgODAlLFxyXG4gICAgcmdiYSgwLCAwLCAwLCAwLjY1KSAxMDAlXHJcbiAgKTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5ib3R0b20tY29udHJvbHMtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvdHRvbTogMDtcclxuICB6LWluZGV4OiA0O1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi50b3AtY29udHJvbHMtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiA0O1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "WOgW");








let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"] }, _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_7__["AndroidPermissions"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "blt5":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/meeting-controls/meeting-controls.component.ts ***!
  \**********************************************************************************/
/*! exports provided: MeetingControlsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetingControlsComponent", function() { return MeetingControlsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_meeting_controls_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./meeting-controls.component.html */ "yyA1");
/* harmony import */ var _meeting_controls_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./meeting-controls.component.css */ "zfsz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");





let MeetingControlsComponent = class MeetingControlsComponent {
    constructor() {
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
    ngOnInit() {
    }
    onMicMute(value) {
        this.micMuted.emit(value);
    }
    onCameraMute(value) {
        this.cameraMuted.emit(value);
    }
    onHangUp() {
        this.hangedUp.emit();
    }
    onPin(value) {
        this.pinned.emit(value);
    }
};
MeetingControlsComponent.ctorParameters = () => [];
MeetingControlsComponent.propDecorators = {
    micMuted: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    cameraMuted: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    hangedUp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    pinned: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
MeetingControlsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-meeting-controls',
        template: _raw_loader_meeting_controls_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_meeting_controls_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MeetingControlsComponent);



/***/ }),

/***/ "hrsj":
/*!**************************************************!*\
  !*** ./src/app/shared/services/token.service.ts ***!
  \**************************************************/
/*! exports provided: tokenLifeTime, TokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenLifeTime", function() { return tokenLifeTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenService", function() { return TokenService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid */ "4USb");






const tokenLifeTime = 24 * 60 * 6;
const url = 'https://ngx-agora-sdk-ng.herokuapp.com/access_token';
let TokenService = class TokenService {
    constructor(httpClinet) {
        this.httpClinet = httpClinet;
        this.token = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    getToken(channelName) {
        this.httpClinet.get(url, {
            params: {
                channel: channelName,
            }
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(3), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError)).subscribe((token) => {
            this.token.next(token.token);
        });
    }
    getChannel(link) {
        const params = link.split('@');
        if (!Object(uuid__WEBPACK_IMPORTED_MODULE_5__["validate"])(params[0]) || isNaN(parseInt(params[2], 10)) || isNaN(parseInt(params[3], 10))) {
            return { error: 'Your Link is not Valid!' };
        }
        if (Date.now() > ((+params[2]) + (+params[3])) * 1000) {
            return { error: 'Your Link is Expired!' };
        }
        return { channel: params[1] };
    }
    getLink(channelName) {
        return `${Object(uuid__WEBPACK_IMPORTED_MODULE_5__["v4"])()}@${channelName}@${tokenLifeTime}@${Math.floor(Date.now() / 1000)}`;
    }
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong.
            console.error(`Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        // Return an observable with a user-facing error message.
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Something bad happened; please try again later.');
    }
};
TokenService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
TokenService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], TokenService);



/***/ }),

/***/ "j61v":
/*!**********************************************************************************************************!*\
  !*** ./src/app/shared/components/round-tranparent-icon-button/round-tranparent-icon-button.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: RoundTranparentIconButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoundTranparentIconButtonComponent", function() { return RoundTranparentIconButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_round_tranparent_icon_button_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./round-tranparent-icon-button.component.html */ "Wr82");
/* harmony import */ var _round_tranparent_icon_button_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./round-tranparent-icon-button.component.css */ "qFAF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let RoundTranparentIconButtonComponent = class RoundTranparentIconButtonComponent {
    constructor() {
        this.activeColor = 'red';
        this.type = 'normal';
        this.activeIconStyle = { stroke: 'white', color: 'white' };
        this.inactiveIconStyle = { stroke: 'white', color: 'white' };
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.isActive = false;
        this.buttonStyle = {
            active: {
                backgroundColor: this.activeColor,
            }
        };
    }
    ngOnInit() { }
    click() {
        if (this.type === 'toggle') {
            this.isActive = !this.isActive;
        }
        this.onClick.emit(this.isActive);
    }
};
RoundTranparentIconButtonComponent.ctorParameters = () => [];
RoundTranparentIconButtonComponent.propDecorators = {
    activeColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    activeIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    activeIconStyle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    inactiveIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    inactiveIconStyle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    isActive: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
RoundTranparentIconButtonComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-round-tranparent-icon-button',
        template: _raw_loader_round_tranparent_icon_button_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_round_tranparent_icon_button_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RoundTranparentIconButtonComponent);



/***/ }),

/***/ "jsH7":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/meeting-preview/meeting-preview.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page\">\r\n  <div class=\"d-flex flex-row flex-wrap w-100 justify-content-center\">\r\n    <app-camera-preview></app-camera-preview>\r\n    <div class=\"meeting-actions-container d-flex flex-column align-items-center w-25 justify-content-md-center mt-sm-5\">\r\n      <div class=\"meeting-info\">\r\n        <h5>Meeting Ready</h5>\r\n        <form [formGroup]=\"connectionInfoForm\" (ngSubmit)=\"onJoinMeeting()\">\r\n          <div class=\"input-group input-group-sm mb-3\">\r\n            <div class=\"input-group-prepend\">\r\n              <span class=\"input-group-text\">Channel</span>\r\n            </div>\r\n            <input type=\"text\" class=\"form-control\" formControlName=\"channel\">\r\n          </div>\r\n          <div class=\"input-group input-group-sm mb-3\">\r\n            <div class=\"input-group-prepend\">\r\n              <span class=\"input-group-text\">Invite Code</span>\r\n            </div>\r\n            <input type=\"text\" class=\"form-control\" formControlName=\"link\">\r\n          </div>\r\n          <div class=\"button-container\">\r\n            <ion-button color=\"primary\" type=\"submit\">Join Now</ion-button>\r\n            <!-- <button type=\"submit\" class=\"btn btn-primary\">Join Now</button> -->\r\n          </div>\r\n        </form>\r\n      </div> \r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "kAKt":
/*!***********************************************************************************!*\
  !*** ./src/app/shared/components/sound-visualizer/sound-visualizer.component.css ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".lines {\r\n  background-color: yellow;\r\n  width: 5px;\r\n  border-top-left-radius: 2px;\r\n  border-top-right-radius: 2px;\r\n  margin: 0 1px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvdW5kLXZpc3VhbGl6ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUF3QjtFQUN4QixVQUFVO0VBQ1YsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixhQUFhO0FBQ2YiLCJmaWxlIjoic291bmQtdmlzdWFsaXplci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpbmVzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XHJcbiAgd2lkdGg6IDVweDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAycHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDJweDtcclxuICBtYXJnaW46IDAgMXB4O1xyXG59Il19 */");

/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "kNOy":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/sound-visualizer/sound-visualizer.component.ts ***!
  \**********************************************************************************/
/*! exports provided: SoundVisualizerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoundVisualizerComponent", function() { return SoundVisualizerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_sound_visualizer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./sound-visualizer.component.html */ "J8WR");
/* harmony import */ var _sound_visualizer_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sound-visualizer.component.css */ "kAKt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_sound_meter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/sound-meter */ "zILU");
/* harmony import */ var _services_media_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/media.service */ "yvDh");






const bars = 4;
let SoundVisualizerComponent = class SoundVisualizerComponent {
    constructor(mediaService) {
        this.mediaService = mediaService;
        this.values = new Array(bars);
        this.index = 0;
        this.lastValue = 0;
        this.values.fill(3);
    }
    set mediaStream(value) {
        if (value) {
            this.connect(value);
        }
    }
    ngOnInit() { }
    connect(stream) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.soundMeter = new _core_sound_meter__WEBPACK_IMPORTED_MODULE_4__["SoundMeter"](new AudioContext());
            this.soundMeter.connect(stream, (instant) => this.updateVisualizer(instant), (error) => {
                if (error) {
                    console.error('sound meter error: ', error.message, error.name);
                }
            });
        });
    }
    ngOnDestroy() {
        if (this.soundMeter) {
            this.soundMeter.context.close();
        }
    }
    updateVisualizer(value) {
        if (value !== this.lastValue) {
            this.index++;
            if (this.index > (bars - 1)) {
                this.index = 0;
            }
            this.values[this.index] = Math.floor(value * 30) + 3;
            this.lastValue = value;
            setTimeout(() => {
                this.values.fill(3);
            }, 1000);
        }
    }
};
SoundVisualizerComponent.ctorParameters = () => [
    { type: _services_media_service__WEBPACK_IMPORTED_MODULE_5__["MediaService"] }
];
SoundVisualizerComponent.propDecorators = {
    mediaStream: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
SoundVisualizerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-sound-visualizer',
        template: _raw_loader_sound_visualizer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_sound_visualizer_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SoundVisualizerComponent);



/***/ }),

/***/ "n6pe":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/sound-meter/sound-meter.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<meter #meter high=\"0.25\" max=\"1\" value=\"0\"></meter>");

/***/ }),

/***/ "qFAF":
/*!***********************************************************************************************************!*\
  !*** ./src/app/shared/components/round-tranparent-icon-button/round-tranparent-icon-button.component.css ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\r\n    display: flex;\r\n    border: solid 2px white;\r\n    width: 3.5rem;\r\n    height: 3.5rem;\r\n    border-radius: 50%;\r\n    background-color: transparent;\r\n    overflow: hidden;\r\n    justify-content: center;\r\n    align-items: center;\r\n    transition: all .5s;\r\n    cursor: pointer;\r\n}\r\n\r\n.container:hover {\r\n    background-color: rgba(255,255,255, .65);\r\n}\r\n\r\na {\r\n    cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdW5kLXRyYW5wYXJlbnQtaWNvbi1idXR0b24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsNkJBQTZCO0lBQzdCLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJyb3VuZC10cmFucGFyZW50LWljb24tYnV0dG9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBib3JkZXI6IHNvbGlkIDJweCB3aGl0ZTtcclxuICAgIHdpZHRoOiAzLjVyZW07XHJcbiAgICBoZWlnaHQ6IDMuNXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuNXM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jb250YWluZXI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwgLjY1KTtcclxufVxyXG5cclxuYSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iXX0= */");

/***/ }),

/***/ "sXV4":
/*!**************************************************************!*\
  !*** ./src/app/pages/meeting-page/meeting-page.component.ts ***!
  \**************************************************************/
/*! exports provided: MeetingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetingPageComponent", function() { return MeetingPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_meeting_page_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./meeting-page.component.html */ "7hRC");
/* harmony import */ var _meeting_page_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./meeting-page.component.css */ "RxHp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ngx_agora_sdk_ng__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-agora-sdk-ng */ "knEG");
/* harmony import */ var _shared_services_media_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/services/media.service */ "yvDh");
/* harmony import */ var _shared_services_token_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/services/token.service */ "hrsj");










let MeetingPageComponent = class MeetingPageComponent {
    constructor(activatedRoute, agoraService, mediaService, tokenService, router) {
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
    ngOnInit() {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["forkJoin"])([
            this.activatedRoute.queryParams.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1)),
            this.mediaService.selectedAudioInputId.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1)),
            this.mediaService.selectedAudioOutputId.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1)),
            this.mediaService.selectedVideoInputId.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1)),
        ])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1)).subscribe(([params, aInId, aOutId, vInId]) => {
            this.link = params.link;
            this.channel = params.channel;
            if (this.link) {
                const result = this.tokenService.getChannel(this.link);
                if (result.error) {
                    alert(result.error);
                    this.router.navigate(['/..']);
                    return;
                }
                this.channel = result.channel;
            }
            this.tokenService.getToken(this.channel);
            this.audioInId = aInId;
            this.videoInId = vInId;
            this.audioOutId = aOutId;
        });
        const tokenSub = this.tokenService.token.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1)).subscribe(token => {
            this.token = token;
            this.joinVideo();
        });
        this.subscriptions.push(tokenSub);
        const remoteUserLeaveSubs = this.agoraService.onRemoteUserLeft().subscribe(leftuser => {
            var _a;
            this.userList = this.userList.filter(user => { var _a; return ((_a = user.user) === null || _a === void 0 ? void 0 : _a.uid) !== leftuser.user.uid; });
            if (this.pinnedUser && ((_a = this.pinnedUser.user) === null || _a === void 0 ? void 0 : _a.uid) && this.pinnedUser.user.uid === leftuser.user.uid) {
                this.pinnedUser = null;
            }
        });
        this.subscriptions.push(remoteUserLeaveSubs);
        const remoteUserChangeSubs = this.agoraService.onRemoteUsersStatusChange().subscribe(status => {
            var _a;
            switch (status.connectionState) {
                case 'CONNECTED':
                    if (!this.userList.find(user => { var _a; return ((_a = user.user) === null || _a === void 0 ? void 0 : _a.uid) === status.user.uid; })) {
                        this.userList.push({ type: 'remote', user: status.user });
                    }
                    break;
                case 'DISCONNECTED':
                case 'DISCONNECTING':
                case 'RECONNECTING':
                    const currentUserIndex = this.userList.findIndex(user => { var _a; return ((_a = user.user) === null || _a === void 0 ? void 0 : _a.uid) === status.user.uid; });
                    if (currentUserIndex >= 0) {
                        this.userList[currentUserIndex] = { type: 'remote', user: status.user };
                        if (this.pinnedUser && ((_a = this.pinnedUser.user) === null || _a === void 0 ? void 0 : _a.uid) && this.pinnedUser.user.uid === status.user.uid) {
                            this.pinnedUser = { type: 'remote', user: status.user };
                        }
                    }
                    break;
            }
        });
        this.subscriptions.push(remoteUserChangeSubs);
        const localUserJoinedSubs = this.agoraService.onLocalUserJoined().subscribe(track => {
            this.userList.push({ type: 'local', mediaTrack: track.track });
        });
        this.subscriptions.push(localUserJoinedSubs);
    }
    ngOnDestroy() {
        for (const sub of this.subscriptions) {
            sub.unsubscribe();
        }
    }
    joinVideo() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.mediaTrack = yield this.agoraService.join(this.channel, this.token)
                .WithCameraAndMicrophone(this.audioInId, this.videoInId)
                .Apply();
        });
    }
    onLocalMic(value) {
        var _a, _b;
        !value ? (_a = this.mediaTrack) === null || _a === void 0 ? void 0 : _a.microphoneUnMute() : (_b = this.mediaTrack) === null || _b === void 0 ? void 0 : _b.microphoneMute();
    }
    onLocalCamera(value) {
        var _a, _b;
        !value ? (_a = this.mediaTrack) === null || _a === void 0 ? void 0 : _a.cameraOn() : (_b = this.mediaTrack) === null || _b === void 0 ? void 0 : _b.cameraOff();
    }
    onLocalPinned(value) {
        const localuser = this.userList.find(user => user.type === 'local');
        if (localuser) {
            this.onPin(localuser);
        }
    }
    onLocalLeave() {
        var _a;
        this.agoraService.leave();
        (_a = this.mediaTrack) === null || _a === void 0 ? void 0 : _a.stop();
        this.router.navigate(['/..']);
    }
    onPin(user) {
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
        }
        else {
            this.pinnedUser = user;
        }
    }
    getUnpinnedUsers() {
        var _a;
        if (((_a = this.pinnedUser) === null || _a === void 0 ? void 0 : _a.type) === 'local') {
            return this.userList.filter(user => user.type !== 'local');
        }
        return this.userList.filter(user => { var _a, _b, _c; return ((_a = user.user) === null || _a === void 0 ? void 0 : _a.uid) !== ((_c = (_b = this.pinnedUser) === null || _b === void 0 ? void 0 : _b.user) === null || _c === void 0 ? void 0 : _c.uid); });
    }
};
MeetingPageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: ngx_agora_sdk_ng__WEBPACK_IMPORTED_MODULE_7__["NgxAgoraSdkNgService"] },
    { type: _shared_services_media_service__WEBPACK_IMPORTED_MODULE_8__["MediaService"] },
    { type: _shared_services_token_service__WEBPACK_IMPORTED_MODULE_9__["TokenService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
MeetingPageComponent.propDecorators = {
    localVideo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['localVideo', { static: true },] }]
};
MeetingPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-meeting-page',
        template: _raw_loader_meeting_page_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_meeting_page_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MeetingPageComponent);



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_agora_sdk_ng__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-agora-sdk-ng */ "knEG");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _pages_meeting_preview_meeting_preview_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/meeting-preview/meeting-preview.component */ "zP2K");
/* harmony import */ var _shared_components_round_tranparent_icon_button_round_tranparent_icon_button_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/components/round-tranparent-icon-button/round-tranparent-icon-button.component */ "j61v");
/* harmony import */ var _shared_components_input_output_settings_input_output_settings_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/components/input-output-settings/input-output-settings.component */ "wn2D");
/* harmony import */ var _shared_components_sound_meter_sound_meter_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/components/sound-meter/sound-meter.component */ "QLmE");
/* harmony import */ var _shared_components_camera_preview_camera_preview_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/components/camera-preview/camera-preview.component */ "va/j");
/* harmony import */ var _pages_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/welcome/welcome.component */ "+j1i");
/* harmony import */ var _pages_meeting_page_meeting_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/meeting-page/meeting-page.component */ "sXV4");
/* harmony import */ var _shared_directives_agora_video_player_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/directives/agora-video-player.directive */ "OAHU");
/* harmony import */ var _shared_components_meeting_controls_meeting_controls_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/components/meeting-controls/meeting-controls.component */ "blt5");
/* harmony import */ var _shared_components_meeting_participant_meeting_participant_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/components/meeting-participant/meeting-participant.component */ "TpVO");
/* harmony import */ var _shared_components_meeting_participant_controls_meeting_participant_controls_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/components/meeting-participant-controls/meeting-participant-controls.component */ "I0zc");
/* harmony import */ var _shared_components_sound_visualizer_sound_visualizer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/components/sound-visualizer/sound-visualizer.component */ "kNOy");




















const routes = [
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: 'welcome', component: _pages_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_13__["WelcomeComponent"] },
    { path: 'preview', component: _pages_meeting_preview_meeting_preview_component__WEBPACK_IMPORTED_MODULE_8__["MeetingPreviewComponent"] },
    { path: 'settings', component: _shared_components_input_output_settings_input_output_settings_component__WEBPACK_IMPORTED_MODULE_10__["InputOutputSettingsComponent"] },
    { path: 'meeting', component: _pages_meeting_page_meeting_page_component__WEBPACK_IMPORTED_MODULE_14__["MeetingPageComponent"] }
    // {
    //   path: '',
    //   loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
    // }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _pages_meeting_preview_meeting_preview_component__WEBPACK_IMPORTED_MODULE_8__["MeetingPreviewComponent"],
            _shared_components_round_tranparent_icon_button_round_tranparent_icon_button_component__WEBPACK_IMPORTED_MODULE_9__["RoundTranparentIconButtonComponent"],
            _shared_components_input_output_settings_input_output_settings_component__WEBPACK_IMPORTED_MODULE_10__["InputOutputSettingsComponent"],
            _shared_components_sound_meter_sound_meter_component__WEBPACK_IMPORTED_MODULE_11__["SoundMeterComponent"],
            _shared_components_camera_preview_camera_preview_component__WEBPACK_IMPORTED_MODULE_12__["CameraPreviewComponent"],
            _pages_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_13__["WelcomeComponent"],
            _pages_meeting_page_meeting_page_component__WEBPACK_IMPORTED_MODULE_14__["MeetingPageComponent"],
            _shared_directives_agora_video_player_directive__WEBPACK_IMPORTED_MODULE_15__["AgoraVideoPlayerDirective"],
            _shared_components_meeting_controls_meeting_controls_component__WEBPACK_IMPORTED_MODULE_16__["MeetingControlsComponent"],
            _shared_components_meeting_participant_meeting_participant_component__WEBPACK_IMPORTED_MODULE_17__["MeetingParticipantComponent"],
            _shared_components_meeting_participant_controls_meeting_participant_controls_component__WEBPACK_IMPORTED_MODULE_18__["MeetingParticipantControlsComponent"],
            _shared_components_sound_visualizer_sound_visualizer_component__WEBPACK_IMPORTED_MODULE_19__["SoundVisualizerComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] }),
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"],
            ngx_agora_sdk_ng__WEBPACK_IMPORTED_MODULE_6__["NgxAgoraSdkNgModule"].forRoot({
                AppID: 'replace-agora-appId',
                Video: { codec: 'h264', mode: 'rtc', role: 'host' }
            }),
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "va/j":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/camera-preview/camera-preview.component.ts ***!
  \******************************************************************************/
/*! exports provided: CameraPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraPreviewComponent", function() { return CameraPreviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_camera_preview_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./camera-preview.component.html */ "SxAu");
/* harmony import */ var _camera_preview_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./camera-preview.component.css */ "Z8eA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _services_media_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/media.service */ "yvDh");






let CameraPreviewComponent = class CameraPreviewComponent {
    constructor(mediaService) {
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
    ngAfterViewInit() {
        const vsubscription = this.mediaService.selectedVideoInputId.subscribe(id => {
            this.selectedVideoInId = id;
            this.startCameraMic(this.selectedVideoInId);
        });
        this.subscriptions.push(vsubscription);
    }
    ngOnDestroy() {
        for (const sub of this.subscriptions) {
            sub.unsubscribe();
        }
        if (this.stream) {
            this.stream.getTracks().forEach(track => {
                track.stop();
            });
        }
    }
    startCameraMic(camDeviceId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.isCameraOff) {
                if (this.stream) {
                    this.stream.getTracks().forEach(track => {
                        track.stop();
                    });
                }
                return;
            }
            const mediaStreamType = _services_media_service__WEBPACK_IMPORTED_MODULE_5__["MediaStreamType"].video;
            this.stream = yield this.mediaService.getMediaStream(mediaStreamType, undefined, undefined, camDeviceId);
            this.cameraElementRef.nativeElement.srcObject = this.stream;
            this.cameraElementRef.nativeElement.onloadedmetadata = () => {
                this.cameraElementRef.nativeElement.play();
            };
        });
    }
    onMicrophoneClicked(state) {
        this.isMicrophoneMute = state;
    }
    onCameraClicked(state) {
        this.isCameraOff = state;
        this.startCameraMic(this.selectedVideoInId);
    }
    onShowSettings() {
        this.showSettings = true;
    }
    onCloseSettings() {
        this.showSettings = false;
    }
};
CameraPreviewComponent.ctorParameters = () => [
    { type: _services_media_service__WEBPACK_IMPORTED_MODULE_5__["MediaService"] }
];
CameraPreviewComponent.propDecorators = {
    cameraElementRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['camera',] }]
};
CameraPreviewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-camera-preview',
        template: _raw_loader_camera_preview_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_camera_preview_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CameraPreviewComponent);



/***/ }),

/***/ "wn2D":
/*!********************************************************************************************!*\
  !*** ./src/app/shared/components/input-output-settings/input-output-settings.component.ts ***!
  \********************************************************************************************/
/*! exports provided: TabKind, InputOutputSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabKind", function() { return TabKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputOutputSettingsComponent", function() { return InputOutputSettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_input_output_settings_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./input-output-settings.component.html */ "1U5E");
/* harmony import */ var _input_output_settings_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input-output-settings.component.css */ "WRDt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _services_media_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/media.service */ "yvDh");






var TabKind;
(function (TabKind) {
    TabKind[TabKind["audio"] = 0] = "audio";
    TabKind[TabKind["video"] = 1] = "video";
})(TabKind || (TabKind = {}));
let InputOutputSettingsComponent = class InputOutputSettingsComponent {
    constructor(mediaService) {
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
    ngOnInit() {
        this.getDeviceInfos().then(() => {
            const videoInSubs = this.mediaService.selectedVideoInputId.subscribe(id => {
                this.selectedVideoId = id;
                if (id && this.selectedTab === TabKind.video) {
                    this.getVideo(id);
                }
                if (!id) {
                    if (this.camDevicesInfos.length > 0) {
                        this.mediaService.videoInputId = this.camDevicesInfos[0].deviceId;
                    }
                }
            });
            this.subscriptions.push(videoInSubs);
            const audioOutSubs = this.mediaService.selectedAudioOutputId.subscribe(id => {
                this.selectedAudioOutId = id;
                if (id && this.selectedTab === TabKind.audio) {
                    this.mediaService.setSinkID(this.testAudio, id);
                }
                if (!id) {
                    if (this.speakerDevicesInfos.length > 0) {
                        this.mediaService.audioOutputId = this.speakerDevicesInfos[0].deviceId;
                    }
                }
            });
            this.subscriptions.push(audioOutSubs);
            const audioInSubs = this.mediaService.selectedAudioInputId.subscribe(id => {
                this.selectedAudioInId = id;
                if (!id) {
                    if (this.micDevicesInfos.length > 0) {
                        this.mediaService.audioInputId = this.micDevicesInfos[0].deviceId;
                    }
                }
            });
            this.subscriptions.push(audioInSubs);
        });
    }
    ngOnDestroy() {
        for (const subs of this.subscriptions) {
            subs.unsubscribe();
        }
        this.stopAllStreamTracks();
    }
    getDeviceInfos() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.micDevicesInfos = yield this.mediaService.getMediaSources('audioinput');
            this.speakerDevicesInfos = yield this.mediaService.getMediaSources('audiooutput');
            this.camDevicesInfos = yield this.mediaService.getMediaSources('videoinput');
        });
    }
    onTabClick(tab) {
        this.selectedTab = tab;
        this.mediaService.videoInputId = this.selectedVideoId;
    }
    onTestAudio() {
        this.testAudio.play();
    }
    onMicChange(value) {
        this.mediaService.audioInputId = value;
    }
    onSpeakerChange(value) {
        this.mediaService.audioOutputId = value;
    }
    onCameraChange(value) {
        this.mediaService.videoInputId = value;
    }
    onClose() {
        this.closed.emit();
    }
    stopAllStreamTracks() {
        if (this.stream) {
            this.stream.getTracks().forEach(track => {
                track.stop();
            });
        }
    }
    getVideo(deviceId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.stopAllStreamTracks();
            this.stream = yield this.mediaService.getMediaStream(_services_media_service__WEBPACK_IMPORTED_MODULE_5__["MediaStreamType"].video, 80, 50, deviceId);
            this.videoSample.nativeElement.srcObject = this.stream;
            this.videoSample.nativeElement.onloadedmetadata = () => {
                this.videoSample.nativeElement.play();
            };
        });
    }
};
InputOutputSettingsComponent.ctorParameters = () => [
    { type: _services_media_service__WEBPACK_IMPORTED_MODULE_5__["MediaService"] }
];
InputOutputSettingsComponent.propDecorators = {
    videoSample: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['videoSample',] }],
    closed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
InputOutputSettingsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-input-output-settings',
        template: _raw_loader_input_output_settings_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_input_output_settings_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], InputOutputSettingsComponent);



/***/ }),

/***/ "wthP":
/*!***********************************************************************************************************!*\
  !*** ./src/app/shared/components/meeting-participant-controls/meeting-participant-controls.component.css ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a {\r\n  cursor: pointer;\r\n  color: rgb(201, 200, 200);\r\n}\r\n\r\na:hover {\r\n  color: rgb(228, 228, 228);\r\n}\r\n\r\n.buttons-container {\r\n  background-color: rgba(128, 128, 128, 0.65);\r\n  border-radius: 0.75rem;\r\n  padding: 0.5rem;\r\n  opacity: 0;\r\n  transition: all .5s;\r\n}\r\n\r\n.buttons-container.show {\r\n  opacity: 1;\r\n}\r\n\r\n.btn-item {\r\n  margin: 0.2rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lZXRpbmctcGFydGljaXBhbnQtY29udHJvbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSwyQ0FBMkM7RUFDM0Msc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixVQUFVO0VBQ1YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJtZWV0aW5nLXBhcnRpY2lwYW50LWNvbnRyb2xzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6IHJnYigyMDEsIDIwMCwgMjAwKTtcclxufVxyXG5cclxuYTpob3ZlciB7XHJcbiAgY29sb3I6IHJnYigyMjgsIDIyOCwgMjI4KTtcclxufVxyXG5cclxuLmJ1dHRvbnMtY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNjUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNzVyZW07XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC41cztcclxufVxyXG5cclxuLmJ1dHRvbnMtY29udGFpbmVyLnNob3cge1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5idG4taXRlbSB7XHJcbiAgbWFyZ2luOiAwLjJyZW07XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "xBpO":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/welcome/welcome.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar >\r\n    <ion-title>\r\n      Agora Video Call\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-card class=\"welcome-card ion-color\" style=\"background-color: #164598;\">\r\n      <img src=\"/assets/meeting-min.png\" alt=\"\" />\r\n      <ion-card-header>\r\n        <ion-card-subtitle>Get Started</ion-card-subtitle>\r\n        <ion-card-title>A demo of Agora SDK implementation</ion-card-title>\r\n      </ion-card-header>\r\n      <ion-card-content class=\"ion-text-center\">\r\n        <ion-button color=\"primary\" [routerLink]=\"['/preview']\"> New Meeting</ion-button>\r\n        <!-- <a class=\"btn btn-success mt-4\" [routerLink]=\"['/preview']\">\r\n          New Meeting\r\n        </a> -->\r\n      </ion-card-content>\r\n    </ion-card>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-no-border\">\r\n  <ion-toolbar class=\"ion-text-center\">\r\n    <ion-text >\r\n     <small> Implemented by HasoTechnology </small>\r\n    </ion-text>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "yvDh":
/*!**************************************************!*\
  !*** ./src/app/shared/services/media.service.ts ***!
  \**************************************************/
/*! exports provided: MediaStreamType, MediaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaStreamType", function() { return MediaStreamType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaService", function() { return MediaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_agora_sdk_ng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-agora-sdk-ng */ "knEG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");




var MediaStreamType;
(function (MediaStreamType) {
    MediaStreamType[MediaStreamType["audio"] = 0] = "audio";
    MediaStreamType[MediaStreamType["video"] = 1] = "video";
    MediaStreamType[MediaStreamType["all"] = 2] = "all";
})(MediaStreamType || (MediaStreamType = {}));
;
let MediaService = class MediaService {
    constructor(agoraService) {
        this.agoraService = agoraService;
        this.mediaDevicesInfos = [];
        this.selectedAudioOutputId = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.selectedVideoInputId = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.selectedAudioInputId = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
    }
    set audioInputId(id) {
        this.selectedAudioInputId.next(id);
    }
    set audioOutputId(id) {
        this.selectedAudioOutputId.next(id);
    }
    set videoInputId(id) {
        this.selectedVideoInputId.next(id);
    }
    getMediaSources(kind) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                //await navigator.mediaDevices.getUserMedia({ audio: true, video: true });
                this.mediaDevicesInfos = yield this.agoraService.getDevices(); //await navigator.mediaDevices.enumerateDevices();
            }
            catch (error) {
                console.error(error);
            }
            finally {
                return this.mediaDevicesInfos.filter(mdi => mdi.kind === kind);
            }
        });
    }
    setSinkID(element, deviceId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield element.setSinkId(deviceId);
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    getMediaStream(type, videoWidth, videoHeight, videoDeviceId, audioDeviceId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const constraints = {
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
                if ((videoHeight && videoWidth) || videoDeviceId) {
                    constraints.video = {
                        width: videoWidth,
                        height: videoHeight,
                        deviceId: videoDeviceId
                    };
                }
            }
            try {
                this.lastStream = yield navigator.mediaDevices.getUserMedia(constraints);
            }
            catch (error) {
                console.error(error);
            }
            finally {
                return this.lastStream;
            }
        });
    }
};
MediaService.ctorParameters = () => [
    { type: ngx_agora_sdk_ng__WEBPACK_IMPORTED_MODULE_2__["NgxAgoraSdkNgService"] }
];
MediaService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MediaService);



/***/ }),

/***/ "yyA1":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/meeting-controls/meeting-controls.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n  <ion-fab-button>\r\n    <ion-icon name=\"arrow-up-circle\"></ion-icon>\r\n  </ion-fab-button>\r\n  <ion-fab-list side=\"top\">\r\n    <ion-fab-button>\r\n      <app-round-tranparent-icon-button\r\n        type=\"toggle\"\r\n        [activeIcon]=\"micOffIcon\"\r\n        [inactiveIcon]=\"micIcon\"\r\n        (onClick)=\"onMicMute($event)\"\r\n      ></app-round-tranparent-icon-button>\r\n    </ion-fab-button>\r\n    <ion-fab-button>\r\n      <app-round-tranparent-icon-button\r\n        class=\"mr-3 ml-3\"\r\n        type=\"normal\"\r\n        [inactiveIcon]=\"hangUpIcon\"\r\n        [inactiveIconStyle]=\"{\r\n          stroke: 'red',\r\n          color: 'red'\r\n        }\"\r\n        (onClick)=\"onHangUp()\"\r\n      ></app-round-tranparent-icon-button>\r\n    </ion-fab-button>\r\n    <ion-fab-button>\r\n      <app-round-tranparent-icon-button\r\n        class=\"mr-3\"\r\n        type=\"toggle\"\r\n        [activeIcon]=\"camOffIcon\"\r\n        [inactiveIcon]=\"camIcon\"\r\n        (onClick)=\"onCameraMute($event)\"\r\n      ></app-round-tranparent-icon-button>\r\n    </ion-fab-button>\r\n  </ion-fab-list>\r\n</ion-fab>\r\n<!-- <div class=\"controls-container w-100 d-flex flex-row justify-content-center\">\r\n  <app-round-tranparent-icon-button\r\n    type=\"toggle\"\r\n    [activeIcon]=\"micOffIcon\"\r\n    [inactiveIcon]=\"micIcon\"\r\n    (onClick)=\"onMicMute($event)\"\r\n  ></app-round-tranparent-icon-button>\r\n\r\n  <app-round-tranparent-icon-button\r\n    class=\"mr-3 ml-3\"\r\n    type=\"normal\"\r\n    [inactiveIcon]=\"hangUpIcon\"\r\n    [inactiveIconStyle]=\"{\r\n      stroke: 'red',\r\n      color: 'red'\r\n    }\"\r\n    (onClick)=\"onHangUp()\"\r\n  ></app-round-tranparent-icon-button>\r\n\r\n  <app-round-tranparent-icon-button\r\n    class=\"mr-3\"\r\n    type=\"toggle\"\r\n    [activeIcon]=\"camOffIcon\"\r\n    [inactiveIcon]=\"camIcon\"\r\n    (onClick)=\"onCameraMute($event)\"\r\n  ></app-round-tranparent-icon-button>\r\n\r\n  <app-round-tranparent-icon-button\r\n    type=\"normal\"\r\n    [activeIcon]=\"pinIcon\"\r\n    [inactiveIcon]=\"pinIcon\"\r\n    (onClick)=\"onPin($event)\"\r\n  ></app-round-tranparent-icon-button>\r\n</div> -->\r\n");

/***/ }),

/***/ "zILU":
/*!*************************************!*\
  !*** ./src/app/core/sound-meter.ts ***!
  \*************************************/
/*! exports provided: SoundMeter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoundMeter", function() { return SoundMeter; });
class SoundMeter {
    constructor(context) {
        this.context = context;
        this.instant = 0.0;
    }
    internalConnect(stream, callback) {
        try {
            this.mic = this.context.createMediaStreamSource(stream);
            this.mic.connect(this.script);
            this.script.connect(this.context.destination);
            if (typeof callback !== 'undefined') {
                callback(null);
            }
        }
        catch (error) {
            if (typeof callback !== 'undefined') {
                callback(error);
            }
        }
    }
    ;
    connect(stream, updatedValueCallback, errorCallback) {
        this.script = this.context.createScriptProcessor(2048, 1, 1);
        this.script.addEventListener('audioprocess', (event) => {
            const input = event.inputBuffer.getChannelData(0);
            let i;
            let sum = 0.0;
            for (i = 0; i < input.length; ++i) {
                sum += input[i] * input[i];
            }
            this.instant = Math.sqrt(sum / input.length);
            updatedValueCallback(this.instant.toFixed(2));
        });
        this.internalConnect(stream, errorCallback);
    }
}


/***/ }),

/***/ "zP2K":
/*!********************************************************************!*\
  !*** ./src/app/pages/meeting-preview/meeting-preview.component.ts ***!
  \********************************************************************/
/*! exports provided: MeetingPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetingPreviewComponent", function() { return MeetingPreviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_meeting_preview_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./meeting-preview.component.html */ "jsH7");
/* harmony import */ var _meeting_preview_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./meeting-preview.component.css */ "JJ5p");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_services_token_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/token.service */ "hrsj");







let MeetingPreviewComponent = class MeetingPreviewComponent {
    constructor(formBuilder, router, tokeService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.tokeService = tokeService;
        this.showSettings = false;
        this.joinLoading = false;
        this.newLoading = false;
        this.subscriptions = [];
    }
    ngOnInit() {
        var _a, _b;
        this.connectionInfoForm = this.formBuilder.group({
            channel: '',
            link: '',
        });
        const channelChangeSubs = (_a = this.connectionInfoForm.get('channel')) === null || _a === void 0 ? void 0 : _a.valueChanges.subscribe(value => {
            var _a, _b, _c, _d;
            if (value === '') {
                (_b = (_a = this.connectionInfoForm) === null || _a === void 0 ? void 0 : _a.get('link')) === null || _b === void 0 ? void 0 : _b.enable({ emitEvent: false });
            }
            else {
                (_d = (_c = this.connectionInfoForm) === null || _c === void 0 ? void 0 : _c.get('link')) === null || _d === void 0 ? void 0 : _d.disable({ emitEvent: false });
            }
        });
        this.subscriptions.push(channelChangeSubs);
        const linkChangeSubs = (_b = this.connectionInfoForm.get('link')) === null || _b === void 0 ? void 0 : _b.valueChanges.subscribe(value => {
            var _a, _b, _c, _d;
            if (value === '') {
                (_b = (_a = this.connectionInfoForm) === null || _a === void 0 ? void 0 : _a.get('channel')) === null || _b === void 0 ? void 0 : _b.enable({ emitEvent: false });
            }
            else {
                (_d = (_c = this.connectionInfoForm) === null || _c === void 0 ? void 0 : _c.get('channel')) === null || _d === void 0 ? void 0 : _d.disable({ emitEvent: false });
            }
        });
        this.subscriptions.push(linkChangeSubs);
    }
    ngOnDestroy() {
        for (const subs of this.subscriptions) {
            subs.unsubscribe();
        }
    }
    onShowSettings() {
        this.showSettings = true;
    }
    onCloseSettings() {
        this.showSettings = false;
    }
    onJoinMeeting() {
        var _a;
        const { channel, link } = (_a = this.connectionInfoForm) === null || _a === void 0 ? void 0 : _a.value;
        if (channel) {
            const joinLink = this.tokeService.getLink(channel);
            let meetinglink = location.origin + "/#/meeting?link=" + joinLink;
            setTimeout(function () {
                alert(`Code copied, You can Invite other people using the code: ${joinLink}`);
            }, 1000);
            navigator.clipboard.writeText(joinLink).then().catch(e => console.error(e));
            console.log(joinLink);
        }
        this.router.navigate(['/meeting'], { queryParams: { channel, link } });
    }
};
MeetingPreviewComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _shared_services_token_service__WEBPACK_IMPORTED_MODULE_6__["TokenService"] }
];
MeetingPreviewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-meeting-preview',
        template: _raw_loader_meeting_preview_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_meeting_preview_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MeetingPreviewComponent);



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zfsz":
/*!***********************************************************************************!*\
  !*** ./src/app/shared/components/meeting-controls/meeting-controls.component.css ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".controls-container {\r\n    padding-top: 1rem;\r\n    padding-bottom: 1rem;\r\n    background-color: rgb(170, 170, 171);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lZXRpbmctY29udHJvbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsb0NBQW9DO0FBQ3hDIiwiZmlsZSI6Im1lZXRpbmctY29udHJvbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250cm9scy1jb250YWluZXIge1xyXG4gICAgcGFkZGluZy10b3A6IDFyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzAsIDE3MCwgMTcxKTtcclxufSJdfQ== */");

/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
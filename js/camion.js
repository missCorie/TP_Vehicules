"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var vehicule_1 = require("./vehicule");
var Camion = /** @class */ (function (_super) {
    __extends(Camion, _super);
    function Camion(participant) {
        var _this = _super.call(this) || this;
        _this._type = "camion";
        _this._capacite_du_reservoir = 200;
        _this._niveau_de_carburant = 0;
        _this._klaxon = "POUM POUM !";
        _this.player_name = participant;
        _this.consommation = 30 / 100;
        _this.vitesse_max = 90;
        return _this;
    }
    return Camion;
}(vehicule_1.default));
exports.default = Camion;

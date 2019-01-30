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
//import { Vehicule } from "./vehicule";
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto(participant) {
        var _this = _super.call(this) || this;
        _this._type = "moto";
        _this._capacite_du_reservoir = 30;
        _this._niveau_de_carburant = 0;
        _this._klaxon = "Bip Bip !";
        _this.player_name = participant;
        _this.consommation = 2 / 100;
        _this.vitesse_max = 180;
        return _this;
    }
    return Moto;
}(vehicule_1.default));
exports.default = Moto;

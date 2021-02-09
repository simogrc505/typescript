"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
var send_data = require('../microservices/send_data');
var Cart = /** @class */ (function () {
    function Cart(products) {
        this.products = products;
    }
    Cart.prototype.addProduct = function (p) {
        this.products.push(p);
        return this.products;
    };
    Cart.prototype.getProductsOrderedByPrice = function (sort) {
        if (sort === "asc") {
            return this.products.sort(function (p1, p2) {
                var v1 = p1.price;
                var v2 = p2.price;
                return v1 - v2;
            });
        }
        else {
            return this.products.sort(function (p1, p2) {
                var v1 = p1.price;
                var v2 = p2.price;
                return v2 - v1;
            });
        }
    };
    Cart.prototype.getTotalPrice = function (tag) {
        if (!tag) {
            return this.products.reduce(function (a, b) { return +a + +b.price; }, 0);
        }
        else {
            var filter_products = this.products.filter(function (obj) { return obj.tag === tag; });
            return filter_products.reduce(function (a, b) { return +a + +b.price; }, 0);
        }
    };
    Cart.prototype.emptyCart = function () {
        return this.products = [];
    };
    Cart.prototype.deleteProduct = function (id) {
        return this.products.filter(function (e) { return e.id !== id; });
    };
    Cart.prototype.sendData = function (array) {
        return send_data(array);
    };
    return Cart;
}());
exports.Cart = Cart;
//# sourceMappingURL=cart.js.map
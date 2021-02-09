"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product(id, title, price, quantity, tag) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.quantity = quantity;
        this.tag = tag;
    }
    Product.prototype.getPrice = function () {
        return this.price;
    };
    Product.prototype.getTitle = function () {
        return this.title;
    };
    Product.prototype.getTag = function () {
        return this.tag;
    };
    Product.prototype.getQuantity = function () {
        return this.quantity;
    };
    return Product;
}());
exports.Product = Product;
//# sourceMappingURL=product.js.map
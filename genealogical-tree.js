#!/usr/bin/env ts-node
"use strict";
{
    var Person_1 = /** @class */ (function () {
        function Person(name) {
            this.name = name;
            this.children = [];
            this.name = name;
        }
        Person.prototype.addChildren = function (children) {
            var _a;
            (_a = this.children).push.apply(_a, children);
        };
        Person.prototype.introduceFamily = function (generation) {
            if (generation === void 0) { generation = 0; }
            console.log('----'.repeat(generation) + " " + this.name);
            this.children.forEach(function (child) { return child.introduceFamily(generation + 1); });
        };
        return Person;
    }());
    var apolo_1 = new Person_1('Apolo');
    var child1 = new Person_1('Alex');
    var child2 = new Person_1('Tom');
    var grandChild1 = new Person_1('Beatriz');
    var grandChild2 = new Person_1('Bruer');
    child1.addChildren([grandChild1, grandChild2]);
    apolo_1.addChildren([child1, child2]);
    apolo_1.introduceFamily();
}

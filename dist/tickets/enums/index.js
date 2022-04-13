"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Status = exports.Priority = void 0;
var Priority;
(function (Priority) {
    Priority["VERY_LOW"] = "very_low";
    Priority["LOW"] = "low";
    Priority["NORMAL"] = "normal";
    Priority["HIGH"] = "high";
    Priority["VERY_HIGH"] = "very_high";
})(Priority = exports.Priority || (exports.Priority = {}));
var Status;
(function (Status) {
    Status["NEW"] = "new";
    Status["TO_DO"] = "to_do";
    Status["DESIGN"] = "design";
    Status["IN_PROGRESS"] = "in_progress";
    Status["IN_REVIEW"] = "in_review";
    Status["TESTING"] = "testing";
    Status["DONE"] = "done";
    Status["CANCELLED"] = "cancelled";
})(Status = exports.Status || (exports.Status = {}));
//# sourceMappingURL=index.js.map
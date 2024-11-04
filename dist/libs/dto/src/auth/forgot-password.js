"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ForgotPasswordDto: function() {
        return ForgotPasswordDto;
    },
    forgotPasswordSchema: function() {
        return forgotPasswordSchema;
    }
});
const _dto = require("nestjs-zod/dto");
const _z = require("nestjs-zod/z");
const forgotPasswordSchema = _z.z.object({
    email: _z.z.string().email()
});
let ForgotPasswordDto = class ForgotPasswordDto extends (0, _dto.createZodDto)(forgotPasswordSchema) {
};

//# sourceMappingURL=forgot-password.js.map
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
    ResetPasswordDto: function() {
        return ResetPasswordDto;
    },
    resetPasswordSchema: function() {
        return resetPasswordSchema;
    }
});
const _dto = require("nestjs-zod/dto");
const _z = require("nestjs-zod/z");
const resetPasswordSchema = _z.z.object({
    token: _z.z.string(),
    password: _z.z.password().min(6)
});
let ResetPasswordDto = class ResetPasswordDto extends (0, _dto.createZodDto)(resetPasswordSchema) {
};

//# sourceMappingURL=reset-password.js.map
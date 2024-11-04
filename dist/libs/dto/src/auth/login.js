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
    LoginDto: function() {
        return LoginDto;
    },
    loginSchema: function() {
        return loginSchema;
    }
});
const _dto = require("nestjs-zod/dto");
const _z = require("nestjs-zod/z");
const _user = require("../user");
const loginSchema = _z.z.object({
    identifier: _z.z.string(),
    password: _z.z.password().min(6)
}).refine((value)=>{
    return value.identifier.includes("@") ? _z.z.string().email().parse(value.identifier) : _user.usernameSchema.parse(value.identifier);
}, {
    message: "InvalidCredentials"
});
let LoginDto = class LoginDto extends (0, _dto.createZodDto)(loginSchema) {
};

//# sourceMappingURL=login.js.map
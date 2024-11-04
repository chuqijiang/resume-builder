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
    UserDto: function() {
        return UserDto;
    },
    UserWithSecrets: function() {
        return UserWithSecrets;
    },
    userSchema: function() {
        return userSchema;
    },
    userWithSecretsSchema: function() {
        return userWithSecretsSchema;
    },
    usernameSchema: function() {
        return usernameSchema;
    }
});
const _schema = require("@reactive-resume/schema");
const _dto = require("nestjs-zod/dto");
const _z = require("nestjs-zod/z");
const _secrets = require("../secrets");
const usernameSchema = _z.z.string().min(3).max(255).regex(/^[\d._a-z-]+$/, {
    message: "Usernames can only contain lowercase letters, numbers, periods, hyphens, and underscores."
});
const userSchema = _z.z.object({
    id: _schema.idSchema,
    name: _z.z.string().min(1).max(255),
    picture: _z.z.literal("").or(_z.z.null()).or(_z.z.string().url()),
    username: usernameSchema,
    email: _z.z.string().email(),
    locale: _z.z.string().default("en-US"),
    emailVerified: _z.z.boolean().default(false),
    twoFactorEnabled: _z.z.boolean().default(false),
    provider: _z.z.enum([
        "email",
        "github",
        "google"
    ]).default("email"),
    createdAt: _z.z.date().or(_z.z.dateString()),
    updatedAt: _z.z.date().or(_z.z.dateString())
});
let UserDto = class UserDto extends (0, _dto.createZodDto)(userSchema) {
};
const userWithSecretsSchema = userSchema.merge(_z.z.object({
    secrets: _secrets.secretsSchema
}));
let UserWithSecrets = class UserWithSecrets extends (0, _dto.createZodDto)(userWithSecretsSchema) {
};

//# sourceMappingURL=user.js.map
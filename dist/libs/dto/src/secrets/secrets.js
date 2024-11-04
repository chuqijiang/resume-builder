"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "secretsSchema", {
    enumerable: true,
    get: function() {
        return secretsSchema;
    }
});
const _schema = require("@reactive-resume/schema");
const _z = require("nestjs-zod/z");
const secretsSchema = _z.z.object({
    id: _schema.idSchema,
    password: _z.z.string().nullable(),
    lastSignedIn: _z.z.date().nullable(),
    verificationToken: _z.z.string().nullable(),
    twoFactorSecret: _z.z.string().nullable(),
    twoFactorBackupCodes: _z.z.array(_z.z.string()).default([]),
    refreshToken: _z.z.string().nullable(),
    resetToken: _z.z.string().nullable(),
    userId: _schema.idSchema
});

//# sourceMappingURL=secrets.js.map
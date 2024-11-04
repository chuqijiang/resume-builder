import { z } from "nestjs-zod/z";
export declare const usernameSchema: z.ZodString;
export declare const userSchema: z.ZodObject<{
    id: z.ZodDefault<z.ZodString>;
    name: z.ZodString;
    picture: z.ZodUnion<[z.ZodUnion<[z.ZodLiteral<"">, z.ZodNull]>, z.ZodString]>;
    username: z.ZodString;
    email: z.ZodString;
    locale: z.ZodDefault<z.ZodString>;
    emailVerified: z.ZodDefault<z.ZodBoolean>;
    twoFactorEnabled: z.ZodDefault<z.ZodBoolean>;
    provider: z.ZodDefault<z.ZodEnum<["email", "github", "google"]>>;
    createdAt: z.ZodUnion<[z.ZodDate, z.ZodDateString]>;
    updatedAt: z.ZodUnion<[z.ZodDate, z.ZodDateString]>;
}, "strip", z.ZodTypeAny, {
    email: string;
    id: string;
    name: string;
    picture: string | null;
    username: string;
    locale: string;
    emailVerified: boolean;
    twoFactorEnabled: boolean;
    provider: "email" | "github" | "google";
    createdAt: string | Date;
    updatedAt: string | Date;
}, {
    email: string;
    name: string;
    picture: string | null;
    username: string;
    createdAt: string | Date;
    updatedAt: string | Date;
    id?: string | undefined;
    locale?: string | undefined;
    emailVerified?: boolean | undefined;
    twoFactorEnabled?: boolean | undefined;
    provider?: "email" | "github" | "google" | undefined;
}>;
declare const UserDto_base: import("nestjs-zod/dto").ZodDto<{
    email: string;
    id: string;
    name: string;
    picture: string | null;
    username: string;
    locale: string;
    emailVerified: boolean;
    twoFactorEnabled: boolean;
    provider: "email" | "github" | "google";
    createdAt: string | Date;
    updatedAt: string | Date;
}, z.ZodObjectDef<{
    id: z.ZodDefault<z.ZodString>;
    name: z.ZodString;
    picture: z.ZodUnion<[z.ZodUnion<[z.ZodLiteral<"">, z.ZodNull]>, z.ZodString]>;
    username: z.ZodString;
    email: z.ZodString;
    locale: z.ZodDefault<z.ZodString>;
    emailVerified: z.ZodDefault<z.ZodBoolean>;
    twoFactorEnabled: z.ZodDefault<z.ZodBoolean>;
    provider: z.ZodDefault<z.ZodEnum<["email", "github", "google"]>>;
    createdAt: z.ZodUnion<[z.ZodDate, z.ZodDateString]>;
    updatedAt: z.ZodUnion<[z.ZodDate, z.ZodDateString]>;
}, "strip", z.ZodTypeAny>, {
    email: string;
    name: string;
    picture: string | null;
    username: string;
    createdAt: string | Date;
    updatedAt: string | Date;
    id?: string | undefined;
    locale?: string | undefined;
    emailVerified?: boolean | undefined;
    twoFactorEnabled?: boolean | undefined;
    provider?: "email" | "github" | "google" | undefined;
}>;
export declare class UserDto extends UserDto_base {
}
export declare const userWithSecretsSchema: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodDefault<z.ZodString>;
    name: z.ZodString;
    picture: z.ZodUnion<[z.ZodUnion<[z.ZodLiteral<"">, z.ZodNull]>, z.ZodString]>;
    username: z.ZodString;
    email: z.ZodString;
    locale: z.ZodDefault<z.ZodString>;
    emailVerified: z.ZodDefault<z.ZodBoolean>;
    twoFactorEnabled: z.ZodDefault<z.ZodBoolean>;
    provider: z.ZodDefault<z.ZodEnum<["email", "github", "google"]>>;
    createdAt: z.ZodUnion<[z.ZodDate, z.ZodDateString]>;
    updatedAt: z.ZodUnion<[z.ZodDate, z.ZodDateString]>;
}, {
    secrets: z.ZodObject<{
        id: z.ZodDefault<z.ZodString>;
        password: z.ZodNullable<z.ZodString>;
        lastSignedIn: z.ZodNullable<z.ZodDate>;
        verificationToken: z.ZodNullable<z.ZodString>;
        twoFactorSecret: z.ZodNullable<z.ZodString>;
        twoFactorBackupCodes: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
        refreshToken: z.ZodNullable<z.ZodString>;
        resetToken: z.ZodNullable<z.ZodString>;
        userId: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        password: string | null;
        lastSignedIn: Date | null;
        verificationToken: string | null;
        twoFactorSecret: string | null;
        twoFactorBackupCodes: string[];
        refreshToken: string | null;
        resetToken: string | null;
        userId: string;
    }, {
        password: string | null;
        lastSignedIn: Date | null;
        verificationToken: string | null;
        twoFactorSecret: string | null;
        refreshToken: string | null;
        resetToken: string | null;
        id?: string | undefined;
        twoFactorBackupCodes?: string[] | undefined;
        userId?: string | undefined;
    }>;
}>, "strip", z.ZodTypeAny, {
    email: string;
    id: string;
    name: string;
    picture: string | null;
    username: string;
    locale: string;
    emailVerified: boolean;
    twoFactorEnabled: boolean;
    provider: "email" | "github" | "google";
    createdAt: string | Date;
    updatedAt: string | Date;
    secrets: {
        id: string;
        password: string | null;
        lastSignedIn: Date | null;
        verificationToken: string | null;
        twoFactorSecret: string | null;
        twoFactorBackupCodes: string[];
        refreshToken: string | null;
        resetToken: string | null;
        userId: string;
    };
}, {
    email: string;
    name: string;
    picture: string | null;
    username: string;
    createdAt: string | Date;
    updatedAt: string | Date;
    secrets: {
        password: string | null;
        lastSignedIn: Date | null;
        verificationToken: string | null;
        twoFactorSecret: string | null;
        refreshToken: string | null;
        resetToken: string | null;
        id?: string | undefined;
        twoFactorBackupCodes?: string[] | undefined;
        userId?: string | undefined;
    };
    id?: string | undefined;
    locale?: string | undefined;
    emailVerified?: boolean | undefined;
    twoFactorEnabled?: boolean | undefined;
    provider?: "email" | "github" | "google" | undefined;
}>;
declare const UserWithSecrets_base: import("nestjs-zod/dto").ZodDto<{
    email: string;
    id: string;
    name: string;
    picture: string | null;
    username: string;
    locale: string;
    emailVerified: boolean;
    twoFactorEnabled: boolean;
    provider: "email" | "github" | "google";
    createdAt: string | Date;
    updatedAt: string | Date;
    secrets: {
        id: string;
        password: string | null;
        lastSignedIn: Date | null;
        verificationToken: string | null;
        twoFactorSecret: string | null;
        twoFactorBackupCodes: string[];
        refreshToken: string | null;
        resetToken: string | null;
        userId: string;
    };
}, z.ZodObjectDef<z.objectUtil.extendShape<{
    id: z.ZodDefault<z.ZodString>;
    name: z.ZodString;
    picture: z.ZodUnion<[z.ZodUnion<[z.ZodLiteral<"">, z.ZodNull]>, z.ZodString]>;
    username: z.ZodString;
    email: z.ZodString;
    locale: z.ZodDefault<z.ZodString>;
    emailVerified: z.ZodDefault<z.ZodBoolean>;
    twoFactorEnabled: z.ZodDefault<z.ZodBoolean>;
    provider: z.ZodDefault<z.ZodEnum<["email", "github", "google"]>>;
    createdAt: z.ZodUnion<[z.ZodDate, z.ZodDateString]>;
    updatedAt: z.ZodUnion<[z.ZodDate, z.ZodDateString]>;
}, {
    secrets: z.ZodObject<{
        id: z.ZodDefault<z.ZodString>;
        password: z.ZodNullable<z.ZodString>;
        lastSignedIn: z.ZodNullable<z.ZodDate>;
        verificationToken: z.ZodNullable<z.ZodString>;
        twoFactorSecret: z.ZodNullable<z.ZodString>;
        twoFactorBackupCodes: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
        refreshToken: z.ZodNullable<z.ZodString>;
        resetToken: z.ZodNullable<z.ZodString>;
        userId: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        password: string | null;
        lastSignedIn: Date | null;
        verificationToken: string | null;
        twoFactorSecret: string | null;
        twoFactorBackupCodes: string[];
        refreshToken: string | null;
        resetToken: string | null;
        userId: string;
    }, {
        password: string | null;
        lastSignedIn: Date | null;
        verificationToken: string | null;
        twoFactorSecret: string | null;
        refreshToken: string | null;
        resetToken: string | null;
        id?: string | undefined;
        twoFactorBackupCodes?: string[] | undefined;
        userId?: string | undefined;
    }>;
}>, "strip", z.ZodTypeAny>, {
    email: string;
    name: string;
    picture: string | null;
    username: string;
    createdAt: string | Date;
    updatedAt: string | Date;
    secrets: {
        password: string | null;
        lastSignedIn: Date | null;
        verificationToken: string | null;
        twoFactorSecret: string | null;
        refreshToken: string | null;
        resetToken: string | null;
        id?: string | undefined;
        twoFactorBackupCodes?: string[] | undefined;
        userId?: string | undefined;
    };
    id?: string | undefined;
    locale?: string | undefined;
    emailVerified?: boolean | undefined;
    twoFactorEnabled?: boolean | undefined;
    provider?: "email" | "github" | "google" | undefined;
}>;
export declare class UserWithSecrets extends UserWithSecrets_base {
}
export {};

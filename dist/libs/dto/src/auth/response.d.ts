import { z } from "nestjs-zod/z";
export declare const authResponseSchema: z.ZodObject<{
    status: z.ZodEnum<["authenticated", "2fa_required"]>;
    user: z.ZodObject<{
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
}, "strip", z.ZodTypeAny, {
    status: "authenticated" | "2fa_required";
    user: {
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
    };
}, {
    status: "authenticated" | "2fa_required";
    user: {
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
    };
}>;
declare const AuthResponseDto_base: import("nestjs-zod/dto").ZodDto<{
    status: "authenticated" | "2fa_required";
    user: {
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
    };
}, z.ZodObjectDef<{
    status: z.ZodEnum<["authenticated", "2fa_required"]>;
    user: z.ZodObject<{
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
}, "strip", z.ZodTypeAny>, {
    status: "authenticated" | "2fa_required";
    user: {
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
    };
}>;
export declare class AuthResponseDto extends AuthResponseDto_base {
}
export {};

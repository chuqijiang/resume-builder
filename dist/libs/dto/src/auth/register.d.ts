import { z } from "nestjs-zod/z";
export declare const registerSchema: z.ZodObject<z.objectUtil.extendShape<Pick<{
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
}, "email" | "name" | "username" | "locale">, {
    password: z.ZodPassword;
}>, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
    name: string;
    username: string;
    locale: string;
}, {
    email: string;
    password: string;
    name: string;
    username: string;
    locale?: string | undefined;
}>;
declare const RegisterDto_base: import("nestjs-zod/dto").ZodDto<{
    email: string;
    password: string;
    name: string;
    username: string;
    locale: string;
}, z.ZodObjectDef<z.objectUtil.extendShape<Pick<{
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
}, "email" | "name" | "username" | "locale">, {
    password: z.ZodPassword;
}>, "strip", z.ZodTypeAny>, {
    email: string;
    password: string;
    name: string;
    username: string;
    locale?: string | undefined;
}>;
export declare class RegisterDto extends RegisterDto_base {
}
export {};

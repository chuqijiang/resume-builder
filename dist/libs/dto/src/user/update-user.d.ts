export declare const updateUserSchema: import("zod").ZodObject<Pick<{
    id: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodString>>;
    name: import("zod").ZodOptional<import("zod").ZodString>;
    picture: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodLiteral<"">, import("zod").ZodNull]>, import("zod").ZodString]>>;
    username: import("zod").ZodOptional<import("zod").ZodString>;
    email: import("zod").ZodOptional<import("zod").ZodString>;
    locale: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodString>>;
    emailVerified: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodBoolean>>;
    twoFactorEnabled: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodBoolean>>;
    provider: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodEnum<["email", "github", "google"]>>>;
    createdAt: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodDate, import("nestjs-zod/z").ZodDateString]>>;
    updatedAt: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodDate, import("nestjs-zod/z").ZodDateString]>>;
}, "email" | "name" | "picture" | "username" | "locale">, "strip", import("zod").ZodTypeAny, {
    email?: string | undefined;
    name?: string | undefined;
    picture?: string | null | undefined;
    username?: string | undefined;
    locale?: string | undefined;
}, {
    email?: string | undefined;
    name?: string | undefined;
    picture?: string | null | undefined;
    username?: string | undefined;
    locale?: string | undefined;
}>;
declare const UpdateUserDto_base: import("nestjs-zod/dto").ZodDto<{
    email?: string | undefined;
    name?: string | undefined;
    picture?: string | null | undefined;
    username?: string | undefined;
    locale?: string | undefined;
}, import("zod").ZodObjectDef<Pick<{
    id: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodString>>;
    name: import("zod").ZodOptional<import("zod").ZodString>;
    picture: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodLiteral<"">, import("zod").ZodNull]>, import("zod").ZodString]>>;
    username: import("zod").ZodOptional<import("zod").ZodString>;
    email: import("zod").ZodOptional<import("zod").ZodString>;
    locale: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodString>>;
    emailVerified: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodBoolean>>;
    twoFactorEnabled: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodBoolean>>;
    provider: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodEnum<["email", "github", "google"]>>>;
    createdAt: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodDate, import("nestjs-zod/z").ZodDateString]>>;
    updatedAt: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodDate, import("nestjs-zod/z").ZodDateString]>>;
}, "email" | "name" | "picture" | "username" | "locale">, "strip", import("zod").ZodTypeAny>, {
    email?: string | undefined;
    name?: string | undefined;
    picture?: string | null | undefined;
    username?: string | undefined;
    locale?: string | undefined;
}>;
export declare class UpdateUserDto extends UpdateUserDto_base {
}
export {};

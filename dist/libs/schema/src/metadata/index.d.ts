import { z } from "zod";
export declare const defaultLayout: string[][][];
export declare const metadataSchema: z.ZodObject<{
    template: z.ZodDefault<z.ZodString>;
    layout: z.ZodDefault<z.ZodArray<z.ZodArray<z.ZodArray<z.ZodString, "many">, "many">, "many">>;
    css: z.ZodObject<{
        value: z.ZodDefault<z.ZodString>;
        visible: z.ZodDefault<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        visible: boolean;
        value: string;
    }, {
        visible?: boolean | undefined;
        value?: string | undefined;
    }>;
    page: z.ZodObject<{
        margin: z.ZodDefault<z.ZodNumber>;
        format: z.ZodDefault<z.ZodEnum<["a4", "letter"]>>;
        options: z.ZodObject<{
            breakLine: z.ZodDefault<z.ZodBoolean>;
            pageNumbers: z.ZodDefault<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            breakLine: boolean;
            pageNumbers: boolean;
        }, {
            breakLine?: boolean | undefined;
            pageNumbers?: boolean | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        options: {
            breakLine: boolean;
            pageNumbers: boolean;
        };
        margin: number;
        format: "a4" | "letter";
    }, {
        options: {
            breakLine?: boolean | undefined;
            pageNumbers?: boolean | undefined;
        };
        margin?: number | undefined;
        format?: "a4" | "letter" | undefined;
    }>;
    theme: z.ZodObject<{
        background: z.ZodDefault<z.ZodString>;
        text: z.ZodDefault<z.ZodString>;
        primary: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        background: string;
        text: string;
        primary: string;
    }, {
        background?: string | undefined;
        text?: string | undefined;
        primary?: string | undefined;
    }>;
    typography: z.ZodObject<{
        font: z.ZodObject<{
            family: z.ZodDefault<z.ZodString>;
            subset: z.ZodDefault<z.ZodString>;
            variants: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
            size: z.ZodDefault<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            size: number;
            family: string;
            subset: string;
            variants: string[];
        }, {
            size?: number | undefined;
            family?: string | undefined;
            subset?: string | undefined;
            variants?: string[] | undefined;
        }>;
        lineHeight: z.ZodDefault<z.ZodNumber>;
        hideIcons: z.ZodDefault<z.ZodBoolean>;
        underlineLinks: z.ZodDefault<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        font: {
            size: number;
            family: string;
            subset: string;
            variants: string[];
        };
        lineHeight: number;
        hideIcons: boolean;
        underlineLinks: boolean;
    }, {
        font: {
            size?: number | undefined;
            family?: string | undefined;
            subset?: string | undefined;
            variants?: string[] | undefined;
        };
        lineHeight?: number | undefined;
        hideIcons?: boolean | undefined;
        underlineLinks?: boolean | undefined;
    }>;
    notes: z.ZodDefault<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    template: string;
    layout: string[][][];
    css: {
        visible: boolean;
        value: string;
    };
    page: {
        options: {
            breakLine: boolean;
            pageNumbers: boolean;
        };
        margin: number;
        format: "a4" | "letter";
    };
    theme: {
        background: string;
        text: string;
        primary: string;
    };
    typography: {
        font: {
            size: number;
            family: string;
            subset: string;
            variants: string[];
        };
        lineHeight: number;
        hideIcons: boolean;
        underlineLinks: boolean;
    };
    notes: string;
}, {
    css: {
        visible?: boolean | undefined;
        value?: string | undefined;
    };
    page: {
        options: {
            breakLine?: boolean | undefined;
            pageNumbers?: boolean | undefined;
        };
        margin?: number | undefined;
        format?: "a4" | "letter" | undefined;
    };
    theme: {
        background?: string | undefined;
        text?: string | undefined;
        primary?: string | undefined;
    };
    typography: {
        font: {
            size?: number | undefined;
            family?: string | undefined;
            subset?: string | undefined;
            variants?: string[] | undefined;
        };
        lineHeight?: number | undefined;
        hideIcons?: boolean | undefined;
        underlineLinks?: boolean | undefined;
    };
    template?: string | undefined;
    layout?: string[][][] | undefined;
    notes?: string | undefined;
}>;
export type Metadata = z.infer<typeof metadataSchema>;
export declare const defaultMetadata: Metadata;

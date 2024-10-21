import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeLienDeNavigationFields {
    titre?: EntryFieldTypes.Symbol;
    destination?: EntryFieldTypes.Symbol;
    externe?: EntryFieldTypes.Boolean;
}

export type TypeLienDeNavigationSkeleton = EntrySkeletonType<TypeLienDeNavigationFields, "lienDeNavigation">;
export type TypeLienDeNavigation<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeLienDeNavigationSkeleton, Modifiers, Locales>;

export function isTypeLienDeNavigation<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeLienDeNavigation<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'lienDeNavigation'
}

export interface TypeNavigationFields {
    id: EntryFieldTypes.Symbol;
    liens?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeLienDeNavigationSkeleton>>;
}

export type TypeNavigationSkeleton = EntrySkeletonType<TypeNavigationFields, "navigation">;
export type TypeNavigation<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeNavigationSkeleton, Modifiers, Locales>;

export function isTypeNavigation<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeNavigation<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'navigation'
}

export interface TypePageFields {
    titre?: EntryFieldTypes.Symbol;
    id: EntryFieldTypes.Symbol;
    description?: EntryFieldTypes.Text;
    contenu?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeSectionSkeleton>>;
    basDePage: EntryFieldTypes.Text;
}

export type TypePageSkeleton = EntrySkeletonType<TypePageFields, "page">;
export type TypePage<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypePageSkeleton, Modifiers, Locales>;

export function isTypePage<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypePage<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'page'
}

export interface TypeSectionFields {
    titre?: EntryFieldTypes.Symbol;
    id?: EntryFieldTypes.Symbol;
    couleur?: EntryFieldTypes.Symbol<"blanc" | "bleu" | "jaune" | "orange" | "vert">;
    corps?: EntryFieldTypes.RichText;
    droite?: EntryFieldTypes.Boolean;
}

export type TypeSectionSkeleton = EntrySkeletonType<TypeSectionFields, "section">;
export type TypeSection<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeSectionSkeleton, Modifiers, Locales>;

export function isTypeSection<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeSection<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'section'
}

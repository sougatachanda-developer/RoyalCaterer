export function classNameMerge(...classes:string[]) {
    return classes.filter(Boolean).join(' ');
}
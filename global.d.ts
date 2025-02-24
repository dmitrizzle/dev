// ensure that markdown files can be imported without TypeScript errors
declare module '*.md' {
    const content: string;
    export default content;
}
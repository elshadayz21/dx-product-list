declare module 'clsx' {
    export type ClassValue = string | string[] | { [key: string]: boolean };
    export function clsx(...inputs: ClassValue[]): string;
  }
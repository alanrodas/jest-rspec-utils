import { Global } from '@jest/types';

export const context: Global.Describe;
export const given: Global.Describe;
export const should: Global.It;

declare global {
    export const context: Global.Describe;
    export const given: Global.Describe;
    export const should: Global.It;
}

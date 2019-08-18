import { writable } from 'svelte/store';

export const logoSrc = writable("img/logo/logo-v4.svg");
export const animationClass = writable("");
export const heroHeight = writable(0);
export const s1Height = writable(0);
export const s2Height = writable(0);
export const s3Height = writable(0);
export const s4Height = writable(0);

export const skills1Open = writable(false);
export const skills2Open = writable(false);
export const skills3Open = writable(false);
import { JSX } from 'solid-js/jsx-runtime';

const defaultIconColor = '#3B81F6';

export const FullscreenIcon = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon icon-tabler icon-tabler-arrows-diagonal"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    stroke-width="2"
    stroke={props.color ?? defaultIconColor}
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M16 4h4v4" />
    <path d="M14 10l6 -6" />
    <path d="M8 20h-4v-4" />
    <path d="M10 14l-6 6" />
  </svg>
);

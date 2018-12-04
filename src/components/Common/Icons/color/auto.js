import React from 'react';

const SvgAuto = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <g fill="none" fillRule="evenodd">
      <circle cx={16} cy={16} r={16} fill="#FAB431" />
      <path
        fill="#FFF"
        d="M24.5 19.267l-4.185-2.511.48-1.989 1.787 1.055V12.19l-5.74-3.422v7.9l-1.365.755 7.538 4.47L16 26l-8.5-4.978v-9.955L16 6l8.5 5.067v8.2zM9.418 12.19v6.478l5.518-3.2V8.9l-5.518 3.289zm4.097 6.344l-3.138 1.919L16 23.745l3.175-1.86-5.66-3.352z"
      />
    </g>
  </svg>
);

export default SvgAuto;

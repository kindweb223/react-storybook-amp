import React from 'react';

const SvgPayx = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="payx_svg__c">
        <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
        <stop stopOpacity={0.5} offset="100%" />
      </linearGradient>
      <circle id="payx_svg__b" cx={15} cy={15} r={15} />
      <filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="payx_svg__a">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur stdDeviation={0.5} in="shadowOffsetOuter1" result="shadowBlurOuter1" />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1" />
      </filter>
    </defs>
    <g fill="none">
      <g transform="translate(1)">
        <use fill="#000" filter="url(#payx_svg__a)" xlinkHref="#payx_svg__b" />
        <use fill="#630" xlinkHref="#payx_svg__b" />
        <use
          fill="url(#payx_svg__c)"
          style={{
            mixBlendMode: 'soft-light',
          }}
          xlinkHref="#payx_svg__b"
        />
        <circle strokeOpacity={0.097} stroke="#000" strokeLinejoin="square" cx={15} cy={15} r={14.5} />
      </g>
      <g fill="#FFF">
        <path d="M12.119 9.756L13.244 7l7.706.028c1.125.085 2.475.085 3.234 1.04.9 1.041.703 2.532.253 3.713a7.841 7.841 0 0 1-5.709 5.119c-1.856.281-3.74.197-5.625.197.375-.915.75-1.834 1.125-2.756 1.547 0 3.122.084 4.697-.17 1.434-.365 2.756-1.8 2.531-3.374-.14-.675-.9-.985-1.547-.985-2.587-.112-5.175 0-7.762-.056h-.028z" />
        <path d="M8.8 10.516h9.14l-1.209 3.122H7.562L8.8 10.543v-.028zm1.463 3.825h3.178l-3.32 8.437H7l3.29-8.437h-.027z" />
      </g>
    </g>
  </svg>
);

export default SvgPayx;

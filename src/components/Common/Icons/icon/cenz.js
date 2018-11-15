import React from 'react';

const SvgCenz = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient id="cenz_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="cenz_svg__b" cx={16} cy={15} r={15} />
      <filter id="cenz_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="cenz_svg__e"
        d="M21.627 16.878c-.422.363-.8.686-1.174 1.013-.042.037-.084.103-.084.156-.006.638-.004 1.275-.004 1.935.961-.406 1.463-1.64 1.262-3.104zm-1.158-3.897c1.071-.638 1.198-.859 1.202-2.125 0-.1.003-.199-.001-.298-.046-1.163-.842-2.19-1.944-2.436-.99-.22-1.988-.403-2.988-.572-.509-.087-1.03-.161-1.543-.144-.621.02-1.128.346-1.595.878 1.132.211 2.183.428 3.241.6 1.453.236 2.562.965 3.168 2.354.235.539.31 1.15.46 1.743zm-8.823-3.008c-.86.534-1.284 1.258-1.297 2.158a328.06 328.06 0 0 0-.007 7.29c.01 1.177.787 2.186 1.909 2.46.96.234 1.942.378 2.914.566.616.12 1.226.302 1.862.144.52-.13.984-.349 1.35-.863-1.166-.219-2.261-.46-3.367-.624-1.893-.281-3.361-1.958-3.363-3.91-.003-2.232-.001-4.463-.001-6.695v-.526zm1.338-.351c-.012.247-.03.431-.03.615a2522.26 2522.26 0 0 0 0 6.738c.003 1.476.895 2.536 2.312 2.784 1.024.18 2.044.38 3.066.57.071.013.143.02.215.028.485.054.502.045.505-.441.005-.745-.02-1.49.015-2.233.01-.22.121-.497.28-.638.811-.723 1.653-1.41 2.484-2.11.226-.19.458-.32.762-.173.321.155.405.423.4.76-.012.844.006 1.689-.02 2.531-.049 1.522-1.153 3.02-2.57 3.5a.938.938 0 0 0-.56.47c-.873 1.55-2.369 2.148-3.972 1.936-1.314-.175-2.618-.452-3.916-.73-1.672-.358-2.907-1.914-2.934-3.776-.036-2.506-.024-5.013.019-7.518.026-1.566 1.19-3.02 2.666-3.5a.776.776 0 0 0 .394-.325c.99-1.718 2.598-2.415 4.509-1.987 1.06.237 2.139.393 3.205.61 1.892.386 3.156 1.948 3.181 3.914.007.559.011 1.118-.02 1.675-.009.177-.087.403-.213.514-.907.8-1.825 1.588-2.766 2.346-.145.117-.47.144-.632.057-.159-.086-.293-.365-.304-.567-.039-.667.035-1.344-.03-2.007-.13-1.329-1.035-2.207-2.399-2.434-1.084-.18-2.166-.375-3.249-.561-.116-.02-.234-.029-.398-.048z"
      />
      <filter id="cenz_svg__d" width="125%" height="119.4%" x="-12.5%" y="-6.9%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#cenz_svg__a)" xlinkHref="#cenz_svg__b" />
      <use fill="#3089F2" xlinkHref="#cenz_svg__b" />
      <use
        fill="url(#cenz_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#cenz_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#cenz_svg__d)" xlinkHref="#cenz_svg__e" />
        <use fill="#FFF" fillRule="evenodd" xlinkHref="#cenz_svg__e" />
      </g>
    </g>
  </svg>
);

export default SvgCenz;

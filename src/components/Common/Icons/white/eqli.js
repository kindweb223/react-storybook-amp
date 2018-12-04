import React from 'react';

const SvgEqli = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <path
      fill="#FFF"
      d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-5.973-12.62l.744-1.48a.378.378 0 0 0-.02-.362.381.381 0 0 0-.314-.171H8.835l4.197-7.756 3.749 6.82c.066.115.19.191.324.191h1.688a.346.346 0 0 0 .315-.18.396.396 0 0 0 .01-.373L13.346 5.691c-.133-.239-.515-.239-.648 0L5.296 19.036a.37.37 0 0 0 .01.372c.066.114.19.181.314.181h4.073a.372.372 0 0 0 .334-.21zm16.674-.344L19.29 5.69a.388.388 0 0 0-.334-.191.39.39 0 0 0-.324.2l-1.85 3.711a.407.407 0 0 0 0 .334l.744 1.478c.124.248.534.248.667 0l.792-1.583 4.188 7.727h-7.908c-.2 0-.372.162-.372.372v1.478c0 .2.162.372.372.372h11.113a.346.346 0 0 0 .315-.181.35.35 0 0 0 .01-.372zm-4.817 1.478a.381.381 0 0 0-.324-.19h-1.851a.381.381 0 0 0-.324.19.35.35 0 0 0 .01.372l.772 1.288H11.83l3.758-6.486a.358.358 0 0 0 .01-.353l-.744-1.479a.35.35 0 0 0-.325-.2.358.358 0 0 0-.334.19l-2.957 5.18-2.966 4.817a.37.37 0 0 0-.01.372.38.38 0 0 0 .325.191H23.41a.346.346 0 0 0 .315-.181.37.37 0 0 0 0-.372l-1.841-3.339z"
    />
  </svg>
);

export default SvgEqli;

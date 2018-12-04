import React from 'react';

const SvgPart = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <path
      fill="#FFF"
      fillRule="evenodd"
      d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.576-25.827c-.61.235-.712 1.118-.214 1.525.802.707 1.541 1.484 2.314 2.224.294.292.763.45 1.147.24.5-.223.648-.956.28-1.356a25.784 25.784 0 0 0-2.025-1.921c-.398-.398-.858-.992-1.502-.712zm7.034 2.051c-.959.81-1.733 1.809-2.61 2.701-.39.393-.25 1.17.267 1.384.358.165.805.083 1.058-.223.695-.725 1.39-1.45 2.105-2.156.326-.308.623-.766.438-1.23-.121-.52-.82-.71-1.258-.476zM8.49 8.37c-.406.285-.512.959-.156 1.326.63.645 1.266 1.285 1.96 1.86.396.32.71.906 1.302.815.707-.003 1.06-.996.554-1.464-.766-.753-1.547-1.492-2.305-2.257-.337-.373-.9-.555-1.355-.28zm.588 4.52c-1.065.722-1.802 1.846-2.73 2.735-.515.477-.16 1.46.547 1.487.604.073.942-.5 1.305-.874.614-.693 1.347-1.284 1.91-2.018.476-.663-.269-1.625-1.032-1.33zm15.476 2.127c-.672.583-1.226 1.3-1.882 1.909-.396.428-1.024.843-.913 1.512.085.648.97.962 1.443.515a23.054 23.054 0 0 0 1.848-1.948c.325-.4.915-.714.838-1.308-.017-.633-.81-1.023-1.334-.68zM11.069 19.72c-.755.659-1.392 1.443-2.125 2.129-.378.367-.874.838-.672 1.423.118.605 1.008.808 1.425.386.642-.625 1.277-1.258 1.848-1.948.323-.399.914-.716.82-1.314-.013-.619-.786-.981-1.296-.676zm9.062-.023c-.586.22-.701 1.101-.211 1.482.81.757 1.584 1.556 2.39 2.316.399.397 1.22.383 1.46-.178.17-.312.148-.748-.108-1.007-.83-.896-1.77-1.675-2.653-2.514-.238-.204-.596-.196-.878-.1zm-6.8 2.145c-.504.22-.656.962-.282 1.36a23.19 23.19 0 0 0 1.95 1.85c.397.322.705.91 1.297.84.733-.008 1.085-1.01.565-1.505a82.32 82.32 0 0 1-2.314-2.237c-.302-.32-.796-.535-1.216-.308zm-1.35-14.907a.867.867 0 1 0-1.736 0 .867.867 0 0 0 1.735 0zm2.528 2.308a.867.867 0 1 0-1.735 0 .867.867 0 0 0 1.735 0zm-6.774 2.12a.867.867 0 1 0-1.735 0 .867.867 0 0 0 1.735 0zm13.772-4.497a.867.867 0 1 0-1.733 0 .867.867 0 0 0 1.733 0zM26 11.146a.867.867 0 1 0-1.735 0 .867.867 0 0 0 1.735 0zm-2.371 2.492a.867.867 0 1 0-1.735 0 .867.867 0 0 0 1.735 0zm2.367 7.006a.867.867 0 1 0-1.735 0 .867.867 0 0 0 1.735 0zM19.23 22.76a.867.867 0 1 0-1.735 0 .867.867 0 0 0 1.735 0zm2.496 2.372a.867.867 0 1 0-1.735 0 .867.867 0 0 0 1.735 0zm-9.5 0a.867.867 0 1 0-1.736 0 .867.867 0 0 0 1.735 0zm-2.117-6.794a.867.867 0 1 0-1.735 0 .867.867 0 0 0 1.735 0zm-2.374 2.521a.867.867 0 1 0-1.735 0 .867.867 0 0 0 1.735 0z"
    />
  </svg>
);

export default SvgPart;

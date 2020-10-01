import React from 'react'

interface Props {
  width?: string | number
  height?: string | number
  fillColor?: string
  [x: string]: unknown // for the rest property
}

const Blog: React.FunctionComponent<Props> = ({ width = '22', height = '18', fillColor = '#2D2926', ...rest }) => (
  <svg width={width} height={height} fill="none" viewBox="0 0 22 18" {...rest}>
    <mask id="7ho1y39spa" width="22" height="18" x="0" y="0" maskUnits="userSpaceOnUse">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M16.37 12.8c.005-.245.205-.44.45-.44.117 0 .229.046.311.129.083.082.129.194.129.311v2.62c0 .586-.233 1.148-.647 1.563-.415.414-.977.647-1.563.647H2.21C.99 17.63 0 16.64 0 15.42V2.58C0 1.36.99.37 2.21.37h12.84c.586 0 1.148.233 1.563.647.414.415.647.977.647 1.563V4.1c-.033.22-.222.383-.445.383s-.412-.163-.445-.383V2.58c0-.729-.591-1.32-1.32-1.32H2.21c-.729 0-1.32.591-1.32 1.32v12.84c0 .73.591 1.32 1.32 1.32h12.84c.729 0 1.32-.59 1.32-1.32V12.8zm-2.49-8.38c.243 0 .44.197.44.44 0 .245-.195.445-.44.45H3.24c-.22-.033-.383-.222-.383-.445s.163-.412.383-.445h10.64zm-.71 3.24c-.005-.245-.205-.44-.45-.44H3.24c-.243 0-.44.197-.44.44 0 .117.046.229.129.311.082.083.194.13.311.13h9.48c.118.002.233-.043.318-.126.084-.083.132-.196.132-.315zm-9.93 2.39H10c.175-.026.349.052.445.201.096.149.096.34 0 .488-.096.149-.27.227-.445.201H3.24c-.22-.033-.383-.222-.383-.445s.163-.412.383-.445zM10 12.82H3.24c-.243 0-.44.197-.44.44 0 .117.046.229.129.311.082.083.194.13.311.13H10c.118.002.233-.043.318-.126.084-.083.132-.196.132-.315-.005-.245-.205-.44-.45-.44zm9.8-9.5l2.07 2.07c.159.172.159.438 0 .61l-7.46 7.62c-.085.085-.2.132-.32.13h-2.25c-.243 0-.44-.197-.44-.44v-2c.003-.116.05-.227.13-.31l7.65-7.68c.176-.16.444-.16.62 0zm-5.93 9.5h-1.58v-1.35L18 5.77l1.45 1.46-5.58 5.59zm4.7-7.67l1.44 1.45.88-.89-1.44-1.45-.88.89z"
        clipRule="evenodd"
      />
    </mask>
    <g mask="url(#7ho1y39spa)">
      <path fill={fillColor} d="M-4 -6H26V24H-4z" />
    </g>
  </svg>
)

export default Blog
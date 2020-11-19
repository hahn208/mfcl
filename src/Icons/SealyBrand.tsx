import React from 'react'

interface Props {
  width?: string | number
  height?: string | number
  fillColor?: string
  secondaryColor?: string
  [x: string]: unknown
}

const SealyBrand: React.FunctionComponent<Props> = ({
  width = 71,
  height = 60,
  fillColor = '#231F20',
  secondaryColor = '#1B4F90',
  ...rest
}) => (
  <svg width={width} height={height} viewBox="0 0 71 60" {...rest}>
    <g fillRule="evenodd">
      <path
        fill={secondaryColor}
        d="M4.3 30c0-5.417 2.942-9.966 7.796-12.486 8.437-4.38 19-8.537 23.052-10.097C32.668 6.477 16.296 0 8.142 0 5.16 0 3.21 1 2.374 3.926 1.056 8.537 0 18.326 0 30c0 11.674 1.056 21.463 2.374 26.074C3.21 59 5.16 60 8.142 60c8.154 0 24.527-6.477 27.006-7.417-4.053-1.56-14.615-5.717-23.052-10.097C7.242 39.966 4.3 35.417 4.3 30"
      />
      <path
        fill={secondaryColor}
        d="M70.295 30c0-11.674-1.056-21.463-2.374-26.074C67.086 1 65.135 0 62.153 0c-8.154 0-24.526 6.477-27.006 7.417C39.2 8.977 49.762 13.134 58.2 17.514c4.853 2.52 7.795 7.069 7.795 12.486 0 5.417-2.942 9.966-7.795 12.486-8.438 4.38-19 8.537-23.053 10.097C37.627 53.523 54 60 62.153 60c2.982 0 4.933-1 5.768-3.926 1.318-4.611 2.374-14.4 2.374-26.074"
      />
      <path
        fill="#FFF"
        d="M58.199 17.514c-8.438-4.38-18.997-8.537-23.053-10.097-4.052 1.56-14.614 5.717-23.052 10.097C7.241 20.034 4.298 24.583 4.298 30c0 5.417 2.943 9.965 7.796 12.485 8.438 4.38 19 8.538 23.052 10.098 4.056-1.56 14.615-5.718 23.053-10.098 4.853-2.52 7.796-7.068 7.796-12.485s-2.943-9.966-7.796-12.486"
      />
      <g fill={fillColor}>
        <path d="M55.73 35a.731.731 0 0 0 0 1.46.731.731 0 0 0 0-1.46m0 1.358a.627.627 0 1 1 .004-1.255.627.627 0 0 1-.004 1.255" />
        <path d="M56.36 36.213a.717.717 0 0 1-.014-.153.273.273 0 0 0-.017-.1.284.284 0 0 0-.044-.067.232.232 0 0 0-.061-.038l-.017-.006c.003 0 .006-.003.01-.003a.263.263 0 0 0 .064-.041c.02-.02.04-.047.058-.08a.244.244 0 0 0 .024-.12.241.241 0 0 0-.095-.202.492.492 0 0 0-.288-.073h-.553v1h.227v-.402h.275c.04 0 .078.006.105.015a.141.141 0 0 1 .06.04c.014.021.028.048.031.077.007.03.01.07.01.112 0 .023.004.046.004.076a.178.178 0 0 0 .027.073l.007.009h.254l-.024-.024c-.02-.017-.034-.05-.044-.093zm-.706-.719h.302a.247.247 0 0 1 .129.026c.017.012.03.024.037.042a.14.14 0 0 1 .017.07.126.126 0 0 1-.048.106c-.027.023-.07.035-.132.035h-.305v-.279z" />
      </g>
      <g fill={fillColor}>
        <path d="M22.73 18.778c2.143 0 1.46 3.195 3.706 3.195.733 0 1.464-.647 1.464-1.531 0-1.823-2.088-3.118-4.176-3.118-3.116 0-5.823 2.496-5.823 7.214 0 2.718.784 6.332.784 9.05 0 1.619-.646 2.771-1.868 2.771-2.231 0-2.389-3.175-4.375-3.175-.846 0-1.442.636-1.442 1.59 0 1.842 2.175 3.252 4.48 3.252 4.08 0 5.897-3.07 5.897-5.778 0-4.524-.69-6.294-.69-10.376 0-1.87.853-3.094 2.042-3.094" />
        <path d="M59.76 23.145c-.064-.003-.539-.05-1.357-.05-.817 0-1.23.047-1.31.05-.083.003-.14.043-.168.112-.278.673-1.82 4.259-3.363 7.861v-.009c-1.048 2.548-2.836 4.692-3.541 4.692-.677 0-.275-1.199.329-2.707l4.288-9.837a.08.08 0 0 0-.07-.112c-.057-.003-.565-.05-1.405-.05-.838 0-1.237.044-1.34.05-.105.005-.138.043-.167.11-.311.716-2.11 4.879-3.433 8.163-1.383 2.62-3.156 4.368-3.875 4.368-.565 0-.267-.936.154-1.924l7.112-16.66c.028-.075-.017-.15-.1-.153-.082-.006-.535-.049-1.341-.049-.81 0-1.223.043-1.298.05a.182.182 0 0 0-.166.109L42.13 32.528c-1.236 2.106-2.509 3.258-3.152 3.258-.565 0-.267-.936.154-1.924l4.69-10.564a.11.11 0 0 0-.101-.153c-.079-.003-.531-.05-1.338-.05-.803 0-1.216.044-1.298.05-.081.005-.138.043-.169.11l-.55 1.239c-.028-.769-.343-1.502-1.363-1.502-2.566 0-5.6 3.77-7.16 7.707-1.56 2.664-4.732 5.428-6.022 5.428-.573 0-.978-.277-.978-1.225 0-.73.236-1.53.41-1.958.079-.19.197-.231.346-.257 3.861-.653 6.966-4.611 6.966-7.503 0-1.56-1.085-2.192-2.124-2.192-3.266 0-8.234 6.99-8.234 11.957 0 1.831.73 3.062 2.45 3.062 1.945 0 4.724-2.323 6.447-4.963a10.618 10.618 0 0 0-.295 2.369c0 1.591.579 2.56 1.675 2.56 1.354 0 2.604-1.46 3.56-3.02-.332 1.682.065 3.02 1.419 3.02 1.281 0 2.911-1.578 3.97-3.12-.365 1.727.02 3.12 1.403 3.12 1.332 0 3.144-1.803 4.257-3.444-.509 2.097-.006 3.443 1.166 3.443 1.107 0 2.352-1.048 3.462-2.56a233.95 233.95 0 0 0-1.56 3.707c-.53 1.384-1.045 2.56-2.287 2.56-1.781 0-2.245-2.332-3.864-2.332-.758 0-1.169.598-1.169 1.196 0 1.3 1.93 2.294 3.73 2.294 3.512 0 5.732-2.923 7.083-6.006l6.188-13.566c.025-.058-.014-.121-.081-.124zM25.802 31.29c.675-2.55 3.547-7.089 4.811-7.089.186 0 .343.113.343.39 0 1.829-2.95 6.393-4.951 6.925-.116.031-.25-.047-.203-.226zm11.572-.092c-1.208 2.389-2.639 4.51-3.431 4.51-.292 0-.45-.263-.45-.708 0-3.375 4.089-10.51 5.559-10.51.35 0 .44.338.44.716 0 .659-.308 1.76-.786 3.005l-1.332 2.987z" />
      </g>
    </g>
  </svg>
)

export default SealyBrand

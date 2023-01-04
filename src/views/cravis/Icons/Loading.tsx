import React from 'react'

import type { IconProps } from './types'

const Loading: React.FC<IconProps> = ({ classname, color, size = 32 }) => {
  return (
    <svg
      className={classname}
      color={color}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M8.00001 5.03998C7.85149 5.03998 7.70905 4.98098 7.60403 4.87596C7.49901 4.77094 7.44001 4.6285 7.44001 4.47998V1.59998C7.44001 1.52644 7.45449 1.45362 7.48264 1.38568C7.51078 1.31773 7.55203 1.256 7.60403 1.204C7.65603 1.152 7.71776 1.11075 7.78571 1.08261C7.85365 1.05446 7.92647 1.03998 8.00001 1.03998C8.07355 1.03998 8.14637 1.05446 8.21431 1.08261C8.28225 1.11075 8.34399 1.152 8.39599 1.204C8.44799 1.256 8.48924 1.31773 8.51738 1.38568C8.54552 1.45362 8.56001 1.52644 8.56001 1.59998V4.47998C8.56001 4.6285 8.50101 4.77094 8.39599 4.87596C8.29097 4.98098 8.14853 5.03998 8.00001 5.03998ZM8.00001 14.96C7.92647 14.96 7.85365 14.9455 7.78571 14.9174C7.71776 14.8892 7.65603 14.848 7.60403 14.796C7.55203 14.744 7.51078 14.6822 7.48264 14.6143C7.45449 14.5463 7.44001 14.4735 7.44001 14.4V11.52C7.44001 11.4464 7.45449 11.3736 7.48264 11.3057C7.51078 11.2377 7.55203 11.176 7.60403 11.124C7.65603 11.072 7.71776 11.0307 7.78571 11.0026C7.85365 10.9745 7.92647 10.96 8.00001 10.96C8.07355 10.96 8.14637 10.9745 8.21431 11.0026C8.28225 11.0307 8.34399 11.072 8.39599 11.124C8.44799 11.176 8.48924 11.2377 8.51738 11.3057C8.54552 11.3736 8.56001 11.4464 8.56001 11.52V14.4C8.56001 14.5485 8.50101 14.6909 8.39599 14.796C8.29097 14.901 8.14853 14.96 8.00001 14.96ZM10.093 5.90694C10.041 5.85494 9.99979 5.79321 9.97165 5.72527C9.9435 5.65733 9.92902 5.58452 9.92902 5.51098C9.92902 5.43744 9.9435 5.36462 9.97165 5.29668C9.99979 5.22874 10.041 5.16701 10.093 5.11502L12.1295 3.07854C12.1815 3.02653 12.2433 2.98528 12.3112 2.95714C12.3791 2.92899 12.452 2.9145 12.5255 2.9145C12.599 2.9145 12.6718 2.92899 12.7398 2.95714C12.8077 2.98528 12.8695 3.02653 12.9214 3.07854C12.9735 3.13053 13.0147 3.19226 13.0429 3.2602C13.071 3.32814 13.0855 3.40096 13.0855 3.4745C13.0855 3.54804 13.071 3.62085 13.0429 3.68879C13.0147 3.75673 12.9735 3.81846 12.9214 3.87046L10.885 5.90694C10.833 5.95894 10.7712 6.0002 10.7033 6.02834C10.6354 6.05649 10.5625 6.07097 10.489 6.07097C10.4155 6.07097 10.3427 6.05649 10.2747 6.02834C10.2068 6.0002 10.145 5.95894 10.093 5.90694ZM3.07857 12.9214C3.02656 12.8694 2.98531 12.8077 2.95717 12.7398C2.92902 12.6718 2.91454 12.599 2.91454 12.5255C2.91454 12.4519 2.92902 12.3791 2.95717 12.3112C2.98531 12.2432 3.02656 12.1815 3.07857 12.1295L5.11505 10.093C5.16704 10.041 5.22877 9.99976 5.29671 9.97162C5.36465 9.94347 5.43747 9.92898 5.51101 9.92898C5.58455 9.92898 5.65737 9.94347 5.7253 9.97162C5.79324 9.99976 5.85497 10.041 5.90697 10.093C5.95897 10.145 6.00023 10.2067 6.02837 10.2747C6.05652 10.3426 6.071 10.4154 6.071 10.489C6.071 10.5625 6.05652 10.6353 6.02837 10.7033C6.00023 10.7712 5.95897 10.8329 5.90697 10.8849L3.87049 12.9214C3.81849 12.9734 3.75676 13.0147 3.68882 13.0428C3.62089 13.071 3.54807 13.0855 3.47453 13.0855C3.40099 13.0855 3.32817 13.071 3.26023 13.0428C3.19229 13.0147 3.13056 12.9734 3.07857 12.9214ZM10.96 7.99998C10.96 7.85146 11.019 7.70902 11.124 7.604C11.229 7.49898 11.3715 7.43998 11.52 7.43998H14.4C14.4735 7.43998 14.5464 7.45446 14.6143 7.48261C14.6823 7.51075 14.744 7.552 14.796 7.604C14.848 7.656 14.8892 7.71773 14.9174 7.78568C14.9455 7.85362 14.96 7.92644 14.96 7.99998C14.96 8.07352 14.9455 8.14634 14.9174 8.21428C14.8892 8.28222 14.848 8.34396 14.796 8.39596C14.744 8.44796 14.6823 8.48921 14.6143 8.51735C14.5464 8.54549 14.4735 8.55998 14.4 8.55998H11.52C11.3715 8.55998 11.229 8.50098 11.124 8.39596C11.019 8.29094 10.96 8.1485 10.96 7.99998ZM1.04001 7.99998C1.04001 7.85146 1.09901 7.70902 1.20403 7.604C1.30905 7.49898 1.45149 7.43998 1.60001 7.43998H4.48001C4.55355 7.43998 4.62637 7.45446 4.69431 7.48261C4.76225 7.51075 4.82399 7.552 4.87599 7.604C4.92799 7.656 4.96924 7.71773 4.99738 7.78568C5.02552 7.85362 5.04001 7.92644 5.04001 7.99998C5.04001 8.07352 5.02552 8.14634 4.99738 8.21428C4.96924 8.28222 4.92799 8.34396 4.87599 8.39596C4.82399 8.44796 4.76225 8.48921 4.69431 8.51735C4.62637 8.54549 4.55355 8.55998 4.48001 8.55998H1.60001C1.45149 8.55998 1.30905 8.50098 1.20403 8.39596C1.09901 8.29094 1.04001 8.1485 1.04001 7.99998ZM10.093 10.093C10.145 10.041 10.2068 9.99976 10.2747 9.97162C10.3427 9.94347 10.4155 9.92898 10.489 9.92898C10.5625 9.92898 10.6354 9.94347 10.7033 9.97162C10.7712 9.99976 10.833 10.041 10.885 10.093L12.9214 12.1295C12.9735 12.1815 13.0147 12.2432 13.0429 12.3112C13.071 12.3791 13.0855 12.4519 13.0855 12.5255C13.0855 12.599 13.071 12.6718 13.0429 12.7398C13.0147 12.8077 12.9735 12.8694 12.9214 12.9214C12.8695 12.9734 12.8077 13.0147 12.7398 13.0428C12.6718 13.071 12.599 13.0855 12.5255 13.0855C12.452 13.0855 12.3791 13.071 12.3112 13.0428C12.2433 13.0147 12.1815 12.9734 12.1295 12.9214L10.093 10.8849C10.041 10.8329 9.99979 10.7712 9.97165 10.7033C9.9435 10.6353 9.92902 10.5625 9.92902 10.489C9.92902 10.4154 9.9435 10.3426 9.97165 10.2747C9.99979 10.2067 10.041 10.145 10.093 10.093ZM3.07857 3.07854C3.13056 3.02653 3.19229 2.98528 3.26023 2.95714C3.32817 2.92899 3.40099 2.9145 3.47453 2.9145C3.54807 2.9145 3.62089 2.92899 3.68882 2.95714C3.75676 2.98528 3.81849 3.02653 3.87049 3.07854L5.90697 5.11502C5.95897 5.16701 6.00023 5.22874 6.02837 5.29668C6.05652 5.36462 6.071 5.43744 6.071 5.51098C6.071 5.58452 6.05652 5.65733 6.02837 5.72527C6.00023 5.79321 5.95897 5.85494 5.90697 5.90694C5.85497 5.95894 5.79324 6.0002 5.7253 6.02834C5.65737 6.05649 5.58455 6.07097 5.51101 6.07097C5.43747 6.07097 5.36465 6.05649 5.29671 6.02834C5.22877 6.0002 5.16704 5.95894 5.11505 5.90694L3.07857 3.87046C3.02656 3.81846 2.98531 3.75673 2.95717 3.68879C2.92902 3.62085 2.91454 3.54804 2.91454 3.4745C2.91454 3.40096 2.92902 3.32814 2.95717 3.2602C2.98531 3.19226 3.02656 3.13053 3.07857 3.07854Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default React.memo(Loading)

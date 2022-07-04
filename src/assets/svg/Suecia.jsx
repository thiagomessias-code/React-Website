import * as React from "react"

const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={85.333}
    height={85.333}
    viewBox="0 0 64 64"
    {...props}
  >
    <path d="M1.2 12.2c-.7.7-1.2 4.2-1.2 8.5V28h20V11h-8.8c-5.5 0-9.2.4-10 1.2zM27 19.5V28h37v-7.3c0-4.3-.5-7.8-1.2-8.5-.8-.8-6.4-1.2-18.5-1.2H27v8.5zM0 43.3c0 4.3.5 7.8 1.2 8.5.8.8 4.5 1.2 10 1.2H20V36H0v7.3zM27 44.5V53h17.3c12.1 0 17.7-.4 18.5-1.2.7-.7 1.2-4.2 1.2-8.5V36H27v8.5z" />
  </svg>
)

export default SvgComponent
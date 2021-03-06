import * as React from "react"

const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={70}
    height={60}
    {...props}
  >
    <g data-name="&lt;Grupo&gt;">
      <text
        style={{
          fill: "#fbfbfb",
          textAnchor: "middle",
          fontSize: 29,
          fontFamily: "Quentin_Pro",
        }}
        transform="matrix(.829 0 0 .76 -6595.414 -6099.42)"
      >
        <tspan x={0}>{"Realizar"}</tspan>
      </text>
      <text
        style={{
          fontSize: 10,
          fontFamily: "&quot",
          textTransform: "uppercase",
          fill: "#fbfbfb",
          textAnchor: "middle",
        }}
        transform="matrix(.829 0 0 .76 -6595.414 -6099.42)"
      >
        <tspan x={0}>{"Empr\xE9stimo"}</tspan>
      </text>
    </g>
    <image
      data-name="&lt;Elipse&gt;\xA0+\xA0&lt;Caminho&gt;\xA0+\xA0&lt;Caminho&gt;\xA0+\xA0&lt;Caminho&gt;\xA0+\xA0&lt;Caminho&gt;\xA0+\xA0&lt;Caminho&gt;\xA0+\xA0&lt;Caminho&gt;\xA0+\xA0&lt;Caminho&gt;"
      x={11}
      y={6}
      width={48}
      height={44}
      xlinkHref="data:img/png;base64,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"
    />
  </svg>
)

export default SvgComponent

import React from 'react';

const KelvinConvert = ({kelvin}) => {
  const convertKelvinToFahrenheit = kelvin => (kelvin - 273.15) * 9/5 + 32;
  return kelvin ? <li>{convertKelvinToFahrenheit(kelvin).toFixed(2)}&deg;F</li> : "";
}

export default KelvinConvert;
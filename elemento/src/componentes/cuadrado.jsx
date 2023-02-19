import React, {useState} from 'react'

function Cuadrado() {

  const [color, setColor] = useState('#000000');

  const [manageInterval, setManageInterval] = useState(0);
 
  // eslint-disable-next-line no-unused-vars
  const [dobleClick, setDobleClick] = useState(0);

  const getColor = () => Math.floor(Math.random() * 256);

  const colorRandom = (red, green, blue) => {
    return (
      '#' +
      [red, green, blue]
        .map((c) => {
          const hex = c.toString(16);
          return hex.length === 1 ? '0' + hex : hex;
        })
        .join('')
    );
  };

  const generarRGB = () => {
    const rgb = {
      r: getColor(),
      g: getColor(),
      b: getColor(),
    };
    return setColor(colorRandom(rgb.r, rgb.g, rgb.b));
  };

  const cambiarColor = () => {
    return setManageInterval(setInterval(generarRGB, 500));
  };

  const detenerColor = () => {
    return clearInterval(manageInterval);
  };

  const onClickChangeColor = () => {
    return clearInterval(manageInterval);
  };
    
    return (

      <div className='contenedor'>
        <div className='acciones'
          onMouseOver={cambiarColor}
          onMouseLeave={detenerColor}
          onDoubleClick={onClickChangeColor} 
          style={{ width: '255px', height: '255px', backgroundColor: color, margin: 'auto' }}>
      </div>
    </div>
  )
}

export default Cuadrado;


import React, { useEffect, useState } from 'react'

const RandomColor = () => {

  const [typeColor, setTypeColor] = useState('hex')
  const [color, setColor] = useState('#000000')

  function randomColorUtility(length) {
    return Math.floor(Math.random()*length)
  }


  const handleCreateHexRandomColor = () => {
    const hex = '0123456789ABCDEF'
    let randomColor = '#'
    for (let i = 0; i < 6; i++) {
      randomColor += hex[randomColorUtility(hex.length)]
    }
    setColor(randomColor)
  }

  const handleCreateRgbRandomColor = () => {
    let r = randomColorUtility(256)
    let g = randomColorUtility(256)
    let b = randomColorUtility(256)

    setColor(`rgb(${r}, ${g}, ${b})`)
  }
  useEffect(() => {
    if (typeColor === 'hex') handleCreateHexRandomColor();
    else handleCreateRgbRandomColor();
  }, [typeColor])


  return (
    <div style={
      {
        height: '100vh',
        backgroundColor: color
      }
    }>
      <div className="btns">
        <button onClick={()=> setTypeColor('hex')}>Create HEX Color</button>
        <button onClick={()=> setTypeColor('rgb')}>Create RGB Color</button>
        <button onClick={typeColor === 'hex' ? handleCreateHexRandomColor : handleCreateRgbRandomColor}>Generate Random Color</button>
      </div>
      <div style={
        {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '3.125rem',
          color: 'white',
          fontSize: '3.75rem'
        }
      }>
        <h3>{typeColor === 'hex' ? 'Hex Color': 'RGB Color'}</h3>
        <h1>{color}</h1>        
      </div>
    </div>
  )
}

export default RandomColor
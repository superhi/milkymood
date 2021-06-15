import React, {useState} from 'react'
import {Panel, ColorInput, InputContainer, Arrow} from './styles'

const ColorPicker = ({textColor, setTextColor, wrapperColor, setWrapperColor}) => {
  const [showColorPicker, setShowColorPicker] = useState(false)

  return (
    <Panel $isOpen={showColorPicker} $color={wrapperColor}>
      <Arrow
        onClick={() => setShowColorPicker((showColorPicker) => !showColorPicker)}
        $isOpen={showColorPicker}
        $color={textColor}
      />
      <InputContainer $color={textColor}>
        <p>Background: </p>
        <ColorInput
          type="color"
          value={wrapperColor}
          onChange={(event) => setWrapperColor(event.target.value)}
        />
        <p>Text: </p>
        <ColorInput
          type="color"
          value={textColor}
          onChange={(event) => setTextColor(event.target.value)}
        />
      </InputContainer>
    </Panel>
  )
}
export default ColorPicker

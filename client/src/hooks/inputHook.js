import { useState, } from 'react'

function useInput ({defaultValue ='', type = 'text', name="", id ="imput"}){
const [value, setValue ] = useState(defaultValue)

function handleText(event){
    setValue(event.target.value)
}

function handleClear() {
    setValue('')
  }

  function getValue() {
    return value
  }

return({
    handleText,
    handleClear,
    getValue,
    attrs: {
        value,
        type,
        name,
        id
    }
})

}

export default useInput;
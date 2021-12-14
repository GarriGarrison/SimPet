
function Input({ id, name, value, type, handleText, defaultValue}){
    return(
    <div key={id}>
      <imput type={type} onChange={handleText} value={value} name={name}/>
    </div>
    )
}
export default Input;
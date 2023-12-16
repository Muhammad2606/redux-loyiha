const Input = ({Label,state,setState, type = 'text'}) => {
  return (
    <div>
        <div className="form-floating">
      <input type={type}
    value={state}
    onChange={e => setState(e.target.value)}
       className="form-control mt-2"  placeholder={Label}/>
      <label htmlFor="floatingInput">{Label}</label>
    </div>
    </div>
  )
}

export default Input
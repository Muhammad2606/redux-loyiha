
const Textarea = ({ Label, state, setState, height= '100px' }) => {
    return (
        <div>
            <div className="form-floating">
                <textarea value={state} onChange={e => setState(e.target.value)} style={{height}} className="form-control" placeholder={Label} id="floatingTextarea2" ></textarea>
                <label htmlFor="floatingTextarea2">{Label}</label>
            </div>
        </div>
    )
}

export default Textarea
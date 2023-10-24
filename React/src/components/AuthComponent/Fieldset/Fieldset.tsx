interface FieldsetsProps {
    inputType: string;
    labelFor: string;
    inputId: string;
    labelText: string;
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Fieldsets: React.FC<FieldsetsProps> = (props) => {
    return (
        <fieldset className="inputContainer">
            <input type={props.inputType} id={props.inputId} placeholder=" " value={props.value} onChange={props.onChange}/>
            <label htmlFor={props.labelFor}>{props.labelText}</label>
        </fieldset>
    );
}

export default Fieldsets;
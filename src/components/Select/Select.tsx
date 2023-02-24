import "./select.css";

export default function Select(props: any) {
    console.log(props);
    return (
      <div className="select">
        <label>{props.labelName}</label>
        <select name={props.selectName}></select>
      </div>
    );
  }
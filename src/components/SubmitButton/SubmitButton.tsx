import "./submitButton.css";
export default function Button(props: any) {
  console.log(props);
  return (
    <div className="button ">
      <input className="ml-auto width-50" type="submit" value={props.buttonValue} />
    </div>
  );
}

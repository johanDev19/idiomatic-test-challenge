import Card from "../common/Card/Card";
import Input from "../common/Input";
import Label from "../common/Label/Label";
import styles from "./form.module.css";

function Form() {
  return (
    <Card className={styles.formContainer}>
      <div className="flex">
        <Label>Filter prefix:</Label>
        <Input />
      </div>
      <div className="flex justify-between">
        <textarea />
        <div className="flex flex-col items-end">
          <div>
            <Label>Name:</Label>
            <Input />
          </div>
          <div>
            <Label>Surname:</Label>
            <Input />
          </div>
        </div>
      </div>
      <div className="flex justify-start gap-4">
        <button>Create</button>
        <button>Update</button>
        <button>Delete</button>
      </div>
    </Card>
  );
}

export default Form;

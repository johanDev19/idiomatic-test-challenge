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
      <div>
        <textarea />
        <div>
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
      <div>
        <button>Create</button>
        <button>Update</button>
        <button>Delete</button>
      </div>
    </Card>
  );
}

export default Form;

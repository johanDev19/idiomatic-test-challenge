import { useState } from "react";
import classNames from "classnames";

import Button from "../common/Button";
import Card from "../common/Card";
import Input from "../common/Input";
import Label from "../common/Label";
import Select from "../common/Select";
import styles from "./form.module.css";

const NAME = "name";
const SURNAME = "surname";

function Form() {
  const [canUpdate, setCanUpdate] = useState(false);
  const [canDelete, setCanDelete] = useState(false);
  const [canCreate, setCanCreate] = useState(false);
  const [name, setName] = useState("");
  const [surname, setSurName] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === NAME) {
      setName(value);

      if (value.length > 0) {
        setCanUpdate(true);
        setCanDelete(true);
        setCanCreate(true);
      } else {
        setCanUpdate(false);
        setCanDelete(false);
        setCanCreate(false);
      }
    } else if (name === SURNAME) {
      setSurName(value);
    }
  };

  return (
    <Card className={classNames(styles.formContainer, "shadow-md")}>
      <div className="flex grow">
        <Label className="mr-3">Filter prefix:</Label>
        <Input className="grow" />
      </div>
      <div className="mt-4 columns-2 gap-8">
        <Select multiple className="grow">
          <option>Polar Bear</option>
          <option>Black Bear</option>
          <option>Brown Bear</option>
          <option>Grizzly Bear</option>
        </Select>
        <div className="flex flex-col items-end">
          <div className="flex justify-between w-full">
            <Label className={styles.label}>Name:</Label>
            <Input
              className="w-full"
              name={NAME}
              value={name}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex mt-2 w-full justify-between">
            <Label className={classNames(styles.label)}>Surname:</Label>
            <Input
              className="w-full"
              name={SURNAME}
              value={surname}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-start gap-4 mt-4">
        <Button disabled={!canCreate} color="#6ee7b7">
          Create
        </Button>
        <Button disabled={!canUpdate} color="#fce689">
          Update
        </Button>
        <Button disabled={!canDelete} color="#f9a6a5">
          Delete
        </Button>
      </div>
    </Card>
  );
}

export default Form;

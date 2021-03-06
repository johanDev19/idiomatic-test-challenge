import { useEffect, useState } from "react";
import classNames from "classnames";
import { v4 as uuidv4 } from "uuid";

import Button from "../common/Button";
import Card from "../common/Card";
import Input from "../common/Input";
import Label from "../common/Label";
import Select from "../common/Select";
import styles from "./form.module.css";
import {
  getLocalStoreValue,
  setLocalStoreValue,
} from "../../utils/helper-function";

const NAME = "name";
const SURNAME = "surname";

function Form() {
  const [canUpdate, setCanUpdate] = useState(false);
  const [canDelete, setCanDelete] = useState(false);
  const [name, setName] = useState("");
  const [surname, setSurName] = useState("");
  const [list, setList] = useState([]);
  const [listFiltered, setListFiltered] = useState([]);
  const [optionSelected, setOptionSelected] = useState();
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const listLocalStorage = getLocalStoreValue("list") || [];
    updateList(listLocalStorage);
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === NAME) {
      setName(value);
    } else if (name === SURNAME) {
      setSurName(value);
    }
  };

  const handleCreateButtonClick = () => {
    if (name.length === 0 || surname.length === 0) {
      return;
    }

    const newItem = {
      id: uuidv4(),
      label: `${name} ${surname}`,
      value: `${name}_${surname}`,
    };

    updateList([...list, newItem]);
    emptyInputs();
    setOptionSelected();
  };

  const handdleUpdateButtonClick = () => {
    if (!optionSelected) {
      return;
    }

    const newList = list.map((item) => {
      if (item.id === optionSelected.id) {
        return {
          ...item,
          label: `${name} ${surname}`,
          value: `${name}_${surname}`,
        };
      }
      return item;
    });

    updateList(newList);

    emptyInputs();
    setOptionSelected();
  };
  const handleDeleteButtonClick = () => {
    if (!optionSelected) {
      return;
    }

    const newList = list.filter((item) => item.id !== optionSelected.id);
    updateList(newList);

    emptyInputs();
    setOptionSelected();
  };

  const handleSelectChange = (event) => {
    event.preventDefault();
    const { selectedOptions } = event.target;
    const option = list.find((item) => item.id === selectedOptions[0].id);
    const optionSplit = option.label.split(" ");

    const optionName = optionSplit[0];
    const optionSurname = optionSplit[1];

    setName(optionName);
    setSurName(optionSurname);
    setOptionSelected(option);
    enableUpdateAndDeleteButtons();
  };

  const handleFilterChange = (event) => {
    const value = event.target.value;
    setFilter(value);

    if (value.length === 0) {
      setListFiltered(list);
      return;
    }

    const newList = list.filter((item) => {
      const itemSplit = item.label.split(" ");
      const itemSurName = itemSplit[1];

      if (itemSurName.includes(value)) {
        return item;
      }
    });

    setListFiltered(newList);
  };

  const enableUpdateAndDeleteButtons = () => {
    setCanUpdate(true);
    setCanDelete(true);
  };

  const emptyInputs = () => {
    setName("");
    setSurName("");
  };

  const updateList = (options) => {
    setListFiltered(options);
    setList(options);
    setLocalStoreValue("list", options);
  };

  return (
    <Card className={classNames(styles.formContainer, "shadow-md")}>
      <div className="flex grow items-center">
        <Label className="mr-3">Filter prefix:</Label>
        <Input
          className="grow"
          name="filter"
          value={filter}
          onChange={handleFilterChange}
        />
      </div>
      <div className="mt-4 columns-2 gap-8">
        <Select
          name="list"
          className="grow"
          options={listFiltered}
          onChange={handleSelectChange}
        />
        <div className="flex flex-col items-end">
          <div className="flex justify-between w-full items-center">
            <Label className={styles.label}>Name:</Label>
            <Input
              className="w-full"
              name={NAME}
              value={name}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex mt-2 w-full justify-between items-center">
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
        <Button color="#6ee7b7" onClick={handleCreateButtonClick}>
          Create
        </Button>
        <Button
          disabled={!canUpdate}
          color="#fce689"
          onClick={handdleUpdateButtonClick}
        >
          Update
        </Button>
        <Button
          disabled={!canDelete}
          color="#f9a6a5"
          onClick={handleDeleteButtonClick}
        >
          Delete
        </Button>
      </div>
    </Card>
  );
}

export default Form;

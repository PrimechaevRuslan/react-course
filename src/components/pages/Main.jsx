import React, { useState } from "react";
import Foot from "../views/global/Foot";
import css from "../../styles/form.css";
import InputComponent from "../comps/InputComponent";

const { FormContainer, Button } = css;

const Main = (props) => {
  const {action} = props;

  const [value, setValue] = useState('');
  const [type, setType] = useState("");
  const [comment, setComment] = useState("");

  const validation = () => {
    if (value.length > 2 && type) {
      console.log("Validation passed");

      const dataLine = `${value}::${type}::${comment}`
      action(
        prev => [...prev, dataLine]
      )

      setValue('');
      setType('');
      setComment('');
    } else {
      console.log("Validation failed");
    }

  };

  return (
    <React.Fragment>
      <FormContainer>
        <InputComponent
          inputValue={value}
          action={setValue}
          placeholder={"Введите сумму транзакции"}
        />
        <InputComponent
          inputValue={type}
          action={setType}
          placeholder={"Введите тип транзакции"}
        />
        <InputComponent
          inputValue={comment}
          action={setComment}
          placeholder={"Введите комментарий"}
        />
        <Button
          backgroundColor={
            value.length < 3 ?
              "rgb(229, 229, 229)" :
              type.length < 3 ?
                "rgb(229, 229, 229)" :
                "rgb(128, 243, 71)"
          }
          onClick={validation}
        >
          Сохранить транзакцию
        </Button>
      </FormContainer>
      <Foot></Foot>
    </React.Fragment>
  );
};

export default Main;
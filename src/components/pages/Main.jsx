import React, { useEffect } from "react";
import Foot from "../views/global/Foot";
import css from "../../styles/form.css";
import InputComponent from "../comps/InputComponent";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { changeViewType, changeValue, changeComment } from "../../redux-state/reducers/view-type-for-main";
import { useSelector, useDispatch } from "react-redux";

const { FormContainer, Button } = css;

const Main = (props) => {
  const { action } = props;

  const dispatch = useDispatch();
  const viewType = useSelector(state => state.viewTypeMain.viewType);
  const viewValue = useSelector(state => state.viewTypeMain.value);
  const viewComment = useSelector(state => state.viewTypeMain.comment);

  const validation = () => {
    if (viewValue.length > 2 && viewType) {
      console.log("Validation passed");

      const dataLine = `${viewValue}::${viewType}::${viewComment}`
      action(
        prev => [...prev, dataLine]
      )

      dispatch(changeValue(('')));
      dispatch(changeViewType(('доход')));
      dispatch(changeComment(('')));
    } else {
      console.log("Validation failed");
    }



  };

  const handleChange = (event) => {
    dispatch(changeViewType(event.target.value));
  };
  const handleChangeComment = (param) => {
    dispatch(changeComment(param));
  };

  const handleChangeValue = (param) => {
    dispatch(changeValue(param))
  }

  const handleChangeCommentRadio = (event) => {
    dispatch(changeComment(event.target.value))
  }

  useEffect(() => {
    console.log(viewType);
  }, [viewType])

  

  return (
    <React.Fragment>
      <FormContainer style={{ alignItems: 'flex-start'}}> 
        <InputComponent
          inputValue={viewValue}
          action={handleChangeValue}
          placeholder={"Введите сумму транзакции"}
        />
        <FormControl style={{marginTop: '9px', marginBottom: '12px'}}>
          <FormLabel id="demo-controlled-radio-buttons-group">Выберите тип транзакции</FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={viewType}
            onChange={handleChange}
            style={{marginTop: '5px', marginLeft: '6px'}}
          >
            <FormControlLabel value="расход" control={<Radio />} label="Расход" />
            <FormControlLabel value="доход" control={<Radio />} label="Доход" />
          </RadioGroup>
        </FormControl>
        {viewType === "доход" && <InputComponent
          inputValue={viewComment}
          action={handleChangeComment}
          placeholder={"Введите комментарий"}
        />}
        { viewType === "расход" && <FormControl style={{marginTop: '0px', marginBottom: '14px'}}>
          <FormLabel id="demo-controlled-radio-buttons-group">Выберите тип расходов</FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={viewComment}
            onChange={handleChangeCommentRadio}
            style={{marginTop: '5px', marginLeft: '6px'}}
          >
            <FormControlLabel value="покупка продуктов" control={<Radio />} label="Покупка продуктов" />
            <FormControlLabel value="оплата счетов" control={<Radio />} label="Оплата счетов" />
            <FormControlLabel value="покупка одежды" control={<Radio />} label="Покупка одежды" />
            <FormControlLabel value="расходы на транспорт" control={<Radio />} label="Расходы на транспорт" />
            <FormControlLabel value="развлечения" control={<Radio />} label="Развлечения" />
            <FormControlLabel value="путешествия" control={<Radio />} label="Путешествия" />
          </RadioGroup>
        </FormControl> }
        <Button
          backgroundColor={
            viewValue.length < 3 ?
              "rgb(229, 229, 229)" :
              viewType.length < 3 ?
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
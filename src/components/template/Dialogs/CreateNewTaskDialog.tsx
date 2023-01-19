import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField
} from "@mui/material";
import { v4 as uuid4 } from 'uuid';
import { ActionsObject, useNewsSubscribe, useTodos } from "../../../store/global/global.store";
import moment from "moment";
import React, { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import { Space } from "../../atoms/Space/Space";

const CreateNewTaskDialog = () => {
  const [values, setValues] = useState({
    name: '',
    description: '',
  })
  const { data: { addNewTaskModal }, actions: newsSubscribeActions } = useNewsSubscribe();
  const { actions: TodosActions } = useTodos();
  const { setAddNewTaskDialog } = newsSubscribeActions as ActionsObject['dialog'];
  const { addNewTodo } = TodosActions as ActionsObject['todos'];
  const today = moment();
  const [date, setDate] = useState(today);

  function onChangeValues(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, field: string) {
    const { value } = event.target;
    setValues({ ...values, [field]: value });
  }

  function clearState() {
    setValues({ name: '', description: '' })
    setAddNewTaskDialog(false);
  }

  function addNewTodoSuccess() {
    const data = {
      id: uuid4(),
      name: values.name || 'Test',
      description: values.description || 'Test',
      completed: false,
      date: date.format("MM/DD/YYYY"),
    }
    addNewTodo(data);
    clearState();
  }

  return (
    <Dialog
      open={addNewTaskModal}
      onClose={clearState}
    >
      <DialogTitle>Create Task</DialogTitle>
      <DialogContent>
        <Space direction="vertical">
          <TextField
            sx={{ margin: '6px 0' }}
            label="name"
            value={values.name}
            onChange={(e) => onChangeValues(e, 'name')}
          />
          <TextField
            sx={{ margin: '6px 0' }}
            label="description"
            value={values.description}
            onChange={(e) => onChangeValues(e, 'description')}
          />
        </Space>
        <DatePicker
          value={date}
          renderInput={(params) => <TextField sx={{ margin: '6px 0' }} name="date" {...params} />}
          minDate={today}
          onChange={(value) => {
            setDate(moment(value));
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={addNewTodoSuccess}>Add Todo</Button>
        <Button onClick={clearState}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export { CreateNewTaskDialog };
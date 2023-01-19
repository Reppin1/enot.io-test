import React from 'react';
import style from './app.module.css';
import { Header } from "./Header/Header";
import { TasksGroup } from "./TasksGroup/TasksGroup";
import { Dialogs } from "./Dialogs/Dialogs";
import { useGroupTodos } from "../common/hooks/useGroupTodo";
import { Button, Checkbox, Typography } from "@mui/material";
import { ActionsObject, useNewsSubscribe, useUi } from "../store/global/global.store";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { QueryClient, QueryClientProvider } from "react-query";
import { RunningLine } from "../components/molecules/RunningLineNews/RunningLineNews";
import { Space } from "../components/atoms/Space/Space";

const queryClient = new QueryClient();

function App() {
  const { actions: DialogActions } = useNewsSubscribe();
  const { data: { todayTasks }, actions: UiActions } = useUi();
  const { setAddNewTaskDialog } = DialogActions as ActionsObject['dialog'];
  const { setTodayTasks } = UiActions as ActionsObject['ui'];
  const [_, todosChunksByDate] = useGroupTodos({ filter: todayTasks });

  return (
    <QueryClientProvider client={queryClient}>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <main className={style.container}>
          <section className={style.boxItems}>
            <Header />
            <Space direction="horizontal">
              <Checkbox
                checked={todayTasks}
                onClick={() => setTodayTasks(!todayTasks)}
                color="default"
                sx={{
                  '& .MuiSvgIcon-root': { fontSize: 28 },
                  color: '#F4F4F4',
                  borderRadius: '3px',
                  '&.Mui-checked': {
                    color: '#F4F4F4',
                  },
                }}
              />
              <Typography color="white" variant="h4">Today Tasks:</Typography>
            </Space>
            {todosChunksByDate?.map((items: any, index) => <TasksGroup key={index} items={items} />)}
            <Button onClick={() => setAddNewTaskDialog(true)}>Create Todo</Button>
            <RunningLine />
          </section>
          <Dialogs />
        </main>
      </LocalizationProvider>
    </QueryClientProvider>
  );
}

export default App;

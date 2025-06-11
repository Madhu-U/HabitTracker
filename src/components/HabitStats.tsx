import { fetchHabits } from "@/store/slices/habit.slice";
import { AppDispatch, RootState } from "@/store/store";
import { LinearProgress, Paper, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const HabitStats: React.FC = () => {
  const { habits, isLoading, error } = useSelector(
    (state: RootState) => state.habits
  );

  const dispatch = useDispatch<AppDispatch>();

  const completedToday = habits.filter((habit) => {
    const today = new Date().toISOString().split("T")[0];
    return habit.completedDates.includes(today);
  }).length;

  useEffect(() => {
    dispatch(fetchHabits());
  }, []);

  if (isLoading) {
    return <LinearProgress sx={{ mt: 3 }} />;
  }

  if (error) {
    return <Typography color='error'>{error}</Typography>;
  }

  return (
    <>
      <Paper sx={{ mt: 3, p: 2 }}>
        <Typography variant='h5' gutterBottom>
          Habit Stats
        </Typography>
        <Typography variant='body1'>Total Habits:{habits.length}</Typography>
        <Typography variant='body1'>
          Completed Today: {completedToday}
        </Typography>
      </Paper>
    </>
  );
};

export default HabitStats;

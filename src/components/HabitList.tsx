"use client";
import React, { useEffect } from "react";
import {
  Box,
  Button,
  Grid,
  LinearProgress,
  Paper,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { CheckCircle, Delete } from "@mui/icons-material";
import {
  deleteHabit,
  fetchHabits,
  toggleHabitComplete,
} from "@/store/slices/habit.slice";
import { computeStreak } from "@/lib/utils";

const HabitList = () => {
  const { habits } = useSelector((state: RootState) => state.habits);
  const today = new Date().toISOString().split("T")[0];

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchHabits());
  }, [dispatch]);

  return (
    <Box>
      {habits.map((habit) => {
        const streak = computeStreak(habit.completedDates, habit.frequency);
        return (
          <Paper key={habit.id} elevation={3} sx={{ p: 2, mt: 2 }}>
            <Grid container alignItems={"center"} spacing={2}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <Typography variant='h6'>{habit.name}</Typography>
                <Typography
                  variant='body2'
                  color='text.secondary'
                  sx={{ textTransform: "capitalize" }}
                >
                  {habit.frequency}
                </Typography>
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    justifyContent: "space-between",
                  }}
                >
                  <Button
                    variant='outlined'
                    color={
                      habit.completedDates.includes(today)
                        ? "success"
                        : "primary"
                    }
                    startIcon={<CheckCircle />}
                    onClick={() =>
                      dispatch(
                        toggleHabitComplete({ id: habit.id, date: today })
                      )
                    }
                  >
                    {habit.completedDates.includes(today)
                      ? "Completed"
                      : "Mark Complete"}
                  </Button>
                  <Button
                    variant='outlined'
                    color='error'
                    startIcon={<Delete />}
                    onClick={() => dispatch(deleteHabit({ id: habit.id }))}
                  >
                    Delete
                  </Button>
                </Box>
              </Grid>
            </Grid>
            <Box>
              <Typography variant='body2' sx={{ mt: 2 }}>
                Current Streak: {streak} {streak === 1 ? "day" : "days"}
              </Typography>
              <LinearProgress
                variant='determinate'
                value={(streak / 30) * 100}
                sx={{ mt: 1 }}
              />
            </Box>
          </Paper>
        );
      })}
    </Box>
  );
};

export default HabitList;

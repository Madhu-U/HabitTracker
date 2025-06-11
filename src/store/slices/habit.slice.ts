import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Habit {
  id: string;
  name: string;
  frequency: "daily" | "weekly";
  completedDates: string[];
  createdAt: string;
}

interface HabitState {
  habits: Habit[];
  isLoading: boolean;
  error: string | null;
}

const initialState: HabitState = {
  habits: [],
  isLoading: false,
  error: null,
};

export const fetchHabits = createAsyncThunk("habits/fetchHabits", async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const data: Habit[] = [
    {
      id: "1",
      name: "Habit 1",
      frequency: "daily",
      completedDates: ["2023-01-01", "2023-01-02", "2023-01-03", "2025-06-10"],
      createdAt: "2023-01-01T00:00:00.000Z",
    },
    {
      id: "2",
      name: "Habit 2",
      frequency: "weekly",
      completedDates: ["2023-01-01", "2023-01-08", "2023-01-15"],
      createdAt: "2023-01-01T00:00:00.000Z",
    },
  ];
  return data;
});

const habitSlice = createSlice({
  name: "habits",
  initialState,
  reducers: {
    addHabit: (
      state,
      action: PayloadAction<{ name: string; frequency: "daily" | "weekly" }>
    ) => {
      const newHabit: Habit = {
        id: crypto.randomUUID(),
        name: action.payload.name,
        frequency: action.payload.frequency,
        completedDates: [],
        createdAt: new Date().toISOString(),
      };
      state.habits.push(newHabit);
    },
    toggleHabitComplete: (
      state,
      action: PayloadAction<{ id: string; date: string }>
    ) => {
      const habit = state.habits.find(
        (habit) => habit.id === action.payload.id
      );
      if (habit) {
        const index = habit.completedDates.indexOf(action.payload.date);
        if (index !== -1) {
          habit.completedDates.splice(index, 1);
        } else {
          habit.completedDates.push(action.payload.date);
        }
      }
    },
    deleteHabit: (state, action: PayloadAction<{ id: string }>) => {
      state.habits = state.habits.filter(
        (habit) => habit.id !== action.payload.id
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchHabits.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchHabits.fulfilled, (state, action) => {
      state.isLoading = false;
      state.habits = action.payload;
    });
    builder.addCase(fetchHabits.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message || "Failed to fetch habits";
    });
  },
});

export const { addHabit, toggleHabitComplete, deleteHabit } =
  habitSlice.actions;
export default habitSlice.reducer;

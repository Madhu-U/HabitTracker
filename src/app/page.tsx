"use client";
import { Container, Typography } from "@mui/material";
import React from "react";
import AddHabitForm from "@/components/AddHabitForm";
import HabitList from "@/components/HabitList";
import HabitStats from "@/components/HabitStats";

export default function Home(): React.ReactElement {
  return (
    <Container maxWidth={"lg"}>
      <Typography variant='h4' component='h1' align='center'>
        Habit tracker
      </Typography>
      <AddHabitForm />
      <HabitList />
      <HabitStats />
    </Container>
  );
}

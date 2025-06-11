# Habit Tracker

A modern habit tracking application built with Next.js, React, Redux Toolkit, and Material-UI. Track your daily and weekly habits, monitor your progress, and build consistent routines.

## Features

- **Add Custom Habits**: Create habits with daily or weekly frequency
- **Track Progress**: Mark habits as complete and track completion dates
- **Streak Calculation**: Automatically calculate current streaks for each habit
- **Visual Progress**: Progress bars showing streak progress (up to 30 days)
- **Statistics Dashboard**: View total habits and daily completion stats
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Clean interface built with Material-UI components

## Tech Stack

- **Frontend Framework**: Next.js 15.3.3 with React 19
- **State Management**: Redux Toolkit with React-Redux
- **UI Library**: Material-UI (MUI) v7
- **Styling**: Material-UI components with CSS modules
- **Language**: TypeScript
- **Development**: ESLint for code quality

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd habits-tracker
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Usage

### Adding a Habit

1. Enter a habit name in the "Habit Name" field
2. Select frequency (Daily or Weekly)
3. Click "Add Habit" to create your new habit

### Tracking Progress

- Click "Mark Complete" to mark a habit as done for today
- The button will change to "Completed" and turn green
- Click again to unmark if needed

### Viewing Statistics

- Current streak is displayed for each habit
- Progress bar shows streak progress (target: 30 days)
- Stats section shows total habits and today's completions

### Managing Habits

- Use the "Delete" button to remove habits permanently
- Habits are automatically sorted and managed in the Redux store

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page component
├── components/            # React components
│   ├── AddHabitForm.tsx   # Form for adding new habits
│   ├── HabitList.tsx      # Display and manage habits
│   └── HabitStats.tsx     # Statistics dashboard
├── lib/
│   └── utils.ts           # Utility functions (streak calculation)
└── store/                 # Redux store configuration
    ├── slices/
    │   └── habit.slice.ts # Habit state management
    └── store.ts           # Store configuration
```

## Key Features Explained

### Streak Calculation

The app calculates streaks based on consecutive completion dates:

- **Daily habits**: Expects completion every day
- **Weekly habits**: Expects completion every 7 days
- Streaks break if there are gaps longer than expected

### Data Persistence

Currently uses Redux state with sample data. The app includes:

- Mock API simulation with loading states
- Sample habits for demonstration
- Ready for backend integration

## Development

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Quality

- TypeScript for type safety
- ESLint configuration for Next.js
- Consistent component structure with React functional components
- Redux Toolkit for predictable state management

## Future Enhancements

- [ ] Data persistence with local storage or database
- [ ] Habit categories and tags
- [ ] Calendar view for tracking
- [ ] Export/import functionality
- [ ] Habit templates
- [ ] Notifications and reminders
- [ ] Advanced analytics and charts

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you encounter any issues or have questions, please open an issue on the repository.

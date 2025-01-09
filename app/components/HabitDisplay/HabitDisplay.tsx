import classes from "./HabitDisplay.module.css";
import dayjs from "dayjs";
import weekOfYear from "dayjs/plugin/weekOfYear";

dayjs.extend(weekOfYear);

interface HabitDisplayProps {
  habitsPerDay: number[];
  year: number;
}

function splitByModuleSeven<T>(arr: T[]): T[][] {
  const result: T[][] = Array.from({ length: 7 }, () => []);

  arr.forEach((element, index) => {
    result[index % 7].push(element);
  });

  return result;
}

function getWeeksInMonthFromFirstSunday(year: number, month: number): number {
  // Start with the first day of the month
  let date = dayjs(new Date(year, month, 1));

  // Find the first Sunday
  while (date.day() !== 0) {
    // 0 represents Sunday
    date = date.add(1, "day");
  }

  // Get the last day of the month
  const lastDayOfMonth = dayjs(new Date(year, month + 1, 0)); // Last day of the current month

  // Calculate the number of weeks from the first Sunday to the last day of the month
  const daysBetween = lastDayOfMonth.diff(date, "day") + 1; // Include the first Sunday
  const weeks = Math.ceil(daysBetween / 7);

  return weeks;
}

export function HabitDisplay({ habitsPerDay, year }: HabitDisplayProps) {
  const squares = [];
  const noColorSquare = (
    <td>
      <div className={[classes.square, classes.noColor].join(" ")}></div>
    </td>
  );
  let i = 0;
  // add no color square in squares for the days before january 1st
  const firstDay = dayjs(new Date(year, 1, 1)).day();
  for (i; i < firstDay; i++) {
    squares.push(noColorSquare);
  }
  habitsPerDay.forEach((habits) => {
    const color =
      habits === 0
        ? classes.color0
        : habits === 1
        ? classes.color1
        : habits === 2
        ? classes.color2
        : habits === 3
        ? classes.color3
        : classes.color4;
    squares.push(
      <td>
        <div className={[classes.square, color].join(" ")}></div>
      </td>
    );
  });
  // add no color square in squares for the days after december 31st
  const lastDay = dayjs(new Date(year, 12, 31)).day();
  for (i = lastDay + 1; i < 7; i++) {
    squares.push(noColorSquare);
  }
  const squaresByWeek = splitByModuleSeven(squares);

  const colSpan = [];
  for (i = 1; i < 13; i++) {
    const numberOfWeeks = getWeeksInMonthFromFirstSunday(year, i);
    colSpan.push(numberOfWeeks);
  }

  return (
    <table>
      <thead>
        <tr>
          <td></td>
          <td colSpan={colSpan[0]}>Jan</td>
          <td colSpan={colSpan[1]}>Feb</td>
          <td colSpan={colSpan[2]}>Mar</td>
          <td colSpan={colSpan[3]}>Apr</td>
          <td colSpan={colSpan[4]}>May</td>
          <td colSpan={colSpan[5]}>Jun</td>
          <td colSpan={colSpan[6]}>Jul</td>
          <td colSpan={colSpan[7]}>Aug</td>
          <td colSpan={colSpan[8]}>Sep</td>
          <td colSpan={colSpan[9]}>Oct</td>
          <td colSpan={colSpan[10]}>Nov</td>
          <td colSpan={colSpan[11]}>Dec</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <span>Sun</span>
          </td>
          {squaresByWeek[0]}
        </tr>
        <tr>
          <td>Mon</td>
          {squaresByWeek[1]}
        </tr>
        <tr>
          <td>Tue</td>
          {squaresByWeek[2]}
        </tr>
        <tr>
          <td>Wed</td>
          {squaresByWeek[3]}
        </tr>
        <tr>
          <td>Thu</td>
          {squaresByWeek[4]}
        </tr>
        <tr>
          <td>Fri</td>
          {squaresByWeek[5]}
        </tr>
        <tr>
          <td>Sat</td>
          {squaresByWeek[6]}
        </tr>
      </tbody>
    </table>
  );
}

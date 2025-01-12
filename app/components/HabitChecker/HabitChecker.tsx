import {
  ActionIcon,
  Button,
  Checkbox,
  Flex,
  Group,
  Modal,
  Space,
  Stack,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useDisclosure } from "@mantine/hooks";
import { Form } from "@remix-run/react";
import { IconArrowBackUp, IconArrowForwardUp } from "@tabler/icons-react";
import dayjs from "dayjs";
import { useState } from "react";

const habits = [
  { name: "Read", color: "blue", id: "1" },
  { name: "Exercise", color: "green", id: "2" },
  { name: "Meditate", color: "purple", id: "3" },
  { name: "Write", color: "orange", id: "4" },
  { name: "Code", color: "red", id: "5" },
  { name: "Draw", color: "cyan", id: "6" },
];

export function HabitChecker() {
  const [opened, { open, close }] = useDisclosure();
  const [date, setDate] = useState<Date | null>(new Date());
  const habitsInputs = habits.map((habit) => (
    <Checkbox
      label={habit.name}
      key={habit.id}
      id={habit.id}
      name={habit.name}
      value={habit.name}
      size="md"
      iconColor={habit.color}
      color="dark.8"
    />
  ));

  return (
    <>
      <Modal opened={opened} onClose={close} title="Add new Habit">
        <Form>
          <Group justify="center">
            <ActionIcon
              size={36}
              variant="default"
              onClick={() =>
                date ? setDate(dayjs(date).subtract(1, "day").toDate()) : null
              }
            >
              <IconArrowBackUp />
            </ActionIcon>
            <DateInput value={date} onChange={setDate} />
            <ActionIcon
              size={36}
              variant="default"
              onClick={() =>
                date ? setDate(dayjs(date).add(1, "day").toDate()) : null
              }
            >
              <IconArrowForwardUp />
            </ActionIcon>
          </Group>
          <Space h="lg" />
          <Group justify="center">
            <Stack gap="md">{habitsInputs}</Stack>
          </Group>
          <Flex mih={50} justify="flex-end" align="flex-end">
            <Button type="submit" variant="filled">
              Update
            </Button>
          </Flex>
        </Form>
      </Modal>

      <Button onClick={open} variant="filled">
        Check Habit
      </Button>
    </>
  );
}

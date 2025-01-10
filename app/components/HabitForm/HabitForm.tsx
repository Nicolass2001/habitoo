import {
  Button,
  ColorInput,
  Flex,
  Modal,
  Select,
  TextInput,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Form } from "@remix-run/react";

export function HabitForm() {
  const [opened, { open, close }] = useDisclosure();

  return (
    <>
      <Modal opened={opened} onClose={close} title="Add new Habit">
        <Form>
          <TextInput
            label="Habit name"
            description="Name of the habit you want to track"
            placeholder="Read a book"
          />
          <ColorInput
            label="Color"
            description="Pick color that will help you to recognize habit"
            placeholder="Pick color"
          />
          <Select
            label="Expected frequency"
            description="How often do you want to perform this habit?"
            placeholder="Select frequency"
            data={["Daily", "Weekly", "Monthly"]}
          />
          <Flex mih={50} justify="flex-end" align="flex-end">
            <Button type="submit" variant="filled">
              Add Habit
            </Button>
          </Flex>
        </Form>
      </Modal>

      <Button onClick={open} variant="filled">
        Add Habit
      </Button>
    </>
  );
}

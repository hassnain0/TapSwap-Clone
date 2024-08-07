import { Task } from "./task"

export function Tasks() {
  return (
    <ul className="flex flex-col gap-2.5 mt-4 mb-1">
      {Array.from({ length: 10 }).map((_, index) => (
        <Task
          key={index}
          title="Invite 3 friends"
          value="50 000"
        />
      ))}
    </ul>
  )
}

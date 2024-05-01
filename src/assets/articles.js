import { nanoid } from "nanoid";

export const data = [
  {
    id: nanoid(),
    title: "React is ease",
    body: ` Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem provident optio non nemo ipsa. Sunt nulla neque voluptatibus sapiente possimus.`,
    createdAt: Date.now(),
    author: "Terry",
  },
  {
    id: nanoid(),
    title: "CSS is ease",
    body: ` CSS ipsum dolor sit amet consectetur, CSS elit. Exercitationem provident optio non nemo ipsa. Sunt nulla neque voluptatibus sapiente possimus.`,
    createdAt: Date.now(),
    author: "Perry",
  },
];

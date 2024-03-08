// export default function Todo({ task, isDone }) {
//   if (isDone) {
//     return <li>Finished : {task}</li>;
//   } else {
//     return <li>Work On: {task}</li>;
//   }
// }

// conditional rendering with ternary operator

// export default function Todo({ task, isDone }) {
//   return (
//     <li>
//       {isDone ? "Done" : "Work On"} : {task}
//     </li>
//   );
// }

// conditional rendering 4 : &&

// export default function Todo({ task, isDone }) {
//   return (
//     <li>
//       {task} : {isDone && "Done"}
//     </li>
//   );
// }

// conditional rendering 5 : ||
// export default function Todo({ task, isDone }) {
//   return (
//     <li>
//       {task} : {isDone || "Do it"}
//     </li>
//   );
// }

// conditional rendering 6
export default function Todo({ task, isDone }) {
  let listItems;
  if (isDone) {
    listItems = <li> Doner Baccha Done: {task}</li>;
  } else {
    listItems = <li>Work Kor ekhon: {task}</li>;
  }

  return listItems;
}

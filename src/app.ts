// project setup

const message = "Hello Typescript";
const message2 = "Tata Javascript";
// console.log(message, message2, language);

const useState = <T>(initialValue: T) => {
  let state = initialValue;
  const setter = (value: T) => {
    state = value;
  };
  return [state, setter] as const;
};

type User1 = { name: string };

const [count, setCount] = useState({} as User1);

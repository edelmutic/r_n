import React, { FC, useState } from 'react';

// interface EventsExampleProps {}

const EventsExample: FC = () => {
  const [value, setValue] = useState<string>('');
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const clickHandler = (e: React.MouseEvent) => {
    console.log(value);
  };
  return (
    <div>
      <input type="text" value={value} onChange={changeHandler} />
      <button onClick={clickHandler}>Button</button>
      <div
        onDrag={dragHandler}
        draggable
        style={{ width: 200, height: 200, background: 'red' }}
      ></div>
      <div>
        onDrop={dropHandler}
        onDragLeave={leaveHandler}
        onDragOver={dragWithPreventHandler}
        style=
        {{
          width: 200,
          height: 200,
          background: isDrag ? 'blue' : 'red',
          marginTop: 15,
        }}
      </div>
    </div>
  );
};

export default EventsExample;

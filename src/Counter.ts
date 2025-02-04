import { m } from 'umai';

export const Counter = () => {
  let num = 0;

  return () => (
    m('div',
      m('h2', 'Counter'),
      m('h3', num),
      m('button', { onclick: () => num += 1 }, 'Increment'),
      m('button', { onclick: () => num -= 1 }, 'Decrement')
    )
  );
};

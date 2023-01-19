import { useMemo } from 'react';
import moment from 'moment';
import { useTodos } from 'store/global/global.store';

const splitIntoChunks = <Item extends { [key: string]: any }>(
  array: Item[],
  propName: keyof Item
) => {
  return array.reduce<Map<string, Item[]>>((acc, el) => {
    const value = el[propName];
    const list = acc.get(value) || [];

    list.push(el);

    acc.set(value, list);

    return acc;
  }, new Map());
};

const useGroupTodos = ({ filter }: { filter: boolean }) => {
  const { data } = useTodos();

  const today = moment().format('MM/DD/YYYY');
  const todosMap = useMemo(() => splitIntoChunks(data, 'date'), [data]);

  const todaysTodos = todosMap.get(today);

  const todosChunksByDate = useMemo(() => {
    let list = Array.from(todosMap).sort((a, b) => {
      return moment(a[0]).diff(moment(b[0]));
    });

    if (filter) {
      list = list.filter(([date]) => date === today);
    }

    return list;
  }, [todosMap, todaysTodos, today, filter]);

  return [todaysTodos, todosChunksByDate]
};

export { useGroupTodos }
import moment from "moment";

export function formatName(name: string) {
  const today = moment().format('l');
  if (moment(today).diff(moment(name), 'days') === 0) {
    return 'Today'
  }
  if (moment(today).diff(moment(name), 'days') === -1) {
    return 'Tomorrow'
  }
  return moment(name).format("DD/MM");
}
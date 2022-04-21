export type RandomType = 'normal' | 'medium' | 'short' | number;

export default function random(type: RandomType = 'normal') {
  let string = '';
  // if (type === 'normal') string += Date.now().toString();
  if (typeof type === 'number') {
    string += Math.random()
      .toString(36)
      .substring(2, type + 2);
  }
  if (type === 'normal' || type === 'medium')
    string += Math.random().toString(36).substring(2, 12);
  if (type === 'normal' || type === 'medium' || type === 'short')
    string += Math.random().toString(36).substring(2, 8);
  return string.toString();
}

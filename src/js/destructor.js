export default function extractProps(object) {
  const { special } = object;
  const attacks = Array.from(Object.values(special));
  attacks.forEach(attack => {
    if (!attack.description) {
      attack.description = 'Описание недоступно';
    }
  })
  return attacks;
}

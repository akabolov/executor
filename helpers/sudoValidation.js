export const sudoValidation = (command) => {
  if (command.split(' ')[0] === 'sudo') throw 'no sudo please';
};

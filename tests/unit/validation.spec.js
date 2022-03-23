import { sudoValidation } from '../../helpers/sudoValidation';
describe('Validation tests', () => {
  it('Should sudo-validate', () => {
    const maliciousCommand = 'sudo rm -rf /';
    expect(() => {
      sudoValidation(maliciousCommand);
    }).toThrow('no sudo please');
  });
});

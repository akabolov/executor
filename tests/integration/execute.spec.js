import request from 'supertest';

import { app } from '../../app.js';

describe('POST /command', () => {
  it('Should return command execution result', async () => {
    const response = await request(app)
      .post('/execute')
      .send({ command: 'echo test' });

    expect(response.status).toEqual(200);
    expect(response.body.result).toEqual('test\n');
  });

  it('Should return error if malicious command provided', async () => {
    const response = await request(app)
      .post('/execute')
      .send({ command: 'sudo ls -la' });

    expect(response.status).toEqual(500);
    expect(response.body.error).toEqual('no sudo please');
  });

  it('Should return error if command is not valid', async () => {
    const response = await request(app)
      .post('/execute')
      .send({ command: 'qweoisdkljfh' });

    expect(response.status).toEqual(500);
    expect(response.body.error).toBeDefined();
  });
});

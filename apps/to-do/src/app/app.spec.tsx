import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render } from '@testing-library/react';

import App from './app';

const server = setupServer(
  rest.get('/', (req, res, ctx) => {
    return res(ctx.status(200));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('App', () => {
  it('should render successfully', () => {
    global['fetch'] = jest.fn().mockResolvedValueOnce({
      json: () => ({
        lists: [],
      }),
    });
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    global['fetch'] = jest.fn().mockResolvedValueOnce({
      json: () => ({
        lists: [],
      }),
    });

    const { getByText } = render(<App />);

    expect(getByText('Welcome to the basic ToDo App')).toBeTruthy();
  });
});

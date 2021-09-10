import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render } from '@testing-library/react';

import ToDo from './to-do';

const server = setupServer(
  rest.get('/', (req, res, ctx) => {
    return res(ctx.status(200));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('ToDo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ToDo />);
    expect(baseElement).toBeTruthy();
  });
});

describe('NoLists', () => {
  it('should display empty lists text', () => {
    global['fetch'] = jest.fn().mockResolvedValueOnce({
      json: () => ({
        lists: [],
      }),
    });
    const { baseElement } = render(<ToDo />);
    expect(baseElement.getElementsByTagName('h1')[0].textContent).toEqual(
      'Create a list to get started!'
    );
  });
});

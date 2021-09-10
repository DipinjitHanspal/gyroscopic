import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render } from '@testing-library/react';

import  { ListComponent } from './list';

const server = setupServer(
  rest.get('/', (req, res, ctx) => {
    return res(ctx.status(200));
  })
);

beforeAll(() => server.listen());
afterEach(() =>
{
  server.resetHandlers();
});
afterAll(() => server.close());


describe('List', () => {
  it('should render successfully', () => {
    global['fetch'] = jest.fn().mockResolvedValueOnce({
      json: () => ({
        title: "test",
        items: []
      }),
    });
    const { baseElement } = render(<ListComponent id="1" />);
    expect(baseElement).toBeTruthy();
  });
});

describe('List', () => {
  it('should set input title successfully', () => {
    global['fetch'] = jest.fn().mockResolvedValueOnce({
      json: () => ({
        title: "test",
        items: []
      }),
    });
    const { baseElement } = render(<ListComponent id="1" />);
    expect(baseElement.getElementsByTagName('input')[0].checkValidity()).toBeTruthy();
  });
});

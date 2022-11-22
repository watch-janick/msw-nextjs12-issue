import { rest } from 'msw'

export const handlers = [
  rest.get('http://localhost:4000/users', (_req, res, ctx) =>
    res(
      ctx.json({
        users: [
          {
            id: 1,
            firstName: 'John',
            lastName: 'Maverick',
            email: 'johnmaverick@email.com',
          },
          {
            id: 2,
            firstName: 'Jane',
            lastName: 'Maverick',
            email: 'janemaverick@email.com',
          },
        ],
      }),
    ),
  ),
]

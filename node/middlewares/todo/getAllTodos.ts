export async function getAllTodos(ctx: Context, next: () => Promise<any>) {
  ctx.status = 200
  ctx.body = {
    data: [
      { id: 123456, description: 'Fazer alguma coisa' },
      { id: 987654, description: 'Fazer outra coisa' },
    ],
  }
  ctx.set('Cache-Control', 'no-cache')

  await next()
}

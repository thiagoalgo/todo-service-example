import parser from 'co-body'

export async function createTodo(ctx: Context, next: () => Promise<any>) {
  const data = await parser(ctx.req)

  // TODO chamar masterdata para salvar
  data.id = 656565

  ctx.status = 200
  ctx.body = data
  ctx.set('Cache-Control', 'no-cache')

  await next()
}

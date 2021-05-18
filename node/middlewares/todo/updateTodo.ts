import parser from 'co-body'

export async function updateTodo(ctx: Context, next: () => Promise<any>) {
  const { id } = ctx.vtex.route.params

  console.info('ID: ', id)

  const data = await parser(ctx.req)

  // TODO chamar masterdata para salvar
  data.id = id

  ctx.status = 200
  ctx.body = data
  ctx.set('Cache-Control', 'no-cache')

  await next()
}

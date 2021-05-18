export async function getTodo(ctx: Context, next: () => Promise<any>) {
  const { id } = ctx.vtex.route.params

  console.info('ID: ', id)

  // TODO: buscar dados no masterdata

  ctx.status = 200
  ctx.body = { id: 123456, description: 'Fazer alguma coisa' }
  ctx.set('Cache-Control', 'no-cache')

  await next()
}

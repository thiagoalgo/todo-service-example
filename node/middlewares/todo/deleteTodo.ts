export async function deleteTodo(ctx: Context, next: () => Promise<any>) {
  const { id } = ctx.vtex.route.params

  console.info('ID: ', id)

  // TODO: excluir dados no masterdata

  ctx.status = 200
  ctx.body = { id }
  ctx.set('Cache-Control', 'no-cache')

  await next()
}

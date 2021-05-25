export async function deleteTodo(ctx: Context, next: () => Promise<any>) {
  const {
    clients: { todo: todoClient },
  } = ctx

  const { id } = ctx.vtex.route.params

  await todoClient.delete(id as string)

  ctx.status = 200
  ctx.body = { id }
  ctx.set('Cache-Control', 'no-cache')

  await next()
}

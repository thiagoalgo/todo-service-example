import { MasterData } from '@vtex/api'

import type { TodoInput } from '../typings/todoInput'

export default class Todo extends MasterData {
  public async get(id: string): Promise<any> {
    const resp = await this.getDocument({
      dataEntity: 'thiagotodo',
      fields: ['_all'],
      id,
    })

    return resp
  }

  public async getAll() {
    const resp = await this.searchDocumentsWithPaginationInfo({
      dataEntity: 'thiagotodo',
      schema: 'thiagotodo',
      fields: ['_all'],
      pagination: {
        page: 1,
        pageSize: 50,
      },
    })

    return resp
  }

  public async create(todoInput: TodoInput) {
    const resp = await this.createDocument({
      dataEntity: 'thiagotodo',
      schema: 'thiagotodo',
      fields: todoInput,
    })

    return resp
  }

  public async update(id: string, todoInput: TodoInput) {
    await this.updatePartialDocument({
      dataEntity: 'thiagotodo',
      fields: todoInput,
      id,
    })

    return { id, ...todoInput }
  }

  public async delete(id: string) {
    await this.deleteDocument({
      dataEntity: 'thiagotodo',
      id,
    })
  }
}

import TodoModel from '@/models/domain/TodoModel'
import service from '@/services/service'

// jest.mock('@/services/service')

describe('TodoModel', () => {
  let todoModel: TodoModel

  beforeEach(() => {
    todoModel = new TodoModel(service)
    todoModel.load()
  })

  test('아이템을 잘 로드하는가', () => {
    expect(todoModel.todoList).toHaveLength(4)
  })

  test('아이템 하나 추가되는지', async () => {
    await todoModel.create({ id: '5', title: '할일5' })

    expect(todoModel.todoList).toHaveLength(5)
    expect(todoModel.todoList.at(-1)!.title).toBe('할일5')
  })

  test('아이템 한개 삭제되는지', async () => {
    await todoModel.delete({ id: '3', title: '할일3' })

    expect(todoModel.todoList).toHaveLength(3)
    expect(todoModel.todoList.filter((item) => item.id === '3')).not.toHaveLength(1)
  })

  test('아이템 수정', () => {})

  test('아이템 전체 삭제', () => {})
})

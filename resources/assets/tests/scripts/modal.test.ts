import $ from 'jquery'
import { act } from 'react-dom/test-utils'
import { trans } from '@/scripts/i18n'
import { showModal } from '@/scripts/modal'

test('show modal', async () => {
  process.nextTick(() => {
    expect(
      document.querySelector('.modal-title')!.textContent,
    ).toBe(trans('general.tip'))
    document.querySelector<HTMLButtonElement>('.btn-primary')!.click()
  })
  const { value } = await showModal()
  expect(value).toBe('')

  act(() => {
    $('.modal').trigger('hidden.bs.modal')
    jest.runAllTimers()
  })
  expect(document.querySelector('.modal')).toBeNull()
})

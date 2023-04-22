export function getFormData (event, filedname) {
  event.preventDefault()
  const form = event.target
  const formData = new FormData(form)

  if (filedname === 'message') form.reset()

  return formData.get(filedname)
}

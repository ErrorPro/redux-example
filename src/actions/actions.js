export function add(name) {
  return {
    type: 'ADD',
    name
  }
}

export function remove(id) {
  return {
    type: 'DELETE',
    id
  }
}

export function star(id) {
  return {
    type: 'STAR',
    id
  }
}

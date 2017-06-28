const ADD_ENTITIES = 'ADD_ENTITIES'

// ------------------------------------
// Actions
// ------------------------------------
const addEntities = (entities) => ({
  type: ADD_ENTITIES,
  payload: entities
})

export { ADD_ENTITIES, addEntities }

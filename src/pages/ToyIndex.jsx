import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { loadToys }    from '../store/actions/toy.actions.js'
import { showErrorMsg } from '../services/event-bus.service.js'

export function ToyIndex() {
  const toys      = useSelector(state => state.toyModule.toys)
  const [filterBy, setFilterBy] = useState({})

  useEffect(() => {
    loadToys(filterBy).catch(() => showErrorMsg('Cannot load toys'))
  }, [filterBy])

  if (!toys) return <div>Loading…</div>

  return (
    <section className="toy-index">
      {/* <ToyFilter filterBy={filterBy} onSetFilterBy={setFilterBy} /> */}
      <h2>Toys</h2>
      <ul>
        {toys.map(toy => (
          <li key={toy._id}>
            {toy.name} – ${toy.price}
          </li>
        ))}
      </ul>
    </section>
  )
}

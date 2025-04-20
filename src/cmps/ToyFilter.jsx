import { useState, useEffect } from 'react'

export function ToyFilter({ filterBy, onSetFilter, toyLabels }) {

    const [filterByToEdit, setFilterByToEdit] = useState({ ...filterBy })

    useEffect(() => {
        onSetFilter(filterByToEdit)
    }, [filterByToEdit])

    function handleChange({ target }) {
        let { value, name: field, type } = target
        if (field === 'inStock') {
            value = value === '' ? undefined : value === 'true'
        }
        if (target.multiple) {
            value = [...target.selectedOptions].map(opt => opt.value)
        }
        setFilterByToEdit(prev => ({ ...prev, [field]: value }))
    }


    const { name = '', inStock, labels = [] } = filterByToEdit

    return (
        <section className="toy-filter container">
            <h3>Toys Filter / Sort</h3>

            <form className="filter-form flex align-center">
                <input
                    type="text"
                    name="name"
                    placeholder="Search by name"
                    value={name}
                    onChange={handleChange}
                />

                <select name="inStock"
                    value={inStock === undefined ? '' : inStock}
                    onChange={handleChange}>
                    <option value="">All</option>
                    <option value="true">In stock</option>
                    <option value="false">Out of stock</option>
                </select>

                {toyLabels && (
                    <select
                        multiple
                        name="labels"
                        value={labels}
                        onChange={handleChange}>
                        {toyLabels.map(lb => (
                            <option key={lb} value={lb}>{lb}</option>
                        ))}
                    </select>
                )}
            </form>

            {/* <ToySort sortBy={sortBy} onSetSort={onSetSort} /> */}
        </section>
    )
}

import { useEffect, useState } from "react";


export function ToySort({ sortBy, onSetFilter }) {

    const [sortByToEdit, setSortByToEdit] = useState({ ...sortBy })

    useEffect(() => {
        onSetFilter(prevFilter => ({
            ...prevFilter,
            sortBy: sortByToEdit.type,
            sortDir: sortByToEdit.sortDir
        }))
    }, [sortByToEdit])

    function handleChange({ target }) {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value

        setSortByToEdit(prevSort => ({
            ...prevSort,
            [field]: field === 'sortDir' ? -prevSort.sortDir : value,
        }))
    }

    return (
        <form className="toy-sort">

            <select name="type" value={sortByToEdit.type} onChange={handleChange}>
                <option value="">Sort by</option>
                <option value="name">Name</option>
                <option value="price">Price</option>
            </select>

            <label>
                <input type="checkbox" name="sortDir" checked={sortByToEdit.sortDir < 0} onChange={handleChange} />
                <span>Descending</span>
            </label>

        </form>
    )

}
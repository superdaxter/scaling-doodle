import React from "react"
import { useState } from "react"

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [name, setName] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert('Please add task')
            return
        }

        onAdd({ text, name, reminder })

        setText('')
        setName('')
        setReminder(false)
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Text</label>
                <input type='text' placeholder="Add Text"
                    value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Name</label>
                <input type='text' placeholder="Add Name"
                    value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="form-control-check">
                <label>Set Reminder</label>
                <input type='checkbox' checked={reminder}
                    value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>

            <input type='submit' value='Save Task' className="btn btn-block" />
        </form>
    )
}

export default AddTask
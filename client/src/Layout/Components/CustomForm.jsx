import React, { useState, useEffect } from "react"

export default function CustomForm({ status, message, onValidated }) {
    const [formData, setFormData] = useState({
      email: "",
      name: ""
    })

    // clear the form if successful
    useEffect(() => {
      if (status === "success") clearFields()
    }, [status])
    const clearFields = () => {setFormData({
      email: "",
      name: ""
    })}

    const handleChange = ({ target }) => {
      setFormData({
        ...formData,
        [target.name]: target.value,
      })
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      formData.email &&
      formData.name &&
      onValidated({
        EMAIL: formData.email,
        NAME: formData.name,
      })
    }

    return (
      <div className="form-block-2">
        <form onSubmit={handleSubmit}>
          <p data-aos="fade-up">
            {status === "success"
              ? "Success!"
              : "Get promotions & updates!"
            }
          </p>
          {status === "sending" && (
            <div className="mini-title py-2">
              sending...
            </div>
          )}
          {status === "error" && (
            <div 
              className="mini-title py-2"
              dangerouslySetInnerHTML={{ __html: message }}
            />
          )}
          {status === "success" && (
            <div
              className="mini-title py-2"
              dangerouslySetInnerHTML={{ __html: message }}
            />
          )}

          <input
            onChange={handleChange}
            type="email"
            name="email"
            value={formData.email}
            placeholder="email"
            className="input"
            isRequired
          />

          <input
            onChange={handleChange}
            type="text"
            name="name"
            value={formData.name}
            placeholder="your name"
            className="input"
            isRequired
          />

          <button
            label="subscribe">
              Subscribe!
          </button>

        </form>
      </div>
    )
}
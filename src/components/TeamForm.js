import React, { useState } from 'react';

const TeamForm = ({ addNewTeam }) => {
    const [member, setMember] = useState({
        name: "",
        email: "",
        role: ""
    })

    const handleChanges = event => {
        setMember({ ...member, [event.target.name]: event.target.value });
    };

    const submitForm = event => {
        event.preventDefault();

        addNewTeam(member);

        setMember({ name: "", email: "", role: "" });
    };
    console.log("member state", member);

    return (
        <form onSubmit={submitForm}>
            <label htmlFor="name">Name</label>
            <input
                id="name"
                type="text"
                name="name"
                onChange={handleChanges}
                value={member.name}
            />

            <label htmlFor="email">Email</label>
            <input
                id="email"
                type="text"
                name="email"
                onChange={handleChanges}
                value={member.email}
            />

            <label htmlFor="role">Role</label>
            <input
                id="role"
                type="text"
                name="role"
                onChange={handleChanges}
                value={member.role}
            />
            <button type="submit">Submit</button>
        </form>
    )
}

export default TeamForm;
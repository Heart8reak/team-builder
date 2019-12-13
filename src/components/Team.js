import React from "react";

const Team = props => {
    return (
        <div className="team-list">
            {props.members.map(member => (
                <div className="team" key={member.id}>
                    <h2>{member.name}</h2>
                    <h2>{member.email}</h2>
                    <h2>{member.role}</h2>
                </div>
            ))}
        </div>
    );
};

export default Team;
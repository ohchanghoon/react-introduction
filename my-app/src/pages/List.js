import React from 'react';

const User = ({ userData }) => {
    return (
        <tr>
            <td>{userData.name}</td>
            <td>{userData.email}</td>
        </tr>
    );
};

const UserList = () => {
    const users = [
        { email: 'ryu@gmail.com', name: '재석' },
        { email: 'kim@gmail.com', name: '종국' },
        { email: 'lee@gmail.com', name: '광수' },
        { email: 'song@gmail.com', name: '지효' },
    ];

    return (
        <table>
            <thead>
                <tr>
                    <th>이름</th>
                    <th>이메일</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <User userData={user} />
                ))}
            </tbody>
        </table>
    );
};

export default UserList;

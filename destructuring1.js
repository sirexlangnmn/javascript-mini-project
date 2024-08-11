const users = [
    {
        id: 1,
        name: { first: 'john', last: 'doe' },
        contact: {email: 'john.doe@example.com', phone: '123-456-7890' }
    },
    {
        id: 2,
        name: { first: 'Jane', last: 'Smith' },
        contact: { email: 'jane.smith@example.com', phone: '987-654-3210' }
    },
    {
        id: 3,
        name: { first: 'Mike', last: 'Johnson' },
        contact: { email: 'mike.johnson@example.com', phone: '555-123-4567' }
    },
    {
        id: 4,
        name: { first: 'Brian', last: 'Pogi' },
        contact: { email: 'brian.johnson@example.com', phone: '555-123-4567' }
    },
    {
        id: 5,
        name: { first: 'Yams', last: 'Gwapingz' },
        contact: { email: 'yams.johnson@example.com', phone: '555-123-4567' }
    }
]


const formatUserDetails = ({ id, name: { first, last }, contact: { email, phone } }) => `
    User ID: ${id}
    Full Name: ${first} ${last}
    Email: ${email}
    Phone: ${phone}
`;

const processUsers = users => {
    console.log(`users1 ::: `, users)
    return users.map(user => {
        const userDetails = formatUserDetails(user);
        console.log(`userDetails ::: `, userDetails)
        return userDetails;

    });
}


const getFirstUser = ([firstUser]) => {
    const { name: { first, last } } = firstUser;
    console.log(`First User is: ${first} ${last}`);
    return `First User is: ${first} ${last}`;
}


// Get the first user's name
const getFirstUserV2 = users => {
    const { first, last } = users[0].name;
    const firstUserName = `First User is: ${first} ${last}`;
    console.log(firstUserName);
    return firstUserName;
};


const getSecondAndThirdUsers = ([, secondUser, thirdUser]) => {
    const { name: { first: first2, last: last2 } } = secondUser;
    const { name: { first: first3, last: last3 } } = thirdUser;
    console.log(`Second User is: ${first2} ${last2}`);
    console.log(`Third User is: ${first3} ${last3}`);

    return [
        `Second User is: ${first2} ${last2}`,
        `Third User is: ${first3} ${last3}`
    ]
}

const getUserByIndex = (users, index) => {
    const { first, last } = users[index].name;
    const firstUserName = `User at index ${index} is: ${first} ${last}`;
    console.log(firstUserName);
    return firstUserName
};

const getUsersByIndices = (users, indices) => {
    const selectedUsers = indices.map(index => {
        const { first, last } = users[index].name;
        return `User at index ${index} is: ${first} ${last}`;
    });

    selectedUsers.map(user => console.log(user));
    return selectedUsers;
};


const usersByIndicesData = getUsersByIndices(users, [3, 4]);
const usersByIndexData = getUserByIndex(users, 4);


console.log(`processUsers ::: `, processUsers(users))
console.log(`getFirstUser ::: `, getFirstUser(users))
console.log(`getFirstUserV2 ::: `, getFirstUserV2(users))
console.log(`getSecondAndThirdUsers ::: `, getSecondAndThirdUsers(users))
console.log(`usersByIndicesData ::: `, usersByIndicesData)
console.log(`usersByIndexData ::: `, usersByIndexData)
export function configureFakeBackend() {
    const users = [
        {firstName: "Testf 1", lastName: "TestL 1", email: 'test1@gmail.com', password:'test1'},
        {firstName: "Testf 2", lastName: "TestL 2", email: 'test2@gmail.com', password:'test2'},
        {firstName: "Testf 3", lastName: "TestL 3", email: 'test3@gmail.com', password:'test3'},
        {firstName: "Testf 4", lastName: "TestL 4", email: 'test4@gmail.com', password:'test4'},
        {firstName: "Testf 4", lastName: "TestL 4", email: 'test5@gmail.com', password:'test5'},
        {firstName: "Testf 4", lastName: "TestL 4", email: 'test6@gmail.com', password:'test6'},
    ]
    let realFetch = window.fetch;
    window.fetch = function (url, opts) {
        return new Promise((resolve, reject) => {
            // wrap in timeout to simulate server api call
            setTimeout(() => {

                // authenticate
                if (url.endsWith('/users/authenticate') && opts.method === 'POST') {
                    // get parameters from post request
                    let params = JSON.parse(opts.body);
                    // find if any user matches login credentials
                    let filteredUsers = users.filter(user => {
                        return user.email === params.email && user.password === params.password;
                    });

                    if (filteredUsers.length) {
                        // if login details are valid return user details and fake jwt token
                        let user = filteredUsers[0];
                        let responseJson = {
                            id: user.id,
                            username: user.username,
                            firstName: user.firstName,
                            lastName: user.lastName,
                            token: 'fake-jwt-token'
                        };
                        resolve({ok: true, text: () => Promise.resolve(JSON.stringify(responseJson))});
                    } else {
                        // else return error
                        reject('Email or password is incorrect');
                    }

                    return;
                }

                // get users
                if (url.endsWith('/users') && opts.method === 'GET') {
                    // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                    if (opts.headers && opts.headers.Authorization === 'Bearer fake-jwt-token') {
                        resolve({ok: true, text: () => Promise.resolve(JSON.stringify(users))});
                    } else {
                        // return 401 not authorised if token is null or invalid
                        reject('Unauthorised');
                    }

                    return;
                }

                // add user
                if (url.endsWith('/users/add') && opts.method === 'POST') {
                    // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                    if (opts.headers && opts.headers.Authorization === 'Bearer fake-jwt-token') {

                        let params = JSON.parse(opts.body);
                        const userMaxId = users.reduce(function (prev, current) {
                            return (prev.id > current.id) ? prev : current
                        })
                        params['id'] = userMaxId.id + 1
                        users.push(params)

                        let responseJson = {
                            id: params.id,
                            username: params.username,
                            firstName: params.firstName,
                            lastName: params.lastName,
                        };
                        resolve({ok: true, text: () => Promise.resolve(JSON.stringify(responseJson))});
                    } else {
                        // return 401 not authorised if token is null or invalid
                        reject('Unauthorised');
                    }

                    return;
                }

                // pass through any requests not handled above
                realFetch(url, opts).then(response => resolve(response));

            }, 500);
        });
    }
}
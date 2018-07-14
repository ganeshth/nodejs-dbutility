module.exports = {
    html: {
        header_text: "Output from multiple DB servers"
    },
    outputfile_name: "output.html"
    databases: ["DB1","DB2","DB3","DB4","DB11"],
    //databases: ["local_database","local_database2"],
    sql: "SELECT * FROM employee",
    local_database: {
        user: 'username_goeshere',
        password: 'password_goeshere',
        connectString: '<only sid or service name>'
    },
    local_database2: {
        user: 'username_goeshere',
        password: 'password_goeshere',
        connectString: '<only sid or service name>'
    },
    DB1: {
        user: 'username_goeshere',
        password: 'password_goeshere',
        connectString: '<db1>:1521/<sid/service>'
    },
    DB2: {
        user: 'username_goeshere',
        password: 'password_goeshere',
        connectString: '<db1>:1521/<sid/service>'
    },
    DB3: {
        user: 'username_goeshere',
        password: 'password_goeshere',
        connectString: '<db1>:1521/<sid/service>'
    },
    DB4: {
        user: 'username_goeshere',
        password: 'password_goeshere',
        connectString: '<db1>:1521/<sid/service>'
    },
    DB11: {
        user: 'username_goeshere',
        password: 'password_goeshere',
        connectString: '<db1>:1521/<sid/service>'
    }
};
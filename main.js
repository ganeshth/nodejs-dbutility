/**
*
*	Authored by ganeshtmv@gmail.com
*   Authored on 28-May-2018
*
**/
var oracledb = require('oracledb');
var config = require('./config.js');
var outfile_name = 'output_file.html'
var fs = require('fs');
var databses_count = config.databases.length;

function init() {
    for (var i = 0; i < databses_count; i++) {
        //Writing to file
        if (i === 0) {
            start_content = "<html><head>\n<style>table { font-family: arial, sans-serif; border-collapse: collapse; width: 100%; font-size: 14px;} td, th { border: 1px solid #dddddd; text-align: left; padding: 8px; } tr:nth-child(even) { background-color: #dddddd;}\n</style>\n<title>Interfaces Connections Information</title></head>\n<body>\n";
            start_content += "<h2>"+config.html.header_text+"</h2>";
            fs.writeFile(outfile_name, start_content);
        }
        getData(config.databases[i]);
        if (i === databses_count - 1) {
            end_tags = "</body></html>";
            fs.appendFile(outfile_name, end_tags);
        }
    }
}

function getData(db_name) {
    oracledb.getConnection(
        config[db_name],
        function (err, connection) {
            if (err) {
                console.log(err);
            }
            connection.execute(
                config.sql,
                {},//no binds
                {
                    outFormat: oracledb.OBJECT
                },
                function (err, results) {
                    if (err) {
                        connection.release(function (err) {
                            if (err) {
                                console.error(err.message);
                            }
                        });

                        console.log(err);
                    }
                    console.log("Writing contents for " + db_name);
                    setTableContent(db_name, results);

                    connection.close(function (err) {
                        if (err)
                            console.error(err.message);
                    });
                }
            );
        }
    );
}


function setTableContent(db_name, result) {
    var content = "";

    content += "<table><tbody>";
    content += "<h2>" + db_name + "</h2>\n";
    var count = parseInt(result.rows.length);
    var columnNamesArray;
    var columnValuesArray;

    var tr = "<tr>";
    var th = "<tr>";
    for (i = 0; i < count; i++) {
        columnNamesArray = result.metaData;
        columnValuesArray = result.rows[i];
        for (j = 0; j < columnNamesArray.length; j++) {
            if (i == 0) {
                th += "<th>" + columnNamesArray[j].name + "</th>";
            }
            tr = tr + "<td>" + columnValuesArray[columnNamesArray[j].name] + "</td>";
        }
        if (i == 0) {
            content += th + "</tr>";
        }

        content += tr + "</tr>\n";
        tr = "<tr>";
    }
    content += "\n</tbody></table>";
    fs.appendFile(outfile_name, content);
}


init();
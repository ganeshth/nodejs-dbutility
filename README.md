# nodejs-dbutility

### Description:
This is the nodejs utility, which can connect to multiple databases one after the other, run the provided query
and returns the output in the form of a html file. The utility also open the newly created html file in web browser, saving few more clicks :grin:

This was written using official oracledb module and proudly uploaded to github :octocat:

### Prerequisites:
The script was created with a windows executable, so obviously you will need a windows system to run it :wink: 

The other things to be changed are:
- [x] Database configuration primarily, json needs to be changed in the **config.js** file.
- [x] Databases list needs to be changed as required. 
- [ ] Query as required.
- [ ] Output File name as required.

### Execution:
The batch file **main.bat** is the starting point for the executing the script. 
it contains two commands 
- Generating the html file.
- Opening the newly generated file.

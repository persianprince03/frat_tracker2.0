const express = require('express')
const app = express()
const port = 3001
const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'docker',
    port: 5432,
});

app.get('/', (req, res) => {
    res.status(200).send('Hello World!');
})


const getMembers = async () => {
    try {
        return await new Promise(function (resolve,reject){
            pool.query("SELECT * FROM members" ,(error, results) => {
                if (error) {
                    reject(error);
                }
                if (results && results.rows) {
                    resolve(results.rows);
                } else {
                    reject(new Error("No results found"));
                }
            });
        });
    }catch (error_1) {
        console.error(error_1);
        throw new Error("Internal server error");
}






const addMember = (fname, lname,pin,email,emergencyPhoneNum, major, gpa, status, dob, big, chapter) => {
    return new Promise(function (resolve, reject) {
        pool.query(
            "INSERT INTO TABLE members (FName,Lname,PinNum,Email,EmergencyPhoneNum,Major,GPA,Status,DOB,BigBrother,ChapterName) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)",
            [fname,lname,pin,email,emergencyPhoneNum, major, gpa, status, dob, big, chapter],
            (error, results) => {
                if (error) {
                    reject(error);
                }
                resolve(`Member ${fname} ${lname} has been added to the database`);
            }
        );
    });
};



const addChapter = (chapterName, university, chapterStatus) => {
    return new Promise(function (resolve,reject){
        pool.query(
            "INSERT INTO TABLE chapter VALUES ($1, $2, $3)",
            [chapterName, university, chapterStatus ],
            (error,results) =>{
                if (error) {
                    reject(error);
                }
                resolve(`Chapter ${chapterName} has been added to the Database`)
            }
        )
    })
}

const addOfficer = (title, term, memberID) =>{
    return new Promise(function (resolve, reject){
        pool.query(
            "INSERT INTO TABLE officers VALUES ($1, $2, $3)",
            [title, term, memberID],
            (error, results)=>{
                if (error){
                    reject(error)
                }
                resolve(`Officer ${title} has been added`)
            }
        )
    })
}


const addCommitteeMember=(term, committee, memberID)=>{
    return new Promise(function (resolve,reject){
      pool.query(
          "INSERT INTO TABLE committeeMembers VALUES ($1, $2,$3)",
          [term, committee, memberID],
          (error,result) => {
              if (error){
                  reject(error)
              }
              resolve(`Committee ${committee}has been updated`)
          }
      )
    })
}

const addAward=(awardName, date, chapterName) =>{
       return new Promise( function (resolve,reject){
           pool.query(
               "INSERT INTO TABLE awards VALUES ($1, $2, $3)",
               [awardName,date,chapterName],
               (error, result )=>{
                   if (error){
                       reject(error)
                   }
                   resolve(`Award ${awardName} has been added for ${chapterName} Chapter`)
           }
           )
       })
}


const addSocialMedia = (socialPlatform, link, MemberID) => {
    return new Promise(function (resolve,reject){
        pool.query(
            'INSERT INTO TABLE socialMedia VALUES ($1, $2, $3)',
            [socialPlatform, link, MemberID],
            (error, result) =>{
                if (error){
                reject(error)
            }
            resolve(`${socialPlatform} link for Member ${MemberID} has beem added`)
        }
    )
    })
}

const addChapterTransaction = (description, transactionDate, amount,partyEnvolved ) => {
    return new Promise( function (resolve, reject) {
        pool.query(
            'INSERT INTO TABLE chapterTransactions (Description, Date, Amount, name) VALUES  VALUES ($1, $2, $3, $4)',
            [description, transactionDate, amount,partyEnvolved],

            (error, result) => {
                if (error){
                    reject(error)
                }
                resolve('Transaction data has been added')
            }
        )
    })
}

const addMemberTransaction = (description, amount,transactionsDate,memberID) => {
    return new Promise(function (resolve,reject) {
        pool.query(
            'INSERT INTO TABLE memberTransactions (Description, Amount, Date) VALUES ($1, $2, $3)',
            [description, amount,transactionsDate],

            (error, result) => {
                if (error){
                    reject(error)
                }
                resolve('Transaction has been added')
            }
        )
    })
}

const vaultStatus = (chapterName) => {
    return new Promise(function (resolve,reject){
        pool.query(
            'SELECT * FROM chapterTransactions WHERE ChapterName=$1',
            [chapterName],
            'SELECT SUM(Amount) FROM chapterTransactions',
            (error,results) => {
                if (error){
                    reject(error)
                }
                resolve('Transaction has been added')
            }
        )
    })
}


const memberAcademicAnalyzer=(memberID)=>{
    return new Promise(function (resolve,reject){
        pool.query(
            'SELECT Name, Major, GPA FROM members WHERE MemberID=$1',
            [memberID],
            (error,results) => {
                if (error){
                    reject(error)
                }
                resolve('grades has been retried')
            }

        )
    })
}

const getBig=(memberID)=>{
    return new Promise(function (resolve,reject){
        pool.query(
            'SELECT BigBrother FROM members WHERE MemberID=$1',
            [memberID],
            (error,results) => {
                if (error){
                    reject(error)
                }
                resolve('Big Brother has been retried')
            }

        )
    })
}


const getLittle=(memberID)=>{
    return new Promise(function (resolve,reject){
        pool.query(
            'SELECT Name FROM members WHERE BigBrother=$1',
            [memberID],
            (error,results) => {
                if (error){
                    reject(error)
                }
                resolve('little Brothers has been retried')
            }

        )
    })
}

const memberCard=(memberID) =>{
    return new Promise(function (resolve,reject){
        pool.query(
            'SELECT Name, Major, PINNum, Email, EmergencyPhoneNum, GPA, Status FROM members WHERE MemberID=$1',
            [memberID],
            (error,results) => {
                if (error){
                    reject(error)
                }
                resolve('member has been retried')
            }
        )
    })
}

//update a merchant record

module.exports = {
    memberCard,
    memberAcademicAnalyzer,
    getBig,
    getLittle,
    vaultStatus,
    addMemberTransaction,
    addCommitteeMember,
    addAward,
    addChapter,
    addOfficer,
    addSocialMedia,
    addMember,
    addChapterTransaction,
    getMembers,
}
};
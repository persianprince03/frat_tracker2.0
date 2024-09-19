const express = require("express");
const app = express();
const cors = require("cors")
const pool = require("./server")
const {addChapter, addChapterTransaction} = require("./fratDB");
const {add} = require("nodemon/lib/rules");




app.use(cors());
app.use(express.json()); //req.body

app.post("/test",async (req, res) => {
    try {

        console.log(req.body);

    } catch (err){
        console.error(err.message);
    }
})

app.listen(3002,() => {
    console.log("server has started on port 3001");
})


app.post("/add-member", async(req,res) => {
    try{
    const {fname,lname,pin,email,bigbrother,major,status} = req.body;
    const addNewMember = await pool.query("INSERT INTO members (FName,Lname,PinNum,Email,bigbrother,major,status) VALUES ($1,$2,$3,$4,$5,$6,$7)",
        [fname,lname,pin,email,bigbrother,major,status]
    );
    res.json(addNewMember);
        }catch (err){
        console.error(err.message)
    }
})


app.post("/add-chapter", async (req,res) => {
    try{
        const {chapterName, University, ChapterStatus} = req.body;
        const addChapter = await pool.query("INSERT INTO chapter VALUES ($1, $2, $3)",
            [chapterName, university, chapterStatus ]
        );
        res.json(addChapter);
    }catch (err){
        console.error(err.message)
    }
})


app.post("/add-officer", async (req,res) => {
    try{
        const {title, term, memberID} = req.body;
        const addOfficer = await pool.query("INSERT INTO officers VALUES ($1, $2, $3)",
            [title, term, memberID]
        );
        res.json(addOfficer);
    }catch (err){
        console.error(err.message)
    }
})


app.post("/add-committee-member", async (req,res) => {
    try{
        const {term, committee, memberID} = req.body;
        const addCommitteeMember = await pool.query("INSERT INTO committeeMembers VALUES ($1, $2,$3)",
            [term, committee, memberID]
        );
        res.json(addCommitteeMember);
    }catch (err){
        console.error(err.message)
    }
})


app.post("/add-committee-member", async (req,res) => {
    try{
        const {term, committee, memberID} = req.body;
        const addCommitteeMember = await pool.query("INSERT INTO committeeMembers VALUES ($1, $2,$3)",
            [term, committee, memberID]
        );
        res.json(addCommitteeMember);
    }catch (err){
        console.error(err.message)
    }
})

app.post("/add-award", async (req,res) => {
    try{
        const {awardName, date, chapterName} = req.body;
        const addAward = await pool.query("INSERT INTO awards VALUES ($1, $2, $3)",
            [awardName, date, chapterName]
        );
        res.json(addAward);
    }catch (err){
        console.error(err.message)
    }
})


app.post("/add-social-media", async (req,res) => {
    try{
        const {socialPlatform, link, MemberID} = req.body;
        const addSocialMedia = await pool.query( 'INSERT INTO socialMedia VALUES ($1, $2, $3)',
            [socialPlatform, link, MemberID]
        );
        res.json(addSocialMedia);
    }catch (err){
        console.error(err.message)
    }
})



app.post("/add-chapter-transaction", async (req,res) => {
    try{
        const today = new Date()
        const {description, amount,} = req.body;
        const addChapterTransaction = await pool.query( 'INSERT INTO chapterTransactions (Description, Date, Amount, chaptername) VALUES  ($1, $2, $3, $4)',
            [description, today, amount,'alpha delta'],
        );
        res.json(addChapterTransaction);
    }catch (err){
        console.error(err.message)
    }
})


app.post("/add-member-transaction", async (req,res) => {
    try{
        const {description, transactionDate, amount,memberID} = req.body;
        const addMemberTransaction = await pool.query( 'INSERT INTO chapterTransactions (Description, Date, Amount, memberid) VALUES  ($1, $2, $3, $4)',
            [description, transactionDate, amount,memberID],
        );
        res.json(addMemberTransaction);
    }catch (err){
        console.error(err.message)
    }
})


app.get("/get-members", async (req,res) => {
    try {
        const getMembers = await pool.query('SELECT * FROM members');
        res.json(getMembers.rows)
    }catch (err){
        console.error(err.message)
    }
})


app.get("/get-members/:id", async (req,res) => {
    try {
        const { id } = req.params;
        const getAMember = await pool.query('SELECT * FROM members WHERE pinnum = $1' , [id]);
        res.json(getAMember.rows[0]);
    }catch (err) {
        console.error(err.message);
    }
})

app.get("/get-littles/:id", async (req,res) => {
    try {
        const { id } = req.params;
        const getAMember = await pool.query('SELECT * FROM members where bigbrother = $1' , [id]);
        res.json(getAMember.rows);
    }catch (err) {
        console.error(err.message);
    }
})

app.post("/add-grades", async (req,res) => {
    try{
        const {courseID, className, grade,memberID} = req.body;
        const addGrade = await pool.query("INSERT INTO coursestaken VALUES ($1, $2,$3,$4)",
            [courseID, className,grade, memberID]
        );
        res.json(addGrade);
    }catch (err){
        console.error(err.message)
    }
})


app.get("/get-chapter-transaction/", async (req,res) => {
    
    try {
        const getMembertrans = await pool.query('SELECT * FROM chaptertransactions');
        res.json(getMembertrans.rows)
    }catch (err){
        console.error(err.message)
    }
})

app.get("/get-member-grades/:id", async (req,res) => {
    
    try {
        const { id } = req.params;
        const getMembertrans = await pool.query('SELECT * FROM coursestaken WHERE memberid = $1',[id]);
        res.json(getMembertrans.rows)
    }catch (err){
        console.error(err.message)
    }
})
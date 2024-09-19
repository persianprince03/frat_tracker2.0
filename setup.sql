CREATE TABLE chapter(Name varchar(255) PRIMARY KEY, University varchar (255), Status varchar(255));
CREATE TABLE members (MemberID SERIAL PRIMARY KEY, PinNum integer, Email varchar(255), EmergencyPhoneNum integer, Major varchar(255), GPA real, Status varchar(255), DOB date, Name varchar(255), BigBrother varchar(255), ChapterName varchar(255));
CREATE TABLE awards (AwardName varchar(255) PRIMARY KEY, Date date, Name varchar(255) REFERENCES chapter ON DELETE CASCADE);
CREATE TABLE chapterTransactions (TransactionID SERIAL PRIMARY KEY, Description varchar(255), Date date, Amount integer, ChapterName varchar(255) REFERENCES chapter(Name) ON DELETE CASCADE, MemberID SERIAL REFERENCES members ON DELETE SET NULL);
CREATE TABLE memberTransactions (TransactionID SERIAL PRIMARY KEY, Description varchar(255), Amount integer, Date date, MemberID SERIAL REFERENCES members ON DELETE CASCADE );
CREATE TABLE coursesTaken (CourseID varchar(255) PRIMARY KEY, ClassName varchar(255), Grade char(1), MemberID SERIAL REFERENCES members ON DELETE CASCADE );
CREATE TABLE committeeMembers(Term varchar(255), Committee varchar(255), MemberID SERIAL REFERENCES members ON DELETE CASCADE);
CREATE TABLE officers(Title varchar(255), Term varchar(255), MemberID SERIAL REFERENCES members ON DELETE CASCADE);
CREATE TABLE socialMedia(Name varchar(255), Link varchar(255), MemberID SERIAL REFERENCES members ON DELETE CASCADE);
